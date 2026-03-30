// // import { useState } from "react";

// // /* ── helpers ── */
// // const formatDate = (iso) => {
// //   if (!iso) return "";
// //   const d = new Date(iso);
// //   return d.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
// // };

// // const truncate = (str, n) =>
// //   str && str.length > n ? str.slice(0, n).trimEnd() + "…" : str || "";

// // /* category */
// // const categoryStyle = (type) => {
// //   const map = {
// //     ghazal:  { label: "Ghazal",  color: "#a78bfa" },
// //     nazm:    { label: "Nazm",    color: "#60a5fa" },
// //     rubai:   { label: "Rubai",   color: "#f472b6" },
// //     marsiya: { label: "Marsiya", color: "#34d399" },
// //     hamd:    { label: "Hamd",    color: "#fbbf24" },
// //     naat:    { label: "Naat",    color: "#fb923c" },
// //     qasida:  { label: "Qasida",  color: "#e879f9" },
// //     default: { label: "Kalam",   color: "rgba(255,255,255,0.28)" },
// //   };
// //   const key = (type || "").toLowerCase();
// //   return map[key] || { label: type || "Kalam", color: map.default.color };
// // };

// // export const KalamCard = ({ kalams = [], onSelect }) => {
// //   const [hovered, setHovered] = useState(null);

// //   if (!kalams.length) {
// //     return (
// //       <div
// //         style={{
// //           padding: "40px 0",
// //           textAlign: "center",
// //           fontFamily: "'Outfit', sans-serif",
// //           color: "rgba(255,255,255,0.22)",
// //           fontSize: 13,
// //         }}
// //       >
// //         No kalams yet.
// //       </div>
// //     );
// //   }

// //   const COLS = "34px 1fr 110px 96px 34px";

// //   return (
// //     <div style={{ fontFamily: "'Outfit', sans-serif", width: "100%" }}>
// //       {/* ── header row (more premium) ── */}
// //       <div
// //         style={{
// //           position: "sticky",
// //           top: 0,
// //           zIndex: 5,
// //           padding: "10px 14px",
// //           marginBottom: 6,
// //           borderBottom: "1px solid rgba(255,255,255,0.06)",
// //           background:
// //             "linear-gradient(to bottom, rgba(8,8,8,0.92), rgba(8,8,8,0.72))",
// //           backdropFilter: "blur(10px)",
// //           WebkitBackdropFilter: "blur(10px)",
// //           display: "grid",
// //           gridTemplateColumns: COLS,
// //           gap: 12,
// //           alignItems: "center",
// //         }}
// //       >
// //         {["#", "Kalam", "Category", "Date", ""].map((h) => (
// //           <span
// //             key={h}
// //             style={{
// //               fontSize: 10,
// //               fontWeight: 600,
// //               letterSpacing: "0.18em",
// //               textTransform: "uppercase",
// //               color: "rgba(167,139,250,0.62)",
// //               userSelect: "none",
// //             }}
// //           >
// //             {h}
// //           </span>
// //         ))}
// //       </div>

// //       {/* ── rows ── */}
// //       <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "0 8px" }}>
// //         {kalams.map((item, i) => {
// //           const k = item?.kalam || item;
// //           const cat = categoryStyle(k.type);
// //           const isHov = hovered === i;

// //           return (
// //             <button
// //               key={k._id || i}
// //               onClick={() => onSelect?.(item, i)}
// //               onMouseEnter={() => setHovered(i)}
// //               onMouseLeave={() => setHovered(null)}
// //               style={{
// //                 width: "100%",
// //                 border: "1px solid rgba(255,255,255,0.06)",
// //                 background: isHov
// //                   ? "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))"
// //                   : "rgba(255,255,255,0.015)",
// //                 cursor: "pointer",
// //                 borderRadius: 12,
// //                 display: "grid",
// //                 gridTemplateColumns: COLS,
// //                 gap: 12,
// //                 padding: "12px 14px",
// //                 alignItems: "center",
// //                 textAlign: "left",
// //                 transition: "transform 160ms ease, border-color 160ms ease, background 160ms ease, box-shadow 160ms ease",
// //                 transform: isHov ? "translateY(-1px)" : "translateY(0)",
// //                 boxShadow: isHov
// //                   ? "0 10px 30px rgba(0,0,0,0.45), 0 0 0 1px rgba(167,139,250,0.10)"
// //                   : "0 0 0 rgba(0,0,0,0)",
// //               }}
// //             >
// //               {/* index / play */}
// //               <div style={{ position: "relative", height: 18, display: "flex", alignItems: "center" }}>
// //                 <span
// //                   style={{
// //                     position: "absolute",
// //                     fontFamily: "'Outfit', monospace",
// //                     fontSize: 11,
// //                     color: "rgba(255,255,255,0.28)",
// //                     opacity: isHov ? 0 : 1,
// //                     transition: "opacity 160ms ease",
// //                     fontVariantNumeric: "tabular-nums",
// //                   }}
// //                 >
// //                   {String(i + 1).padStart(2, "0")}
// //                 </span>

// //                 <div
// //                   style={{
// //                     position: "absolute",
// //                     width: 22,
// //                     height: 22,
// //                     borderRadius: 999,
// //                     display: "grid",
// //                     placeItems: "center",
// //                     opacity: isHov ? 1 : 0,
// //                     transform: isHov ? "scale(1)" : "scale(0.92)",
// //                     transition: "opacity 160ms ease, transform 160ms ease",
// //                     background: "rgba(167,139,250,0.12)",
// //                     border: "1px solid rgba(167,139,250,0.18)",
// //                   }}
// //                 >
// //                   <svg width="10" height="12" viewBox="0 0 10 12" fill="rgba(167,139,250,0.95)">
// //                     <path d="M0 0l10 6-10 6z" />
// //                   </svg>
// //                 </div>
// //               </div>

// //               {/* kalam title + preview */}
// //               <div style={{ minWidth: 0 }}>
// //                 <p
// //                   style={{
// //                     fontSize: 13.5,
// //                     fontWeight: 600,
// //                     color: isHov ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.78)",
// //                     letterSpacing: "-0.01em",
// //                     margin: 0,
// //                     whiteSpace: "nowrap",
// //                     overflow: "hidden",
// //                     textOverflow: "ellipsis",
// //                   }}
// //                 >
// //                   {k.name || "Untitled"}
// //                 </p>

// //                 <p
// //                   style={{
// //                     fontSize: 12.5,
// //                     lineHeight: 1.25,
// //                     margin: "4px 0 0",
// //                     color: isHov ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.42)",
// //                     whiteSpace: "nowrap",
// //                     overflow: "hidden",
// //                     textOverflow: "ellipsis",
// //                   }}
// //                 >
// //                   {truncate(k.content, 72)}
// //                 </p>
// //               </div>

// //               {/* category badge (still text-only, but cleaner) */}
// //               <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
// //                 <div
// //                   style={{
// //                     width: 6,
// //                     height: 6,
// //                     borderRadius: "50%",
// //                     flexShrink: 0,
// //                     background: cat.color,
// //                     opacity: 0.75,
// //                     boxShadow: isHov ? `0 0 0 6px rgba(167,139,250,0.06)` : "none",
// //                     transition: "box-shadow 160ms ease",
// //                   }}
// //                 />
// //                 <span
// //                   style={{
// //                     fontSize: 11.5,
// //                     color: cat.color,
// //                     opacity: 0.78,
// //                     whiteSpace: "nowrap",
// //                     overflow: "hidden",
// //                     textOverflow: "ellipsis",
// //                   }}
// //                 >
// //                   {cat.label}
// //                 </span>
// //               </div>

// //               {/* date */}
// //               <span
// //                 style={{
// //                   fontSize: 11,
// //                   fontFamily: "'Outfit', monospace",
// //                   color: "rgba(255,255,255,0.28)",
// //                   whiteSpace: "nowrap",
// //                   fontVariantNumeric: "tabular-nums",
// //                 }}
// //               >
// //                 {formatDate(k.createdAt)}
// //               </span>

// //               {/* chevron */}
// //               <svg
// //                 style={{
// //                   opacity: isHov ? 0.55 : 0.18,
// //                   transition: "opacity 160ms ease, transform 160ms ease",
// //                   transform: isHov ? "translateX(3px)" : "translateX(0)",
// //                   flexShrink: 0,
// //                 }}
// //                 width="14"
// //                 height="14"
// //                 viewBox="0 0 24 24"
// //                 fill="none"
// //                 stroke="rgba(255,255,255,0.9)"
// //                 strokeWidth="2"
// //               >
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
// //               </svg>
// //             </button>
// //           );
// //         })}
// //       </div>

// //       {/* footer count */}
// //       <div
// //         style={{
// //           marginTop: 10,
// //           padding: "10px 14px",
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "space-between",
// //           borderTop: "1px solid rgba(255,255,255,0.06)",
// //         }}
// //       >
// //         <span
// //           style={{
// //             fontSize: 10,
// //             fontWeight: 700,
// //             letterSpacing: "0.14em",
// //             textTransform: "uppercase",
// //             color: "rgba(255,255,255,0.22)",
// //           }}
// //         >
// //           {kalams.length} {kalams.length === 1 ? "kalam" : "kalams"}
// //         </span>

// //         <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
// //           <div style={{ width: 70, height: 1, background: "rgba(167,139,250,0.18)" }} />
// //           <div style={{ width: 6, height: 6, borderRadius: 999, background: "rgba(167,139,250,0.35)" }} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };







// // //-------------------------------------------------------------------------------------------------------------------->
// import { useState } from "react";

// const formatDate = (iso) => {
//   if (!iso) return "";
//   return new Date(iso).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
// };

// const truncate = (str, n) =>
//   str && str.length > n ? str.slice(0, n).trimEnd() + "…" : str || "";

// const categoryStyle = (type) => {
//   const map = {
//     ghazal:  { label: "Ghazal",  color: "#c4b5fd", solidBg: "rgba(109,40,217,0.22)", bg: "rgba(167,139,250,0.18)", border: "rgba(167,139,250,0.55)", glow: "rgba(167,139,250,0.30)" },
//     nazm:    { label: "Nazm",    color: "#7dd3fc", solidBg: "rgba(14,116,144,0.22)",  bg: "rgba(56,189,248,0.16)",  border: "rgba(56,189,248,0.50)",  glow: "rgba(56,189,248,0.28)"  },
//     rubai:   { label: "Rubai",   color: "#f9a8d4", solidBg: "rgba(190,18,60,0.22)",   bg: "rgba(244,114,182,0.17)", border: "rgba(244,114,182,0.52)", glow: "rgba(244,114,182,0.28)" },
//     marsiya: { label: "Marsiya", color: "#6ee7b7", solidBg: "rgba(5,150,105,0.22)",   bg: "rgba(52,211,153,0.16)",  border: "rgba(52,211,153,0.50)",  glow: "rgba(52,211,153,0.28)"  },
//     hamd:    { label: "Hamd",    color: "#fde68a", solidBg: "rgba(180,83,9,0.25)",    bg: "rgba(251,191,36,0.17)",  border: "rgba(251,191,36,0.50)",  glow: "rgba(251,191,36,0.28)"  },
//     naat:    { label: "Naat",    color: "#fdba74", solidBg: "rgba(194,65,12,0.25)",   bg: "rgba(251,146,60,0.17)",  border: "rgba(251,146,60,0.50)",  glow: "rgba(251,146,60,0.28)"  },
//     qasida:  { label: "Qasida",  color: "#f0abfc", solidBg: "rgba(162,28,175,0.22)",  bg: "rgba(232,121,249,0.17)", border: "rgba(232,121,249,0.52)", glow: "rgba(232,121,249,0.28)" },
//   };
//   const key = (type || "").toLowerCase();
//   return map[key] || { label: type || "Kalam", color: "rgba(255,255,255,0.55)", solidBg: "rgba(255,255,255,0.06)", bg: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.22)", glow: "rgba(255,255,255,0.12)" };
// };

// export const KalamCard = ({ kalams = [], onSelect }) => {
//   const [hovered, setHovered] = useState(null);

//   if (!kalams.length) {
//     return (
//       <div style={{ padding: "40px 0", textAlign: "center", fontFamily: "'Outfit', sans-serif", color: "rgba(255,255,255,0.22)", fontSize: 13 }}>
//         No kalams yet.
//       </div>
//     );
//   }

//   const COLS = "34px 1fr 120px 96px 34px";

//   return (
//     <div style={{ fontFamily: "'Outfit', sans-serif", width: "100%" }}>

//       {/* ── sticky header ── */}
//       <div style={{
//         position: "sticky", top: 0, zIndex: 5,
//         padding: "10px 14px", marginBottom: 8,
//         borderBottom: "1px solid rgba(255,255,255,0.06)",
//         background: "linear-gradient(to bottom, rgba(8,8,8,0.95), rgba(8,8,8,0.75))",
//         backdropFilter: "blur(10px)",
//         WebkitBackdropFilter: "blur(10px)",
//         display: "grid", gridTemplateColumns: COLS, gap: 12, alignItems: "center",
//       }}>
//         {["#", "Kalam", "Category", "Date", ""].map((h) => (
//           <span key={h} style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(167,139,250,0.62)", userSelect: "none" }}>
//             {h}
//           </span>
//         ))}
//       </div>

//       {/* ── rows ── */}
//       <div style={{ display: "flex", flexDirection: "column", gap: 5, padding: "0 8px" }}>
//         {kalams.map((item, i) => {
//           const k = item?.kalam || item;
//           const cat = categoryStyle(k.type);
//           const isHov = hovered === i;

//           return (
//             <button
//               key={k._id || i}
//               onClick={() => onSelect?.(item, i)}
//               onMouseEnter={() => setHovered(i)}
//               onMouseLeave={() => setHovered(null)}
//               style={{
//                 width: "100%",
//                 border: `1px solid ${isHov ? cat.border : cat.border.replace("0.45","0.15").replace("0.40","0.14").replace("0.42","0.14")}`,
//                 background: isHov
//                   ? `linear-gradient(135deg, ${cat.solidBg.replace("0.22","0.38").replace("0.25","0.40")} 0%, rgba(10,10,10,0.92) 70%)`
//                   : cat.solidBg,
//                 cursor: "pointer",
//                 borderRadius: 12,
//                 display: "grid",
//                 gridTemplateColumns: COLS,
//                 gap: 12,
//                 padding: "12px 14px",
//                 alignItems: "center",
//                 textAlign: "left",
//                 transition: "all 180ms ease",
//                 transform: isHov ? "translateY(-1px)" : "translateY(0)",
//                 boxShadow: isHov
//                   ? `0 8px 28px rgba(0,0,0,0.50), 0 0 0 1px ${cat.border}, 0 0 20px ${cat.glow}`
//                   : "none",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               {/* left color accent bar */}
//               <div style={{
//                 position: "absolute", left: 0, top: "15%", bottom: "15%", width: 2,
//                 borderRadius: 99,
//                 background: `linear-gradient(to bottom, transparent, ${cat.color}, transparent)`,
//                 opacity: isHov ? 1 : 0,
//                 transition: "opacity 180ms ease",
//               }} />

//               {/* index / play */}
//               <div style={{ position: "relative", height: 18, display: "flex", alignItems: "center" }}>
//                 <span style={{
//                   position: "absolute",
//                   fontFamily: "monospace", fontSize: 11,
//                   color: "rgba(255,255,255,0.28)",
//                   opacity: isHov ? 0 : 1,
//                   transition: "opacity 160ms ease",
//                   fontVariantNumeric: "tabular-nums",
//                 }}>
//                   {String(i + 1).padStart(2, "0")}
//                 </span>
//                 <div style={{
//                   position: "absolute", width: 22, height: 22, borderRadius: 999,
//                   display: "grid", placeItems: "center",
//                   opacity: isHov ? 1 : 0,
//                   transform: isHov ? "scale(1)" : "scale(0.85)",
//                   transition: "opacity 160ms ease, transform 160ms ease",
//                   background: cat.bg,
//                   border: `1px solid ${cat.border}`,
//                   boxShadow: `0 0 8px ${cat.glow}`,
//                 }}>
//                   <svg width="9" height="11" viewBox="0 0 10 12" fill={cat.color}>
//                     <path d="M0 0l10 6-10 6z" />
//                   </svg>
//                 </div>
//               </div>

//               {/* content */}
//               <div style={{ minWidth: 0 }}>
//                 <p style={{
//                   fontSize: 13.5, fontWeight: 600, margin: 0,
//                   color: isHov ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.72)",
//                   whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
//                   transition: "color 160ms ease",
//                   letterSpacing: "-0.01em",
//                   textShadow: isHov ? `0 0 18px ${cat.glow}` : "none",
//                 }}>
//                   {truncate(k.content, 55)}
//                 </p>
//                 <p style={{
//                   fontSize: 11.5, margin: "3px 0 0",
//                   color: isHov ? "rgba(255,255,255,0.42)" : "rgba(255,255,255,0.28)",
//                   whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
//                   transition: "color 160ms ease",
//                 }}>
//                   {truncate(k.content, 72).slice(0, 50)}
//                 </p>
//               </div>

//               {/* category badge — solid colored pill */}
//               <div style={{
//                 display: "inline-flex", alignItems: "center", gap: 6,
//                 padding: "4px 10px", borderRadius: 99,
//                 background: isHov ? cat.bg : "rgba(255,255,255,0.04)",
//                 border: `1px solid ${isHov ? cat.border : "rgba(255,255,255,0.08)"}`,
//                 boxShadow: isHov ? `0 0 10px ${cat.glow}` : "none",
//                 transition: "all 180ms ease",
//                 width: "fit-content",
//               }}>
//                 <div style={{
//                   width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
//                   background: cat.color,
//                   boxShadow: isHov ? `0 0 6px 2px ${cat.color}` : "none",
//                   transition: "box-shadow 180ms ease",
//                 }} />
//                 <span style={{
//                   fontSize: 11, fontWeight: 600,
//                   color: isHov ? cat.color : "rgba(255,255,255,0.40)",
//                   whiteSpace: "nowrap",
//                   transition: "color 180ms ease",
//                   letterSpacing: "0.04em",
//                 }}>
//                   {cat.label}
//                 </span>
//               </div>

//               {/* date */}
//               <span style={{
//                 fontSize: 11, fontFamily: "monospace",
//                 color: isHov ? "rgba(255,255,255,0.40)" : "rgba(255,255,255,0.22)",
//                 whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums",
//                 transition: "color 180ms ease",
//               }}>
//                 {formatDate(k.createdAt)}
//               </span>

//               {/* chevron */}
//               <svg
//                 style={{
//                   opacity: isHov ? 0.7 : 0.15,
//                   transition: "opacity 160ms ease, transform 160ms ease, filter 160ms ease",
//                   transform: isHov ? "translateX(3px)" : "translateX(0)",
//                   flexShrink: 0,
//                   filter: isHov ? `drop-shadow(0 0 4px ${cat.color})` : "none",
//                 }}
//                 width="14" height="14" viewBox="0 0 24 24"
//                 fill="none" stroke={isHov ? cat.color : "rgba(255,255,255,0.9)"} strokeWidth="2"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           );
//         })}
//       </div>

//       {/* ── footer ── */}
//       <div style={{
//         marginTop: 12, padding: "10px 14px",
//         display: "flex", alignItems: "center", justifyContent: "space-between",
//         borderTop: "1px solid rgba(255,255,255,0.06)",
//       }}>
//         <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>
//           {kalams.length} {kalams.length === 1 ? "kalam" : "kalams"}
//         </span>
//         <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
//           {[0,1,2].map(n => (
//             <div key={n} style={{
//               width: n === 1 ? 16 : 4, height: 4, borderRadius: 99,
//               background: n === 1 ? "rgba(167,139,250,0.50)" : "rgba(167,139,250,0.20)",
//               transition: "all 0.2s",
//             }} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };








import { useState } from "react";

const formatDate = (iso) => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const truncate = (str, n) =>
  str && str.length > n ? str.slice(0, n).trimEnd() + "…" : str || "";

const categoryStyle = (type) => {
  const map = {
    ghazal: {
      label: "Ghazal",
      color: "#c4b5fd",
      bg: "rgba(147,51,234,0.16)",
      border: "rgba(168,85,247,0.42)",
      glow: "rgba(168,85,247,0.30)",
    },
    nazm: {
      label: "Nazm",
      color: "#f9a8d4",
      bg: "rgba(219,39,119,0.16)",
      border: "rgba(236,72,153,0.42)",
      glow: "rgba(236,72,153,0.30)",
    },
    rubai: {
      label: "Rubai",
      color: "#ddd6fe",
      bg: "rgba(168,85,247,0.14)",
      border: "rgba(192,132,252,0.40)",
      glow: "rgba(192,132,252,0.28)",
    },
    marsiya: {
      label: "Marsiya",
      color: "#fbcfe8",
      bg: "rgba(236,72,153,0.14)",
      border: "rgba(244,114,182,0.40)",
      glow: "rgba(244,114,182,0.28)",
    },
    hamd: {
      label: "Hamd",
      color: "#e9d5ff",
      bg: "rgba(147,51,234,0.14)",
      border: "rgba(168,85,247,0.40)",
      glow: "rgba(168,85,247,0.28)",
    },
    naat: {
      label: "Naat",
      color: "#f5d0fe",
      bg: "rgba(219,39,119,0.14)",
      border: "rgba(236,72,153,0.40)",
      glow: "rgba(236,72,153,0.28)",
    },
    qasida: {
      label: "Qasida",
      color: "#f0abfc",
      bg: "rgba(192,38,211,0.14)",
      border: "rgba(217,70,239,0.40)",
      glow: "rgba(217,70,239,0.28)",
    },
  };

  const key = (type || "").toLowerCase();

  return (
    map[key] || {
      label: type || "Kalam",
      color: "#d4d4d8",
      bg: "rgba(255,255,255,0.05)",
      border: "rgba(255,255,255,0.14)",
      glow: "rgba(255,255,255,0.12)",
    }
  );
};

export const KalamCard = ({ kalams = [], onSelect }) => {
  const [hovered, setHovered] = useState(null);

  if (!kalams.length) {
    return (
      <div
        style={{
          padding: "40px 0",
          textAlign: "center",
          fontFamily: "'Outfit', sans-serif",
          color: "rgba(255,255,255,0.22)",
          fontSize: 13,
        }}
      >
        No kalams yet.
      </div>
    );
  }

  const COLS = "34px 1fr 120px 96px 34px";

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", width: "100%" }}>
      {/* header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 5,
          padding: "10px 14px",
          marginBottom: 8,
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background:
            "",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          display: "grid",
          gridTemplateColumns: COLS,
          gap: 12,
          alignItems: "center",
        }}
      >
        {["#", "Kalam", "Category", "Date", ""].map((h) => (
          <span
            key={h}
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(167,139,250,0.68)",
              userSelect: "none",
            }}
          >
            {h}
          </span>
        ))}
      </div>

      {/* rows */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "0 8px",
        }}
      >
        {kalams.map((item, i) => {
          const k = item?.kalam || item;
          const cat = categoryStyle(k.type);
          const isHov = hovered === i;

          return (
            <button
              key={k._id || i}
              onClick={() => onSelect?.(item, i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                width: "100%",
                border: `1px solid ${
                  isHov ? "rgba(236,72,153,0.35)" : "rgba(255,255,255,0.10)"
                }`,
                background: isHov
                  ? "linear-gradient(to right, rgba(147,51,234,0.28), rgba(219,39,119,0.22), rgba(24,24,27,0.96))"
                  : "linear-gradient(to right, rgba(147,51,234,0.12), rgba(219,39,119,0.08), rgba(24,24,27,0.92))",
                cursor: "pointer",
                borderRadius: 16,
                display: "grid",
                gridTemplateColumns: COLS,
                gap: 12,
                padding: "16px 16px",
                alignItems: "center",
                textAlign: "left",
                transition:
                  "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease, background 180ms ease",
                transform: isHov ? "translateY(-2px)" : "translateY(0)",
                boxShadow: isHov
                  ? "0 12px 30px rgba(0,0,0,0.45), 0 0 0 1px rgba(168,85,247,0.12), 0 0 24px rgba(219,39,119,0.10)"
                  : "0 4px 18px rgba(0,0,0,0.24)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* left glow line */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "16%",
                  bottom: "16%",
                  width: 3,
                  borderRadius: 99,
                  background:
                    "linear-gradient(to bottom, #9333ea, #db2777, #9333ea)",
                  opacity: isHov ? 1 : 0.55,
                  transition: "opacity 180ms ease",
                }}
              />

              {/* index / play */}
              <div
                style={{
                  position: "relative",
                  height: 18,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    fontFamily: "monospace",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.30)",
                    opacity: isHov ? 0 : 1,
                    transition: "opacity 160ms ease",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  style={{
                    position: "absolute",
                    width: 24,
                    height: 24,
                    borderRadius: 999,
                    display: "grid",
                    placeItems: "center",
                    opacity: isHov ? 1 : 0,
                    transform: isHov ? "scale(1)" : "scale(0.88)",
                    transition: "opacity 160ms ease, transform 160ms ease",
                    background:
                      "linear-gradient(to right, rgba(147,51,234,0.22), rgba(219,39,119,0.22))",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow:
                      "0 0 10px rgba(147,51,234,0.22), 0 0 12px rgba(219,39,119,0.18)",
                  }}
                >
                  <svg width="9" height="11" viewBox="0 0 10 12" fill="#f5d0fe">
                    <path d="M0 0l10 6-10 6z" />
                  </svg>
                </div>
              </div>

              {/* content */}
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    fontSize: 13.5,
                    fontWeight: 600,
                    margin: 0,
                    color: "rgba(255,255,255,0.92)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {k.name || "Untitled"}
                </p>

                <p
                  style={{
                    fontSize: 12,
                    margin: "4px 0 0",
                    color: "rgba(255,255,255,0.36)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {truncate(k.content, 60)}
                </p>
              </div>

              {/* category */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "5px 10px",
                  borderRadius: 999,
                  background: isHov
                    ? "linear-gradient(to right, rgba(147,51,234,0.18), rgba(219,39,119,0.18))"
                    : "rgba(255,255,255,0.04)",
                  border: `1px solid ${
                    isHov ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.08)"
                  }`,
                  boxShadow: isHov
                    ? "0 0 10px rgba(168,85,247,0.12)"
                    : "none",
                  width: "fit-content",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: cat.color,
                    boxShadow: isHov ? `0 0 8px ${cat.glow}` : "none",
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: isHov ? cat.color : "rgba(255,255,255,0.46)",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.04em",
                  }}
                >
                  {cat.label}
                </span>
              </div>

              {/* date */}
              <span
                style={{
                  fontSize: 11,
                  fontFamily: "monospace",
                  color: "rgba(255,255,255,0.30)",
                  whiteSpace: "nowrap",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {formatDate(k.createdAt)}
              </span>

              {/* chevron */}
              <svg
                style={{
                  opacity: isHov ? 0.78 : 0.18,
                  transition:
                    "opacity 160ms ease, transform 160ms ease, filter 160ms ease",
                  transform: isHov ? "translateX(3px)" : "translateX(0)",
                  flexShrink: 0,
                  filter: isHov
                    ? "drop-shadow(0 0 6px rgba(219,39,119,0.35))"
                    : "none",
                }}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isHov ? "#f9a8d4" : "rgba(255,255,255,0.9)"}
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          );
        })}
      </div>

      {/* footer */}
      <div
        style={{
          marginTop: 12,
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.22)",
          }}
        >
          {kalams.length} {kalams.length === 1 ? "kalam" : "kalams"}
        </span>

        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          {[0, 1, 2].map((n) => (
            <div
              key={n}
              style={{
                width: n === 1 ? 16 : 4,
                height: 4,
                borderRadius: 99,
                background:
                  n === 1
                    ? "linear-gradient(to right, #9333ea, #db2777)"
                    : "rgba(167,139,250,0.22)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};