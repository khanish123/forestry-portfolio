import type { Education } from "./types";

/**
 * ✏️  EDIT ME — education, in chronological order (oldest first).
 * Source: academic CV.
 */
export const education: Education[] = [
  {
    degree: "BSc",
    field: "Forestry",
    institution: "University of Peshawar",
    department: "Pakistan Forest Institute, Peshawar",
    country: "Pakistan",
    logo: { src: "/images/logos/pakistan-forest-institute.png", alt: "Pakistan Forest Institute, Peshawar logo", width: 393, height: 400 },
    start: null,
    end: "2014",
    researchArea: "Forest fire (term paper)",
    subjects: [
      "Forest Ecology",
      "Soil Science",
      "Forest Mensuration",
      "Silviculture",
      "Forest Statistics and Research Methods",
      "Forest Management",
      "GIS and Remote Sensing",
    ],
  },
  {
    degree: "MSc",
    field: "Forest Management and Ecosystem Sciences",
    institution: "Universiti Putra Malaysia",
    department: "Department of Forest Science and Biodiversity, Serdang",
    country: "Malaysia",
    logo: { src: "/images/logos/universiti-putra-malaysia.png", alt: "Universiti Putra Malaysia logo", width: 349, height: 400 },
    start: null,
    end: "2022",
    researchArea: "Forest restoration and regeneration ecology",
    subjects: ["Advanced Statistical Methods", "Research Methodology", "Special Topic"],
    notes: "Research-based degree. A review paper was published as part of the Special Topic course.",
  },
  {
    degree: "MSc",
    field: "Forestry",
    institution: "University of Eastern Finland",
    department: "School of Forest Sciences, Joensuu",
    country: "Finland",
    logo: { src: "/images/logos/university-of-eastern-finland.png", alt: "University of Eastern Finland logo", width: 143, height: 152 },
    start: null,
    end: "2026",
    researchArea: "Tree height–diameter model transferability (MSc thesis)",
    notes: "Completed June 2026. Supported by a Finland Scholarship.",
  },
];

/** Narrative for the About page, based on the CV. */
export const academicJourney = [
  "I trained as a forester at the Pakistan Forest Institute, University of Peshawar, where I completed a BSc in Forestry in 2014 with coursework spanning forest ecology, mensuration, silviculture, forest statistics, forest management, and GIS and remote sensing.",
  "Alongside and after my undergraduate studies, I spent several years in applied forestry at the Pakistan Forest Institute, working on carbon stock assessment, forest inventory and sustainable forest management projects across Khyber Pakhtunkhwa.",
  "I then completed a research-based MSc in Forest Management and Ecosystem Sciences at Universiti Putra Malaysia (2022), focusing on forest restoration and regeneration ecology, with advanced training in statistical methods and research methodology.",
  "Supported by a Finland Scholarship, I completed an MSc in Forestry at the University of Eastern Finland (2026). My MSc thesis research examined the transferability of tree height–diameter models, comparing a parametric nonlinear mixed-effects approach (NLME) with data-driven approaches (RE-EM tree and GPBoost).",
];

/** Set to true to show a "please confirm" note under the narrative. */
export const academicJourneyIsDraft = false;

/**
 * Professional development — workshops, courses, certificates, conferences.
 * Add only real items. `year` is optional.
 */
export const professionalDevelopment: { title: string; provider: string; year?: string; href?: string }[] = [
  { title: "Geomatics in Forestry: Data Collection and Management", provider: "University of British Columbia, Canada" },
  { title: "GIS training programme using QGIS", provider: "Central University of Karnataka, India" },
];

/** Awards, scholarships and research grants. */
export const awards: { title: string; detail: string; year?: string }[] = [
  {
    title: "Finland Scholarship",
    detail: "Awarded for the MSc in Forestry at the University of Eastern Finland.",
  },
  {
    title: "Mitacs Globalink Research Award (GRA)",
    year: "2025",
    detail:
      "Three-month visiting researcher grant for “Evaluating the impact of water availability on juvenile tree survival and establishment” at the University of Regina, Canada. The project could not be undertaken due to visa issues.",
  },
];

export const languages: { name: string; level: string }[] = [
  { name: "Pashto", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Urdu", level: "Fluent" },
  { name: "Finnish", level: "Beginner" },
];

/**
 * Homepage "Awards & Research Funding" cards (wording supplied by Ishfaq).
 * The About page uses the shorter `awards` list above.
 */
export const homepageAwards: {
  title: string;
  kind: "Scholarship" | "Research funding";
  organisation: string;
  description: string;
  icon: "scholarship" | "funding";
}[] = [
  {
    title: "Finland Scholarship",
    kind: "Scholarship",
    organisation: "University of Eastern Finland (UEF)",
    description:
      "Awarded a Finland Scholarship to support my MSc studies at the University of Eastern Finland. The scholarship included a first-year tuition fee waiver and a relocation grant.",
    icon: "scholarship",
  },
  {
    title: "Mitacs Research Internship Funding",
    kind: "Research funding",
    organisation: "Mitacs, Canada",
    description:
      "Successfully secured Mitacs funding for a research internship in Canada. However, the planned research visit could not proceed due to visa-related circumstances.",
    icon: "funding",
  },
];
