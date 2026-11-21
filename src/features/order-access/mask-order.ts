import type { Order, StoredOrder } from "@/features/orders/types";
import { getPhoneLast4, NO_PHONE_LAST4 } from "./phone";

/** Thông tin người nhận đã che. Trường không rút được mảnh an toàn thì bỏ hẳn. */
export interface MaskedRecipient {
  /** Từ cuối của họ tên. */
  name?: string;
  /** `•••••• 5678` */
  phone?: string;
  /** `m•••@gmail.com` */
  email?: string;
  /** Phần sau dấu phẩy cuối của địa chỉ. */
  area?: string;
}

/**
 * Đơn gửi cho người chưa xác minh: không có `customer`, nên đọc `.phone`, `.email`, `.address`...
 * ở gốc hay `.customer` đều là lỗi biên dịch.
 */
export type MaskedOrder = Omit<Order, "customer"> & { recipient: MaskedRecipient };

function maskName(fullName: string): string | undefined {
  return fullName.trim().split(/\s+/).at(-1) || undefined;
}

function maskPhone(phone: string): string | undefined {
  const last4 = getPhoneLast4(phone);
  return last4 === NO_PHONE_LAST4 ? undefined : `•••••• ${last4}`;
}

function maskEmail(email: string | undefined): string | undefined {
  const at = email?.lastIndexOf("@") ?? -1;
  if (!email || at < 1 || at === email.length - 1) return undefined;
  const [first] = Array.from(email.slice(0, at)); // theo ký tự Unicode, không cắt đôi cặp thay thế
  return `${first}•••${email.slice(at)}`;
}

function maskArea(address: string): string | undefined {
  const comma = address.lastIndexOf(",");
  return comma < 0 ? undefined : address.slice(comma + 1).trim() || undefined;
}

/** Cài đặt duy nhất của quy tắc che; trả object mới, không sửa đầu vào. */
export function maskOrder(order: StoredOrder): MaskedOrder {
  const { customer, ...rest } = order;
  const recipient: MaskedRecipient = {};
  const name = maskName(customer.fullName);
  const phone = maskPhone(customer.phone);
  const email = maskEmail(customer.email);
  const area = maskArea(customer.address);
  if (name) recipient.name = name;
  if (phone) recipient.phone = phone;
  if (email) recipient.email = email;
  if (area) recipient.area = area;
  const masked: MaskedOrder = {
    ...rest,
    items: structuredClone(rest.items) as Order["items"],
    statusHistory: structuredClone(rest.statusHistory) as Order["statusHistory"],
    recipient,
  };
  if (!rest.statusHistory) delete masked.statusHistory; // đơn cũ: không thêm khóa undefined
  return masked;
}
