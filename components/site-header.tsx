import Image from "next/image";
import Link from "next/link";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Branches", "/branches"],
  ["Promos", "/promos"],
  ["Testimonials", "/testimonials"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link className="brand" href="/" aria-label="The Executive Facial Care home">
          <Image
            className="brandLogo"
            src="/brand/executive-facial-care-official-logo.png"
            alt="The Executive Facial Care — To Experience is to Believe"
            width={1508}
            height={842}
            priority
            sizes="(max-width: 680px) 126px, 174px"
          />
        </Link>

        <nav className="desktopNav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <Link className="button buttonSmall" href="/book">
          Book Now
        </Link>
      </div>

      <div className="mobileNav container" aria-label="Mobile navigation">
        {navItems.slice(0, 5).map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}
