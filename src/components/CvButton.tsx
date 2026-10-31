import { Download, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { withBase } from "@/lib/utils";
import { ButtonLink } from "./Button";

/**
 * Downloads the CV when `profile.cvPath` is set; otherwise offers to request
 * it by email so the call to action is never missing.
 */
export function CvButton({ variant = "primary", className, label = "Download CV" }: { variant?: "primary" | "secondary" | "light"; className?: string; label?: string }) {
  if (profile.cvPath) {
    return (
      <ButtonLink href={withBase(profile.cvPath)} variant={variant} className={className} download>
        <Download size={16} aria-hidden />
        {label}
        <span className="sr-only"> (PDF)</span>
      </ButtonLink>
    );
  }
  if (!profile.links.email) return null;
  const subject = encodeURIComponent("CV request");
  return (
    <ButtonLink href={`mailto:${profile.links.email}?subject=${subject}`} variant={variant} className={className}>
      <Mail size={16} aria-hidden />
      Request CV
    </ButtonLink>
  );
}
