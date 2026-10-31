import type { Metadata } from "next";
import { ArrowRight, BookOpen, GraduationCap, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { CallToAction } from "@/components/CallToAction";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { DraftNote, Pending } from "@/components/Pending";
import { Reveal } from "@/components/Reveal";
import { Timeline } from "@/components/Timeline";
import { academicJourney, academicJourneyIsDraft, education, professionalDevelopment } from "@/content/education";
import { interestKeywords, profile } from "@/content/profile";
import { formatPeriod } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "Academic journey, education and professional development of an early-career forestry researcher.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const timeline = [...education].reverse().map((e, i) => ({
    key: `${e.institution}-${e.field}-${i}`,
    period: formatPeriod(e.start, e.end) ?? <Pending label="Dates" />,
    title: `${e.degree} in ${e.field}`,
    subtitle: e.institution,
    icon: <GraduationCap size={13} aria-hidden />,
    meta: (
      <span className="inline-flex items-center gap-1">
        <MapPin size={14} aria-hidden /> {e.country}
      </span>
    ),
    body: (
      <dl className="grid gap-1.5 sm:grid-cols-[7rem_1fr]">
        <dt className="font-medium text-charcoal">Thesis</dt>
        <dd>{e.thesis ?? <Pending label="Thesis title" />}</dd>
        <dt className="font-medium text-charcoal">Supervisor</dt>
        <dd>{e.supervisor ?? <Pending label="Supervisor(s)" />}</dd>
        {e.notes && (
          <>
            <dt className="font-medium text-charcoal">Notes</dt>
            <dd>{e.notes}</dd>
          </>
        )}
      </dl>
    ),
  }));

  return (
    <>
      <PageHeader eyebrow="About me" title="An academic journey through forests in three countries" artwork="contours" seed={17}>
        <p>{profile.intro}</p>
      </PageHeader>

      <section aria-labelledby="journey-title" className="container-page py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <Reveal>
            <h2 id="journey-title" className="text-3xl font-medium">Academic journey</h2>
            <div className="prose-body mt-6 space-y-5">
              {academicJourney.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            {academicJourneyIsDraft && (
              <div className="mt-5">
                <DraftNote>Narrative drafted from your degree list — please personalise and confirm</DraftNote>
              </div>
            )}
          </Reveal>
          <Reveal delay={100}>
            <aside aria-label="At a glance" className="rounded-xl border border-line bg-white/60 p-7">
              <p className="eyebrow">At a glance</p>
              <dl className="mt-5 space-y-5 text-[0.95rem]">
                <div>
                  <dt className="text-sm text-ink-muted">Current role</dt>
                  <dd className="mt-0.5 text-charcoal">{profile.affiliation ?? <Pending label="Current role / affiliation" />}</dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-muted">Location</dt>
                  <dd className="mt-0.5 text-charcoal">{profile.location ?? <Pending label="City, country" />}</dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-muted">Degrees</dt>
                  <dd className="mt-0.5 text-charcoal">BSc Forestry · MSc Environmental Sciences · MS/MPhil Forestry · MSc Forestry</dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-muted">Interests</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {interestKeywords.slice(0, 5).map((k) => (
                      <span key={k} className="rounded-full bg-sage-100 px-2.5 py-0.5 text-xs text-forest-800">
                        {k}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <ButtonLink href="/research" variant="ghost" className="mt-6">
                Research interests <ArrowRight size={15} aria-hidden />
              </ButtonLink>
            </aside>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="education-title" className="border-t border-line bg-sage-50 py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Education" title="Degrees and training" id="education-title">
            Most recent first.
          </SectionHeading>
          <Timeline items={timeline} />
        </div>
      </section>

      <section aria-labelledby="dev-title" className="container-page py-20 md:py-24">
        <SectionHeading eyebrow="Professional development" title="Courses, workshops and conferences" id="dev-title"
          action={
            <ButtonLink href="/experience" variant="secondary">
              Professional experience <ArrowRight size={16} aria-hidden />
            </ButtonLink>
          }
        />
        {professionalDevelopment.length > 0 ? (
          <ul className="divide-y divide-line border-y border-line">
            {professionalDevelopment.map((d) => (
              <li key={d.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="flex items-start gap-3">
                  <BookOpen size={16} className="mt-1 shrink-0 text-forest-600" aria-hidden />
                  <span>
                    {d.href ? (
                      <a href={d.href} target="_blank" rel="noopener noreferrer" className="link-underline text-charcoal">
                        {d.title}
                      </a>
                    ) : (
                      <span className="text-charcoal">{d.title}</span>
                    )}
                    <span className="block text-sm text-ink-muted">{d.provider}</span>
                  </span>
                </span>
                <span className="text-sm text-ink-muted tabular-nums">{d.year}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-xl border border-dashed border-sage-300 p-8 text-center">
            <Pending label="Add workshops, courses, certificates or conferences in src/content/education.ts" />
          </div>
        )}
      </section>

      <CallToAction />
    </>
  );
}
