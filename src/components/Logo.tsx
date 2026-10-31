import { withBase } from "@/lib/utils";
import { cn } from "@/lib/utils";

/**
 * Brand symbol (tree with circuit trunk). A light-line variant is used
 * automatically on the dark "boreal" theme (see themes.css).
 * Source files: /public/brand/logo-symbol.png and logo-symbol-light.png
 */
export function LogoMark({ className, alt = "" }: { className?: string; alt?: string }) {
  return (
    <span className={cn("relative inline-block shrink-0", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={withBase("/brand/logo-symbol.png")} alt={alt} width={303} height={398} className="logo-on-light h-full w-auto" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={withBase("/brand/logo-symbol-light.png")} alt="" aria-hidden width={303} height={398} className="logo-on-dark hidden h-full w-auto" />
    </span>
  );
}

export const brandTagline = "Forestry & Environmental Research";
