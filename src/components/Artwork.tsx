import type { ArtworkKind } from "@/content/types";
import { cn, seededRandom } from "@/lib/utils";

/**
 * Lightweight, original SVG illustrations inspired by forest science:
 * crown maps, plantation grids, growth curves, tree rings, raster grids,
 * decision trees, topographic contours and radar swaths.
 *
 * They are deterministic (seeded) so server and client render identically,
 * weigh a few KB, and need no external image hosting.
 */

const W = 400;
const H = 300;

const greens = ["#1b3326", "#234231", "#2d533d", "#3b6a4e", "#4f8063", "#6b7c62", "#84957a", "#a2b097"];

function Canopy({ seed }: { seed: number }) {
  const r = seededRandom(seed);
  const crowns = Array.from({ length: 70 }, () => ({
    x: r() * W,
    y: r() * H,
    rad: 8 + Math.pow(r(), 2) * 34,
    c: greens[Math.floor(r() * greens.length)],
    o: 0.35 + r() * 0.45,
  })).sort((a, b) => b.rad - a.rad);
  return (
    <>
      <rect width={W} height={H} fill="#e8ece2" />
      {crowns.map((c, i) => (
        <g key={i}>
          <circle cx={c.x} cy={c.y} r={c.rad} fill={c.c} fillOpacity={c.o} />
          <circle cx={c.x} cy={c.y} r={c.rad} fill="none" stroke="#f8f7f2" strokeOpacity={0.35} strokeWidth={0.8} />
          <circle cx={c.x} cy={c.y} r={1.3} fill="#f8f7f2" fillOpacity={0.6} />
        </g>
      ))}
    </>
  );
}

function Plantation({ seed }: { seed: number }) {
  const r = seededRandom(seed);
  const cols = 14;
  const rows = 10;
  const dx = W / cols;
  const dy = H / rows;
  const cells = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const x = dx * (i + 0.5) + (j % 2 ? dx * 0.25 : -dx * 0.25);
      const y = dy * (j + 0.5);
      const alive = r() > 0.16;
      const size = 3 + r() * 7;
      cells.push({ x, y, alive, size, k: `${i}-${j}` });
    }
  }
  return (
    <>
      <rect width={W} height={H} fill="#f0eee6" />
      {Array.from({ length: rows }, (_, j) => (
        <line key={j} x1={0} x2={W} y1={dy * (j + 0.5)} y2={dy * (j + 0.5)} stroke="#bfc9b5" strokeWidth={0.8} strokeDasharray="2 5" />
      ))}
      {cells.map((c) =>
        c.alive ? (
          <g key={c.k}>
            <circle cx={c.x} cy={c.y} r={c.size} fill="#3b6a4e" fillOpacity={0.25 + c.size / 16} />
            <circle cx={c.x} cy={c.y} r={1.4} fill="#1b3326" />
          </g>
        ) : (
          <g key={c.k} stroke="#9a6b1f" strokeOpacity={0.55} strokeWidth={1.2} strokeLinecap="round">
            <line x1={c.x - 3} y1={c.y - 3} x2={c.x + 3} y2={c.y + 3} />
            <line x1={c.x - 3} y1={c.y + 3} x2={c.x + 3} y2={c.y - 3} />
          </g>
        ),
      )}
    </>
  );
}

function GrowthCurve({ seed }: { seed: number }) {
  const r = seededRandom(seed);
  const x0 = 46;
  const y0 = 256;
  const xw = 320;
  const yh = 210;
  // Illustrative Chapman–Richards-type shape (not real data).
  const f = (d: number) => 1.3 + 27 * Math.pow(1 - Math.exp(-0.06 * d), 1.3);
  const px = (d: number) => x0 + (d / 60) * xw;
  const py = (h: number) => y0 - (h / 32) * yh;
  const pts = Array.from({ length: 110 }, () => {
    const d = 3 + Math.pow(r(), 0.8) * 55;
    const noise = (r() + r() + r() - 1.5) * (1.2 + d * 0.06);
    return { x: px(d), y: py(f(d) + noise) };
  });
  const curve = Array.from({ length: 60 }, (_, i) => {
    const d = 1 + i;
    return `${i === 0 ? "M" : "L"}${px(d).toFixed(1)},${py(f(d)).toFixed(1)}`;
  }).join(" ");
  return (
    <>
      <rect width={W} height={H} fill="#f2f4ee" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={x0} x2={x0 + xw} y1={y0 - (i * yh) / 4} y2={y0 - (i * yh) / 4} stroke="#d7ddcf" strokeWidth={0.8} />
      ))}
      <line x1={x0} y1={y0} x2={x0 + xw} y2={y0} stroke="#59615c" strokeWidth={1} />
      <line x1={x0} y1={y0} x2={x0} y2={y0 - yh - 6} stroke="#59615c" strokeWidth={1} />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={2.4} fill="#4f8063" fillOpacity={0.45} />
      ))}
      <path d={curve} fill="none" stroke="#1b3326" strokeWidth={2.2} strokeLinecap="round" />
      <text x={x0 + xw} y={y0 + 22} textAnchor="end" fontSize={11} fill="#59615c" fontFamily="Inter Variable, sans-serif">
        Diameter
      </text>
      <text x={x0 - 12} y={y0 - yh - 12} fontSize={11} fill="#59615c" fontFamily="Inter Variable, sans-serif">
        Height
      </text>
    </>
  );
}

function TreeRings({ seed }: { seed: number }) {
  const r = seededRandom(seed);
  const cx = W * 0.56;
  const cy = H * 0.54;
  const rings: string[] = [];
  let radius = 4;
  const phase = r() * Math.PI * 2;
  for (let k = 0; k < 34; k++) {
    radius += 2.5 + r() * 5.5 * (1 - k / 50);
    const wob = 0.04 + r() * 0.03;
    const pts = Array.from({ length: 73 }, (_, i) => {
      const a = (i / 72) * Math.PI * 2;
      const rr = radius * (1 + wob * Math.sin(3 * a + phase) + 0.025 * Math.sin(7 * a + k)) * (1 + 0.12 * Math.cos(a - 0.6));
      return `${i === 0 ? "M" : "L"}${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a) * 0.92).toFixed(1)}`;
    });
    rings.push(pts.join(" ") + "Z");
  }
  return (
    <>
      <rect width={W} height={H} fill="#efe9dc" />
      {rings.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={i % 5 === 4 ? "#6b4f2a" : "#8a6d45"}
          strokeOpacity={i % 5 === 4 ? 0.65 : 0.38}
          strokeWidth={i % 5 === 4 ? 1.6 : 0.9}
        />
      ))}
      <circle cx={cx} cy={cy} r={2.5} fill="#6b4f2a" />
    </>
  );
}

function Pixels({ seed }: { seed: number }) {
  const r = seededRandom(seed);
  const size = 20;
  const cols = W / size;
  const rows = H / size;
  const a = r() * 3;
  const ramp = ["#e8ece2", "#d7ddcf", "#bfc9b5", "#a2b097", "#84957a", "#4f8063", "#3b6a4e", "#2d533d", "#234231"];
  const cells = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const v =
        0.5 +
        0.28 * Math.sin(i * 0.35 + a) * Math.cos(j * 0.42 - a) +
        0.18 * Math.sin((i + j) * 0.22 + a * 2) +
        (r() - 0.5) * 0.22;
      const idx = Math.max(0, Math.min(ramp.length - 1, Math.floor(v * ramp.length)));
      cells.push(<rect key={`${i}-${j}`} x={i * size} y={j * size} width={size} height={size} fill={ramp[idx]} />);
    }
  }
  return (
    <>
      {cells}
      <g stroke="#f8f7f2" strokeOpacity={0.35} strokeWidth={0.6}>
        {Array.from({ length: cols + 1 }, (_, i) => (
          <line key={`v${i}`} x1={i * size} x2={i * size} y1={0} y2={H} />
        ))}
        {Array.from({ length: rows + 1 }, (_, j) => (
          <line key={`h${j}`} y1={j * size} y2={j * size} x1={0} x2={W} />
        ))}
      </g>
      <path
        d="M110,70 L230,52 L292,118 L262,214 L150,232 L92,160 Z"
        fill="none"
        stroke="#f8f7f2"
        strokeWidth={2.2}
        strokeDasharray="7 5"
      />
      {[
        [150, 110],
        [215, 150],
        [180, 190],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={9} fill="none" stroke="#f8f7f2" strokeWidth={1.6} />
          <circle cx={x} cy={y} r={2} fill="#f8f7f2" />
        </g>
      ))}
    </>
  );
}

function Network({ seed }: { seed: number }) {
  const r = seededRandom(seed);
  // A small decision-tree / ensemble motif.
  const levels = [1, 2, 4, 8];
  const nodes: { x: number; y: number; l: number; i: number }[] = [];
  levels.forEach((n, l) => {
    for (let i = 0; i < n; i++) nodes.push({ x: ((i + 0.5) / n) * (W - 60) + 30, y: 50 + l * 66, l, i });
  });
  const edges = nodes.filter((n) => n.l > 0).map((n) => {
    const parent = nodes.find((p) => p.l === n.l - 1 && p.i === Math.floor(n.i / 2))!;
    return { a: parent, b: n };
  });
  return (
    <>
      <rect width={W} height={H} fill="#f2f4ee" />
      {edges.map((e, i) => (
        <path
          key={i}
          d={`M${e.a.x},${e.a.y} C${e.a.x},${(e.a.y + e.b.y) / 2} ${e.b.x},${(e.a.y + e.b.y) / 2} ${e.b.x},${e.b.y}`}
          fill="none"
          stroke="#84957a"
          strokeWidth={1.4}
        />
      ))}
      {nodes.map((n, k) =>
        n.l === 3 ? (
          <rect key={k} x={n.x - 9} y={n.y - 9} width={18} height={18} rx={3} fill={r() > 0.5 ? "#3b6a4e" : "#a2b097"} />
        ) : (
          <g key={k}>
            <circle cx={n.x} cy={n.y} r={11} fill="#f8f7f2" stroke="#234231" strokeWidth={1.6} />
            <circle cx={n.x} cy={n.y} r={3.5} fill="#234231" />
          </g>
        ),
      )}
    </>
  );
}

function contourPaths(seed: number, count: number, centers: number) {
  const r = seededRandom(seed);
  const paths: string[] = [];
  for (let c = 0; c < centers; c++) {
    const cx = W * (0.15 + r() * 0.7);
    const cy = H * (0.15 + r() * 0.7);
    const p1 = r() * 6;
    const p2 = r() * 6;
    for (let k = 1; k <= count; k++) {
      const radius = k * (10 + r() * 3);
      const d = Array.from({ length: 97 }, (_, i) => {
        const a = (i / 96) * Math.PI * 2;
        const rr = radius * (1 + 0.16 * Math.sin(2 * a + p1 + k * 0.08) + 0.08 * Math.sin(5 * a + p2 - k * 0.11));
        return `${i === 0 ? "M" : "L"}${(cx + rr * Math.cos(a) * 1.3).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`;
      }).join(" ");
      paths.push(d + "Z");
    }
  }
  return paths;
}

function Contours({ seed, faint }: { seed: number; faint?: boolean }) {
  const paths = contourPaths(seed, faint ? 16 : 13, faint ? 3 : 2);
  return (
    <>
      {!faint && <rect width={W} height={H} fill="#e8ece2" />}
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={faint ? "#3b6a4e" : "#2d533d"}
          strokeOpacity={faint ? 0.13 : i % 4 === 0 ? 0.6 : 0.3}
          strokeWidth={faint ? 0.7 : i % 4 === 0 ? 1.3 : 0.8}
        />
      ))}
    </>
  );
}

function Radar({ seed }: { seed: number }) {
  const r = seededRandom(seed);
  const speckle = Array.from({ length: 900 }, () => {
    const t = r();
    const s = r();
    // Points inside a slanted swath
    const x = 70 + t * 330 + s * 60;
    const y = 300 - t * 260 + (s - 0.5) * 120;
    const v = 0.5 + 0.5 * Math.sin(x * 0.04) * Math.cos(y * 0.05) + (r() - 0.5) * 0.9;
    return { x, y, o: Math.max(0.08, Math.min(0.85, v * 0.6)) };
  });
  return (
    <>
      <rect width={W} height={H} fill="#1b3326" />
      <path d="M40,300 L330,0 L400,0 L400,90 L150,300 Z" fill="#234231" />
      {speckle.map((p, i) => (
        <rect key={i} x={p.x} y={p.y} width={2.2} height={2.2} fill="#d7ddcf" fillOpacity={p.o} />
      ))}
      <g stroke="#a2b097" strokeOpacity={0.5} strokeWidth={1} strokeDasharray="3 5">
        <line x1={46} y1={46} x2={140} y2={240} />
        <line x1={46} y1={46} x2={250} y2={170} />
      </g>
      {[30, 52, 74].map((rad) => (
        <path
          key={rad}
          d={`M${46 + rad * 0.45},${46 + rad * 0.9} A${rad},${rad} 0 0 0 ${46 + rad * 0.86},${46 + rad * 0.52}`}
          fill="none"
          stroke="#bfc9b5"
          strokeOpacity={0.7}
          strokeWidth={1.2}
        />
      ))}
      <g transform="translate(46 46) rotate(-30)">
        <rect x={-16} y={-4} width={10} height={8} fill="#84957a" />
        <rect x={6} y={-4} width={10} height={8} fill="#84957a" />
        <rect x={-5} y={-6} width={10} height={12} rx={1.5} fill="#e8ece2" />
      </g>
    </>
  );
}

export function Artwork({
  kind,
  seed = 7,
  className,
  faint = false,
  title,
}: {
  kind: ArtworkKind;
  seed?: number;
  className?: string;
  faint?: boolean;
  /** Accessible description. Omit for purely decorative use. */
  title?: string;
}) {
  const content = (() => {
    switch (kind) {
      case "canopy":
        return <Canopy seed={seed} />;
      case "plantation":
        return <Plantation seed={seed} />;
      case "growth-curve":
        return <GrowthCurve seed={seed} />;
      case "tree-rings":
        return <TreeRings seed={seed} />;
      case "pixels":
        return <Pixels seed={seed} />;
      case "network":
        return <Network seed={seed} />;
      case "contours":
        return <Contours seed={seed} faint={faint} />;
      case "radar":
        return <Radar seed={seed} />;
    }
  })();

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn("artwork block h-full w-full", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {content}
    </svg>
  );
}
