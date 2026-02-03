
import { useState, useRef, useEffect, useContext } from "react";
import { MyContext, ContextProvider } from "../LikeContext";
import { SocialContext } from "../Contexts/SocketContext";

import { useNavigate } from "react-router-dom";
export const Card = ({ kalam, userName, time, type, kalId, mUid }) => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  // const [kalamId, setKalamId] = useState("")
  // const {kId, setKId} = useContext(MyContext);
  const {send}  = useContext(SocialContext)
  console.log("mUid", mUid)
  console.log("kalId", kalId)
  //  const socket  = new WebSocket("ws://localhost:8080?username=Bob")
  const Navigate = useNavigate();



  const HandleLike=()=>{

    send(JSON.stringify({
    "type": "kalam_like",

    "payload":{
        
        "uid": mUid,
        "kalamUid": kalId
        
    }
}))
  }
 

  return (
    <div className="w-full max-w-md  mb-6">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        
        {/* Main card background with glassmorphism */}
        <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-slate-900/80 backdrop-blur-xl border border-white/10 group-hover:border-purple-400/40 transition-all duration-500">
          
          {/* Subtle shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Category badge - floating top right */}
          <span className="
            absolute top-4 right-4 z-20
            px-3 py-1.5
            rounded-full
            text-xs font-bold uppercase tracking-wider
            bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-violet-500/30
            text-purple-200
            border border-purple-400/40
            backdrop-blur-md
            shadow-lg shadow-purple-500/20
          ">
            {type}
          </span>

          {/* Content */}
          <div className="relative z-10 p-6">

            {/* Header - Author info */}
            <div className="flex items-center gap-3 mb-5">
              <div className="
                w-11 h-11 rounded-full
                bg-gradient-to-br from-purple-500 to-pink-500
                flex items-center justify-center
                text-white font-bold text-sm
                shadow-lg shadow-purple-500/30
                ring-2 ring-white/20
              ">
                {userName?.charAt(0).toUpperCase()}
              </div>

              <div>
                <h3 className="font-semibold text-white/95 text-xl">
                  {userName}
                </h3>
                <p className="text-xs text-purple-300/70">{time}</p>
              </div>
            </div>

            {/* Poetry content */}
            <div className="mb-5">
              <p className={`
                text-white/90 text-base leading-relaxed
                break-words
                transition-all duration-500 ease-in-out
                ${expanded ? "" : "line-clamp-4"}
              `}>
                {kalam}
              </p>

              {kalam.length > 120 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="
                    mt-3 text-sm 
                    bg-gradient-to-r from-purple-400 to-pink-400
                    text-transparent bg-clip-text
                    hover:from-purple-300 hover:to-pink-300
                    transition-all duration-200 
                    font-semibold
                    flex items-center gap-1
                  "
                >
                  {expanded ? (
                    <>Show less <span className="text-xs">▲</span></>
                  ) : (
                    <>Show more <span className="text-xs">▼</span></>
                  )}
                </button>
              )}
            </div>

            {/* Footer - Action buttons */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">

                  {/* Like button */}
                  <button
                    onClick={() => {
                      setLiked(!liked);
                      // setKId(mUid);
                      HandleLike()
                    

  
                    
                    }}
                    className={`
                      p-2 rounded-lg transition-all duration-300
                      hover:scale-110 active:scale-95
                      ${liked 
                        ? "text-rose-400 bg-rose-500/20 shadow-lg shadow-rose-500/30" 
                        : "text-white/70 hover:text-rose-400 hover:bg-rose-500/10"
                      }
                    `}
                    title="Like"
                  >
                    <svg className="w-5 h-5" fill={liked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>

                  {/* Comment button */}
                  <button onClick={()=>Navigate(`/comment?kalamId=${kalId}`)}


                  
                 
                 className="    p-2 rounded-lg 
                    text-white/70 hover:text-cyan-400 hover:bg-cyan-500/10
                    transition-all duration-300
                    hover:scale-110 active:scale-95
                  " title="Comment">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>

                  {/* Share button */}
                  <button className="
                    p-2 rounded-lg 
                    text-white/70 hover:text-emerald-400 hover:bg-emerald-500/10
                    transition-all duration-300
                    hover:scale-110 active:scale-95
                  " title="Share">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>

                {/* Bookmark button */}
                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`
                    p-2 rounded-lg transition-all duration-300
                    hover:scale-110 active:scale-95
                    ${bookmarked 
                      ? "text-amber-400 bg-amber-500/20 shadow-lg shadow-amber-500/30" 
                      : "text-white/70 hover:text-amber-400 hover:bg-amber-500/10"
                    }
                  `}
                  title="Bookmark"
                >
                  <svg className="w-5 h-5" fill={bookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
