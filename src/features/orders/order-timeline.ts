import type { StatusHistoryEntry, StoredOrder } from "./types";

/**
 * Các mốc trạng thái theo thời gian tăng dần. Đơn cũ không có `statusHistory`: suy ra từ
 * `createdAt`/`updatedAt` (mốc trạng thái hiện tại lấy `updatedAt` [ASSUMPTION]). Trả mảng mới.
 */
export function getTimeline(order: StoredOrder): StatusHistoryEntry[] {
  if (order.statusHistory) {
    return order.statusHistory
      .map(({ status, at }) => ({ status, at }))
      .sort((a, b) => a.at.localeCompare(b.at));
  }
  const timeline: StatusHistoryEntry[] = [{ status: "pending", at: order.createdAt }];
  if (order.status !== "pending") timeline.push({ status: order.status, at: order.updatedAt });
  return timeline;
}
