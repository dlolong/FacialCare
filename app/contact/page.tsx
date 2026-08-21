import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact The Executive Facial Care or use the appointment request flow to connect with your preferred branch.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="pageSection">
      <div className="container contactGrid">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Connect customers to the correct branch"
            description="Corporate and branch contact information will be populated from the approved master directory."
          />
          <div className="noticeBox">
            No unofficial phone numbers, emails or social handles are hard-coded in this starter.
          </div>
        </div>
        <div className="contactPanel">
          <h2>Need an appointment?</h2>
          <p>Use the demo booking flow to preview the proposed customer experience.</p>
          <Link href="/book" className="button">Book an Appointment</Link>
        </div>
      </div>
    </section>
  );
}
