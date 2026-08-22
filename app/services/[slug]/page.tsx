import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { getServiceBySlug, serviceCategoryLabels, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug((await params).slug);
  if (!service) return {};
  return createPageMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug((await params).slug);
  if (!service) notFound();

  return (
    <section className="pageSection">
      <div className="container detailPage">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span>{service.name}</span>
        </nav>
        <div className="serviceDetailHero">
          <div className="serviceDetailImage">
            <Image
              src={service.image}
              alt={`Demo treatment image for ${service.name}`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="serviceDetailCopy">
            <span className="chip">{serviceCategoryLabels[service.category]}</span>
            <h1>{service.name}</h1>
            {service.aliases?.length ? <p className="aliases">Also listed as: {service.aliases.join(", ")}</p> : null}
            <p className="detailLead">{service.shortDescription}</p>
            <div className="noticeBox">
              Availability varies by branch. Select a branch when requesting an appointment.
            </div>
            <div className="buttonRow">
              <Link className="button" href={`/book?service=${service.slug}`}>Book Appointment</Link>
              <Link className="button buttonOutline" href="/services">All Services</Link>
            </div>
          </div>
        </div>
        <div className="detailInfoGrid">
          <article className="detailPanel">
            <p className="eyebrow">Before booking</p>
            <h2>Details require consultation</h2>
            <p>Final suitability, service process, duration and any care guidance must come from approved company information.</p>
          </article>
          <article className="detailPanel">
            <p className="eyebrow">Branch availability</p>
            <h2>Select your preferred location</h2>
            <p>This demo does not assume that every service is available at every branch.</p>
            <Link className="textLink" href="/branches">Explore branches →</Link>
          </article>
        </div>
      </div>
    </section>
  );
}
