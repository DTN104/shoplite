// @vitest-environment node
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
  redirect: (url: string) => {
    throw new Error(`NEXT_REDIRECT:${url}`);
  },
}));

import { assertAdminEnabled, isAdminEnabled, requireAdmin, requireAdminApi } from "./admin-guard";

const request = new Request("http://localhost/api/admin/x");

afterEach(() => vi.unstubAllEnvs());

describe("isAdminEnabled", () => {
  it("tắt khi biến thiếu hoặc rỗng, bật khi có giá trị", () => {
    vi.stubEnv("ADMIN_PASSWORD", undefined);
    expect(isAdminEnabled()).toBe(false);
    vi.stubEnv("ADMIN_PASSWORD", "");
    expect(isAdminEnabled()).toBe(false);
    vi.stubEnv("ADMIN_PASSWORD", "abc");
    expect(isAdminEnabled()).toBe(true);
  });
});

describe("assertAdminEnabled", () => {
  it("gọi notFound khi chưa cấu hình, không làm gì khi đã cấu hình", () => {
    vi.stubEnv("ADMIN_PASSWORD", "");
    expect(() => assertAdminEnabled()).toThrow("NEXT_NOT_FOUND");
    vi.stubEnv("ADMIN_PASSWORD", "abc");
    expect(() => assertAdminEnabled()).not.toThrow();
  });
});

describe("requireAdmin", () => {
  it("gọi notFound khi chưa cấu hình", async () => {
    vi.stubEnv("ADMIN_PASSWORD", "");
    await expect(requireAdmin("/admin")).rejects.toThrow("NEXT_NOT_FOUND");
  });

  it("chuyển tới đăng nhập kèm next khi đã cấu hình nhưng chưa có phiên", async () => {
    vi.stubEnv("ADMIN_PASSWORD", "abc");
    await expect(requireAdmin("/admin")).rejects.toThrow(
      "NEXT_REDIRECT:/admin/login?next=%2Fadmin",
    );
  });
});

describe("requireAdminApi", () => {
  it("trả 404 thân rỗng khi chưa cấu hình", async () => {
    vi.stubEnv("ADMIN_PASSWORD", "");
    const response = await requireAdminApi(request);
    expect(response?.status).toBe(404);
    expect(await response?.text()).toBe("");
  });

  it("trả 401 UNAUTHORIZED khi đã cấu hình nhưng chưa có phiên", async () => {
    vi.stubEnv("ADMIN_PASSWORD", "abc");
    const response = await requireAdminApi(request);
    expect(response?.status).toBe(401);
    expect((await response?.json()).error.code).toBe("UNAUTHORIZED");
  });
});
