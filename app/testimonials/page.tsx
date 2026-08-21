import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Client Testimonials",
  description:
    "Preview how verified and company-approved client experiences can be presented by The Executive Facial Care.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <section className="pageSection">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Customer stories, with an approval workflow"
          description="The production site should publish only testimonials that The Executive Facial Care has permission to use."
        />
        <div className="testimonialGrid">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="testimonialCard">
              <div className="stars">★★★★★</div>
              <p>“{item.quote}”</p>
              <footer><strong>{item.name}</strong><span>{item.location}</span></footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
