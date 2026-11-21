import { OrderLookupForm } from "./order-lookup-form";

/** Khối tra cứu dùng chung cho /orders và /orders/[id] khi chưa có quyền xem. */
export function OrderLookupPanel({
  description,
  initialOrderId,
}: {
  description: string;
  initialOrderId?: string;
}) {
  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="mb-2 text-2xl font-bold">Tra cứu đơn hàng</h1>
      <p className="mb-6 text-sm text-slate-600">{description}</p>
      <OrderLookupForm initialOrderId={initialOrderId} />
    </div>
  );
}
