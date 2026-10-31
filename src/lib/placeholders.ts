/**
 * Placeholders ("✎ To confirm" markers and draft notes) are shown during local
 * development so you can see what is still missing, and hidden on the live site.
 * Set NEXT_PUBLIC_SHOW_PLACEHOLDERS=true to show them in a deployed build too.
 */
export const showPlaceholders =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true";
