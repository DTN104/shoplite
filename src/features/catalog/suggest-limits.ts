// Hằng và kiểu của gợi ý tìm kiếm dùng chung cho server và Client Component.
// Không import @/data/*: Client Component (search-suggestions.tsx) import file này mà không kéo dữ liệu server vào bundle.

export const MIN_QUERY_LENGTH = 2;
export const MAX_QUERY_LENGTH = 50;
export const MAX_SUGGESTIONS = 5;

export interface Suggestion {
  slug: string;
  name: string;
  price: number;
  inStock: boolean;
}
