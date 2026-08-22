"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Branch } from "@/lib/branches";

export function BranchDirectory({ branches }: { branches: Branch[] }) {
  const [query, setQuery] = useState("");
  const [province, setProvince] = useState("all");
  const [region, setRegion] = useState("all");

  const provinces = useMemo(
    () => [...new Set(branches.map((branch) => branch.province))].sort(),
    [branches],
  );
  const regions = useMemo(
    () => [...new Set(branches.map((branch) => branch.region))].sort(),
    [branches],
  );
  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return branches.filter((branch) => {
      const matchesQuery =
        !normalizedQuery ||
        [branch.name, branch.city, branch.province, branch.region]
          .join(" ")
          .toLocaleLowerCase()
          .includes(normalizedQuery);
      return (
        matchesQuery &&
        (province === "all" || branch.province === province) &&
        (region === "all" || branch.region === region)
      );
    });
  }, [branches, province, query, region]);

  return (
    <>
      <div className="directoryControls" role="search" aria-label="Filter branches">
        <label className="directorySearch">
          <span>Search by branch or city</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try Calamba or Tacloban"
          />
        </label>
        <label>
          <span>Province</span>
          <select value={province} onChange={(event) => setProvince(event.target.value)}>
            <option value="all">All provinces</option>
            {provinces.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>Region</span>
          <select value={region} onChange={(event) => setRegion(event.target.value)}>
            <option value="all">All regions</option>
            {regions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <div className="directorySummary" aria-live="polite">
        <strong>{results.length}</strong> {results.length === 1 ? "location" : "locations"} found
      </div>

      {results.length ? (
        <div className="branchDirectory">
          {results.map((branch) => (
            <article className="locationCard researchLocationCard" key={branch.slug}>
              <div className="locationPin" aria-hidden="true">⌖</div>
              <div>
                <span className="chip">{branch.region}</span>
                <h2>{branch.name}</h2>
                <p>{branch.city}, {branch.province}</p>
                <p className="confirmationText">Full branch details to be confirmed</p>
                <div className="cardActions">
                  <Link className="button buttonOutline buttonSmall" href={`/branches/${branch.slug}`}>
                    View Branch
                  </Link>
                  <Link className="button buttonSmall" href={`/book?branch=${branch.slug}`}>
                    Book Appointment
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="emptyState">
          <h2>No matching locations</h2>
          <p>Try another search term or reset one of the filters.</p>
          <button
            className="button buttonOutline buttonSmall"
            type="button"
            onClick={() => { setQuery(""); setProvince("all"); setRegion("all"); }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
