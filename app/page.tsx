import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/lib/data";
import { publicBranches } from "@/lib/branches";
import { services } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Premium Facial Care in the Philippines",
  description:
    "Explore services, branches, promotions and appointment requests from The Executive Facial Care in the Philippines.",
  path: "/",
});

const appointmentRequestSteps = [
  ["1", "Choose a service", "Browse the available service information before starting your request."],
  ["2", "Select a branch", "Choose your preferred location from the public branch directory."],
  ["3", "Share your schedule", "Provide your preferred appointment date and time in the request form."],
  ["4", "Send your request", "Submit your basic contact and appointment details for branch review."],
  ["5", "Wait for confirmation", "Your selected branch will contact you separately to confirm availability."],
] as const;

const featuredServiceSlugs = [
  "whitening-facial",
  "carbon-laser",
  "pico-laser",
  "hydra-facial",
  "diamond-peel",
  "foot-spa",
];
const featuredServices = featuredServiceSlugs.flatMap((slug) => {
  const service = services.find((item) => item.slug === slug);
  return service ? [service] : [];
});
const featuredBranches = publicBranches.filter((branch) => branch.featured);

export default function HomePage() {
  return (
    <>
      <section className="referenceHero">
        <div className="container referenceHeroInner">
          <div className="referenceHeroCopy">
            <p className="eyebrow">Premium facial care</p>
            <h1>
              Premium Facial<br />
              Care for<br />
              <span>Radiant Confidence</span>
            </h1>
            <p>
              Explore facial-care services, find publicly listed branch information and request your
              preferred appointment in one place.
            </p>
            <div className="buttonRow">
              <Link className="button" href="/book">
                <span aria-hidden="true">▣</span> Book an Appointment
              </Link>
              <Link className="button buttonOutline" href="/services">
                View Services <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="requestNote">Requests are confirmed separately by the selected branch.</p>
          </div>

          <div className="referenceHeroImage">
            <Image
              src="/hero/executive-facial-care-hero.png"
              alt="Woman enjoying a calm facial-care moment against a soft blush floral background"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 52vw"
            />
            <span className="demoAssetLabel">Hero image • supplied for website use</span>
          </div>

          <div className="referenceHeroTrust" aria-label="Website features">
            <div><span aria-hidden="true">♙</span><p><strong>Service</strong><br />Information</p></div>
            <div><span aria-hidden="true">✿</span><p><strong>Branch</strong><br />Directory</p></div>
            <div><span aria-hidden="true">♢</span><p><strong>Clear</strong><br />Booking Requests</p></div>
          </div>
        </div>
      </section>

      <section className="compactSection servicesStrip">
        <div className="container">
          <div className="compactHeading">
            <p className="eyebrow">Our demo services</p>
            <h2>Explore the facial-care collection</h2>
            <span>Final descriptions and availability require company confirmation.</span>
          </div>
          <div className="referenceServiceGrid">
            {featuredServices.map((service) => (
              <article className="referenceServiceCard" key={service.slug}>
                <div className="referenceServiceImage">
                  <Image
                    src={service.image}
                    alt={`Demo image for ${service.name}`}
                    fill
                    sizes="(max-width: 600px) 46vw, (max-width: 980px) 31vw, 16vw"
                  />
                </div>
                <div>
                  <h3>{service.name}</h3>
                  <Link href={`/services/${service.slug}`} aria-label={`View ${service.name}`}>→</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="sectionAction">
            <Link className="button buttonCompact" href="/services">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="compactSection">
        <div className="container referenceFeatureBand">
          <div className="referenceBranches">
            <div className="referenceBranchIntro">
              <p className="eyebrow">Our branches</p>
              <h2>Find a location near you</h2>
              <p>Browse publicly listed locations through the research branch directory.</p>
              <Link className="button buttonCompact" href="/branches">View All Branches</Link>
            </div>
            <div className="referenceBranchCards">
              {featuredBranches.map((branch) => (
                <Link href={`/branches/${branch.slug}`} className="referenceBranchCard" key={branch.slug}>
                  <span aria-hidden="true">⌖</span>
                  <strong>{branch.name}</strong>
                  <small>{branch.city}, {branch.province}</small>
                  <em>Details to be confirmed</em>
                </Link>
              ))}
            </div>
          </div>

          <article className="referencePromo">
            <Image
              src="/demo/promo-50.jpg"
              alt="Demo promotional campaign artwork; offer details are not yet approved"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
            />
            <div className="referencePromoCopy">
              <span>Campaign preview</span>
              <h2>Featured<br />Promotion</h2>
              <p>Dates, mechanics and participating branches are to be confirmed.</p>
              <Link className="button buttonLight buttonCompact" href="/promos">View Promo Concept</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="compactSection referenceLowerSection">
        <div className="container referenceLowerGrid">
          <div className="referenceTestimonials">
            <div className="compactHeading">
              <p className="eyebrow">Client experience</p>
              <h2>What clients can share</h2>
              <span>Demo placeholders only. Published reviews require company approval.</span>
            </div>
            <div className="referenceTestimonialGrid">
              {testimonials.map((item) => (
                <blockquote key={item.name}>
                  <span aria-hidden="true">“</span>
                  <p>{item.quote}</p>
                  <footer><strong>{item.name}</strong><small>{item.location}</small></footer>
                </blockquote>
              ))}
            </div>
            <Link className="button buttonCompact" href="/testimonials">View Testimonial Concept</Link>
          </div>

          <div className="referenceReasons">
            <div className="compactHeading">
              <p className="eyebrow">Plan your visit</p>
              <h2>How appointment requests work</h2>
            </div>
            <div className="referenceReasonGrid">
              {appointmentRequestSteps.map(([step, title, description]) => (
                <div key={title}>
                  <span aria-hidden="true">{step}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="compactSection compactCtaSection">
        <div className="container ctaPanel compactCta">
          <div>
            <p className="eyebrow eyebrowLight">Plan your visit</p>
            <h2>Ready to request an appointment?</h2>
            <p>A branch will confirm availability after your request is submitted.</p>
          </div>
          <Link className="button buttonLight" href="/book">Book an Appointment →</Link>
        </div>
      </section>
    </>
  );
}
