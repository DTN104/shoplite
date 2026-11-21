"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { OrderStatus } from "@/features/orders/types";
import { type NoticeCode, noticeUrl } from "../admin-notice";
import { ADMIN_TAB_BY_STATUS } from "../queue-rules";
import { type TransitionOutcome, useStaffTransition } from "../use-staff-transition";
import { ErrorBanner } from "./admin-feedback";

interface OrderActions {
  pending: boolean;
  /** Gửi chuyển trạng thái; thành công thì sang Hàng việc (tab `tab`) kèm StatusNotice. */
  run(from: OrderStatus, to: OrderStatus, notice: NoticeCode, tab?: string): Promise<void>;
}

const OrderActionsContext = createContext<OrderActions | null>(null);
const ErrorContext = createContext<string | null>(null);

/** Trạng thái thao tác chung của màn chi tiết: nút ở đầu trang và ReviewActions dùng chung một lỗi. */
export function OrderActionsProvider({
  orderId,
  children,
}: {
  orderId: string;
  children: ReactNode;
}) {
  const router = useRouter();
  const { pending, submit } = useStaffTransition({ holdOnSuccess: true });
  const [error, setError] = useState<string | null>(null);

  const actions: OrderActions = {
    pending,
    async run(from, to, notice, tab = ADMIN_TAB_BY_STATUS[from]) {
      setError(null);
      const outcome: TransitionOutcome | undefined = await submit(orderId, from, to);
      if (!outcome) return;
      if (outcome.ok) {
        router.push(noticeUrl(tab, notice, orderId));
        return;
      }
      setError(outcome.message);
      if (outcome.refresh) router.refresh();
    },
  };

  return (
    <OrderActionsContext value={actions}>
      <ErrorContext value={error}>{children}</ErrorContext>
    </OrderActionsContext>
  );
}

export function useOrderActions(): OrderActions {
  const ctx = useContext(OrderActionsContext);
  if (!ctx) throw new Error("useOrderActions phải nằm trong OrderActionsProvider");
  return ctx;
}

/** Chỗ hiện lỗi thao tác (dưới phần đầu màn chi tiết). */
export function OrderActionError() {
  const error = useContext(ErrorContext);
  return error ? <ErrorBanner message={error} /> : null;
}
