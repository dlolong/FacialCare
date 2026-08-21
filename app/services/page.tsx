import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="pageSection">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="A clean, searchable treatment catalog"
          description="All descriptions shown in this starter are placeholders. Final treatment claims, pricing, duration and eligibility must be approved by the company."
        />
        <div className="serviceGrid serviceGridWide">
          {services.map((service) => (
            <article className="serviceCard" key={service.slug}>
              <div className="serviceImage">
                <Image src={service.image} alt="" fill sizes="(max-width: 800px) 50vw, 33vw" />
              </div>
              <div className="serviceBody">
                <span>{service.category}</span>
                <h3>{service.name}</h3>
                <p>{service.shortDescription}</p>
                <Link className="textLink" href="/book">Book this service →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
