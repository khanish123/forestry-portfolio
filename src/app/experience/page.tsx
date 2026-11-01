import type { Metadata } from "next";
import { Briefcase, ClipboardList, FlaskConical, GraduationCap, Handshake, MapPin, Trees } from "lucide-react";
import { CallToAction } from "@/components/CallToAction";
import { PageHeader } from "@/components/PageHeader";
import { Pending } from "@/components/Pending";
import { Tag } from "@/components/Tag";
import { Timeline } from "@/components/Timeline";
import { experience } from "@/content/experience";
import type { Experience } from "@/content/types";
import { cn, formatPeriod } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Professional Experience",
  description: "Research, field and development-sector experience in Finland and Pakistan.",
  alternates: { canonical: "/experience" },
};

const icons: Record<Experience["category"], typeof Briefcase> = {
  Research: FlaskConical,
  "Field research": MapPin,
  "Forest inventory": Trees,
  Consultancy: ClipboardList,
  Internship: GraduationCap,
  "Development sector": Handshake,
};

const engagementOrder: Experience["engagement"][] = ["Employment", "Research traineeship", "Voluntary research assistance", "Internship"];

const engagementInfo: Record<Experience["engagement"], string> = {
  Employment: "Professional position held with an organisation",
  "Research traineeship": "Supervised research training at a university",
  "Voluntary research assistance": "Research support on a volunteer basis",
  Internship: "Training placement during or after studies",
};

function EngagementBadge({ type }: { type: Experience["engagement"] }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
        type === "Employment" && "bg-forest-800 text-paper",
        type === "Research traineeship" && "bg-sage-100 text-forest-800 ring-1 ring-sage-300 ring-inset",
        type === "Voluntary research assistance" && "border border-dashed border-sage-500 text-ink",
        type === "Internship" && "border border-line text-ink-muted",
      )}
    >
      {type}
    </span>
  );
}

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
          <EngagementBadge type={e.engagement} />
          {e.category !== e.engagement && <Tag tone="outline">{e.category}</Tag>}
          {e.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin size={14} aria-hidden /> {e.location}
            </span>
          )}
        </>
      ),
      body: (
        <div className="space-y-3">
          {e.project && (
            <p>
              <span className="font-medium text-charcoal">Project:</span> {e.project}
            </p>
          )}
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
      <PageHeader eyebrow="Professional experience" title="Research, inventory and fieldwork" artwork="contours" seed={71}>
        <p>
          About four years of research, forest inventory and field experience — from carbon stock assessment and
          sustainable forest management projects in Pakistan to forest research at the University of Eastern Finland.
        </p>
      </PageHeader>

      <section aria-label="Experience timeline" className="container-page py-16 md:py-24">
        <div className="mb-14 rounded-xl border border-line bg-surface p-5">
          <p className="text-sm font-semibold text-charcoal">Type of engagement</p>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {engagementOrder.map((t) => (
              <div key={t}>
                <dt className="flex items-center gap-2">
                  <EngagementBadge type={t} />
                  <span className="text-xs text-ink-muted tabular-nums">× {experience.filter((e) => e.engagement === t).length}</span>
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-ink-muted">{engagementInfo[t]}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 border-t border-line pt-3 text-xs text-ink-muted">Listed in reverse chronological order.</p>
        </div>
        <Timeline items={items} />
      </section>

      <CallToAction />
    </>
  );
}
