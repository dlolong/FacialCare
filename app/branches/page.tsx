import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { branches } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Branches",
  description:
    "Explore The Executive Facial Care branch directory. Official addresses, contacts and operating hours are published after company confirmation.",
  path: "/branches",
});

export default function BranchesPage() {
  return (
    <section className="pageSection">
      <div className="container">
        <SectionHeading
          eyebrow="Branch directory"
          title="Find an Executive Facial Care branch"
          description="This starter uses only high-level demo locations visible in the supplied materials. Replace all records with an owner-confirmed master branch list before launch."
        />
        <div className="branchDirectory">
          {branches.map((branch) => (
            <article className="locationCard" key={branch.slug}>
              <div className="locationPin">●</div>
              <div>
                <span className="chip">{branch.area}</span>
                <h2>{branch.name}</h2>
                <p>{branch.address}</p>
                <dl>
                  <div><dt>Phone</dt><dd>{branch.phone}</dd></div>
                  <div><dt>Hours</dt><dd>{branch.hours}</dd></div>
                </dl>
                {branch.slug !== "more-branches" ? (
                  <Link className="button buttonSmall" href="/book">Book at this branch</Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
