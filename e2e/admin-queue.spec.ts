import { randomInt } from "node:crypto";
import { expect, test } from "@playwright/test";
import { ADMIN_TEST_PASSWORD, BASE_URL } from "../playwright.config";

test("Hàng việc: đơn mới ở tab Chờ xác nhận, đổi tab, Làm mới", async ({ browser }) => {
  const context = await browser.newContext({
    baseURL: BASE_URL,
    extraHTTPHeaders: {
      "x-forwarded-for": `10.${randomInt(256)}.${randomInt(256)}.${randomInt(1, 255)}`,
    },
  });
  const placed = await context.request.post("/api/orders", {
    data: {
      customer: { fullName: "Phạm Hàng Việc", phone: "0912345678", address: "5 Nguyễn Huệ Quận 1" },
      shippingMethod: "standard",
      paymentMethod: "cod",
      items: [{ productId: "p010", quantity: 2 }],
    },
  });
  const { id } = await placed.json();
  await context.request.post("/api/admin/login", { data: { password: ADMIN_TEST_PASSWORD } });

  const page = await context.newPage();
  await page.goto("/admin");
  await expect(page.getByTestId("admin-tab-pending")).toHaveAttribute("aria-current", "page");
  const row = page.getByTestId("admin-order-row").filter({ hasText: id });
  await expect(row).toContainText("Phạm Hàng Việc · 2 sản phẩm");
  await expect(row.getByRole("link", { name: id })).toHaveAttribute("href", `/admin/orders/${id}`);

  await page.getByTestId("admin-tab-shipping").click();
  await expect(page).toHaveURL(/tab=shipping/);
  await expect(page.getByTestId("admin-tab-shipping")).toHaveAttribute("aria-current", "page");

  await page.getByTestId("admin-refresh").click();
  await expect(page.getByTestId("status-notice")).toHaveText("Đã làm mới danh sách");
  await expect(page.getByTestId("status-notice")).toBeFocused();
  await context.close();
});

test("UJ-1: Xác nhận đơn từ chi tiết, kho giảm; đơn khác hết hàng bị khóa nút", async ({
  browser,
}) => {
  const context = await browser.newContext({
    baseURL: BASE_URL,
    extraHTTPHeaders: {
      "x-forwarded-for": `10.${randomInt(256)}.${randomInt(256)}.${randomInt(1, 255)}`,
    },
  });
  const place = async (quantity: number) => {
    const response = await context.request.post("/api/orders", {
      data: {
        customer: { fullName: "Võ Xác Nhận", phone: "0912345678", address: "7 Lê Lợi Quận 1" },
        shippingMethod: "standard",
        paymentMethod: "cod",
        items: [{ productId: "p011", quantity }],
      },
    });
    return (await response.json()).id as string;
  };
  const first = await place(3); // p011 tồn 3
  const second = await place(1);
  await context.request.post("/api/admin/login", { data: { password: ADMIN_TEST_PASSWORD } });

  const page = await context.newPage();
  await page.goto("/admin?tab=pending");
  const before = Number(
    await page
      .getByTestId("admin-tab-pending")
      .getByTestId("admin-tab-count")
      .innerText()
      .then((t) => t.match(/\d+/)![0]),
  );
  await page.getByTestId("admin-order-row").filter({ hasText: first }).getByRole("link").click();
  await expect(page.getByTestId("stock-current")).toHaveText("3");
  await page.getByTestId("confirm-order-button").click();

  await expect(page).toHaveURL(/\/admin\?tab=pending$/);
  const notice = page.getByTestId("status-notice");
  await expect(notice).toHaveText(`Đã xác nhận đơn ${first}`);
  await expect(notice).toBeFocused();
  await expect(page.getByTestId("admin-tab-pending").getByTestId("admin-tab-count")).toContainText(
    String(before - 1),
  );
  await page.reload();
  await expect(page.getByTestId("status-notice")).toHaveCount(0);

  await page.goto("/products/gia-do-laptop-nhom");
  await expect(page.getByText("Hết hàng").first()).toBeVisible();

  await page.goto(`/admin/orders/${second}`);
  await expect(page.getByTestId("stock-short")).toBeVisible();
  const button = page.getByTestId("confirm-order-button");
  await expect(button).toHaveAttribute("aria-disabled", "true");
  await expect(page.getByText("Có món không đủ hàng.")).toBeVisible();
  await context.close();
});
