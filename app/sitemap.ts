import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes = ["", "/services", "/branches", "/promos", "/testimonials", "/contact", "/book"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: new URL(path || "/", siteUrl).toString(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/book" ? 0.9 : 0.7,
  }));
}
