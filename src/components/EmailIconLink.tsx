import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Clickable envelope icon that opens the visitor's email app (mailto link).
 * The address is used only in the link and is never displayed as text.
 */
export function EmailIconLink({
  email,
  size = "md",
  className,
}: {
  email: string;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <a
      href={`mailto:${email}`}
      aria-label="Send me an email"
      title="Send me an email"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-md border border-line text-forest-800 transition-colors duration-200 hover:border-forest-700/50 hover:bg-sage-100 hover:text-forest-950",
        size === "md" ? "h-10 w-10" : "h-7 w-7 align-middle",
        className,
      )}
    >
      <Mail size={size === "md" ? 18 : 15} aria-hidden />
    </a>
  );
}
