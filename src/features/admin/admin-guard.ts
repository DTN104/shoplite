import { notFound, redirect } from "next/navigation";
import { jsonError } from "@/lib/http";

/** Chốt chặn duy nhất của khu vực quản trị; cũng là nơi duy nhất đọc biến môi trường mật khẩu. */
export function isAdminEnabled(): boolean {
  return (process.env.ADMIN_PASSWORD ?? "") !== "";
}

/** Chưa cấu hình thì trả đúng trang 404 gốc, trước mọi streaming. */
export function assertAdminEnabled(): void {
  if (!isAdminEnabled()) notFound();
}

async function hasAdminSession(): Promise<boolean> {
  // shortcut: chưa có phiên nên luôn coi là chưa đăng nhập, thay bằng kiểm cookie ở Story 1.2
  return false;
}

/** Dòng đầu của mọi page /admin/** (trừ login). */
export async function requireAdmin(currentPath: string): Promise<void> {
  assertAdminEnabled();
  if (!(await hasAdminSession())) {
    redirect(`/admin/login?next=${encodeURIComponent(currentPath)}`);
  }
}

/** Dòng đầu của mọi handler /api/admin/**: trả Response để từ chối, null nếu được phép. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Story 1.2 đọc cookie từ request
export async function requireAdminApi(_request: Request): Promise<Response | null> {
  if (!isAdminEnabled()) return new Response(null, { status: 404 });
  if (!(await hasAdminSession())) {
    return jsonError(401, "UNAUTHORIZED", "Bạn cần đăng nhập để thực hiện thao tác này");
  }
  return null;
}
