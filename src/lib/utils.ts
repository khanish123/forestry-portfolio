export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/** Prefix a /public asset path with the configured base path (GitHub Pages). */
export function withBase(path: string) {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}

/** Deterministic PRNG so generated artwork is identical on server and client. */
export function seededRandom(seed: number) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

export function formatPeriod(start: string | null, end: string | null) {
  if (!start && !end) return null;
  if (!start) return end;
  return `${start ?? "?"} – ${end ?? "Present"}`;
}
