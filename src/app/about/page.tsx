import type { Metadata } from "next";
import { ArrowRight, Award, BookOpen, GraduationCap, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { CallToAction } from "@/components/CallToAction";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { DraftNote, Pending } from "@/components/Pending";
import { Reveal } from "@/components/Reveal";
import { Timeline } from "@/components/Timeline";
import { academicJourney, academicJourneyIsDraft, awards, education, languages, professionalDevelopment } from "@/content/education";
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
      <div className="space-y-3">
        {e.department && <p>{e.department}</p>}
        <dl className="grid gap-1.5 sm:grid-cols-[8rem_1fr]">
          {e.researchArea && (
            <>
              <dt className="font-medium text-charcoal">Research area</dt>
              <dd>{e.researchArea}</dd>
            </>
          )}
          {e.thesis && (
            <>
              <dt className="font-medium text-charcoal">Thesis</dt>
              <dd>{e.thesis}</dd>
            </>
          )}
          {e.supervisor && (
            <>
              <dt className="font-medium text-charcoal">Supervisor</dt>
              <dd>{e.supervisor}</dd>
            </>
          )}
        </dl>
        {e.subjects && e.subjects.length > 0 && (
          <ul className="flex flex-wrap gap-1.5" aria-label="Main subjects">
            {e.subjects.map((s) => (
              <li key={s} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-muted">
                {s}
              </li>
            ))}
          </ul>
        )}
        {e.notes && <p className="text-sm">{e.notes}</p>}
      </div>
    ),
  }));

  return (
    <>
      <PageHeader eyebrow="About me" title="A forester’s journey through three countries" artwork="contours" seed={17}>
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
            <aside aria-label="At a glance" className="rounded-xl border border-line bg-surface p-7">
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
                  <dd className="mt-0.5 text-charcoal">
                    {education.map((e) => `${e.degree} ${e.field}`).join(" · ")}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-muted">Languages</dt>
                  <dd className="mt-0.5 text-charcoal">{languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(", ")}</dd>
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
                {d.year && <span className="text-sm text-ink-muted tabular-nums">{d.year}</span>}
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-xl border border-dashed border-sage-300 p-8 text-center">
            <Pending label="Add workshops, courses, certificates or conferences in src/content/education.ts" />
          </div>
        )}
      </section>

      <section aria-labelledby="awards-title" className="border-t border-line bg-sage-50 py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Recognition" title="Scholarships, awards and grants" id="awards-title" />
          <ul className="grid gap-6 md:grid-cols-2">
            {awards.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 80} className="flex gap-5 rounded-xl border border-line bg-paper p-7">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sage-100 text-forest-700">
                  <Award size={20} aria-hidden />
                </span>
                <div>
                  <h3 className="text-xl leading-snug font-medium">
                    {a.title}
                    {a.year && <span className="ml-2 font-sans text-sm font-normal text-ink-muted">{a.year}</span>}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">{a.detail}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
