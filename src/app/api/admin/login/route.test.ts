// @vitest-environment node
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({ notFound: vi.fn(), redirect: vi.fn() }));
vi.mock("next/headers", () => ({ cookies: vi.fn() }));

import { POST } from "./route";

const PASSWORD = "mat-khau-bi-mat";

function login(body: unknown, init: { url?: string; headers?: Record<string, string> } = {}) {
  return POST(
    new Request(init.url ?? "http://localhost/api/admin/login", {
      method: "POST",
      headers: init.headers,
      body: typeof body === "string" ? body : JSON.stringify(body),
    }),
  );
}

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("POST /api/admin/login", () => {
  it("đúng mật khẩu thì 204 kèm cookie đủ cờ, không Secure trên HTTP", async () => {
    vi.stubEnv("ADMIN_PASSWORD", PASSWORD);
    const response = await login({ password: PASSWORD });
    expect(response.status).toBe(204);
    const cookie = response.headers.get("set-cookie") ?? "";
    expect(cookie).toMatch(/^shoplite_admin=[^;]+; Path=\//);
    expect(cookie).toMatch(/HttpOnly; SameSite=Lax/);
    expect(cookie).toContain("Max-Age=43200");
    expect(cookie).not.toContain("Secure");
  });

  it("bật Secure khi URL https hoặc x-forwarded-proto https", async () => {
    vi.stubEnv("ADMIN_PASSWORD", PASSWORD);
    const a = await login({ password: PASSWORD }, { url: "https://shop.vn/api/admin/login" });
    expect(a.headers.get("set-cookie")).toContain("; Secure");
    const b = await login({ password: PASSWORD }, { headers: { "x-forwarded-proto": "https" } });
    expect(b.headers.get("set-cookie")).toContain("; Secure");
  });

  it("mật khẩu sai, rỗng hoặc khác độ dài thì 401 và không đặt cookie", async () => {
    vi.stubEnv("ADMIN_PASSWORD", PASSWORD);
    for (const password of ["sai", "", `${PASSWORD}x`]) {
      const response = await login({ password });
      expect(response.status).toBe(401);
      expect(response.headers.get("set-cookie")).toBeNull();
      expect((await response.json()).error).toMatchObject({
        code: "UNAUTHORIZED",
        message: "Mật khẩu không đúng",
      });
    }
  });

  it("body xấu thì 400 VALIDATION_ERROR và không đặt cookie", async () => {
    vi.stubEnv("ADMIN_PASSWORD", PASSWORD);
    for (const body of ["không phải json", {}, { password: 123 }, null, { password: null }]) {
      const response = await login(body);
      expect(response.status).toBe(400);
      expect(response.headers.get("set-cookie")).toBeNull();
      expect((await response.json()).error.code).toBe("VALIDATION_ERROR");
    }
  });

  it("chưa cấu hình thì 404 thân rỗng, kể cả đúng mật khẩu giả định", async () => {
    for (const value of [undefined, ""]) {
      vi.stubEnv("ADMIN_PASSWORD", value);
      const response = await login({ password: "" });
      expect(response.status).toBe(404);
      expect(await response.text()).toBe("");
      expect(response.headers.get("set-cookie")).toBeNull();
    }
  });

  it("không rò mật khẩu qua body response hay console", async () => {
    vi.stubEnv("ADMIN_PASSWORD", PASSWORD);
    const spies = (["log", "info", "warn", "error", "debug"] as const).map((m) =>
      vi.spyOn(console, m).mockImplementation(() => {}),
    );
    const responses = [await login({ password: PASSWORD }), await login({ password: "sai" })];
    for (const response of responses) expect(await response.text()).not.toContain(PASSWORD);
    for (const spy of spies) expect(JSON.stringify(spy.mock.calls)).not.toContain(PASSWORD);
  });
});
