import { assertAdminEnabled } from "@/features/admin/admin-guard";

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  assertAdminEnabled();

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-2xl font-bold">Đăng nhập quản trị</h1>
    </div>
  );
}
