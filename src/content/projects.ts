import type { Project } from "./types";

/**
 * ✏️  EDIT ME — research projects.
 *
 * IMPORTANT: research questions and methods below are DRAFT descriptions
 * written from the project titles (and, for the MSc project, the model names
 * NLME, RE-EM tree and GPBoost). They contain no results. Please review each
 * one, correct the details, then set `draft: false`.
 * Figures: add PNG/JPG files to /public/images and set `image`.
 * Repository: set `repository.url` once the code is public.
 * Add outputs (thesis, article, poster, code repository) only when they exist.
 */
export const projects: Project[] = [
  {
    id: "hd-model-transferability",
    title:
      "Evaluating the transferability of tree height–diameter models using parametric and data-driven approaches",
    shortTitle: "Transferability of height–diameter models",
    status: "Completed",
    period: "2025 – 2026",
    location: "Joensuu, Finland",
    affiliation: "MSc thesis research · School of Forest Sciences, University of Eastern Finland",
    summary:
      "Height–diameter models are widely used to predict tree heights in forest inventories, but models fitted in one setting are often applied elsewhere. This MSc thesis project compares a parametric nonlinear mixed-effects approach (NLME) with two data-driven mixed-effects approaches (RE-EM tree and GPBoost) in terms of how well their predictions transfer beyond the data used to fit them.",
    researchQuestions: [
      "How accurately do height–diameter models predict tree heights when applied outside the data used to fit them?",
      "How do parametric models compare with data-driven approaches in predictive accuracy and transferability?",
      "Which evaluation strategies give a realistic picture of model performance on new data?",
    ],
    methods: [
      "Fitting nonlinear mixed-effects (NLME) height–diameter models",
      "Fitting data-driven mixed-effects models: RE-EM tree and GPBoost",
      "Validation designed to test transferability to independent data",
      "Comparison using standard accuracy metrics (e.g. bias and RMSE)",
    ],
    tools: ["R"],
    outputs: [],
    keyFindings: null,
    artwork: "growth-curve",
    draft: true,
    featured: true,
    models: [
      {
        name: "Nonlinear mixed-effects model",
        abbr: "NLME",
        type: "Parametric",
        description:
          "A nonlinear height–diameter function with random effects that account for the grouped structure of forest inventory data (trees measured within plots or stands).",
      },
      {
        name: "Random-effects expectation–maximisation tree",
        abbr: "RE-EM tree",
        type: "Data-driven",
        description:
          "A regression tree combined with random effects for grouped data, estimated iteratively with the expectation–maximisation (EM) algorithm.",
      },
      {
        name: "Gaussian process boosting",
        abbr: "GPBoost",
        type: "Data-driven",
        description:
          "Gradient tree-boosting combined with grouped random effects, allowing a flexible, non-parametric fixed-effects component within a mixed-effects framework.",
      },
    ],
    evaluation: {
      metrics: [
        { name: "RMSE", purpose: "Root mean square error: overall magnitude of prediction error" },
        { name: "Bias", purpose: "Mean prediction error: systematic over- or under-prediction of tree height" },
      ],
      transferability: [
        "Models are fitted on one dataset and evaluated on independent data that were not used for model fitting.",
        "Predictive accuracy on the independent data is compared between the parametric (NLME) and data-driven (RE-EM tree, GPBoost) approaches.",
      ],
    },
    // Original MSc thesis figures (files in /public/images/thesis, unaltered).
    figures: [
      {
        label: "Figure 1",
        source: "originally Figure 3.7 in the thesis",
        title: "NLME predictions after plot-level calibration",
        caption: "Calibrated NLME predictions using k = 3 calibration trees per plot.",
        image: "/images/thesis/fig-3-7-nlme-calibrated.png",
        width: 750,
        height: 729,
        alt: "Scatter plot of predicted tree height (m) against observed tree height (m) for calibrated NLME predictions, with a dashed 1:1 reference line.",
      },
      {
        label: "Figure 2",
        source: "originally Figure 3.11 in the thesis",
        title: "RE-EM tree predictions after plot-level calibration",
        caption: "Calibrated RE-EM tree predictions using k = 3 calibration trees per plot.",
        image: "/images/thesis/fig-3-11-reemtree-calibrated.png",
        width: 750,
        height: 750,
        alt: "Scatter plot of predicted tree height (m) against observed tree height (m) for calibrated RE-EM tree predictions, with a dashed 1:1 reference line.",
      },
      {
        label: "Figure 3",
        source: "originally Figure 3.13 in the thesis",
        title: "GPBoost predictions on an independent dataset",
        caption: "Generic GPBoost predictions on the independent dataset before calibration.",
        image: "/images/thesis/fig-3-13-gpboost-independent.png",
        width: 1033,
        height: 699,
        alt: "Scatter plot of predicted tree height (m) against observed tree height (m) for generic GPBoost predictions on the independent dataset before calibration, with a solid reference line.",
      },
    ],
    repository: { url: "https://github.com/khanish123/Tree-height-diameter-model-transferability-Thesis", label: "Analysis code on GitHub" },
    dataNote:
      "The tree measurement data used in this project are subject to data-use restrictions and are not published on this website. The MSc thesis document is likewise not distributed here.",
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
