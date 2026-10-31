import { ArrowUpRight, FlaskConical, HelpCircle, MapPin, Wrench } from "lucide-react";
import type { Project } from "@/content/types";
import { showPlaceholders } from "@/lib/placeholders";
import { DraftNote, Pending } from "./Pending";
import { Tag } from "./Tag";
import { Visual } from "./Visual";

/** Full project card used on the Projects page. */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="grid lg:grid-cols-[minmax(0,20rem)_1fr]">
        <Visual artwork={project.artwork} seed={index * 13 + 5} className="aspect-[16/9] lg:m-6 lg:mr-0 lg:aspect-[4/3] lg:self-start lg:rounded-lg" />
        <div className="p-6 md:p-9">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-serif text-sm text-sage-600">{String(index + 1).padStart(2, "0")}</span>
            {project.status ? (
              <Tag tone={project.status === "Learning project" ? "outline" : "sage"}>{project.status}</Tag>
            ) : (
              <Pending label="Status" />
            )}
            {project.period ? <Tag tone="outline">{project.period}</Tag> : <Pending label="Dates" />}
          </div>

          <h2 id={`${project.id}-title`} className="mt-4 text-2xl leading-snug font-medium md:text-[1.65rem]">
            {project.title}
          </h2>

          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-muted">
            {project.affiliation && <span>{project.affiliation}</span>}
            {project.location && (
              <span className="inline-flex items-center gap-1">
                <MapPin size={14} aria-hidden /> {project.location}
              </span>
            )}
          </div>

          <p className="mt-5 leading-relaxed text-ink-muted">{project.summary}</p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 font-sans text-sm font-semibold tracking-wide text-charcoal uppercase">
                <HelpCircle size={16} className="text-forest-600" aria-hidden /> Research questions
              </h3>
              <ul className="mt-3 space-y-2.5 text-[0.95rem] leading-relaxed text-ink-muted">
                {project.researchQuestions.map((q) => (
                  <li key={q} className="flex gap-2.5">
                    <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 bg-sage-400" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-sans text-sm font-semibold tracking-wide text-charcoal uppercase">
                <FlaskConical size={16} className="text-forest-600" aria-hidden /> Methodology
              </h3>
              <ul className="mt-3 space-y-2.5 text-[0.95rem] leading-relaxed text-ink-muted">
                {project.methods.map((m) => (
                  <li key={m} className="flex gap-2.5">
                    <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 bg-sage-400" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-6 border-t border-line pt-6 md:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 font-sans text-sm font-semibold tracking-wide text-charcoal uppercase">
                <Wrench size={16} className="text-forest-600" aria-hidden /> Tools
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <Tag key={t} tone="outline">
                    {t}
                  </Tag>
                ))}
              </div>
            </div>
            {(project.outputs.length > 0 || project.keyFindings || showPlaceholders) && (
            <div>
              <h3 className="font-sans text-sm font-semibold tracking-wide text-charcoal uppercase">Outputs & findings</h3>
              <div className="mt-3 space-y-2 text-[0.95rem]">
                {project.outputs.length > 0 ? (
                  <ul className="space-y-1.5">
                    {project.outputs.map((o) => (
                      <li key={o.label}>
                        {o.href ? (
                          <a href={o.href} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1 text-forest-800">
                            {o.label} <ArrowUpRight size={14} aria-hidden />
                          </a>
                        ) : (
                          <span className="text-ink-muted">{o.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Pending label="Outputs (thesis, paper, poster, code) — add when available" />
                )}
                {project.keyFindings ? (
                  <p className="leading-relaxed text-ink-muted">{project.keyFindings}</p>
                ) : (
                  <div>
                    <Pending label="Key findings — add verified results only" />
                  </div>
                )}
              </div>
            </div>
            )}
          </div>

          {project.draft && (
            <div className="mt-6">
              <DraftNote>Draft research questions and methods — please review and confirm</DraftNote>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
