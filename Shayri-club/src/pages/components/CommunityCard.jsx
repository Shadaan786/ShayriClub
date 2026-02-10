import { useState, useEffect } from "react";

export const CommunityCard = ({ communityName, bio, category, members = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Format member count
  const formatMembers = (count) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  // Get category colors
  const getCategoryColors = (cat) => {
    const colors = {
      Design: "from-pink-500/20 to-purple-500/20 border-pink-500/40 text-pink-300",
      Technology: "from-blue-500/20 to-cyan-500/20 border-blue-500/40 text-cyan-300",
      Business: "from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300",
      Marketing: "from-green-500/20 to-emerald-500/20 border-green-500/40 text-emerald-300",
    };
    return colors[cat] || "from-purple-500/20 to-blue-500/20 border-purple-500/40 text-purple-300";
  };

  return (
    <div
      className="group relative w-full  rounded-2xl bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-md border border-slate-700/60 p-5 pb-4 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.01] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glowing orb effect */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          {/* Community name with enhanced gradient and glow */}
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-300 to-blue-400 bg-clip-text text-transparent drop-shadow-sm">
              {communityName}
            </h3>
          </div>

          {/* Bio with better readability */}
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-2 mb-3">
            {bio}
          </p>

          {/* Members count with icon */}
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-medium">{formatMembers(members)} members</span>
            </div>
          </div>
        </div>

        {/* Enhanced action button */}
        <button
          className={`relative flex-shrink-0 py-2.5 px-5 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden ${
            isHovered
              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/50 scale-105"
              : "bg-slate-800/90 text-slate-300 border border-slate-600/50 hover:border-slate-500"
          }`}
        >
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse opacity-20" />
          )}
          <span className="relative">Join</span>
        </button>
      </div>

      {/* Category tag at bottom */}
      <div className="relative flex items-center pt-3 border-t border-slate-700/50">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${getCategoryColors(category)} border backdrop-blur-sm`}>
          <div className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
          <span className="text-xs font-semibold">{category}</span>
        </div>
      </div>

      {/* Enhanced bottom accent line with animation */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/60 to-blue-500/0 rounded-b-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};
