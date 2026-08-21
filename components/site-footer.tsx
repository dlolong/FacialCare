import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <Link className="footerLogoLink" href="/" aria-label="The Executive Facial Care home">
            <Image
              className="footerLogo"
              src="/brand/executive-facial-care-official-logo.png"
              alt="The Executive Facial Care — To Experience is to Believe"
              width={1508}
              height={842}
              sizes="260px"
            />
          </Link>
          <p className="mutedLight">
            Initial website concept. Final company information, claims, branch details and
            contact details require owner approval before launch.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/services">Services</Link>
          <Link href="/branches">Branches</Link>
          <Link href="/promos">Promos</Link>
        </div>
        <div>
          <h3>Connect</h3>
          <Link href="/contact">Contact</Link>
          <Link href="/book">Book an Appointment</Link>
          <span>Social links: pending confirmation</span>
        </div>
      </div>
    </footer>
  );
}
