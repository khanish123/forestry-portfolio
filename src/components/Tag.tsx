import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({ children, className, tone = "sage" }: { children: ReactNode; className?: string; tone?: "sage" | "outline" | "dark" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        tone === "sage" && "bg-sage-100 text-forest-800",
        tone === "outline" && "border border-line text-ink-muted",
        tone === "dark" && "bg-forest-800 text-paper",
        className,
      )}
    >
      {children}
    </span>
  );
}
