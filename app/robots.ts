import type { MetadataRoute } from "next";
import { isPublicSite, siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!isPublicSite) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
