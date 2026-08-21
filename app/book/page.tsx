import { BookingForm } from "@/components/booking-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata = { title: "Book an Appointment" };

export default function BookPage() {
  return (
    <section className="pageSection">
      <div className="container bookingLayout">
        <div>
          <SectionHeading
            eyebrow="Booking prototype"
            title="A simple appointment request flow"
            description="For the MVP, customers can choose a branch, service, date and preferred time. Availability, confirmations and reminders can be connected in the backend phase."
          />
          <div className="bookingSteps">
            <span>1</span><p>Choose branch and service</p>
            <span>2</span><p>Select preferred schedule</p>
            <span>3</span><p>Branch confirms the appointment</p>
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
