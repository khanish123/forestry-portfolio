import Link from "next/link";
import { navigation } from "@/content/navigation";
import { profile } from "@/content/profile";
import { brandTagline, LogoMark } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Footer({ name }: { name: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-line bg-paper-dim">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <LogoMark className="h-16" />
            <div>
              <p className="font-serif text-lg leading-tight font-semibold text-charcoal">{name}</p>
              <p className="mt-1 text-[0.68rem] font-medium tracking-[0.16em] text-ink-muted uppercase">{brandTagline}</p>
            </div>
          </div>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
            {profile.role} — forest ecology, forest management, and quantitative forest data analysis.
          </p>
          <SocialLinks className="mt-5" />
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow mb-4">Explore</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink-muted hover:text-forest-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow mb-4">Get in touch</p>
          <p className="text-sm leading-relaxed text-ink-muted">{profile.availability}</p>
          <Link href="/contact" className="link-underline mt-3 inline-block text-sm font-medium text-forest-800">
            Contact me
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {name}. All rights reserved.
          </p>
          <p>Illustrations are schematic and do not represent research data.</p>
        </div>
      </div>
    </footer>
  );
}
