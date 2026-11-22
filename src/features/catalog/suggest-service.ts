import { products } from "@/data/products";
import { normalizeText } from "@/lib/format";
import type { Product } from "./types";
import { MAX_SUGGESTIONS, type Suggestion } from "./suggest-limits";

export { MAX_QUERY_LENGTH, MAX_SUGGESTIONS, MIN_QUERY_LENGTH } from "./suggest-limits";
export type { Suggestion } from "./suggest-limits";

/** Còn hàng trước, hết hàng sau; trong mỗi nhóm điểm cao trước, bằng điểm thì nhiều lượt đánh giá trước. */
function compareSuggestions(a: Product, b: Product): number {
  return (
    Number(b.stock > 0) - Number(a.stock > 0) ||
    b.rating - a.rating ||
    b.reviewCount - a.reviewCount
  );
}

/**
 * Gợi ý sản phẩm khi khách đang gõ ở ô tìm kiếm: khớp theo tên và thương hiệu, không dấu.
 * Từ khóa được so như chữ bình thường (includes), không dựng RegExp từ dữ liệu của khách.
 */
export function getSuggestions(query: string, source: Product[] = products): Suggestion[] {
  const keyword = normalizeText(query);
  if (!keyword) return [];

  return source
    .filter((product) => normalizeText(`${product.name} ${product.brand}`).includes(keyword))
    .sort(compareSuggestions)
    .slice(0, MAX_SUGGESTIONS)
    .map((product) => ({
      slug: product.slug,
      name: product.name,
      price: product.price,
      inStock: product.stock > 0,
    }));
}
