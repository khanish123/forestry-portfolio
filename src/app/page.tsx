import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Code, GraduationCap, HandCoins, Leaf, Radar, Satellite, Brain } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { CallToAction } from "@/components/CallToAction";
import { Hero } from "@/components/Hero";
import { Pending } from "@/components/Pending";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/PageHeader";
import { Tag } from "@/components/Tag";
import { Visual } from "@/components/Visual";
import { education, homepageAwards } from "@/content/education";
import { displayName, interestKeywords, profile, site, siteImages } from "@/content/profile";
import { heroLayout } from "@/content/theme";
import { projects } from "@/content/projects";
import { publicationCount, publications } from "@/content/publications";
import { PublicationItem } from "@/components/PublicationItem";
import { CvButton } from "@/components/CvButton";
import { researchAreas } from "@/content/research";
import { learning } from "@/content/skills";

const learningIcons = { code: Code, satellite: Satellite, radar: Radar, brain: Brain };
const awardIcons = { scholarship: GraduationCap, funding: HandCoins };

export default function HomePage() {
  const highlight = projects.find((p) => p.id === "hd-model-transferability") ?? projects[0];
  const featured = projects.filter((p) => p.id !== highlight.id).slice(0, 3);
  const recentPubs = [...publications].sort((a, b) => b.year - a.year).slice(0, 3);

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

      <Hero layout={heroLayout} />

      {/* ───────────── Awards & research funding ───────────── */}
      <section aria-labelledby="awards-title" className="container-page pt-16 md:pt-20">
        <SectionHeading eyebrow="Recognition" title="Awards & Research Funding" id="awards-title" />
        <ul className="-mt-2 grid gap-5 md:grid-cols-2 md:gap-6">
          {homepageAwards.map((a, i) => {
            const Icon = awardIcons[a.icon];
            return (
              <Reveal as="li" key={a.title} delay={i * 80} className="flex gap-5 rounded-xl border border-line bg-surface p-6 md:p-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sage-100 text-forest-700">
                  <Icon size={20} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.14em] text-sage-600 uppercase">{a.kind}</p>
                  <h3 className="mt-1.5 text-xl leading-snug font-medium">{a.title}</h3>
                  <p className="mt-1 text-sm font-medium text-forest-700">{a.organisation}</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{a.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* ───────────── Featured research ───────────── */}
      <section aria-labelledby="featured-title" className="container-page py-20 md:py-24">
        <Reveal className="grid items-center gap-10 overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-[1fr_1.15fr] lg:gap-0">
          <Visual artwork={highlight.artwork} seed={5} className="aspect-[16/10] lg:m-10 lg:mr-0 lg:aspect-[4/3] lg:rounded-lg" />
          <div className="px-6 pb-8 lg:p-12">
            <p className="eyebrow">Featured research · MSc thesis</p>
            <h2 id="featured-title" className="mt-3 text-2xl leading-snug font-medium md:text-3xl">
              {highlight.title}
            </h2>
            <p className="mt-2 text-sm text-ink-muted">{highlight.affiliation?.replace("MSc thesis research · ", "")}</p>
            <p className="prose-body mt-5">{highlight.summary}</p>
            {highlight.models && (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Models compared">
                {highlight.models.map((m) => (
                  <li key={m.abbr}>
                    <Tag tone={m.type === "Parametric" ? "dark" : "sage"}>
                      {m.abbr} <span className="ml-1 font-normal opacity-75">· {m.type.toLowerCase()}</span>
                    </Tag>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`/projects#${highlight.id}`}>
                Methods, evaluation & figures <ArrowRight size={16} aria-hidden />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
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
                  <span className="mt-0.5 font-serif text-sm text-sage-600 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
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
                      <ArrowUpRight size={18} aria-hidden className="mt-1 shrink-0 text-sage-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-forest-700" />
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
            <p className="max-w-2xl font-serif text-xl leading-snug text-on-image italic md:text-2xl">
              Field measurements, statistical models and spatial data — used together to support sustainable forest management.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── Selected projects ───────────── */}
      <section aria-labelledby="projects-title" className="container-page py-20 md:py-28">
        <SectionHeading eyebrow="Research projects" title="More research projects" id="projects-title"
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

      {/* ───────────── Recent publications ───────────── */}
      <section aria-labelledby="pubs-title" className="border-t border-line bg-sage-50 py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Publications" title="Recent peer-reviewed articles" id="pubs-title"
            action={
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/publications" variant="secondary">
                  <BookOpen size={16} aria-hidden /> All {publicationCount} publications
                </ButtonLink>
                <CvButton variant="secondary" />
              </div>
            }
          />
          <ol className="divide-y divide-line border-y border-line">
            {recentPubs.map((p) => (
              <Reveal as="li" key={p.title} className="py-6">
                <PublicationItem p={p} />
              </Reveal>
            ))}
          </ol>
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
