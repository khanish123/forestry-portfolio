import type { Metadata } from "next";
import { BarChart3, Brain, Code, Database, Info, Map, Radar, Satellite, Trees } from "lucide-react";
import { CallToAction } from "@/components/CallToAction";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { Pending } from "@/components/Pending";
import { Reveal } from "@/components/Reveal";
import { learning, skillGroups, skillLevels } from "@/content/skills";
import type { SkillLevel } from "@/content/types";
import { showPlaceholders } from "@/lib/placeholders";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Technical Skills",
  description:
    "Technical skills in statistical modelling with R, forest inventory, data analysis and geospatial technologies, plus ongoing learning in Python, remote sensing, SAR and machine learning.",
  alternates: { canonical: "/skills" },
};

const groupIcons = { chart: BarChart3, trees: Trees, map: Map, database: Database, code: Code };
const learningIcons = { code: Code, satellite: Satellite, radar: Radar, brain: Brain };

const tiers: SkillLevel[] = ["Established", "Working knowledge", "Developing"];

const tierLabel: Record<SkillLevel, string> = {
  Established: "Established expertise",
  "Working knowledge": "Working knowledge",
  Developing: "Developing",
};

/** Visual badge for a skill tier: solid → tinted → dashed outline. */
function TierBadge({ level }: { level: SkillLevel }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
        level === "Established" && "bg-forest-800 text-paper",
        level === "Working knowledge" && "bg-sage-100 text-forest-800 ring-1 ring-sage-300 ring-inset",
        level === "Developing" && "border border-dashed border-sage-500 text-ink-muted",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          level === "Established" && "bg-paper",
          level === "Working knowledge" && "bg-forest-600",
          level === "Developing" && "border border-sage-500",
        )}
      />
      {tierLabel[level]}
    </span>
  );
}

export default function SkillsPage() {
  return (
    <>
      <PageHeader eyebrow="Technical skills" title="Methods and tools" artwork="contours" seed={61}>
        <p>
          Skills are grouped by area and self-assessed conservatively in three tiers: established expertise, working
          knowledge and developing skills. Areas of active learning are listed separately below.
        </p>
      </PageHeader>

      <section aria-labelledby="skills-title" className="container-page py-16 md:py-20">
        <h2 id="skills-title" className="sr-only">Skills by area</h2>
        <div className="mb-10 rounded-xl border border-line bg-surface p-5">
          <p className="flex items-center gap-2 text-sm font-semibold text-charcoal">
            <Info size={16} className="text-forest-600" aria-hidden /> How to read the skill tiers
          </p>
          <dl className="mt-4 grid gap-5 sm:grid-cols-3">
            {skillLevels.map((l) => (
              <div key={l.level}>
                <dt>
                  <TierBadge level={l.level} />
                </dt>
                <dd className="mt-2 text-sm leading-snug text-ink-muted">{l.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = groupIcons[g.icon];
            return (
              <Reveal key={g.title} delay={(i % 3) * 70} className="flex flex-col rounded-xl border border-line bg-paper p-7">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-sage-100 text-forest-700">
                  <Icon size={20} aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-medium">{g.title}</h3>
                <p className="mt-1.5 text-sm text-ink-muted">{g.description}</p>
                <div className="mt-6 space-y-5 border-t border-line pt-5">
                  {tiers
                    .filter((t) => g.skills.some((s) => s.level === t))
                    .map((t) => (
                      <div key={t}>
                        <h4 className="sr-only">{tierLabel[t]}</h4>
                        <TierBadge level={t} />
                        <ul className="mt-2.5 space-y-2">
                          {g.skills
                            .filter((s) => s.level === t)
                            .map((s) => (
                              <li key={s.name} className="text-[0.95rem] leading-snug text-charcoal">
                                {s.name}
                                {s.note && <span className="mt-0.5 block text-xs leading-snug text-ink-muted">{s.note}</span>}
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="learning" aria-labelledby="learning-title" className="border-t border-line bg-paper-dim py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Learning & development" title="Skills in progress" id="learning-title">
            I am actively developing the skills below to extend my work towards geospatial and data-driven forest
            science. They are <strong className="font-semibold text-charcoal">learning areas, not established expertise</strong>.
          </SectionHeading>

          <div className="grid gap-6 md:grid-cols-2">
            {learning.map((l, i) => {
              const Icon = learningIcons[l.icon];
              return (
                <Reveal key={l.title} delay={(i % 2) * 80} className="relative rounded-xl border border-dashed border-sage-400 bg-paper/80 p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-sage-300 text-forest-700">
                      <Icon size={20} aria-hidden />
                    </span>
                    <span className="rounded-full border border-sage-400 px-2.5 py-0.5 text-xs font-medium text-forest-700">{l.stage}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-medium">{l.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">{l.description}</p>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] text-sage-600 uppercase">Current focus</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-charcoal">
                        {l.focus.map((f) => (
                          <li key={f} className="flex gap-2">
                            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest-600" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {(l.resources.length > 0 || showPlaceholders) && (
                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] text-sage-600 uppercase">Courses & resources</p>
                      {l.resources.length > 0 ? (
                        <ul className="mt-2 space-y-1.5 text-sm">
                          {l.resources.map((r) => (
                            <li key={r.label}>
                              {r.href ? (
                                <a href={r.href} target="_blank" rel="noopener noreferrer" className="link-underline text-forest-800">
                                  {r.label}
                                </a>
                              ) : (
                                r.label
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="mt-2">
                          <Pending label="Add courses / tutorials" />
                        </div>
                      )}
                    </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
