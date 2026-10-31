import type { Metadata } from "next";
import { CallToAction } from "@/components/CallToAction";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Research Projects",
  description:
    "Research projects on tree height–diameter model transferability, afforestation in District Buner, above-ground biomass, plantation performance, and satellite remote sensing.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader eyebrow="Research projects" title="Projects, questions and methods" artwork="contours" seed={41}>
        <p>
          An overview of my research and learning projects. Each card describes the aims, research questions and
          methodology. Outputs and findings are listed only where they have been published or formally reported.
        </p>
      </PageHeader>

      <section className="container-page py-14 md:py-20">
        <nav aria-label="Project list" className="mb-12">
          <ol className="grid gap-x-8 gap-y-2 border-y border-line py-5 text-sm md:grid-cols-2">
            {projects.map((p, i) => (
              <li key={p.id}>
                <a href={`#${p.id}`} className="group flex gap-3 py-1 text-ink-muted hover:text-forest-900">
                  <span className="font-serif text-sage-500">{String(i + 1).padStart(2, "0")}</span>
                  <span className="group-hover:underline group-hover:decoration-sage-400 group-hover:underline-offset-4">{p.shortTitle}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="space-y-10">
          {projects.map((p, i) => (
            <Reveal key={p.id}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <CallToAction title="Interested in related research?" />
    </>
  );
}
