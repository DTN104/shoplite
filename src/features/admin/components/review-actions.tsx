"use client";

import { Button } from "@/components/ui/button";
import { useOrderActions } from "./order-actions";

const REASON_ID = "review-short-reason";

/** Chân thẻ "Sản phẩm" của đơn `pending`. Story 5.x thêm "Từ chối" và câu lý do đầy đủ. */
export function ReviewActions({ short }: { short: boolean }) {
  const { pending, run } = useOrderActions();

  return (
    <div className="mt-4 flex flex-col items-end gap-2">
      {short && (
        <p id={REASON_ID} className="text-sm font-medium text-rose-700">
          Có món không đủ hàng.
        </p>
      )}
      <Button
        data-testid="confirm-order-button"
        aria-disabled={short ? true : undefined}
        aria-label={short ? "Không thể xác nhận đơn: Không đủ hàng" : undefined}
        aria-describedby={short ? REASON_ID : undefined}
        className="aria-disabled:opacity-50"
        disabled={pending}
        onClick={() => {
          if (!short) void run("pending", "confirmed", "confirmed");
        }}
      >
        {short ? "Không đủ hàng" : pending ? "Đang xác nhận…" : "Xác nhận đơn"}
      </Button>
    </div>
  );
}
