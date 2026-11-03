import { BarChart3, Database, GitBranch, ImageIcon, Layers, Repeat } from "lucide-react";
import type { Project } from "@/content/types";
import { cn } from "@/lib/utils";
import { GitHubIcon } from "./BrandIcons";
import { FigureLightbox } from "./FigureLightbox";

function SectionTitle({ icon: Icon, children }: { icon: typeof Layers; children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2 font-sans text-sm font-semibold tracking-wide text-charcoal uppercase">
      <Icon size={16} className="text-forest-600" aria-hidden /> {children}
    </h3>
  );
}

/**
 * Extended project detail (models, evaluation, figures, repository, data note).
 * Rendered only for projects that define these optional fields.
 */
export function ProjectDetail({ project }: { project: Project }) {
  const { models, evaluation, figures, repository, dataNote } = project;
  if (!models && !evaluation && !figures && !repository && !dataNote) return null;

  return (
    <div className="space-y-10 border-t border-line bg-paper/60 p-6 md:p-9">
      {models && (
        <section aria-labelledby={`${project.id}-models`}>
          <SectionTitle icon={Layers}>
            <span id={`${project.id}-models`}>Modelling approaches compared</span>
          </SectionTitle>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {models.map((m) => (
              <li key={m.abbr} className="flex flex-col rounded-lg border border-line bg-surface p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-serif text-xl font-medium text-charcoal">{m.abbr}</span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-medium",
                      m.type === "Parametric" ? "bg-forest-800 text-paper" : "bg-sage-100 text-forest-800 ring-1 ring-sage-300 ring-inset",
                    )}
                  >
                    {m.type}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-forest-700">{m.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{m.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {evaluation && (
        <div className="grid gap-8 md:grid-cols-2">
          <section aria-labelledby={`${project.id}-metrics`}>
            <SectionTitle icon={BarChart3}>
              <span id={`${project.id}-metrics`}>Evaluation metrics</span>
            </SectionTitle>
            <table className="mt-4 w-full text-left text-sm">
              <caption className="sr-only">Model evaluation metrics</caption>
              <thead>
                <tr className="border-b border-line text-ink-muted">
                  <th scope="col" className="py-2 pr-4 font-medium">Metric</th>
                  <th scope="col" className="py-2 font-medium">What it measures</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {evaluation.metrics.map((m) => (
                  <tr key={m.name}>
                    <th scope="row" className="py-2.5 pr-4 align-top font-semibold text-charcoal">
                      {m.name}
                    </th>
                    <td className="py-2.5 leading-relaxed text-ink-muted">{m.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <section aria-labelledby={`${project.id}-transfer`}>
            <SectionTitle icon={Repeat}>
              <span id={`${project.id}-transfer`}>Transferability assessment</span>
            </SectionTitle>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-relaxed text-ink-muted">
              {evaluation.transferability.map((t) => (
                <li key={t} className="flex gap-2.5">
                  <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 bg-sage-400" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-md border border-line bg-surface px-4 py-3 text-sm text-ink-muted">
              A summary of results will be added here.
            </p>
          </section>
        </div>
      )}

      {figures && figures.length > 0 && (
        <section aria-labelledby={`${project.id}-figures`}>
          <SectionTitle icon={ImageIcon}>
            <span id={`${project.id}-figures`}>Selected figures</span>
          </SectionTitle>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {figures.map((f) => (
              <figure key={f.title} className="flex flex-col overflow-hidden rounded-lg border border-line bg-surface">
                {f.image ? (
                  <FigureLightbox
                    src={f.image}
                    alt={f.alt ?? f.title}
                    width={f.width ?? 1200}
                    height={f.height ?? 900}
                    label={f.label ? `${f.label}: ${f.title}` : f.title}
                  />
                ) : (
                  <div className="grid aspect-[4/3] place-items-center border-b border-dashed border-sage-300 bg-sage-50 text-center">
                    <div className="px-4">
                      <ImageIcon size={22} aria-hidden className="mx-auto text-sage-600" />
                      <p className="mt-2 text-xs font-medium tracking-wide text-ink-muted uppercase">Figure to be added</p>
                    </div>
                  </div>
                )}
                <figcaption className="p-4">
                  {f.label && <p className="text-xs font-semibold tracking-[0.12em] text-sage-600 uppercase">{f.label}</p>}
                  <p className="mt-1 text-[0.95rem] leading-snug font-medium text-charcoal">{f.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{f.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {(repository || dataNote) && (
        <div className="grid gap-6 md:grid-cols-2">
          {repository && (
            <section aria-labelledby={`${project.id}-code`}>
              <SectionTitle icon={GitBranch}>
                <span id={`${project.id}-code`}>Code</span>
              </SectionTitle>
              {repository.url ? (
                <a
                  href={repository.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-sm font-medium text-forest-900 hover:bg-sage-50"
                >
                  <GitHubIcon size={16} /> {repository.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <p className="mt-4 inline-flex items-center gap-2 rounded-md border border-dashed border-sage-400 px-4 py-2.5 text-sm text-ink-muted">
                  <GitHubIcon size={16} /> {repository.label}: link to be added
                </p>
              )}
            </section>
          )}
          {dataNote && (
            <section aria-labelledby={`${project.id}-data`}>
              <SectionTitle icon={Database}>
                <span id={`${project.id}-data`}>Data availability</span>
              </SectionTitle>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{dataNote}</p>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
