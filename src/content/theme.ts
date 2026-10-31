/**
 * ✏️  Choose the website theme.
 *
 *  "forest"  — Sage Forest: off-white, sage and dark green, serif headings (original)
 *  "boreal"  — Boreal Night: dark spruce background with pale lichen accents
 *  "birch"   — Nordic Birch: crisp white, near-black type, sans-serif headings, square corners
 *  "journal" — Field Journal: warm paper, moss and bark tones, editorial serif (Fraunces)
 *  "canopy"  — Tropical Canopy: white with deep teal accents and soft rounded corners
 *
 * Change `chosenTheme` below. Each theme also has its own home-page hero layout.
 */
export type ThemeName = "forest" | "boreal" | "birch" | "journal" | "canopy";

const chosenTheme: ThemeName = "forest";

/** Optional override for previews: NEXT_PUBLIC_THEME=boreal npm run build */
const envTheme = process.env.NEXT_PUBLIC_THEME as ThemeName | undefined;
export const theme: ThemeName = envTheme && envTheme in { forest: 1, boreal: 1, birch: 1, journal: 1, canopy: 1 } ? envTheme : chosenTheme;

/** Home-page hero layout used by each theme. */
export type HeroLayout = "split" | "minimal" | "editorial" | "banner";
export const heroLayouts: Record<ThemeName, HeroLayout> = {
  forest: "split",
  boreal: "split",
  birch: "minimal",
  journal: "editorial",
  canopy: "banner",
};
export const heroLayout = heroLayouts[theme];

/** Browser UI colour (mobile address bar) for each theme. */
export const themeColors: Record<ThemeName, string> = {
  forest: "#1b3326",
  boreal: "#0f1813",
  birch: "#13261d",
  journal: "#2f3a1c",
  canopy: "#073735",
};

/** Human-readable names for the theme switcher. */
export const themeOptions: { id: ThemeName; label: string }[] = [
  { id: "forest", label: "Sage Forest" },
  { id: "boreal", label: "Boreal Night" },
  { id: "birch", label: "Nordic Birch" },
  { id: "journal", label: "Field Journal" },
  { id: "canopy", label: "Tropical Canopy" },
];

/**
 * A floating theme switcher appears during local development (npm run dev).
 * Set NEXT_PUBLIC_THEME_SWITCHER=true to show it on a deployed site as well.
 */
export const themeSwitcherEnabled =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_THEME_SWITCHER === "true";
