import { getCatalogProducts } from "@/features/catalog/catalog-data";
import { orderRepository } from "@/features/orders/server";
import { clampStock, computeCurrentStocks } from "./stock-rules";

/** Tồn hiện tại (đã chặn >= 0) của mọi sản phẩm trong catalog. Chỉ server. */
export async function getCurrentStockMap(): Promise<Record<string, number>> {
  const stocks = computeCurrentStocks(getCatalogProducts(), await orderRepository.findAll());
  return Object.fromEntries([...stocks].map(([id, stock]) => [id, clampStock(stock)]));
}
