// 手描き風の線をビルド時に生成する（閲覧時のJSは不要）
// seed を固定しているので、毎回同じ形になる

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** 2点間を少し揺らした線（二度引きで鉛筆らしさを出す） */
export function wobblyLine(x1: number, y1: number, x2: number, y2: number, jitter: number, seed: number) {
  const r = rng(seed);
  const j = () => (r() - 0.5) * 2 * jitter;
  const mx = (x1 + x2) / 2 + j();
  const my = (y1 + y2) / 2 + j();
  return `M${x1 + j()} ${y1 + j()} Q${mx} ${my} ${x2 + j()} ${y2 + j()}`;
}

/** 揺らした長方形。viewBox 0 0 w h 内に描く */
export function wobblyRect(w: number, h: number, jitter: number, seed: number, inset = 2) {
  const a = inset, b = w - inset, c = inset, d = h - inset;
  return [
    wobblyLine(a, c, b, c, jitter, seed),
    wobblyLine(b, c, b, d, jitter, seed + 1),
    wobblyLine(b, d, a, d, jitter, seed + 2),
    wobblyLine(a, d, a, c, jitter, seed + 3),
  ].join(" ");
}

/** クレヨンで塗ったような不定形 */
export function blobPath(seed: number, wobble = 0.18) {
  const r = rng(seed);
  const n = 8;
  const pts = Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    const rad = 40 * (1 - wobble + r() * wobble * 2);
    return [50 + Math.cos(t) * rad, 50 + Math.sin(t) * rad];
  });
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d + "Z";
}
