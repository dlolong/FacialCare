import { BranchDirectory } from "@/components/branch-directory";
import { SectionHeading } from "@/components/section-heading";
import { publicBranches } from "@/lib/branches";
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
          eyebrow="Research branch directory"
          title="Find an Executive Facial Care Near You"
          description="Explore publicly listed Executive Facial Care locations. Branch details and service availability may vary."
        />
        <div className="researchNotice">
          <strong>Research seed data</strong>
          <span>Locations are web-listed and still require confirmation from Head Office.</span>
        </div>
        <BranchDirectory branches={publicBranches} />
      </div>
    </section>
  );
}
