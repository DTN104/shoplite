"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { EmptyState } from "@/components/ui/empty-state";
import type { AdminTab, QueueRow } from "../queue-rules";
import { StatusNotice } from "./admin-feedback";
import { AdminOrderRow } from "./admin-order-row";

interface AdminQueueListProps {
  tab: AdminTab;
  rows: QueueRow[];
  emptyTitle: string;
  /** Câu StatusNotice từ `?notice=` (đã kiểm ở server); hiện một lần rồi gỡ khỏi URL. */
  urlNotice?: string;
}

/** Danh sách Hàng việc kèm StatusNotice từ URL. */
export function AdminQueueList({ tab, rows, emptyTitle, urlNotice }: AdminQueueListProps) {
  const router = useRouter();
  const [notice] = useState<string | null>(urlNotice ?? null);

  useEffect(() => {
    if (urlNotice) router.replace(`/admin?tab=${tab}`, { scroll: false });
  }, [urlNotice, tab, router]);

  return (
    <>
      {notice && <StatusNotice message={notice} />}
      {rows.length === 0 ? (
        <EmptyState emoji="📦" title={emptyTitle} />
      ) : (
        <ul className="flex flex-col gap-3">
          {rows.map((row) => (
            <AdminOrderRow key={row.id} row={row} />
          ))}
        </ul>
      )}
    </>
  );
}
