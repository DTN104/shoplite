import { BackLink } from "@/components/ui/back-link";
import { ProductImage } from "@/features/catalog/components/product-image";
import { PAYMENT_OPTIONS } from "@/features/checkout/checkout-schema";
import { SHIPPING_OPTIONS } from "@/features/checkout/pricing";
import { OrderStatusBadge } from "@/features/orders/components/order-status-badge";
import { OrderTotals } from "@/features/orders/components/order-totals";
import type { StoredOrder } from "@/features/orders/types";
import { formatCurrency, formatDateTime } from "@/lib/format";
import { ADMIN_TAB_BY_STATUS, formatPendingAge } from "../queue-rules";
import { AdminRecipientCard } from "./admin-recipient-card";

interface AdminOrderDetailProps {
  order: StoredOrder;
  /** Một lần `new Date()` ở server: tuổi đơn không tự đếm ở client. */
  now: Date;
}

/** Chi tiết đơn cho nhân viên (Order đầy đủ). Story 4.3: chỉ hiển thị, chưa có nút thao tác. */
export function AdminOrderDetail({ order, now }: AdminOrderDetailProps) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-8">
      <BackLink href={`/admin?tab=${ADMIN_TAB_BY_STATUS[order.status]}`}>Hàng việc</BackLink>

      <header>
        <h1 className="flex flex-wrap items-center gap-3 text-2xl font-bold">
          Đơn hàng {order.id}
          <OrderStatusBadge status={order.status} />
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Đặt lúc {formatDateTime(order.createdAt)}
          {order.status === "pending" && (
            <>
              {" "}
              <span aria-hidden>·</span> <span>{formatPendingAge(order.createdAt, now)}</span>
            </>
          )}
        </p>
      </header>

      <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <h2 className="mb-2 text-lg font-semibold">Sản phẩm</h2>
        <ul className="divide-y divide-slate-100">
          {order.items.map((item) => (
            <li key={item.productId} className="flex items-center gap-4 py-3">
              <div className="w-14 shrink-0">
                <ProductImage image={item.image} alt={item.name} size="sm" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-slate-600">
                  {formatCurrency(item.unitPrice)} × {item.quantity}
                </p>
              </div>
              <span className="font-semibold">{formatCurrency(item.lineTotal)}</span>
            </li>
          ))}
        </ul>
        <OrderTotals order={order} />
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <AdminRecipientCard customer={order.customer} />
        <div className="rounded-2xl bg-white p-5 text-sm shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-2 text-base font-semibold">Giao hàng & thanh toán</h2>
          <p>
            <span className="text-slate-600">Giao hàng: </span>
            {SHIPPING_OPTIONS[order.shippingMethod].label}
          </p>
          <p>
            <span className="text-slate-600">Thanh toán: </span>
            {PAYMENT_OPTIONS[order.paymentMethod].label}
          </p>
        </div>
      </section>
    </div>
  );
}
