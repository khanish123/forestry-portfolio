import { heroFacts } from "@/content/profile";
import { Artwork } from "./Artwork";

/** Home-page panel with key facts — used in place of a portrait photograph. */
export function ProfilePanel() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -right-4 -bottom-4 h-full w-full rounded-2xl border border-sage-300" />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_30px_60px_-30px_rgba(19,36,26,0.35)]">
        <div className="aspect-[16/9]">
          <Artwork kind="growth-curve" seed={5} title="Schematic tree height–diameter curve" />
        </div>
        <dl className="divide-y divide-line px-6 py-2">
          {heroFacts.map((f) => (
            <div key={f.label} className="py-3.5">
              <dt className="text-[0.7rem] font-semibold tracking-[0.14em] text-sage-600 uppercase">{f.label}</dt>
              <dd className="mt-1 text-[0.95rem] leading-snug text-charcoal">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
