// import React from "react";
// import inkJar from "./ink-jar.png"; // the cropped illustration (transparent PNG) – put it next to this file

// /* ------------------------------------------------------------------ */
// /*  429 – Too Many Requests  ·  "Slow down, poet"                      */
// /*  Same layout and artwork as the original. Only orange + motion added */
// /*  Usage:  <TooManyRequests onReturnHome={() => navigate("/")} />     */
// /* ------------------------------------------------------------------ */

// /* embers rising out of the ink jar (deterministic, so no jumping on re-render) */
// const EMBERS = Array.from({ length: 16 }, (_, i) => {
//   const r = (n) => {
//     const x = Math.sin(i * 97.13 + n * 31.7) * 10000;
//     return x - Math.floor(x);
//   };
//   return {
//     left: 40 + r(1) * 20,        // % across the illustration (around the jar mouth)
//     size: 3 + r(2) * 5,          // px
//     delay: r(3) * 6,             // s
//     dur: 4 + r(4) * 4,           // s
//     dx: (r(5) - 0.5) * 120,      // px sideways drift
//     rise: 140 + r(6) * 140,      // px upward
//   };
// });

// export default function TooManyRequests({ onReturnHome }) {
//   const goHome = () => (onReturnHome ? onReturnHome() : (window.location.href = "/"));

//   return (
//     <div className="v429">
//       <style>{css}</style>

//       <header className="v429-top">
//         <span className="v429-logo">verse</span>
//         <span className="v429-code">429 - Too Many Requests</span>
//         <span />
//       </header>

//       <main className="v429-main">
//         <div className="v429-art">
//           <div className="v429-halo" />

//           <div className="v429-float">
//             <img className="v429-img" src={inkJar} alt="An ink jar overflowing, surrounded by feather quills" draggable="false" />
//             {/* orange light sweeping across the line art */}
//             <div className="v429-sweep" style={{ WebkitMaskImage: `url(${inkJar})`, maskImage: `url(${inkJar})` }} />
//           </div>

//           {EMBERS.map((e, i) => (
//             <span
//               key={i}
//               className="v429-ember"
//               style={{
//                 left: `${e.left}%`,
//                 width: e.size,
//                 height: e.size,
//                 animationDelay: `${e.delay + 1.5}s`,
//                 animationDuration: `${e.dur}s`,
//                 "--dx": `${e.dx}px`,
//                 "--rise": `${-e.rise}px`,
//               }}
//             />
//           ))}
//         </div>

//         <h1 className="v429-title v429-rise" style={{ animationDelay: "0.9s" }}>
//           Slow down, poet
//         </h1>
//         <p className="v429-sub v429-rise" style={{ animationDelay: "1.1s" }}>
//           You've made too many requests. Please take a breath and try again.
//         </p>
//         <button type="button" className="v429-btn v429-rise" style={{ animationDelay: "1.3s" }} onClick={goHome}>
//           Return Home
//         </button>
//       </main>
//     </div>
//   );
// }

// const css = `
// @import url('https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,300;6..72,400&family=DM+Sans:wght@400;500&display=swap');

// .v429 {
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   overflow: hidden;
//   color: #f4ecdd;
//   font-family: 'DM Sans', system-ui, sans-serif;
//   background: #1b1d22;
// }

// /* ---------- header (unchanged) ---------- */
// .v429-top {
//   display: grid;
//   grid-template-columns: 1fr auto 1fr;
//   align-items: center;
//   padding: 3.4vh 4vw;
// }
// .v429-logo {
//   font-family: 'Newsreader', Georgia, serif;
//   font-weight: 300;
//   font-size: clamp(1.6rem, 2.1vw, 2.4rem);
//   letter-spacing: 0.06em;
//   color: #a7a49d;
//   justify-self: start;
// }
// .v429-code {
//   font-size: clamp(0.95rem, 1.25vw, 1.45rem);
//   font-weight: 500;
//   color: #e0a468;
// }

// /* ---------- main (unchanged layout) ---------- */
// .v429-main {
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 0 5vw 5vh;
//   text-align: center;
// }
// .v429-title {
//   margin: 1.6vh 0 0;
//   font-family: 'Newsreader', Georgia, serif;
//   font-weight: 400;
//   font-size: clamp(2.5rem, 3.7vw, 4.4rem);
//   line-height: 1.1;
//   letter-spacing: -0.01em;
//   color: #f4ecdd;
// }
// .v429-sub {
//   margin: 1.6vh 0 0;
//   max-width: 60ch;
//   font-size: clamp(1rem, 1.4vw, 1.65rem);
//   color: #c9c5be;
// }
// .v429-btn {
//   margin-top: 3.4vh;
//   padding: 1em 3.2em;
//   font: 500 clamp(1rem, 1.35vw, 1.6rem) 'DM Sans', system-ui, sans-serif;
//   color: #e8a862;
//   background: transparent;
//   border: 1.5px solid #d69a5c;
//   border-radius: 14px;
//   cursor: pointer;
//   transition: color .3s ease, background .3s ease, box-shadow .3s ease, transform .2s ease;
// }
// .v429-btn:hover {
//   color: #1b1d22;
//   background: #f0a35a;
//   box-shadow: 0 8px 30px rgba(240,140,50,0.35);
//   transform: translateY(-2px);
// }
// .v429-btn:active { transform: translateY(0) scale(.98); }
// .v429-btn:focus-visible { outline: 2px solid #ffb86b; outline-offset: 4px; }

// /* ---------- illustration ---------- */
// .v429-art {
//   position: relative;
//   width: min(92vw, clamp(300px, 56vw, 1070px));
//   aspect-ratio: 1070 / 740;
// }
// .v429-float {
//   position: absolute;
//   inset: 0;
//   animation: v429-in 1.6s ease-out both, v429-bob 7s ease-in-out 1.6s infinite;
// }
// .v429-img {
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   user-select: none;
//   animation: v429-glow 4.5s ease-in-out 1.6s infinite;
// }
// .v429-sweep {
//   position: absolute;
//   inset: 0;
//   -webkit-mask-size: 100% 100%;
//   mask-size: 100% 100%;
//   -webkit-mask-repeat: no-repeat;
//   mask-repeat: no-repeat;
//   background: linear-gradient(105deg, transparent 38%, #ff9f43 47%, #fff0d6 50%, #ff9f43 53%, transparent 62%);
//   background-size: 300% 100%;
//   background-position: 150% 0;
//   animation: v429-sweep 5.5s ease-in-out 2s infinite;
//   pointer-events: none;
// }
// .v429-halo {
//   position: absolute;
//   left: 50%;
//   top: 52%;
//   width: 78%;
//   height: 78%;
//   transform: translate(-50%, -50%);
//   background: radial-gradient(closest-side, rgba(255,140,40,0.20), rgba(255,140,40,0.06) 60%, transparent 100%);
//   animation: v429-halo 4.5s ease-in-out infinite;
//   pointer-events: none;
// }
// .v429-ember {
//   position: absolute;
//   top: 46%;
//   border-radius: 50%;
//   background: #ff9f43;
//   box-shadow: 0 0 10px 2px rgba(255,140,40,0.7);
//   opacity: 0;
//   animation-name: v429-ember;
//   animation-timing-function: ease-out;
//   animation-iteration-count: infinite;
//   pointer-events: none;
// }

// /* ---------- text entrance ---------- */
// .v429-rise { animation: v429-rise .9s cubic-bezier(.2,.7,.2,1) both; }
// .v429-btn.v429-rise { animation: v429-rise .9s cubic-bezier(.2,.7,.2,1) both, v429-breathe 3.4s ease-in-out 2.5s infinite; }

// /* ---------- keyframes ---------- */
// @keyframes v429-in     { from { opacity: 0; filter: blur(8px); transform: scale(.97); } to { opacity: 1; filter: blur(0); transform: scale(1); } }
// @keyframes v429-bob    { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-8px) rotate(.4deg); } }
// @keyframes v429-glow   { 0%,100% { filter: drop-shadow(0 0 3px rgba(255,140,40,.25)); } 50% { filter: drop-shadow(0 0 14px rgba(255,140,40,.65)); } }
// @keyframes v429-halo   { 0%,100% { opacity: .55; transform: translate(-50%,-50%) scale(.94); } 50% { opacity: 1; transform: translate(-50%,-50%) scale(1.06); } }
// @keyframes v429-sweep  { 0% { background-position: 150% 0; } 55%,100% { background-position: -50% 0; } }
// @keyframes v429-ember  { 0% { opacity: 0; transform: translate(0,0) scale(.5); } 15% { opacity: 1; } 100% { opacity: 0; transform: translate(var(--dx), var(--rise)) scale(1); } }
// @keyframes v429-rise   { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
// @keyframes v429-breathe{ 0%,100% { box-shadow: 0 0 0 0 rgba(255,140,40,0); } 50% { box-shadow: 0 0 22px 2px rgba(255,140,40,0.25); } }

// @media (max-width: 640px) {
//   .v429-top { grid-template-columns: 1fr; row-gap: 0.6rem; justify-items: center; }
//   .v429-logo { justify-self: center; }
// }

// @media (prefers-reduced-motion: reduce) {
//   .v429 *, .v429 *::before, .v429 *::after { animation: none !important; }
//   .v429-ember, .v429-sweep { display: none; }
// }
// `;


import React from "react";
import inkJar from "./ink-jar.png"; // illustration cropped from your screenshot, original colors

/* 429 – Too Many Requests · "Slow down, poet"
   Exactly as in the screenshot. Original colors, no additions.
   Usage: <TooManyRequests onReturnHome={() => navigate("/")} /> */

export default function TooManyRequests({ onReturnHome }) {
  const goHome = () => (onReturnHome ? onReturnHome() : (window.location.href = "/"));

  return (
    <div className="v429">
      <style>{css}</style>

      <header className="v429-top">
        <span className="v429-logo">verse</span>
        <span className="v429-code">429 - Too Many Requests</span>
        <span />
      </header>

      <main className="v429-main">
        <img className="v429-art" src={inkJar} alt="An ink jar overflowing, surrounded by feather quills" draggable="false" />
        <h1 className="v429-title">Slow down, poet</h1>
        <p className="v429-sub">You've made too many requests. Please take a breath and try again.</p>
        <button type="button" className="v429-btn" onClick={goHome}>
          Return Home
        </button>
      </main>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,300;6..72,400&family=DM+Sans:wght@400;500&display=swap');

.v429 {
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #1b1d22;
  color: #f4ecdd;
  font-family: 'DM Sans', system-ui, sans-serif;
  animation: v429-in 1s ease-out both;
}

.v429-top {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 3vh 3.5vw;
}
.v429-logo {
  font-family: 'Newsreader', Georgia, serif;
  font-weight: 300;
  font-size: clamp(1.3rem, 1.6vw, 1.9rem);
  letter-spacing: 0.06em;
  color: #a7a49d;
  justify-self: start;
}
.v429-code {
  font-size: clamp(0.85rem, 1vw, 1.15rem);
  font-weight: 500;
  color: #e0a468;
}

.v429-main {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5vw 3vh;
  text-align: center;
}
.v429-art {
  height: clamp(160px, 42vh, 460px);
  width: auto;
  max-width: 88vw;
  object-fit: contain;
  flex-shrink: 1;
  min-height: 0;
  user-select: none;
}
.v429-title {
  margin: 1.2vh 0 0;
  font-family: 'Newsreader', Georgia, serif;
  font-weight: 400;
  font-size: clamp(1.9rem, 2.9vw, 3.2rem);
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: #f4ecdd;
}
.v429-sub {
  margin: 1vh 0 0;
  max-width: 60ch;
  font-size: clamp(0.85rem, 1.05vw, 1.25rem);
  color: #c9c5be;
}
.v429-btn {
  margin-top: 2.6vh;
  padding: 0.8em 2.6em;
  font: 500 clamp(0.85rem, 1vw, 1.15rem) 'DM Sans', system-ui, sans-serif;
  color: #e8a862;
  background: transparent;
  border: 1.5px solid #d69a5c;
  border-radius: 14px;
  cursor: pointer;
  transition: background .25s ease, color .25s ease;
}
.v429-btn:hover { background: rgba(232,168,98,0.12); }
.v429-btn:focus-visible { outline: 2px solid #e8a862; outline-offset: 4px; }

@keyframes v429-in { from { opacity: 0; } to { opacity: 1; } }

@media (max-width: 640px) {
  .v429-top { grid-template-columns: 1fr; row-gap: 0.6rem; justify-items: center; }
  .v429-logo { justify-self: center; }
}
@media (prefers-reduced-motion: reduce) { .v429 { animation: none; } }
`;