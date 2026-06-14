// import { useState, useEffect } from "react";
// import axiosInstance from "@/Apis/axiosInstance";
// import NewKalam from "./components/NewKalam";

// const KalamOfTheWeek=()=>{

//     const [customStyles, setCustomStyles] = useState("")
//     const [response, setResponse] = useState("")
//     const [dataArrived, setDataArrived] = useState(false);

//     useEffect(()=>{

//          axiosInstance
//     .get('/api/kalamOfTheWeek')
//     .then((response)=>{
//         console.log("kalam_of_the_week_response", response.data);
//         setResponse(response.data)
//         setCustomStyles(response.data[0].Kalam.customStyles)
//         setDataArrived(true)
//     }).catch((error)=>{
//         console.error("Error_while_fetching_kalam_of_the_week", error);
//     })


//     }, [])
   



//     return(
//         <>
//         <div className="h-full w-full">
//             <div>
                
//         <h1 className="text-7xl">Kalam of The Week</h1>
//             </div>

//             <div className="flex w-full">

//                 <div className="items-center justify-center w-full">



       
//         {dataArrived && <NewKalam key={response[0]?.Kalam._id} customStyles={customStyles} title={response[0]?.Kalam?.name} content={response[0]?.Kalam?.content} isImage={false} mUid={response[0]?.Kalam?.createdBy} kalId={response[0]?.Kalam?._id} isLiked2={false}/>
// }
// </div>
// </div>

//         </div>
//         </>
//     )
// }

// export default KalamOfTheWeek;


//------------------------------------------------------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axiosInstance from "@/Apis/axiosInstance";
// import NewKalam from "./components/NewKalam";

// const KalamOfTheWeek = () => {
//   const [customStyles, setCustomStyles] = useState("");
//   const [response, setResponse] = useState([]);
//   const [dataArrived, setDataArrived] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axiosInstance
//       .get("/api/kalamOfTheWeek")
//       .then((res) => {
//         setResponse(res.data);
//         setCustomStyles(res.data[0].Kalam.customStyles);
//         setDataArrived(true);
//       })
//       .catch((err) => console.error("Error_while_fetching_kalam_of_the_week", err));
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#0a0a10]" style={{ fontFamily: "system-ui, sans-serif" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&display=swap');
//         @keyframes kotw-fu {
//           from { opacity: 0; transform: translateY(12px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .kotw-a1 { animation: kotw-fu .45s ease both; }
//         .kotw-a2 { animation: kotw-fu .45s .09s ease both; }
//         .kotw-a3 { animation: kotw-fu .45s .18s ease both; }
//         .kotw-a4 { animation: kotw-fu .45s .27s ease both; }
//         .kotw-tab-btn { transition: color .2s, border-color .2s; }
//         .kotw-tab-btn:hover { color: rgba(167,139,250,0.7) !important; }
//         .kotw-prev-card:hover { background: rgba(255,255,255,0.055) !important; border-color: rgba(124,77,255,0.2) !important; }
//       `}</style>

//       <div className="max-w-[1100px] mx-auto">

//         {/* ── Top Nav ── */}
//         <nav
//           className="flex items-center justify-between px-10 py-4 sticky top-0 z-30"
//           style={{
//             background: "rgba(10,10,16,0.98)",
//             borderBottom: "1px solid rgba(255,255,255,0.06)",
//             backdropFilter: "blur(12px)",
//           }}
//         >
//           {/* Logo */}
//           <div className="flex items-center gap-2.5">
//             <div
//               className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
//               style={{ background: "linear-gradient(135deg,#7c4dff,#c16dff)" }}
//             >
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
//                 <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
//               </svg>
//             </div>
//             <span style={{ fontSize: 15, fontWeight: 600, color: "#e2d9ff", letterSpacing: "-0.3px" }}>Kalams</span>
//           </div>

//           {/* Search */}
//           <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", width: 240 }}>
//             <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round">
//               <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
//             </svg>
//             <input
//               placeholder="Search kalams..."
//               className="bg-transparent outline-none w-full"
//               style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", border: "none" }}
//             />
//           </div>

//           {/* Right side */}
//           <div className="flex items-center gap-4">
//             <Link to="/explore" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Explore</Link>
//             <Link to="/artists" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Artists</Link>
//             <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.08)" }} />
//             <div
//               className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white cursor-pointer"
//               style={{ background: "linear-gradient(135deg,#7c4dff,#c16dff)", border: "2px solid rgba(255,255,255,0.1)" }}
//             >
//               A
//             </div>
//             <Link
//               to="/kalam"
//               className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold"
//               style={{ background: "linear-gradient(135deg,#7c4dff,#9c6dff)", boxShadow: "0 2px 10px rgba(124,77,255,0.35)" }}
//             >
//               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
//                 <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
//               </svg>
//               Publish
//             </Link>
//           </div>
//         </nav>

//         {/* ── Hero Header ── */}
//         <div className="relative overflow-hidden px-10 pt-16 pb-12" style={{ background: "#0a0a10" }}>
//           {/* Glow blobs */}
//           <div style={{ position: "absolute", top: -80, left: -60, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(109,40,217,0.18) 0%,transparent 65%)", pointerEvents: "none" }} />
//           <div style={{ position: "absolute", top: 20, right: -40, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,158,11,0.07) 0%,transparent 65%)", pointerEvents: "none" }} />

//           <div className="max-w-[680px] relative">
//             {/* Weekly pick label */}
//             <div className="kotw-a1 flex items-center gap-2 mb-5">
//               <div style={{ width: 3, height: 16, borderRadius: 2, background: "linear-gradient(180deg,#f59e0b,#d97706)", flexShrink: 0 }} />
//               <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,158,11,0.85)" }}>Weekly Pick</span>
//               <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.08)", margin: "0 4px" }} />
//               <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 99, background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
//                 <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#f59e0b", display: "inline-block", flexShrink: 0, boxShadow: "0 0 5px rgba(245,158,11,0.8)" }} />
//                 <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(251,191,36,0.9)", letterSpacing: "0.05em" }}>Featured</span>
//               </div>
//             </div>

//             {/* Title */}
//             <h1
//               className="kotw-a2"
//               style={{
//                 fontFamily: "'Cormorant Garamond', Georgia, serif",
//                 fontSize: "clamp(52px, 6vw, 80px)",
//                 fontWeight: 300, fontStyle: "italic",
//                 lineHeight: 0.92, marginBottom: 24, letterSpacing: "-1px",
//               }}
//             >
//               <span style={{ color: "#b8aee0", display: "block" }}>Kalam of</span>
//               <span style={{ fontWeight: 600, fontStyle: "normal", color: "#fff", display: "block", position: "relative", width: "fit-content" }}>
//                 The Week
//                 <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#f59e0b,#fbbf24,transparent)", borderRadius: 2 }} />
//               </span>
//             </h1>

//             {/* Subtitle + stats */}
//             <div className="kotw-a3 flex items-center gap-6">
//               <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, maxWidth: 400, margin: 0 }}>
//                 Handpicked by our curators — one transcendent kalam every week, celebrating the soul of Urdu poetry.
//               </p>
//               <div className="flex gap-5 flex-shrink-0 pl-6" style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}>
//                 <div>
//                   <div style={{ fontSize: 20, fontWeight: 700, color: "#e2d9ff", letterSpacing: "-0.5px" }}>Week 24</div>
//                   <div style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>Edition</div>
//                 </div>
//                 <div>
//                   <div style={{ fontSize: 20, fontWeight: 700, color: "#e2d9ff", letterSpacing: "-0.5px" }}>2.4k</div>
//                   <div style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>Listeners</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Tab Nav (below header) ── */}
//         <div
//           className="kotw-a4 flex items-center gap-1 px-10"
//           style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#0a0a10" }}
//         >
//           {[
//             { id: "kalams", label: "Kalams",            path: "/social" },
//             { id: "kotw",   label: "Kalam of The Week", path: null },
//             { id: "albums", label: "Albums",             path: "/albumsLive" },
//           ].map(({ id, label, path }) => (
//             <button
//               key={id}
//               onClick={() => path && navigate(path)}
//               className="kotw-tab-btn"
//               style={{
//                 padding: "14px 20px",
//                 fontSize: 13,
//                 fontWeight: id === "kotw" ? 600 : 500,
//                 border: "none",
//                 background: "transparent",
//                 color: id === "kotw" ? "#a78bfa" : "rgba(255,255,255,0.4)",
//                 cursor: id === "kotw" ? "default" : "pointer",
//                 borderBottom: id === "kotw" ? "2px solid #7c4dff" : "2px solid transparent",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               {label}
//             </button>
//           ))}
//         </div>

//         {/* ── Content ── */}
//         <div className="px-10 py-10 grid gap-8" style={{ gridTemplateColumns: "1fr 320px", alignItems: "start" }}>

//           {/* Main Kalam */}
//           <div>
//             {dataArrived && (
//               <NewKalam
//                 key={response[0]?.Kalam._id}
//                 customStyles={customStyles}
//                 title={response[0]?.Kalam?.name}
//                 content={response[0]?.Kalam?.content}
//                 isImage={false}
//                 mUid={response[0]?.Kalam?.createdBy}
//                 kalId={response[0]?.Kalam?._id}
//                 isLiked2={false}
//               />
//             )}
//           </div>

//           {/* Sidebar — Previous Picks */}
//           <div className="flex flex-col gap-3">
//             <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", paddingLeft: 4 }}>
//               Previous Picks
//             </div>
//             {/* Swap these out with real previous KOTW data if available */}
//             {[
//               { title: "Tere Bin Nahin Lagda", artist: "Rahat Fateh Ali Khan", week: 23, color: "#1a3050" },
//               { title: "Aaj Rang Hai",          artist: "Abida Parveen",        week: 22, color: "#3d1050" },
//               { title: "Man Kunto Maula",        artist: "Various Artists",      week: 21, color: "#1a4020" },
//             ].map((item) => (
//               <div
//                 key={item.week}
//                 className="kotw-prev-card flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all"
//                 style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
//               >
//                 <div style={{ width: 38, height: 38, borderRadius: 10, background: `linear-gradient(135deg,#0f1020,${item.color})`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(167,139,250,0.7)" strokeWidth="1.8" strokeLinecap="round">
//                     <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
//                   </svg>
//                 </div>
//                 <div style={{ flex: 1, minWidth: 0 }}>
//                   <div style={{ fontSize: 13, fontWeight: 600, color: "#c4bde8", marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.title}</div>
//                   <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{item.artist} · Week {item.week}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default KalamOfTheWeek;

//----------------------------------------------------------------------------------------------------------------------------->


// import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axiosInstance from "@/Apis/axiosInstance";
// import NewKalam from "./components/NewKalam";
// import SidebarExample from "./components/Sidebar";

// const KalamOfTheWeek = () => {
//   const [customStyles, setCustomStyles] = useState("");
//   const [response, setResponse] = useState([]);
//   const [dataArrived, setDataArrived] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axiosInstance
//       .get("/api/kalamOfTheWeek")
//       .then((res) => {
//         console.log("kalam_of_the_week_response", res.data);
//         setResponse(res.data);
//         setCustomStyles(res.data[0].Kalam.customStyles);
//         setDataArrived(true);
//       })
//       .catch((err) => console.error("Error_while_fetching_kalam_of_the_week", err));
//   }, []);

//   const handleTabClick = (tab) => {
//     if (tab === "kalams") navigate("/social");
//     if (tab === "albums") navigate("/albumsLive");
//     // "kotw" does nothing — already here
//   };

//   return (
//     <div
//       className="relative overflow-auto"
//       style={{ height: "100svh", WebkitOverflowScrolling: "touch", background: "#0a0a10" }}
//     >
//       <SidebarExample isOpen={isOpen} onClose={() => setIsOpen(false)} />

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&display=swap');
//         @keyframes kotw-fu {
//           from { opacity: 0; transform: translateY(12px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .k-a1 { animation: kotw-fu .45s ease both; }
//         .k-a2 { animation: kotw-fu .45s .09s ease both; }
//         .k-a3 { animation: kotw-fu .45s .18s ease both; }
//         .k-a4 { animation: kotw-fu .45s .27s ease both; }
//         .k-tab-btn { transition: color .2s, border-color .2s; }
//         .k-tab-btn:hover:not([data-active="true"]) { color: rgba(167,139,250,0.7) !important; }
//         .k-prev:hover { background: rgba(255,255,255,0.055) !important; border-color: rgba(124,77,255,0.2) !important; }
//       `}</style>

//       <div style={{ paddingBottom: "max(80px, env(safe-area-inset-bottom))" }}>
//         <div className="max-w-[1600px] mx-auto">

//           {/* ── Top Nav (identical structure to Social.jsx) ── */}
//           <nav
//             className="flex items-center justify-between px-10 py-4 sticky top-0 z-30"
//             style={{
//               background: "rgba(10,10,16,0.98)",
//               borderBottom: "1px solid rgba(255,255,255,0.06)",
//               backdropFilter: "blur(12px)",
//             }}
//           >
//             {/* Left: sidebar + logo */}
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setIsOpen(true)}
//                 className="flex items-center justify-center w-9 h-9 flex-shrink-0 transition-all duration-150 active:scale-95"
//                 style={{
//                   background: "rgba(255,255,255,0.05)",
//                   border: "1px solid rgba(255,255,255,0.09)",
//                   borderRadius: 10,
//                   color: "#9090b0",
//                 }}
//                 aria-label="Open sidebar"
//               >
//                 <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
//                   <line x1="3" y1="6" x2="21" y2="6" />
//                   <line x1="3" y1="12" x2="15" y2="12" />
//                   <line x1="3" y1="18" x2="18" y2="18" />
//                 </svg>
//               </button>
//               <div
//                 className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
//                 style={{ background: "linear-gradient(135deg,#7c4dff,#c16dff)" }}
//               >
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
//                   <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
//                 </svg>
//               </div>
//               <span style={{ fontSize: 15, fontWeight: 600, color: "#e2d9ff", letterSpacing: "-0.3px" }}>Kalams</span>
//             </div>

//             {/* Center: search */}
//             <div
//               className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
//               style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", width: 260 }}
//             >
//               <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round">
//                 <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
//               </svg>
//               <input
//                 placeholder="Search kalams..."
//                 className="bg-transparent outline-none w-full"
//                 style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", border: "none" }}
//               />
//             </div>

//             {/* Right: links + avatar + publish */}
//             <div className="flex items-center gap-4">
//               <a style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", cursor: "pointer" }}>Explore</a>
//               <a style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", cursor: "pointer" }}>Artists</a>
//               <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.08)" }} />
//               <div
//                 className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white cursor-pointer"
//                 style={{ background: "linear-gradient(135deg,#7c4dff,#c16dff)", border: "2px solid rgba(255,255,255,0.1)" }}
//               >
//                 A
//               </div>
//               <Link
//                 to="/kalam"
//                 className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all active:scale-95"
//                 style={{ background: "linear-gradient(135deg,#7c4dff,#9c6dff)", boxShadow: "0 2px 10px rgba(124,77,255,0.35)" }}
//               >
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
//                   <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
//                 </svg>
//                 Publish
//               </Link>
//             </div>
//           </nav>

//           {/* ── Hero Header ── */}
//           <div className="relative overflow-hidden px-10 pt-16 pb-12" style={{ background: "#0a0a10" }}>
//             <div style={{ position: "absolute", top: -80, left: -60, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(109,40,217,0.18) 0%,transparent 65%)", pointerEvents: "none" }} />
//             <div style={{ position: "absolute", top: 20, right: -40, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,158,11,0.07) 0%,transparent 65%)", pointerEvents: "none" }} />

//             <div className="max-w-[680px] relative">
//               <div className="k-a1 flex items-center gap-2 mb-5">
//                 <div style={{ width: 3, height: 16, borderRadius: 2, background: "linear-gradient(180deg,#f59e0b,#d97706)", flexShrink: 0 }} />
//                 <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,158,11,0.85)" }}>Weekly Pick</span>
//                 <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.08)", margin: "0 4px" }} />
//                 <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 99, background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
//                   <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#f59e0b", display: "inline-block", flexShrink: 0, boxShadow: "0 0 5px rgba(245,158,11,0.8)" }} />
//                   <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(251,191,36,0.9)", letterSpacing: "0.05em" }}>Featured</span>
//                 </div>
//               </div>

//               <h1
//                 className="k-a2"
//                 style={{
//                   fontFamily: "'Cormorant Garamond', Georgia, serif",
//                   fontSize: "clamp(52px, 6vw, 80px)",
//                   fontWeight: 300, fontStyle: "italic",
//                   lineHeight: 0.92, marginBottom: 24, letterSpacing: "-1px",
//                 }}
//               >
//                 <span style={{ color: "#b8aee0", display: "block" }}>Kalam of</span>
//                 <span style={{ fontWeight: 600, fontStyle: "normal", color: "#fff", display: "block", position: "relative", width: "fit-content" }}>
//                   The Week
//                   <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#f59e0b,#fbbf24,transparent)", borderRadius: 2 }} />
//                 </span>
//               </h1>

//               <div className="k-a3 flex items-center gap-6">
//                 <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, maxWidth: 400, margin: 0 }}>
//                   Handpicked by our curators — one transcendent kalam every week, celebrating the soul of Urdu poetry.
//                 </p>
//                 <div className="flex gap-5 flex-shrink-0 pl-6" style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}>
//                   <div>
//                     <div style={{ fontSize: 20, fontWeight: 700, color: "#e2d9ff", letterSpacing: "-0.5px" }}>Week 24</div>
//                     <div style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>Edition</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── Tab Nav (same as Social.jsx, kotw pre-selected) ── */}
//           <div
//            className="k-a4 flex items-center justify-center gap-1 px-10"
//             style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#0a0a10" }}
//           >
//             {[
//               { id: "kalams", label: "Kalams" },
//               { id: "kotw",   label: "Kalam of The Week" },
//               { id: "albums", label: "Albums" },
//             ].map(({ id, label }) => (
//               <button
//                 key={id}
//                 onClick={() => handleTabClick(id)}
//                 data-active={id === "kotw"}
//                 className="k-tab-btn"
//                 style={{
//                   padding: "14px 20px",
//                   fontSize: 13,
//                   fontWeight: id === "kotw" ? 600 : 500,
//                   border: "none",
//                   background: "transparent",
//                   color: id === "kotw" ? "#a78bfa" : "rgba(255,255,255,0.4)",
//                   cursor: id === "kotw" ? "default" : "pointer",
//                   borderBottom: id === "kotw" ? "2px solid #7c4dff" : "2px solid transparent",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 {label}
//               </button>
//             ))}
//           </div>

//           {/* ── Content ── */}
//           <div
//               className="px-10 py-10 grid gap-8"
//              style={{ gridTemplateColumns: "1fr 300px", alignItems: "start" }}
//             >
//               {/* Main Kalam */}
//               <div style={{ marginLeft: 180 }}>
//               {dataArrived && (
//                 <NewKalam
//                   key={response[0]?.Kalam._id}
//                   customStyles={customStyles}
//                   title={response[0]?.Kalam?.name}
//                   content={response[0]?.Kalam?.content}
//                   isImage={false}
//                   mUid={response[0]?.Kalam?.createdBy}
//                   kalId={response[0]?.Kalam?._id}
//                   isLiked2={false}
//                 />
//               )}
//             </div>

//             {/* Sidebar */}
//             <div className="flex flex-col gap-3" style={{ marginRight: 20 }}>
//               <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", paddingLeft: 4 }}>
//                 Previous Picks
//               </div>
//               {[
//                 { title: "Tere Bin Nahin Lagda", artist: "Rahat Fateh Ali Khan", week: 23, accent: "#1a3050" },
//                 { title: "Aaj Rang Hai",          artist: "Abida Parveen",        week: 22, accent: "#3d1050" },
//                 { title: "Man Kunto Maula",        artist: "Various Artists",      week: 21, accent: "#1a4020" },
//               ].map((item) => (
//                 <div
//                   key={item.week}
//                   className="k-prev flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all"
//                   style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
//                 >
//                   <div style={{ width: 38, height: 38, borderRadius: 10, background: `linear-gradient(135deg,#0f1020,${item.accent})`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(167,139,250,0.7)" strokeWidth="1.8" strokeLinecap="round">
//                       <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
//                     </svg>
//                   </div>
//                   <div style={{ flex: 1, minWidth: 0 }}>
//                     <div style={{ fontSize: 13, fontWeight: 600, color: "#c4bde8", marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.title}</div>
//                     <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{item.artist} · Week {item.week}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default KalamOfTheWeek;


//-------------------------------------------------------------------------------------------------------------------------------->


import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "@/Apis/axiosInstance";
import NewKalam from "./components/NewKalam";
import SidebarExample from "./components/Sidebar";

const KalamOfTheWeek = () => {
  const [customStyles, setCustomStyles] = useState("");
  const [response, setResponse] = useState([]);
  const [dataArrived, setDataArrived] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/api/kalamOfTheWeek")
      .then((res) => {
        console.log("kalam_of_the_week_response", res.data);
        setResponse(res.data);
        setCustomStyles(res.data[0].Kalam.customStyles);
        setDataArrived(true);
      })
      .catch((err) => console.error("Error_while_fetching_kalam_of_the_week", err));
  }, []);

  const handleTabClick = (tab) => {
    if (tab === "kalams") navigate("/social");
    if (tab === "albums") navigate("/albumsLive");
    // "kotw" does nothing — already here
  };

  return (
    <div
      className="relative overflow-auto"
      style={{ height: "100svh", WebkitOverflowScrolling: "touch", background: "#0a0a10" }}
    >
      <SidebarExample isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&display=swap');
        @keyframes kotw-fu {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .k-a1 { animation: kotw-fu .45s ease both; }
        .k-a2 { animation: kotw-fu .45s .09s ease both; }
        .k-a3 { animation: kotw-fu .45s .18s ease both; }
        .k-a4 { animation: kotw-fu .45s .27s ease both; }
        .k-tab-btn { transition: color .2s, border-color .2s; }
        .k-tab-btn:hover:not([data-active="true"]) { color: rgba(167,139,250,0.7) !important; }
        .k-prev:hover { background: rgba(255,255,255,0.055) !important; border-color: rgba(124,77,255,0.2) !important; }

        .k-nav-search, .k-nav-links { display: flex; }
        .k-nav-publish-inline { display: flex; }
        .k-fab-publish { display: none; }

        .k-tabs-row {
          overflow-x: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .k-tabs-row::-webkit-scrollbar { display: none; }

        @media (max-width: 768px) {
          .k-nav-search, .k-nav-links { display: none !important; }
          .k-nav-publish-inline { display: none !important; }
          .k-fab-publish { display: flex !important; }

          .k-hero-wrap { padding-left: 24px !important; padding-right: 24px !important; padding-top: 40px !important; padding-bottom: 32px !important; }
          .k-hero-stats { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .k-hero-stats > div:last-child { padding-left: 0 !important; border-left: none !important; }
          .k-top-nav { padding-left: 16px !important; padding-right: 16px !important; }
          .k-tabs-row { padding-left: 16px !important; padding-right: 16px !important; justify-content: flex-start !important; }
          .k-tab-btn { padding: 12px 14px !important; font-size: 12px !important; }

          .k-content-grid { grid-template-columns: 1fr !important; }
          .k-main-kalam { margin-left: 0 !important; }
          .k-sidebar { margin-right: 0 !important; }
          .k-content-wrap { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>

      <div style={{ paddingBottom: "max(80px, env(safe-area-inset-bottom))" }}>
        <div className="max-w-[1600px] mx-auto">

          {/* ── Top Nav (identical structure to Social.jsx) ── */}
          <nav
            className="k-top-nav flex items-center justify-between px-10 py-4 sticky top-0 z-30"
            style={{
              background: "rgba(10,10,16,0.98)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Left: sidebar + logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center w-9 h-9 flex-shrink-0 transition-all duration-150 active:scale-95"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: 10,
                  color: "#9090b0",
                }}
                aria-label="Open sidebar"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="15" y2="12" />
                  <line x1="3" y1="18" x2="18" y2="18" />
                </svg>
              </button>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#7c4dff,#c16dff)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
                </svg>
              </div>
              <span style={{ fontSize: 15, fontWeight: 600, color: "#e2d9ff", letterSpacing: "-0.3px" }}>Kalams</span>
            </div>

            {/* Center: search */}
            <div
              className="k-nav-search items-center gap-2 px-3 py-1.5 rounded-lg"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", width: 260 }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                placeholder="Search kalams..."
                className="bg-transparent outline-none w-full"
                style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", border: "none" }}
              />
            </div>

            {/* Right: links + avatar + publish */}
            <div className="flex items-center gap-4">
              <a className="k-nav-links" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", cursor: "pointer" }}>Explore</a>
              <a className="k-nav-links" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", cursor: "pointer" }}>Artists</a>
              <div className="k-nav-links" style={{ width: 1, height: 18, background: "rgba(255,255,255,0.08)" }} />
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white cursor-pointer"
                style={{ background: "linear-gradient(135deg,#7c4dff,#c16dff)", border: "2px solid rgba(255,255,255,0.1)" }}
              >
                A
              </div>
              <Link
                to="/kalam"
                className="k-nav-publish-inline items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all active:scale-95"
                style={{ background: "linear-gradient(135deg,#7c4dff,#9c6dff)", boxShadow: "0 2px 10px rgba(124,77,255,0.35)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Publish
              </Link>
            </div>
          </nav>

          {/* ── Hero Header ── */}
          <div className="k-hero-wrap relative overflow-hidden px-10 pt-16 pb-12" style={{ background: "#0a0a10" }}>
            <div style={{ position: "absolute", top: -80, left: -60, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(109,40,217,0.18) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: 20, right: -40, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,158,11,0.07) 0%,transparent 65%)", pointerEvents: "none" }} />

            <div className="max-w-[680px] relative">
              <div className="k-a1 flex items-center gap-2 mb-5">
                <div style={{ width: 3, height: 16, borderRadius: 2, background: "linear-gradient(180deg,#f59e0b,#d97706)", flexShrink: 0 }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,158,11,0.85)" }}>Weekly Pick</span>
                <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.08)", margin: "0 4px" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 99, background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#f59e0b", display: "inline-block", flexShrink: 0, boxShadow: "0 0 5px rgba(245,158,11,0.8)" }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(251,191,36,0.9)", letterSpacing: "0.05em" }}>Featured</span>
                </div>
              </div>

              <h1
                className="k-a2"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(52px, 6vw, 80px)",
                  fontWeight: 300, fontStyle: "italic",
                  lineHeight: 0.92, marginBottom: 24, letterSpacing: "-1px",
                }}
              >
                <span style={{ color: "#b8aee0", display: "block" }}>Kalam of</span>
                <span style={{ fontWeight: 600, fontStyle: "normal", color: "#fff", display: "block", position: "relative", width: "fit-content" }}>
                  The Week
                  <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#f59e0b,#fbbf24,transparent)", borderRadius: 2 }} />
                </span>
              </h1>

              <div className="k-a3 k-hero-stats flex items-center gap-6">
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, maxWidth: 400, margin: 0 }}>
                  Handpicked by our curators — one transcendent kalam every week, celebrating the soul of Urdu poetry.
                </p>
                <div className="flex gap-5 flex-shrink-0 pl-6" style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "#e2d9ff", letterSpacing: "-0.5px" }}>Week 24</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>Edition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Tab Nav (same as Social.jsx, kotw pre-selected) ── */}
          <div
           className="k-a4 k-tabs-row flex items-center justify-center gap-1 px-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#0a0a10" }}
          >
            {[
              { id: "kalams", label: "Kalams" },
              { id: "kotw",   label: "Kalam of The Week" },
              { id: "albums", label: "Albums" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleTabClick(id)}
                data-active={id === "kotw"}
                className="k-tab-btn"
                style={{
                  padding: "14px 20px",
                  fontSize: 13,
                  fontWeight: id === "kotw" ? 600 : 500,
                  border: "none",
                  background: "transparent",
                  color: id === "kotw" ? "#a78bfa" : "rgba(255,255,255,0.4)",
                  cursor: id === "kotw" ? "default" : "pointer",
                  borderBottom: id === "kotw" ? "2px solid #7c4dff" : "2px solid transparent",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* ── Content ── */}
          <div
              className="k-content-grid k-content-wrap px-10 py-10 grid gap-8"
             style={{ gridTemplateColumns: "1fr 300px", alignItems: "start" }}
            >
              {/* Main Kalam */}
              <div className="k-main-kalam" style={{ marginLeft: 180 }}>
              {dataArrived && (
                <NewKalam
                  key={response[0]?.Kalam._id}
                  customStyles={customStyles}
                  title={response[0]?.Kalam?.name}
                  content={response[0]?.Kalam?.content}
                  isImage={false}
                  mUid={response[0]?.Kalam?.createdBy}
                  kalId={response[0]?.Kalam?._id}
                  isLiked2={false}
                />
              )}
            </div>

            {/* Sidebar */}
            <div className="k-sidebar flex flex-col gap-3" style={{ marginRight: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", paddingLeft: 4 }}>
                Previous Picks
              </div>
              {[
                { title: "Tere Bin Nahin Lagda", artist: "Rahat Fateh Ali Khan", week: 23, accent: "#1a3050" },
                { title: "Aaj Rang Hai",          artist: "Abida Parveen",        week: 22, accent: "#3d1050" },
                { title: "Man Kunto Maula",        artist: "Various Artists",      week: 21, accent: "#1a4020" },
              ].map((item) => (
                <div
                  key={item.week}
                  className="k-prev flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: `linear-gradient(135deg,#0f1020,${item.accent})`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(167,139,250,0.7)" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#c4bde8", marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.title}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{item.artist} · Week {item.week}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Floating Publish button (mobile only) ── */}
      <Link
        to="/kalam"
        className="k-fab-publish items-center justify-center"
        style={{
          position: "fixed",
          right: "max(20px, env(safe-area-inset-right))",
          bottom: "max(24px, env(safe-area-inset-bottom))",
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#7c4dff,#9c6dff)",
          boxShadow: "0 6px 20px rgba(124,77,255,0.5), 0 2px 8px rgba(0,0,0,0.4)",
          color: "#fff",
          zIndex: 50,
        }}
        aria-label="Publish"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </Link>
    </div>
  );
};

export default KalamOfTheWeek;