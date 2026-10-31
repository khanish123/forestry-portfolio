import { ArrowRight } from "lucide-react";
import { profile } from "@/content/profile";
import { Artwork } from "./Artwork";
import { ButtonLink } from "./Button";
import { CvButton } from "./CvButton";

export function CallToAction({
  title = "Interested in collaborating?",
  text = profile.availability,
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="container-page py-20 md:py-24">
      <div className="relative overflow-hidden rounded-2xl bg-forest-900 px-6 py-14 text-paper md:px-14 md:py-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60 [&_path]:!stroke-sage-300">
          <Artwork kind="contours" seed={5} faint />
        </div>
        <div className="relative grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-sage-300 uppercase">Opportunities & collaboration</p>
            <h2 id="cta-title" className="mt-3 text-3xl leading-tight font-medium text-paper md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-sage-200">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <ButtonLink href="/contact" variant="light">
              Get in touch <ArrowRight size={16} aria-hidden />
            </ButtonLink>
            <CvButton variant="secondary" className="border-sage-300/40 text-paper hover:border-paper/70 hover:bg-forest-800" />
          </div>
        </div>
      </div>
    </section>
  );
}
