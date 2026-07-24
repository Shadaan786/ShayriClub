import { useEffect } from "react";

// Accepts values like "1/2", "90%", "500px", "full" and returns valid CSS.
function toCssSize(value, fallback) {
  if (!value) return fallback;
  if (value === "full") return "100%";
  if (value.includes("/")) {
    const [num, den] = value.split("/").map(Number);
    if (den) return `${(num / den) * 100}%`;
  }
  return value; // already a valid CSS size like "90%" or "500px"
}

export function KalamPlayerModal({ isOpen, onClose, children, height, width }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="kalamModalRoot fixed inset-0 z-50 flex items-end sm:items-center justify-center w-full">

      {/* Backdrop — near-black with a faint purple bloom, not flat black */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(46,16,101,0.35) 0%, rgba(4,3,6,0.85) 60%, rgba(2,2,3,0.92) 100%)",
        }}
        onClick={onClose}
      />

      {/* Modal panel — full-width bottom sheet on phones, centered card from sm: up */}
      <div
        className="kalamModalPanel relative z-10 text-gray-200 animate-fadeIn overflow-hidden"
        style={{
          "--kp-width": toCssSize(width, "90%"),
          "--kp-height": toCssSize(height, "70vh"),
          background: "linear-gradient(155deg, #140b22 0%, #0a0710 55%, #050308 100%)",
          border: "1px solid rgba(250, 204, 21, 0.16)",
          boxShadow:
            "0 0 0 1px rgba(147, 51, 234, 0.12), 0 -10px 40px -15px rgba(0,0,0,0.85), 0 0 45px -10px rgba(250, 204, 21, 0.12)",
        }}
      >
        {/* mobile-only drag handle */}
        <div className="kalamDragHandle" aria-hidden="true" />

        {/* thin gold hairline glow along the top edge */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(252,211,77,0.55) 50%, transparent 100%)",
          }}
        />

        {children}
      </div>

      <style>{`
        .kalamModalPanel {
          width: 100%;
          height: min(var(--kp-height), 92dvh);
          max-height: 92dvh;
          border-radius: 24px 24px 0 0;
          padding-bottom: env(safe-area-inset-bottom);
        }
        .kalamDragHandle {
          display: block;
          width: 36px;
          height: 4px;
          border-radius: 999px;
          background: rgba(250, 204, 21, 0.35);
          margin: 10px auto 0;
        }
        @media (min-width: 640px) {
          .kalamModalPanel {
            width: var(--kp-width);
            height: var(--kp-height);
            max-height: 90dvh;
            border-radius: 24px;
            padding-bottom: 0;
          }
          .kalamDragHandle {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}