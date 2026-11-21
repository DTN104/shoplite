import { getCatalogProducts } from "@/features/catalog/catalog-data";
import { orderRepository } from "@/features/orders/server";
import { createInventoryService } from "./inventory-service";

/** Instance dùng chung repository với orderService. Chỉ import từ code server. */
export const inventoryService = createInventoryService({
  repository: orderRepository,
  getBaseProducts: getCatalogProducts,
});
