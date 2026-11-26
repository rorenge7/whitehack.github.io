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

/** クレヨンで引いた横線：細かく上下に揺れる */
export function scribble(x1: number, x2: number, y: number, wave: number, seed: number) {
  const r = rng(seed);
  const steps = 9;
  let d = `M${x1} ${y + (r() - 0.5) * wave}`;
  for (let i = 1; i <= steps; i++) {
    const x = x1 + ((x2 - x1) * i) / steps;
    const cx = x - (x2 - x1) / steps / 2;
    d += ` Q${cx.toFixed(1)} ${(y + (r() - 0.5) * 2 * wave).toFixed(1)} ${x.toFixed(1)} ${(y + (r() - 0.5) * wave).toFixed(1)}`;
  }
  return d;
}

/** 色鉛筆で塗った面（viewBox 0 0 w h）。下塗りの輪郭はがたつかせ、斜線は少し曲げて長さもばらつかせる */
export function pencilFill(w: number, h: number, seed: number, gap = 4) {
  const r = rng(seed);
  const rnd = (a: number, b: number) => a + (b - a) * r();
  // 下塗り：辺に沿って点を打ち、少しずつ内外にずらす
  const pts: [number, number][] = [];
  const step = 10;
  for (let x = 2; x <= w - 2; x += step) pts.push([x + rnd(-1, 1), rnd(0.8, 1.8)]);
  for (let y = 2; y <= h - 2; y += step) pts.push([w - rnd(0.8, 1.8), y + rnd(-1, 1)]);
  for (let x = w - 2; x >= 2; x -= step) pts.push([x + rnd(-1, 1), h - rnd(0.8, 1.8)]);
  for (let y = h - 2; y >= 2; y -= step) pts.push([rnd(0.8, 1.8), y + rnd(-1, 1)]);
  const base = "M" + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(" L") + " Z";
  // 斜線：左下→右上。端は短く止まったりはみ出したりする
  const slope = h * 0.8; // 1本の横方向の進み
  const strokes: { d: string; w: number; o: number }[] = [];
  for (let x0 = -slope; x0 < w; x0 += gap + rnd(-1, 1.2)) {
    const L = rnd(-1.5, 0), R = w + rnd(0, 1.5); // はみ出しは小さく、そろえる
    let t0 = 0, t1 = 1;
    if (x0 < L) t0 = (L - x0) / slope;
    if (x0 + slope > R) t1 = (R - x0) / slope;
    t0 += rnd(-0.02, 0.01); t1 += rnd(-0.01, 0.02);
    if (t1 - t0 < 0.08) continue;
    const p = (t: number): [number, number] => [x0 + slope * t, h - h * t];
    const [ax, ay] = p(t0), [bx, by] = p(t1);
    const bow = rnd(-1.8, 1.8);
    const mx = (ax + bx) / 2 + bow, my = (ay + by) / 2 + bow * 0.6;
    strokes.push({ d: `M${ax.toFixed(1)} ${ay.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${bx.toFixed(1)} ${by.toFixed(1)}`, w: rnd(1.1, 2.4), o: rnd(0.55, 1) });
  }
  return { base, strokes };
}
