"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navigation } from "@/content/navigation";
import { cn, withBase } from "@/lib/utils";
import { brandTagline, LogoMark } from "./Logo";

export function Header({ name, cvPath }: { name: string; cvPath: string | null }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-[background-color,box-shadow,border-color] duration-300",
        scrolled || open ? "border-b border-line bg-paper/95 backdrop-blur-sm" : "border-b border-transparent bg-paper/80",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${name} — home`}>
          <LogoMark className="h-10" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.05rem] font-semibold tracking-tight text-charcoal group-hover:text-forest-800">{name}</span>
            <span className="mt-1 hidden text-[0.62rem] font-medium tracking-[0.16em] text-ink-muted uppercase sm:block">{brandTagline}</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-2.5 py-2 text-[0.9rem] transition-colors",
                    isActive(item.href) ? "text-forest-900 font-medium" : "text-ink-muted hover:text-forest-900",
                  )}
                >
                  {item.label}
                  {isActive(item.href) && <span aria-hidden className="absolute inset-x-2.5 -bottom-[1px] h-px bg-forest-700" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {cvPath ? (
            <a
              href={withBase(cvPath)}
              download
              className="hidden items-center gap-1.5 rounded-md border border-forest-800/25 px-3 py-1.5 text-sm font-medium text-forest-900 transition-colors hover:border-forest-800/60 hover:bg-sage-50 sm:inline-flex"
            >
              <Download size={15} aria-hidden /> CV
              <span className="sr-only">(PDF)</span>
            </a>
          ) : (
            <Link
              href="/contact#cv"
              className="hidden items-center gap-1.5 rounded-md border border-forest-800/25 px-3 py-1.5 text-sm font-medium text-forest-900 transition-colors hover:border-forest-800/60 hover:bg-sage-50 sm:inline-flex"
            >
              CV
            </Link>
          )}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-charcoal hover:bg-sage-100 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page py-6">
          <ul className="divide-y divide-line">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between py-3.5 font-serif text-xl",
                    isActive(item.href) ? "text-forest-800" : "text-charcoal",
                  )}
                >
                  {item.label}
                  {isActive(item.href) && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-forest-700" />}
                </Link>
              </li>
            ))}
          </ul>
          {cvPath && (
            <a
              href={withBase(cvPath)}
              download
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-forest-800 px-5 py-3 text-sm font-medium text-paper"
            >
              <Download size={16} aria-hidden /> Download CV
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
