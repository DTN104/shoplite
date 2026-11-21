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
