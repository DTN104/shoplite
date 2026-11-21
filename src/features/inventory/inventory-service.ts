import type { Product } from "@/features/catalog/types";
import type { OrderRepository } from "@/features/orders/order-repository";
import { clampStock, computeCurrentStocks } from "./stock-rules";

interface InventoryServiceDeps {
  repository: Pick<OrderRepository, "findAll">;
  /** Nguồn Tồn gốc (catalog tĩnh), truyền qua tham số để test dựng Tồn gốc tùy ý. */
  getBaseProducts: () => Product[];
}

/** Phủ Tồn hiện tại (đọc snapshot ngoài transaction, chặn >= 0) lên `Product.stock`. */
export function createInventoryService({ repository, getBaseProducts }: InventoryServiceDeps) {
  async function withCurrentStock(products: Product[]): Promise<Product[]> {
    const orders = await repository.findAll();
    const current = computeCurrentStocks(products, orders);
    return products.map((product) => ({
      ...product,
      stock: clampStock(current.get(product.id) ?? 0),
    }));
  }

  return {
    withCurrentStock,
    getStockedProducts: () => withCurrentStock(getBaseProducts()),
    async getStockedProductBySlug(slug: string): Promise<Product | undefined> {
      const base = getBaseProducts().find((product) => product.slug === slug);
      return base ? (await withCurrentStock([base]))[0] : undefined;
    },
  };
}

export type InventoryService = ReturnType<typeof createInventoryService>;
