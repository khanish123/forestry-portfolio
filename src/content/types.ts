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
  country: string;
  start: Maybe;
  end: Maybe;
  thesis: Maybe;
  supervisor: Maybe;
  notes: Maybe;
}

export interface Experience {
  role: Maybe;
  organisation: Maybe;
  location: Maybe;
  start: Maybe;
  end: Maybe;
  category: "Research" | "Field research" | "Forestry" | "Development sector";
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
}

export interface Publication {
  title: string;
  /** Full author list exactly as published. */
  authors: string;
  year: number;
  journal: string;
  volume?: string;
  pages?: string;
  doi?: string;
  url?: string;
  type?: "Journal article" | "Conference paper" | "Book chapter" | "Thesis" | "Preprint" | "Report";
}

export type SkillLevel = "Proficient" | "Working knowledge" | "Foundational" | "Beginner";

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
