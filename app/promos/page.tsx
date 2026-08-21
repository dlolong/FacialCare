import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Promotions",
  description:
    "Explore The Executive Facial Care promotion concept. Final dates, mechanics and participating branches require company approval.",
  path: "/promos",
});

export default function PromosPage() {
  return (
    <section className="pageSection">
      <div className="container">
        <SectionHeading
          eyebrow="Promotions"
          title="Campaigns that lead directly to booking"
          description="Promo dates, mechanics, participating branches and prices must come from an approved campaign record before publishing."
        />
        <article className="promoFeature">
          <div className="promoFeatureImage">
            <Image src="/demo/promo-50.jpg" alt="Example Executive Facial Care promotional material" fill sizes="50vw" />
          </div>
          <div className="promoFeatureCopy">
            <span className="chip">Demo campaign</span>
            <h2>Selected Facial Services Promo</h2>
            <p>
              This page demonstrates how a social campaign can have a dedicated landing page with
              clear mechanics, branch availability and a direct appointment action.
            </p>
            <div className="noticeBox">
              Final discount percentage, dates, exclusions and claims are intentionally not repeated
              here until confirmed by the company.
            </div>
            <Link className="button" href="/book">Book from this campaign</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
