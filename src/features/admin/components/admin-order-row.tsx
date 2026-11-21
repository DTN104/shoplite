import { Clock } from "lucide-react";
import Link from "next/link";
import { OrderStatusBadge } from "@/features/orders/components/order-status-badge";
import { cn } from "@/lib/cn";
import { formatCurrency, formatDateTime } from "@/lib/format";
import type { QueueRow } from "../queue-rules";

/** Một dòng Hàng việc. Tuổi đơn đã tính ở server (`ageLabel`), không tự đếm ở client. */
export function AdminOrderRow({ row }: { row: QueueRow }) {
  return (
    <li
      data-testid="admin-order-row"
      className={cn(
        "rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200",
        row.overdue && "border-l-4 border-rose-600 bg-rose-50",
      )}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <Link
          href={`/admin/orders/${row.id}`}
          className="font-semibold text-indigo-700 hover:underline"
        >
          {row.id}
        </Link>
        <OrderStatusBadge status={row.status} />
        {row.ageLabel && (
          <span
            data-testid={row.overdue ? "overdue-age" : undefined}
            className={cn(
              "inline-flex items-center gap-1 text-sm",
              row.overdue ? "font-semibold text-rose-700" : "text-slate-600",
            )}
          >
            <Clock className="size-4" aria-hidden />
            {row.overdue && <span className="sr-only">Quá hạn, </span>}
            {row.ageLabel}
          </span>
        )}
        <span className="ml-auto font-bold text-slate-900">{formatCurrency(row.total)}</span>
      </div>
      <p className={cn("mt-1 text-sm", row.overdue ? "text-slate-600" : "text-slate-500")}>
        {formatDateTime(row.createdAt)} · {row.customerName} · {row.itemCount} sản phẩm
      </p>
    </li>
  );
}
