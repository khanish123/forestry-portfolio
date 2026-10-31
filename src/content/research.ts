import type { ResearchArea } from "./types";

/**
 * ✏️  EDIT ME — research areas.
 * To use a photograph instead of the built-in illustration, add the file to
 * /public/images and set `image: "/images/your-file.jpg"` and `imageAlt`.
 */
export const researchAreas: ResearchArea[] = [
  {
    id: "ecology",
    title: "Forest Ecology and Biodiversity",
    short: "How forest structure, composition and diversity shape ecosystem function.",
    description:
      "I am interested in how tree species composition, stand structure and site conditions together influence biodiversity and the functioning of forest ecosystems, and how these relationships change across managed and natural forests.",
    themes: ["Stand structure", "Species composition", "Biodiversity indicators", "Disturbance and recovery"],
    artwork: "canopy",
    image: null,
  },
  {
    id: "restoration",
    title: "Forest Restoration and Plantation Performance",
    short: "Evaluating whether afforestation and restoration efforts establish and grow.",
    description:
      "Afforestation and restoration programmes are only as successful as the trees that survive and grow. I am interested in assessing seedling survival, early growth and site–species matching to inform more effective plantation establishment and restoration practice.",
    themes: ["Seedling survival", "Early growth performance", "Site–species matching", "Restoration monitoring"],
    artwork: "plantation",
    image: null,
  },
  {
    id: "inventory",
    title: "Forest Inventory and Tree Growth Modelling",
    short: "Statistical models that turn field measurements into reliable forest information.",
    description:
      "Tree height is costly to measure in the field, so height–diameter models are central to forest inventory. My work focuses on fitting, evaluating and comparing these models, including how well they transfer to new sites and populations.",
    themes: ["Height–diameter models", "Mixed-effects modelling", "Model transferability", "Model evaluation"],
    artwork: "growth-curve",
    image: null,
  },
  {
    id: "biomass",
    title: "Forest Biomass and Carbon Dynamics",
    short: "Quantifying the biomass and carbon stored in forests.",
    description:
      "Accurate above-ground biomass estimates underpin forest carbon accounting and climate mitigation policy. I am interested in allometric approaches to biomass estimation and in how management and disturbance affect forest carbon stocks over time.",
    themes: ["Allometric equations", "Above-ground biomass", "Carbon stocks", "Disturbance effects"],
    artwork: "tree-rings",
    image: null,
  },
  {
    id: "remote-sensing",
    title: "Remote Sensing and Geospatial Analysis",
    short: "Extending field observations across landscapes with spatial data.",
    description:
      "Satellite imagery and spatial databases make it possible to monitor forests at scales beyond field plots. I am building skills in GIS, PostGIS and satellite remote sensing, including Synthetic Aperture Radar (SAR), to link field data with spatial observations.",
    themes: ["GIS and spatial data", "Optical satellite imagery", "SAR (learning)", "Linking plots to pixels"],
    artwork: "pixels",
    image: null,
  },
  {
    id: "machine-learning",
    title: "Machine Learning in Forest Science",
    short: "Data-driven methods alongside established statistical models.",
    description:
      "I am interested in when data-driven methods add value over established parametric models in forest science, and in comparing them transparently in terms of accuracy, interpretability and transferability. This is an area of active learning.",
    themes: ["Parametric vs data-driven models", "Predictive performance", "Interpretability", "Python (learning)"],
    artwork: "network",
    image: null,
  },
];

/**
 * Future research directions — what you hope to work on next (e.g. in a PhD).
 * DRAFT: written from your stated interests; please edit to match your plans.
 */
export const futureDirections = {
  draft: true,
  items: [
    {
      title: "Transferable models for forest inventory",
      text: "Developing tree- and stand-level models that remain reliable when applied to new sites, species and forest conditions.",
    },
    {
      title: "Linking field plots with satellite observations",
      text: "Combining field-measured forest attributes with optical and SAR satellite data to estimate forest structure, biomass and change across landscapes.",
    },
    {
      title: "Evidence for restoration and plantation management",
      text: "Using survival, growth and disturbance data to support more effective afforestation and restoration, particularly in South Asian forest landscapes.",
    },
  ],
};
