// @vitest-environment node
import { mkdtemp, readdir, readFile, rm } from "node:fs/promises";
import fs from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  createInMemoryOrderRepository,
  createJsonFileOrderRepository,
  type OrderRepository,
} from "./order-repository";
import type { Order } from "./types";

const sampleOrder = (id: string): Order => ({
  id,
  status: "pending",
  createdAt: "2026-10-21T03:00:00.000Z",
  updatedAt: "2026-10-21T03:00:00.000Z",
  customer: { fullName: "Lê Văn C", phone: "0901234567", address: "1 Trần Phú, Hà Đông, Hà Nội" },
  shippingMethod: "standard",
  paymentMethod: "cod",
  items: [],
  subtotal: 0,
  shippingFee: 0,
  total: 0,
});

describe("createJsonFileOrderRepository", () => {
  let dir: string;
  let file: string;

  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "shoplite-orders-"));
    file = path.join(dir, "nested", "orders.json");
  });

  afterEach(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  it("trả về danh sách rỗng khi file chưa tồn tại", async () => {
    const repository = createJsonFileOrderRepository(file);
    expect(await repository.findAll()).toEqual([]);
    expect(await repository.findById("SL-1")).toBeNull();
  });

  it("tạo thư mục, ghi file và đọc lại được", async () => {
    const repository = createJsonFileOrderRepository(file);
    await repository.save(sampleOrder("SL-1"));

    const raw = JSON.parse(await readFile(file, "utf8"));
    expect(raw).toHaveLength(1);
    expect(await repository.findById("SL-1")).toMatchObject({ id: "SL-1" });
  });

  it("cập nhật đơn hàng đã tồn tại thay vì thêm bản sao", async () => {
    const repository = createJsonFileOrderRepository(file);
    await repository.save(sampleOrder("SL-1"));
    await repository.save({ ...sampleOrder("SL-1"), status: "cancelled" });

    const orders = await repository.findAll();
    expect(orders).toHaveLength(1);
    expect(orders[0].status).toBe("cancelled");
  });
});

describe.each([
  ["JSON", (file: string) => createJsonFileOrderRepository(file)],
  ["in-memory", () => createInMemoryOrderRepository()],
])("transaction (%s repository)", (_name, create) => {
  let dir: string;
  let file: string;
  let repository: OrderRepository;

  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "shoplite-orders-"));
    file = path.join(dir, "orders.json");
    repository = create(file);
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    await rm(dir, { recursive: true, force: true });
  });

  it("tx thấy dữ liệu đã commit cộng save của chính nó, rồi commit một lần", async () => {
    await repository.save(sampleOrder("SL-1"));
    await repository.transaction(async (tx) => {
      await tx.save(sampleOrder("SL-2"));
      expect((await tx.findAll()).map((o) => o.id)).toEqual(["SL-1", "SL-2"]);
      expect(await tx.findById("SL-2")).not.toBeNull();
      expect(await repository.findById("SL-2")).toBeNull(); // chưa commit
    });
    expect((await repository.findAll()).map((o) => o.id)).toEqual(["SL-1", "SL-2"]);
  });

  it("work ném lỗi thì không ghi gì, lỗi ném lại nguyên vẹn và hàng đợi vẫn chạy", async () => {
    const boom = new Error("boom");
    await expect(
      repository.transaction(async (tx) => {
        await tx.save(sampleOrder("SL-1"));
        throw boom;
      }),
    ).rejects.toBe(boom);
    expect(await repository.findAll()).toEqual([]);
    await repository.save(sampleOrder("SL-2"));
    expect(await repository.findById("SL-2")).not.toBeNull();
  });

  it("10 transaction đồng thời không mất đơn nào, đúng thứ tự gọi (FIFO)", async () => {
    await Promise.all(
      Array.from({ length: 10 }, (_, i) =>
        repository.transaction((tx) => tx.save(sampleOrder(`SL-${i}`))),
      ),
    );
    expect((await repository.findAll()).map((o) => o.id)).toEqual(
      Array.from({ length: 10 }, (_, i) => `SL-${i}`),
    );
  });

  it("hai transaction đọc-sửa-ghi cùng một đơn không thấy dữ liệu cũ của nhau", async () => {
    await repository.save({ ...sampleOrder("SL-1"), total: 0 });
    const bump = () =>
      repository.transaction(async (tx) => {
        const order = (await tx.findById("SL-1"))!;
        await tx.save({ ...order, total: order.total + 1 });
      });
    await Promise.all([bump(), bump(), bump()]);
    expect((await repository.findById("SL-1"))?.total).toBe(3);
  });

  it("gọi save hoặc transaction lồng bên trong work thì ném ngay, không treo", async () => {
    await expect(
      repository.transaction(async () => repository.save(sampleOrder("SL-1"))),
    ).rejects.toThrow(/bên trong transaction/);
    await expect(
      repository.transaction(async () => repository.transaction(async () => 1)),
    ).rejects.toThrow(/bên trong transaction/);
    expect(await repository.transaction(async () => "ok")).toBe("ok");
  }, 2000);
});

describe("createJsonFileOrderRepository - ghi file", () => {
  let dir: string;
  let file: string;

  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "shoplite-orders-"));
    file = path.join(dir, "orders.json");
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    await rm(dir, { recursive: true, force: true });
  });

  it("dùng tên .tmp duy nhất mỗi lần ghi", async () => {
    const renameSpy = vi.spyOn(fs.promises, "rename");
    const repository = createJsonFileOrderRepository(file);
    await repository.save(sampleOrder("SL-1"));
    await repository.save(sampleOrder("SL-2"));
    const temps = renameSpy.mock.calls.map(([from]) => String(from));
    expect(new Set(temps).size).toBe(2);
    for (const t of temps) expect(t).toMatch(/orders\.json\.\d+\.[0-9a-f-]{36}\.tmp$/);
  });

  it("rename lỗi thì xóa .tmp và giữ nguyên file gốc", async () => {
    const repository = createJsonFileOrderRepository(file);
    await repository.save(sampleOrder("SL-1"));
    const before = await readFile(file, "utf8");
    vi.spyOn(fs.promises, "rename").mockRejectedValueOnce(new Error("rename lỗi"));
    await expect(repository.save(sampleOrder("SL-2"))).rejects.toThrow("rename lỗi");
    expect(await readFile(file, "utf8")).toBe(before);
    expect(await readdir(dir)).toEqual(["orders.json"]);
  });
});
