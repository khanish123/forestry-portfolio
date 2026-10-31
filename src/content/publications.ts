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

/**
 * Optional: manuscripts in preparation or under review. Use cautiously and
 * only describe them as "in preparation" or "under review" when accurate.
 */
export const workInProgress: { title: string; status: "In preparation" | "Under review"; authors?: string }[] = [];
