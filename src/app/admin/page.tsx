import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/empty-state";
import { requireAdmin } from "@/features/admin/admin-guard";
import { AdminOrderRow } from "@/features/admin/components/admin-order-row";
import { AdminRefreshButton } from "@/features/admin/components/admin-refresh-button";
import { ADMIN_TAB_LABELS, AdminTabs } from "@/features/admin/components/admin-tabs";
import { buildQueue, type AdminTab } from "@/features/admin/queue-rules";
import { orderService } from "@/features/orders/server";

export const dynamic = "force-dynamic";

const TABS: readonly AdminTab[] = ["pending", "confirmed", "shipping", "done"];

/** `?tab=` lạ, thiếu hoặc lặp coi như `pending`. */
function parseTab(value: string | string[] | undefined): AdminTab {
  return TABS.find((tab) => tab === value) ?? "pending";
}

const EMPTY_TITLE: Record<AdminTab, string> = {
  pending: "Không còn đơn nào cần xử lý",
  confirmed: "Không còn đơn nào cần xử lý",
  shipping: "Không còn đơn nào cần xử lý",
  done: "Chưa có đơn đã giao hoặc đã hủy",
};

/** Title chỉ gồm nhãn tab và số đếm, không có PII. */
export async function generateMetadata({ searchParams }: PageProps<"/admin">): Promise<Metadata> {
  const tab = parseTab((await searchParams).tab);
  const ctx = await requireAdmin("/admin");
  const queue = buildQueue(await orderService.listOrders(ctx), new Date());
  return { title: `${ADMIN_TAB_LABELS[tab]} (${queue[tab].count}) · Quản trị` };
}

export default async function AdminPage({ searchParams }: PageProps<"/admin">) {
  const ctx = await requireAdmin("/admin");
  const tab = parseTab((await searchParams).tab);
  const queue = buildQueue(await orderService.listOrders(ctx), new Date());
  const counts = Object.fromEntries(TABS.map((t) => [t, queue[t].count])) as Record<
    AdminTab,
    number
  >;
  const rows = queue[tab].rows;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8">
      <h1 className="sr-only">Hàng việc</h1>
      <div className="flex flex-wrap items-center gap-2">
        <AdminTabs active={tab} counts={counts} />
        <AdminRefreshButton />
      </div>
      {rows.length === 0 ? (
        <EmptyState emoji="📦" title={EMPTY_TITLE[tab]} />
      ) : (
        <ul className="flex flex-col gap-3">
          {rows.map((row) => (
            <AdminOrderRow key={row.id} row={row} />
          ))}
        </ul>
      )}
    </div>
  );
}
