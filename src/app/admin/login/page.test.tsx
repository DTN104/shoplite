// @vitest-environment node
import { describe, expect, it, vi } from "vitest";

const { assertAdminEnabled, requireAdmin } = vi.hoisted(() => ({
  assertAdminEnabled: vi.fn(),
  requireAdmin: vi.fn(),
}));
vi.mock("@/features/admin/admin-guard", () => ({ assertAdminEnabled, requireAdmin }));

import AdminLoginPage from "./page";

describe("trang /admin/login", () => {
  it("chỉ kiểm tra đã cấu hình, không yêu cầu đăng nhập", () => {
    AdminLoginPage();
    expect(assertAdminEnabled).toHaveBeenCalledOnce();
    expect(requireAdmin).not.toHaveBeenCalled();
  });
});
