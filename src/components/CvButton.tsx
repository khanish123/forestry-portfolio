import { Download, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { withBase } from "@/lib/utils";
import { ButtonLink } from "./Button";

/**
 * Downloads the CV when `profile.cvPath` is set; otherwise links to the
 * CV request form on the contact page, which emails the request directly.
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
  return (
    <ButtonLink href="/contact#cv" variant={variant} className={className}>
      <Mail size={16} aria-hidden />
      Request CV
    </ButtonLink>
  );
}
