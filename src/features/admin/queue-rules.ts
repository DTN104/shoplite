import type { OrderStatus } from "@/features/orders/types";

// Lõi thuần của Hàng việc: chỉ import kiểu (AD-1).

export type AdminTab = "pending" | "confirmed" | "shipping" | "done";

/** Tab Hàng việc chứa đơn ở trạng thái này (`delivered` và `cancelled` cùng vào Đã xong). */
export const ADMIN_TAB_BY_STATUS: Record<OrderStatus, AdminTab> = {
  pending: "pending",
  confirmed: "confirmed",
  shipping: "shipping",
  delivered: "done",
  cancelled: "done",
};

const MINUTE_MS = 60_000;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;

/** Tuổi đơn đang chờ: "Chờ 59 phút" / "Chờ 3 giờ" / "Chờ 2 ngày 1 giờ" (bỏ giờ khi bằng 0). */
export function formatPendingAge(createdAt: string, now: Date): string {
  const elapsed = Math.max(0, now.getTime() - new Date(createdAt).getTime());
  if (elapsed < HOUR_MS) return `Chờ ${Math.floor(elapsed / MINUTE_MS)} phút`;
  if (elapsed < DAY_MS) return `Chờ ${Math.floor(elapsed / HOUR_MS)} giờ`;
  const days = Math.floor(elapsed / DAY_MS);
  const hours = Math.floor((elapsed % DAY_MS) / HOUR_MS);
  return hours === 0 ? `Chờ ${days} ngày` : `Chờ ${days} ngày ${hours} giờ`;
}
