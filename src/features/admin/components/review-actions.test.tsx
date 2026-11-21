import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const router = vi.hoisted(() => ({ push: vi.fn(), refresh: vi.fn(), replace: vi.fn() }));
vi.mock("next/navigation", () => ({ useRouter: () => router }));

import { OrderActionError, OrderActionsProvider } from "./order-actions";
import { ReviewActions } from "./review-actions";

const ID = "SL-20261021-ABC123";
const fetchMock = vi.fn();

function reply(status: number, body?: unknown) {
  fetchMock.mockResolvedValueOnce(
    new Response(body === undefined ? null : JSON.stringify(body), { status }),
  );
}

function setup(short = false) {
  render(
    <OrderActionsProvider orderId={ID}>
      <OrderActionError />
      <ReviewActions short={short} />
    </OrderActionsProvider>,
  );
  return screen.getByTestId("confirm-order-button");
}

beforeEach(() => {
  vi.stubGlobal("fetch", fetchMock);
});
afterEach(() => {
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});

describe("<ReviewActions />", () => {
  it("bấm Xác nhận gửi ngay { from, to }, khóa nút khi chờ rồi chuyển về Hàng việc kèm notice", async () => {
    reply(200, {});
    const button = setup();
    fireEvent.click(button);
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent("Đang xác nhận…");
    await waitFor(() =>
      expect(router.push).toHaveBeenCalledWith(`/admin?tab=pending&notice=confirmed&order=${ID}`),
    );
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(`/api/admin/orders/${ID}`);
    expect(init.method).toBe("PATCH");
    expect(JSON.parse(init.body)).toEqual({ from: "pending", to: "confirmed" });
    expect(button).toBeDisabled();
  });

  it("thiếu hàng: nút aria-disabled, vẫn focus được, bấm không gửi gì, có dòng lý do", () => {
    const button = setup(true);
    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(button).toHaveAttribute("aria-label", "Không thể xác nhận đơn: Không đủ hàng");
    expect(button).toHaveTextContent("Không đủ hàng");
    expect(screen.getByText("Có món không đủ hàng.")).toHaveAttribute("id", "review-short-reason");
    expect(button).toHaveAttribute("aria-describedby", "review-short-reason");
    fireEvent.click(button);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("409 INSUFFICIENT_STOCK: ở lại, tải lại dữ liệu, banner nêu món và nhận focus", async () => {
    reply(409, { error: { code: "INSUFFICIENT_STOCK", message: "Cáp USB-C chỉ còn 0" } });
    const button = setup();
    fireEvent.click(button);
    const banner = await screen.findByTestId("conflict-banner");
    expect(banner).toHaveTextContent("Cáp USB-C chỉ còn 0");
    expect(banner).toHaveFocus();
    expect(router.refresh).toHaveBeenCalledOnce();
    expect(router.push).not.toHaveBeenCalled();
  });

  it("409 ORDER_STATUS_CONFLICT: banner 'Đơn đã được cập nhật ở nơi khác' và tải lại", async () => {
    reply(409, {
      error: { code: "ORDER_STATUS_CONFLICT", message: "Đơn đã được cập nhật ở nơi khác" },
    });
    fireEvent.click(setup());
    expect(await screen.findByTestId("conflict-banner")).toHaveTextContent(
      "Đơn đã được cập nhật ở nơi khác",
    );
    expect(router.refresh).toHaveBeenCalledOnce();
  });

  it("401: chuyển tới đăng nhập kèm next là trang hiện tại", async () => {
    reply(401, { error: { code: "UNAUTHORIZED", message: "x" } });
    fireEvent.click(setup());
    await waitFor(() =>
      expect(router.push).toHaveBeenCalledWith(
        `/admin/login?next=${encodeURIComponent(window.location.pathname + window.location.search)}`,
      ),
    );
    expect(screen.queryByTestId("conflict-banner")).not.toBeInTheDocument();
  });

  it("500 và mất mạng: banner chung, nút bật lại", async () => {
    reply(500, { error: { code: "INTERNAL_ERROR", message: "chi tiết nội bộ" } });
    const button = setup();
    fireEvent.click(button);
    expect(await screen.findByTestId("conflict-banner")).toHaveTextContent(
      "Đã có lỗi xảy ra, vui lòng thử lại sau",
    );
    expect(button).toBeEnabled();

    fetchMock.mockRejectedValueOnce(new TypeError("offline"));
    fireEvent.click(button);
    await waitFor(() =>
      expect(screen.getByTestId("conflict-banner")).toHaveTextContent(
        "Không kết nối được máy chủ, vui lòng thử lại.",
      ),
    );
    expect(button).toBeEnabled();
  });
});
