import type { Metadata } from "next";

export const siteName = "The Executive Facial Care";

export const siteDescription =
  "Explore facial-care services, branch information, promotions and appointment requests from The Executive Facial Care in the Philippines.";

const localUrl = "http://localhost:3000";
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

function resolveSiteUrl() {
  try {
    return new URL(configuredUrl || localUrl);
  } catch {
    return new URL(localUrl);
  }
}

export const siteUrl = resolveSiteUrl();
export const isPublicSite =
  Boolean(configuredUrl) && !["localhost", "127.0.0.1"].includes(siteUrl.hostname);

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      siteName,
      locale: "en_PH",
      type: "website",
      images: [
        {
          url: "/hero/executive-facial-care-hero.png",
          width: 1916,
          height: 821,
          alt: "The Executive Facial Care",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: ["/hero/executive-facial-care-hero.png"],
    },
  };
}
