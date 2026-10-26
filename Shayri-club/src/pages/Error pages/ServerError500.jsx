// import { useEffect, useState } from "react";

// /**
//  * 500 error page — built on a fixed 1920 x 1280 stage that scales
//  * uniformly to any viewport, so proportions never distort.
//  */
// const STAGE_W = 1920;
// const STAGE_H = 1280;

// function useStageScale() {
//   const [size, setSize] = useState({ scale: 1, x: 0, y: 0 });

//   useEffect(() => {
//     const update = () => {
//       const w = window.innerWidth;
//       const h = window.innerHeight;
//       const scale = Math.min(w / STAGE_W, h / STAGE_H);
//       setSize({
//         scale,
//         x: (w - STAGE_W * scale) / 2,
//         y: (h - STAGE_H * scale) / 2,
//       });
//     };
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   return size;
// }

// const css = `
// @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=EB+Garamond:wght@400;500&family=Inter:wght@300;400&display=swap');

// .err-root {
//   position: fixed;
//   inset: 0;
//   overflow: hidden;
//   background: #181a24;
// }
// .err-stage {
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: ${STAGE_W}px;
//   height: ${STAGE_H}px;
//   transform-origin: top left;
//   background:
//     radial-gradient(ellipse 60% 55% at 50% 45%, #1b1d28 0%, #181a24 60%, #161822 100%);
//   color: #f1eff0;
// }
// .err-logo {
//   position: absolute;
//   left: 76px;
//   top: 56px;
//   margin: 0;
//   font-family: 'Cormorant Garamond', 'Times New Roman', serif;
//   font-weight: 400;
//   font-size: 42px;
//   line-height: 48px;
//   letter-spacing: 0.34em;
//   color: #8d8f98;
// }
// .err-code {
//   position: absolute;
//   left: 0;
//   width: 100%;
//   top: 74px;
//   text-align: center;
//   font-family: 'Inter', Arial, sans-serif;
//   font-weight: 300;
//   font-size: 20px;
//   line-height: 26px;
//   color: #6d6f78;
// }
// .err-art {
//   position: absolute;
//   left: 430px;
//   top: 320px;
//   width: 1070px;
//   height: 480px;
// }
// .err-title {
//   position: absolute;
//   left: 0;
//   width: 100%;
//   top: 916px;
//   margin: 0;
//   text-align: center;
//   font-family: 'EB Garamond', 'Times New Roman', serif;
//   font-weight: 400;
//   font-size: 72px;
//   line-height: 84px;
//   letter-spacing: -0.01em;
//   color: #f3f1f2;
// }
// .err-sub {
//   position: absolute;
//   left: 0;
//   width: 100%;
//   top: 1020px;
//   margin: 0;
//   text-align: center;
//   font-family: 'Inter', Arial, sans-serif;
//   font-weight: 300;
//   font-size: 26px;
//   line-height: 34px;
//   color: #b4b4ba;
// }
// .err-btn {
//   position: absolute;
//   left: 777px;
//   top: 1121px;
//   width: 361px;
//   height: 77px;
//   box-sizing: border-box;
//   border: 1.5px solid #9c6440;
//   border-radius: 12px;
//   background: #212227;
//   color: #f4f2f3;
//   font-family: 'Inter', Arial, sans-serif;
//   font-weight: 400;
//   font-size: 28px;
//   letter-spacing: -0.01em;
//   cursor: pointer;
//   transition: border-color .2s ease, background .2s ease;
// }
// .err-btn:hover { border-color: #d89a68; background: #26272d; }
// .err-btn:focus-visible { outline: 2px solid #d89a68; outline-offset: 4px; }
// `;


// /* ---------- Feather geometry (generated from a single shaft curve) ---------- */
// const SHAFT = [[921, 648], [1080, 578], [1270, 520], [1483, 511]];
// const T0 = 0.2; // where the vane begins along the shaft

// const shaftPt = (t) => {
//   const u = 1 - t;
//   const [p0, p1, p2, p3] = SHAFT;
//   return [0, 1].map(
//     (i) => u * u * u * p0[i] + 3 * u * u * t * p1[i] + 3 * u * t * t * p2[i] + t * t * t * p3[i]
//   );
// };
// const shaftNormal = (t) => {
//   const u = 1 - t;
//   const [p0, p1, p2, p3] = SHAFT;
//   const d = [0, 1].map(
//     (i) => 3 * u * u * (p1[i] - p0[i]) + 6 * u * t * (p2[i] - p1[i]) + 3 * t * t * (p3[i] - p2[i])
//   );
//   const len = Math.hypot(d[0], d[1]);
//   return [d[1] / len, -d[0] / len]; // points "up" the page
// };
// const vaneWidth = (t, max) => {
//   if (t <= T0) return 0;
//   const s = (t - T0) / (1 - T0);
//   return max * Math.sin(Math.PI * Math.pow(s, 1.6));
// };
// const edgePt = (t, max, dir) => {
//   const [x, y] = shaftPt(t);
//   const [nx, ny] = shaftNormal(t);
//   const w = vaneWidth(t, max) * dir;
//   return [x + nx * w, y + ny * w];
// };
// const f = (n) => n.toFixed(1);
// const pt = (p) => `${f(p[0])} ${f(p[1])}`;

// const UP = 46; // upper vane half-width
// const LOW = 33; // lower vane half-width

// function buildFeather() {
//   const N = 64;
//   const ts = Array.from({ length: N + 1 }, (_, i) => T0 + ((1 - T0) * i) / N);

//   const upper = ts.map((t) => edgePt(t, UP, 1));
//   const lower = ts.map((t) => edgePt(t, LOW, -1)).reverse();
//   const outline =
//     "M" + upper.map(pt).join(" L") + " L" + lower.map(pt).join(" L") + " Z";

//   const shaft = "M" + Array.from({ length: 41 }, (_, i) => pt(shaftPt(i / 40))).join(" L");

//   // lens-shaped quill base (calamus)
//   const quillBase =
//     "M" +
//     Array.from({ length: 21 }, (_, i) => {
//       const t = (i / 20) * 0.5;
//       const [x, y] = shaftPt(t);
//       const [nx, ny] = shaftNormal(t);
//       const d = 6 * Math.sin((Math.PI * t) / 0.5);
//       return pt([x + nx * d, y + ny * d]);
//     }).join(" L");

//   // barbs: start on the shaft, end on the vane edge slightly further along
//   let barbs = "";
//   for (let t = 0.27; t < 0.93; t += 0.065) {
//     const t2 = Math.min(1, t + 0.075);
//     barbs += `M${pt(shaftPt(t))} L${pt(edgePt(t2, UP, 1))} `;
//   }
//   for (let t = 0.3; t < 0.93; t += 0.075) {
//     const t2 = Math.min(1, t + 0.085);
//     barbs += `M${pt(shaftPt(t))} L${pt(edgePt(t2, LOW, -1))} `;
//   }

//   // soft downy hairs near the base
//   let down = "";
//   [0.06, 0.1, 0.14, 0.18].forEach((t, i) => {
//     const [x, y] = shaftPt(t);
//     const [nx, ny] = shaftNormal(t);
//     const [fx, fy] = shaftPt(Math.min(1, t + 0.045));
//     [1, -1].forEach((dir) => {
//       const len = 16 + i * 4;
//       down += `M${pt([x, y])} L${pt([fx + nx * len * dir, fy + ny * len * dir])} `;
//     });
//   });

//   return { outline, shaft, quillBase, barbs, down };
// }
// const FEATHER = buildFeather();

// function InkIllustration() {
//   return (
//     <svg
//       className="err-art"
//       viewBox="430 320 1070 480"
//       xmlns="http://www.w3.org/2000/svg"
//       role="img"
//       aria-label="A tipped inkwell spilling ink beside a quill feather"
//     >
//       <defs>
//         {/* fill gradient for ink */}
//         <linearGradient id="inkFill" gradientUnits="userSpaceOnUse" x1="700" y1="560" x2="1360" y2="760">
//           <stop offset="0" stopColor="#d9996a" />
//           <stop offset="0.45" stopColor="#cf9565" />
//           <stop offset="0.8" stopColor="#c47f50" />
//           <stop offset="1" stopColor="#b9633a" />
//         </linearGradient>
//         {/* stroke gradient for line art */}
//         <linearGradient id="lineGrad" gradientUnits="userSpaceOnUse" x1="490" y1="400" x2="1485" y2="520">
//           <stop offset="0" stopColor="#dfa06b" />
//           <stop offset="0.5" stopColor="#d08f5e" />
//           <stop offset="1" stopColor="#b8683f" />
//         </linearGradient>
//       </defs>

//       {/* ---------- INKWELL ---------- */}
//       <g fill="none" stroke="url(#lineGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
//         {/* outer body */}
//         <path d="M702 336 C640 338 595 360 556 374 C512 396 492 452 494 512 C496 582 530 640 580 668 C625 690 680 692 712 686" />
//         {/* body top edge into neck */}
//         <path d="M702 336 C752 340 792 360 812 382" />
//         {/* end cap ellipse */}
//         <path d="M698 338 C632 352 578 426 578 514 C578 604 640 680 710 686" />
//         {/* neck rings */}
//         <ellipse cx="776" cy="512" rx="104" ry="118" transform="rotate(-12 776 512)" />
//         <ellipse cx="775" cy="512" rx="92" ry="106" transform="rotate(-12 775 512)" />
//         <ellipse cx="772" cy="512" rx="68" ry="92" transform="rotate(-12 772 512)" strokeWidth="3.5" />
//         {/* neck lower lip towards pour */}
//         <path d="M700 640 C735 668 770 650 792 636" strokeWidth="3" />
//       </g>

//       {/* ink pouring from the neck */}
//       <path
//         fill="url(#inkFill)"
//         d="M714 560 C735 550 780 548 806 560 C826 572 834 592 828 612 C824 640 828 664 832 690 L800 700 C790 680 782 660 776 640 C770 626 748 616 728 596 C718 584 712 572 714 560 Z"
//       />
//       {/* dark drip veins cutting through the pour */}
//       <path
//         fill="#181a24"
//         d="M775 612 L786 620 C792 640 790 660 800 672 C792 682 802 696 820 702 C834 708 852 714 862 724 C872 732 886 736 882 744 C868 748 852 742 848 736 C830 728 808 722 790 712 C768 712 768 700 784 698 C776 680 768 650 775 612 Z"
//       />
//       <path fill="#181a24" d="M846 690 C860 686 880 688 892 696 C902 700 912 700 908 706 C894 708 880 702 866 700 C856 698 846 696 846 690 Z" />
//       <path fill="#181a24" d="M812 712 C826 712 840 722 852 730 C860 738 872 740 866 750 C850 752 836 744 826 736 C816 730 806 722 812 712 Z" />

//       {/* puddle */}
//       <path
//         fill="url(#inkFill)"
//         d="M706 720 C710 704 756 702 790 702 C828 700 872 700 906 686 C930 670 990 666 1034 670 C1072 672 1122 676 1120 692 C1118 706 1076 708 1070 716 C1092 724 1150 716 1200 708 C1240 704 1300 714 1340 720 C1372 726 1366 742 1332 750 C1284 756 1240 750 1212 758 C1192 776 1162 782 1132 782 C1092 788 1050 786 1010 784 C984 782 990 766 968 762 C928 764 880 766 840 760 C792 762 752 762 738 746 C720 740 704 732 706 720 Z"
//       />
//       {/* streak left of the jar */}
//       <path fill="url(#inkFill)" d="M440 688 C480 686 540 687 588 690 C602 693 594 700 574 701 C524 700 460 696 440 690 Z" />

//       {/* ---------- FEATHER ---------- */}
//       <g fill="none" stroke="url(#lineGrad)" strokeLinecap="round" strokeLinejoin="round">
//         <path d={FEATHER.outline} strokeWidth="2.6" />
//         <path d={FEATHER.barbs} strokeWidth="2" />
//         <path d={FEATHER.down} strokeWidth="1.8" />
//         <path d={FEATHER.quillBase} strokeWidth="2.2" />
//         <path d={FEATHER.shaft} strokeWidth="2.8" />
//       </g>
//     </svg>
//   );
// }

// export default function ServerError500({
//   onReturnHome = () => {
//     window.location.href = "/";
//   },
// }) {
//   const { scale, x, y } = useStageScale();

//   return (
//     <div className="err-root">
//       <style>{css}</style>

//       <main
//         className="err-stage"
//         style={{ transform: `translate(${x}px, ${y}px) scale(${scale})` }}
//       >
//         <h1 className="err-logo">verse</h1>
//         <p className="err-code">500 - Server Error</p>

//         <InkIllustration />

//         <h2 className="err-title">The verses have wandered off</h2>
//         <p className="err-sub">Something broke in the poetry. We’re working to restore the page</p>

//         <button type="button" className="err-btn" onClick={onReturnHome}>
//           Return Home
//         </button>
//       </main>
//     </div>
//   );
// }


import { useEffect, useState } from "react";

/**
 * 500 error page — built on a fixed 1920 x 1280 stage that scales
 * uniformly to any viewport, so proportions never distort.
 */
const STAGE_W = 1920;
const STAGE_H = 1280;

function useStageScale() {
  const [size, setSize] = useState({ scale: 1, x: 0, y: 0 });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const scale = Math.min(w / STAGE_W, h / STAGE_H);
      setSize({
        scale,
        x: (w - STAGE_W * scale) / 2,
        y: (h - STAGE_H * scale) / 2,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=EB+Garamond:wght@400;500&family=Inter:wght@300;400&display=swap');

.err-root {
  position: fixed;
  inset: 0;
  overflow: hidden;
  background: #181a24;
}
.err-stage {
  position: absolute;
  left: 0;
  top: 0;
  width: ${STAGE_W}px;
  height: ${STAGE_H}px;
  transform-origin: top left;
  background:
    radial-gradient(ellipse 60% 55% at 50% 45%, #1b1d28 0%, #181a24 60%, #161822 100%);
  color: #f1eff0;
}
.err-logo {
  position: absolute;
  left: 76px;
  top: 56px;
  margin: 0;
  font-family: 'Cormorant Garamond', 'Times New Roman', serif;
  font-weight: 400;
  font-size: 42px;
  line-height: 48px;
  letter-spacing: 0.34em;
  color: #8d8f98;
}
.err-code {
  position: absolute;
  left: 0;
  width: 100%;
  top: 74px;
  text-align: center;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 26px;
  color: #6d6f78;
}
.err-art {
  position: absolute;
  left: 430px;
  top: 320px;
  width: 1070px;
  height: 480px;
}
.err-title {
  position: absolute;
  left: 0;
  width: 100%;
  top: 916px;
  margin: 0;
  text-align: center;
  font-family: 'EB Garamond', 'Times New Roman', serif;
  font-weight: 400;
  font-size: 72px;
  line-height: 84px;
  letter-spacing: -0.01em;
  color: #f3f1f2;
}
.err-sub {
  position: absolute;
  left: 0;
  width: 100%;
  top: 1020px;
  margin: 0;
  text-align: center;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 300;
  font-size: 26px;
  line-height: 34px;
  color: #b4b4ba;
}
.err-btn {
  position: absolute;
  left: 777px;
  top: 1121px;
  width: 361px;
  height: 77px;
  box-sizing: border-box;
  border: 1.5px solid #9c6440;
  border-radius: 12px;
  background: #212227;
  color: #f4f2f3;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 400;
  font-size: 28px;
  letter-spacing: -0.01em;
  cursor: pointer;
  transition: border-color .2s ease, background .2s ease;
}
.err-btn:hover { border-color: #d89a68; background: #26272d; }
.err-btn:focus-visible { outline: 2px solid #d89a68; outline-offset: 4px; }

/* ================= ANIMATION ================= */
@keyframes fadeUp   { from { opacity: 0; transform: translateY(16px); filter: blur(6px); } to { opacity: 1; transform: none; filter: blur(0); } }
@keyframes fadeIn   { from { opacity: 0; } to { opacity: 1; } }
@keyframes draw     { 0% { stroke-dashoffset: 1; opacity: 0; } 4% { opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 1; } }
@keyframes pour     { from { transform: scaleY(0); opacity: .3; } to { transform: scaleY(1); opacity: 1; } }
@keyframes spread   { from { transform: scale(.15, .3); opacity: 0; } 30% { opacity: 1; } to { transform: scale(1); opacity: 1; } }
@keyframes streak   { from { transform: scaleX(0); opacity: 0; } to { transform: scaleX(1); opacity: 1; } }
@keyframes breathe  { from { transform: scale(1, 1); } to { transform: scale(1.014, 1.035); } }
@keyframes floatFeather { from { transform: translate(0, 0) rotate(0deg); } to { transform: translate(2px, -6px) rotate(-.9deg); } }
@keyframes ripple   { 0% { transform: scale(.2); opacity: .85; } 100% { transform: scale(3.2); opacity: 0; } }
@keyframes artGlow  { from { filter: drop-shadow(0 0 0 rgba(214,140,90,0)); } to { filter: drop-shadow(0 0 14px rgba(214,140,90,.26)); } }
@keyframes glowPulse{ from { opacity: 1; } to { opacity: .55; } }

.err-logo  { animation: fadeUp 1.1s ease .2s backwards; }
.err-code  { animation: fadeIn 1.2s ease .5s backwards; }
.err-title { animation: fadeUp 1.1s cubic-bezier(.2,.7,.2,1) 2.4s backwards; }
.err-sub   { animation: fadeUp 1.1s cubic-bezier(.2,.7,.2,1) 2.75s backwards; }
.err-btn   {
  overflow: hidden;
  animation: fadeUp 1.1s cubic-bezier(.2,.7,.2,1) 3.1s backwards;
  transition: border-color .25s ease, background .25s ease, transform .25s ease, box-shadow .25s ease;
}
.err-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, transparent 38%, rgba(216,150,100,.2) 50%, transparent 62%);
  transform: translateX(-120%);
  transition: transform .9s ease;
  pointer-events: none;
}
.err-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(190,110,60,.18); }
.err-btn:hover::after { transform: translateX(120%); }
.err-btn:active { transform: translateY(0) scale(.98); }

.err-glow {
  position: absolute;
  left: 360px; top: 250px; width: 1200px; height: 620px;
  background: radial-gradient(ellipse at 50% 50%, rgba(205,130,80,.11), transparent 65%);
  pointer-events: none;
  animation: fadeIn 2.5s ease 1s backwards, glowPulse 7s ease-in-out 3.5s infinite alternate;
}
.err-art { animation: artGlow 5s ease-in-out 3.5s infinite alternate backwards; }

.err-art .draw {
  stroke-dasharray: 1;
  animation: draw var(--t, 1.6s) cubic-bezier(.65,0,.35,1) var(--d, 0s) backwards;
}
.err-art .pour, .err-art .puddle-in, .err-art .streak, .err-art .feather, .err-art .puddle-idle, .err-art .ripple {
  transform-box: fill-box;
}
.err-art .pour       { transform-origin: 50% 0%;   animation: pour 1.1s cubic-bezier(.5,0,.3,1) 1.6s backwards; }
.err-art .vein       { animation: fadeIn .8s ease 2.4s backwards; }
.err-art .puddle-in  { transform-origin: 16% 25%;  animation: spread 1.5s cubic-bezier(.2,.7,.2,1) 2.2s backwards; }
.err-art .puddle-idle{ transform-origin: 18% 40%;  animation: breathe 6s ease-in-out 3.8s infinite alternate; }
.err-art .streak     { transform-origin: 100% 50%; animation: streak .9s ease-out 2.5s backwards; }
.err-art .feather    { transform-origin: 0% 100%;  animation: floatFeather 6s ease-in-out 3.8s infinite alternate; }
.err-art .ripple     { transform-origin: 50% 50%;  animation: ripple 3.8s ease-out var(--d, 3.6s) infinite backwards; }

@media (prefers-reduced-motion: reduce) {
  .err-stage *, .err-stage *::after, .err-art, .err-glow { animation: none !important; transition: none !important; }
}
`;


/* ---------- Feather geometry (generated from a single shaft curve) ---------- */
const SHAFT = [[921, 648], [1080, 578], [1270, 520], [1483, 511]];
const T0 = 0.2; // where the vane begins along the shaft

const shaftPt = (t) => {
  const u = 1 - t;
  const [p0, p1, p2, p3] = SHAFT;
  return [0, 1].map(
    (i) => u * u * u * p0[i] + 3 * u * u * t * p1[i] + 3 * u * t * t * p2[i] + t * t * t * p3[i]
  );
};
const shaftNormal = (t) => {
  const u = 1 - t;
  const [p0, p1, p2, p3] = SHAFT;
  const d = [0, 1].map(
    (i) => 3 * u * u * (p1[i] - p0[i]) + 6 * u * t * (p2[i] - p1[i]) + 3 * t * t * (p3[i] - p2[i])
  );
  const len = Math.hypot(d[0], d[1]);
  return [d[1] / len, -d[0] / len]; // points "up" the page
};
const vaneWidth = (t, max) => {
  if (t <= T0) return 0;
  const s = (t - T0) / (1 - T0);
  return max * Math.sin(Math.PI * Math.pow(s, 1.6));
};
const edgePt = (t, max, dir) => {
  const [x, y] = shaftPt(t);
  const [nx, ny] = shaftNormal(t);
  const w = vaneWidth(t, max) * dir;
  return [x + nx * w, y + ny * w];
};
const f = (n) => n.toFixed(1);
const pt = (p) => `${f(p[0])} ${f(p[1])}`;

const UP = 46; // upper vane half-width
const LOW = 33; // lower vane half-width

function buildFeather() {
  const N = 64;
  const ts = Array.from({ length: N + 1 }, (_, i) => T0 + ((1 - T0) * i) / N);

  const upper = ts.map((t) => edgePt(t, UP, 1));
  const lower = ts.map((t) => edgePt(t, LOW, -1)).reverse();
  const outline =
    "M" + upper.map(pt).join(" L") + " L" + lower.map(pt).join(" L") + " Z";

  const shaft = "M" + Array.from({ length: 41 }, (_, i) => pt(shaftPt(i / 40))).join(" L");

  // lens-shaped quill base (calamus)
  const quillBase =
    "M" +
    Array.from({ length: 21 }, (_, i) => {
      const t = (i / 20) * 0.5;
      const [x, y] = shaftPt(t);
      const [nx, ny] = shaftNormal(t);
      const d = 6 * Math.sin((Math.PI * t) / 0.5);
      return pt([x + nx * d, y + ny * d]);
    }).join(" L");

  // barbs: start on the shaft, end on the vane edge slightly further along
  let barbs = "";
  for (let t = 0.27; t < 0.93; t += 0.065) {
    const t2 = Math.min(1, t + 0.075);
    barbs += `M${pt(shaftPt(t))} L${pt(edgePt(t2, UP, 1))} `;
  }
  for (let t = 0.3; t < 0.93; t += 0.075) {
    const t2 = Math.min(1, t + 0.085);
    barbs += `M${pt(shaftPt(t))} L${pt(edgePt(t2, LOW, -1))} `;
  }

  // soft downy hairs near the base
  let down = "";
  [0.06, 0.1, 0.14, 0.18].forEach((t, i) => {
    const [x, y] = shaftPt(t);
    const [nx, ny] = shaftNormal(t);
    const [fx, fy] = shaftPt(Math.min(1, t + 0.045));
    [1, -1].forEach((dir) => {
      const len = 16 + i * 4;
      down += `M${pt([x, y])} L${pt([fx + nx * len * dir, fy + ny * len * dir])} `;
    });
  });

  return { outline, shaft, quillBase, barbs, down };
}
const FEATHER = buildFeather();

function InkIllustration() {
  return (
    <svg
      className="err-art"
      viewBox="430 320 1070 480"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A tipped inkwell spilling ink beside a quill feather"
    >
      <defs>
        {/* fill gradient for ink */}
        <linearGradient id="inkFill" gradientUnits="userSpaceOnUse" x1="700" y1="560" x2="1360" y2="760">
          <stop offset="0" stopColor="#d9996a" />
          <stop offset="0.45" stopColor="#cf9565" />
          <stop offset="0.8" stopColor="#c47f50" />
          <stop offset="1" stopColor="#b9633a" />
        </linearGradient>
        {/* stroke gradient for line art */}
        <linearGradient id="lineGrad" gradientUnits="userSpaceOnUse" x1="490" y1="400" x2="1485" y2="520">
          <stop offset="0" stopColor="#dfa06b" />
          <stop offset="0.5" stopColor="#d08f5e" />
          <stop offset="1" stopColor="#b8683f" />
        </linearGradient>
      </defs>

      {/* ---------- INKWELL ---------- */}
      <g fill="none" stroke="url(#lineGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* outer body */}
        <path className="draw" pathLength="1" style={{ "--d": "0.40s" }} d="M702 336 C640 338 595 360 556 374 C512 396 492 452 494 512 C496 582 530 640 580 668 C625 690 680 692 712 686" />
        {/* body top edge into neck */}
        <path className="draw" pathLength="1" style={{ "--d": "0.57s" }} d="M702 336 C752 340 792 360 812 382" />
        {/* end cap ellipse */}
        <path className="draw" pathLength="1" style={{ "--d": "0.74s" }} d="M698 338 C632 352 578 426 578 514 C578 604 640 680 710 686" />
        {/* neck rings */}
        <ellipse className="draw" pathLength="1" style={{ "--d": "0.91s" }} cx="776" cy="512" rx="104" ry="118" transform="rotate(-12 776 512)" />
        <ellipse className="draw" pathLength="1" style={{ "--d": "1.08s" }} cx="775" cy="512" rx="92" ry="106" transform="rotate(-12 775 512)" />
        <ellipse className="draw" pathLength="1" style={{ "--d": "1.25s" }} cx="772" cy="512" rx="68" ry="92" transform="rotate(-12 772 512)" strokeWidth="3.5" />
        {/* neck lower lip towards pour */}
        <path className="draw" pathLength="1" style={{ "--d": "1.42s" }} d="M700 640 C735 668 770 650 792 636" strokeWidth="3" />
      </g>

      {/* ink pouring from the neck */}
      <path className="pour"
        fill="url(#inkFill)"
        d="M714 560 C735 550 780 548 806 560 C826 572 834 592 828 612 C824 640 828 664 832 690 L800 700 C790 680 782 660 776 640 C770 626 748 616 728 596 C718 584 712 572 714 560 Z"
      />
      {/* dark drip veins cutting through the pour */}
      <path className="vein"
        fill="#181a24"
        d="M775 612 L786 620 C792 640 790 660 800 672 C792 682 802 696 820 702 C834 708 852 714 862 724 C872 732 886 736 882 744 C868 748 852 742 848 736 C830 728 808 722 790 712 C768 712 768 700 784 698 C776 680 768 650 775 612 Z"
      />
      <path className="vein" fill="#181a24" d="M846 690 C860 686 880 688 892 696 C902 700 912 700 908 706 C894 708 880 702 866 700 C856 698 846 696 846 690 Z" />
      <path className="vein" fill="#181a24" d="M812 712 C826 712 840 722 852 730 C860 738 872 740 866 750 C850 752 836 744 826 736 C816 730 806 722 812 712 Z" />

      {/* puddle */}
      <g className="puddle-in">
        <path className="puddle-idle"
        fill="url(#inkFill)"
        d="M706 720 C710 704 756 702 790 702 C828 700 872 700 906 686 C930 670 990 666 1034 670 C1072 672 1122 676 1120 692 C1118 706 1076 708 1070 716 C1092 724 1150 716 1200 708 C1240 704 1300 714 1340 720 C1372 726 1366 742 1332 750 C1284 756 1240 750 1212 758 C1192 776 1162 782 1132 782 C1092 788 1050 786 1010 784 C984 782 990 766 968 762 C928 764 880 766 840 760 C792 762 752 762 738 746 C720 740 704 732 706 720 Z"
      />
      </g>
      {/* streak left of the jar */}
      <path className="streak" fill="url(#inkFill)" d="M440 688 C480 686 540 687 588 690 C602 693 594 700 574 701 C524 700 460 696 440 690 Z" />
      {/* ripples where the ink lands */}
      <ellipse className="ripple" cx="838" cy="730" rx="14" ry="4" fill="none" stroke="#f0c29c" strokeWidth="2" style={{ "--d": "3.6s" }} />
      <ellipse className="ripple" cx="838" cy="730" rx="14" ry="4" fill="none" stroke="#f0c29c" strokeWidth="2" style={{ "--d": "5.5s" }} />

      {/* ---------- FEATHER ---------- */}
      <g className="feather" fill="none" stroke="url(#lineGrad)" strokeLinecap="round" strokeLinejoin="round">
        <path d={FEATHER.outline} strokeWidth="2.6" className="draw" pathLength="1" style={{ "--d": "1.0s", "--t": "2.0s" }} />
        <path d={FEATHER.barbs} strokeWidth="2" className="draw" pathLength="1" style={{ "--d": "2.2s", "--t": "1.3s" }} />
        <path d={FEATHER.down} strokeWidth="1.8" className="draw" pathLength="1" style={{ "--d": "2.5s", "--t": "0.8s" }} />
        <path d={FEATHER.quillBase} strokeWidth="2.2" className="draw" pathLength="1" style={{ "--d": "1.2s", "--t": "1.2s" }} />
        <path d={FEATHER.shaft} strokeWidth="2.8" className="draw" pathLength="1" style={{ "--d": "0.9s", "--t": "1.8s" }} />
      </g>
    </svg>
  );
}

export default function ServerError500({
  onReturnHome = () => {
    window.location.href = "/";
  },
}) {
  const { scale, x, y } = useStageScale();

  return (
    <div className="err-root">
      <style>{css}</style>

      <main
        className="err-stage"
        style={{ transform: `translate(${x}px, ${y}px) scale(${scale})` }}
      >
        <div className="err-glow" />
        <h1 className="err-logo">verse</h1>
        <p className="err-code">500 - Server Error</p>

        <InkIllustration />

        <h2 className="err-title">The verses have wandered off</h2>
        <p className="err-sub">Something broke in the poetry. We’re working to restore the page</p>

        <button type="button" className="err-btn" onClick={onReturnHome}>
          Return Home
        </button>
      </main>
    </div>
  );
}