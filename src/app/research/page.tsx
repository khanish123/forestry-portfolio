import type { Metadata } from "next";
import { CallToAction } from "@/components/CallToAction";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { DraftNote } from "@/components/Pending";
import { Reveal } from "@/components/Reveal";
import { Visual } from "@/components/Visual";
import { futureDirections, researchAreas } from "@/content/research";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Research Interests",
  description:
    "Research interests in forest ecology, restoration, tree growth modelling, biomass and carbon, remote sensing, and machine learning in forest science.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader eyebrow="Research interests" title="From individual trees to forest landscapes" artwork="contours" seed={29}>
        <p>
          My research interests connect field-based forest science with statistical modelling and geospatial data. The
          themes below describe where I have experience and where I hope to develop future research.
        </p>
      </PageHeader>

      <nav aria-label="Research areas" className="sticky top-16 z-30 border-b border-line bg-paper/95 backdrop-blur-sm">
        <ul className="container-page flex gap-1 overflow-x-auto py-2 text-sm [scrollbar-width:none]">
          {researchAreas.map((a, i) => (
            <li key={a.id} className="shrink-0">
              <a href={`#${a.id}`} className="block rounded-md px-3 py-1.5 text-ink-muted transition-colors hover:bg-sage-100 hover:text-forest-900">
                <span className="mr-1.5 font-serif text-sage-500">{i + 1}.</span>
                {a.title.replace(" and ", " & ")}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-page divide-y divide-line">
        {researchAreas.map((area, i) => (
          <section key={area.id} id={area.id} aria-labelledby={`${area.id}-title`} className="scroll-mt-32 py-16 md:py-24">
            <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16")}>
              <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
                <Visual
                  image={area.image}
                  alt={area.imageAlt}
                  artwork={area.artwork}
                  seed={i * 7 + 2}
                  className="aspect-[4/3] rounded-xl"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </Reveal>
              <Reveal delay={80}>
                <p className="font-serif text-sm text-sage-600">{String(i + 1).padStart(2, "0")} / {String(researchAreas.length).padStart(2, "0")}</p>
                <h2 id={`${area.id}-title`} className="mt-3 text-3xl leading-tight font-medium md:text-[2.25rem]">
                  {area.title}
                </h2>
                <p className="mt-3 font-serif text-lg text-forest-700 italic">{area.short}</p>
                <p className="prose-body mt-5">{area.description}</p>
                <ul className="mt-7 grid gap-2 sm:grid-cols-2" aria-label="Key themes">
                  {area.themes.map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-[0.95rem] text-charcoal">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-forest-600" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section aria-labelledby="future-title" className="bg-sage-50 py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Looking ahead" title="Future research directions" id="future-title">
            Questions I would like to pursue in doctoral or collaborative research.
          </SectionHeading>
          <ol className="grid gap-6 md:grid-cols-3">
            {futureDirections.items.map((d, i) => (
              <Reveal as="li" key={d.title} delay={i * 80} className="rounded-xl border border-line bg-paper p-7">
                <span className="font-serif text-3xl text-sage-400">{i + 1}</span>
                <h3 className="mt-3 text-xl leading-snug font-medium">{d.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{d.text}</p>
              </Reveal>
            ))}
          </ol>
          {futureDirections.draft && (
            <div className="mt-6">
              <DraftNote>Draft directions based on your stated interests — please edit to reflect your plans</DraftNote>
            </div>
          )}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
