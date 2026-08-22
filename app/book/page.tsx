import { BookingForm } from "@/components/booking-form";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Book an Appointment",
  description:
    "Request a preferred branch, facial-care service, date and time. Appointments remain subject to branch confirmation.",
  path: "/book",
});

type BookPageProps = {
  searchParams: Promise<{ branch?: string | string[]; service?: string | string[] }>;
};

export default async function BookPage({ searchParams }: BookPageProps) {
  const query = await searchParams;
  const initialBranch = typeof query.branch === "string" ? query.branch : "";
  const initialService = typeof query.service === "string" ? query.service : "";

  return (
    <section className="pageSection">
      <div className="container bookingLayout">
        <div>
          <SectionHeading
            eyebrow="Appointment request"
            title="Request your preferred visit"
            description="Choose a service, public branch, date and time, then review your contact details before submitting. The branch must confirm availability."
          />
          <div className="bookingSteps">
            <span>1</span><p>Choose a service and public branch</p>
            <span>2</span><p>Select your preferred schedule</p>
            <span>3</span><p>Review and submit your request</p>
          </div>
        </div>
        <BookingForm initialBranch={initialBranch} initialService={initialService} />
      </div>
    </section>
  );
}
