"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  serviceCategoryLabels,
  type Service,
  type ServiceCategory,
} from "@/lib/services";

type Filter = "all" | ServiceCategory;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  ...Object.entries(serviceCategoryLabels).map(([value, label]) => ({
    value: value as ServiceCategory,
    label,
  })),
];

export function ServiceDirectory({ services }: { services: Service[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visibleServices =
    filter === "all" ? services : services.filter((service) => service.category === filter);

  return (
    <>
      <div className="filterTabs" aria-label="Filter services by category">
        {filters.map((item) => (
          <button
            className={filter === item.value ? "active" : ""}
            type="button"
            aria-pressed={filter === item.value}
            key={item.value}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="directorySummary" aria-live="polite">
        <strong>{visibleServices.length}</strong> {visibleServices.length === 1 ? "service" : "services"}
      </p>
      <div className="serviceGrid serviceGridWide">
        {visibleServices.map((service) => (
          <article className="serviceCard directoryServiceCard" key={service.slug}>
            <div className="serviceImage">
              <Image
                src={service.image}
                alt={`Demo treatment image for ${service.name}`}
                fill
                sizes="(max-width: 680px) 35vw, (max-width: 980px) 50vw, 33vw"
              />
            </div>
            <div className="serviceBody">
              <span>{serviceCategoryLabels[service.category]}</span>
              <h3>{service.name}</h3>
              {service.aliases?.length ? <small>Also listed as: {service.aliases.join(", ")}</small> : null}
              <p>{service.shortDescription}</p>
              <div className="cardActions">
                <Link className="button buttonOutline buttonSmall" href={`/services/${service.slug}`}>
                  View Service
                </Link>
                <Link className="button buttonSmall" href={`/book?service=${service.slug}`}>
                  Book Appointment
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
