import { Store } from "lucide-react";
import { LogoutButton } from "./logout-button";

/** Khung đầu trang quản trị: logo (không phải link) + "Quản trị"; nút Đăng xuất chỉ khi đã đăng nhập. */
export function AdminHeader({ loggedIn }: { loggedIn: boolean }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-2 px-4">
        <span className="flex size-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
          <Store className="size-5" />
        </span>
        <span className="text-lg font-bold text-slate-900">Quản trị</span>
        {loggedIn && (
          <div className="ml-auto">
            <LogoutButton />
          </div>
        )}
      </div>
    </header>
  );
}
