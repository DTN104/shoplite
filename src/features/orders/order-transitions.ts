import { OrderError } from "./order-errors";
import { ORDER_STATUS_LABELS, type OrderStatus, type StoredOrder } from "./types";

/** Người thao tác: nhân viên đi tiến từng bước; khách chỉ được hủy đơn đang chờ. */
export type TransitionActor = "staff" | "customer";

export interface TransitionCommand {
  actor: TransitionActor;
  to: OrderStatus;
}

/** Bảng cặp hợp lệ theo người thao tác. `delivered` và `cancelled` là trạng thái cuối. */
const VALID_TARGETS: Record<TransitionActor, Partial<Record<OrderStatus, OrderStatus>>> = {
  staff: { pending: "confirmed", confirmed: "shipping", shipping: "delivered" },
  customer: { pending: "cancelled" },
};

export function isValidTransition(actor: TransitionActor, from: OrderStatus, to: OrderStatus) {
  return VALID_TARGETS[actor][from] === to;
}

/**
 * Nơi duy nhất gán `status` khác "pending" (test tĩnh bảo vệ). Thuần: trả đối tượng mới,
 * không sửa đầu vào; cặp không hợp lệ ném 409 INVALID_STATUS_TRANSITION.
 */
export function transitionOrder(
  order: StoredOrder,
  command: TransitionCommand,
  now: Date,
): StoredOrder {
  if (!isValidTransition(command.actor, order.status, command.to)) {
    throw new OrderError(
      "INVALID_STATUS_TRANSITION",
      command.actor === "customer"
        ? "Chỉ có thể hủy đơn hàng đang ở trạng thái Chờ xác nhận"
        : `Không thể chuyển đơn từ ${ORDER_STATUS_LABELS[order.status]} sang ${ORDER_STATUS_LABELS[command.to]}`,
    );
  }
  return { ...order, status: command.to, updatedAt: now.toISOString() };
}
