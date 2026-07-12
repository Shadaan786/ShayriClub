import { useState } from "react";

/**
 * BookmarkIcon
 *
 * A bookmark icon whose fill/color changes based on saved state,
 * with a little pop/bounce animation when it becomes saved.
 *
 * Usage (self-contained, toggles on click):
 *   <BookmarkIcon />
 *
 * Usage (controlled from a parent / your own save logic):
 *   <BookmarkIcon isSaved={isSaved} onClick={handleSave} />
 */
export default function BookmarkIcon({
  size = 24,
  isSaved: isSavedProp,
  onClick,
  savedColor = "#22c55e",
  defaultColor = "currentColor",
}) {
  const isControlled = isSavedProp !== undefined;
  const [internalSaved, setInternalSaved] = useState(false);
  const isSaved = isControlled ? isSavedProp : internalSaved;

  const handleClick = (e) => {
    if (!isControlled) {
      setInternalSaved((prev) => !prev);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <>
      <style>{`
        @keyframes bookmarkPop {
          0%   { transform: scale(1); }
          35%  { transform: scale(1.35); }
          60%  { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        .bookmark-icon-saved {
          animation: bookmarkPop 0.4s ease;
        }
      `}</style>
      <svg
        onClick={handleClick}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={isSaved ? savedColor : "none"}
        stroke={isSaved ? savedColor : defaultColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={isSaved ? "bookmark-icon-saved" : ""}
        style={{
          cursor: "pointer",
          transition: "stroke 0.2s ease, fill 0.2s ease",
          transformOrigin: "center",
        }}
        role="button"
        aria-pressed={isSaved}
        aria-label={isSaved ? "Bookmarked" : "Bookmark"}
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    </>
  );
}