import { NextResponse } from "next/server";
import { getCatalogProducts } from "@/features/catalog/catalog-data";
import { getProductBySlug } from "@/features/catalog/catalog-rules";
import { jsonError } from "@/lib/http";

/** GET /api/products/:slug */
export async function GET(_request: Request, ctx: RouteContext<"/api/products/[slug]">) {
  const { slug } = await ctx.params;
  const product = getProductBySlug(getCatalogProducts(), slug);
  if (!product) {
    return jsonError(404, "PRODUCT_NOT_FOUND", `Không tìm thấy sản phẩm "${slug}"`);
  }
  return NextResponse.json(product);
}
