import { useState } from "react";


export const Card = ({ kalam, userName, time, type }) => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full max-w-md mx-10 mb-6">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">

        {/* 🔥 Animated Gradient Background */}
        <div className="absolute inset-0 animated-gradient" />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 p-6 rounded-2xl">

          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="
              w-10 h-10 rounded-full
              bg-white/20 backdrop-blur
              flex items-center justify-center
              text-white font-bold text-sm
            ">
              {userName?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                {userName}
              </h3>
              <p className="text-xs text-white/70">{time}</p>
            </div>
          </div>

          {/* Content (READ MORE LOGIC UNTOUCHED) */}
          <div className="mb-5">
            <p
              className={`
                text-white/90 text-base leading-relaxed
                break-words
                transition-all duration-500 ease-in-out
                ${expanded ? "" : "line-clamp-4"}
              `}
            >
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

          {/* Footer */}
          <div className="pt-4 border-t border-white/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1">

                {/* Like */}
                <button
                  onClick={() => setLiked(!liked)}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    liked
                      ? "text-rose-400 bg-white/10"
                      : "text-white/80 hover:bg-white/10 hover:text-rose-400"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Comment */}
                <button className="p-2 rounded-lg text-white/80 hover:bg-white/10 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>

                {/* Share */}
                <button className="p-2 rounded-lg text-white/80 hover:bg-white/10 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3.0 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>

              {/* Bookmark */}
              <button className="p-2 rounded-lg text-white/80 hover:bg-white/10 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>

            {/* Category */}
             <span
          className="
            absolute top-4 right-4
            px-3 py-1
            rounded-full
            text-xs font-semibold uppercase tracking-wide
            bg-blue-500/20
            text-blue-300
            border border-blue-400/30
            backdrop-blur-md
          "
        >
          {type}
        </span>
          </div>

        </div>
      </div>
    </div>
  );
};
