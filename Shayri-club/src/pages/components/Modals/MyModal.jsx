import { useEffect } from "react";

export function MyVerticallyCenteredModal({ isOpen, onClose, children, height, width  }) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full">
      
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative z-10 w-${width || "w-[90%]" } h-${height} rounded-3xl bg-[#0f0f0f] border border-[#2a2a2a] shadow-2xl  text-gray-200 animate-fadeIn`}>
        {children}
      </div>
    </div>
  );
}