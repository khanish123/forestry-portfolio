import { ArrowUpRight } from "lucide-react";
import { ownNameVariants } from "@/content/publications";
import type { Publication } from "@/content/types";
import { Tag } from "./Tag";

/** Highlights the site owner's name inside an author list. */
function Authors({ text }: { text: string }) {
  const pattern = new RegExp(`(${ownNameVariants.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`);
  return (
    <>
      {text.split(pattern).map((part, i) =>
        ownNameVariants.includes(part) ? (
          <strong key={i} className="font-semibold text-charcoal">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function publicationLink(p: Publication) {
  return p.doi ? `https://doi.org/${p.doi}` : p.url;
}

/** One publication entry: clickable title, authors, journal citation and DOI. */
export function PublicationItem({ p, headingLevel = 3 }: { p: Publication; headingLevel?: 2 | 3 }) {
  const link = publicationLink(p);
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <article>
      <div className="flex flex-wrap items-center gap-2">
        {p.type && <Tag tone="outline">{p.type}</Tag>}
        <span className="text-xs text-ink-muted tabular-nums">{p.year}</span>
      </div>
      <H className="mt-2 text-xl leading-snug font-medium">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="decoration-sage-400 underline-offset-4 hover:text-forest-800 hover:underline">
            {p.title}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          p.title
        )}
      </H>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
        <Authors text={p.authors} />
        {p.authorsComplete === false && <span className="ml-1.5 text-xs text-ink-muted italic">(full author list to be added)</span>}
      </p>
      <p className="mt-1 text-[0.95rem] text-charcoal">
        <em>{p.journal}</em>
        {p.volume && `, ${p.volume}`}
        {p.issue && `(${p.issue})`}
        {p.pages && `, ${p.pages}`}
        {` (${p.year})`}
        {p.note && <span className="ml-1 text-sm text-ink-muted">· {p.note}</span>}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
        {p.doi ? (
          <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" className="link-underline text-forest-800">
            DOI: {p.doi}
          </a>
        ) : (
          <span className="text-ink-muted">DOI: to be confirmed</span>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1 text-forest-800">
            {p.doi ? "Read paper" : "Article page"} <ArrowUpRight size={14} aria-hidden />
            <span className="sr-only"> for “{p.title}” (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}
