import { tmpdir } from "node:os";
import path from "node:path";
import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.PORT ?? 3000);
/** Server thứ hai (không đặt ADMIN_PASSWORD) chạy ở cổng kế bên. */
const DISABLED_PORT = PORT + 1;

export const BASE_URL = `http://localhost:${PORT}`;
export const DISABLED_BASE_URL = `http://localhost:${DISABLED_PORT}`;
/** Mật khẩu quản trị chỉ dành cho E2E; đây là nơi duy nhất trong repo giữ giá trị này. */
export const ADMIN_TEST_PASSWORD = "e2e-quan-tri-7f3a9c1b-khong-dung-that";

/** File đơn tạm: E2E không bao giờ ghi vào storage/orders.json thật. */
const ORDERS_FILE = path.join(tmpdir(), "shoplite-e2e-orders.json");

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: [
    {
      command: "npm run dev",
      url: BASE_URL,
      reuseExistingServer: false,
      timeout: 120_000,
      env: { PORT: String(PORT), ORDERS_FILE, ADMIN_PASSWORD: ADMIN_TEST_PASSWORD },
    },
    {
      // Next 16 chỉ cho một `next dev` mỗi thư mục build nên server này dùng distDir riêng (xem next.config.ts)
      command: "npm run dev",
      url: DISABLED_BASE_URL,
      reuseExistingServer: false,
      timeout: 120_000,
      env: {
        PORT: String(DISABLED_PORT),
        NEXT_DIST_DIR: ".next-e2e",
        ORDERS_FILE,
        ADMIN_PASSWORD: "",
      },
    },
  ],
});
