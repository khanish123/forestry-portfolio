"use client";

import { useEffect, useState } from "react";
import { Palette, X } from "lucide-react";
import { theme as defaultTheme, themeOptions, type ThemeName } from "@/content/theme";
import { cn } from "@/lib/utils";

const KEY = "preview-theme";

/** Floating panel to preview themes. Choice is stored in this browser only. */
export function ThemeSwitcher() {
  const [open, setOpen] = useState(true);
  const [current, setCurrent] = useState<ThemeName>(defaultTheme);

  useEffect(() => {
    const saved = localStorage.getItem(KEY) as ThemeName | null;
    if (saved && themeOptions.some((t) => t.id === saved)) setCurrent(saved);
  }, []);

  const choose = (id: ThemeName) => {
    setCurrent(id);
    document.documentElement.dataset.theme = id;
    localStorage.setItem(KEY, id);
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-forest-800 text-paper shadow-lg"
        aria-label="Open theme preview"
      >
        <Palette size={20} />
      </button>
    );
  }

  return (
    <div
      role="region"
      aria-label="Theme preview"
      className="fixed right-4 bottom-4 z-50 w-60 rounded-xl border border-line bg-surface p-4 text-sm shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]"
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="flex items-center gap-2 font-semibold text-charcoal">
          <Palette size={16} aria-hidden /> Theme preview
        </p>
        <button type="button" onClick={() => setOpen(false)} aria-label="Minimise theme preview" className="rounded p-1 text-ink-muted hover:bg-sage-100">
          <X size={16} />
        </button>
      </div>
      <ul className="space-y-1">
        {themeOptions.map((t) => (
          <li key={t.id}>
            <button
              type="button"
              onClick={() => choose(t.id)}
              aria-pressed={current === t.id}
              className={cn(
                "flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition-colors",
                current === t.id ? "bg-forest-800 text-paper" : "text-ink hover:bg-sage-100",
              )}
            >
              {t.label}
              {t.id === defaultTheme && <span className="text-xs opacity-70">live</span>}
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs leading-snug text-ink-muted">Preview only. To apply, set chosenTheme in src/content/theme.ts.</p>
    </div>
  );
}
