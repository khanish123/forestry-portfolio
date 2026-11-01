import type { LearningItem, SkillGroup, SkillLevel } from "./types";

/**
 * ✏️  EDIT ME — technical skills.
 * Levels are deliberately conservative. Adjust only if they understate
 * what you can demonstrate.
 */
export const skillLevels: { level: SkillLevel; description: string }[] = [
  { level: "Established", description: "Used independently and repeatedly in research or professional work" },
  { level: "Working knowledge", description: "Applied in projects; comfortable with occasional reference to documentation" },
  { level: "Developing", description: "Basic or emerging skill, currently being strengthened through study and practice" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Statistical analysis and modelling",
    description: "Building and evaluating statistical models for forest data.",
    icon: "chart",
    skills: [
      { name: "R", level: "Established" },
      { name: "Regression modelling", level: "Established" },
      { name: "Nonlinear mixed-effects models (NLME)", level: "Working knowledge", note: "Applied in MSc thesis" },
      { name: "Model evaluation and validation", level: "Working knowledge" },
      { name: "Tree-based mixed-effects models (RE-EM tree, GPBoost)", level: "Developing", note: "Applied in MSc thesis" },
    ],
  },
  {
    title: "Forest inventory and fieldwork",
    description: "Field-based measurement and description of forests.",
    icon: "trees",
    skills: [
      { name: "Forest measurements and sample plot establishment", level: "Established" },
      { name: "Biomass and carbon stock data collection", level: "Established" },
      { name: "Tree height–diameter relationships", level: "Established" },
      { name: "Field instruments", level: "Established", note: "Hypsometer (incl. ultrasonic), clinometer, Haga altimeter, increment borer" },
      { name: "Forest structure assessment", level: "Working knowledge" },
      { name: "Socio-economic and baseline surveys", level: "Working knowledge" },
    ],
  },
  {
    title: "Geospatial technologies",
    description: "Handling spatial data in the field and on the desktop.",
    icon: "map",
    skills: [
      { name: "GPS navigation and area measurement", level: "Established" },
      { name: "GIS (QGIS)", level: "Developing", note: "Basic use; QGIS training completed" },
      { name: "PostGIS", level: "Developing", note: "Basic" },
      { name: "Remote sensing", level: "Developing", note: "Currently learning" },
    ],
  },
  {
    title: "Data analysis",
    description: "Turning raw data into reliable, interpretable results.",
    icon: "database",
    skills: [
      { name: "Data cleaning and preparation", level: "Established" },
      { name: "MS Excel", level: "Established" },
      { name: "Data visualisation", level: "Working knowledge" },
      { name: "Statistical interpretation", level: "Working knowledge" },
    ],
  },
  {
    title: "Programming",
    description: "Scripting for reproducible analysis.",
    icon: "code",
    skills: [
      { name: "R", level: "Established" },
      { name: "Python", level: "Developing", note: "Beginner level, currently learning" },
    ],
  },
];

/** Ongoing learning, shown separately from established skills. */
export const learning: LearningItem[] = [
  {
    title: "Python programming",
    description: "Building Python skills to complement R, with a focus on data analysis and geospatial workflows.",
    icon: "code",
    focus: ["Core syntax and data structures", "Data handling with pandas", "Reproducible scripts and notebooks"],
    resources: [],
    stage: "In progress",
  },
  {
    title: "Satellite remote sensing",
    description: "Learning how optical satellite imagery is processed and used to describe forest condition and change.",
    icon: "satellite",
    focus: ["Satellite data sources", "Image pre-processing", "Vegetation indices"],
    resources: [],
    stage: "In progress",
  },
  {
    title: "Synthetic Aperture Radar (SAR)",
    description: "Exploring the principles of radar remote sensing and its potential for forest structure and biomass applications.",
    icon: "radar",
    focus: ["Radar principles and backscatter", "SAR pre-processing", "Forest applications of SAR"],
    resources: [],
    stage: "Getting started",
  },
  {
    title: "Machine learning in environmental sciences",
    description: "Learning how machine learning methods can be applied to environmental and forest data, and how to evaluate them rigorously.",
    icon: "brain",
    focus: ["Supervised learning fundamentals", "Tree-based methods", "Validation and transferability"],
    resources: [],
    stage: "In progress",
  },
];
