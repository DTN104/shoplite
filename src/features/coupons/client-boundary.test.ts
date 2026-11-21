// @vitest-environment node
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const SRC_DIR = path.join(process.cwd(), "src");

/** Module chỉ được dùng phía server: import vào Client Component sẽ lộ danh sách mã / dùng node:fs. */
const SERVER_ONLY_MODULES = [
  "@/features/admin/admin-guard",
  "@/data/coupons",
  "@/features/coupons/coupon-service",
  "@/features/orders/server",
  "@/features/order-access/order-grant",
  "@/features/order-access/verify-lookup",
  "@/features/order-access/lookup-limiter",
  "@/features/orders/order-service",
];

function listSourceFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return listSourceFiles(fullPath);
    return /\.(ts|tsx)$/.test(entry.name) && !/\.test\.tsx?$/.test(entry.name) ? [fullPath] : [];
  });
}

/** Import giá trị (bỏ `import type`, vì kiểu bị xóa lúc biên dịch). */
function importsOf(source: string): string[] {
  const withoutTypeImports = source.replace(/import\s+type\s[\s\S]*?from\s+["'][^"']+["'];?/g, "");
  return [...withoutTypeImports.matchAll(/from\s+["']([^"']+)["']/g)].map((match) => match[1]);
}

/** Đường dẫn file nguồn ứng với một alias `@/...`, nếu có trong src. */
function resolveAlias(alias: string): string | undefined {
  if (!alias.startsWith("@/")) return undefined;
  const base = path.join(SRC_DIR, alias.slice(2));
  return [".ts", ".tsx", "/index.ts", "/index.tsx"].map((ext) => base + ext).find(existsSync);
}

/** Mọi module server-only mà `file` chạm tới kể cả bắc cầu (qua file nguồn trong src). */
function reachableServerModules(file: string, seen = new Set<string>()): string[] {
  if (seen.has(file)) return [];
  seen.add(file);
  return importsOf(readFileSync(file, "utf8")).flatMap((specifier) => {
    const alias = toAlias(file, specifier);
    if (SERVER_ONLY_MODULES.includes(alias)) return [alias];
    const next = resolveAlias(alias);
    return next ? reachableServerModules(next, seen) : [];
  });
}

/** Chuyển import tương đối ("../coupon-service") về dạng alias ("@/features/coupons/coupon-service"). */
function toAlias(file: string, specifier: string): string {
  if (!specifier.startsWith(".")) return specifier;
  const resolved = path.relative(SRC_DIR, path.resolve(path.dirname(file), specifier));
  return `@/${resolved.split(path.sep).join("/")}`;
}

describe("ranh giới client/server", () => {
  const clientFiles = listSourceFiles(SRC_DIR).filter((file) =>
    /^\s*["']use client["']/.test(readFileSync(file, "utf8")),
  );

  it("tìm thấy các Client Component để kiểm tra", () => {
    expect(clientFiles.length).toBeGreaterThan(0);
    expect(clientFiles.some((file) => file.endsWith("coupon-field.tsx"))).toBe(true);
  });

  it("Client Component không import dữ liệu mã giảm giá hay module chỉ chạy ở server", () => {
    const violations = clientFiles.flatMap((file) =>
      importsOf(readFileSync(file, "utf8"))
        .map((specifier) => toAlias(file, specifier))
        .filter((alias) => SERVER_ONLY_MODULES.includes(alias))
        .map((alias) => `${path.relative(SRC_DIR, file)} → ${alias}`),
    );

    expect(violations).toEqual([]);
  });

  it("không import bắc cầu tới module server-only (kể cả order-access phía server)", () => {
    const violations = clientFiles.flatMap((file) =>
      [...new Set(reachableServerModules(file))].map(
        (alias) => `${path.relative(SRC_DIR, file)} → ${alias}`,
      ),
    );

    expect(violations).toEqual([]);
  });

  it("bắt được import bắc cầu (phát hiện qua file trung gian)", () => {
    const tmp = path.join(SRC_DIR, "features/order-access");
    // order-grant import node:crypto trực tiếp, nên module này phải nằm trong danh sách server-only
    expect(SERVER_ONLY_MODULES).toContain("@/features/order-access/order-grant");
    expect(reachableServerModules(path.join(tmp, "order-grant.ts"))).toEqual([]);
    expect(
      reachableServerModules(path.join(SRC_DIR, "app/api/orders/lookup/route.ts")).length,
    ).toBeGreaterThan(0);
  });
});
