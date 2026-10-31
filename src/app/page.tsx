import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code, GraduationCap, Leaf, Radar, Satellite, Brain } from "lucide-react";
import { Artwork } from "@/components/Artwork";
import { ButtonLink } from "@/components/Button";
import { CallToAction } from "@/components/CallToAction";
import { CvButton } from "@/components/CvButton";
import { Pending } from "@/components/Pending";
import { Portrait } from "@/components/Portrait";
import { ProfilePanel } from "@/components/ProfilePanel";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/PageHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { Tag } from "@/components/Tag";
import { Visual } from "@/components/Visual";
import { education } from "@/content/education";
import { displayName, interestKeywords, nameIsPlaceholder, profile, site, siteImages } from "@/content/profile";
import { projects } from "@/content/projects";
import { researchAreas } from "@/content/research";
import { learning } from "@/content/skills";

const learningIcons = { code: Code, satellite: Satellite, radar: Radar, brain: Brain };

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const countries = Array.from(new Set(education.map((e) => e.country)));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: displayName,
    jobTitle: profile.role,
    url: site.url,
    alumniOf: Array.from(new Set(education.map((e) => e.institution))).map((name) => ({ "@type": "CollegeOrUniversity", name })),
    knowsAbout: interestKeywords,
    sameAs: [profile.links.linkedin, profile.links.github, profile.links.googleScholar].filter(Boolean),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black_20%,transparent_75%)]">
          <Artwork kind="contours" seed={3} faint />
        </div>
        <div className="container-page relative grid items-center gap-14 pt-14 pb-20 md:pt-20 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:pt-24 lg:pb-28">
          <div>
            <p className="eyebrow animate-fade-up">Forestry · Forest Ecology · Forest Data Analysis</p>
            <h1 className="mt-5 animate-fade-up text-[2.75rem] leading-[1.05] font-medium tracking-tight text-charcoal sm:text-6xl lg:text-[4.25rem] [animation-delay:60ms]">
              {displayName}
            </h1>
            {nameIsPlaceholder && (
              <div className="mt-3">
                <Pending label="Add your name in src/content/profile.ts" />
              </div>
            )}
            <p className="mt-5 animate-fade-up font-serif text-xl text-forest-700 italic md:text-2xl [animation-delay:120ms]">
              {profile.role}
              {profile.affiliation && <span className="text-ink-muted not-italic"> · {profile.affiliation}</span>}
            </p>
            <p className="prose-body mt-6 max-w-xl animate-fade-up [animation-delay:180ms]">{profile.intro}</p>

            <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:240ms]">
              <CvButton className="px-6 py-3" />
              <ButtonLink href="/contact" variant="secondary" className="px-6 py-3">
                Research collaboration <ArrowRight size={16} aria-hidden />
              </ButtonLink>
            </div>

            <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-4 [animation-delay:300ms]">
              <SocialLinks />
            </div>
          </div>

          <div className="mx-auto w-full max-w-md animate-fade-up lg:max-w-none [animation-delay:200ms]">
            {profile.portrait ? <Portrait name={displayName} /> : <ProfilePanel />}
          </div>
        </div>

        {/* Quick facts */}
        <div className="relative border-y border-line bg-white/50">
          <dl className="container-page grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="py-5 sm:pr-6">
              <dt className="text-xs font-semibold tracking-[0.14em] text-sage-600 uppercase">Education</dt>
              <dd className="mt-1.5 text-[0.95rem] text-charcoal">
                {education.length} degrees across {countries.join(", ").replace(/, ([^,]*)$/, " & $1")}
              </dd>
            </div>
            <div className="py-5 sm:px-6">
              <dt className="text-xs font-semibold tracking-[0.14em] text-sage-600 uppercase">Research focus</dt>
              <dd className="mt-1.5 text-[0.95rem] text-charcoal">Forest structure, tree growth & plantation performance</dd>
            </div>
            <div className="py-5 sm:pl-6">
              <dt className="text-xs font-semibold tracking-[0.14em] text-sage-600 uppercase">Core methods</dt>
              <dd className="mt-1.5 text-[0.95rem] text-charcoal">Field inventory & statistical modelling in R</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ───────────── Research interests ───────────── */}
      <section aria-labelledby="interests-title" className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Research interests</p>
            <h2 id="interests-title" className="mt-3 text-3xl leading-tight font-medium md:text-[2.4rem]">
              Understanding how forests grow, change and recover.
            </h2>
            <p className="prose-body mt-5">
              My interests sit where field-based forest science meets quantitative modelling — from individual tree
              measurements to stand-level biomass and, increasingly, landscape-scale satellite data.
            </p>
            <Link href="/research" className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-forest-800">
              Explore research areas <ArrowRight size={15} aria-hidden />
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {interestKeywords.map((k, i) => (
                <li key={k} className="flex items-start gap-3 border-b border-line py-4">
                  <span className="mt-0.5 font-serif text-sm text-sage-500 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[1rem] leading-snug text-charcoal">{k}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ───────────── Research areas (visual) ───────────── */}
      <section aria-labelledby="areas-title" className="bg-sage-50 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Research areas" title="Six connected themes" id="areas-title"
            action={
              <ButtonLink href="/research" variant="secondary">
                All research areas <ArrowRight size={16} aria-hidden />
              </ButtonLink>
            }
          >
            From biodiversity and restoration to growth models, carbon, and geospatial data.
          </SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area, i) => (
              <Reveal key={area.id} delay={(i % 3) * 80}>
                <Link
                  href={`/research#${area.id}`}
                  className="group block h-full overflow-hidden rounded-xl border border-line bg-paper transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(19,36,26,0.4)]"
                >
                  <Visual image={area.image} alt={area.imageAlt} artwork={area.artwork} seed={i * 7 + 2} className="aspect-[16/10]" />
                  <div className="p-6">
                    <h3 className="flex items-start justify-between gap-3 text-xl leading-snug font-medium group-hover:text-forest-800">
                      {area.title}
                      <ArrowUpRight size={18} aria-hidden className="mt-1 shrink-0 text-sage-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-forest-700" />
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">{area.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Academic path ───────────── */}
      <section aria-labelledby="edu-title" className="container-page py-20 md:py-28">
        <SectionHeading eyebrow="Academic background" title="Training across three countries" id="edu-title"
          action={
            <ButtonLink href="/about" variant="secondary">
              Full academic journey <ArrowRight size={16} aria-hidden />
            </ButtonLink>
          }
        />
        <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {education.map((e, i) => (
            <Reveal as="li" key={`${e.institution}-${e.field}-${i}`} delay={i * 70} className="flex flex-col bg-paper p-6">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-sage-100 text-forest-700">
                <GraduationCap size={18} aria-hidden />
              </span>
              <p className="mt-5 text-xs font-semibold tracking-[0.14em] text-sage-600 uppercase">{e.degree}</p>
              <h3 className="mt-1.5 text-xl font-medium">{e.field}</h3>
              <p className="mt-2 text-[0.95rem] leading-snug text-ink-muted">{e.institution}</p>
              {e.researchArea && <p className="mt-3 text-sm leading-snug text-forest-700">{e.researchArea}</p>}
              <p className="mt-auto pt-4 text-sm text-ink-muted">
                {e.country} · {e.end ?? <Pending label="Year" />}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ───────────── Image band ───────────── */}
      <section aria-label="Forest canopy" className="relative">
        <Visual image={siteImages.homeBand} alt={siteImages.homeBandAlt} artwork="canopy" seed={42} className="h-56 md:h-80" sizes="100vw" />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest-950/60 to-transparent">
          <div className="container-page pb-8">
            <p className="max-w-2xl font-serif text-xl leading-snug text-paper italic md:text-2xl">
              Field measurements, statistical models and spatial data — used together to support sustainable forest management.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── Selected projects ───────────── */}
      <section aria-labelledby="projects-title" className="container-page py-20 md:py-28">
        <SectionHeading eyebrow="Research projects" title="Selected projects" id="projects-title"
          action={
            <ButtonLink href="/projects" variant="secondary">
              All projects <ArrowRight size={16} aria-hidden />
            </ButtonLink>
          }
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <article className="group flex h-full flex-col">
                <Link href={`/projects#${p.id}`} className="block overflow-hidden rounded-xl" tabIndex={-1} aria-hidden>
                  <Visual artwork={p.artwork} seed={projects.indexOf(p) * 13 + 5} className="aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.02]" />
                </Link>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.affiliation && <Tag>{p.affiliation}</Tag>}
                  {p.location && !p.affiliation && <Tag>{p.location.split(",")[0]}</Tag>}
                  {!p.location && !p.affiliation && <Tag>{p.status ?? "Research project"}</Tag>}
                </div>
                <h3 className="mt-3 text-xl leading-snug font-medium">
                  <Link href={`/projects#${p.id}`} className="hover:text-forest-800">
                    {p.shortTitle}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-3 text-[0.95rem] leading-relaxed text-ink-muted">{p.summary}</p>
                <Link href={`/projects#${p.id}`} className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-forest-800">
                  Read more<span className="sr-only"> about {p.shortTitle}</span> <ArrowRight size={15} aria-hidden />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── Currently learning ───────────── */}
      <section aria-labelledby="learning-title" className="border-y border-line bg-paper-dim py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <Leaf size={14} aria-hidden /> Ongoing learning
            </p>
            <h2 id="learning-title" className="mt-3 text-2xl leading-tight font-medium md:text-3xl">
              Skills I am currently developing
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
              These are areas of active learning — distinct from my established expertise in forest inventory and statistical modelling.
            </p>
            <Link href="/skills#learning" className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-forest-800">
              Learning & development <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {learning.map((l) => {
              const Icon = learningIcons[l.icon];
              return (
                <li key={l.title} className="flex items-start gap-4 rounded-lg border border-dashed border-sage-300 bg-paper/70 p-5">
                  <Icon size={20} aria-hidden className="mt-0.5 shrink-0 text-forest-600" />
                  <div>
                    <p className="font-medium text-charcoal">{l.title}</p>
                    <p className="mt-0.5 text-sm text-ink-muted">{l.stage}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CallToAction title="Let’s work together on forest research" />
    </>
  );
}
