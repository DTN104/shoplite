import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Không để `next dev` tự tạo/sửa AGENTS.md - giữ repo đúng như mã nguồn gốc.
  agentRules: false,
  // Chỉ E2E đặt biến này để chạy server thứ hai song song; mặc định vẫn là `.next`.
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
