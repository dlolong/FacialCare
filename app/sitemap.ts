import type { MetadataRoute } from "next";
import { publicBranches } from "@/lib/branches";
import { siteUrl } from "@/lib/seo";
import { services } from "@/lib/services";

const routes = ["", "/services", "/branches", "/promos", "/testimonials", "/contact", "/book"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = routes.map((path) => ({
    url: new URL(path || "/", siteUrl).toString(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/book" ? 0.9 : 0.7,
  }));

  const branchRoutes: MetadataRoute.Sitemap = publicBranches.map((branch) => ({
    url: new URL(`/branches/${branch.slug}`, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: new URL(`/services/${service.slug}`, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...branchRoutes, ...serviceRoutes];
}
