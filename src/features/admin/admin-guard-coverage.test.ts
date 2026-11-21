// @vitest-environment node
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const SRC_DIR = path.join(process.cwd(), "src");
const GUARD_FILE = "features/admin/admin-guard.ts";

function listFiles(dir: string, match: RegExp): string[] {
  if (!existsSync(dir)) return [];
  return (readdirSync(dir, { recursive: true }) as string[])
    .filter((file) => match.test(file.split(path.sep).join("/")))
    .map((file) => path.join(dir, file));
}

/** Dòng đầu tiên của thân hàm khớp `header` (đã bỏ khoảng trắng đầu dòng). */
function firstStatements(source: string, header: RegExp): string[] {
  const pattern = new RegExp(`${header.source}\\([^)]*\\)[^{]*\\{\\s*([^\\n]+)`, "g");
  return [...source.matchAll(pattern)].map((match) => match[1].trim());
}

describe("chốt chặn khu vực quản trị", () => {
  it("mỗi page /admin/** gọi guard ở dòng đầu và là force-dynamic", () => {
    const pages = listFiles(path.join(SRC_DIR, "app/admin"), /(^|\/)page\.tsx$/);
    expect(pages.length).toBeGreaterThan(0);

    const violations = pages.flatMap((file) => {
      const source = readFileSync(file, "utf8");
      const name = path.relative(process.cwd(), file);
      const isLogin = name === path.join("src", "app", "admin", "login", "page.tsx");
      const guard = isLogin ? /^assertAdminEnabled\(/ : /^(await\s+)?requireAdmin\(/;
      const heads = firstStatements(source, /export default (?:async )?function \w+/);
      return [
        ...(heads.length === 1 && guard.test(heads[0]) ? [] : [`${name}: thiếu guard ở dòng đầu`]),
        ...(/export const dynamic = "force-dynamic"/.test(source)
          ? []
          : [`${name}: thiếu force-dynamic`]),
      ];
    });

    expect(violations).toEqual([]);
  });

  it("mỗi handler /api/admin/** gọi requireAdminApi ở dòng đầu", () => {
    const routes = listFiles(path.join(SRC_DIR, "app/api/admin"), /(^|\/)route\.ts$/);

    const violations = routes.flatMap((file) => {
      const name = path.relative(process.cwd(), file);
      const heads = firstStatements(
        readFileSync(file, "utf8"),
        /export (?:async )?function (?:GET|POST|PUT|PATCH|DELETE)/,
      );
      if (heads.length === 0) return [`${name}: không tìm thấy handler`];
      return heads.every((head) => /requireAdminApi\(/.test(head))
        ? []
        : [`${name}: thiếu guard ở dòng đầu`];
    });

    expect(violations).toEqual([]);
  });

  it("chỉ admin-guard.ts đọc biến mật khẩu quản trị", () => {
    const readers = listFiles(SRC_DIR, /\.tsx?$/)
      .filter((file) => !/\.test\.tsx?$/.test(file))
      .filter((file) => readFileSync(file, "utf8").includes("ADMIN_PASSWORD"))
      .map((file) => path.relative(SRC_DIR, file).split(path.sep).join("/"));

    expect(readers).toEqual([GUARD_FILE]);
  });
});
