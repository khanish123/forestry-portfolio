import type { Metadata } from "next";
import { ArrowUpRight, FileText } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { CallToAction } from "@/components/CallToAction";
import { PageHeader } from "@/components/PageHeader";
import { Pending } from "@/components/Pending";
import { Reveal } from "@/components/Reveal";
import { Tag } from "@/components/Tag";
import { profile } from "@/content/profile";
import { ownNameVariants, publicationCount, publications, workInProgress } from "@/content/publications";
import { PublicationItem } from "@/components/PublicationItem";

export const metadata: Metadata = {
  title: "Publications",
  description: "Peer-reviewed publications by Ishfaq Ahmad Khan on forest biomass, carbon stocks, afforestation and forest restoration in Pakistan.",
  alternates: { canonical: "/publications" },
};

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => b.year - a.year);
  const years = Array.from(new Set(sorted.map((p) => p.year)));
  const missing = Math.max(0, publicationCount - sorted.length);
  const firstAuthor = sorted.filter((p) => ownNameVariants.some((n) => p.authors.startsWith(n))).length;

  return (
    <>
      <PageHeader eyebrow="Publications" title="Research outputs" artwork="contours" seed={53}>
        <p>
          Peer-reviewed articles on forest biomass, carbon stocks, afforestation and forest restoration. Titles and DOIs
          link to the published articles; a complete and up-to-date record is available on Google Scholar.
        </p>
      </PageHeader>

      <section className="container-page py-16 md:py-20">
        <div className="mb-12 flex flex-col gap-5 rounded-xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
          <dl className="flex gap-10">
            <div>
              <dt className="text-xs font-semibold tracking-[0.14em] text-sage-600 uppercase">Peer-reviewed articles</dt>
              <dd className="mt-1 font-serif text-3xl text-charcoal">{publicationCount}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.14em] text-sage-600 uppercase">First author (listed)</dt>
              <dd className="mt-1 font-serif text-3xl text-charcoal">{firstAuthor}</dd>
            </div>
          </dl>
          <div className="flex flex-wrap gap-3">
            {profile.links.googleScholar ? (
              <a
                href={profile.links.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium text-forest-900 hover:bg-sage-50"
              >
                <GraduationCap size={16} aria-hidden /> Google Scholar profile <ArrowUpRight size={14} aria-hidden />
              </a>
            ) : (
              <Pending label="Google Scholar profile URL" />
            )}
            {profile.links.orcid && (
              <a href={profile.links.orcid} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium text-forest-900 hover:bg-sage-50">
                ORCID <ArrowUpRight size={14} aria-hidden />
              </a>
            )}
          </div>
        </div>

        <div className="space-y-14">
          {years.map((year) => (
            <section key={year} aria-labelledby={`y-${year}`} className="grid gap-6 md:grid-cols-[7rem_1fr]">
              <h2 id={`y-${year}`} className="font-serif text-3xl font-medium text-sage-600 md:pt-1">
                {year}
              </h2>
              <ol className="divide-y divide-line border-y border-line">
                {sorted
                  .filter((p) => p.year === year)
                  .map((p) => (
                    <Reveal as="li" key={p.title} className="py-6">
                      <PublicationItem p={p} />
                    </Reveal>
                  ))}
              </ol>
            </section>
          ))}

          {missing > 0 && (
            <section aria-labelledby="y-pending" className="grid gap-6 md:grid-cols-[7rem_1fr]">
              <h2 id="y-pending" className="font-serif text-xl font-medium text-sage-600 md:pt-1">
                To be added
              </h2>
              <ol className="divide-y divide-line border-y border-line">
                {Array.from({ length: missing }, (_, i) => (
                  <li key={i} className="py-6">
                    <div className="rounded-lg border border-dashed border-sage-300 p-5">
                      <p className="flex items-center gap-2 text-[0.95rem] font-medium text-charcoal">
                        <FileText size={16} aria-hidden className="text-sage-600" /> Peer-reviewed article {sorted.length + i + 1} of {publicationCount}
                      </p>
                      <p className="mt-1.5 text-sm text-ink-muted">
                        Title, authors, journal, year and DOI to be added. See Google Scholar for the complete record.
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>

        {workInProgress.length > 0 && (
          <section aria-labelledby="wip-title" className="mt-16">
            <h2 id="wip-title" className="text-2xl font-medium">Work in progress</h2>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {workInProgress.map((w) => (
                <li key={w.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <span>
                    <span className="text-charcoal">{w.title}</span>
                    {w.authors && <span className="block text-sm text-ink-muted">{w.authors}</span>}
                  </span>
                  <Tag tone="outline">{w.status}</Tag>
                </li>
              ))}
            </ul>
          </section>
        )}
      </section>

      <CallToAction />
    </>
  );
}
