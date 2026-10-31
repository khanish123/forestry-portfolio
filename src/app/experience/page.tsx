import type { Metadata } from "next";
import { Briefcase, FlaskConical, Handshake, MapPin, Sprout } from "lucide-react";
import { CallToAction } from "@/components/CallToAction";
import { PageHeader } from "@/components/PageHeader";
import { Pending } from "@/components/Pending";
import { Tag } from "@/components/Tag";
import { Timeline } from "@/components/Timeline";
import { experience } from "@/content/experience";
import type { Experience } from "@/content/types";
import { formatPeriod } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Professional Experience",
  description: "Research, field and development-sector experience in Finland and Pakistan.",
  alternates: { canonical: "/experience" },
};

const icons: Record<Experience["category"], typeof Briefcase> = {
  Research: FlaskConical,
  "Field research": MapPin,
  Forestry: Sprout,
  "Development sector": Handshake,
};

export default function ExperiencePage() {
  const items = experience.map((e, i) => {
    const Icon = icons[e.category];
    return {
      key: `${e.category}-${i}`,
      period: formatPeriod(e.start, e.end) ?? <Pending label="Dates" />,
      icon: <Icon size={12} aria-hidden />,
      title: e.role ?? <Pending label="Role / position title" className="text-sm" />,
      subtitle: e.organisation ?? <Pending label="Organisation" />,
      meta: (
        <>
          <Tag>{e.category}</Tag>
          {e.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin size={14} aria-hidden /> {e.location}
            </span>
          )}
        </>
      ),
      body: (
        <div className="space-y-3">
          {e.summary ? <p>{e.summary}</p> : null}
          {e.responsibilities.length > 0 ? (
            <ul className="space-y-1.5">
              {e.responsibilities.map((r) => (
                <li key={r} className="flex gap-2.5">
                  <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 bg-sage-400" />
                  {r}
                </li>
              ))}
            </ul>
          ) : (
            !e.summary && <p className="text-sm italic">{e.placeholderHint}</p>
          )}
        </div>
      ),
    };
  });

  return (
    <>
      <PageHeader eyebrow="Professional experience" title="Research, field and development work" artwork="contours" seed={71}>
        <p>
          Research experience at the University of Eastern Finland, alongside earlier forestry, field research and
          development-sector experience in Pakistan.
        </p>
      </PageHeader>

      <section aria-label="Experience timeline" className="container-page py-16 md:py-24">
        <Timeline items={items} />
      </section>

      <CallToAction />
    </>
  );
}
