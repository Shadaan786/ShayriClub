import { useState, useEffect, useContext, useRef } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { HeartIcon } from "@animateicons/react/lucide";
import { MessageCircleIcon } from "@animateicons/react/lucide";
import { ShareIcon } from "@animateicons/react/lucide";
import { SocialContext } from "../Contexts/SocketContext";
import { useNavigate } from "react-router-dom";
import { toJpeg } from "html-to-image";
import BookmarkIcon from "../components/icons/BookmarkIcon";

/**
 * NewKalam2 — a display-only, embed-friendly variant of NewKalam.
 *
 * Differences from NewKalam:
 *  - No author avatar/name/date row at the top (the parent PostCard already
 *    shows the author, so repeating it here was redundant).
 *  - No kebab "more" menu (same reason — PostCard already has one).
 *  - Styles are scoped under `.nk2-root` instead of a global `*` reset, so it
 *    can no longer clobber spacing elsewhere on the page.
 *  - Dropped ~600 lines of unused editor/builder CSS and the unused
 *    TITLE_FONTS / CONTENT_FONTS / buildGoogleFontsUrl font-picker data that
 *    NewKalam carried but never actually rendered.
 *  - The preview card is responsive (fills its container, keeps a fixed
 *    aspect ratio) instead of a hardcoded 400×400px box with square bottom
 *    corners.
 *
 * Same props as NewKalam, so it's a drop-in replacement wherever a kalam
 * needs to render inside another card/feed context.
 */

/**
 * Sensible fallback styling so the card looks intentional even if the caller
 * doesn't pass a full customStyles object (e.g. a plain-text kalam post with
 * no background/color customization configured).
 */
const DEFAULT_CUSTOM_STYLES = {
  backdrop: "none",
  resolvedTextColor: "light",
  bgTab: "preset",
  selectedColor: "linear-gradient(135deg, #241a3d 0%, #120d1f 100%)",
  customColor: "#241a3d",
  bgOpacity: 100,
  scrim: 30,
  resolvedTitleColor: "#f2ca50",
  titleFs: "18px",
  resolvedTitleFamily: "'Playfair Display', serif",
  resolvedContentColor: "rgba(240,235,227,0.92)",
  contentFs: "14px",
  resolvedContentFamily: "'Cormorant Garamond', serif",
  subColor: "rgba(210,170,90,0.7)",
};

const NewKalam2 = ({
  title,
  content,
  type,
  imageSrc,
  mUid,
  kalId,
  isLiked2,
  isSaved,
  customStyles,
}) => {
  const cs = { ...DEFAULT_CUSTOM_STYLES, imageSrc, ...customStyles };
  const { backdrop, resolvedTextColor, bgTab, customColor, selectedColor, bgOpacity, scrim } = cs;

  const [showFullPreview, setShowFullPreview] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [isSaved2, setIsSaved2] = useState(isSaved);

  const { send } = useContext(SocialContext);
  const ref = useRef(null);
  const isImage = useRef(false);
  const navigate = useNavigate();

  if (cs.imageSrc) {
    isImage.current = true;
  }

  const previewWrapStyle = (() => {
    if (backdrop === "none") {
      return {
        background: "none",
        padding: "1.5rem",
        backdropFilter: "none",
        border: "none",
        borderRadius: "0",
      };
    }
    if (backdrop === "soft") {
      return {
        background:
          resolvedTextColor === "light" ? "rgba(0,0,0,0.28)" : "rgba(255,255,255,0.28)",
        padding: "1.75rem 1.5rem",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "none",
        borderRadius: "0",
        minHeight: "100%",
        height: "100%",
      };
    }
    return {
      background:
        resolvedTextColor === "light" ? "rgba(0,0,0,0.58)" : "rgba(255,255,255,0.88)",
      padding: "1.75rem 1.5rem",
      backdropFilter: "none",
      border: "none",
      borderRadius: "0",
      minHeight: "100%",
      height: "100%",
    };
  })();

  const PREVIEW_LIMIT = 110;
  const previewIsTruncated = content?.length > PREVIEW_LIMIT;
  const previewText = showFullPreview ? content : content?.slice(0, PREVIEW_LIMIT);

  const handleLike = () => {
    send(
      JSON.stringify({
        type: "kalam_like",
        payload: { uid: mUid, kalamUid: kalId },
      })
    );
  };

  useEffect(() => {
    setIsLiked(!!isLiked2);
    setIsSaved2(isSaved);
  }, []);

  const convert = async () => {
    if (!ref.current) return;
    try {
      const dataUrl = await toJpeg(ref.current, { cacheBust: true });
      try {
        const image = await fetch(dataUrl);
        try {
          const blob = await image.blob();
          const file = new File([blob], "kalam-card.jpg", { type: "image/jpeg" });
          if (navigator.canShare) {
            navigator
              .share({ files: [file], title: "Helo title" })
              .then(() => console.log("Thanks for sharing"))
              .catch((error) =>
                console.error("Error while sharing, please try again later", error)
              );
          }
        } catch (error) {
          console.error("Error while creating a blob of image", error);
        }
      } catch (error) {
        console.log("Error while fetching conversion of image", error);
      }
    } catch (error) {
      console.log("Error while converting to jpeg", error);
    }
  };

  const savingKalam = () => {
    axiosInstance
      .post(`/api/savingKalam`, { kalamId: kalId }, { withCredentials: true })
      .then(() => console.log("done"))
      .catch((error) => console.error("error while fetching", error));
  };

  return (
    <div className="nk2-root">
      <style>{`
        .nk2-root, .nk2-root *, .nk2-root *::before, .nk2-root *::after {
          box-sizing: border-box;
        }
        .nk2-root {
          --border-sm: rgba(255,255,255,0.05);
          --border-md: rgba(255,255,255,0.08);
          --text-pri: #f0ebe3;
          --text-sec: rgba(240,235,227,0.55);
          --text-ter: rgba(240,235,227,0.28);
          --gold: rgba(210,170,90,0.85);
          font-family: 'DM Mono', monospace;
          width: 100%;
        }

        .nk2-frame {
          position: relative;
          width: 100%;
        }

        .nk2-card {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border-md);
          box-shadow: inset 0 0 40px rgba(0,0,0,0.3), 0 4px 20px rgba(0,0,0,0.3);
          display: flex;
          align-items: stretch;
          justify-content: center;
        }

        .nk2-bg {
          position: absolute;
          inset: 0;
          transition: background 0.35s ease, opacity 0.35s ease;
        }

        .nk2-scrim {
          position: absolute;
          inset: 0;
          transition: background 0.3s ease;
        }

        .nk2-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 1.1rem 3.25rem 1.1rem 1.1rem;
          text-align: center;
          overflow-wrap: break-word;
          word-break: break-word;
          overflow-y: auto;
          max-height: 100%;
          scrollbar-width: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .nk2-content::-webkit-scrollbar { display: none; }

        .nk2-title {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 500;
          line-height: 1.3;
          margin-bottom: 8px;
        }

        .nk2-text {
          font-family: 'Cormorant Garamond', serif;
          line-height: 1.6;
          font-style: italic;
          white-space: pre-wrap;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .nk2-read-more {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 6px;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-family: 'DM Mono', monospace;
          border: 1px solid rgba(210,170,90,0.3);
          background: rgba(210,170,90,0.07);
          color: rgba(210,170,90,0.85);
          cursor: pointer;
          transition: all 0.15s;
          align-self: center;
        }
        .nk2-read-more:hover {
          background: rgba(210,170,90,0.14);
          border-color: rgba(210,170,90,0.55);
          color: rgba(210,170,90,1);
        }

        .nk2-author {
          font-size: 10px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.1em;
          margin-top: 10px;
          opacity: 0.65;
        }

        .nk2-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
        }

        .nk2-action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 9999px;
          border: none;
          background: rgba(10,10,14,0.35);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          cursor: pointer;
          transition: background-color 0.15s;
        }
        .nk2-action-btn:hover { background: rgba(10,10,14,0.55); }
      `}</style>

      <div className="nk2-frame">
        <div ref={ref} className="nk2-card">
          <div
            className="nk2-bg"
            style={
              isImage.current && cs.imageSrc
                ? {
                    backgroundImage: `url(${cs.imageSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: (bgOpacity ?? 100) / 100,
                  }
                : {
                    background: bgTab === "custom" ? customColor : selectedColor,
                    opacity: (bgOpacity ?? 100) / 100,
                  }
            }
          />

          <div className="nk2-scrim" style={{ background: `rgba(0,0,0,${(scrim ?? 0) / 100})` }} />

          {(content || title) && (
            <div className="nk2-content" style={previewWrapStyle}>
              {title && (
                <div
                  className="nk2-title"
                  style={{
                    color: cs.resolvedTitleColor,
                    fontSize: cs.titleFs,
                    fontFamily: cs.resolvedTitleFamily,
                  }}
                >
                  {title}
                </div>
              )}

              {content && (
                <div>
                  <div
                    className="nk2-text"
                    style={{
                      color: cs.resolvedContentColor,
                      fontSize: cs.contentFs,
                      fontFamily: cs.resolvedContentFamily,
                    }}
                  >
                    {previewText}
                    {!showFullPreview && previewIsTruncated ? "…" : ""}
                  </div>
                  {previewIsTruncated && (
                    <button
                      className="nk2-read-more"
                      onClick={() => setShowFullPreview((v) => !v)}
                    >
                      {showFullPreview ? "↑ Show less" : "↓ Read more"}
                    </button>
                  )}
                </div>
              )}

              <div className="nk2-author" style={{ color: cs.subColor }}>
                — Arif Karimi
              </div>
            </div>
          )}
        </div>

        {/* Action strip */}
        <div className="nk2-actions">
          <button
            className="nk2-action-btn"
            aria-label="Like"
            onClick={() => {
              handleLike();
              setIsLiked((v) => !v);
            }}
          >
            <HeartIcon size={14} duration={1} color={isLiked ? "#e24b4a" : "#ffffff"} />
          </button>

          <button
            className="nk2-action-btn"
            aria-label="Comment"
            onClick={() => navigate(`/comment?kalamId=${kalId}&commentType=kalamComment`)}
          >
            <MessageCircleIcon size={14} duration={1} color="#ffffff" />
          </button>

          <button
            className="nk2-action-btn"
            aria-label="Share"
            onClick={() => {
              setIsShared(true);
              convert();
            }}
          >
            <ShareIcon size={14} duration={1} color="#ffffff" />
          </button>

          <button
            className="nk2-action-btn"
            aria-label="Save"
            onClick={() => {
              savingKalam();
              setIsSaved2((v) => !v);
            }}
          >
            <BookmarkIcon isSaved={isSaved2} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewKalam2;