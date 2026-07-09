// import { useContext } from "react";
// // import { MyContext } from "../ContextProvider";
// import axiosInstance from "../Apis/axiosInstance";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";




// const UrKalam = ()=>{

//   const[kalam, setKalam] = useState({});

//     // const {content, type} = useContext(MyContext);

//      // Axios fetch

// useEffect(()=>{
  

     

//     axiosInstance
//       .get("/api/UrKalam")
//       .then((res) => {
//         setKalam(res.data);


//         console.log(res.data)
//         // setLoading(false);
//         // setTimeout(() => setShowPoetry(true), 1000);
//       })
//       // .catch((err) => {
//       //   console.error(err);
//       //   setLoading(false);
//       // });

     
//      }, [])

//     return(
//         <>

//         <div>
//   {Object.values(kalam).map((kalam, _id) => (
//     <p key={kalam._id }>{kalam.type}:{kalam.content}</p>
//   ))}
// </div>

//        {/* <h1>{kalam.content}</h1> */}

        

//           {/* <h1>{JSON.stringify(kalam.content)}</h1> */}
        
//         {/* <h1>hello {type}</h1><br/><br/><br/><br/><br/><br/>
//         <h1>hello {content} </h1>
//         <button onClick={() =>{setContent('lakka')}}>click me</button> */}
//         {/* <button onClick={call}>hello</button> */}


//         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


//         <Link to = '/Profile'>
//         <button>View your profile</button>
//         </Link>


        
//         </>

//     )
// }

// export default UrKalam;






//---------------------------------------------------------------------------------------------------------------------------------->
//----------------------------------------------------------------------------->




// import { useContext } from "react";
// import axiosInstance from "../Apis/axiosInstance";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// const typeColors = {
//   poem:    { bg: "rgba(120,200,180,0.07)", border: "rgba(120,200,180,0.25)", text: "rgba(120,200,180,0.9)" },
//   thought: { bg: "rgba(180,140,255,0.07)", border: "rgba(180,140,255,0.25)", text: "rgba(180,140,255,0.9)" },
//   note:    { bg: "rgba(255,200,100,0.07)", border: "rgba(255,200,100,0.25)", text: "rgba(255,200,100,0.9)" },
// };

// const getTypeStyle = (type = "") => {
//   return typeColors[type.toLowerCase()] || {
//     bg: "rgba(255,255,255,0.04)",
//     border: "rgba(255,255,255,0.12)",
//     text: "rgba(255,255,255,0.4)",
//   };
// };

// const UrKalam = () => {
//   const [kalam, setKalam] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [userId, setUserId] = useState("");
//   const Navigate = useNavigate();
  
//   useEffect(()=>{

//     axiosInstance
//     .get('/api/userId',{

//       withCredentials: true
//     })
//     .then((Response)=>{

//       setUserId(Response.data._id)

//     })
//   })

//   useEffect(() => {
//     axiosInstance
//       .get("/api/UrKalam",
//         {

//           withCredentials: true

//       })
//       .then((res) => {
//         setKalam(res.data);
//         console.log(res.data);






//       })
//       .finally(() => setLoading(false));
//   }, []);

//   const entries = Object.values(kalam);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Mono:wght@300;400&display=swap');

//         * { box-sizing: border-box; margin: 0; padding: 0; }

//         .ur-root {
//           min-height: 100vh;
//           background-color: #0a0a0c;
//           background-image:
//             radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 80, 255, 0.08) 0%, transparent 60%),
//             radial-gradient(ellipse 40% 30% at 80% 80%, rgba(60, 200, 180, 0.05) 0%, transparent 50%);
//           font-family: 'DM Mono', monospace;
//           color: #e8e2d9;
//         }

//         .ur-container {
//           max-width: 680px;
//           margin: 0 auto;
//           padding: 60px 24px 100px;
//         }

//         /* Header */
//         .ur-header {
//           margin-bottom: 48px;
//           border-bottom: 1px solid rgba(255,255,255,0.06);
//           padding-bottom: 32px;
//           display: flex;
//           align-items: flex-end;
//           justify-content: space-between;
//           gap: 16px;
//           flex-wrap: wrap;
//         }

//         .ur-header-left {}

//         .ur-eyebrow {
//           font-size: 10px;
//           letter-spacing: 0.3em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.25);
//           margin-bottom: 10px;
//         }

//         .ur-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(36px, 7vw, 56px);
//           font-weight: 300;
//           letter-spacing: -0.02em;
//           line-height: 1;
//           color: #f0ebe3;
//         }

//         .ur-title span { color: rgba(120, 200, 180, 0.9); }

//         .ur-count {
//           font-size: 10px;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.2);
//           margin-top: 10px;
//         }

//         /* Nav link */
//         .ur-nav-link {
//           font-size: 10px;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.3);
//           text-decoration: none;
//           border: 1px solid rgba(255,255,255,0.08);
//           padding: 10px 18px;
//           border-radius: 3px;
//           transition: border-color 0.2s, color 0.2s;
//           white-space: nowrap;
//         }

//         .ur-nav-link:hover {
//           border-color: rgba(255,255,255,0.2);
//           color: rgba(255,255,255,0.6);
//         }

//         /* Loading state */
//         .ur-loading {
//           text-align: center;
//           padding: 80px 0;
//           font-size: 11px;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.15);
//         }

//         .ur-loading-dots span {
//           display: inline-block;
//           animation: blink 1.2s infinite;
//         }
//         .ur-loading-dots span:nth-child(2) { animation-delay: 0.2s; }
//         .ur-loading-dots span:nth-child(3) { animation-delay: 0.4s; }

//         @keyframes blink {
//           0%, 80%, 100% { opacity: 0.15; }
//           40% { opacity: 1; }
//         }

//         /* Empty state */
//         .ur-empty {
//           text-align: center;
//           padding: 80px 0;
//           border: 1px dashed rgba(255,255,255,0.07);
//           border-radius: 6px;
//         }

//         .ur-empty-glyph {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 48px;
//           color: rgba(255,255,255,0.06);
//           margin-bottom: 16px;
//         }

//         .ur-empty-text {
//           font-size: 11px;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.2);
//         }

//         /* Entry list */
//         .ur-list {
//           display: flex;
//           flex-direction: column;
//           gap: 2px;
//         }

//         .ur-entry {
//           display: flex;
//           align-items: baseline;
//           gap: 20px;
//           padding: 20px 22px;
//           border: 1px solid rgba(255,255,255,0.06);
//           border-radius: 4px;
//           background: rgba(255,255,255,0.02);
//           transition: border-color 0.2s, background 0.2s;
//           animation: fadeUp 0.4s ease both;
//         }

//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(10px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         .ur-entry:hover {
//           border-color: rgba(255,255,255,0.1);
//           background: rgba(255,255,255,0.035);
//         }

//         .ur-entry-index {
//           font-size: 10px;
//           color: rgba(255,255,255,0.15);
//           letter-spacing: 0.05em;
//           min-width: 24px;
//           flex-shrink: 0;
//           user-select: none;
//         }

//         .ur-entry-body {
//           flex: 1;
//           min-width: 0;
//         }

//         .ur-entry-content {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 17px;
//           font-weight: 400;
//           color: rgba(240, 235, 227, 0.85);
//           line-height: 1.5;
//           word-break: break-word;
//         }

//         .ur-entry-type-pill {
//           display: inline-block;
//           margin-top: 8px;
//           font-family: 'DM Mono', monospace;
//           font-size: 9px;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           padding: 3px 10px;
//           border-radius: 2px;
//           border: 1px solid;
//         }

//         /* Footer */
//         .ur-footer {
//           margin-top: 56px;
//           padding-top: 32px;
//           border-top: 1px solid rgba(255,255,255,0.05);
//           display: flex;
//           justify-content: flex-end;
//         }

//         .ur-profile-link {
//           font-size: 10px;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: rgba(120, 200, 180, 0.6);
//           text-decoration: none;
//           border: 1px solid rgba(120, 200, 180, 0.2);
//           padding: 12px 22px;
//           border-radius: 3px;
//           transition: border-color 0.2s, color 0.2s, background 0.2s;
//         }

//         .ur-profile-link:hover {
//           border-color: rgba(120, 200, 180, 0.5);
//           color: rgba(120, 200, 180, 1);
//           background: rgba(120, 200, 180, 0.06);
//         }
//       `}</style>

//       <div className="ur-root">
//         <div className="ur-container">

//           {/* Header */}
//           <header className="ur-header">
//             <div className="ur-header-left">
//               <p className="ur-eyebrow">Collection</p>
//               <h1 className="ur-title">Your <span>Kalams</span></h1>
//               {!loading && (
//                 <p className="ur-count">
//                   {entries.length} {entries.length === 1 ? "entry" : "entries"}
//                 </p>
//               )}
//             </div>
//             <Link to="/kalam" className="ur-nav-link">
//               + New Entry
//             </Link>
//           </header>

//           {/* Content */}
//           {loading ? (
//             <div className="ur-loading">
//               <div className="ur-loading-dots">
//                 <span>▪</span><span>▪</span><span>▪</span>
//               </div>
//             </div>
//           ) : entries.length === 0 ? (
//             <div className="ur-empty">
//               <div className="ur-empty-glyph">✦</div>
//               <p className="ur-empty-text">No kalams yet — start writing</p>
//             </div>
//           ) : (
//             <div className="ur-list">
//               {entries.map((item, idx) => {
//                 const style = getTypeStyle(item.type);
//                 return (
//                   <div
//                     className="ur-entry"
//                     key={item._id || idx}
//                     style={{ animationDelay: `${idx * 0.05}s` }}
//                   >
//                     <span className="ur-entry-index">
//                       {String(idx + 1).padStart(2, "0")}
//                     </span>
//                     <div className="ur-entry-body">
//                       <p className="ur-entry-content">{item.content}</p>
//                       {item.type && (
//                         <span
//                           className="ur-entry-type-pill"
//                           style={{
//                             background: style.bg,
//                             borderColor: style.border,
//                             color: style.text,
//                           }}
//                         >
//                           {item.type}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}

//           {/* Footer */}
//           <div className="ur-footer">
//             <Link to={`/Profile?userId=${userId}`} className="ur-profile-link">
//               View Profile →
//             </Link>
            
//           </div> 

//         </div>
//       </div>
//     </>
//   );
// };

// export default UrKalam;

//------------------------------------------------------------------------------------------>
//---------------------------------------------------------------------------------------------------------------------------->


// import { useContext } from "react";
// import axiosInstance from "../Apis/axiosInstance";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// const typeColors = {
//   poem:    { bg: "rgba(120,200,180,0.07)", border: "rgba(120,200,180,0.25)", text: "rgba(120,200,180,0.9)" },
//   thought: { bg: "rgba(180,140,255,0.07)", border: "rgba(180,140,255,0.25)", text: "rgba(180,140,255,0.9)" },
//   note:    { bg: "rgba(255,200,100,0.07)", border: "rgba(255,200,100,0.25)", text: "rgba(255,200,100,0.9)" },
// };

// // Badge class map for entry type
// const typeBadgeClass = {
//   poem:    "bs",
//   thought: "bq",
//   note:    "bg",
//   ghazal:  "bs",
//   nazm:    "bn",
//   sher:    "bs",
//   qita:    "bq",
// };

// // Icon map for entry type
// const typeIconClass = {
//   poem:    "si",
//   thought: "qi",
//   note:    "gi",
//   ghazal:  "gi",
//   nazm:    "ni",
//   sher:    "si",
//   qita:    "qi",
// };

// const typeIcon = {
//   poem:    "✦",
//   thought: "❝",
//   note:    "☽",
//   ghazal:  "☽",
//   nazm:    "✿",
//   sher:    "✦",
//   qita:    "❝",
// };

// const getTypeStyle = (type = "") => {
//   return typeColors[type.toLowerCase()] || {
//     bg: "rgba(255,255,255,0.04)",
//     border: "rgba(255,255,255,0.12)",
//     text: "rgba(255,255,255,0.4)",
//   };
// };

// const UrKalam = () => {
//   const [kalam, setKalam] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [userId, setUserId] = useState("");
//   const Navigate = useNavigate();
  
//   useEffect(()=>{
//     axiosInstance
//     .get('/api/userId',{
//       withCredentials: true
//     })
//     .then((Response)=>{
//       setUserId(Response.data._id)
//     })
//   })

//   useEffect(() => {
//     axiosInstance
//       .get("/api/UrKalam",
//         {
//           withCredentials: true
//       })
//       .then((res) => {
//         setKalam(res.data);
//         console.log(res.data);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   const entries = Object.values(kalam);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         /* ── Root & Background ─────────────────────────── */
//         .ur-root {
//           min-height: 100vh;
//           background-color: #0a0a0c;
//           background-image:
//             radial-gradient(ellipse 80% 50% at 50% -20%, rgba(83,74,183,0.13) 0%, transparent 60%),
//             radial-gradient(ellipse 40% 30% at 85% 85%, rgba(15,110,86,0.07) 0%, transparent 50%);
//           font-family: 'DM Mono', monospace;
//           color: #e8e2d9;
//         }

//         /* ── Nav ───────────────────────────────────────── */
//         .ur-nav {
//           background: rgba(10,10,12,0.85);
//           backdrop-filter: blur(16px);
//           -webkit-backdrop-filter: blur(16px);
//           border-bottom: 0.5px solid rgba(255,255,255,0.06);
//           padding: 0 2rem;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 56px;
//           position: sticky;
//           top: 0;
//           z-index: 50;
//         }

//         .ur-brand {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         .ur-logo {
//           width: 32px;
//           height: 32px;
//           background: #26215C;
//           border-radius: 8px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #CECBF6;
//           font-size: 16px;
//           flex-shrink: 0;
//         }

//         .ur-wordmark {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 20px;
//           font-weight: 400;
//           color: #f0ebe3;
//           letter-spacing: 0.02em;
//         }

//         .ur-nav-right {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .ur-btn-ghost {
//           background: transparent;
//           border: 0.5px solid rgba(255,255,255,0.1);
//           border-radius: 6px;
//           padding: 6px 14px;
//           font-size: 11px;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.4);
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           gap: 5px;
//           transition: all 0.15s;
//           font-family: 'DM Mono', monospace;
//           text-decoration: none;
//         }

//         .ur-btn-ghost:hover {
//           background: rgba(255,255,255,0.04);
//           border-color: rgba(255,255,255,0.2);
//           color: rgba(255,255,255,0.7);
//         }

//         .ur-btn-primary {
//           background: #3C3489;
//           border: none;
//           border-radius: 6px;
//           padding: 6px 14px;
//           font-size: 11px;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: #EEEDFE;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           gap: 5px;
//           font-family: 'DM Mono', monospace;
//           transition: opacity 0.15s;
//           text-decoration: none;
//         }

//         .ur-btn-primary:hover { opacity: 0.82; }

//         .ur-avatar {
//           width: 30px;
//           height: 30px;
//           border-radius: 50%;
//           background: rgba(83,74,183,0.2);
//           border: 0.5px solid rgba(83,74,183,0.4);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 11px;
//           font-weight: 500;
//           color: #AFA9EC;
//           cursor: pointer;
//           font-family: 'DM Mono', monospace;
//         }

//         /* ── Hero ──────────────────────────────────────── */
//         .ur-hero {
//           background: rgba(255,255,255,0.015);
//           border-bottom: 0.5px solid rgba(255,255,255,0.06);
//           padding: 2rem 2rem 1.75rem;
//         }

//         .ur-hero-inner {
//           max-width: 780px;
//           margin: 0 auto;
//           display: flex;
//           align-items: flex-end;
//           justify-content: space-between;
//           flex-wrap: wrap;
//           gap: 16px;
//         }

//         .ur-eyebrow {
//           font-size: 10px;
//           letter-spacing: 0.35em;
//           text-transform: uppercase;
//           color: rgba(83,74,183,0.8);
//           margin-bottom: 6px;
//         }

//         .ur-hero-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(28px, 5vw, 38px);
//           font-weight: 300;
//           letter-spacing: -0.02em;
//           line-height: 1.1;
//           color: #f0ebe3;
//         }

//         .ur-hero-title span {
//           color: rgba(120,200,180,0.9);
//           font-style: italic;
//         }

//         .ur-hero-sub {
//           font-size: 12px;
//           color: rgba(255,255,255,0.3);
//           margin-top: 5px;
//           letter-spacing: 0.05em;
//         }

//         .ur-stats {
//           display: flex;
//           gap: 2rem;
//           flex-shrink: 0;
//         }

//         .ur-stat { text-align: right; }

//         .ur-stat-num {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 26px;
//           font-weight: 300;
//           color: #f0ebe3;
//           line-height: 1;
//         }

//         .ur-stat-label {
//           font-size: 9px;
//           color: rgba(255,255,255,0.25);
//           letter-spacing: 0.3em;
//           text-transform: uppercase;
//           margin-top: 4px;
//         }

//         /* ── Body ──────────────────────────────────────── */
//         .ur-body {
//           max-width: 780px;
//           margin: 0 auto;
//           padding: 1.75rem 2rem 4rem;
//         }

//         /* ── Section header row ────────────────────────── */
//         .ur-section-row {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-bottom: 12px;
//         }

//         .ur-section-label {
//           font-size: 10px;
//           font-weight: 500;
//           color: rgba(255,255,255,0.2);
//           letter-spacing: 0.35em;
//           text-transform: uppercase;
//         }

//         /* ── Card shell ────────────────────────────────── */
//         .ur-card {
//           background: rgba(255,255,255,0.025);
//           border: 0.5px solid rgba(255,255,255,0.07);
//           border-radius: 10px;
//           overflow: hidden;
//         }

//         /* ── Entry rows ────────────────────────────────── */
//         .ur-item {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           padding: 14px 1.5rem;
//           border-bottom: 0.5px solid rgba(255,255,255,0.05);
//           cursor: pointer;
//           transition: background 0.12s;
//           animation: fadeUp 0.35s ease both;
//           text-decoration: none;
//           color: inherit;
//         }

//         .ur-item:last-child { border-bottom: none; }

//         .ur-item:hover { background: rgba(255,255,255,0.03); }

//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(8px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         /* Icon bubble */
//         .ur-item-icon {
//           width: 36px;
//           height: 36px;
//           border-radius: 8px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 14px;
//           flex-shrink: 0;
//           font-family: 'Cormorant Garamond', serif;
//         }

//         .icon-si { background: rgba(83,74,183,0.15);  color: #AFA9EC; }
//         .icon-gi { background: rgba(133,79,11,0.15);  color: rgba(255,180,80,0.8); }
//         .icon-ni { background: rgba(15,110,86,0.15);  color: rgba(120,200,180,0.9); }
//         .icon-qi { background: rgba(153,53,86,0.15);  color: rgba(255,130,170,0.8); }

//         /* Body text */
//         .ur-item-body { flex: 1; min-width: 0; }

//         .ur-item-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 16px;
//           font-weight: 400;
//           color: rgba(240,235,227,0.88);
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }

//         .ur-item-meta {
//           font-size: 10px;
//           color: rgba(255,255,255,0.2);
//           display: flex;
//           gap: 10px;
//           margin-top: 3px;
//           letter-spacing: 0.05em;
//           flex-wrap: wrap;
//         }

//         /* Badge */
//         .ur-item-right {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           flex-shrink: 0;
//         }

//         .ur-badge {
//           display: inline-block;
//           padding: 2px 9px;
//           border-radius: 20px;
//           font-size: 9px;
//           font-weight: 500;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           font-family: 'DM Mono', monospace;
//           border: 0.5px solid;
//         }

//         .badge-bs { background: rgba(83,74,183,0.1);  border-color: rgba(83,74,183,0.3);  color: #AFA9EC; }
//         .badge-bg { background: rgba(133,79,11,0.1);  border-color: rgba(255,180,80,0.25); color: rgba(255,180,80,0.8); }
//         .badge-bn { background: rgba(15,110,86,0.1);  border-color: rgba(120,200,180,0.25);color: rgba(120,200,180,0.9); }
//         .badge-bq { background: rgba(153,53,86,0.1);  border-color: rgba(255,130,170,0.25);color: rgba(255,130,170,0.8); }
//         .badge-def{ background: rgba(255,255,255,0.04);border-color: rgba(255,255,255,0.12);color: rgba(255,255,255,0.35);}

//         /* Chevron */
//         .ur-chevron {
//           font-size: 14px;
//           color: rgba(255,255,255,0.15);
//           transition: transform 0.15s, color 0.15s;
//         }
//         .ur-item:hover .ur-chevron {
//           transform: translateX(3px);
//           color: rgba(255,255,255,0.35);
//         }

//         /* ── Loading ───────────────────────────────────── */
//         .ur-loading {
//           text-align: center;
//           padding: 80px 0;
//         }

//         .ur-loading-dots {
//           font-size: 10px;
//           letter-spacing: 0.3em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.15);
//         }

//         .ur-loading-dots span {
//           display: inline-block;
//           animation: blink 1.2s infinite;
//         }
//         .ur-loading-dots span:nth-child(2) { animation-delay: 0.2s; }
//         .ur-loading-dots span:nth-child(3) { animation-delay: 0.4s; }

//         @keyframes blink {
//           0%, 80%, 100% { opacity: 0.15; }
//           40% { opacity: 1; }
//         }

//         /* ── Empty ─────────────────────────────────────── */
//         .ur-empty {
//           text-align: center;
//           padding: 72px 24px;
//           border: 0.5px dashed rgba(255,255,255,0.07);
//           border-radius: 10px;
//         }

//         .ur-empty-glyph {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 44px;
//           color: rgba(83,74,183,0.2);
//           margin-bottom: 14px;
//         }

//         .ur-empty-text {
//           font-size: 10px;
//           letter-spacing: 0.25em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.18);
//           margin-bottom: 20px;
//         }

//         /* ── Footer ────────────────────────────────────── */
//         .ur-footer {
//           margin-top: 2rem;
//           padding-top: 1.5rem;
//           border-top: 0.5px solid rgba(255,255,255,0.05);
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           flex-wrap: wrap;
//           gap: 10px;
//         }

//         .ur-footer-note {
//           font-size: 10px;
//           color: rgba(255,255,255,0.15);
//           letter-spacing: 0.12em;
//         }

//         .ur-profile-link {
//           font-size: 10px;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: rgba(120,200,180,0.7);
//           text-decoration: none;
//           border: 0.5px solid rgba(120,200,180,0.2);
//           padding: 10px 20px;
//           border-radius: 6px;
//           transition: border-color 0.2s, color 0.2s, background 0.2s;
//           font-family: 'DM Mono', monospace;
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//         }

//         .ur-profile-link:hover {
//           border-color: rgba(120,200,180,0.5);
//           color: rgba(120,200,180,1);
//           background: rgba(120,200,180,0.05);
//         }

//         /* ── Responsive ────────────────────────────────── */
//         @media (max-width: 540px) {
//           .ur-nav { padding: 0 1rem; }
//           .ur-hero { padding: 1.5rem 1rem; }
//           .ur-body { padding: 1.25rem 1rem 3rem; }
//           .ur-stats { gap: 1.25rem; }
//           .ur-stat-num { font-size: 20px; }
//         }
//       `}</style>

//       <div className="ur-root">

//         {/* ── Navbar ── */}
//         <nav className="ur-nav">
//           <div className="ur-brand">
//             <div className="ur-logo">✦</div>
//             <span className="ur-wordmark">Kalam</span>
//           </div>
//           <div className="ur-nav-right">
//             <Link to="/kalam" className="ur-btn-primary">
//               + New Kalam
//             </Link>
//             <div className="ur-avatar">AK</div>
//           </div>
//         </nav>

//         {/* ── Hero ── */}
//         <div className="ur-hero">
//           <div className="ur-hero-inner">
//             <div>
//               <p className="ur-eyebrow">Collection</p>
//               <h1 className="ur-hero-title">Your <span>Kalams</span></h1>
//               <p className="ur-hero-sub">Every great kalam begins with a single word.</p>
//             </div>
//             <div className="ur-stats">
//               <div className="ur-stat">
//                 <div className="ur-stat-num">{loading ? "—" : entries.length}</div>
//                 <div className="ur-stat-label">Kalams</div>
//               </div>
//               <div className="ur-stat">
//                 <div className="ur-stat-num">
//                   {loading ? "—" : entries.filter(e => (e.type||"").toLowerCase() === "ghazal" || (e.type||"").toLowerCase() === "poem").length}
//                 </div>
//                 <div className="ur-stat-label">Poems</div>
//               </div>
//               <div className="ur-stat">
//                 <div className="ur-stat-num">
//                   {loading ? "—" : entries.filter(e => (e.type||"").toLowerCase() === "thought").length}
//                 </div>
//                 <div className="ur-stat-label">Thoughts</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Main body ── */}
//         <div className="ur-body">

//           {loading ? (
//             <div className="ur-loading">
//               <div className="ur-loading-dots">
//                 <span>▪</span><span>▪</span><span>▪</span>
//               </div>
//             </div>

//           ) : entries.length === 0 ? (
//             <div className="ur-empty">
//               <div className="ur-empty-glyph">✦</div>
//               <p className="ur-empty-text">No kalams yet — start writing</p>
//               <Link to="/kalam" className="ur-btn-primary" style={{ display: "inline-flex", margin: "0 auto" }}>
//                 + Compose your first kalam
//               </Link>
//             </div>

//           ) : (
//             <>
//               <div className="ur-section-row">
//                 <span className="ur-section-label">Recent kalams</span>
//                 <button className="ur-btn-ghost" style={{ fontSize: "10px" }}>
//                   View all →
//                 </button>
//               </div>

//               <div className="ur-card">
//                 {entries.map((item, idx) => {
//                   const typeKey = (item.type || "").toLowerCase();
//                   const iconCls = typeIconClass[typeKey] || "si";
//                   const badgeCls = typeBadgeClass[typeKey] || "def";
//                   const icon = typeIcon[typeKey] || "✦";

//                   return (
//                     <div
//                       className="ur-item"
//                       key={item._id || idx}
//                       style={{ animationDelay: `${idx * 0.05}s` }}
//                     >
//                       {/* Icon bubble */}
//                       <div className={`ur-item-icon icon-${iconCls}`}>
//                         {icon}
//                       </div>

//                       {/* Text body */}
//                       <div className="ur-item-body">
//                         <div className="ur-item-title">
//                           {item.title || item.content?.slice(0, 60) || "Untitled kalam"}
//                         </div>
//                         <div className="ur-item-meta">
//                           {item.createdAt && (
//                             <span>
//                               {new Date(item.createdAt).toLocaleDateString("en-IN", {
//                                 day: "numeric", month: "short", year: "numeric"
//                               })}
//                             </span>
//                           )}
//                           {item.mood && <span>{item.mood}</span>}
//                           {item.content && (
//                             <span>{item.content.length} chars</span>
//                           )}
//                         </div>
//                       </div>

//                       {/* Right side */}
//                       <div className="ur-item-right">
//                         {item.type && (
//                           <span className={`ur-badge badge-${badgeCls}`}>
//                             {item.type}
//                           </span>
//                         )}
//                         <span className="ur-chevron">›</span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </>
//           )}

//           {/* ── Footer ── */}
//           <div className="ur-footer">
//             <span className="ur-footer-note">
//               {!loading && entries.length > 0 && `${entries.length} ${entries.length === 1 ? "entry" : "entries"} in your collection`}
//             </span>
//             <Link to={`/Profile?userId=${userId}`} className="ur-profile-link">
//               View Profile →
//             </Link>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default UrKalam;
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "@/Apis/axiosInstance";
import NewKalam from "./components/NewKalam";

// ── Type → badge / icon mapping (same spirit as Kalam.jsx's SINF_OPTIONS) ──
const TYPE_META = {
  ghazal: { icon: "☽", badge: "bg-[rgba(15,110,86,0.12)] border-[rgba(120,200,180,0.28)] text-[rgba(120,200,180,0.9)]" },
  nazm:   { icon: "✿", badge: "bg-[rgba(83,74,183,0.12)] border-[rgba(175,169,236,0.35)] text-[#AFA9EC]" },
  sher:   { icon: "✦", badge: "bg-[rgba(180,140,50,0.14)] border-[rgba(210,170,90,0.4)] text-[rgba(230,190,110,0.95)]" },
  qita:   { icon: "❝", badge: "bg-[rgba(153,53,86,0.12)] border-[rgba(255,130,170,0.3)] text-[rgba(255,130,170,0.85)]" },
  rubai:  { icon: "❋", badge: "bg-[rgba(190,130,20,0.12)] border-[rgba(255,180,80,0.3)] text-[rgba(255,180,80,0.85)]" },
  masnavi:{ icon: "✧", badge: "bg-[rgba(80,40,140,0.14)] border-[rgba(175,169,236,0.3)] text-[#AFA9EC]" },
  marsiya:{ icon: "◈", badge: "bg-[rgba(160,30,70,0.12)] border-[rgba(255,130,170,0.3)] text-[rgba(255,130,170,0.85)]" },
};
const getTypeMeta = (type = "") =>
  TYPE_META[type.toLowerCase()] || {
    icon: "✦",
    badge: "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.4)]",
  };

const UrKalam = () => {
  const [kalams, setKalams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeNav, setActiveNav] = useState("Collection");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/api/urKalam", { withCredentials: true })
      .then((response) => {
        setKalams(response.data);
        console.log("response", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user kalams", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const ghazalCount = kalams.filter((k) =>
    ["ghazal", "sher"].includes((k.type || "").toLowerCase())
  ).length;
  const nazmCount = kalams.filter((k) => (k.type || "").toLowerCase() === "nazm").length;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .uk-root {
          --border-sm: rgba(255,255,255,0.05);
          --border-md: rgba(255,255,255,0.08);
          --text-pri: #f0ebe3;
          --text-sec: rgba(240,235,227,0.55);
          --text-ter: rgba(240,235,227,0.28);
          --gold: rgba(210,170,90,0.85);
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
        }

        /* ── Nav (matches Kalam.jsx) ───────────────── */
        .uk-nav {
          background: rgba(10,10,14,0.92);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 0.5px solid var(--border-sm);
          padding: 0 1.25rem;
          display: flex; align-items: center; justify-content: space-between;
          height: 52px; position: sticky; top: 0; z-index: 50;
        }
        .uk-brand { display: flex; align-items: center; gap: 9px; }
        .uk-logo {
          width: 30px; height: 30px; flex-shrink: 0;
          background: linear-gradient(135deg, #2d2060, #4a3580);
          border: 0.5px solid rgba(210,170,90,0.3); border-radius: 7px;
          display: flex; align-items: center; justify-content: center;
          color: rgba(210,170,90,0.9); font-size: 14px;
        }
        .uk-wordmark {
          font-family: 'Playfair Display', serif;
          font-size: 19px; font-weight: 700; font-style: italic;
          background: linear-gradient(135deg, #e8d5a3 0%, #c9a84c 50%, #f0d890 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .uk-nav-links { display: flex; align-items: center; gap: 2px; }
        .uk-nl {
          padding: 6px 12px; font-size: 11px; letter-spacing: 0.08em;
          color: var(--text-sec); border-radius: var(--r-md);
          cursor: pointer; border: none; background: transparent;
          transition: background 0.12s, color 0.12s; font-family: 'DM Mono', monospace;
          white-space: nowrap; min-height: 36px;
        }
        .uk-nl:hover  { background: rgba(255,255,255,0.04); color: var(--text-pri); }
        .uk-nl.active { color: rgba(210,170,90,0.9); background: rgba(180,140,50,0.1); }
        .uk-nav-right { display: flex; align-items: center; gap: 8px; }
        .uk-avatar {
          width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
          background: rgba(83,74,183,0.18); border: 0.5px solid rgba(210,170,90,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 500; color: rgba(210,170,90,0.8); cursor: pointer;
        }
        .uk-hamburger {
          display: none; flex-direction: column; justify-content: center;
          align-items: center; gap: 4px; width: 32px; height: 32px;
          background: transparent; border: none; cursor: pointer;
        }
        .uk-hamburger span { display: block; width: 18px; height: 1.5px; background: rgba(210,170,90,0.7); border-radius: 2px; }
        .uk-mobile-menu {
          position: fixed; top: 52px; left: 0; right: 0; z-index: 49;
          background: rgba(10,10,14,0.97); backdrop-filter: blur(20px);
          border-bottom: 0.5px solid rgba(210,170,90,0.1); padding: 0.5rem 0;
          display: flex; flex-direction: column;
        }
        .uk-mobile-menu .uk-nl { padding: 13px 1.25rem; font-size: 12px; border-radius: 0; border-bottom: 0.5px solid var(--border-sm); text-align: left; }

        .uk-btn-primary {
          background: linear-gradient(135deg, #4a3080, #3C3489, #5a3d9a);
          border: 0.5px solid rgba(180,140,80,0.25); border-radius: var(--r-md);
          padding: 8px 16px; font-size: 11px; color: rgba(240,220,160,0.95);
          cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
          font-family: 'DM Mono', monospace; letter-spacing: 0.1em;
          transition: opacity 0.12s, box-shadow 0.12s; text-decoration: none;
          box-shadow: 0 2px 12px rgba(100,60,180,0.25); white-space: nowrap;
        }
        .uk-btn-primary:hover { opacity: 0.88; box-shadow: 0 4px 20px rgba(100,60,180,0.4); }

        .uk-btn-ghost {
          background: transparent; border: 0.5px solid var(--border-md);
          border-radius: var(--r-md); padding: 6px 12px; font-size: 11px;
          color: var(--text-sec); cursor: pointer; display: inline-flex; align-items: center;
          gap: 5px; transition: all 0.12s; font-family: 'DM Mono', monospace;
          letter-spacing: 0.07em; text-decoration: none; white-space: nowrap;
        }
        .uk-btn-ghost:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.18); color: var(--text-pri); }

        /* ── Hero ──────────────────────────────────── */
        .uk-hero {
          position: relative; overflow: hidden;
          border-bottom: 0.5px solid rgba(180,140,80,0.15);
          padding: 2rem 0.5rem 1.75rem;
        }
        .uk-hero::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 90% 100% at 50% 0%,  rgba(100,50,160,0.22) 0%, transparent 65%),
            radial-gradient(ellipse 60% 80%  at 10% 50%, rgba(150,25,60,0.10)  0%, transparent 55%),
            radial-gradient(ellipse 50% 60%  at 90% 60%, rgba(190,130,20,0.07) 0%, transparent 50%);
        }
        .uk-hero::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg,
            transparent, rgba(180,140,80,0) 10%, rgba(200,160,80,0.5) 30%,
            rgba(220,180,100,0.8) 50%, rgba(200,160,80,0.5) 70%, rgba(180,140,80,0) 90%, transparent);
        }
        .uk-hero-inner {
          max-width: 1200px; margin: 0 auto; position: relative; z-index: 1;
          display: flex; align-items: flex-end; justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }
        .uk-eyebrow {
          font-size: 9px; color: rgba(210,170,90,0.75);
          letter-spacing: 0.4em; text-transform: uppercase; margin-bottom: 8px;
          display: flex; align-items: center; gap: 10px;
        }
        .uk-eyebrow::before, .uk-eyebrow::after {
          content: ''; display: inline-block; width: 20px; height: 0.5px;
          background: rgba(210,170,90,0.4);
        }
        @keyframes goldShimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        .uk-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 5.5vw, 54px);
          font-weight: 700; font-style: italic; line-height: 0.95; letter-spacing: -0.03em;
          background: linear-gradient(135deg, #e8d5a3 0%, #f5e6c0 18%, #c9a84c 35%, #f0d890 50%, #b8860b 65%, #e8d5a3 80%, #f5edd5 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          display: block; background-size: 200% auto;
          animation: goldShimmer 5s linear infinite;
          filter: drop-shadow(0 2px 20px rgba(200,160,60,0.18));
        }
        .uk-hero-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(12px, 2vw, 14px); color: rgba(240,235,220,0.3); font-style: italic;
          margin-top: 8px;
        }
        .uk-stats { display: flex; gap: 1.5rem; flex-shrink: 0; }
        .uk-stat { text-align: right; }
        .uk-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 3vw, 26px); font-weight: 400; line-height: 1;
          background: linear-gradient(135deg, #e8d5a3, #c9a84c);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .uk-stat-label { font-size: 9px; color: rgba(210,170,90,0.4); letter-spacing: 0.25em; text-transform: uppercase; margin-top: 3px; }
        .uk-stat-divider { width: 0.5px; align-self: stretch; background: rgba(210,170,90,0.12); margin: 2px 0; }

        /* ── Body ──────────────────────────────────── */
        .uk-body { max-width: 1400px; margin: 0 auto; padding: 1.75rem 0.5rem 4rem; }
        .uk-section-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-wrap: wrap; gap: 10px; }
        .uk-section-label {
          font-size: 9px; font-weight: 500; color: var(--text-ter);
          letter-spacing: 0.35em; text-transform: uppercase;
          display: flex; align-items: center; gap: 8px;
        }

        /* ── Grid ──────────────────────────────────── */
        /* flex instead of grid so NewKalam's own card width is preserved,
           not stretched/shrunk to fill a track */
        .uk-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .uk-grid > div {
          flex: 0 0 auto;
        }

        /* ── Loading ───────────────────────────────── */
        .uk-loading { text-align: center; padding: 100px 0; }
        .uk-loading-dots { font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(210,170,90,0.4); }
        .uk-loading-dots span { display: inline-block; animation: uk-blink 1.2s infinite; }
        .uk-loading-dots span:nth-child(2) { animation-delay: 0.2s; }
        .uk-loading-dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes uk-blink { 0%, 80%, 100% { opacity: 0.2; } 40% { opacity: 1; } }

        /* ── Empty state ───────────────────────────── */
        .uk-empty {
          text-align: center; padding: 90px 24px;
          border: 0.5px dashed rgba(210,170,90,0.18);
          border-radius: var(--r-lg);
          background: rgba(255,255,255,0.015);
        }
        .uk-empty-glyph {
          font-family: 'Playfair Display', serif;
          font-size: 48px; font-style: italic;
          background: linear-gradient(135deg, #e8d5a3, #c9a84c);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          opacity: 0.3; margin-bottom: 14px;
        }
        .uk-empty-text {
          font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase;
          color: rgba(255,255,255,0.2); margin-bottom: 20px;
        }

        /* ── Footer ────────────────────────────────── */
        .uk-footer {
          margin-top: 2.5rem; padding-top: 1.5rem;
          border-top: 0.5px solid rgba(210,170,90,0.1);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 10px;
        }
        .uk-footer-note { font-size: 10px; color: var(--text-ter); letter-spacing: 0.12em; }

        @media (max-width: 480px) {
          .uk-nav { padding: 0 1rem; }
          .uk-hero { padding: 1.5rem 1rem 1.25rem; }
          .uk-hero-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
          .uk-stats { justify-content: flex-start; }
          .uk-stat { text-align: left; }
          .uk-stat-divider { display: none; }
          .uk-body { padding: 1.25rem 1rem 3rem; }
          .uk-hamburger { display: flex; }
          .uk-nav-links { display: none; }
          .uk-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="uk-root">

        {/* ── Navbar ── */}
        <nav className="uk-nav">
          <div className="uk-brand">
            <div className="uk-logo">✦</div>
            <span className="uk-wordmark">Kalam</span>
          </div>
          <div className="uk-nav-links">
            {["Compose", "Collection", "Explore", "Analytics"].map((n) => (
              <button
                key={n}
                className={`uk-nl${activeNav === n ? " active" : ""}`}
                onClick={() => {
                  setActiveNav(n);
                  if (n === "Compose") navigate("/kalam");
                }}
              >
                {n}
              </button>
            ))}
          </div>
          <div className="uk-nav-right">
            <Link to="/kalam" className="uk-btn-primary" style={{ display: "none" }}>+ New Kalam</Link>
            <div className="uk-avatar">AK</div>
            <button className="uk-hamburger" onClick={() => setMobileMenuOpen((o) => !o)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="uk-mobile-menu">
            {["Compose", "Collection", "Explore", "Analytics"].map((n) => (
              <button
                key={n}
                className={`uk-nl${activeNav === n ? " active" : ""}`}
                onClick={() => {
                  setActiveNav(n);
                  setMobileMenuOpen(false);
                  if (n === "Compose") navigate("/kalam");
                }}
              >
                {n}
              </button>
            ))}
          </div>
        )}

        {/* ── Hero ── */}
        <div className="uk-hero">
          <div className="uk-hero-inner">
            <div>
              <div className="uk-eyebrow">Collection</div>
              <h1 className="uk-hero-title">Your Kalams</h1>
              <p className="uk-hero-sub">Har lafz jo tumne likha — ہر لفظ جو تم نے لکھا</p>
            </div>
            <div className="uk-stats">
              <div className="uk-stat">
                <div className="uk-stat-num">{loading ? "—" : kalams.length}</div>
                <div className="uk-stat-label">Kalams</div>
              </div>
              <div className="uk-stat-divider" />
              <div className="uk-stat">
                <div className="uk-stat-num">{loading ? "—" : ghazalCount}</div>
                <div className="uk-stat-label">Ghazals</div>
              </div>
              <div className="uk-stat-divider" />
              <div className="uk-stat">
                <div className="uk-stat-num">{loading ? "—" : nazmCount}</div>
                <div className="uk-stat-label">Nazms</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="uk-body">

          {loading ? (
            <div className="uk-loading">
              <div className="uk-loading-dots"><span>▪</span><span>▪</span><span>▪</span></div>
            </div>
          ) : kalams.length === 0 ? (
            <div className="uk-empty">
              <div className="uk-empty-glyph">✦</div>
              <p className="uk-empty-text">No kalams yet — start writing</p>
              <Link to="/kalam" className="uk-btn-primary">✦ Compose your first kalam</Link>
            </div>
          ) : (
            <>
              <div className="uk-section-row">
                <span className="uk-section-label">
                  {kalams.length} {kalams.length === 1 ? "entry" : "entries"} in your collection
                </span>
                <Link to="/kalam" className="uk-btn-primary">✦ New Kalam</Link>
              </div>

              <div className="uk-grid">
                {kalams.map((item) => (
                  <div key={item._id}>
                    <NewKalam
                      title={item.name}
                      content={item.content}
                      type={item.type}
                      imageSrc={item.customStyles?.imageSrc}
                      mUid={item.createdBy}
                      kalId={item._id}
                      customStyles={item.customStyles}
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="uk-footer">
            <span className="uk-footer-note">
              {!loading && kalams.length > 0 && "— Arif Karimi"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UrKalam;