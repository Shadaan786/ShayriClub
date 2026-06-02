// import { useState, useEffect } from "react";
// import axiosInstance from "@/Apis/axiosInstance";

// const NewKalam=({
//         title,
//       content,
//       badgeBg,
//       badgeBorder,
//       autoMainColor,
//       resolvedTitleColor,
//       titleFs,
//       resolvedTitleFamily,
//       resolvedContentColor,
//       contentFs,
//       resolvedContentFamily,
//       subColor,
//       backdrop,
//       resolvedTextColor,
//       activeMoods,
//       type,
//       bgTab,
//       customColor,
//       selectedColor,
//       bgOpacity,
//       scrim,
//       isImage
// })=>{

//   // ── Compute live preview styles ──────────────────────────────────────────
//   // const effectiveBg = isImage ? null : (bgTab === "custom" ? customColor : selectedColor);
//   // const resolvedTextColor = textColor === "auto"
//   //   ? (isDark(effectiveBg || "#222") ? "light" : "dark")
//   //   : textColor;
//   // const autoMainColor = resolvedTextColor === "light" ? "#ffffff" : "#1a1a1a";
//   // const subColor    = resolvedTextColor === "light" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.5)";
//   // const badgeBg     = resolvedTextColor === "light" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.10)";
//   // const badgeBorder = resolvedTextColor === "light" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.18)";
//   // const titleFs      = titleSize === "sm" ? "13px" : titleSize === "lg" ? "60px" : "15px";
//   // const contentFs     = contentSize === "sm" ? "17px" : contentSize === "lg" ? "40px" : "20px";

//   // // Resolve title & content colors (palette override or auto)
//   // const resolvedTitleColor   = titleColorMode   === "auto" ? autoMainColor : selectedTitleColor;
//   // const resolvedContentColor = contentColorMode === "auto" ? autoMainColor : selectedContentColor;

//   // // Resolve font families
//   // const resolvedTitleFamily   = TITLE_FONTS.find(f => f.id === selectedTitleFont)?.family   || "'Cormorant Garamond', serif";
//   // const resolvedContentFamily = CONTENT_FONTS.find(f => f.id === selectedContentFont)?.family || "'Cormorant Garamond', serif";

//   // const previewWrapStyle = (() => {
//   //   if (backdrop === "none") return { background: "none", padding: "1.5rem", backdropFilter: "none", border: "none", borderRadius: "0" };
//   //   if (backdrop === "soft") return {
//   //     background: resolvedTextColor === "light" ? "rgba(0,0,0,0.28)" : "rgba(255,255,255,0.28)",
//   //     padding: "1.75rem 1.5rem",
//   //     backdropFilter: "blur(14px)",
//   //     WebkitBackdropFilter: "blur(14px)",
//   //     border: `0.5px solid ${resolvedTextColor === "light" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"}`,
//   //     borderRadius: "14px"
//   //   };
//   //   return {
//   //     background: resolvedTextColor === "light" ? "rgba(0,0,0,0.58)" : "rgba(255,255,255,0.88)",
//   //     padding: "1.75rem 1.5rem",
//   //     backdropFilter: "none",
//   //     border: `0.5px solid ${resolvedTextColor === "light" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
//   //     borderRadius: "14px"
//   //   };
//   // })();

//   // const previewFormLabel = type || (sinf ? SINF_OPTIONS.find(o => o.value === sinf)?.value : "Ghazal") || "Ghazal";
//   // const PREVIEW_LIMIT = 160;
//   // const previewIsTruncated = content.length > PREVIEW_LIMIT;
//   // const previewText = showFullPreview ? content : content.slice(0, PREVIEW_LIMIT);


//   // Build Google Fonts URL dynamically from all fonts

//   // ── Poetry-aesthetic font options ──────────────────────────────────────────
// const TITLE_FONTS = [
//   { id: "cormorant",       label: "Cormorant Garamond", sample: "یاد کا لمحہ",  family: "'Cormorant Garamond', serif",      googleParam: "Cormorant+Garamond:ital,wght@1,300;1,400;1,600" },
//   { id: "playfair",        label: "Playfair Display",   sample: "Shaam-e-Ghazal", family: "'Playfair Display', serif",          googleParam: "Playfair+Display:ital,wght@1,400;1,700" },
//   { id: "im_fell",         label: "IM Fell English",    sample: "Dil ki Baat",    family: "'IM Fell English', serif",            googleParam: "IM+Fell+English:ital@1" },
//   { id: "sorts_mill",      label: "Sorts Mill Goudy",   sample: "Raat Ka Sitara", family: "'Sorts Mill Goudy', serif",           googleParam: "Sorts+Mill+Goudy:ital@1" },
//   { id: "spectral",        label: "Spectral",            sample: "Aashiqui",       family: "'Spectral', serif",                   googleParam: "Spectral:ital,wght@1,300;1,400;1,600" },
//   { id: "eb_garamond",     label: "EB Garamond",         sample: "Dard-e-Dil",     family: "'EB Garamond', serif",                googleParam: "EB+Garamond:ital,wght@1,400;1,700" },
//   { id: "libre_baskerville",label: "Libre Baskerville",  sample: "Tanhai",         family: "'Libre Baskerville', serif",          googleParam: "Libre+Baskerville:ital@1" },
//   { id: "gfs_didot",       label: "GFS Didot",           sample: "Mohabbat",       family: "'GFS Didot', serif",                  googleParam: "GFS+Didot" },
//   { id: "dm_serif",        label: "DM Serif Display",    sample: "Khwab",          family: "'DM Serif Display', serif",           googleParam: "DM+Serif+Display:ital@1" },
//   { id: "cinzel",          label: "Cinzel",              sample: "KALAM",          family: "'Cinzel', serif",                     googleParam: "Cinzel:wght@400;700" },
//   { id: "della_respira",   label: "Della Respira",       sample: "Ruh ki Awaaz",   family: "'Della Respira', serif",              googleParam: "Della+Respira" },
//   { id: "alice",           label: "Alice",               sample: "Teri Yaad",      family: "'Alice', serif",                      googleParam: "Alice" },
// ];

// const CONTENT_FONTS = [
//   { id: "cormorant_body",  label: "Cormorant Garamond", sample: "Har saans mein teri khushbu hai…", family: "'Cormorant Garamond', serif",   googleParam: "Cormorant+Garamond:ital,wght@1,300;1,400" },
//   { id: "eb_garamond_body",label: "EB Garamond",         sample: "Main woh sitara hoon jo doob gaya…", family: "'EB Garamond', serif",        googleParam: "EB+Garamond:ital,wght@1,400" },
//   { id: "spectral_body",   label: "Spectral Light",      sample: "Zindagi ek ghazal thi, adhoori rahi…", family: "'Spectral', serif",         googleParam: "Spectral:ital,wght@1,300;1,400" },
//   { id: "im_fell_body",    label: "IM Fell English",     sample: "Raaton ko taaron se baatein karta hoon…", family: "'IM Fell English', serif", googleParam: "IM+Fell+English:ital@1" },
//   { id: "lora",            label: "Lora",                sample: "Tere bina yeh chaand bhi suna lagta hai…", family: "'Lora', serif",          googleParam: "Lora:ital,wght@1,400;1,500" },
//   { id: "merriweather",    label: "Merriweather Light",  sample: "Dil ke dareecha se teri jhalak aati hai…", family: "'Merriweather', serif",  googleParam: "Merriweather:ital,wght@1,300" },
//   { id: "crimson",         label: "Crimson Pro",         sample: "Aankhon mein teri sirf teri tasveer hai…", family: "'Crimson Pro', serif",   googleParam: "Crimson+Pro:ital,wght@1,300;1,400" },
//   { id: "libre_bask_body", label: "Libre Baskerville",   sample: "Tu hai toh sab kuch hai, tu nahi toh kuch bhi nahi…", family: "'Libre Baskerville', serif", googleParam: "Libre+Baskerville:ital@1" },
//   { id: "noto_serif",      label: "Noto Serif",          sample: "یہ عشق نہیں آسان بس اتنا سمجھ لیجے", family: "'Noto Serif', serif",         googleParam: "Noto+Serif:ital,wght@1,300;1,400" },
//   { id: "noto_nastaliq",   label: "Noto Nastaliq Urdu",  sample: "دل کے آئینے میں تیری تصویر ہے",         family: "'Noto Nastaliq Urdu', serif", googleParam: "Noto+Nastaliq+Urdu:wght@400;600" },
// ];


// const buildGoogleFontsUrl = () => {
//   const all = [...TITLE_FONTS, ...CONTENT_FONTS];
//   const seen = new Set();
//   const params = all
//     .filter(f => { if (seen.has(f.googleParam)) return false; seen.add(f.googleParam); return true; })
//     .map(f => `family=${f.googleParam}`)
//     .join("&");
//   return `https://fonts.googleapis.com/css2?${params}&family=DM+Mono:wght@300;400&display=swap`;
// };
// //  const [badgeBg, setBadgeBg] = useState("");
// //       const [badgeBorder, setBadgeBorder] = useState("")
// //      const  [autoMainColor, setAutoMainColor] = useState("")
// //       const [resolvedTitleColor, setResolvedTitleColor] = useState("")
// //       const [titleFs, setTitleFs] = useState("")
// //       const [resolvedTitleFamily, setResolvedTitleFamily] = useState("")
// //       const [resolvedContentColor, setResolvedContentColor] = useState("")
// //       const [contentFs, setContenFs] = useState("")
// //       const [resolvedContentFamily, setResolvedContentFamily] = useState("")
// //       const [subColor, setSubColor] = useState("")
// //       const [backdrop, setBackdrop] = useState("")
// //       const [resolvedTextColor, setResolvedTextColor] = useState("")
// //       const [activeMoods, setActiveMoods] = useState("")
// //       const [title, setTitle] = useState("");
// //       const [type, setType] = useState("");
// //       const [content, setContent] = useState("")
//         const [showFullPreview, setShowFullPreview] = useState(false);
//         //  const [bgTab, setBgTab] = useState("colors");
//         //   const [selectedColor, setSelectedColor] = useState("");
//         //   const [customColor, setCustomColor] = useState("");
//         //   const [imageSrc, setImageSrc] = useState(null);
//         //   const [isImage, setIsImage] = useState(false);
//         //   const [bgOpacity, setBgOpacity] = useState(100);
//         //   const [scrim, setScrim] = useState(30);



//      const previewWrapStyle = (() => {
//   if (backdrop === "none") return { 
//     background: "none", 
//     padding: "1.5rem", 
//     backdropFilter: "none", 
//     border: "none", 
//     borderRadius: "0" 
//   };
//   if (backdrop === "soft") return {
//     background: resolvedTextColor === "light" ? "rgba(0,0,0,0.28)" : "rgba(255,255,255,0.28)",
//     padding: "1.75rem 1.5rem",
//     backdropFilter: "blur(14px)",
//     WebkitBackdropFilter: "blur(14px)",
//     border: "none",
//     borderRadius: "0",
//     minHeight: "100%",
//     height: "100%",
//   };
//   return {
//     background: resolvedTextColor === "light" ? "rgba(0,0,0,0.58)" : "rgba(255,255,255,0.88)",
//     padding: "1.75rem 1.5rem",
//     backdropFilter: "none",
//     border: "none",
//     borderRadius: "0",
//     minHeight: "100%",
//     height: "100%",
//   };
// })();

  
//   // const previewFormLabel = type || (sinf ? SINF_OPTIONS.find(o => o.value === sinf)?.value : "Ghazal") || "Ghazal";
//   const PREVIEW_LIMIT = 160;
//   const previewIsTruncated = content.length > PREVIEW_LIMIT;
//   const previewText = showFullPreview ? content : content.slice(0, PREVIEW_LIMIT);



// useEffect(()=>{



//   axiosInstance
//   .get('/api/customKalam')
//   .then((Response)=>{
//     // setBadgeBg(Response.data[0].customStyles.badgeBg);
//     //   setBadgeBorder(Response.data[0].customStyles.badgeBorder);
//     //   setAutoMainColor(Response.data[0].customStyles.autoMainColor);
//     //   setResolvedTitleColor(Response.data[0].customStyles.resolvedTitleColor);
//     //   setTitleFs(Response.data[0].customStyles.titleFs);
//     //   setResolvedTitleFamily(Response.data[0].customStyles.resolvedTitleFamily);
//     //   setResolvedContentColor(Response.data[0].customStyles.resolvedContentColor);
//     //   setContenFs(Response.data[0].customStyles.contentFs);
//     //   setResolvedContentFamily(Response.data[0].customStyles.resolvedContentFamily);
//     //   setSubColor(Response.data[0].customStyles.subColor);
//     //   setBackdrop(Response.data[0].customStyles.backdrop);
//     //   setResolvedTextColor(Response.data[0].customStyles.resolvedTextColor);
//     //   setActiveMoods(Response.data[0].customStyles.activeMoods);
//     //   setType(Response.data[0].type);
//     //   setContent(Response.data[0].content);
//     //   setTitle(Response.data[0].name);
//     //   console.log("Response.data[0]", Response.data[0])
//     //   setScrim(Response.data[0].customStyles.scrim)
//     //   setBgOpacity(Response.data[0].customStyles.bgOpacity)
//     //   setCustomColor(Response.data[0].customStyles.customColor)
//     //   setSelectedColor(Response.data[0].customStyles.selectedColor)
      
  
//   })

//   }, [])
//   return (
//     <>
//       <style>{`
//         @import url('${buildGoogleFontsUrl()}');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         /* ── Root ──────────────────────────────────── */
//         .k-root {
//           --border-sm:  rgba(255,255,255,0.05);
//           --border-md:  rgba(255,255,255,0.08);
//           --text-pri:   #f0ebe3;
//           --text-sec:   rgba(240,235,227,0.55);
//           --text-ter:   rgba(240,235,227,0.28);
//           --gold:       rgba(210,170,90,0.85);
//           --r-md: 6px;
//           --r-lg: 10px;

//           min-height: 100vh;
//           background-color: #07060d;
//           background-image:
//             radial-gradient(ellipse 70% 55% at 50% -10%, rgba(120,60,180,0.18) 0%, transparent 55%),
//             radial-gradient(ellipse 50% 40% at 15% 60%,  rgba(160,30,70,0.10)  0%, transparent 50%),
//             radial-gradient(ellipse 40% 35% at 90% 80%,  rgba(180,120,20,0.07) 0%, transparent 50%),
//             radial-gradient(ellipse 60% 30% at 50% 100%, rgba(80,40,140,0.12)  0%, transparent 60%);
//           font-family: 'DM Mono', monospace;
//           color: var(--text-pri);
//           overflow-x: hidden;
//           -webkit-text-size-adjust: 100%;
//         }

//         /* ── Sticky Nav ────────────────────────────── */
//         .k-nav {
//           background: rgba(10,10,14,0.92);
//           backdrop-filter: blur(18px);
//           -webkit-backdrop-filter: blur(18px);
//           border-bottom: 0.5px solid var(--border-sm);
//           padding: 0 max(1.25rem, env(safe-area-inset-left));
//           display: flex; align-items: center; justify-content: space-between;
//           height: 52px; position: sticky; top: 0; z-index: 50; width: 100%;
//         }
//         .k-brand { display: flex; align-items: center; gap: 9px; }
//         .k-logo {
//           width: 30px; height: 30px; flex-shrink: 0;
//           background: linear-gradient(135deg, #2d2060, #4a3580);
//           border: 0.5px solid rgba(210,170,90,0.3); border-radius: 7px;
//           display: flex; align-items: center; justify-content: center;
//           color: rgba(210,170,90,0.9); font-size: 14px;
//         }
//         .k-wordmark {
//           font-family: 'Playfair Display', serif;
//           font-size: 19px; font-weight: 700; font-style: italic;
//           background: linear-gradient(135deg, #e8d5a3 0%, #c9a84c 50%, #f0d890 100%);
//           -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
//         }
//         .k-nav-links { display: flex; align-items: center; gap: 2px; }
//         .k-nl {
//           padding: 6px 12px; font-size: 11px; letter-spacing: 0.08em;
//           color: var(--text-sec); border-radius: var(--r-md);
//           cursor: pointer; border: none; background: transparent;
//           transition: background 0.12s, color 0.12s; font-family: 'DM Mono', monospace;
//           white-space: nowrap; min-height: 36px;
//         }
//         .k-nl:hover  { background: rgba(255,255,255,0.04); color: var(--text-pri); }
//         .k-nl.active { color: rgba(210,170,90,0.9); background: rgba(180,140,50,0.1); }
//         .k-nav-right { display: flex; align-items: center; gap: 8px; }
//         .k-avatar {
//           width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
//           background: rgba(83,74,183,0.18); border: 0.5px solid rgba(210,170,90,0.3);
//           display: flex; align-items: center; justify-content: center;
//           font-size: 11px; font-weight: 500; color: rgba(210,170,90,0.8); cursor: pointer;
//         }
//         .k-hamburger {
//           display: none; flex-direction: column; justify-content: center;
//           align-items: center; gap: 4px; width: 32px; height: 32px;
//           background: transparent; border: none; cursor: pointer; padding: 4px;
//         }
//         .k-hamburger span { display: block; width: 18px; height: 1.5px; background: rgba(210,170,90,0.7); border-radius: 2px; }
//         .k-mobile-menu {
//           position: fixed; top: 52px; left: 0; right: 0; z-index: 49;
//           background: rgba(10,10,14,0.97); backdrop-filter: blur(20px);
//           border-bottom: 0.5px solid rgba(210,170,90,0.1); padding: 0.5rem 0;
//           display: flex; flex-direction: column;
//         }
//         .k-mobile-menu .k-nl {
//           padding: 13px 1.25rem; font-size: 12px; border-radius: 0;
//           border-bottom: 0.5px solid var(--border-sm); text-align: left;
//         }
//         .k-mobile-menu .k-nl:last-child { border-bottom: none; }

//         /* ── Buttons ───────────────────────────────── */
//         .k-btn-ghost {
//           background: transparent; border: 0.5px solid var(--border-md);
//           border-radius: var(--r-md); padding: 6px 12px; font-size: 11px;
//           color: var(--text-sec); cursor: pointer; display: flex; align-items: center;
//           gap: 5px; transition: all 0.12s; font-family: 'DM Mono', monospace;
//           letter-spacing: 0.07em; text-decoration: none; white-space: nowrap; min-height: 34px;
//         }
//         .k-btn-ghost:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.18); color: var(--text-pri); }

//         .k-btn-primary {
//           background: linear-gradient(135deg, #4a3080, #3C3489, #5a3d9a);
//           border: 0.5px solid rgba(180,140,80,0.25); border-radius: var(--r-md);
//           padding: 8px 18px; font-size: 11px; color: rgba(240,220,160,0.95);
//           cursor: pointer; display: flex; align-items: center; gap: 6px;
//           font-family: 'DM Mono', monospace; letter-spacing: 0.1em;
//           transition: opacity 0.12s, box-shadow 0.12s; text-decoration: none;
//           box-shadow: 0 2px 12px rgba(100,60,180,0.25); min-height: 36px;
//           white-space: nowrap;
//         }
//         .k-btn-primary:hover { opacity: 0.88; box-shadow: 0 4px 20px rgba(100,60,180,0.4); }

//         /* ── Hero ──────────────────────────────────── */
//         .k-hero {
//           position: relative; overflow: hidden;
//           border-bottom: 0.5px solid rgba(180,140,80,0.15);
//           padding: 2rem max(1.25rem, env(safe-area-inset-left)) 1.75rem;
//         }
//         .k-hero::before {
//           content: ''; position: absolute; inset: 0; pointer-events: none;
//           background:
//             radial-gradient(ellipse 90% 100% at 50% 0%,  rgba(100,50,160,0.22) 0%, transparent 65%),
//             radial-gradient(ellipse 60% 80%  at 10% 50%, rgba(150,25,60,0.10)  0%, transparent 55%),
//             radial-gradient(ellipse 50% 60%  at 90% 60%, rgba(190,130,20,0.07) 0%, transparent 50%);
//         }
//         .k-hero::after {
//           content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
//           background: linear-gradient(90deg,
//             transparent, rgba(180,140,80,0) 10%, rgba(200,160,80,0.5) 30%,
//             rgba(220,180,100,0.8) 50%, rgba(200,160,80,0.5) 70%, rgba(180,140,80,0) 90%, transparent);
//         }
//         .k-hero-inner {
//           max-width: 1200px; margin: 0 auto; position: relative; z-index: 1;
//           display: flex; align-items: flex-end; justify-content: space-between;
//           flex-wrap: wrap; gap: 16px;
//         }
//         .k-greeting {
//           font-size: 9px; color: rgba(210,170,90,0.75);
//           letter-spacing: 0.4em; text-transform: uppercase; margin-bottom: 8px;
//           display: flex; align-items: center; gap: 10px;
//         }
//         .k-greeting::before, .k-greeting::after {
//           content: ''; display: inline-block; width: 20px; height: 0.5px;
//           background: rgba(210,170,90,0.4);
//         }
//         @keyframes goldShimmer {
//           0%   { background-position: -200% center; }
//           100% { background-position:  200% center; }
//         }
//         .k-hero-kalam {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(38px, 6vw, 64px);
//           font-weight: 700; font-style: italic; line-height: 0.92; letter-spacing: -0.03em;
//           background: linear-gradient(135deg, #e8d5a3 0%, #f5e6c0 18%, #c9a84c 35%, #f0d890 50%, #b8860b 65%, #e8d5a3 80%, #f5edd5 100%);
//           -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
//           display: block; background-size: 200% auto;
//           animation: goldShimmer 5s linear infinite;
//           filter: drop-shadow(0 2px 20px rgba(200,160,60,0.18));
//         }
//         .k-hero-kalam-urdu {
//           font-family: 'Noto Nastaliq Urdu', serif;
//           font-size: clamp(14px, 2.5vw, 22px); color: rgba(210,170,90,0.5);
//           display: block; margin-top: 3px; direction: rtl;
//         }
//         .k-hero-ornament { display: flex; align-items: center; gap: 10px; margin: 10px 0 3px; }
//         .k-hero-ornament-line { flex: 1; max-width: 55px; height: 0.5px; background: linear-gradient(90deg, rgba(210,170,90,0.5), transparent); }
//         .k-hero-ornament-line.right { background: linear-gradient(270deg, rgba(210,170,90,0.5), transparent); }
//         .k-hero-ornament-diamond { width: 5px; height: 5px; background: rgba(210,170,90,0.7); transform: rotate(45deg); flex-shrink: 0; }
//         .k-hero-sub {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(12px, 2vw, 14px); color: rgba(240,235,220,0.3); font-style: italic;
//         }
//         .k-stats { display: flex; gap: 1.5rem; flex-shrink: 0; }
//         .k-stat { text-align: right; }
//         .k-stat-num {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(20px, 3vw, 26px); font-weight: 400; line-height: 1;
//           background: linear-gradient(135deg, #e8d5a3, #c9a84c);
//           -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
//         }
//         .k-stat-label { font-size: 9px; color: rgba(210,170,90,0.4); letter-spacing: 0.25em; text-transform: uppercase; margin-top: 3px; }
//         .k-stat-divider { width: 0.5px; align-self: stretch; background: rgba(210,170,90,0.12); margin: 2px 0; }

//         /* ══ SPLIT LAYOUT ══════════════════════════ */
//         .k-split {
//           max-width: 1200px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 0;
//           height: calc(100vh - 52px - 130px);
//           min-height: 600px;
//           padding: 0 max(1rem, env(safe-area-inset-left));
//           overflow: hidden;
//         }

//         .k-preview-pane {
//           position: sticky;
//           top: 52px;
//           height: calc(100vh - 52px);
//           display: flex;
//           flex-direction: column;
//           padding: 1.5rem 1rem 1.5rem 0;
//           border-right: 0.5px solid var(--border-sm);
//           overflow: hidden;
//           flex-shrink: 0;
//         }

//         .k-preview-label {
//           font-size: 9px; font-weight: 500; letter-spacing: 0.35em; text-transform: uppercase;
//           color: var(--text-ter); margin-bottom: 10px;
//           display: flex; align-items: center; gap: 8px;
//         }
//         .k-preview-label::after {
//           content: ''; flex: 1; height: 0.5px;
//           background: linear-gradient(90deg, var(--border-sm), transparent);
//         }

//         .k-preview-card {
//           flex: none; border-radius: 14px 14px 0 0; overflow: hidden;
//           height: 400px;
//           width: 400px;
//           border: 0.5px solid var(--border-md);
//           position: relative; display: flex; align-items: center;  /* ← back to center */
//           justify-content: center;
//           transition: all 0.3s ease;
//           box-shadow: inset 0 0 60px rgba(0,0,0,0.3), 0 8px 40px rgba(0,0,0,0.4);
//         }

//         .k-prev-bg {
//           position: absolute; inset: 0;
//           transition: background-color 0.35s ease, opacity 0.35s ease;
//           border-radius: inherit;
//         }

//         .k-prev-scrim {
//           position: absolute; inset: 0; border-radius: inherit;
//           transition: background 0.3s ease;
//         }

//         .k-prev-content {
//           position: relative; z-index: 2;
//           width: 100%; padding: 1.5rem 1.25rem 60px;
//           text-align: center;
//           overflow-wrap: break-word;
//           word-break: break-word;
//           min-width: 0;
//           overflow-y: auto;
//           max-height: 100%;
//           scrollbar-width: none;
//         }
//         .k-prev-content::-webkit-scrollbar { display: none; }

//         .k-prev-badge {
//           display: inline-block; padding: 3px 12px; border-radius: 20px;
//           font-size: 9px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase;
//           margin-bottom: 14px; transition: all 0.2s;
//           font-family: 'DM Mono', monospace;
//         }

//         .k-prev-title {
//           font-weight: 400; line-height: 1.35; margin-bottom: 16px;
//           transition: color 0.2s, font-size 0.2s;
//           font-style: italic;
//         }

//         .k-prev-text {
//           line-height: 2; font-style: italic;
//           margin: 60px;
//           white-space: pre-wrap;
//           word-break: break-word;
//           overflow-wrap: break-word;
//           word-wrap: break-word;
//           max-width: 100%;
//           transition: color 0.2s, font-size 0.2s;
//         }

//         .k-prev-read-more {
//           display: inline-flex; align-items: center; gap: 5px;
//           margin-top: 10px;
//           padding: 4px 12px; border-radius: 20px;
//           font-size: 9px; font-weight: 500;
//           letter-spacing: 0.18em; text-transform: uppercase;
//           font-family: 'DM Mono', monospace;
//           border: 0.5px solid rgba(210,170,90,0.3);
//           background: rgba(210,170,90,0.07);
//           color: rgba(210,170,90,0.8);
//           cursor: pointer;
//           transition: all 0.15s;
//         }
//         .k-prev-read-more:hover {
//           background: rgba(210,170,90,0.14);
//           border-color: rgba(210,170,90,0.55);
//           color: rgba(210,170,90,1);
//         }

//         .k-prev-author {
//           font-size: 11px; font-family: 'DM Mono', monospace;
//           letter-spacing: 0.1em; margin-top: 60px; margin-left: 70px; opacity: 0.65;
//           transition: color 0.2s;
//         }

//         .k-prev-empty {
//           position: absolute; inset: 0;
//           display: flex; flex-direction: column;
//           align-items: center; justify-content: center; gap: 12px;
//           z-index: 3;
//         }
//         .k-prev-empty-glyph {
//           font-family: 'Playfair Display', serif;
//           font-size: 48px; font-style: italic;
//           background: linear-gradient(135deg, #e8d5a3, #c9a84c);
//           -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
//           opacity: 0.25; line-height: 1;
//         }
//         .k-prev-empty-text {
//           font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase;
//           color: rgba(255,255,255,0.15);
//         }

//         .k-preview-status {
//           margin-top: 10px;
//           display: flex; align-items: center; justify-content: space-between;
//           padding: 0 2px;
//         }
//         .k-preview-status-dot {
//           width: 6px; height: 6px; border-radius: 50%;
//           background: rgba(120,200,180,0.7); flex-shrink: 0;
//           animation: livePulse 2.5s ease infinite;
//         }
//         @keyframes livePulse { 0%,100%{opacity:0.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.3)} }
//         .k-preview-status-text {
//           font-size: 9px; color: rgba(120,200,180,0.55);
//           letter-spacing: 0.2em; text-transform: uppercase;
//           display: flex; align-items: center; gap: 6px;
//         }
//         .k-preview-mood-pills { display: flex; gap: 4px; flex-wrap: wrap; justify-content: flex-end; }
//         .k-preview-mood-pill {
//           padding: 2px 8px; border-radius: 20px; font-size: 9px;
//           background: rgba(83,74,183,0.12); border: 0.5px solid rgba(175,169,236,0.3);
//           color: #AFA9EC; letter-spacing: 0.1em;
//         }

//         .k-form-pane {
//           overflow-y: auto;
//           overflow-x: hidden;
//           height: calc(100vh - 52px);
//           padding: 1.5rem 0 4rem 1.5rem;
//           min-width: 0;
//           word-break: break-word;
//           overflow-wrap: break-word;
//           scrollbar-width: thin;
//           scrollbar-color: rgba(210,170,90,0.15) transparent;
//         }
//         .k-form-pane::-webkit-scrollbar { width: 4px; }
//         .k-form-pane::-webkit-scrollbar-track { background: transparent; }
//         .k-form-pane::-webkit-scrollbar-thumb { background: rgba(210,170,90,0.15); border-radius: 4px; }

//         .k-section-label {
//           font-size: 9px; font-weight: 500; color: var(--text-ter);
//           letter-spacing: 0.35em; text-transform: uppercase; margin-bottom: 10px;
//         }

//         .k-card {
//           background: rgba(255,255,255,0.025); border: 0.5px solid var(--border-sm);
//           border-radius: var(--r-lg); margin-bottom: 12px;
//           width: 100%;
//           min-width: 0;
//           overflow: hidden;
//           word-break: break-word;
//           overflow-wrap: break-word;
//         }
//         .k-card-head {
//           padding: 0.9rem 1.1rem;
//           border-bottom: 0.5px solid var(--border-sm);
//           display: flex; align-items: center; justify-content: space-between; gap: 8px;
//         }
//         .k-card-title { font-size: 13px; font-weight: 500; color: var(--text-pri); }
//         .k-card-sub   { font-size: 10px; color: var(--text-ter); margin-top: 2px; }
//         .k-card-body  { padding: 1.1rem; }

//         .k-field-grid {
//           display: grid; grid-template-columns: 1fr 1fr;
//           gap: 12px; margin-bottom: 1.1rem;
//         }
//         .k-field { display: flex; flex-direction: column; gap: 6px; }
//         .k-label {
//           font-size: 9px; font-weight: 500; color: var(--text-sec);
//           letter-spacing: 0.25em; text-transform: uppercase;
//         }
//         .k-label-urdu { font-size: 10px; color: var(--text-ter); letter-spacing: 0; text-transform: none; font-weight: 400; }

//         .k-select, .k-input {
//           height: 40px; border-radius: var(--r-md);
//           border: 0.5px solid var(--border-md);
//           background: rgba(255,255,255,0.04); color: var(--text-pri);
//           font-size: 16px; padding: 0 12px; outline: none;
//           transition: border 0.15s, box-shadow 0.15s;
//           font-family: 'DM Mono', monospace; width: 100%; appearance: none;
//         }
//         .k-select option { background: #0f0f12; color: #f0ebe3; }
//         .k-select:focus, .k-input:focus {
//           border-color: rgba(127,119,221,0.6);
//           box-shadow: 0 0 0 3px rgba(127,119,221,0.08);
//         }
//         .k-input::placeholder { color: var(--text-ter); font-style: italic; font-size: 13px; }

//         .k-sep { height: 0.5px; background: var(--border-sm); margin: 0 0 1.1rem; }

//         .k-mood-label {
//           font-size: 9px; font-weight: 500; color: var(--text-sec);
//           letter-spacing: 0.25em; text-transform: uppercase; margin-bottom: 8px;
//         }
//         .k-moods { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 1.1rem; }
//         .k-mood {
//           padding: 5px 11px; border-radius: 20px; font-size: 10px;
//           border: 0.5px solid var(--border-md); color: var(--text-sec);
//           background: transparent; cursor: pointer;
//           transition: all 0.12s; font-family: 'DM Mono', monospace; min-height: 32px;
//           display: flex; align-items: center;
//         }
//         .k-mood:hover { border-color: rgba(175,169,236,0.5); color: #AFA9EC; }
//         .k-mood.on { background: rgba(83,74,183,0.12); border-color: rgba(175,169,236,0.5); color: #AFA9EC; font-weight: 500; }

//         .k-textarea-wrap { position: relative; margin-bottom: 1.1rem; }
//         .k-textarea {
//           width: 100%; min-height: 140px;
//           border: 0.5px solid var(--border-md); border-radius: var(--r-md);
//           background: rgba(255,255,255,0.04); color: var(--text-pri);
//           font-size: 16px; font-family: 'Cormorant Garamond', serif;
//           line-height: 1.85; padding: 14px 14px 50px; resize: vertical; outline: none;
//           transition: border 0.15s, box-shadow 0.15s;
//         }
//         .k-textarea:focus { border-color: rgba(127,119,221,0.6); box-shadow: 0 0 0 3px rgba(127,119,221,0.08); }
//         .k-textarea::placeholder { color: var(--text-ter); font-style: italic; font-size: 14px; }
//         .k-toolbar {
//           position: absolute; bottom: 0; left: 0; right: 0; padding: 7px 10px;
//           display: flex; align-items: center; justify-content: space-between;
//           border-top: 0.5px solid var(--border-sm);
//         }
//         .k-mic {
//           display: flex; align-items: center; gap: 6px;
//           padding: 4px 10px; border-radius: 20px;
//           border: 0.5px solid var(--border-md); background: rgba(255,255,255,0.03);
//           color: var(--text-sec); font-size: 10px; cursor: pointer;
//           transition: all 0.15s; font-family: 'DM Mono', monospace;
//           letter-spacing: 0.05em; min-height: 28px;
//         }
//         .k-mic:hover { border-color: rgba(175,169,236,0.4); color: #AFA9EC; background: rgba(83,74,183,0.07); }
//         .k-mic.rec   { border-color: rgba(226,75,74,0.5); background: rgba(226,75,74,0.07); color: rgba(255,140,140,0.9); }
//         .k-mic-dot { width: 6px; height: 6px; border-radius: 50%; background: #E24B4A; display: none; flex-shrink: 0; }
//         .k-mic.rec .k-mic-dot { display: block; animation: blink 1s ease infinite; }
//         @keyframes blink { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(0.6)} }
//         .k-charcount { font-size: 10px; color: var(--text-ter); }

//         .k-audio-row {
//           margin-top: 8px; padding: 9px 12px;
//           background: rgba(255,255,255,0.02); border: 0.5px solid var(--border-sm);
//           border-radius: var(--r-md); display: flex; align-items: center; gap: 10px;
//         }
//         .k-audio-row audio { flex: 1; height: 26px; filter: invert(0.8) hue-rotate(160deg); min-width: 0; }

//         /* ── Background picker ─────────────────────── */
//         .bp-tabs { display: flex; gap: 4px; margin-bottom: 12px; flex-wrap: wrap; }
//         .bp-tab {
//           padding: 5px 10px; border-radius: var(--r-md); font-size: 10px; font-weight: 500;
//           border: 0.5px solid transparent; color: var(--text-sec);
//           cursor: pointer; background: transparent; font-family: 'DM Mono', monospace;
//           transition: all 0.12s; letter-spacing: 0.05em; min-height: 30px;
//         }
//         .bp-tab:hover { background: rgba(255,255,255,0.04); }
//         .bp-tab.on { background: rgba(83,74,183,0.12); color: #AFA9EC; border-color: rgba(175,169,236,0.35); }
//         .bp-colors { display: flex; flex-wrap: wrap; gap: 7px; }
//         .bp-swatch {
//           width: 30px; height: 30px; border-radius: var(--r-md);
//           cursor: pointer; border: 2px solid transparent; transition: all 0.15s; flex-shrink: 0;
//         }
//         .bp-swatch:hover { transform: scale(1.12); }
//         .bp-swatch.selected { border-color: #AFA9EC; transform: scale(1.15); }
//         .bp-custom-row { display: flex; align-items: center; gap: 12px; }
//         .bp-color-thumb {
//           width: 44px; height: 44px; border-radius: var(--r-md);
//           border: 0.5px solid var(--border-md); cursor: pointer;
//           position: relative; overflow: hidden; flex-shrink: 0;
//         }
//         .bp-color-thumb input[type=color] {
//           position: absolute; inset: -4px; opacity: 0; cursor: pointer;
//           width: calc(100% + 8px); height: calc(100% + 8px);
//         }
//         .bp-upload-zone {
//           border: 0.5px dashed var(--border-md); border-radius: var(--r-md);
//           padding: 1rem; text-align: center; cursor: pointer;
//           transition: all 0.15s; background: rgba(255,255,255,0.03); position: relative;
//         }
//         .bp-upload-zone:hover { border-color: rgba(127,119,221,0.5); background: rgba(83,74,183,0.06); }
//         .bp-upload-zone input { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; }
//         .bp-img-thumb {
//           width: 100%; height: 60px; border-radius: var(--r-md);
//           object-fit: cover; margin-top: 8px; border: 0.5px solid var(--border-sm);
//         }
//         .bp-opacity-row { display: flex; align-items: center; gap: 10px; margin-top: 12px; }
//         .bp-opacity-label { font-size: 10px; color: var(--text-sec); white-space: nowrap; }
//         .bp-opacity-val { font-size: 10px; color: var(--text-ter); min-width: 32px; text-align: right; }

//         /* ── Text readability ──────────────────────── */
//         .text-protect {
//           margin-top: 12px; background: rgba(255,255,255,0.03);
//           border-radius: var(--r-md); border: 0.5px solid var(--border-sm); padding: 11px 12px;
//         }
//         .tp-head {
//           font-size: 9px; font-weight: 500; color: var(--text-sec);
//           letter-spacing: 0.25em; text-transform: uppercase;
//           margin-bottom: 9px; display: flex; align-items: center; gap: 5px;
//         }
//         .tp-row { display: flex; align-items: center; gap: 8px; margin-bottom: 7px; flex-wrap: wrap; }
//         .tp-row:last-child { margin-bottom: 0; }
//         .tp-label { font-size: 10px; color: var(--text-sec); min-width: 86px; }
//         .tp-val { font-size: 10px; color: var(--text-ter); min-width: 28px; text-align: right; }
//         .tp-toggle-group { display: flex; gap: 4px; flex-wrap: wrap; }
//         .tp-opt {
//           padding: 4px 9px; border-radius: 20px; font-size: 9px; font-weight: 500;
//           border: 0.5px solid var(--border-md); background: transparent; color: var(--text-sec);
//           cursor: pointer; font-family: 'DM Mono', monospace; transition: all 0.12s;
//           letter-spacing: 0.05em; min-height: 28px;
//         }
//         .tp-opt:hover { border-color: rgba(175,169,236,0.4); color: #AFA9EC; }
//         .tp-opt.on { background: rgba(83,74,183,0.12); border-color: rgba(175,169,236,0.4); color: #AFA9EC; }

//         input[type=range] { flex: 1; height: 2px; cursor: pointer; accent-color: #534AB7; min-width: 0; }

//         /* ── Font picker ───────────────────────────── */
//         .font-picker-scroll {
//           max-height: 180px;
//           overflow-y: auto;
//           display: flex;
//           flex-direction: column;
//           gap: 4px;
//           padding-right: 4px;
//           scrollbar-width: thin;
//           scrollbar-color: rgba(210,170,90,0.15) transparent;
//         }
//         .font-picker-scroll::-webkit-scrollbar { width: 3px; }
//         .font-picker-scroll::-webkit-scrollbar-track { background: transparent; }
//         .font-picker-scroll::-webkit-scrollbar-thumb { background: rgba(210,170,90,0.2); border-radius: 3px; }

//         .font-option {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 8px 11px;
//           border-radius: var(--r-md);
//           border: 0.5px solid var(--border-sm);
//           background: rgba(255,255,255,0.02);
//           cursor: pointer;
//           transition: all 0.13s;
//           gap: 8px;
//           min-height: 44px;
//         }
//         .font-option:hover { background: rgba(255,255,255,0.04); border-color: rgba(175,169,236,0.25); }
//         .font-option.selected {
//           background: rgba(83,74,183,0.1);
//           border-color: rgba(175,169,236,0.45);
//         }
//         .font-option-sample {
//           font-size: 15px;
//           font-style: italic;
//           color: var(--text-pri);
//           flex: 1;
//           line-height: 1.3;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           white-space: nowrap;
//         }
//         .font-option-name {
//           font-family: 'DM Mono', monospace;
//           font-size: 9px;
//           color: var(--text-ter);
//           letter-spacing: 0.1em;
//           flex-shrink: 0;
//           text-align: right;
//           max-width: 90px;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           white-space: nowrap;
//         }
//         .font-option.selected .font-option-name { color: #AFA9EC; }
//         .font-option-check {
//           width: 14px; height: 14px; border-radius: 50%;
//           background: rgba(83,74,183,0.7); flex-shrink: 0;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 8px; color: #fff;
//         }

//         /* ── Text color palette ────────────────────── */
//         .tc-row {
//           display: flex; align-items: center; gap: 8px;
//           margin-bottom: 8px; flex-wrap: wrap;
//         }
//         .tc-auto-btn {
//           padding: 4px 10px; border-radius: 20px; font-size: 9px; font-weight: 500;
//           border: 0.5px solid var(--border-md); background: transparent; color: var(--text-sec);
//           cursor: pointer; font-family: 'DM Mono', monospace; transition: all 0.12s;
//           letter-spacing: 0.07em; min-height: 28px; white-space: nowrap;
//         }
//         .tc-auto-btn:hover { border-color: rgba(175,169,236,0.4); color: #AFA9EC; }
//         .tc-auto-btn.on { background: rgba(83,74,183,0.12); border-color: rgba(175,169,236,0.4); color: #AFA9EC; }
//         .tc-palette { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
//         .tc-swatch {
//           width: 24px; height: 24px; border-radius: 5px;
//           cursor: pointer; border: 2px solid transparent;
//           transition: all 0.14s; flex-shrink: 0;
//           box-shadow: 0 1px 4px rgba(0,0,0,0.3);
//         }
//         .tc-swatch:hover { transform: scale(1.15); }
//         .tc-swatch.selected { border-color: #AFA9EC; transform: scale(1.18); }

//         /* ── Actions ───────────────────────────────── */
//         .k-actions {
//           display: flex; align-items: center; justify-content: space-between;
//           margin-top: 1rem; gap: 8px; flex-wrap: wrap;
//         }
//         .k-action-left { display: flex; gap: 6px; flex-wrap: wrap; }

//         .k-popup {
//           position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
//           background: rgba(10,10,14,0.96); border: 0.5px solid rgba(120,200,180,0.35);
//           backdrop-filter: blur(20px); color: rgba(120,200,180,0.95);
//           padding: 11px 22px; border-radius: var(--r-md);
//           font-family: 'DM Mono', monospace; font-size: 11px;
//           letter-spacing: 0.15em; text-transform: uppercase; z-index: 200;
//           white-space: nowrap; box-shadow: 0 8px 32px rgba(0,0,0,0.7);
//           max-width: calc(100vw - 2rem);
//         }

//         /* ── Responsive ────────────────────────────── */
//         @media (max-width: 900px) {
//           .k-split {
//             grid-template-columns: 1fr;
//             height: auto;
//             overflow: visible;
//             padding: 0 1rem;
//           }
//           .k-preview-pane {
//             position: relative; top: auto;
//             height: auto; min-height: 260px;
//             padding: 1.25rem 0 0;
//             border-right: none;
//             border-bottom: 0.5px solid var(--border-sm);
//             overflow: visible;
//           }
//           .k-preview-card { min-height: 240px; flex: none; }
//           .k-form-pane {
//             height: auto;
//             overflow-y: visible;
//             overflow-x: hidden;
//             padding: 1.25rem 0 4rem;
//           }
//           .k-field-grid { grid-template-columns: 1fr; gap: 10px; }
//           .k-hamburger { display: flex; }
//           .k-nav-links { display: none; }
//         }

//         @media (max-width: 480px) {
//           .k-nav { height: 50px; }
//           .k-hero { padding: 1.5rem 1rem 1.25rem; }
//           .k-hero-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
//           .k-stats { justify-content: flex-start; }
//           .k-stat { text-align: left; }
//           .k-stat-divider { display: none; }
//           .k-preview-card { min-height: 200px; }
//           .k-card-body { padding: 0.85rem 0.75rem; }
//           .k-moods .k-mood { font-size: 10px; padding: 4px 9px; }
//           .tp-row { flex-direction: column; align-items: flex-start; gap: 5px; }
//           .tp-label { min-width: unset; }
//           .k-actions { flex-direction: column; align-items: stretch; }
//           .k-action-left { width: 100%; }
//           .k-action-left .k-btn-ghost { flex: 1; justify-content: center; }
//           .k-btn-primary { width: 100%; justify-content: center; padding: 12px 14px; }
//         }

//         .k-body-wrap {
//           padding-bottom: max(0px, env(safe-area-inset-bottom));
//         }
//       `}</style>


           
//            {/* ── Author Meta Row ── */}
// <div style={{
//   display: "flex",
//   alignItems: "center",
//   gap: "10px",
//   marginBottom: "12px",
//   padding: "0 4px",
// }}>
//   {/* Profile Avatar */}
//   <div style={{
//     width: "36px",
//     height: "36px",
//     borderRadius: "50%",
//     background: "linear-gradient(135deg, #2d2060, #4a3580)",
//     border: "1.5px solid rgba(210,170,90,0.4)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "14px",
//     color: "rgba(210,170,90,0.95)",
//     fontFamily: "'Playfair Display', serif",
//     fontWeight: "700",
//     fontStyle: "italic",
//     flexShrink: 0,
//     boxShadow: "0 2px 10px rgba(100,60,180,0.3)",
//   }}>
//     A
//   </div>

//   {/* Name + Date */}
//   <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: 0 }}>
//     <span style={{
//       fontFamily: "'Playfair Display', serif",
//       fontSize: "20px",
//       fontWeight: "600",
//       fontStyle: "italic",
//       color: "rgba(240,235,227,0.92)",
//       letterSpacing: "0.02em",
//       lineHeight: 1,
//     }}>
//       Arif Karimi
//     </span>
//     <span style={{
//       fontFamily: "'DM Mono', monospace",
//       fontSize: "9px",
//       color: "rgba(210,170,90,0.5)",
//       letterSpacing: "0.22em",
//       textTransform: "uppercase",
//       lineHeight: 1,
//     }}>
//       {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
//     </span>
//   </div>
// </div>

             
//                <div className="k-preview-card">
//               {/* BG layer */}
//               <div
//                 className="k-prev-bg border"
//                 style={
//                   isImage && imageSrc
//                     ? { backgroundImage: `url(${imageSrc})`, backgroundSize: "cover", backgroundPosition: "center", opacity: bgOpacity / 100 }
//                     : { backgroundColor: bgTab === "custom" ? customColor : selectedColor, opacity: bgOpacity / 100 }
//                 }
//               />


//                 <div className="k-prev-scrim" style={{ background: `rgba(0,0,0,${scrim / 100})` }} />

      


//       {(content || title) && (
//                 <div className="k-prev-content" style={previewWrapStyle}>
//                   {/* <div
//                     className="k-prev-badge"
//                     style={{ background: badgeBg, border: `0.5px solid ${badgeBorder}`, color: autoMainColor }}
//                   >
//                     {previewFormLabel}
//                   </div> */}
//                   {title && (
//                     <div
//                       className="k-prev-title"
//                       style={{
//                         color: resolvedTitleColor,
//                         fontSize: titleFs,
//                         fontFamily: resolvedTitleFamily,
//                       }}
//                     >
//                       {title}
//                     </div>
//                   )}
//                   {content && (
//                     <div>
//                       <div
//                         className="k-prev-text"
//                         style={{
//                           color: resolvedContentColor,
//                           fontSize: contentFs,
//                           fontFamily: resolvedContentFamily,
//                         }}
//                       >
//                         {previewText}{!showFullPreview && previewIsTruncated ? "…" : ""}
//                       </div>
//                       {previewIsTruncated && (
//                         <button
//                           className="k-prev-read-more"
//                           onClick={() => setShowFullPreview(v => !v)}
//                         >
//                           {showFullPreview ? "↑ Show less" : "↓ Read more"}
//                         </button>
//                       )}
//                     </div>
//                   )}
                
//                   <div className="k-prev-author" style={{ color: subColor }}>— Arif Karimi</div>
//                 </div>
                

//       )}





//       </div>

//             {/* ── Action Strip ── */}
//  <div style={{
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-around",
//   padding: "10px 16px",
//   background: "rgba(255,255,255,0.03)",
//   border: "0.5px solid rgba(255,255,255,0.06)",  // ← full border now
//   borderTop: "none",
//   borderRadius: "0 0 14px 14px",
//   width: "400px",
//   height: "30px"
// }}>

//   {/* Like */}
//   <button style={{
//     display: "flex", alignItems: "center", gap: "5px",
//     padding: "5px 10px", borderRadius: "20px", border: "none",
//     background: "transparent", color: "rgba(240,235,227,0.55)",
//     fontSize: "10px", fontFamily: "'DM Mono', monospace",
//     letterSpacing: "0.07em", cursor: "pointer", transition: "all 0.15s",
//   }}
//     onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,140,140,0.9)"; e.currentTarget.style.background = "rgba(226,75,74,0.1)"; }}
//     onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,235,227,0.55)"; e.currentTarget.style.background = "transparent"; }}
//   >
//     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
//     </svg>
//     Like
//   </button>

//   {/* Comment */}
//   <button style={{
//     display: "flex", alignItems: "center", gap: "5px",
//     padding: "5px 10px", borderRadius: "20px", border: "none",
//     background: "transparent", color: "rgba(240,235,227,0.55)",
//     fontSize: "10px", fontFamily: "'DM Mono', monospace",
//     letterSpacing: "0.07em", cursor: "pointer", transition: "all 0.15s",
//   }}
//     onMouseEnter={e => { e.currentTarget.style.color = "#AFA9EC"; e.currentTarget.style.background = "rgba(83,74,183,0.1)"; }}
//     onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,235,227,0.55)"; e.currentTarget.style.background = "transparent"; }}
//   >
//     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
//     </svg>
//     Comment
//   </button>

//   {/* Share */}
//   <button style={{
//     display: "flex", alignItems: "center", gap: "5px",
//     padding: "5px 10px", borderRadius: "20px", border: "none",
//     background: "transparent", color: "rgba(240,235,227,0.55)",
//     fontSize: "10px", fontFamily: "'DM Mono', monospace",
//     letterSpacing: "0.07em", cursor: "pointer", transition: "all 0.15s",
//   }}
//     onMouseEnter={e => { e.currentTarget.style.color = "rgba(120,200,180,0.9)"; e.currentTarget.style.background = "rgba(120,200,180,0.08)"; }}
//     onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,235,227,0.55)"; e.currentTarget.style.background = "transparent"; }}
//   >
//     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
//       <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
//     </svg>
//     Share
//   </button>

//   {/* Save to Playlist */}
//   <button style={{
//     display: "flex", alignItems: "center", gap: "5px",
//     padding: "5px 10px", borderRadius: "20px", border: "none",
//     background: "transparent", color: "rgba(240,235,227,0.55)",
//     fontSize: "10px", fontFamily: "'DM Mono', monospace",
//     letterSpacing: "0.07em", cursor: "pointer", transition: "all 0.15s",
//   }}
//     onMouseEnter={e => { e.currentTarget.style.color = "rgba(210,170,90,0.9)"; e.currentTarget.style.background = "rgba(210,170,90,0.08)"; }}
//     onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,235,227,0.55)"; e.currentTarget.style.background = "transparent"; }}
//   >
//     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//       <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
//       <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/>
//       <line x1="18" y1="15" x2="18" y2="21"/><line x1="15" y1="18" x2="21" y2="18"/>
//     </svg>
//     Save
//   </button>

// </div>

      


                

//       </>
//   )

// }


// export default NewKalam




import { useState, useEffect, useContext } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { HeartIcon } from "@animateicons/react/lucide";
import { MessageCircleIcon } from "@animateicons/react/lucide";
import { ShareIcon } from "@animateicons/react/lucide";
import { BookmarkIcon } from "@animateicons/react/lucide";
import { SocialContext } from "../Contexts/SocketContext";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";

const NewKalam=({
        title,
      content,
      // badgeBg,
      // badgeBorder,
      // autoMainColor,
      // resolvedTitleColor,
      // titleFs,
      // resolvedTitleFamily,
      // resolvedContentColor,
      // contentFs,
      // resolvedContentFamily,
      // subColor,
      // backdrop,
      // resolvedTextColor,
      // activeMoods,
      type,
      // bgTab,
      // customColor,
      // selectedColor,
      // bgOpacity,
      // scrim,
      isImage,
      mUid,
      kalId,
      isLiked2,
      
      customStyles
})=>{

  console.log("checking_isLiked",isLiked2)
  console.log("kalId", kalId)
 

const TITLE_FONTS = [
  { id: "cormorant",       label: "Cormorant Garamond", sample: "یاد کا لمحہ",  family: "'Cormorant Garamond', serif",      googleParam: "Cormorant+Garamond:ital,wght@1,300;1,400;1,600" },
  { id: "playfair",        label: "Playfair Display",   sample: "Shaam-e-Ghazal", family: "'Playfair Display', serif",          googleParam: "Playfair+Display:ital,wght@1,400;1,700" },
  { id: "im_fell",         label: "IM Fell English",    sample: "Dil ki Baat",    family: "'IM Fell English', serif",            googleParam: "IM+Fell+English:ital@1" },
  { id: "sorts_mill",      label: "Sorts Mill Goudy",   sample: "Raat Ka Sitara", family: "'Sorts Mill Goudy', serif",           googleParam: "Sorts+Mill+Goudy:ital@1" },
  { id: "spectral",        label: "Spectral",            sample: "Aashiqui",       family: "'Spectral', serif",                   googleParam: "Spectral:ital,wght@1,300;1,400;1,600" },
  { id: "eb_garamond",     label: "EB Garamond",         sample: "Dard-e-Dil",     family: "'EB Garamond', serif",                googleParam: "EB+Garamond:ital,wght@1,400;1,700" },
  { id: "libre_baskerville",label: "Libre Baskerville",  sample: "Tanhai",         family: "'Libre Baskerville', serif",          googleParam: "Libre+Baskerville:ital@1" },
  { id: "gfs_didot",       label: "GFS Didot",           sample: "Mohabbat",       family: "'GFS Didot', serif",                  googleParam: "GFS+Didot" },
  { id: "dm_serif",        label: "DM Serif Display",    sample: "Khwab",          family: "'DM Serif Display', serif",           googleParam: "DM+Serif+Display:ital@1" },
  { id: "cinzel",          label: "Cinzel",              sample: "KALAM",          family: "'Cinzel', serif",                     googleParam: "Cinzel:wght@400;700" },
  { id: "della_respira",   label: "Della Respira",       sample: "Ruh ki Awaaz",   family: "'Della Respira', serif",              googleParam: "Della+Respira" },
  { id: "alice",           label: "Alice",               sample: "Teri Yaad",      family: "'Alice', serif",                      googleParam: "Alice" },
];

const CONTENT_FONTS = [
  { id: "cormorant_body",  label: "Cormorant Garamond", sample: "Har saans mein teri khushbu hai…", family: "'Cormorant Garamond', serif",   googleParam: "Cormorant+Garamond:ital,wght@1,300;1,400" },
  { id: "eb_garamond_body",label: "EB Garamond",         sample: "Main woh sitara hoon jo doob gaya…", family: "'EB Garamond', serif",        googleParam: "EB+Garamond:ital,wght@1,400" },
  { id: "spectral_body",   label: "Spectral Light",      sample: "Zindagi ek ghazal thi, adhoori rahi…", family: "'Spectral', serif",         googleParam: "Spectral:ital,wght@1,300;1,400" },
  { id: "im_fell_body",    label: "IM Fell English",     sample: "Raaton ko taaron se baatein karta hoon…", family: "'IM Fell English', serif", googleParam: "IM+Fell+English:ital@1" },
  { id: "lora",            label: "Lora",                sample: "Tere bina yeh chaand bhi suna lagta hai…", family: "'Lora', serif",          googleParam: "Lora:ital,wght@1,400;1,500" },
  { id: "merriweather",    label: "Merriweather Light",  sample: "Dil ke dareecha se teri jhalak aati hai…", family: "'Merriweather', serif",  googleParam: "Merriweather:ital,wght@1,300" },
  { id: "crimson",         label: "Crimson Pro",         sample: "Aankhon mein teri sirf teri tasveer hai…", family: "'Crimson Pro', serif",   googleParam: "Crimson+Pro:ital,wght@1,300;1,400" },
  { id: "libre_bask_body", label: "Libre Baskerville",   sample: "Tu hai toh sab kuch hai, tu nahi toh kuch bhi nahi…", family: "'Libre Baskerville', serif", googleParam: "Libre+Baskerville:ital@1" },
  { id: "noto_serif",      label: "Noto Serif",          sample: "یہ عشق نہیں آسان بس اتنا سمجھ لیجے", family: "'Noto Serif', serif",         googleParam: "Noto+Serif:ital,wght@1,300;1,400" },
  { id: "noto_nastaliq",   label: "Noto Nastaliq Urdu",  sample: "دل کے آئینے میں تیری تصویر ہے",         family: "'Noto Nastaliq Urdu', serif", googleParam: "Noto+Nastaliq+Urdu:wght@400;600" },
];

const buildGoogleFontsUrl = () => {
  const all = [...TITLE_FONTS, ...CONTENT_FONTS];
  const seen = new Set();
  const params = all
    .filter(f => { if (seen.has(f.googleParam)) return false; seen.add(f.googleParam); return true; })
    .map(f => `family=${f.googleParam}`)
    .join("&");
  return `https://fonts.googleapis.com/css2?${params}&family=DM+Mono:wght@300;400&display=swap`;
};

  const [showFullPreview, setShowFullPreview] = useState(false);
  const backdrop = customStyles.backdrop
  const resolvedTextColor = customStyles.resolvedTextColor;
  const bgTab = customStyles.bgTab
  const customColor = customStyles.customColor;
  const selectedColor = customStyles.selectedColor;
  const bgOpacity = customStyles.bgOpacity;
  const scrim = customStyles.scrim;
  const [isLiked, setIsLiked] = useState(false);
  const {send} = useContext(SocialContext)

  const Navigate = useNavigate()

  // Checking like state

   

  const previewWrapStyle = (() => {
    if (backdrop === "none") return {
      background: "none",
      padding: "1.5rem",
      backdropFilter: "none",
      border: "none",
      borderRadius: "0"
    };
    if (backdrop === "soft") return {
      background: resolvedTextColor === "light" ? "rgba(0,0,0,0.28)" : "rgba(255,255,255,0.28)",
      padding: "1.75rem 1.5rem",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      border: "none",
      borderRadius: "0",
      minHeight: "100%",
      height: "100%",
    };
    return {
      background: resolvedTextColor === "light" ? "rgba(0,0,0,0.58)" : "rgba(255,255,255,0.88)",
      padding: "1.75rem 1.5rem",
      backdropFilter: "none",
      border: "none",
      borderRadius: "0",
      minHeight: "100%",
      height: "100%",
    };
  })();

  const PREVIEW_LIMIT = 160;
  const previewIsTruncated = content.length > PREVIEW_LIMIT;
  const previewText = showFullPreview ? content : content.slice(0, PREVIEW_LIMIT);

  useEffect(() => {
    axiosInstance
      .get('/api/customKalam')
      .then((Response) => {
        console.log("Response.data[0]", Response.data[0])
      })
  }, [])

  const handleLike =()=>{
    send(JSON.stringify({
      type: "kalam_like",
      payload: {uid: mUid, kalamUid: kalId},
    }))
  }

  useEffect(()=>{

    (isLiked2)?setIsLiked(true):setIsLiked(false)


  }, [])
  

  return (
    <>
      <style>{`
        @import url('${buildGoogleFontsUrl()}');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .k-root {
          --border-sm:  rgba(255,255,255,0.05);
          --border-md:  rgba(255,255,255,0.08);
          --text-pri:   #f0ebe3;
          --text-sec:   rgba(240,235,227,0.55);
          --text-ter:   rgba(240,235,227,0.28);
          --gold:       rgba(210,170,90,0.85);
          --r-md: 6px;
          --r-lg: 10px;

          min-height: 100vh;
          background-color: #07060d;
          background-image:
            radial-gradient(ellipse 70% 55% at 50% -10%, rgba(120,60,180,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 15% 60%,  rgba(160,30,70,0.10)  0%, transparent 50%),
            radial-gradient(ellipse 40% 35% at 90% 80%,  rgba(180,120,20,0.07) 0%, transparent 50%),
            radial-gradient(ellipse 60% 30% at 50% 100%, rgba(80,40,140,0.12)  0%, transparent 60%);
          font-family: 'DM Mono', monospace;
          color: var(--text-pri);
          overflow-x: hidden;
          -webkit-text-size-adjust: 100%;
        }

        .k-nav {
          background: rgba(10,10,14,0.92);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 0.5px solid var(--border-sm);
          padding: 0 max(1.25rem, env(safe-area-inset-left));
          display: flex; align-items: center; justify-content: space-between;
          height: 52px; position: sticky; top: 0; z-index: 50; width: 100%;
        }
        .k-brand { display: flex; align-items: center; gap: 9px; }
        .k-logo {
          width: 30px; height: 30px; flex-shrink: 0;
          background: linear-gradient(135deg, #2d2060, #4a3580);
          border: 0.5px solid rgba(210,170,90,0.3); border-radius: 7px;
          display: flex; align-items: center; justify-content: center;
          color: rgba(210,170,90,0.9); font-size: 14px;
        }
        .k-wordmark {
          font-family: 'Playfair Display', serif;
          font-size: 19px; font-weight: 700; font-style: italic;
          background: linear-gradient(135deg, #e8d5a3 0%, #c9a84c 50%, #f0d890 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .k-nav-links { display: flex; align-items: center; gap: 2px; }
        .k-nl {
          padding: 6px 12px; font-size: 11px; letter-spacing: 0.08em;
          color: var(--text-sec); border-radius: var(--r-md);
          cursor: pointer; border: none; background: transparent;
          transition: background 0.12s, color 0.12s; font-family: 'DM Mono', monospace;
          white-space: nowrap; min-height: 36px;
        }
        .k-nl:hover  { background: rgba(255,255,255,0.04); color: var(--text-pri); }
        .k-nl.active { color: rgba(210,170,90,0.9); background: rgba(180,140,50,0.1); }
        .k-nav-right { display: flex; align-items: center; gap: 8px; }
        .k-avatar {
          width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
          background: rgba(83,74,183,0.18); border: 0.5px solid rgba(210,170,90,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 500; color: rgba(210,170,90,0.8); cursor: pointer;
        }
        .k-hamburger {
          display: none; flex-direction: column; justify-content: center;
          align-items: center; gap: 4px; width: 32px; height: 32px;
          background: transparent; border: none; cursor: pointer; padding: 4px;
        }
        .k-hamburger span { display: block; width: 18px; height: 1.5px; background: rgba(210,170,90,0.7); border-radius: 2px; }
        .k-mobile-menu {
          position: fixed; top: 52px; left: 0; right: 0; z-index: 49;
          background: rgba(10,10,14,0.97); backdrop-filter: blur(20px);
          border-bottom: 0.5px solid rgba(210,170,90,0.1); padding: 0.5rem 0;
          display: flex; flex-direction: column;
        }
        .k-mobile-menu .k-nl {
          padding: 13px 1.25rem; font-size: 12px; border-radius: 0;
          border-bottom: 0.5px solid var(--border-sm); text-align: left;
        }
        .k-mobile-menu .k-nl:last-child { border-bottom: none; }

        .k-btn-ghost {
          background: transparent; border: 0.5px solid var(--border-md);
          border-radius: var(--r-md); padding: 6px 12px; font-size: 11px;
          color: var(--text-sec); cursor: pointer; display: flex; align-items: center;
          gap: 5px; transition: all 0.12s; font-family: 'DM Mono', monospace;
          letter-spacing: 0.07em; text-decoration: none; white-space: nowrap; min-height: 34px;
        }
        .k-btn-ghost:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.18); color: var(--text-pri); }

        .k-btn-primary {
          background: linear-gradient(135deg, #4a3080, #3C3489, #5a3d9a);
          border: 0.5px solid rgba(180,140,80,0.25); border-radius: var(--r-md);
          padding: 8px 18px; font-size: 11px; color: rgba(240,220,160,0.95);
          cursor: pointer; display: flex; align-items: center; gap: 6px;
          font-family: 'DM Mono', monospace; letter-spacing: 0.1em;
          transition: opacity 0.12s, box-shadow 0.12s; text-decoration: none;
          box-shadow: 0 2px 12px rgba(100,60,180,0.25); min-height: 36px;
          white-space: nowrap;
        }
        .k-btn-primary:hover { opacity: 0.88; box-shadow: 0 4px 20px rgba(100,60,180,0.4); }

        .k-hero {
          position: relative; overflow: hidden;
          border-bottom: 0.5px solid rgba(180,140,80,0.15);
          padding: 2rem max(1.25rem, env(safe-area-inset-left)) 1.75rem;
        }
        .k-hero::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 90% 100% at 50% 0%,  rgba(100,50,160,0.22) 0%, transparent 65%),
            radial-gradient(ellipse 60% 80%  at 10% 50%, rgba(150,25,60,0.10)  0%, transparent 55%),
            radial-gradient(ellipse 50% 60%  at 90% 60%, rgba(190,130,20,0.07) 0%, transparent 50%);
        }
        .k-hero::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg,
            transparent, rgba(180,140,80,0) 10%, rgba(200,160,80,0.5) 30%,
            rgba(220,180,100,0.8) 50%, rgba(200,160,80,0.5) 70%, rgba(180,140,80,0) 90%, transparent);
        }
        .k-hero-inner {
          max-width: 1200px; margin: 0 auto; position: relative; z-index: 1;
          display: flex; align-items: flex-end; justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }
        .k-greeting {
          font-size: 9px; color: rgba(210,170,90,0.75);
          letter-spacing: 0.4em; text-transform: uppercase; margin-bottom: 8px;
          display: flex; align-items: center; gap: 10px;
        }
        .k-greeting::before, .k-greeting::after {
          content: ''; display: inline-block; width: 20px; height: 0.5px;
          background: rgba(210,170,90,0.4);
        }
        @keyframes goldShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .k-hero-kalam {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 6vw, 64px);
          font-weight: 700; font-style: italic; line-height: 0.92; letter-spacing: -0.03em;
          background: linear-gradient(135deg, #e8d5a3 0%, #f5e6c0 18%, #c9a84c 35%, #f0d890 50%, #b8860b 65%, #e8d5a3 80%, #f5edd5 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          display: block; background-size: 200% auto;
          animation: goldShimmer 5s linear infinite;
          filter: drop-shadow(0 2px 20px rgba(200,160,60,0.18));
        }
        .k-hero-kalam-urdu {
          font-family: 'Noto Nastaliq Urdu', serif;
          font-size: clamp(14px, 2.5vw, 22px); color: rgba(210,170,90,0.5);
          display: block; margin-top: 3px; direction: rtl;
        }
        .k-hero-ornament { display: flex; align-items: center; gap: 10px; margin: 10px 0 3px; }
        .k-hero-ornament-line { flex: 1; max-width: 55px; height: 0.5px; background: linear-gradient(90deg, rgba(210,170,90,0.5), transparent); }
        .k-hero-ornament-line.right { background: linear-gradient(270deg, rgba(210,170,90,0.5), transparent); }
        .k-hero-ornament-diamond { width: 5px; height: 5px; background: rgba(210,170,90,0.7); transform: rotate(45deg); flex-shrink: 0; }
        .k-hero-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(12px, 2vw, 14px); color: rgba(240,235,220,0.3); font-style: italic;
        }
        .k-stats { display: flex; gap: 1.5rem; flex-shrink: 0; }
        .k-stat { text-align: right; }
        .k-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 3vw, 26px); font-weight: 400; line-height: 1;
          background: linear-gradient(135deg, #e8d5a3, #c9a84c);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .k-stat-label { font-size: 9px; color: rgba(210,170,90,0.4); letter-spacing: 0.25em; text-transform: uppercase; margin-top: 3px; }
        .k-stat-divider { width: 0.5px; align-self: stretch; background: rgba(210,170,90,0.12); margin: 2px 0; }

        .k-split {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          height: calc(100vh - 52px - 130px);
          min-height: 600px;
          padding: 0 max(1rem, env(safe-area-inset-left));
          overflow: hidden;
        }

        .k-preview-pane {
          position: sticky;
          top: 52px;
          height: calc(100vh - 52px);
          display: flex;
          flex-direction: column;
          padding: 1.5rem 1rem 1.5rem 0;
          border-right: 0.5px solid var(--border-sm);
          overflow: hidden;
          flex-shrink: 0;
        }

        .k-preview-label {
          font-size: 9px; font-weight: 500; letter-spacing: 0.35em; text-transform: uppercase;
          color: var(--text-ter); margin-bottom: 10px;
          display: flex; align-items: center; gap: 8px;
        }
        .k-preview-label::after {
          content: ''; flex: 1; height: 0.5px;
          background: linear-gradient(90deg, var(--border-sm), transparent);
        }

        .k-preview-card {
          flex: none;
          border-radius: 14px 14px 0 0;
          overflow: hidden;
          height: 400px;
          width: 400px;
          max-width: 100%;
          border: 0.5px solid var(--border-md);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: inset 0 0 60px rgba(0,0,0,0.3), 0 8px 40px rgba(0,0,0,0.4);
        }

        .k-prev-bg {
          position: absolute; inset: 0;
          transition: background-color 0.35s ease, opacity 0.35s ease;
          border-radius: inherit;
        }

        .k-prev-scrim {
          position: absolute; inset: 0; border-radius: inherit;
          transition: background 0.3s ease;
        }

        .k-prev-content {
          position: relative; z-index: 2;
          width: 100%; padding: 1.5rem 1.25rem 60px;
          text-align: center;
          overflow-wrap: break-word;
          word-break: break-word;
          min-width: 0;
          overflow-y: auto;
          max-height: 100%;
          scrollbar-width: none;
        }
        .k-prev-content::-webkit-scrollbar { display: none; }

        .k-prev-badge {
          display: inline-block; padding: 3px 12px; border-radius: 20px;
          font-size: 9px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase;
          margin-bottom: 14px; transition: all 0.2s;
          font-family: 'DM Mono', monospace;
        }

        .k-prev-title {
          font-weight: 400; line-height: 1.35; margin-bottom: 16px;
          transition: color 0.2s, font-size 0.2s;
          font-style: italic;
        }

        .k-prev-text {
          line-height: 2; font-style: italic;
          margin: 60px;
          white-space: pre-wrap;
          word-break: break-word;
          overflow-wrap: break-word;
          word-wrap: break-word;
          max-width: 100%;
          transition: color 0.2s, font-size 0.2s;
        }

        .k-prev-read-more {
          display: inline-flex; align-items: center; gap: 5px;
          margin-top: 10px;
          padding: 4px 12px; border-radius: 20px;
          font-size: 9px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          font-family: 'DM Mono', monospace;
          border: 0.5px solid rgba(210,170,90,0.3);
          background: rgba(210,170,90,0.07);
          color: rgba(210,170,90,0.8);
          cursor: pointer;
          transition: all 0.15s;
        }
        .k-prev-read-more:hover {
          background: rgba(210,170,90,0.14);
          border-color: rgba(210,170,90,0.55);
          color: rgba(210,170,90,1);
        }

        .k-prev-author {
          font-size: 11px; font-family: 'DM Mono', monospace;
          letter-spacing: 0.1em; margin-top: 60px; margin-left: 70px; opacity: 0.65;
          transition: color 0.2s;
        }

        .k-prev-empty {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 12px;
          z-index: 3;
        }
        .k-prev-empty-glyph {
          font-family: 'Playfair Display', serif;
          font-size: 48px; font-style: italic;
          background: linear-gradient(135deg, #e8d5a3, #c9a84c);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          opacity: 0.25; line-height: 1;
        }
        .k-prev-empty-text {
          font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase;
          color: rgba(255,255,255,0.15);
        }

        .k-preview-status {
          margin-top: 10px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 2px;
        }
        .k-preview-status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(120,200,180,0.7); flex-shrink: 0;
          animation: livePulse 2.5s ease infinite;
        }
        @keyframes livePulse { 0%,100%{opacity:0.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.3)} }
        .k-preview-status-text {
          font-size: 9px; color: rgba(120,200,180,0.55);
          letter-spacing: 0.2em; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px;
        }
        .k-preview-mood-pills { display: flex; gap: 4px; flex-wrap: wrap; justify-content: flex-end; }
        .k-preview-mood-pill {
          padding: 2px 8px; border-radius: 20px; font-size: 9px;
          background: rgba(83,74,183,0.12); border: 0.5px solid rgba(175,169,236,0.3);
          color: #AFA9EC; letter-spacing: 0.1em;
        }

        .k-form-pane {
          overflow-y: auto;
          overflow-x: hidden;
          height: calc(100vh - 52px);
          padding: 1.5rem 0 4rem 1.5rem;
          min-width: 0;
          word-break: break-word;
          overflow-wrap: break-word;
          scrollbar-width: thin;
          scrollbar-color: rgba(210,170,90,0.15) transparent;
        }
        .k-form-pane::-webkit-scrollbar { width: 4px; }
        .k-form-pane::-webkit-scrollbar-track { background: transparent; }
        .k-form-pane::-webkit-scrollbar-thumb { background: rgba(210,170,90,0.15); border-radius: 4px; }

        .k-section-label {
          font-size: 9px; font-weight: 500; color: var(--text-ter);
          letter-spacing: 0.35em; text-transform: uppercase; margin-bottom: 10px;
        }

        .k-card {
          background: rgba(255,255,255,0.025); border: 0.5px solid var(--border-sm);
          border-radius: var(--r-lg); margin-bottom: 12px;
          width: 100%; min-width: 0; overflow: hidden;
          word-break: break-word; overflow-wrap: break-word;
        }
        .k-card-head {
          padding: 0.9rem 1.1rem;
          border-bottom: 0.5px solid var(--border-sm);
          display: flex; align-items: center; justify-content: space-between; gap: 8px;
        }
        .k-card-title { font-size: 13px; font-weight: 500; color: var(--text-pri); }
        .k-card-sub   { font-size: 10px; color: var(--text-ter); margin-top: 2px; }
        .k-card-body  { padding: 1.1rem; }

        .k-field-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 1.1rem;
        }
        .k-field { display: flex; flex-direction: column; gap: 6px; }
        .k-label {
          font-size: 9px; font-weight: 500; color: var(--text-sec);
          letter-spacing: 0.25em; text-transform: uppercase;
        }
        .k-label-urdu { font-size: 10px; color: var(--text-ter); letter-spacing: 0; text-transform: none; font-weight: 400; }

        .k-select, .k-input {
          height: 40px; border-radius: var(--r-md);
          border: 0.5px solid var(--border-md);
          background: rgba(255,255,255,0.04); color: var(--text-pri);
          font-size: 16px; padding: 0 12px; outline: none;
          transition: border 0.15s, box-shadow 0.15s;
          font-family: 'DM Mono', monospace; width: 100%; appearance: none;
        }
        .k-select option { background: #0f0f12; color: #f0ebe3; }
        .k-select:focus, .k-input:focus {
          border-color: rgba(127,119,221,0.6);
          box-shadow: 0 0 0 3px rgba(127,119,221,0.08);
        }
        .k-input::placeholder { color: var(--text-ter); font-style: italic; font-size: 13px; }

        .k-sep { height: 0.5px; background: var(--border-sm); margin: 0 0 1.1rem; }

        .k-mood-label {
          font-size: 9px; font-weight: 500; color: var(--text-sec);
          letter-spacing: 0.25em; text-transform: uppercase; margin-bottom: 8px;
        }
        .k-moods { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 1.1rem; }
        .k-mood {
          padding: 5px 11px; border-radius: 20px; font-size: 10px;
          border: 0.5px solid var(--border-md); color: var(--text-sec);
          background: transparent; cursor: pointer;
          transition: all 0.12s; font-family: 'DM Mono', monospace; min-height: 32px;
          display: flex; align-items: center;
        }
        .k-mood:hover { border-color: rgba(175,169,236,0.5); color: #AFA9EC; }
        .k-mood.on { background: rgba(83,74,183,0.12); border-color: rgba(175,169,236,0.5); color: #AFA9EC; font-weight: 500; }

        .k-textarea-wrap { position: relative; margin-bottom: 1.1rem; }
        .k-textarea {
          width: 100%; min-height: 140px;
          border: 0.5px solid var(--border-md); border-radius: var(--r-md);
          background: rgba(255,255,255,0.04); color: var(--text-pri);
          font-size: 16px; font-family: 'Cormorant Garamond', serif;
          line-height: 1.85; padding: 14px 14px 50px; resize: vertical; outline: none;
          transition: border 0.15s, box-shadow 0.15s;
        }
        .k-textarea:focus { border-color: rgba(127,119,221,0.6); box-shadow: 0 0 0 3px rgba(127,119,221,0.08); }
        .k-textarea::placeholder { color: var(--text-ter); font-style: italic; font-size: 14px; }
        .k-toolbar {
          position: absolute; bottom: 0; left: 0; right: 0; padding: 7px 10px;
          display: flex; align-items: center; justify-content: space-between;
          border-top: 0.5px solid var(--border-sm);
        }
        .k-mic {
          display: flex; align-items: center; gap: 6px;
          padding: 4px 10px; border-radius: 20px;
          border: 0.5px solid var(--border-md); background: rgba(255,255,255,0.03);
          color: var(--text-sec); font-size: 10px; cursor: pointer;
          transition: all 0.15s; font-family: 'DM Mono', monospace;
          letter-spacing: 0.05em; min-height: 28px;
        }
        .k-mic:hover { border-color: rgba(175,169,236,0.4); color: #AFA9EC; background: rgba(83,74,183,0.07); }
        .k-mic.rec   { border-color: rgba(226,75,74,0.5); background: rgba(226,75,74,0.07); color: rgba(255,140,140,0.9); }
        .k-mic-dot { width: 6px; height: 6px; border-radius: 50%; background: #E24B4A; display: none; flex-shrink: 0; }
        .k-mic.rec .k-mic-dot { display: block; animation: blink 1s ease infinite; }
        @keyframes blink { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(0.6)} }
        .k-charcount { font-size: 10px; color: var(--text-ter); }

        .k-audio-row {
          margin-top: 8px; padding: 9px 12px;
          background: rgba(255,255,255,0.02); border: 0.5px solid var(--border-sm);
          border-radius: var(--r-md); display: flex; align-items: center; gap: 10px;
        }
        .k-audio-row audio { flex: 1; height: 26px; filter: invert(0.8) hue-rotate(160deg); min-width: 0; }

        .bp-tabs { display: flex; gap: 4px; margin-bottom: 12px; flex-wrap: wrap; }
        .bp-tab {
          padding: 5px 10px; border-radius: var(--r-md); font-size: 10px; font-weight: 500;
          border: 0.5px solid transparent; color: var(--text-sec);
          cursor: pointer; background: transparent; font-family: 'DM Mono', monospace;
          transition: all 0.12s; letter-spacing: 0.05em; min-height: 30px;
        }
        .bp-tab:hover { background: rgba(255,255,255,0.04); }
        .bp-tab.on { background: rgba(83,74,183,0.12); color: #AFA9EC; border-color: rgba(175,169,236,0.35); }
        .bp-colors { display: flex; flex-wrap: wrap; gap: 7px; }
        .bp-swatch {
          width: 30px; height: 30px; border-radius: var(--r-md);
          cursor: pointer; border: 2px solid transparent; transition: all 0.15s; flex-shrink: 0;
        }
        .bp-swatch:hover { transform: scale(1.12); }
        .bp-swatch.selected { border-color: #AFA9EC; transform: scale(1.15); }
        .bp-custom-row { display: flex; align-items: center; gap: 12px; }
        .bp-color-thumb {
          width: 44px; height: 44px; border-radius: var(--r-md);
          border: 0.5px solid var(--border-md); cursor: pointer;
          position: relative; overflow: hidden; flex-shrink: 0;
        }
        .bp-color-thumb input[type=color] {
          position: absolute; inset: -4px; opacity: 0; cursor: pointer;
          width: calc(100% + 8px); height: calc(100% + 8px);
        }
        .bp-upload-zone {
          border: 0.5px dashed var(--border-md); border-radius: var(--r-md);
          padding: 1rem; text-align: center; cursor: pointer;
          transition: all 0.15s; background: rgba(255,255,255,0.03); position: relative;
        }
        .bp-upload-zone:hover { border-color: rgba(127,119,221,0.5); background: rgba(83,74,183,0.06); }
        .bp-upload-zone input { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; }
        .bp-img-thumb {
          width: 100%; height: 60px; border-radius: var(--r-md);
          object-fit: cover; margin-top: 8px; border: 0.5px solid var(--border-sm);
        }
        .bp-opacity-row { display: flex; align-items: center; gap: 10px; margin-top: 12px; }
        .bp-opacity-label { font-size: 10px; color: var(--text-sec); white-space: nowrap; }
        .bp-opacity-val { font-size: 10px; color: var(--text-ter); min-width: 32px; text-align: right; }

        .text-protect {
          margin-top: 12px; background: rgba(255,255,255,0.03);
          border-radius: var(--r-md); border: 0.5px solid var(--border-sm); padding: 11px 12px;
        }
        .tp-head {
          font-size: 9px; font-weight: 500; color: var(--text-sec);
          letter-spacing: 0.25em; text-transform: uppercase;
          margin-bottom: 9px; display: flex; align-items: center; gap: 5px;
        }
        .tp-row { display: flex; align-items: center; gap: 8px; margin-bottom: 7px; flex-wrap: wrap; }
        .tp-row:last-child { margin-bottom: 0; }
        .tp-label { font-size: 10px; color: var(--text-sec); min-width: 86px; }
        .tp-val { font-size: 10px; color: var(--text-ter); min-width: 28px; text-align: right; }
        .tp-toggle-group { display: flex; gap: 4px; flex-wrap: wrap; }
        .tp-opt {
          padding: 4px 9px; border-radius: 20px; font-size: 9px; font-weight: 500;
          border: 0.5px solid var(--border-md); background: transparent; color: var(--text-sec);
          cursor: pointer; font-family: 'DM Mono', monospace; transition: all 0.12s;
          letter-spacing: 0.05em; min-height: 28px;
        }
        .tp-opt:hover { border-color: rgba(175,169,236,0.4); color: #AFA9EC; }
        .tp-opt.on { background: rgba(83,74,183,0.12); border-color: rgba(175,169,236,0.4); color: #AFA9EC; }

        input[type=range] { flex: 1; height: 2px; cursor: pointer; accent-color: #534AB7; min-width: 0; }

        .font-picker-scroll {
          max-height: 180px; overflow-y: auto; display: flex; flex-direction: column;
          gap: 4px; padding-right: 4px; scrollbar-width: thin;
          scrollbar-color: rgba(210,170,90,0.15) transparent;
        }
        .font-picker-scroll::-webkit-scrollbar { width: 3px; }
        .font-picker-scroll::-webkit-scrollbar-track { background: transparent; }
        .font-picker-scroll::-webkit-scrollbar-thumb { background: rgba(210,170,90,0.2); border-radius: 3px; }

        .font-option {
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 11px; border-radius: var(--r-md); border: 0.5px solid var(--border-sm);
          background: rgba(255,255,255,0.02); cursor: pointer; transition: all 0.13s;
          gap: 8px; min-height: 44px;
        }
        .font-option:hover { background: rgba(255,255,255,0.04); border-color: rgba(175,169,236,0.25); }
        .font-option.selected { background: rgba(83,74,183,0.1); border-color: rgba(175,169,236,0.45); }
        .font-option-sample {
          font-size: 15px; font-style: italic; color: var(--text-pri); flex: 1;
          line-height: 1.3; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .font-option-name {
          font-family: 'DM Mono', monospace; font-size: 9px; color: var(--text-ter);
          letter-spacing: 0.1em; flex-shrink: 0; text-align: right;
          max-width: 90px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .font-option.selected .font-option-name { color: #AFA9EC; }
        .font-option-check {
          width: 14px; height: 14px; border-radius: 50%;
          background: rgba(83,74,183,0.7); flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 8px; color: #fff;
        }

        .tc-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; flex-wrap: wrap; }
        .tc-auto-btn {
          padding: 4px 10px; border-radius: 20px; font-size: 9px; font-weight: 500;
          border: 0.5px solid var(--border-md); background: transparent; color: var(--text-sec);
          cursor: pointer; font-family: 'DM Mono', monospace; transition: all 0.12s;
          letter-spacing: 0.07em; min-height: 28px; white-space: nowrap;
        }
        .tc-auto-btn:hover { border-color: rgba(175,169,236,0.4); color: #AFA9EC; }
        .tc-auto-btn.on { background: rgba(83,74,183,0.12); border-color: rgba(175,169,236,0.4); color: #AFA9EC; }
        .tc-palette { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
        .tc-swatch {
          width: 24px; height: 24px; border-radius: 5px;
          cursor: pointer; border: 2px solid transparent;
          transition: all 0.14s; flex-shrink: 0; box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }
        .tc-swatch:hover { transform: scale(1.15); }
        .tc-swatch.selected { border-color: #AFA9EC; transform: scale(1.18); }

        .k-actions {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 1rem; gap: 8px; flex-wrap: wrap;
        }
        .k-action-left { display: flex; gap: 6px; flex-wrap: wrap; }

        .k-popup {
          position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
          background: rgba(10,10,14,0.96); border: 0.5px solid rgba(120,200,180,0.35);
          backdrop-filter: blur(20px); color: rgba(120,200,180,0.95);
          padding: 11px 22px; border-radius: var(--r-md);
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.15em; text-transform: uppercase; z-index: 200;
          white-space: nowrap; box-shadow: 0 8px 32px rgba(0,0,0,0.7);
          max-width: calc(100vw - 2rem);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .k-split {
            grid-template-columns: 1fr;
            height: auto;
            overflow: visible;
            padding: 0 1rem;
          }
          .k-preview-pane {
            position: relative; top: auto;
            height: auto; min-height: unset;
            padding: 1.25rem 0 0;
            border-right: none;
            border-bottom: 0.5px solid var(--border-sm);
            overflow: visible;
          }
          .k-preview-card {
            width: 100%;
            height: 340px;
          }
          .k-form-pane {
            height: auto; overflow-y: visible; overflow-x: hidden;
            padding: 1.25rem 0 4rem;
          }
          .k-field-grid { grid-template-columns: 1fr; gap: 10px; }
          .k-hamburger { display: flex; }
          .k-nav-links { display: none; }
        }

        @media (max-width: 480px) {
          .k-nav { height: 50px; }
          .k-hero { padding: 1.5rem 1rem 1.25rem; }
          .k-hero-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
          .k-stats { justify-content: flex-start; }
          .k-stat { text-align: left; }
          .k-stat-divider { display: none; }
          .k-preview-card {
            width: 100%;
            height: 300px;
          }
          .k-card-body { padding: 0.85rem 0.75rem; }
          .k-moods .k-mood { font-size: 10px; padding: 4px 9px; }
          .tp-row { flex-direction: column; align-items: flex-start; gap: 5px; }
          .tp-label { min-width: unset; }
          .k-actions { flex-direction: column; align-items: stretch; }
          .k-action-left { width: 100%; }
          .k-action-left .k-btn-ghost { flex: 1; justify-content: center; }
          .k-btn-primary { width: 100%; justify-content: center; padding: 12px 14px; }
          .k-prev-text { margin: 20px; }
          .k-prev-author { margin-left: 20px; }
        }

        .k-body-wrap {
          padding-bottom: max(0px, env(safe-area-inset-bottom));
        }
      `}</style>

      {/* ── Author Meta Row ── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "12px",
        padding: "0 4px",
        width: "100%",
        maxWidth: "400px",
      }}>
        <div style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #2d2060, #4a3580)",
          border: "1.5px solid rgba(210,170,90,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          color: "rgba(210,170,90,0.95)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: "700",
          fontStyle: "italic",
          flexShrink: 0,
          boxShadow: "0 2px 10px rgba(100,60,180,0.3)",
        }}>
          A
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: 0 }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "13px",
            fontWeight: "600",
            fontStyle: "italic",
            color: "rgba(240,235,227,0.92)",
            letterSpacing: "0.02em",
            lineHeight: 1,
          }}>
            Arif Karimi
          </span>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "9px",
            color: "rgba(210,170,90,0.5)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            lineHeight: 1,
          }}>
            {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
          </span>
        </div>
      </div>

      {/* ── Preview Card ── */}
      <div className="k-preview-card">

        {/* BG layer */}
        <div
          className="k-prev-bg border"
          style={
            isImage && imageSrc
              ? { backgroundImage: `url(${imageSrc})`, backgroundSize: "cover", backgroundPosition: "center", opacity: bgOpacity / 100 }
              : { backgroundColor: bgTab === "custom" ? customColor : selectedColor, opacity: bgOpacity / 100 }
          }
        />

        <div className="k-prev-scrim" style={{ background: `rgba(0,0,0,${scrim / 100})` }} />

        {(content || title) && (
          <div className="k-prev-content" style={previewWrapStyle}>
            {title && (
              <div
                className="k-prev-title"
                style={{
                  color: customStyles.resolvedTitleColor,
                  fontSize: customStyles.titleFs,
                  fontFamily: customStyles.resolvedTitleFamily,
                }}
              >
                {title}
              </div>
            )}
            {content && (
              <div>
                <div
                  className="k-prev-text"
                  style={{
                    color: customStyles.resolvedContentColor,
                    fontSize: customStyles.contentFs,
                    fontFamily: customStyles.resolvedContentFamily,
                  }}
                >
                  {previewText}{!showFullPreview && previewIsTruncated ? "…" : ""}
                </div>
                {previewIsTruncated && (
                  <button
                    className="k-prev-read-more"
                    onClick={() => setShowFullPreview(v => !v)}
                  >
                    {showFullPreview ? "↑ Show less" : "↓ Read more"}
                  </button>
                )}
              </div>
            )}
            <div className="k-prev-author" style={{ color: customStyles.subColor }}>— Arif Karimi</div>
          </div>
        )}

      </div>

      {/* ── Action Strip ── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "10px 16px",
        background: "rgba(255,255,255,0.03)",
        border: "0.5px solid rgba(255,255,255,0.06)",
        borderTop: "none",
        borderRadius: "0 0 14px 14px",
        width: "100%",
        maxWidth: "400px",
        boxSizing: "border-box",
        height: "15px"
      }}>

        {/* Like */}
        <button onClick={()=>{handleLike(); (isLiked)?setIsLiked(false):setIsLiked(true)}} style={{
          display: "flex", alignItems: "center", gap: "5px",
          padding: "5px 10px", borderRadius: "20px", border: "none",
          background: "transparent", color: "rgba(240,235,227,0.55)",
          fontSize: "10px", fontFamily: "'DM Mono', monospace",
          letterSpacing: "0.07em", cursor: "pointer", transition: "all 0.15s",
          minHeight: "44px",
        }}
          onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,140,140,0.9)"; e.currentTarget.style.background = "rgba(226,75,74,0.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,235,227,0.55)"; e.currentTarget.style.background = "transparent"; }}
        >
          
         <HeartIcon
         
  size={15}
  duration={1}
  color={(isLiked)?"#771818":"#ffffff"}
/>
          Like
        </button>

        {/* Comment */}
        <button onClick={() => Navigate(`/comment?kalamId=${kalId}`)} style={{
          display: "flex", alignItems: "center", gap: "5px",
          padding: "5px 10px", borderRadius: "20px", border: "none",
          background: "transparent", color: "rgba(240,235,227,0.55)",
          fontSize: "10px", fontFamily: "'DM Mono', monospace",
          letterSpacing: "0.07em", cursor: "pointer", transition: "all 0.15s",
          minHeight: "44px",
        }}
          onMouseEnter={e => { e.currentTarget.style.color = "#AFA9EC"; e.currentTarget.style.background = "rgba(83,74,183,0.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,235,227,0.55)"; e.currentTarget.style.background = "transparent"; }}
        >
          <MessageCircleIcon
            size={15}
            duration={1}
            color="#ffffff"
          />
          Comment
        </button>

        {/* Share */}
        <button style={{
          display: "flex", alignItems: "center", gap: "5px",
          padding: "5px 10px", borderRadius: "20px", border: "none",
          background: "transparent", color: "rgba(240,235,227,0.55)",
          fontSize: "10px", fontFamily: "'DM Mono', monospace",
          letterSpacing: "0.07em", cursor: "pointer", transition: "all 0.15s",
          minHeight: "44px",
        }}
          onMouseEnter={e => { e.currentTarget.style.color = "rgba(120,200,180,0.9)"; e.currentTarget.style.background = "rgba(120,200,180,0.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,235,227,0.55)"; e.currentTarget.style.background = "transparent"; }}
        >
          <ShareIcon
            size={15}
            duration={1}
            color="#ffffff"
          />
          Share
        </button>

        {/* Save */}
        <button style={{
          display: "flex", alignItems: "center", gap: "5px",
          padding: "5px 10px", borderRadius: "20px", border: "none",
          background: "transparent", color: "rgba(240,235,227,0.55)",
          fontSize: "10px", fontFamily: "'DM Mono', monospace",
          letterSpacing: "0.07em", cursor: "pointer", transition: "all 0.15s",
          minHeight: "44px",
        }}
          onMouseEnter={e => { e.currentTarget.style.color = "rgba(210,170,90,0.9)"; e.currentTarget.style.background = "rgba(210,170,90,0.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,235,227,0.55)"; e.currentTarget.style.background = "transparent"; }}
        >
          <BookmarkIcon
            size={15}
            duration={1}
            color="#ffffff"
          />
          Save
        </button>

      </div>
    </>
  )
}

export default NewKalam