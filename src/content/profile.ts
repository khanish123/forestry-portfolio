import type { Profile } from "./types";

/**
 * ✏️  EDIT ME — your core details.
 * Replace every `null` with real information. Anything left as `null`
 * appears on the website as a clearly labelled "To confirm" placeholder.
 */
export const profile: Profile = {
  name: null, // e.g. "Firstname Lastname"
  role: "Forestry Researcher",
  affiliation: null, // e.g. "School of Forest Sciences, University of Eastern Finland"
  location: null, // e.g. "Joensuu, Finland"
  intro:
    "I am an early-career forestry researcher interested in understanding forest ecosystems through field-based research, statistical modelling, and emerging geospatial technologies. My research focuses on forest structure, tree growth relationships, plantation performance, and sustainable forest management.",
  portrait: null, // e.g. "/images/portrait.jpg" (place the file in /public/images)
  cvPath: "/cv/academic-cv.pdf", // replace the placeholder PDF in /public/cv
  cvLastUpdated: null, // e.g. "October 2026"
  availability:
    "Open to PhD positions, research assistantships, and collaborations in forest ecology, forest modelling, and geospatial forest analysis.",
  links: {
    email: null, // e.g. "name@university.fi"
    linkedin: null, // e.g. "https://www.linkedin.com/in/your-profile"
    github: null, // e.g. "https://github.com/your-username"
    googleScholar: null, // e.g. "https://scholar.google.com/citations?user=XXXX"
    orcid: null, // optional, e.g. "https://orcid.org/0000-0000-0000-0000"
  },
};

/** Short keyword list shown on the home page. */
export const interestKeywords = [
  "Forest ecology & biodiversity",
  "Forest management & restoration",
  "Plantation establishment, survival & growth",
  "Height–diameter relationships & inventory modelling",
  "Biomass estimation & carbon dynamics",
  "Forest disturbances & ecosystem responses",
  "Remote sensing & geospatial analysis",
  "Machine learning in forest science",
];

/** Site-wide SEO settings. */
export const site = {
  title: "Forestry Research Portfolio",
  description:
    "Academic portfolio of an early-career forestry researcher working on forest ecology, tree growth modelling, plantation performance, forest biomass, and geospatial forest analysis.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  keywords: [
    "forestry",
    "forest ecology",
    "forest management",
    "height-diameter models",
    "forest inventory",
    "forest biomass",
    "remote sensing",
    "forest restoration",
    "early-career researcher",
  ],
};

/** Name used in headings until `profile.name` is filled in. */
export const displayName = profile.name ?? "Your Name";
export const nameIsPlaceholder = profile.name === null;

/**
 * Optional photographs (place files in /public/images). When `null`,
 * the site uses its built-in forest-inspired illustrations instead.
 */
export const siteImages: { homeBand: string | null; homeBandAlt: string } = {
  homeBand: null, // e.g. "/images/forest-canopy.jpg"
  homeBandAlt: "", // e.g. "Mixed boreal forest canopy in eastern Finland"
};
