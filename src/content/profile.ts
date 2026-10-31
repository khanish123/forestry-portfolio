import type { Profile } from "./types";

/**
 * ✏️  EDIT ME — your core details.
 * Replace every `null` with real information. Anything left as `null`
 * appears on the website as a clearly labelled "To confirm" placeholder.
 */
export const profile: Profile = {
  name: "Ishfaq Ahmad Khan",
  role: "Forestry Researcher",
  affiliation: "MSc Forestry, University of Eastern Finland",
  location: "Joensuu, Finland",
  intro:
    "I am an early-career forestry researcher interested in understanding forest ecosystems through field-based research, statistical modelling, and emerging geospatial technologies. My research focuses on forest structure, tree growth relationships, plantation performance, and sustainable forest management.",
  portrait: null, // optional, e.g. "/images/portrait.jpg" (place the file in /public/images)
  // Set to "/cv/academic-cv.pdf" once a web-safe CV (no date of birth, home address,
  // phone number or referee contact details) is placed in /public/cv.
  // While null, CV buttons are hidden and visitors are invited to request the CV by email.
  cvPath: null,
  cvLastUpdated: null, // e.g. "October 2026"
  availability:
    "Open to PhD positions, research assistantships, and collaborations in forest ecology, forest modelling, and geospatial forest analysis.",
  links: {
    email: "ishfaqahmad860@gmail.com",
    linkedin: "https://www.linkedin.com/in/ishfaq-ahmad-khan-638a92a1",
    github: null, // e.g. "https://github.com/your-username"
    googleScholar: "https://scholar.google.com/citations?user=k2B3IGgAAAAJ&hl=en",
    orcid: null, // optional, e.g. "https://orcid.org/0000-0000-0000-0000"
  },
};

/** Short keyword list shown on the home page. */
export const interestKeywords = [
  "Forest ecology & biodiversity",
  "Forest management, restoration & regeneration",
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

/** Key facts shown in the home-page profile panel (used when there is no portrait). */
export const heroFacts: { label: string; value: string }[] = [
  { label: "Based in", value: "Joensuu, Finland" },
  { label: "Latest degree", value: "MSc Forestry, University of Eastern Finland (2026)" },
  { label: "Current research", value: "Transferability of tree height–diameter models" },
  { label: "Experience", value: "≈ 4 years of field and research work in Pakistan and Finland" },
];
