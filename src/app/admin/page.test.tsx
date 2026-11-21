// @vitest-environment node
import { describe, expect, it, vi } from "vitest";

const { requireAdmin } = vi.hoisted(() => ({ requireAdmin: vi.fn() }));
vi.mock("@/features/admin/admin-guard", () => ({ requireAdmin }));

import AdminPage from "./page";

describe("trang /admin", () => {
  it("gọi requireAdmin với đúng đường dẫn /admin", async () => {
    await AdminPage();
    expect(requireAdmin).toHaveBeenCalledExactlyOnceWith("/admin");
  });
});
