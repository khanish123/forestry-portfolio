import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/source-serif-4";
import "@fontsource-variable/fraunces";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { displayName, profile, site } from "@/content/profile";
import { theme, themeColors, themeSwitcherEnabled } from "@/content/theme";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const fullTitle = `${displayName} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: fullTitle, template: `%s · ${displayName}` },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: displayName }],
  creator: displayName,
  openGraph: {
    type: "website",
    title: fullTitle,
    description: site.description,
    siteName: site.title,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title: fullTitle, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: themeColors[theme],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" data-theme={theme} suppressHydrationWarning>
      <head>
        {/* Enables reveal-on-scroll only when JavaScript is available */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {themeSwitcherEnabled && (
          <script
            dangerouslySetInnerHTML={{
              __html: "try{var t=localStorage.getItem('preview-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}",
            }}
          />
        )}
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-forest-900 focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header name={displayName} cvPath={profile.cvPath} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer name={displayName} />
        {themeSwitcherEnabled && <ThemeSwitcher />}
      </body>
    </html>
  );
}
