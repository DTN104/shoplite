import { adminGate, checkAdminPassword, createSessionCookie } from "@/features/admin/admin-guard";
import { handleRouteError, jsonError, readJsonBody } from "@/lib/http";

/** POST /api/admin/login - đăng nhập quản trị. Body: { password }. Thành công: 204 + cookie phiên. */
export async function POST(request: Request) {
  const gate = adminGate();
  if (gate) return gate;

  try {
    const body = await readJsonBody(request);
    const password = (body as { password?: unknown } | null | undefined)?.password;
    if (typeof password !== "string") {
      return jsonError(400, "VALIDATION_ERROR", "Body phải là JSON có trường password dạng chuỗi");
    }
    if (!checkAdminPassword(password)) {
      return jsonError(401, "UNAUTHORIZED", "Mật khẩu không đúng");
    }
    return new Response(null, {
      status: 204,
      headers: { "Set-Cookie": createSessionCookie(request) },
    });
  } catch (error) {
    return handleRouteError(error);
  }
}
