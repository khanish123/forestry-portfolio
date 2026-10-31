import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export interface TimelineEntry {
  key: string;
  period: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  meta?: ReactNode;
  body?: ReactNode;
  icon?: ReactNode;
}

/** Vertical timeline with a date column on larger screens. */
export function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <ol className="relative">
      {items.map((item, idx) => (
        <Reveal as="li" key={item.key} delay={idx * 60} className="relative grid gap-2 pb-12 pl-10 last:pb-0 md:grid-cols-[11rem_1fr] md:gap-10 md:pl-0">
          {/* line + node */}
          <span aria-hidden className="absolute top-2 bottom-0 left-[0.6875rem] w-px bg-line md:left-[12.9rem]" />
          <span
            aria-hidden
            className="absolute top-1 left-0 grid h-6 w-6 place-items-center rounded-full border border-sage-300 bg-paper text-forest-700 md:left-[12.2rem]"
          >
            {item.icon ?? <span className="h-2 w-2 rounded-full bg-forest-700" />}
          </span>
          <div className="text-sm font-medium text-ink-muted md:pt-1 md:text-right">{item.period}</div>
          <div className="md:pl-10">
            <h3 className="text-xl leading-snug font-medium">{item.title}</h3>
            {item.subtitle && <p className="mt-1 text-[0.95rem] text-forest-700">{item.subtitle}</p>}
            {item.meta && <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-muted">{item.meta}</div>}
            {item.body && <div className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{item.body}</div>}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
