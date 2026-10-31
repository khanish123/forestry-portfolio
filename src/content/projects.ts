import type { Project } from "./types";

/**
 * ✏️  EDIT ME — research projects.
 *
 * IMPORTANT: research questions and methods below are DRAFT descriptions
 * written from the project titles only. They contain no results. Please
 * review each one, correct the details, then set `draft: false`.
 * Add outputs (thesis, article, poster, code repository) only when they exist.
 */
export const projects: Project[] = [
  {
    id: "hd-model-transferability",
    title:
      "Evaluating the transferability of tree height–diameter models using parametric and data-driven approaches",
    shortTitle: "Transferability of height–diameter models",
    status: null,
    period: null,
    location: null,
    affiliation: "University of Eastern Finland",
    summary:
      "Height–diameter models are widely used to predict tree heights in forest inventories, but models fitted in one setting are often applied elsewhere. This project compares parametric and data-driven modelling approaches in terms of how well their predictions transfer beyond the data used to fit them.",
    researchQuestions: [
      "How accurately do height–diameter models predict tree heights when applied outside the data used to fit them?",
      "How do parametric models compare with data-driven approaches in predictive accuracy and transferability?",
      "Which evaluation strategies give a realistic picture of model performance on new data?",
    ],
    methods: [
      "Fitting nonlinear parametric height–diameter functions, including mixed-effects formulations",
      "Fitting data-driven (machine learning) models for comparison",
      "Validation designed to test transferability to independent data",
      "Comparison using standard accuracy metrics (e.g. bias and RMSE)",
    ],
    tools: ["R"],
    outputs: [],
    keyFindings: null,
    artwork: "growth-curve",
    draft: true,
    featured: true,
  },
  {
    id: "buner-restoration",
    title: "Assessment of afforestation and forest restoration projects in District Buner, Pakistan",
    shortTitle: "Afforestation and restoration in District Buner",
    status: null,
    period: null,
    location: "District Buner, Khyber Pakhtunkhwa, Pakistan",
    affiliation: null,
    summary:
      "An assessment of afforestation and forest restoration efforts in District Buner, focusing on how restoration projects have been implemented and how planted areas are performing.",
    researchQuestions: [
      "To what extent have afforestation and restoration activities established successfully?",
      "Which site, species and management factors are associated with restoration performance?",
      "What lessons can inform future restoration planning in the region?",
    ],
    methods: [
      "Field assessment of restoration and plantation sites",
      "Data collection on survival and growth of planted trees",
      "Statistical analysis of site and management factors",
    ],
    tools: ["R"],
    outputs: [],
    keyFindings: null,
    artwork: "contours",
    draft: true,
    featured: true,
  },
  {
    id: "agb-estimation",
    title: "Estimation of above-ground forest biomass and its environmental significance",
    shortTitle: "Above-ground biomass estimation",
    status: null,
    period: null,
    location: null,
    affiliation: null,
    summary:
      "A study estimating the above-ground biomass of trees and forest stands and interpreting the estimates in the context of carbon storage and wider environmental significance.",
    researchQuestions: [
      "How much above-ground biomass is stored in the studied forest?",
      "How does biomass vary with stand structure and tree size?",
      "What do the estimates imply for carbon storage and forest management?",
    ],
    methods: [
      "Tree measurements in sample plots",
      "Biomass estimation using allometric equations",
      "Conversion of biomass to carbon stock estimates",
    ],
    tools: ["R"],
    outputs: [],
    keyFindings: null,
    artwork: "tree-rings",
    draft: true,
    featured: true,
  },
  {
    id: "plantation-performance",
    title: "Forest plantation survival and growth performance",
    shortTitle: "Plantation survival and growth",
    status: null,
    period: null,
    location: null,
    affiliation: null,
    summary:
      "An evaluation of the survival and growth of planted trees, aiming to understand which factors support successful plantation establishment.",
    researchQuestions: [
      "What are the survival rates of planted trees across sites or species?",
      "How do height and diameter growth differ among species or treatments?",
      "Which factors are associated with better establishment and growth?",
    ],
    methods: [
      "Survival counts and growth measurements in plantation plots",
      "Comparison across species, sites or treatments",
      "Statistical modelling of survival and growth",
    ],
    tools: ["R"],
    outputs: [],
    keyFindings: null,
    artwork: "plantation",
    draft: true,
  },
  {
    id: "rs-sar-learning",
    title: "Emerging learning projects in satellite remote sensing and SAR data analysis",
    shortTitle: "Satellite remote sensing and SAR (learning)",
    status: "Learning project",
    period: null,
    location: null,
    affiliation: null,
    summary:
      "Self-directed learning projects to build practical skills in satellite remote sensing and Synthetic Aperture Radar (SAR) data analysis for forest applications. These are skill-building exercises rather than completed research.",
    researchQuestions: [
      "How are optical and SAR satellite data accessed, pre-processed and analysed?",
      "How can satellite observations be linked with field-measured forest attributes?",
    ],
    methods: [
      "Working with openly available satellite data",
      "Learning pre-processing workflows for optical and SAR imagery",
      "Exploratory analysis in Python and GIS software",
    ],
    tools: ["Python (beginner)", "GIS"],
    outputs: [],
    keyFindings: null,
    artwork: "radar",
    draft: true,
  },
];
