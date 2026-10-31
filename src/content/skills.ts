import type { LearningItem, SkillGroup, SkillLevel } from "./types";

/**
 * ✏️  EDIT ME — technical skills.
 * Levels are deliberately conservative. Adjust only if they understate
 * what you can demonstrate.
 */
export const skillLevels: { level: SkillLevel; description: string }[] = [
  { level: "Proficient", description: "Used independently in research projects" },
  { level: "Working knowledge", description: "Used in projects, with occasional reference to documentation" },
  { level: "Foundational", description: "Understand the core concepts; applied in limited contexts" },
  { level: "Beginner", description: "Currently learning the basics" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Statistical analysis and modelling",
    description: "Building and evaluating statistical models for forest data.",
    icon: "chart",
    skills: [
      { name: "R", level: "Proficient" },
      { name: "Regression modelling", level: "Proficient" },
      { name: "Mixed-effects models", level: "Working knowledge" },
      { name: "Model evaluation and validation", level: "Working knowledge" },
    ],
  },
  {
    title: "Forest inventory",
    description: "Field-based measurement and description of forests.",
    icon: "trees",
    skills: [
      { name: "Forest measurements", level: "Proficient" },
      { name: "Tree height–diameter relationships", level: "Proficient" },
      { name: "Forest structure assessment", level: "Working knowledge" },
    ],
  },
  {
    title: "Geospatial technologies",
    description: "Handling and analysing spatial data.",
    icon: "map",
    skills: [
      { name: "GIS (basic)", level: "Foundational" },
      { name: "PostGIS", level: "Foundational" },
      { name: "Remote sensing", level: "Foundational", note: "Actively developing" },
    ],
  },
  {
    title: "Data analysis",
    description: "Turning raw data into reliable, interpretable results.",
    icon: "database",
    skills: [
      { name: "Data cleaning and preparation", level: "Proficient" },
      { name: "Data visualisation", level: "Working knowledge" },
      { name: "Statistical interpretation", level: "Working knowledge" },
    ],
  },
  {
    title: "Programming",
    description: "Scripting for reproducible analysis.",
    icon: "code",
    skills: [
      { name: "R", level: "Proficient" },
      { name: "Python", level: "Beginner", note: "Currently learning" },
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
