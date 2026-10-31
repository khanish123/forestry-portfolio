import { ArrowRight } from "lucide-react";
import { education } from "@/content/education";
import { displayName, heroFacts, profile } from "@/content/profile";
import { themeSwitcherEnabled, type HeroLayout } from "@/content/theme";
import { Artwork } from "./Artwork";
import { ButtonLink } from "./Button";
import { CvButton } from "./CvButton";
import { Portrait } from "./Portrait";
import { ProfilePanel } from "./ProfilePanel";
import { SocialLinks } from "./SocialLinks";

const eyebrow = "Forestry · Forest Ecology · Forest Data Analysis";

function Actions({ tone = "dark", center = false }: { tone?: "dark" | "light"; center?: boolean }) {
  return (
    <>
      <div className={`mt-9 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:240ms] ${center ? "justify-center" : ""}`}>
        <CvButton className="px-6 py-3" variant={tone === "light" ? "light" : "primary"} />
        <ButtonLink
          href="/contact"
          variant="secondary"
          className={`px-6 py-3 ${tone === "light" ? "border-paper/40 text-paper hover:border-paper/80 hover:bg-forest-800" : ""}`}
        >
          Research collaboration <ArrowRight size={16} aria-hidden />
        </ButtonLink>
      </div>
      <div className={`mt-8 flex animate-fade-up [animation-delay:300ms] ${center ? "justify-center" : ""}`}>
        <SocialLinks tone={tone} />
      </div>
    </>
  );
}

function QuickFacts() {
  const countries = Array.from(new Set(education.map((e) => e.country)));
  const items = [
    { label: "Education", value: `${education.length} degrees across ${countries.join(", ").replace(/, ([^,]*)$/, " & $1")}` },
    { label: "Research focus", value: "Forest structure, tree growth & plantation performance" },
    { label: "Core methods", value: "Field inventory & statistical modelling in R" },
  ];
  return (
    <div className="relative border-y border-line bg-surface">
      <dl className="container-page grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((it, i) => (
          <div key={it.label} className={`py-5 ${i === 0 ? "sm:pr-6" : i === 1 ? "sm:px-6" : "sm:pl-6"}`}>
            <dt className="text-xs font-semibold tracking-[0.14em] text-sage-600 uppercase">{it.label}</dt>
            <dd className="mt-1.5 text-[0.95rem] text-charcoal">{it.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function RoleLine({ className = "" }: { className?: string }) {
  return (
    <p className={`mt-5 animate-fade-up font-serif text-xl text-forest-700 italic md:text-2xl [animation-delay:120ms] ${className}`}>
      {profile.role}
      {profile.affiliation && <span className="text-ink-muted not-italic"> · {profile.affiliation}</span>}
    </p>
  );
}

/** Split layout: text left, profile panel (or portrait) right. */
function SplitHero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black_20%,transparent_75%)]">
        <Artwork kind="contours" seed={3} faint />
      </div>
      <div className="container-page relative grid items-center gap-14 pt-14 pb-20 md:pt-20 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:pt-24 lg:pb-28">
        <div>
          <p className="eyebrow animate-fade-up">{eyebrow}</p>
          <h1 className="mt-5 animate-fade-up text-[2.75rem] leading-[1.05] font-medium tracking-tight sm:text-6xl lg:text-[4.25rem] [animation-delay:60ms]">
            {displayName}
          </h1>
          <RoleLine />
          <p className="prose-body mt-6 max-w-xl animate-fade-up [animation-delay:180ms]">{profile.intro}</p>
          <Actions />
        </div>
        <div className="mx-auto w-full max-w-md animate-fade-up lg:max-w-none [animation-delay:200ms]">
          {profile.portrait ? <Portrait name={displayName} /> : <ProfilePanel />}
        </div>
      </div>
      <QuickFacts />
    </section>
  );
}

/** Minimal layout: oversized name, two text columns, facts as a ruled list. */
function MinimalHero() {
  return (
    <section className="relative">
      <div className="container-page pt-16 pb-20 md:pt-24 lg:pb-24">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="mt-6 animate-fade-up text-5xl leading-[0.98] font-semibold tracking-tight sm:text-7xl lg:text-[6.5rem] [animation-delay:60ms]">
          {displayName}
        </h1>
        <div className="mt-12 grid gap-12 border-t border-charcoal/80 pt-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <p className="animate-fade-up text-xl font-medium text-forest-700 [animation-delay:120ms]">
              {profile.role}
              {profile.affiliation && <span className="font-normal text-ink-muted"> — {profile.affiliation}</span>}
            </p>
            <p className="prose-body mt-5 max-w-xl animate-fade-up [animation-delay:180ms]">{profile.intro}</p>
            <Actions />
          </div>
          <dl className="animate-fade-up divide-y divide-line border-y border-line [animation-delay:220ms]">
            {heroFacts.map((f) => (
              <div key={f.label} className="grid grid-cols-[8.5rem_1fr] gap-4 py-4">
                <dt className="text-sm text-ink-muted">{f.label}</dt>
                <dd className="text-[0.95rem] text-charcoal">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <QuickFacts />
    </section>
  );
}

/** Editorial layout: centred, journal-like, with an illustrated facts band. */
function EditorialHero() {
  return (
    <section className="relative">
      <div className="container-page pt-16 pb-14 text-center md:pt-24">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="mx-auto mt-6 max-w-4xl animate-fade-up text-5xl leading-[1.02] font-medium tracking-tight sm:text-6xl lg:text-[5rem] [animation-delay:60ms]">
          {displayName}
        </h1>
        <RoleLine />
        <div aria-hidden className="mx-auto mt-8 flex w-40 items-center gap-3 text-sage-400">
          <span className="h-px flex-1 bg-current" />
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3 6.5 11h3L6 16h12l-3.5-5h3z" />
            <path d="M12 16v5" />
          </svg>
          <span className="h-px flex-1 bg-current" />
        </div>
        <p className="prose-body mx-auto mt-8 max-w-2xl animate-fade-up [animation-delay:180ms]">{profile.intro}</p>
        <Actions center />
      </div>
      <div className="container-page pb-16">
        <div className="overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="h-40 md:h-52">
            <Artwork kind="tree-rings" seed={12} />
          </div>
          <dl className="grid divide-y divide-line border-t border-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {heroFacts.map((f) => (
              <div key={f.label} className="px-6 py-5">
                <dt className="text-[0.7rem] font-semibold tracking-[0.14em] text-sage-600 uppercase">{f.label}</dt>
                <dd className="mt-1.5 font-serif text-[1.05rem] leading-snug text-charcoal">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/** Banner layout: full-width coloured band with illustration and an overlapping facts card. */
function BannerHero() {
  return (
    <section className="relative">
      <div className="relative overflow-hidden bg-forest-900 text-paper">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-30 lg:w-3/5 [mask-image:linear-gradient(to_left,black_40%,transparent)]">
          <Artwork kind="canopy" seed={9} />
        </div>
        <div className="container-page relative grid gap-14 pt-16 pb-24 md:pt-24 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:pb-32">
          <div>
            <p className="animate-fade-up text-xs font-semibold tracking-[0.18em] text-sage-300 uppercase">{eyebrow}</p>
            <h1 className="mt-5 animate-fade-up text-[2.75rem] leading-[1.05] font-medium tracking-tight text-paper sm:text-6xl lg:text-[4.25rem] [animation-delay:60ms]">
              {displayName}
            </h1>
            <p className="mt-5 animate-fade-up font-serif text-xl text-sage-200 italic md:text-2xl [animation-delay:120ms]">
              {profile.role}
              {profile.affiliation && <span className="text-sage-300 not-italic"> · {profile.affiliation}</span>}
            </p>
            <p className="mt-6 max-w-xl animate-fade-up text-[1.0625rem] leading-[1.75] text-sage-100 [animation-delay:180ms]">{profile.intro}</p>
            <Actions tone="light" />
          </div>
          <div className="relative mx-auto w-full max-w-md animate-fade-up lg:max-w-none lg:translate-y-10 [animation-delay:200ms]">
            {profile.portrait ? <Portrait name={displayName} /> : <ProfilePanel />}
          </div>
        </div>
      </div>
      <QuickFacts />
    </section>
  );
}

export function Hero({ layout }: { layout: HeroLayout }) {
  // In preview mode every layout is rendered; CSS shows the one matching the active theme.
  if (themeSwitcherEnabled) {
    return (
      <div data-hero-set>
        <div data-hero="split"><SplitHero /></div>
        <div data-hero="minimal"><MinimalHero /></div>
        <div data-hero="editorial"><EditorialHero /></div>
        <div data-hero="banner"><BannerHero /></div>
      </div>
    );
  }
  return <HeroLayoutView layout={layout} />;
}

function HeroLayoutView({ layout }: { layout: HeroLayout }) {
  switch (layout) {
    case "minimal":
      return <MinimalHero />;
    case "editorial":
      return <EditorialHero />;
    case "banner":
      return <BannerHero />;
    default:
      return <SplitHero />;
  }
}
