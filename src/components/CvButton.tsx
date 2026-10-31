import { Download } from "lucide-react";
import { profile } from "@/content/profile";
import { withBase } from "@/lib/utils";
import { ButtonLink } from "./Button";

export function CvButton({ variant = "primary", className, label = "Download CV" }: { variant?: "primary" | "secondary" | "light"; className?: string; label?: string }) {
  if (!profile.cvPath) return null;
  return (
    <ButtonLink href={withBase(profile.cvPath)} variant={variant} className={className} download>
      <Download size={16} aria-hidden />
      {label}
      <span className="sr-only"> (PDF)</span>
    </ButtonLink>
  );
}
