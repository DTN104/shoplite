import { z } from "zod";
import { CANCEL_REASONS, ORDER_STATUSES } from "@/features/orders/types";

const statusField = (label: string) => z.enum(ORDER_STATUSES, { error: `${label} không hợp lệ` });

/**
 * Body PATCH /api/admin/orders/:id. Union phân biệt theo `to` để Epic 5 thêm biến thể
 * (lý do, productId) mà không đổi route. Không có trường tiền hay tồn (AD-8): trường lạ bị bỏ.
 * Cặp from/to có hợp lệ hay không do `transitionOrder` quyết định, không phải schema.
 */
export const staffTransitionSchema = z.discriminatedUnion(
  "to",
  [
    // Biến thể Từ chối đứng trước: `to: "cancelled"` luôn cần `reason`.
    z.object({
      from: statusField("Trạng thái hiện tại"),
      to: z.literal("cancelled"),
      reason: z.enum(CANCEL_REASONS, { error: "Chọn một lý do hợp lệ" }),
    }),
    z.object({
      from: statusField("Trạng thái hiện tại"),
      to: z.enum(["pending", "confirmed", "shipping", "delivered"], {
        error: "Trạng thái đích không hợp lệ",
      }),
    }),
  ],
  { error: "Trạng thái đích không hợp lệ" },
);

export type StaffTransitionBody = z.infer<typeof staffTransitionSchema>;
