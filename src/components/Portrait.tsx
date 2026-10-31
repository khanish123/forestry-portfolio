import Image from "next/image";
import { profile } from "@/content/profile";
import { cn, withBase } from "@/lib/utils";
import { Artwork } from "./Artwork";

/** Professional portrait, or an elegant placeholder until a photo is added. */
export function Portrait({ className, name }: { className?: string; name: string }) {
  return (
    <div className={cn("relative", className)}>
      <div aria-hidden className="absolute -right-4 -bottom-4 h-full w-full rounded-2xl border border-sage-300" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sage-100 shadow-[0_30px_60px_-30px_rgba(19,36,26,0.35)]">
        {profile.portrait ? (
          <Image src={withBase(profile.portrait)} alt={`Portrait of ${name}`} fill priority sizes="(min-width: 1024px) 380px, 80vw" className="object-cover" />
        ) : (
          <div className="absolute inset-0" role="img" aria-label="Portrait photograph placeholder">
            <div className="absolute inset-0 bg-gradient-to-b from-sage-100 to-sage-200" />
            <Artwork kind="contours" seed={21} faint />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <svg viewBox="0 0 80 80" width="76" height="76" aria-hidden className="text-forest-700/70">
                <circle cx="40" cy="40" r="39" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
                <circle cx="40" cy="31" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M19 63c3-11 11-16 21-16s18 5 21 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p className="rounded bg-paper px-2.5 py-1 text-xs font-medium text-pending">✎ Professional photo — add to /public/images</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
