import type { ProductImage } from "@/features/catalog/types";
import type { PaymentMethod } from "@/features/checkout/checkout-schema";
import type { ShippingMethod } from "@/features/checkout/pricing";

export const ORDER_STATUSES = [
  "pending",
  "confirmed",
  "shipping",
  "delivered",
  "cancelled",
] as const;

export type OrderStatus = (typeof ORDER_STATUSES)[number];

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending: "Chờ xác nhận",
  confirmed: "Đã xác nhận",
  shipping: "Đang giao",
  delivered: "Đã giao",
  cancelled: "Đã hủy",
};

export interface OrderCustomer {
  fullName: string;
  phone: string;
  email?: string;
  address: string;
  note?: string;
}

export interface OrderItem {
  productId: string;
  slug: string;
  name: string;
  image: ProductImage;
  /** Giá tại thời điểm đặt hàng (lấy từ catalog phía server). */
  unitPrice: number;
  quantity: number;
  lineTotal: number;
}

export interface Order {
  id: string;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  customer: OrderCustomer;
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
  items: OrderItem[];
  subtotal: number;
  /** Mã giảm giá đã dùng (chữ in hoa). Chỉ có khi đơn dùng mã. */
  couponCode?: string;
  /** Số tiền được giảm tại thời điểm đặt hàng. Đơn tạo trước khi có mã giảm giá không có trường này = 0. */
  discount?: number;
  shippingFee: number;
  total: number;
  /** Điều chỉnh tồn trên đơn đã hủy (Epic 5 ghi): số lượng không hồi lại kho. */
  stockAdjustment?: { productId: string; quantity: number };
}

export type DeepReadonly<T> = T extends (infer U)[]
  ? readonly DeepReadonly<U>[]
  : T extends object
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : T;

/** Đơn lấy từ repository: snapshot dùng chung, bất biến sâu. */
export type StoredOrder = DeepReadonly<Order>;

/** Đóng băng sâu (idempotent) để không ai sửa lén snapshot dùng chung. */
export function deepFreeze<T>(value: T): DeepReadonly<T> {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const child of Object.values(value)) deepFreeze(child);
  }
  return value as DeepReadonly<T>;
}
