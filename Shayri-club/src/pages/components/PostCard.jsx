import { useState } from "react";
import NewKalam2 from "./NewKalam2";
import { useNavigate } from "react-router-dom";
import { KalamComment } from "../KalamComment";

/**
 * PostCard — fully self-contained, no external CSS framework or icon font required.
 * All styling lives in the <style> block below (plain CSS) and all icons are inline SVG,
 * so this drops into any React project with zero setup.
 *
 * Comments now live directly on the card instead of a global modal:
 *  - Desktop (>=768px): clicking "Comments" expands an inline panel below the card
 *    (accordion), pushing the rest of the feed down.
 *  - Mobile (<768px): the same panel renders as a bottom sheet that slides up over
 *    a dimmed backdrop.
 * Both layouts share one markup tree — a single CSS media query switches the
 * backdrop/panel from "fixed overlay" to "static inline block", so there's no
 * JS breakpoint detection and no duplicated comment logic.
 */

const styles = `

.pc-wrapper *, .pc-wrapper *::before, .pc-wrapper *::after {
  box-sizing: border-box;
}
.pc-card {
  width: 100%;
  max-width: 672px;
  border-radius: 20px;
  padding: 18px 20px;
  position: relative;
  overflow: hidden;
  background: rgba(30, 31, 35, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
   border: 2px solid rgba(255, 255, 255, 0.5);
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease;
}
.pc-card:hover {
  box-shadow: 0 8px 32px rgba(242, 202, 80, 0.06);
}
.pc-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.pc-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.pc-avatar {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  overflow: hidden;
  border: 1px solid rgba(77, 70, 53, 0.3);
  flex-shrink: 0;
  background: #292a2e;
}
.pc-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.pc-name-row {
  display: flex;
  align-items: center;
  gap: 6px;
}
.pc-name {
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #e3e2e7;
  margin: 0;
}
.pc-verified {
  color: #f2ca50;
  flex-shrink: 0;
}
.pc-timestamp {
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #d0c5af;
  margin: 2px 0 0 0;
}
.pc-icon-btn {
  color: #d0c5af;
  background: transparent;
  border: none;
  padding: 8px;
  border-radius: 9999px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease, background-color 0.2s ease;
}
.pc-icon-btn:hover {
  color: #f2ca50;
  background: #292a2e;
}
.pc-text {
  font-family: Georgia, 'Times New Roman', serif;
  font-style: italic;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #f2efe8;
  margin: 4px 0 0 0;
  padding: 0 4px;
}
.pc-text.pc-text-with-embed {
  margin-bottom: 14px;
}
.pc-text p {
  margin: 0 0 6px 0;
}
.pc-text p:last-child {
  margin-bottom: 0;
}
.pc-embed {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  gap: 12px;
  border: 1px solid rgba(77, 70, 53, 0.25);
  border-radius: 12px;
  overflow: hidden;
  background: rgba(26, 27, 31, 0.5);
  cursor: pointer;
  padding: 10px;
  transition: border-color 0.3s ease;
}
.pc-embed:hover {
  border-color: rgba(242, 202, 80, 0.3);
}
.pc-embed:hover .pc-embed-img {
  transform: scale(1.05);
}
.pc-embed-media {
  position: relative;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
}
.pc-embed-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.7s ease;
}
.pc-embed-body {
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  flex: 1;
}
.pc-embed-title {
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #e3e2e7;
  margin: 0 0 2px 0;
  font-weight: 500;
  text-align: left;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pc-embed-desc {
  font-size: 12px;
  line-height: 16px;
  color: #d0c5af;
  margin: 0 0 6px 0;
  text-align: left;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pc-cta {
  align-self: flex-start;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #f2ca50;
  color: #3c2f00;
  border: none;
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 10px;
  line-height: 14px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(242, 202, 80, 0.2);
  transition: background-color 0.2s ease;
}
.pc-cta:hover {
  background: #d4af37;
}
.pc-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  margin-top: 16px;
  border-top: 2px solid rgba(255, 255, 255, 0.2);
}
.pc-footer-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.pc-metric-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: #d0c5af;
  cursor: pointer;
  padding: 4px;
  font-size: 12px;
  line-height: 16px;
  transition: color 0.2s ease;
}
.pc-metric-btn:hover {
  color: #f2ca50;
}
.pc-metric-btn.pc-metric-active {
  color: #f2ca50;
}
.pc-metric-btn svg {
  transition: transform 0.2s ease;
}
.pc-metric-btn:hover svg {
  transform: translateY(-2px);
}

/* ---------------- Comments: bottom sheet (mobile) / inline expand (desktop) ---------------- */

.pc-comments-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.pc-comments-panel {
  width: 100%;
  max-width: 480px;
  max-height: 75vh;
  background: #1a1b1f;
  border: 1px solid rgba(212, 175, 55, 0.15);
  border-bottom: none;
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: pc-sheet-up 0.25s ease-out;
}
@keyframes pc-sheet-up {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
.pc-comments-handle {
  width: 36px;
  height: 4px;
  background: rgba(212, 175, 55, 0.3);
  border-radius: 2px;
  margin: 10px auto 2px;
  flex-shrink: 0;
}
.pc-comments-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px 12px 16px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.12);
  flex-shrink: 0;
}
.pc-comments-title {
  font-family: Georgia, 'Times New Roman', serif;
  font-style: italic;
  font-size: 16px;
  color: #e3e2e7;
  margin: 0;
}
.pc-comments-body {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
}

@media (min-width: 768px) {
  .pc-comments-backdrop {
    position: static;
    inset: auto;
    z-index: auto;
    background: transparent;
    display: block;
  }
  .pc-comments-panel {
    max-width: none;
    width: 100%;
    max-height: 480px;
    margin-top: 16px;
    border-radius: 12px;
    border: 1px solid rgba(212, 175, 55, 0.15);
    animation: pc-inline-expand 0.2s ease-out;
  }
  .pc-comments-handle {
    display: none;
  }
  .pc-comments-header {
    padding: 14px 20px;
  }
}
@keyframes pc-inline-expand {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

/* ---------- Inline icon components (no external font/library needed) ---------- */

const VerifiedIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 1l2.6 2.3 3.4-.6 1 3.3 3.1 1.5-.9 3.4 1.9 2.9-2.7 2.2.3 3.5-3.5.2-1.7 3.1L12 21.6l-3.5 1.2-1.7-3.1-3.5-.2.3-3.5-2.7-2.2 1.9-2.9-.9-3.4L4 6.5l1-3.3 3.4.6L12 1z" />
    <path d="M9.5 12.5l1.8 1.8 3.4-3.9" fill="none" stroke="#121317" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MoreIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
);

const PlayIcon = (props) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const HeartIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 21s-6.7-4.35-9.3-8.2C1 10.1 1.6 6.6 4.6 5.1c2.3-1.15 4.7-.3 6 1.5.5.7 1 .9 1.4 0 1.3-1.8 3.7-2.65 6-1.5 3 1.5 3.6 5 1.9 7.7C18.7 16.65 12 21 12 21z" />
  </svg>
);

const CommentIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4 4h16a1 1 0 011 1v11a1 1 0 01-1 1H8l-4.5 4V5a1 1 0 011-1z" />
  </svg>
);

const ShareIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);

const CloseIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* Splits post text into sentence lines and wraps the whole block in quote marks,
   matching the centered italic "quote" style. */
const QuotedText = ({ text }) => {
  const sentences = text
    .split(/(?<=[.?!])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (sentences.length === 0) return null;

  return (
    <>
      {sentences.map((sentence, i) => {
        const isFirst = i === 0;
        const isLast = i === sentences.length - 1;
        return (
          <p key={i}>
            {isFirst && "\u201C"}
            {sentence}
            {isLast && "\u201D"}
          </p>
        );
      })}
    </>
  );
};

/* ---------------------------------------------------------------------------- */

export default function PostCard({
  authorName,
  authorAvatarUrl,
  timestamp,
  verified,
  postText,
  embed,
  likeCount,
  commentCount,
  onLikeClick,
  onCommentClick,
  onShareClick,
  onMoreClick,
  isAlbumAvailable,
  isKalamAvailable,
  customStyles,
  title,
  content,
  muid,
  kalId,
  isLiked2,
  isSaved,
  albumId,
  kalamId,
  index,
  postId,
}) {
  // Album embed fields (embed.imageUrl / embed.title / embed.description) are only
  // relevant — and only rendered — when isAlbumAvailable is true.
  const showAlbum = isAlbumAvailable && !!embed;
  // Kalam is rendered instead whenever it's available and there's no album to show.
  const showKalam = !isAlbumAvailable && isKalamAvailable;
  const Navigate = useNavigate();

  // Comments now live on the card itself instead of a shared modal/context.
  const [commentsOpen, setCommentsOpen] = useState(false);

  const toggleComments = () => {
    setCommentsOpen((open) => !open);
    onCommentClick?.();
  };

  return (
    <div className="pc-wrapper">
      <style>{styles}</style>
      <article className="pc-card">
        {/* Header */}
        <header className="pc-header">
          <div className="pc-header-left">
            <div className="pc-avatar">
              <img alt={`${authorName} profile`} src={authorAvatarUrl} />
            </div>
            <div>
              <div className="pc-name-row">
                <h3 className="pc-name">{authorName}</h3>
                {verified && <VerifiedIcon className="pc-verified" />}
              </div>
              <p className="pc-timestamp">{timestamp}</p>
            </div>
          </div>
          <button aria-label="More options" onClick={onMoreClick} className="pc-icon-btn">
            <MoreIcon />
          </button>
        </header>

        {/* Main content */}
        <div className={`pc-text${showAlbum || showKalam ? " pc-text-with-embed" : ""}`}>
          <QuotedText text={postText} />
        </div>

        {/* Album embed — only when isAlbumAvailable is true */}
        {showAlbum && (
          <div className="pc-embed" onClick={embed?.onCtaClick}>
            <div className="pc-embed-media">
              <img className="pc-embed-img" alt={`${embed.title} cover`} src={embed.imageUrl} />
            </div>
            <div className="pc-embed-body">
              <h4 className="pc-embed-title">{embed.title}</h4>
              <p className="pc-embed-desc">{embed.description}</p>
              <button
                className="pc-cta"
                onClick={(e) => {
                  e.stopPropagation();
                  Navigate(`/album?albumId=${albumId}`);
                }}
              >
                <PlayIcon />
                {embed.ctaLabel}
              </button>
            </div>
          </div>
        )}

        {/* Kalam — only when isKalamAvailable is true and there's no album */}
        {showKalam && (
          <NewKalam2
            title={title}
            content={content}
            mUid={muid}
            kalId={kalId}
            isLiked2={isLiked2}
            isSaved={isSaved}
            customStyles={customStyles}
          />
        )}

        {/* Footer */}
        <footer className="pc-footer">
          <div className="pc-footer-left">
            <button className="pc-metric-btn" onClick={onLikeClick}>
              <HeartIcon />
              <span>{likeCount} Likes</span>
            </button>
            <button
              className={`pc-metric-btn${commentsOpen ? " pc-metric-active" : ""}`}
              aria-expanded={commentsOpen}
              onClick={toggleComments}
            >
              <CommentIcon />
              <span>{commentCount} Comments</span>
            </button>
          </div>
          <button aria-label="Share" className="pc-icon-btn" onClick={onShareClick}>
            <ShareIcon />
          </button>
        </footer>

        {/* Comments — bottom sheet on mobile, inline expand on desktop (see media query above) */}
        {commentsOpen && (
          <div className="pc-comments-backdrop" onClick={() => setCommentsOpen(false)}>
            <div className="pc-comments-panel" onClick={(e) => e.stopPropagation()}>
              <div className="pc-comments-handle" />
              <div className="pc-comments-header">
                {/* <h4 className="pc-comments-title">Comments</h4>
                <button
                  aria-label="Close comments"
                  className="pc-icon-btn"
                  onClick={() => setCommentsOpen(false)}
                >
                  <CloseIcon />
                </button> */}
              </div>
              <div className="pc-comments-body">
                <KalamComment postId={postId} commentType="postComment" kalamId={kalamId ?? null} />
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}