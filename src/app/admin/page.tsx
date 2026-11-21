import { requireAdmin } from "@/features/admin/admin-guard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  await requireAdmin("/admin");

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="sr-only">Hàng việc</h1>
    </div>
  );
}
