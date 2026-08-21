import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { isPublicSite, siteDescription, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteName} | Facial Care in the Philippines`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: { canonical: "/" },
  robots: {
    index: isPublicSite,
    follow: isPublicSite,
    googleBot: {
      index: isPublicSite,
      follow: isPublicSite,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${siteName} | Facial Care in the Philippines`,
    description: siteDescription,
    url: "/",
    siteName,
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/hero/executive-facial-care-hero.png",
        width: 1916,
        height: 821,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Facial Care in the Philippines`,
    description: siteDescription,
    images: ["/hero/executive-facial-care-hero.png"],
  },
  icons: {
    icon: "/brand/executive-facial-care-official-logo.png",
    apple: "/brand/executive-facial-care-official-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
