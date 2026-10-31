import type { Publication } from "./types";

/**
 * ✏️  EDIT ME — publications.
 *
 * Only add VERIFIED publications. Copy the details from the journal page.
 * Entries are automatically sorted by year (newest first).
 *
 * Example:
 * {
 *   title: "Full article title",
 *   authors: "Lastname, A., Lastname, B., & Lastname, C.",
 *   year: 2025,
 *   journal: "Forest Ecology and Management",
 *   volume: "560",
 *   pages: "121234",
 *   doi: "10.1016/j.foreco.2025.121234",
 *   url: "https://doi.org/10.1016/j.foreco.2025.121234",
 *   type: "Journal article",
 * },
 */
export const publications: Publication[] = [];

/** Shown while the list above is empty. Source: academic CV. */
export const publicationSummary =
  "I have authored 8 peer-reviewed scientific articles in national and international journals. A detailed list will be added here; the complete record is available on Google Scholar.";

/**
 * Optional: manuscripts in preparation or under review. Use cautiously and
 * only describe them as "in preparation" or "under review" when accurate.
 */
export const workInProgress: { title: string; status: "In preparation" | "Under review"; authors?: string }[] = [];
