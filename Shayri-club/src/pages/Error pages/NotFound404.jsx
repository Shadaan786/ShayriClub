import { useNavigate } from "react-router-dom";

const css = `
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500&family=Roboto:wght@400;500&display=swap");

.nf-page {
  --nf-bg: #1a1b1f;
  --nf-header: #2c2c2e;
  --nf-gold: #d49a62;
  --nf-muted: #d0d0d0;
  min-height: 100vh;
  background: var(--nf-bg);
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
}

.nf-header {
  position: relative;
  height: 57px;
  padding: 0 44px;
  background: var(--nf-header);
  display: flex;
  align-items: center;
}

.nf-logo {
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 2rem;
  letter-spacing: 0.04em;
  color: #8c8c8c;
}

.nf-status {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.1rem;
  color: #b8a99a;
  white-space: nowrap;
}

.nf-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px 60px;
}

.nf-illustration {
  width: min(560px, 85vw);
  height: auto;
  margin-bottom: 28px;
  user-select: none;
  overflow: visible;
}

.nf-title {
  font-family: "Source Serif 4", Georgia, serif;
  font-weight: 400;
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  line-height: 1.1;
  margin: 0 0 14px;
  color: #fff;
}

.nf-subtitle {
  font-size: clamp(0.95rem, 1.6vw, 1.15rem);
  color: var(--nf-muted);
  margin: 0 0 36px;
}

.nf-button {
  width: 200px;
  height: 40px;
  background: transparent;
  color: var(--nf-gold);
  border: 1px solid var(--nf-gold);
  border-radius: 16px;
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.nf-button:hover,
.nf-button:focus-visible {
  background: var(--nf-gold);
  color: var(--nf-bg);
}

/* ---------- Animation ---------- */

/* One entrance sequence on load */
.nf-illustration { animation: nf-rise 0.9s ease-out both; }
.nf-title        { animation: nf-rise 0.8s 0.30s ease-out both; }
.nf-subtitle     { animation: nf-rise 0.8s 0.45s ease-out both; }
.nf-button       { animation: nf-rise 0.8s 0.60s ease-out both; }

@keyframes nf-rise {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: none; }
}

/* Scroll drifts gently */
.nf-scroll {
  animation: nf-float 6s ease-in-out infinite alternate;
}
@keyframes nf-float {
  from { transform: translateY(0); }
  to   { transform: translateY(-5px); }
}

/* Quill rocks as if writing, pivoting on the nib */
.nf-quill-sway {
  transform-box: view-box;
  transform-origin: 455px 360px;
  animation: nf-write 4.5s ease-in-out infinite alternate;
}
@keyframes nf-write {
  0%   { transform: rotate(-2.5deg); }
  50%  { transform: rotate(1deg); }
  100% { transform: rotate(3deg); }
}

/* Ink ripples spreading from the nib */
.nf-ripple {
  transform-box: fill-box;
  transform-origin: center;
  opacity: 0;
  animation: nf-ripple 3.6s ease-out infinite;
}
.nf-ripple.r2 { animation-delay: 1.8s; }
@keyframes nf-ripple {
  0%   { transform: scale(0.3); opacity: 0.9; }
  100% { transform: scale(1.8); opacity: 0; }
}

/* Splatter dots shimmer */
.nf-spark {
  animation: nf-twinkle 3s ease-in-out infinite;
}
@keyframes nf-twinkle {
  0%, 100% { opacity: 0.35; }
  50%      { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nf-page *, .nf-page *::before, .nf-page *::after {
    animation: none !important;
  }
}

@media (max-width: 600px) {
  .nf-header { padding: 0 16px; }
  .nf-logo { font-size: 1.5rem; }
  .nf-status { font-size: 0.9rem; }
}
`;

const GOLD = "#d49a62";
const INK = "#17181c";

/* ---------- Quill geometry ----------
   Drawn upright in local space: nib tip at (0,0), feather extending to y = -LEN.
   Edges are generated from a width profile so both sides stay smooth. */
const LEN = 300;
const START = 70; // where the vane begins above the nib
const VANE = LEN - START;
const W_LEFT = 32;
const W_RIGHT = 48;

const yAt = (s) => -START - VANE * s;
const curve = (s) => 10 * Math.sin(Math.PI * s * 0.9); // slight bow in the shaft
const half = (s, W) => W * Math.sin(Math.PI * Math.pow(s, 0.7));
const f = (n) => n.toFixed(1);

function buildQuill() {
  const steps = 60;
  const left = [];
  const right = [];
  for (let i = 0; i <= steps; i++) {
    const s = i / steps;
    left.push([curve(s) - half(s, W_LEFT), yAt(s)]);
    right.push([curve(s) + half(s, W_RIGHT), yAt(s)]);
  }
  const outline =
    "M" +
    left.map(([x, y]) => `${f(x)} ${f(y)}`).join(" L") +
    " L" +
    right
      .slice()
      .reverse()
      .map(([x, y]) => `${f(x)} ${f(y)}`)
      .join(" L") +
    " Z";

  // Barbs sweep up and out from the shaft to the vane edge
  let barbs = "";
  const N = 26;
  for (let i = 1; i < N; i++) {
    const s = (i / N) * 0.96;
    const s2 = Math.min(1, s + 0.13);
    const px = curve(s);
    const py = yAt(s);
    const ex = curve(s2);
    const ey = yAt(s2);
    barbs += `M${f(px)} ${f(py)} L${f(ex - half(s2, W_LEFT))} ${f(ey)} `;
    barbs += `M${f(px)} ${f(py)} L${f(ex + half(s2, W_RIGHT))} ${f(ey)} `;
  }

  // Shaft: bare quill from the nib, then curving up through the vane
  let shaft = "M0 0 L0 " + f(-START);
  for (let i = 1; i <= steps; i++) {
    const s = i / steps;
    shaft += ` L${f(curve(s))} ${f(yAt(s))}`;
  }

  return { outline, barbs, shaft };
}

const QUILL = buildQuill();

/* Inline SVG: parchment scroll, quill and ink splashes (no image file needed).
   To use your original artwork instead, replace <ScrollIllustration /> with
   <img src={yourImage} alt="" className="nf-illustration" /> */
function ScrollIllustration() {
  return (
    <svg
      className="nf-illustration"
      viewBox="0 0 600 420"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Scroll (floats gently) */}
      <g className="nf-scroll">
        {/* Main parchment sheet */}
        <path
          d="M95 92 L150 86 L168 94 L205 90 L240 84 L282 88 L296 82 L336 86 L384 92 L395 88 L395 300 L370 306 L300 312 L240 318 L180 322 L130 330 L95 320 Z"
          fill={GOLD}
          stroke={INK}
          strokeWidth="1.5"
        />
        {/* Cracks */}
        <path d="M140 90 L146 108 L141 122" stroke={INK} strokeWidth="1.5" fill="none" />
        <path d="M268 88 L275 104 L270 116" stroke={INK} strokeWidth="1.5" fill="none" />
        {/* Inner edge shading */}
        <path d="M115 130 Q108 210 130 300" stroke={INK} strokeWidth="1" opacity="0.5" fill="none" />
        <path d="M375 120 Q382 200 366 296" stroke={INK} strokeWidth="1" opacity="0.5" fill="none" />

        {/* Left roll */}
        <path
          d="M40 82 L52 70 L66 78 L78 66 L96 74 L104 90 L112 280 L118 330 L96 350 L58 352 L44 330 Z"
          fill={GOLD}
          stroke={INK}
          strokeWidth="1.5"
        />
        <g stroke={INK} strokeWidth="0.8" opacity="0.55">
          <path d="M56 90 L62 320" />
          <path d="M64 88 L70 322" />
          <path d="M72 88 L78 326" />
          <path d="M80 90 L86 330" />
          <path d="M88 92 L94 334" />
        </g>
        <ellipse cx="78" cy="338" rx="28" ry="12" fill="none" stroke={INK} strokeWidth="1.5" />
        <ellipse cx="78" cy="338" rx="14" ry="6" fill="none" stroke={INK} strokeWidth="1.2" />

        {/* Right roll */}
        <path
          d="M384 70 L400 62 L424 66 L440 78 L444 96 L446 260 L440 300 L418 316 L392 310 L386 290 Z"
          fill={GOLD}
          stroke={INK}
          strokeWidth="1.5"
        />
        <g stroke={INK} strokeWidth="0.8" opacity="0.55">
          <path d="M398 80 L402 296" />
          <path d="M408 78 L412 300" />
          <path d="M418 80 L422 302" />
          <path d="M428 84 L432 298" />
        </g>
        <ellipse cx="418" cy="304" rx="26" ry="11" fill="none" stroke={INK} strokeWidth="1.5" />

        {/* Ink blots on parchment */}
        <g fill={INK}>
          <path d="M335 270 q10 -8 20 -2 q8 6 -2 14 q-14 6 -22 0 q-4 -6 4 -12z" />
          <circle cx="322" cy="262" r="3" />
          <circle cx="352" cy="248" r="2.5" />
          <circle cx="300" cy="292" r="2" />
          <circle cx="366" cy="258" r="1.8" />
        </g>
      </g>

      {/* Ink puddle */}
      <path
        d="M380 380 q-30 -6 -20 -18 q16 -14 52 -10 q40 -6 56 6 q12 12 -14 20 q-28 8 -74 2z"
        fill="none"
        stroke={GOLD}
        strokeWidth="1.5"
      />
      <ellipse cx="338" cy="352" rx="12" ry="5" fill="none" stroke={GOLD} strokeWidth="1.2" />
      <ellipse cx="500" cy="346" rx="10" ry="6" fill="none" stroke={GOLD} strokeWidth="1.2" />

      {/* Ripples from the nib */}
      <ellipse className="nf-ripple" cx="455" cy="364" rx="34" ry="10" fill="none" stroke={GOLD} strokeWidth="1.2" />
      <ellipse className="nf-ripple r2" cx="455" cy="364" rx="34" ry="10" fill="none" stroke={GOLD} strokeWidth="1.2" />

      {/* Quill (rocks on the nib) */}
      <g className="nf-quill-sway">
        <g transform="translate(455 360) rotate(22)">
          <path d={QUILL.outline} fill={INK} stroke={GOLD} strokeWidth="1.4" strokeLinejoin="round" />
          <path d={QUILL.barbs} fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.8" />
          <path d={QUILL.shaft} fill="none" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Nib */}
          <path d="M-3.5 -28 L0 0 L3.5 -28" fill={INK} stroke={GOLD} strokeWidth="1.6" strokeLinejoin="round" />
        </g>
      </g>

      {/* Splatters */}
      <g fill={GOLD}>
        <circle className="nf-spark" cx="528" cy="364" r="2.5" />
        <circle className="nf-spark" style={{ animationDelay: "0.6s" }} cx="560" cy="330" r="1.5" />
        <circle className="nf-spark" style={{ animationDelay: "1.2s" }} cx="42" cy="372" r="2" />
        <circle className="nf-spark" style={{ animationDelay: "1.8s" }} cx="70" cy="392" r="1.5" />
        <circle className="nf-spark" style={{ animationDelay: "2.2s" }} cx="40" cy="60" r="1.6" />
      </g>
    </svg>
  );
}

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <style>{css}</style>

      <div className="nf-page">
        <header className="nf-header">
          <span className="nf-logo">verse</span>
          <span className="nf-status">404 - Not Found</span>
        </header>

        <main className="nf-main">
          <ScrollIllustration />

          <h1 className="nf-title">This page is not found</h1>
          <p className="nf-subtitle">
            The page you are looking for does not exist or has been moved
          </p>

          <button className="nf-button" onClick={() => navigate("/")}>
            Return Home
          </button>
        </main>
      </div>
    </>
  );
}