import { GraduationCap, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { profile } from "@/content/profile";
import { showPlaceholders } from "@/lib/placeholders";
import { cn } from "@/lib/utils";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

type Item = { key: string; label: string; href: string | null | undefined; icon: ReactNode; display?: string };

export function socialItems(): Item[] {
  const { links } = profile;
  return [
    { key: "email", label: "Send me an email", href: links.email ? `mailto:${links.email}` : null, icon: <Mail size={18} aria-hidden /> },
    { key: "linkedin", label: "LinkedIn", href: links.linkedin, icon: <LinkedInIcon /> },
    { key: "github", label: "GitHub", href: links.github, icon: <GitHubIcon /> },
    { key: "scholar", label: "Google Scholar", href: links.googleScholar, icon: <GraduationCap size={18} aria-hidden /> },
  ];
}

/**
 * Icon row of profile links. Links that are not configured yet are shown
 * dimmed and non-interactive, with an accessible "to be added" label.
 */
export function SocialLinks({ className, tone = "dark", showLabels = false }: { className?: string; tone?: "dark" | "light"; showLabels?: boolean }) {
  const base =
    tone === "dark"
      ? "text-ink-muted hover:text-forest-900 hover:bg-sage-100 border-line"
      : "text-sage-200 hover:text-paper hover:bg-forest-800 border-forest-700";
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {socialItems().filter((item) => item.href || showPlaceholders).map((item) => (
        <li key={item.key}>
          {item.href ? (
            <a
              href={item.href}
              {...(item.key !== "email" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={cn("inline-flex h-10 items-center gap-2 rounded-md border transition-colors", showLabels ? "px-3 text-sm" : "w-10 justify-center", base)}
              aria-label={showLabels ? undefined : item.label}
              title={item.label}
            >
              {item.icon}
              {showLabels && <span>{item.label}</span>}
            </a>
          ) : (
            <span
              className={cn(
                "inline-flex h-10 cursor-not-allowed items-center gap-2 rounded-md border border-dashed opacity-55",
                showLabels ? "px-3 text-sm" : "w-10 justify-center",
                tone === "dark" ? "border-sage-300 text-ink-muted" : "border-forest-600 text-sage-300",
              )}
              title={`${item.label} link to be added`}
              aria-label={`${item.label} (link to be added)`}
              role="img"
            >
              {item.icon}
              {showLabels && <span aria-hidden>{item.label}</span>}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
