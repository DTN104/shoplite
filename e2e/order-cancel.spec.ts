import { readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { expect, test } from "./fixtures";

// Phải trùng ORDERS_FILE trong playwright.config.ts
const ORDERS_FILE = path.join(tmpdir(), "shoplite-e2e-orders.json");

test("khách đặt hàng rồi tự hủy; trình duyệt khác không hủy được", async ({
  page,
  request,
  shop,
}) => {
  await shop.addToCart("cap-usb-c-ben-du-2m");
  await page.goto("/checkout");
  await shop.fillCheckout();
  const id = await shop.placeOrder();

  // Context khác (không cookie grant): PATCH trả 401 và đơn không đổi
  const denied = await request.patch(`/api/orders/${id}`, { data: { status: "cancelled" } });
  expect(denied.status()).toBe(401);
  await page.reload();
  await expect(page.getByText("Chờ xác nhận")).toBeVisible();

  await page.getByRole("button", { name: "Hủy đơn hàng" }).click();
  await page.getByRole("button", { name: "Xác nhận hủy" }).click();
  await expect(page.getByText("Đã hủy")).toBeVisible();
  await expect(page.getByRole("button", { name: "Hủy đơn hàng" })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 1 })).toBeFocused();
});

test("hủy đơn đã xác nhận trả 409 với message hiện có", async ({ page, shop }) => {
  await shop.addToCart("cap-usb-c-ben-du-2m");
  await page.goto("/checkout");
  await shop.fillCheckout();
  const id = await shop.placeOrder();

  const orders = JSON.parse(await readFile(ORDERS_FILE, "utf8")) as {
    id: string;
    status: string;
  }[];
  for (const order of orders) if (order.id === id) order.status = "confirmed";
  await writeFile(ORDERS_FILE, JSON.stringify(orders), "utf8");

  const response = await page.request.patch(`/api/orders/${id}`, { data: { status: "cancelled" } });
  expect(response.status()).toBe(409);
  expect((await response.json()).error.code).toBe("INVALID_STATUS_TRANSITION");
});
