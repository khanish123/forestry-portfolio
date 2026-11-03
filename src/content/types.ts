/**
 * Shared content types.
 *
 * Convention used throughout /src/content:
 *  - `null`  → information not yet provided. The site renders a clearly
 *              marked "To confirm" placeholder instead of inventing content.
 *  - `draft: true` → wording written as a starting point that the site owner
 *              must review. The site shows a small "Draft — please confirm" note.
 */

export type Maybe<T = string> = T | null;

export interface SocialLinks {
  email: Maybe;
  linkedin: Maybe;
  github: Maybe;
  googleScholar: Maybe;
  orcid?: Maybe;
  researchGate?: Maybe;
}

export interface Profile {
  name: Maybe;
  /** Short line shown under the name, e.g. "Forestry Researcher". */
  role: string;
  /** Main home-page headline. */
  headline: string;
  /** Optional affiliation line, e.g. current institution. */
  affiliation: Maybe;
  location: Maybe;
  intro: string;
  /** Path inside /public, e.g. "/images/portrait.jpg". */
  portrait: Maybe;
  /** Path inside /public, e.g. "/cv/academic-cv.pdf". */
  cvPath: Maybe;
  cvLastUpdated: Maybe;
  /** One-line availability statement for the call to action. */
  availability: string;
  links: SocialLinks;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  /** Department / school, shown under the institution. */
  department?: string;
  country: string;
  start: Maybe;
  end: Maybe;
  /** Main research area or thesis topic. */
  researchArea?: string;
  /** Optional thesis title (shown only when provided). */
  thesis?: string;
  /** Optional supervisor(s) (shown only when provided). */
  supervisor?: string;
  subjects?: string[];
  notes?: string;
  /** Institution logo in /public (shown on the homepage education cards). */
  logo?: { src: string; alt: string; width: number; height: number };
}

export interface Experience {
  role: Maybe;
  organisation: Maybe;
  location: Maybe;
  start: Maybe;
  end: Maybe;
  category: "Research" | "Field research" | "Forest inventory" | "Consultancy" | "Internship" | "Development sector";
  /** Nature of the engagement, shown as a labelled badge on the Experience page. */
  engagement: "Employment" | "Research traineeship" | "Voluntary research assistance" | "Internship";
  /** Project the role was part of. */
  project?: string;
  summary: Maybe;
  responsibilities: string[];
  /** Hint shown next to placeholders so the owner knows what to add. */
  placeholderHint?: string;
}

export type ArtworkKind =
  | "canopy"
  | "plantation"
  | "growth-curve"
  | "tree-rings"
  | "pixels"
  | "network"
  | "contours"
  | "radar";

export interface ResearchArea {
  id: string;
  title: string;
  short: string;
  description: string;
  themes: string[];
  artwork: ArtworkKind;
  /** Optional photograph in /public/images that replaces the artwork. */
  image?: Maybe;
  imageAlt?: string;
}

export type ProjectStatus = "Completed" | "Ongoing" | "Learning project" | null;

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  status: ProjectStatus;
  period: Maybe;
  location: Maybe;
  affiliation: Maybe;
  summary: string;
  researchQuestions: string[];
  methods: string[];
  tools: string[];
  /** Verified outputs only (thesis, paper, poster, code). Empty → placeholder. */
  outputs: { label: string; href?: string }[];
  keyFindings: Maybe;
  artwork: ArtworkKind;
  draft: boolean;
  featured?: boolean;
  /** Optional extended detail (used for the flagship MSc project). */
  models?: { name: string; abbr: string; type: "Parametric" | "Data-driven"; description: string }[];
  evaluation?: {
    metrics: { name: string; purpose: string }[];
    transferability: string[];
  };
  /**
   * Figures. `label` is shown above the title (e.g. thesis figure number);
   * `width`/`height` are the image's pixel size (used for the enlarged view).
   * Without `image` a captioned placeholder frame is shown.
   */
  figures?: {
    label?: string;
    /** Reference to the original numbering, e.g. "originally Figure 3.7 in the thesis". */
    source?: string;
    title: string;
    caption: string;
    image?: string | null;
    width?: number;
    height?: number;
    alt?: string;
  }[];
  /** Code repository. `url: null` shows a "link to be added" placeholder. */
  repository?: { url: string | null; label: string };
  /** Statement about data and document availability. */
  dataNote?: string;
}

export interface Publication {
  title: string;
  /** Author list as published. Your own name is highlighted automatically. */
  authors: string;
  /** false → the author list above is shortened; full list to be confirmed. */
  authorsComplete?: boolean;
  year: number;
  journal: string;
  volume?: string;
  issue?: string;
  pages?: string;
  /** DOI without the https://doi.org/ prefix. `null` → shown as "to be confirmed". */
  doi?: string | null;
  /** Link to the article page (used when there is no DOI). */
  url?: string;
  type?: "Research article" | "Review article" | "Conference paper" | "Book chapter" | "Thesis" | "Preprint" | "Report";
  /** Short public note, e.g. online publication date. */
  note?: string;
}

export type SkillLevel = "Established" | "Working knowledge" | "Developing";

export interface SkillGroup {
  title: string;
  description: string;
  icon: "chart" | "trees" | "map" | "database" | "code";
  skills: { name: string; level: SkillLevel; note?: string }[];
}

export interface LearningItem {
  title: string;
  description: string;
  icon: "code" | "satellite" | "radar" | "brain";
  focus: string[];
  /** Courses, tutorials, certificates — add only real ones. */
  resources: { label: string; href?: string }[];
  stage: "Getting started" | "In progress";
}
