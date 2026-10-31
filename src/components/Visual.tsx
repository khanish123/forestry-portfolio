import Image from "next/image";
import type { ArtworkKind } from "@/content/types";
import { cn, withBase } from "@/lib/utils";
import { Artwork } from "./Artwork";

/**
 * Shows a photograph when one is configured, otherwise a generated illustration.
 * Photos live in /public/images and are referenced by path in /src/content.
 */
export function Visual({
  image,
  alt = "",
  artwork,
  seed,
  className,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
}: {
  image?: string | null;
  alt?: string;
  artwork: ArtworkKind;
  seed?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-sage-100", className)}>
      {image ? (
        <Image src={withBase(image)} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <Artwork kind={artwork} seed={seed} />
      )}
    </div>
  );
}
