import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { GRANT_COOKIE_NAME, issueGrantCookie } from "@/features/order-access/order-grant";
import type { MaskedOrder } from "@/features/order-access/mask-order";
import { OrderError } from "@/features/orders/order-errors";
import OrderDetailPage, { generateMetadata } from "./page";

const mocks = vi.hoisted(() => ({
  token: undefined as string | undefined,
  getMaskedOrder: vi.fn(),
}));

vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (name: string) => (mocks.token ? { name, value: mocks.token } : undefined),
  }),
}));
vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
  useRouter: () => ({ refresh: vi.fn() }),
}));
vi.mock("@/features/orders/server", () => ({
  orderService: { getMaskedOrder: mocks.getMaskedOrder },
}));

const ID = "SL-20261021-ABC123";

function grantToken(id: string, via: "placed" | "lookup") {
  const setCookie = issueGrantCookie(new Request("http://localhost/"), id, via);
  return setCookie.split(";")[0].slice(GRANT_COOKIE_NAME.length + 1);
}

function maskedOrder(status: MaskedOrder["status"] = "pending"): MaskedOrder {
  return {
    id: ID,
    status,
    items: [
      {
        productId: "p010",
        slug: "cap-usb-c",
        name: "Cáp USB-C",
        image: "",
        unitPrice: 100_000,
        quantity: 1,
        lineTotal: 100_000,
      },
    ],
    subtotal: 100_000,
    shippingFee: 30_000,
    discount: 0,
    total: 130_000,
    shippingMethod: "standard",
    paymentMethod: "cod",
    createdAt: "2026-10-21T03:00:00.000Z",
    recipient: { name: "Test", phone: "•••••• 5678" },
  } as unknown as MaskedOrder;
}

const renderPage = async (id = ID) =>
  render(await OrderDetailPage({ params: Promise.resolve({ id }) } as never));

describe("trang /orders/[id]", () => {
  beforeEach(() => {
    mocks.token = undefined;
    mocks.getMaskedOrder.mockReset().mockResolvedValue(maskedOrder());
  });
  afterEach(() => vi.useRealTimers());

  it("chưa có grant: not-found và không gọi getMaskedOrder", async () => {
    await expect(renderPage()).rejects.toThrow("NEXT_NOT_FOUND");
    expect(mocks.getMaskedOrder).not.toHaveBeenCalled();
  });

  it("grant của đơn khác: not-found và không gọi getMaskedOrder", async () => {
    mocks.token = grantToken("SL-20261021-ZZZZZZ", "placed");
    await expect(renderPage()).rejects.toThrow("NEXT_NOT_FOUND");
    expect(mocks.getMaskedOrder).not.toHaveBeenCalled();
  });

  it("grant hết hạn: not-found và không gọi getMaskedOrder", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-10-21T03:00:00Z"));
    mocks.token = grantToken(ID, "placed");
    vi.setSystemTime(new Date("2026-10-21T04:00:00Z"));
    await expect(renderPage()).rejects.toThrow("NEXT_NOT_FOUND");
    expect(mocks.getMaskedOrder).not.toHaveBeenCalled();
  });

  it("grant đúng đơn nhưng đơn không tồn tại: not-found", async () => {
    mocks.token = grantToken(ID, "placed");
    mocks.getMaskedOrder.mockRejectedValue(new OrderError("ORDER_NOT_FOUND", "x"));
    await expect(renderPage()).rejects.toThrow("NEXT_NOT_FOUND");
  });

  it("grant placed + pending: banner, thẻ người nhận che, BackLink mới, nút hủy; URL viết thường vẫn khớp", async () => {
    mocks.token = grantToken(ID, "placed");
    await renderPage(ID.toLowerCase());
    expect(screen.getByText("Đặt hàng thành công!")).toBeInTheDocument();
    expect(screen.getByTestId("masked-recipient")).toHaveTextContent("•••••• 5678");
    expect(screen.getByRole("link", { name: "Tra cứu đơn khác" })).toHaveAttribute(
      "href",
      "/orders",
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(`Đơn hàng ${ID}`);
    expect(screen.getByRole("button", { name: "Hủy đơn hàng" })).toBeInTheDocument();
  });

  it("grant lookup: không banner", async () => {
    mocks.token = grantToken(ID, "lookup");
    await renderPage();
    expect(screen.queryByText("Đặt hàng thành công!")).toBeNull();
  });

  it("đơn không còn pending: không banner, không nút hủy", async () => {
    mocks.token = grantToken(ID, "placed");
    mocks.getMaskedOrder.mockResolvedValue(maskedOrder("confirmed"));
    await renderPage();
    expect(screen.queryByText("Đặt hàng thành công!")).toBeNull();
    expect(screen.queryByRole("button", { name: "Hủy đơn hàng" })).toBeNull();
  });

  it("title lấy từ URL, không truy vấn dữ liệu", async () => {
    expect(await generateMetadata({ params: Promise.resolve({ id: ID }) } as never)).toEqual({
      title: `Đơn hàng ${ID}`,
    });
    expect(mocks.getMaskedOrder).not.toHaveBeenCalled();
  });
});
