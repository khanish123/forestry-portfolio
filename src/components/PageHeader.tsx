import type { ReactNode } from "react";
import type { ArtworkKind } from "@/content/types";
import { Artwork } from "./Artwork";

export function PageHeader({
  eyebrow,
  title,
  children,
  artwork = "contours",
  seed = 11,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  artwork?: ArtworkKind;
  seed?: number;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-90 md:block [mask-image:linear-gradient(to_left,black,transparent)]">
        <Artwork kind={artwork} seed={seed} faint />
      </div>
      <div className="container-page relative py-16 md:py-24">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl animate-fade-up text-4xl leading-[1.1] font-medium md:text-5xl [animation-delay:60ms]">{title}</h1>
        {children && <div className="prose-body mt-6 max-w-2xl animate-fade-up [animation-delay:120ms]">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  id,
  action,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  id?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={id} className="mt-3 text-3xl leading-tight font-medium md:text-[2.25rem]">
          {title}
        </h2>
        {children && <div className="prose-body mt-4">{children}</div>}
      </div>
      {action}
    </div>
  );
}
