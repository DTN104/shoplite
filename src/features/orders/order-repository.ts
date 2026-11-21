import { AsyncLocalStorage } from "node:async_hooks";
import { promises as fs } from "node:fs";
import path from "node:path";
import type { Order } from "./types";

/** Phạm vi một transaction: thấy snapshot đã commit cộng các `save` của chính nó. */
export interface OrderTransaction {
  findAll(): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
  save(order: Order): Promise<void>;
}

/** Nơi lưu trữ đơn hàng. Có thể thay bằng database thật mà không đổi order-service. */
export interface OrderRepository {
  findAll(): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
  /** Thêm mới hoặc cập nhật (theo id). Tương đương `transaction((tx) => tx.save(order))`. */
  save(order: Order): Promise<void>;
  /**
   * Chạy `work` tuần tự (FIFO) với các transaction khác; các `save` được gom và ghi một lần
   * nguyên tử khi `work` trả về. `work` ném lỗi thì không ghi gì. Trong `work` chỉ dùng `tx`,
   * gọi `save`/`transaction` của repository sẽ ném lỗi lập trình (tránh treo hàng đợi).
   */
  transaction<T>(work: (tx: OrderTransaction) => Promise<T>): Promise<T>;
}

export const DEFAULT_ORDERS_FILE = path.join(process.cwd(), "storage", "orders.json");

interface OrderBackend {
  read(): Promise<Order[]>;
  write(orders: Order[]): Promise<void>;
}

/** Lõi chung cho mọi repository: hàng đợi FIFO + gom ghi nguyên tử + chặn gọi lồng. */
function createTransactionalRepository(backend: OrderBackend): OrderRepository {
  const inTransaction = new AsyncLocalStorage<true>();
  let tail: Promise<unknown> = Promise.resolve();

  function assertNotNested() {
    if (inTransaction.getStore()) {
      throw new Error(
        "Không gọi repository.save/transaction bên trong transaction; hãy dùng `tx` được truyền vào.",
      );
    }
  }

  const repository: OrderRepository = {
    findAll: () => backend.read(),

    async findById(id) {
      return (await backend.read()).find((order) => order.id === id) ?? null;
    },

    save: (order) => repository.transaction((tx) => tx.save(order)),

    transaction<T>(work: (tx: OrderTransaction) => Promise<T>): Promise<T> {
      assertNotNested();
      const run = async (): Promise<T> => {
        const orders = await backend.read();
        let dirty = false;
        const tx: OrderTransaction = {
          async findAll() {
            return [...orders];
          },
          async findById(id) {
            return orders.find((order) => order.id === id) ?? null;
          },
          async save(order) {
            const index = orders.findIndex((item) => item.id === order.id);
            if (index >= 0) orders[index] = order;
            else orders.push(order);
            dirty = true;
          },
        };
        const result = await inTransaction.run(true, () => work(tx));
        if (dirty) await backend.write(orders);
        return result;
      };
      const result = tail.then(run);
      tail = result.catch(() => undefined);
      return result;
    },
  };
  return repository;
}

/** Lưu đơn hàng vào một file JSON - đủ dùng cho môi trường học tập, không dùng cho production. */
export function createJsonFileOrderRepository(filePath: string): OrderRepository {
  return createTransactionalRepository({
    async read() {
      try {
        const data: unknown = JSON.parse(await fs.readFile(filePath, "utf8"));
        return Array.isArray(data) ? (data as Order[]) : [];
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
        throw error;
      }
    },

    async write(orders) {
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      const tempFile = `${filePath}.${process.pid}.${crypto.randomUUID()}.tmp`;
      try {
        await fs.writeFile(tempFile, JSON.stringify(orders, null, 2), "utf8");
        await fs.rename(tempFile, filePath);
      } catch (error) {
        await fs.rm(tempFile, { force: true });
        throw error;
      }
    },
  });
}

/** Repository trong bộ nhớ - dùng cho unit test. */
export function createInMemoryOrderRepository(seed: Order[] = []): OrderRepository {
  let orders = seed.map((order) => structuredClone(order));
  return createTransactionalRepository({
    async read() {
      return orders.map((order) => structuredClone(order));
    },
    async write(next) {
      orders = next.map((order) => structuredClone(order));
    },
  });
}
