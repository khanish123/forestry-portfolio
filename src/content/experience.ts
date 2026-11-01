import type { Experience } from "./types";

/**
 * ✏️  EDIT ME — professional, research and field experience (most recent first).
 * Source: academic CV. Chronology checked: no overlapping roles; total ≈ 4 years
 * (3 + 4 + 6 + 12 + 12 + 12 months), matching the CV.
 *
 * `engagement` distinguishes paid employment, research traineeships,
 * voluntary research assistance and internships.
 */
export const experience: Experience[] = [
  {
    role: "Research Trainee",
    organisation: "School of Forest Sciences, University of Eastern Finland",
    location: "Joensuu, Finland",
    start: "Oct 2025",
    end: "Dec 2025",
    category: "Research",
    engagement: "Research traineeship",
    summary: "Research on tree height–diameter model transferability using parametric and data-driven approaches.",
    responsibilities: [],
  },
  {
    role: "Research Assistant (Volunteer)",
    organisation: "University of Eastern Finland",
    location: "Joensuu, Finland",
    start: "Apr 2025",
    end: "Jul 2025",
    category: "Research",
    engagement: "Voluntary research assistance",
    project: "Acidic peatland restoration project",
    summary: null,
    responsibilities: [
      "Prepared peat soil and biochar treatments and set up a greenhouse experiment",
      "Maintained plants, monitored soil pH and collected leachate samples",
      "Measured plant growth and supported data recording and laboratory analysis",
      "Supported general maintenance of the experimental set-up",
    ],
  },
  {
    role: "Forest Field Assistant",
    organisation: "Rehman Habib Consultant (Pvt) Limited",
    location: "Khyber Pakhtunkhwa, Pakistan",
    start: "Jul 2023",
    end: "Jan 2024",
    category: "Consultancy",
    engagement: "Employment",
    project: "Feasibility Study PC-II for Command Area Development of Small Dams, Khyber Pakhtunkhwa",
    summary: null,
    responsibilities: [
      "Collected primary forest data on designated forms for 29 small dams and one irrigation scheme",
      "Analysed the data and contributed to the final report",
    ],
  },
  {
    role: "Research Assistant",
    organisation: "Pakistan Forest Institute, University of Peshawar",
    location: "Peshawar, Pakistan",
    start: "Aug 2018",
    end: "Jul 2019",
    category: "Research",
    engagement: "Employment",
    project: "Sustainable Forest Management",
    summary: null,
    responsibilities: [
      "Collected data on growing stock and carbon stocks in agroforestry systems",
      "Conducted socio-economic surveys and baseline data collection in the field",
      "Measured areas using GPS",
      "Entered and analysed data in MS Excel",
    ],
  },
  {
    role: "Forest Inventory Assistant",
    organisation: "Pakistan Forest Institute",
    location: "Peshawar, Pakistan",
    start: "Jul 2017",
    end: "Jun 2018",
    category: "Forest inventory",
    engagement: "Employment",
    project: "Sustainable Forest Management",
    summary: null,
    responsibilities: [
      "Laid out sample plots on GIS maps and GT sheets",
      "Collected data on above-ground biomass, deadwood, leaf litter and soil carbon",
      "Entered and analysed data in MS Excel",
    ],
  },
  {
    role: "Intern",
    organisation: "Pakistan Forest Institute",
    location: "Peshawar, Pakistan",
    start: "Nov 2013",
    end: "Oct 2014",
    category: "Internship",
    engagement: "Internship",
    project: "Carbon Stock Assessment of Forests of Khyber Pakhtunkhwa",
    summary: null,
    responsibilities: [
      "Laid out sample plots on GIS maps and GT sheets and navigated to sample points using GPS",
      "Established sample plots in the forest",
      "Collected data on above-ground biomass and soil carbon",
      "Entered and analysed data in MS Excel",
    ],
  },
];
