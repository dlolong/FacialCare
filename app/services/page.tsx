import { SectionHeading } from "@/components/section-heading";
import { ServiceDirectory } from "@/components/service-directory";
import { services } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Facial-Care Services",
  description:
    "Browse the demo facial-care service catalog from The Executive Facial Care. Final details and availability require company approval.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section className="pageSection">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Explore the service directory"
          description="Browse categorized research seed data using neutral descriptions. Availability, suitability and final service information require branch and company confirmation."
        />
        <ServiceDirectory services={services} />
      </div>
    </section>
  );
}
