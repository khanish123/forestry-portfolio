import type { Education } from "./types";

/**
 * ✏️  EDIT ME — education, listed in chronological order (oldest first).
 * Please confirm the order and add dates, thesis titles and supervisors.
 */
export const education: Education[] = [
  {
    degree: "Bachelor's degree",
    field: "Forestry",
    institution: "University of Peshawar",
    country: "Pakistan",
    start: null,
    end: null,
    thesis: null,
    supervisor: null,
    notes: null,
  },
  {
    degree: "Master's degree",
    field: "Environmental Sciences",
    institution: "Universiti Putra Malaysia",
    country: "Malaysia",
    start: null,
    end: null,
    thesis: null,
    supervisor: null,
    notes: null,
  },
  {
    degree: "MS / MPhil",
    field: "Forestry",
    institution: "Universiti Putra Malaysia",
    country: "Malaysia",
    start: null,
    end: null,
    thesis: null,
    supervisor: null,
    notes: null,
  },
  {
    degree: "Master's degree",
    field: "Forestry",
    institution: "University of Eastern Finland",
    country: "Finland",
    start: null,
    end: null,
    thesis: null,
    supervisor: null,
    notes: null,
  },
];

/** Narrative for the About page. Factual, based only on the degrees above. */
export const academicJourney = [
  "My academic path began with a Bachelor's degree in Forestry at the University of Peshawar, Pakistan, which gave me my foundation in forest science and forest management.",
  "I continued my studies at Universiti Putra Malaysia, completing a Master's degree in Environmental Sciences and an MS/MPhil in Forestry. This broadened my perspective from forest stands to wider environmental systems.",
  "Most recently, I completed a Master's degree in Forestry at the University of Eastern Finland, where I gained research experience in quantitative forest science.",
  "Across three countries and different forest systems, I have developed an interest in combining field-based evidence with statistical modelling and, increasingly, geospatial data to support sustainable forest management.",
];

/** Flag shown on the About page: the narrative above is a draft to confirm. */
export const academicJourneyIsDraft = true;

/**
 * Professional development — workshops, courses, certificates, conferences.
 * Add only real items. Leave the array empty to show a placeholder.
 */
export const professionalDevelopment: { title: string; provider: string; year: string; href?: string }[] = [];
