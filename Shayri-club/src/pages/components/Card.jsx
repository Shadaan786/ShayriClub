
// import { useState, useRef, useEffect, useContext } from "react";
// import { MyContext, ContextProvider } from "../LikeContext";
// import { SocialContext } from "../Contexts/SocketContext";

// import { useNavigate } from "react-router-dom";
// export const Card = ({ kalam, userName, time, type, kalId, mUid }) => {
//   const [expanded, setExpanded] = useState(false);
//   const [liked, setLiked] = useState(false);
//   const [bookmarked, setBookmarked] = useState(false);
//   // const [kalamId, setKalamId] = useState("")
//   // const {kId, setKId} = useContext(MyContext);
//   const {send}  = useContext(SocialContext)
//   console.log("mUid", mUid)
//   console.log("kalId", kalId)
//   //  const socket  = new WebSocket("ws://localhost:8080?username=Bob")
//   const Navigate = useNavigate();



//   const HandleLike=()=>{

//     send(JSON.stringify({
//     "type": "kalam_like",

//     "payload":{
        
//         "uid": mUid,
//         "kalamUid": kalId
        
//     }
// }))
//   }
 

//   return (
//     <div className="w-full max-w-md  mb-6">
//       <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
        
//         {/* Glowing border effect */}
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        
//         {/* Main card background with glassmorphism */}
//         <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-slate-900/80 backdrop-blur-xl border border-white/10 group-hover:border-purple-400/40 transition-all duration-500">
          
//           {/* Subtle shimmer effect */}
//           <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
//           {/* Category badge - floating top right */}
//           <span className="
//             absolute top-4 right-4 z-20
//             px-3 py-1.5
//             rounded-full
//             text-xs font-bold uppercase tracking-wider
//             bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-violet-500/30
//             text-purple-200
//             border border-purple-400/40
//             backdrop-blur-md
//             shadow-lg shadow-purple-500/20
//           ">
//             {type}
//           </span>

//           {/* Content */}
//           <div className="relative z-10 p-6">

//             {/* Header - Author info */}
//             <div className="flex items-center gap-3 mb-5">
//               <div className="
//                 w-11 h-11 rounded-full
//                 bg-gradient-to-br from-purple-500 to-pink-500
//                 flex items-center justify-center
//                 text-white font-bold text-sm
//                 shadow-lg shadow-purple-500/30
//                 ring-2 ring-white/20
//               ">
//                 {userName?.charAt(0).toUpperCase()}
//               </div>

//               <div>
//                 <h3 className="font-semibold text-white/95 text-xl">
//                   {userName}
//                 </h3>
//                 <p className="text-xs text-purple-300/70">{time}</p>
//               </div>
//             </div>

//             {/* Poetry content */}
//             <div className="mb-5">
//               <p className={`
//                 text-white/90 text-base leading-relaxed
//                 break-words
//                 transition-all duration-500 ease-in-out
//                 ${expanded ? "" : "line-clamp-4"}
//               `}>
//                 {kalam}
//               </p>

//               {kalam.length > 120 && (
//                 <button
//                   onClick={() => setExpanded(!expanded)}
//                   className="
//                     mt-3 text-sm 
//                     bg-gradient-to-r from-purple-400 to-pink-400
//                     text-transparent bg-clip-text
//                     hover:from-purple-300 hover:to-pink-300
//                     transition-all duration-200 
//                     font-semibold
//                     flex items-center gap-1
//                   "
//                 >
//                   {expanded ? (
//                     <>Show less <span className="text-xs">▲</span></>
//                   ) : (
//                     <>Show more <span className="text-xs">▼</span></>
//                   )}
//                 </button>
//               )}
//             </div>

//             {/* Footer - Action buttons */}
//             <div className="pt-4 border-t border-white/10">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-1">

//                   {/* Like button */}
//                   <button
//                     onClick={() => {
//                       setLiked(!liked);
//                       // setKId(mUid);
//                       HandleLike()
                    

  
                    
//                     }}
//                     className={`
//                       p-2 rounded-lg transition-all duration-300
//                       hover:scale-110 active:scale-95
//                       ${liked 
//                         ? "text-rose-400 bg-rose-500/20 shadow-lg shadow-rose-500/30" 
//                         : "text-white/70 hover:text-rose-400 hover:bg-rose-500/10"
//                       }
//                     `}
//                     title="Like"
//                   >
//                     <svg className="w-5 h-5" fill={liked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                     </svg>
//                   </button>

//                   {/* Comment button */}
//                   <button onClick={()=>Navigate(`/comment?kalamId=${kalId}`)}


                  
                 
//                  className="    p-2 rounded-lg 
//                     text-white/70 hover:text-cyan-400 hover:bg-cyan-500/10
//                     transition-all duration-300
//                     hover:scale-110 active:scale-95
//                   " title="Comment">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                         d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                     </svg>
//                   </button>

//                   {/* Share button */}
//                   <button className="
//                     p-2 rounded-lg 
//                     text-white/70 hover:text-emerald-400 hover:bg-emerald-500/10
//                     transition-all duration-300
//                     hover:scale-110 active:scale-95
//                   " title="Share">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                         d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//                     </svg>
//                   </button>
//                 </div>

//                 {/* Bookmark button */}
//                 <button
//                   onClick={() => setBookmarked(!bookmarked)}
//                   className={`
//                     p-2 rounded-lg transition-all duration-300
//                     hover:scale-110 active:scale-95
//                     ${bookmarked 
//                       ? "text-amber-400 bg-amber-500/20 shadow-lg shadow-amber-500/30" 
//                       : "text-white/70 hover:text-amber-400 hover:bg-amber-500/10"
//                     }
//                   `}
//                   title="Bookmark"
//                 >
//                   <svg className="w-5 h-5" fill={bookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                       d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };





//-------------------------------------------------------------------------------------------------------------------------------------------------------------------->
import { useState, useContext, useRef, useEffect, useMemo } from "react";
import { SocialContext } from "../Contexts/SocketContext";
import { useNavigate } from "react-router-dom";

/* ── inject keyframes once ── */
const styleTag = document.createElement("style");
styleTag.textContent = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.15; transform: scale(1); }
    50%       { opacity: 0.9;  transform: scale(1.4); }
  }
  @keyframes drift {
    0%   { transform: translateY(0px) translateX(0px); }
    33%  { transform: translateY(-4px) translateX(2px); }
    66%  { transform: translateY(2px) translateX(-2px); }
    100% { transform: translateY(0px) translateX(0px); }
  }
  @keyframes pulseGlow {
    0%, 100% { opacity: 0.45; }
    50%       { opacity: 0.75; }
  }
  @keyframes borderShimmer {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes likePoP {
    0%   { transform: scale(1); }
    40%  { transform: scale(1.5); }
    70%  { transform: scale(0.9); }
    100% { transform: scale(1); }
  }
  .like-pop { animation: likePoP 0.35s ease forwards; }

  /* ── Mobile-only overrides (no changes to web view) ── */
  @media (max-width: 480px) {
    .kalam-card-root {
      max-width: 100% !important;
    }
    .kalam-card-shell {
      border-radius: 12px !important;
    }
    .kalam-card-header {
      padding: 12px 14px 0 !important;
    }
    .kalam-card-avatar {
      width: 28px !important;
      height: 28px !important;
      font-size: 11px !important;
    }
    .kalam-card-username {
      font-size: 12px !important;
      max-width: 120px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .kalam-card-pill {
      padding: 3px 8px !important;
    }
    .kalam-card-pill-label {
      font-size: 9px !important;
    }
    .kalam-card-divider {
      margin: 10px 14px 0 !important;
    }
    .kalam-card-body {
      padding: 12px 14px 0 !important;
    }
    .kalam-card-quote-mark {
      font-size: 38px !important;
      margin-bottom: 6px !important;
    }
    .kalam-card-text {
      font-size: 14px !important;
      line-height: 1.7 !important;
    }
    .kalam-card-show-more {
      min-height: 36px;
    }
    .kalam-card-footer {
      margin: 10px 14px 0 !important;
      padding-top: 10px !important;
      padding-bottom: 12px !important;
    }
    .kalam-action-btn {
      width: 38px !important;
      height: 38px !important;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    }
  }
`;
if (!document.head.querySelector("#card-keyframes")) {
  styleTag.id = "card-keyframes";
  document.head.appendChild(styleTag);
}

/* ── helpers ── */
const typeColor = (t) => {
  const m = {
    ghazal:  "#a78bfa",
    nazm:    "#67e8f9",
    rubai:   "#f472b6",
    marsiya: "#4ade80",
    hamd:    "#fbbf24",
    naat:    "#fb923c",
    qasida:  "#e879f9",
  };
  return m[(t || "").toLowerCase()] || "#a78bfa";
};

const fmtTime = (iso) => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    day: "numeric", month: "short", year: "numeric",
  });
};

/* deterministic star positions — grid-based for even distribution */
const makeStars = (count, seed) => {
  const rand = (s) => {
    const x = Math.sin(s + 1) * 43758.5453;
    return x - Math.floor(x);
  };
  const cols  = 6;
  const rows  = Math.ceil(count / cols);
  const cellW = 100 / cols;
  const cellH = 100 / rows;
  return Array.from({ length: count }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const jx  = rand(seed + i * 3.1 + 1) * cellW * 0.80;
    const jy  = rand(seed + i * 5.7 + 2) * cellH * 0.80;
    return {
      x:     col * cellW + jx,
      y:     row * cellH + jy,
      size:  rand(seed + i * 7.3)  * 2 + 1,
      delay: rand(seed + i * 11.9) * 4,
      dur:   rand(seed + i * 13.1) * 3 + 2,
      drift: rand(seed + i * 17.3) * 6 + 3,
    };
  });
};


export const Card = ({ kalam, userName, time, type, kalId, mUid }) => {
  const [expanded,   setExpanded]   = useState(false);
  const [liked,      setLiked]      = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeAnim,   setLikeAnim]   = useState(false);
  const [hovered,    setHovered]    = useState(false);

  const { send }  = useContext(SocialContext);
  const Navigate  = useNavigate();
  const accent    = typeColor(type);
  const label     = type ? type.charAt(0).toUpperCase() + type.slice(1).toLowerCase() : "Kalam";
  const initial   = userName?.charAt(0)?.toUpperCase() || "?";
  const isLong    = kalam && kalam.length > 120;

  /* stable stars — won't re-randomise on re-render */
  const stars = useMemo(() => makeStars(18, kalId ? kalId.charCodeAt(0) : 42), [kalId]);

  const HandleLike = () => {
    send(JSON.stringify({
      type: "kalam_like",
      payload: { uid: mUid, kalamUid: kalId },
    }));
  };

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeAnim(true);
    setTimeout(() => setLikeAnim(false), 400);
    HandleLike();
  };

  return (
    <div
      className="kalam-card-root"
      style={{ width: "100%", maxWidth: 480, fontFamily: "'Outfit', sans-serif", position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* ── Outer glow halo (behind card) ── */}
      <div style={{
        position: "absolute",
        inset: -1,
        borderRadius: 18,
        background: `radial-gradient(ellipse at 50% 0%, ${accent}30 0%, transparent 70%)`,
        opacity: hovered ? 1 : 0.4,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
        filter: "blur(8px)",
        animation: "pulseGlow 3s ease-in-out infinite",
      }} />

      {/* ── Card shell ── */}
      <div
        className="kalam-card-shell"
        style={{
          background: "#0e0e0e",
          border: `1px solid ${hovered ? accent + "40" : "rgba(255,255,255,0.07)"}`,
          borderRadius: 16,
          overflow: "hidden",
          position: "relative",
          transition: "border-color 0.35s ease",
          boxShadow: hovered
            ? `0 0 0 1px ${accent}18, 0 8px 40px ${accent}20, 0 2px 12px rgba(0,0,0,0.6)`
            : "0 2px 12px rgba(0,0,0,0.5)",
        }}>

        {/* ── Stars layer ── */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", borderRadius: 16 }}>
          {stars.map((s, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left:   `${s.x}%`,
                top:    `${s.y}%`,
                width:  s.size,
                height: s.size,
                borderRadius: "50%",
                background: "#fff",
                boxShadow: `0 0 ${s.size * 2}px ${s.size}px ${accent}80`,
                animation: `twinkle ${s.dur}s ${s.delay}s ease-in-out infinite,
                             drift   ${s.drift}s ${s.delay * 0.5}s ease-in-out infinite`,
                opacity: 0.15,
              }}
            />
          ))}
        </div>

        {/* ── Top accent line ── */}
        <div style={{
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${accent} 40%, ${accent} 60%, transparent 100%)`,
          opacity: hovered ? 1 : 0.6,
          transition: "opacity 0.35s",
          boxShadow: `0 0 10px 1px ${accent}70`,
        }} />

        {/* ── Corner glow blobs ── */}
        <div style={{
          position: "absolute", top: -20, right: -20,
          width: 120, height: 120, borderRadius: "50%",
          background: `radial-gradient(circle, ${accent}20 0%, transparent 70%)`,
          pointerEvents: "none",
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.4s",
        }} />
        <div style={{
          position: "absolute", bottom: -30, left: -20,
          width: 100, height: 100, borderRadius: "50%",
          background: `radial-gradient(circle, ${accent}14 0%, transparent 70%)`,
          pointerEvents: "none",
          opacity: hovered ? 0.8 : 0.3,
          transition: "opacity 0.4s",
        }} />

        {/* ── Header ── */}
        <div
          className="kalam-card-header"
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "16px 20px 0", position: "relative", zIndex: 2,
          }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Avatar with glow */}
            <div
              className="kalam-card-avatar"
              style={{
                width: 34, height: 34, borderRadius: "50%",
                background: `linear-gradient(135deg, ${accent}33, ${accent}18)`,
                border: `1px solid ${accent}55`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 600, color: accent,
                flexShrink: 0,
                boxShadow: `0 0 10px ${accent}40`,
              }}>
              {initial}
            </div>
            <div>
              <p className="kalam-card-username" style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.80)", lineHeight: 1.2 }}>
                {userName}
              </p>
              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.22)", marginTop: 2, fontVariantNumeric: "tabular-nums" }}>
                {fmtTime(time)}
              </p>
            </div>
          </div>

          {/* Category pill with glow */}
          <div
            className="kalam-card-pill"
            style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              padding: "4px 10px", borderRadius: 99,
              background: `${accent}14`,
              border: `1px solid ${accent}35`,
              boxShadow: `0 0 8px ${accent}30`,
            }}>
            <div style={{
              width: 5, height: 5, borderRadius: "50%",
              background: accent, opacity: 0.9,
              boxShadow: `0 0 5px 2px ${accent}80`,
            }} />
            <span className="kalam-card-pill-label" style={{ fontSize: 10, fontWeight: 600, color: accent, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {label}
            </span>
          </div>
        </div>

        {/* ── Divider with glow ── */}
        <div
          className="kalam-card-divider"
          style={{
            margin: "14px 20px 0", height: 1,
            background: `linear-gradient(90deg, transparent, ${accent}20, transparent)`,
          }} />

        {/* ── Poetry content ── */}
        <div className="kalam-card-body" style={{ padding: "18px 20px 0", position: "relative", zIndex: 2 }}>
          <div
            className="kalam-card-quote-mark"
            style={{
              fontSize: 52, lineHeight: 0.7, color: accent,
              opacity: 0.22, fontFamily: "Georgia, serif",
              marginBottom: 8, userSelect: "none",
              textShadow: `0 0 20px ${accent}60`,
            }}>
            "
          </div>

          <p
            className="kalam-card-text"
            style={{
              fontSize: 15, lineHeight: 1.8,
              color: "rgba(255,255,255,0.72)",
              whiteSpace: "pre-wrap", wordBreak: "break-word",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: expanded ? "unset" : 4,
              overflow: expanded ? "visible" : "hidden",
              transition: "all 0.3s ease",
              fontWeight: 300, letterSpacing: "0.01em",
            }}>
            {kalam}
          </p>

          {isLong && (
            <button
              className="kalam-card-show-more"
              onClick={() => setExpanded(!expanded)}
              style={{
                marginTop: 10, background: "none", border: "none", cursor: "pointer",
                fontSize: 11, fontWeight: 600, color: accent, opacity: 0.8,
                letterSpacing: "0.08em", textTransform: "uppercase", padding: 0,
                display: "flex", alignItems: "center", gap: 4, transition: "opacity 0.15s",
                textShadow: `0 0 8px ${accent}80`,
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.8}
            >
              {expanded ? "Show less ▲" : "Show more ▼"}
            </button>
          )}
        </div>

        {/* ── Footer ── */}
        <div
          className="kalam-card-footer"
          style={{
            margin: "16px 20px 0", paddingTop: 12, paddingBottom: 16,
            borderTop: `1px solid ${accent}12`,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            position: "relative", zIndex: 2,
          }}>
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>

            {/* Like with pop animation */}
            <ActionBtn active={liked} activeColor="#f43f5e" activeBg="rgba(244,63,94,0.12)"
              title="Like" onClick={handleLikeClick} extraClass={likeAnim ? "like-pop" : ""}>
              <svg width="17" height="17" viewBox="0 0 24 24"
                fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </ActionBtn>

            <ActionBtn activeColor="#22d3ee" activeBg="rgba(34,211,238,0.10)"
              title="Comment" onClick={() => Navigate(`/comment?kalamId=${kalId}`)}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </ActionBtn>

            <ActionBtn activeColor="#34d399" activeBg="rgba(52,211,153,0.10)"
              title="Share" onClick={() => {}}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
              </svg>
            </ActionBtn>
          </div>

          <ActionBtn active={bookmarked} activeColor="#f59e0b" activeBg="rgba(245,158,11,0.12)"
            title="Bookmark" onClick={() => setBookmarked(!bookmarked)}>
            <svg width="17" height="17" viewBox="0 0 24 24"
              fill={bookmarked ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
            </svg>
          </ActionBtn>
        </div>

      </div>
    </div>
  );
};


/* ── Reusable action button ── */
const ActionBtn = ({ children, onClick, title, active, activeColor, activeBg, extraClass }) => {
  const [hov, setHov] = useState(false);
  const isOn = active || hov;
  return (
    <button
      onClick={onClick}
      title={title}
      className={`kalam-action-btn${extraClass ? ` ${extraClass}` : ""}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 34, height: 34, borderRadius: 8, border: "none",
        background: isOn ? activeBg : "none",
        color: isOn ? activeColor : "rgba(255,255,255,0.35)",
        cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.15s, color 0.15s, transform 0.12s",
        transform: hov ? "scale(1.12)" : "scale(1)",
        boxShadow: isOn ? `0 0 10px ${activeColor}50` : "none",
        filter: isOn ? `drop-shadow(0 0 4px ${activeColor}80)` : "none",
      }}
    >
      {children}
    </button>
  );
};