import type { Metadata } from "next";
import { ArrowUpRight, FileText } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { CallToAction } from "@/components/CallToAction";
import { PageHeader } from "@/components/PageHeader";
import { Pending } from "@/components/Pending";
import { Reveal } from "@/components/Reveal";
import { Tag } from "@/components/Tag";
import { profile } from "@/content/profile";
import { publicationSummary, publications, workInProgress } from "@/content/publications";

export const metadata: Metadata = {
  title: "Publications",
  description: "Peer-reviewed publications and research outputs in forestry and forest ecology.",
  alternates: { canonical: "/publications" },
};

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => b.year - a.year);
  const years = Array.from(new Set(sorted.map((p) => p.year)));

  return (
    <>
      <PageHeader eyebrow="Publications" title="Research outputs" artwork="contours" seed={53}>
        <p>
          Peer-reviewed articles and other research outputs. Only published and verifiable work is listed here; a
          complete and up-to-date record is available on Google Scholar.
        </p>
      </PageHeader>

      <section className="container-page py-16 md:py-20">
        {sorted.length > 0 && (
        <div className="mb-10 flex flex-wrap items-center gap-3">
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
        )}

        {sorted.length === 0 ? (
          <div className="rounded-xl border border-dashed border-sage-300 bg-surface px-6 py-14 text-center">
            <FileText size={28} className="mx-auto text-sage-500" aria-hidden />
            <h2 className="mt-4 text-2xl font-medium">8 peer-reviewed articles</h2>
            <p className="mx-auto mt-3 max-w-lg text-[0.95rem] leading-relaxed text-ink-muted">{publicationSummary}</p>
            {profile.links.googleScholar && (
              <a
                href={profile.links.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-forest-800 px-5 py-2.5 text-sm font-medium text-paper hover:bg-forest-900"
              >
                <GraduationCap size={16} aria-hidden /> View on Google Scholar <ArrowUpRight size={14} aria-hidden />
              </a>
            )}
            <div className="mt-5">
              <Pending label="Add verified publications in src/content/publications.ts" />
            </div>
          </div>
        ) : (
          <div className="space-y-14">
            {years.map((year) => (
              <section key={year} aria-labelledby={`y-${year}`} className="grid gap-6 md:grid-cols-[7rem_1fr]">
                <h2 id={`y-${year}`} className="font-serif text-3xl font-medium text-sage-500 md:pt-1">
                  {year}
                </h2>
                <ol className="divide-y divide-line border-y border-line">
                  {sorted
                    .filter((p) => p.year === year)
                    .map((p) => {
                      const link = p.url ?? (p.doi ? `https://doi.org/${p.doi}` : undefined);
                      return (
                        <Reveal as="li" key={p.title} className="py-6">
                          <article>
                            {p.type && <Tag tone="outline">{p.type}</Tag>}
                            <h3 className="mt-2 text-xl leading-snug font-medium">
                              {link ? (
                                <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-forest-800">
                                  {p.title}
                                </a>
                              ) : (
                                p.title
                              )}
                            </h3>
                            <p className="mt-2 text-[0.95rem] text-ink-muted">{p.authors}</p>
                            <p className="mt-1 text-[0.95rem] text-charcoal">
                              <em>{p.journal}</em>
                              {p.volume && `, ${p.volume}`}
                              {p.pages && `, ${p.pages}`} ({p.year})
                            </p>
                            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                              {p.doi && (
                                <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" className="link-underline text-forest-800">
                                  DOI: {p.doi}
                                </a>
                              )}
                              {link && (
                                <a href={link} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1 text-forest-800">
                                  Read paper <ArrowUpRight size={14} aria-hidden />
                                </a>
                              )}
                            </div>
                          </article>
                        </Reveal>
                      );
                    })}
                </ol>
              </section>
            ))}
          </div>
        )}

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
