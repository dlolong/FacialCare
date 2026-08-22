import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { publicBranches, getBranchBySlug } from "@/lib/branches";
import { services } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publicBranches.map((branch) => ({ slug: branch.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const branch = getBranchBySlug((await params).slug);
  if (!branch) return {};
  return createPageMetadata({
    title: `Executive Facial Care ${branch.name} | Branch Information`,
    description: `Research branch information for The Executive Facial Care in ${branch.city}, ${branch.province}. Details require company confirmation.`,
    path: `/branches/${branch.slug}`,
  });
}

export default async function BranchDetailPage({ params }: Props) {
  const branch = getBranchBySlug((await params).slug);
  if (!branch) notFound();

  return (
    <section className="pageSection">
      <div className="container detailPage">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><Link href="/branches">Branches</Link><span>/</span><span>{branch.name}</span>
        </nav>
        <div className="detailHero">
          <div>
            <p className="eyebrow">Research branch profile</p>
            <h1>{branch.name}</h1>
            <p className="detailLead">{branch.city}, {branch.province} • {branch.region}</p>
            <div className="researchNotice">
              <strong>Web-listed location</strong>
              <span>This record is research seed data and is not yet an owner-confirmed master record.</span>
            </div>
            <div className="buttonRow">
              <Link className="button" href={`/book?branch=${branch.slug}`}>Book Appointment</Link>
              <Link className="button buttonOutline" href="/branches">Back to Branches</Link>
            </div>
          </div>
          <div className="branchImagePlaceholder" role="img" aria-label={`Branch image placeholder for ${branch.name}`}>
            <span aria-hidden="true">⌖</span>
            <strong>Branch image to be confirmed</strong>
          </div>
        </div>

        <div className="detailInfoGrid">
          <article className="detailPanel">
            <p className="eyebrow">Branch information</p>
            <h2>Plan your visit</h2>
            <dl className="detailList">
              <div><dt>Location</dt><dd>{branch.city}, {branch.province}</dd></div>
              {branch.address ? <div><dt>Address</dt><dd>{branch.address}</dd></div> : null}
              {branch.phone ? <div><dt>Contact</dt><dd>{branch.phone}</dd></div> : null}
              {branch.hours ? <div><dt>Hours</dt><dd>{branch.hours}</dd></div> : null}
            </dl>
            {!branch.address && !branch.phone && !branch.hours ? (
              <p className="confirmationText">Full address, contact information and opening hours are to be confirmed.</p>
            ) : null}
          </article>
          <article className="detailPanel">
            <p className="eyebrow">Active promotions</p>
            <h2>Branch offers</h2>
            <p>Active promotions and participating-branch details are to be confirmed.</p>
            <Link className="textLink" href="/promos">View promotion concept →</Link>
          </article>
        </div>

        <section className="detailSubsection">
          <p className="eyebrow">Service availability</p>
          <h2>Explore the service directory</h2>
          <p>Branch-to-service mappings are not yet confirmed. Ask about availability when requesting an appointment.</p>
          <div className="detailChips">
            {services.slice(0, 8).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
