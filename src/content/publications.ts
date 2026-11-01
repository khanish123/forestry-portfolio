import type { Publication } from "./types";

/**
 * ✏️  EDIT ME — peer-reviewed publications (8 according to the CV).
 *
 * The six entries below were verified against journal pages and indexing
 * records (MDPI, Journal of Forest Science, Baltic Forestry, Forestist,
 * INNSPUB, DOAJ/AGRIS). Items marked `authorsComplete: false` or `doi: null`
 * need completing from the published article.
 * Entries are grouped and sorted by year automatically.
 */
export const publications: Publication[] = [
  {
    title:
      "Restoration of forests: Examining tree species diversity and growth for successful ecosystem restoration in Pakistan",
    authors: "Khan, I. A., Nazre, M., Ali, A., Ali, N., Khan, B. A., Ahmad, N., & Ahmad, S.",
    year: 2024,
    journal: "Baltic Forestry",
    volume: "30",
    issue: "2",
    doi: "10.46490/BF779",
    type: "Research article",
    note: "Published online 11 February 2025.",
  },
  {
    title:
      "Evaluating Survival Rate and Growth Performance of Multipurpose Species Raised Under Billion Tree Afforestation Project, Pakistan",
    authors: "Ali, N., Ali, A., Ahmad, N., Khan, I. A., & Ullah, H.",
    year: 2024,
    journal: "Forestist",
    volume: "74",
    issue: "1",
    pages: "44–52",
    doi: null,
    url: "https://forestist.org/en/evaluating-survival-rate-and-growth-performance-of-multipurpose-species-raised-under-billion-tree-afforestation-project-pakistan-132771",
    type: "Research article",
  },
  {
    title: "Assessment of aboveground biomass and carbon stock of subtropical pine forest of Pakistan",
    authors: "Ali, N., Saad, M., Ali, A., Ahmad, N., Khan, I. A., Ullah, H., & Imran, A. B.",
    year: 2023,
    journal: "Journal of Forest Science",
    volume: "69",
    issue: "7",
    pages: "287–304",
    doi: "10.17221/125/2022-JFS",
    type: "Research article",
  },
  {
    title: "Comparative Analysis of Remote Sensing and Geo-Statistical Techniques to Quantify Forest Biomass",
    authors: "Ahmad, N., Ullah, S., Zhao, N., … Khan, I. A., …",
    authorsComplete: false,
    year: 2023,
    journal: "Forests",
    volume: "14",
    issue: "2",
    pages: "379",
    doi: "10.3390/f14020379",
    type: "Research article",
  },
  {
    title: "Assessment of Above-Ground Biomass in Pakistan Forest Ecosystem’s Carbon Pool: A Review",
    authors: "Khan, I. A., Khan, W. R., Ali, A., & Nazre, M.",
    year: 2021,
    journal: "Forests",
    volume: "12",
    issue: "5",
    pages: "586",
    doi: "10.3390/f12050586",
    type: "Review article",
  },
  {
    title: "Tree biomass and carbon estimation of Pinus roxburghii and Eucalyptus camaldulensis",
    authors: "Khan, I. A., Ali, A., Hussain, M., Ullah, H., …",
    authorsComplete: false,
    year: 2018,
    journal: "Journal of Biodiversity and Environmental Sciences",
    volume: "13",
    issue: "6",
    pages: "9–16",
    doi: null,
    url: "https://innspub.net/tree-biomass-and-carbon-estimation-of-pinus-roxburghii-and-eucalyptus-camaldulensis/",
    type: "Research article",
  },
];

/** Total number of peer-reviewed articles (from the CV). */
export const publicationCount = 8;

/** Name variants highlighted in author lists. */
export const ownNameVariants = ["Khan, I. A."];

/**
 * Optional: manuscripts in preparation or under review. Use cautiously and
 * only describe them as "in preparation" or "under review" when accurate.
 */
export const workInProgress: { title: string; status: "In preparation" | "Under review"; authors?: string }[] = [];
