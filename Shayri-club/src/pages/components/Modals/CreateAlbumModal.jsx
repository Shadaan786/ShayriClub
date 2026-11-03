import { useEffect, useRef, useState } from "react";

/**
 * Drop-in replacement for the old "Create New Album" modal block.
 * Visual design: Diwan Edition studio modal (2-column, gold/navy, vinyl preview).
 *
 * Requires (you already use these): Tailwind CSS + Material Symbols Outlined font.
 * Optional: load "Plus Jakarta Sans" in your app for the exact typography.
 */
export default function CreateCollectionModal({
  open,
  onClose,
  newTitle,
  setNewTitle,
  newCurator,
  setNewCurator,
  newCategory,
  setNewCategory,
  categoryOptions = [],
  artworkFile,
  setArtworkFile,
  userKalams = [], // [{ id, name, content }]
  onAddKalams, // optional: called with the selected kalams when the user confirms
  onUploadKalam, // optional: called when "Upload New Kalam" is clicked
  onPreviewKalam, // optional: custom preview handler (kalam) => void; overrides the built-in preview
  onCreate, // called with { isPublic, customGenre, year, kalams }
  setFinalKalams,
  isPublic,
  setIsPublic
}) {
  const [customGenre, setCustomGenre] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  // const [isPublic, setIsPublic] = useState(true);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null); // { title, desc, public }
  const toastTimer = useRef(null);

  // Kalam picker
  const [kalamOpen, setKalamOpen] = useState(false);
  const [kalamSearch, setKalamSearch] = useState("");
  const [kalamTab, setKalamTab] = useState("all"); // "all" | "selected"
  const [draftIds, setDraftIds] = useState([]); // selection inside the picker
  const [addedIds, setAddedIds] = useState([]); // confirmed selection
  const [playingKey, setPlayingKey] = useState(null);
  const audioRef = useRef(null);
  const [expandedKey, setExpandedKey] = useState(null);

  // Live artwork preview
  useEffect(() => {
    if (!artworkFile) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(artworkFile);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [artworkFile]);

  useEffect(
    () => () => {
      clearTimeout(toastTimer.current);
      audioRef.current?.pause();
    },
    []
  );

  if (!open) return null;

  const isCustom = newCategory === "other";
  const hasTitle = newTitle.trim().length > 0;
  const hasCurator = newCurator.trim().length > 0;
  const canSubmit = hasTitle && !!newCategory && (!isCustom || customGenre.trim()) && !saving;

  const kalamId = (k, i) => k?.id ?? k?._id ?? i;
  const countLines = (text) => (text || "").split("\n").filter((l) => l.trim()).length;
  const query = kalamSearch.trim().toLowerCase();
  const allKalams = userKalams.map((k, i) => ({ ...k, _key: kalamId(k, i) }));
  const visibleKalams = allKalams
    .filter((k) =>
      kalamTab === "all" ? true : kalamTab === "selected" ? draftIds.includes(k._key) : categoryOf(k) === kalamTab
    )
    .filter((k) => !query || `${k.name ?? ""} ${k.content ?? ""}`.toLowerCase().includes(query));
  const addedKalams = allKalams.filter((k) => addedIds.includes(k._key));
  const ashaarOf = (k) => Math.ceil(countLines(k.content) / 2);
  const toSecs = (d) => {
    if (typeof d === "number") return d;
    if (typeof d !== "string" || !d.includes(":")) return 0;
    const [m, sec] = d.split(":").map(Number);
    return (m || 0) * 60 + (sec || 0);
  };
  const fmtTime = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;
  const draftKalams = allKalams.filter((k) => draftIds.includes(k._key));
  const draftAshaar = draftKalams.reduce((sum, k) => sum + ashaarOf(k), 0);
  const draftSecs = draftKalams.reduce((sum, k) => sum + toSecs(k.duration), 0);
  const categoryOf = (k) => k.category ?? k.type ?? k.genre ?? null;
  const categories = [...new Set(allKalams.map(categoryOf).filter(Boolean))];

  const stopAudio = () => {
    audioRef.current?.pause();
    audioRef.current = null;
    setPlayingKey(null);
  };
  const closeKalamModal = () => {
    stopAudio();
    setExpandedKey(null);
    setKalamOpen(false);
  };
  const togglePreview = (k) => {
    if (onPreviewKalam) return onPreviewKalam(k);
    const src = k.audioUrl ?? k.audio;
    if (!src) {
      // No recording: preview the full text of the kalam inline
      setExpandedKey((prev) => (prev === k._key ? null : k._key));
      return;
    }
    if (playingKey === k._key) return stopAudio();
    stopAudio();
    const a = new Audio(src);
    a.onended = () => setPlayingKey(null);
    a.play().catch(() => setPlayingKey(null));
    audioRef.current = a;
    setPlayingKey(k._key);
  };

  const openKalamModal = () => {
    setDraftIds(addedIds);
    setKalamSearch("");
    setKalamTab("all");
    setKalamOpen(true);
  };
  const toggleKalam = (key) =>
    setDraftIds((prev) => (prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key]));
  const confirmKalams = () => {
    setAddedIds(draftIds);
    setFinalKalams(draftIds);
    closeKalamModal();
    onAddKalams?.(allKalams.filter((k) => draftIds.includes(k._key)));
  };

  const togglePublic = () => {
    const next = !isPublic;
    setIsPublic(next);
    setToast(
      next
        ? { title: "24K Master Disc Extracted", desc: "Broadcasting globally across 190+ countries in the Literary Archive", public: true }
        : { title: "24K Disc Retracted", desc: "Collection set to private archive / personal drafts only", public: false }
    );
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3200);
  };

  const handleFile = (file) => {
    if (file) setArtworkFile(file);
  };

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setSaving(true);
    try {
      await onCreate?.({ isPublic, customGenre: customGenre.trim(), year, kalams: addedKalams });
    } finally {
      setSaving(false);
    }
  };

  const goldGradient = "linear-gradient(135deg, rgb(251, 191, 36) 0%, rgb(251, 146, 60) 100%)";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .vinyl-sheen { background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 28%, transparent 45%, rgba(255,255,255,0.25) 75%, transparent 100%); }
        .studio-modal-surface {
          background: linear-gradient(145deg, rgba(17,30,49,0.96) 0%, rgba(11,20,35,0.98) 100%);
          border: 1px solid rgba(56,189,248,0.25);
          box-shadow: 0 35px 80px -15px rgba(0,0,0,0.85), 0 0 45px rgba(14,165,233,0.18), inset 0 1px 1px 0 rgba(255,255,255,0.2);
        }
        .studio-scroll::-webkit-scrollbar { width: 5px; }
        .studio-scroll::-webkit-scrollbar-track { background: rgba(2,6,12,0.25); }
        .studio-scroll::-webkit-scrollbar-thumb { background: rgba(56,189,248,0.25); border-radius: 9999px; }
        .studio-scroll::-webkit-scrollbar-thumb:hover { background: rgba(56,189,248,0.45); }
        .studio-input {
          background-color: rgba(4,13,25,0.85);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: inset 0 2px 5px rgba(0,0,0,0.6);
          transition: all 0.2s cubic-bezier(0.4,0,0.2,1);
        }
        .studio-input:focus-within {
          border-color: rgba(56,189,248,0.65);
          box-shadow: 0 0 0 3px rgba(14,165,233,0.18), inset 0 2px 4px rgba(0,0,0,0.7);
        }
        @keyframes spinDisc { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .disc-spinning { animation: spinDisc 8s linear infinite !important; }
        .disc-slide-container { transition: transform 0.65s cubic-bezier(0.34,1.3,0.64,1); will-change: transform; }
        @keyframes broadcastWave { 0% { transform: scale(0.65); opacity: 0.9; } 50% { opacity: 0.45; } 100% { transform: scale(1.6); opacity: 0; } }
        @keyframes broadcastSweep { 0% { transform: translateX(-100%); opacity: 0; } 50% { opacity: 0.75; } 100% { transform: translateX(100%); opacity: 0; } }
        .anim-wave-1 { animation: broadcastWave 3s cubic-bezier(0,0.2,0.8,1) infinite; }
        .anim-sweep { animation: broadcastSweep 3.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .disc-spinning, .anim-wave-1, .anim-sweep { animation: none !important; }
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/65 backdrop-blur-md font-sans text-slate-100 antialiased"
        style={{ fontFamily: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif' }}
        onClick={onClose}
      >
        {/* Modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[94vh] flex flex-col rounded-3xl studio-modal-surface overflow-hidden"
        >
          <div
            className="h-[2px] w-full shrink-0"
            style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.4) 30%, rgba(255,255,255,0.15) 70%, transparent)" }}
          />
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-32 blur-3xl pointer-events-none rounded-full"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)" }}
          />

          {/* Header */}
          <header className="relative px-6 sm:px-8 py-5 border-b border-white/[0.08] bg-[#07172b]/95 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3.5">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center relative overflow-hidden shrink-0 border border-amber-400/40 shadow-[0_0_20px_rgba(251,191,36,0.25)]"
                style={{ background: "rgba(251,191,36,0.12)" }}
              >
                <span className="material-symbols-outlined text-[24px]" style={{ color: "#fbbf24" }}>album</span>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h2 className="text-base sm:text-lg font-bold tracking-tight text-white uppercase leading-snug">Create Poetry Collection</h2>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase"
                    style={{ background: goldGradient, color: "rgb(28,16,2)", boxShadow: "rgba(251,191,36,0.4) 0px 0px 16px" }}
                  >
                    DIWAN EDITION
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-medium mt-1 leading-normal">
                  Curate poetic verses, upload anthology cover art, and organize kalams &amp; spoken word recitations
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              title="Close modal"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-amber-400/40 transition-all duration-200 group active:scale-95"
            >
              <span className="material-symbols-outlined text-lg group-hover:rotate-90 transition-transform duration-200">close</span>
            </button>
          </header>

          {/* Body */}
          <div className="overflow-y-auto studio-scroll grow grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.07]">
            {/* LEFT: visuals */}
            <aside className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between space-y-6 bg-gradient-to-b from-white/[0.015] to-transparent">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#fbbf24]" />
                    Live Artwork Preview
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 bg-white/[0.04] px-2 py-0.5 rounded border border-white/10">
                    3000 × 3000 PX
                  </span>
                </div>

                {/* Sleeve + gold disc */}
                <div className="relative w-full max-w-[290px] mx-auto pt-2 pb-2 select-none overflow-visible">
                  <div
                    className="absolute -right-2 sm:-right-4 top-4 disc-slide-container z-0 pointer-events-none"
                    style={{ transform: isPublic ? "translateX(52px)" : "translateX(-115px)" }}
                  >
                    <div
                      className={`w-44 sm:w-52 h-44 sm:h-52 rounded-full flex items-center justify-center shadow-2xl relative ${isPublic ? "disc-spinning" : ""}`}
                      style={{
                        background: "conic-gradient(from 45deg, #f59e0b 0%, #fef08a 22%, #d97706 42%, #fef9c3 58%, #b45309 72%, #fde047 86%, #f59e0b 100%)",
                        border: "2px solid #fef08a",
                        boxShadow: "0 0 35px rgba(251,191,36,0.55), inset 0 0 20px rgba(180,83,9,0.7)",
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle at center, transparent 28%, rgba(217,119,6,0.35) 32%, transparent 34%, rgba(254,240,138,0.5) 44%, transparent 46%, rgba(180,83,9,0.45) 58%, transparent 60%, rgba(254,240,138,0.4) 72%, transparent 74%, rgba(217,119,6,0.55) 86%, transparent 88%)",
                          boxShadow: "inset 0 0 25px rgba(180,83,9,0.45)",
                        }}
                      />
                      <div className="absolute inset-0 rounded-full vinyl-sheen pointer-events-none" />
                      <div
                        className="w-16 h-16 rounded-full flex flex-col items-center justify-center p-1 relative shadow-lg z-10"
                        style={{
                          background: "linear-gradient(135deg, #fbbf24 0%, #fb923c 100%)",
                          border: "2px solid #fef08a",
                          boxShadow: "0 0 14px rgba(251,191,36,0.7), inset 0 0 8px rgba(180,83,9,0.8)",
                        }}
                      >
                        <span className="text-[6.5px] font-black uppercase text-[#1c1002] tracking-wider text-center px-1 truncate max-w-full">
                          {newTitle.trim() || "Diwan-e-Khaas"}
                        </span>
                        <span className="text-[6px] font-mono font-bold text-[#3a2004]">24K MASTER</span>
                        <div className="w-3.5 h-3.5 rounded-full bg-[#051424] border border-amber-300 mt-0.5 shadow-inner flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-amber-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Front sleeve */}
                  <div
                    className="relative z-10 w-48 sm:w-56 h-48 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-[#122845] via-[#091526] to-[#040a14] flex flex-col justify-between p-3.5"
                    style={{ border: "1px solid rgba(251,191,36,0.5)", boxShadow: "rgba(0,0,0,0.8) 0px 15px 35px, rgba(251,191,36,0.28) 0px 0px 25px" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/10 via-transparent to-white/15 pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent pointer-events-none" />
                    {previewUrl && <img alt="Cover preview" src={previewUrl} className="absolute inset-0 w-full h-full object-cover" />}
                    <div className="relative z-10 flex justify-between items-start">
                      <div className="w-7 h-7 rounded-lg bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm" style={{ color: "#fbbf24" }}>sound_sampler</span>
                      </div>
                      <span
                        className="px-1.5 py-0.5 rounded text-[9px] tracking-wider uppercase backdrop-blur-sm"
                        style={{ background: goldGradient, color: "rgb(28,16,2)", fontWeight: 800, boxShadow: "rgba(251,191,36,0.5) 0px 0px 10px" }}
                      >
                        DIWAN
                      </span>
                    </div>
                    <div className="relative z-10 p-2 rounded-xl bg-black/45 backdrop-blur-md border border-white/10 space-y-0.5">
                      <p className="text-xs font-bold text-white truncate drop-shadow-sm">{newTitle.trim() || "Untitled Collection"}</p>
                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <span className="truncate font-medium text-slate-300">{newCurator.trim() || "Unknown Poet"}</span>
                        <span className="font-mono text-[9px] text-slate-400">{year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dropzone */}
                <label
                  className="block rounded-2xl p-3.5 border border-dashed cursor-pointer transition-all duration-200 group text-center bg-gradient-to-b from-[#061426]/90 to-[#030b14]/90"
                  style={{ borderColor: dragging ? "rgba(251,191,36,0.9)" : "rgba(255,255,255,0.15)" }}
                  onDragEnter={(e) => { e.preventDefault(); setDragging(true); }}
                  onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                  onDragLeave={(e) => { e.preventDefault(); setDragging(false); }}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragging(false);
                    handleFile(e.dataTransfer.files?.[0]);
                  }}
                >
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/webp"
                    className="hidden"
                    onChange={(e) => handleFile(e.target.files?.[0])}
                  />
                  <div className="flex items-center justify-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-base" style={{ color: "#fbbf24" }}>cloud_upload</span>
                    </div>
                    <div className="text-left min-w-0">
                      <p className="text-xs font-semibold text-white truncate">
                        {artworkFile ? (
                          <>
                            <span className="text-amber-300">{artworkFile.name}</span> selected
                          </>
                        ) : (
                          "Upload anthology cover art"
                        )}
                      </p>
                      <p className="text-[10px] text-slate-400 font-mono">PNG, JPG, WEBP • Max 25MB</p>
                    </div>
                    <span
                      className="ml-auto text-[10px] font-bold text-[#1c1002] px-3 py-1 rounded-md border border-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.25)]"
                      style={{ background: goldGradient }}
                    >
                      Browse
                    </span>
                  </div>
                </label>
              </div>

              {/* Public / Private card */}
              <div className="space-y-3 pt-2 border-t border-white/[0.08]">
                <div
                  onClick={togglePublic}
                  className="relative overflow-hidden p-3 rounded-2xl bg-[#040f1c]/90 border transition-all duration-300 cursor-pointer group select-none"
                  style={{
                    borderColor: isPublic ? "rgba(251,191,36,0.5)" : "rgba(255,255,255,0.08)",
                    boxShadow: isPublic ? "0 0 25px rgba(251,191,36,0.2)" : "none",
                  }}
                >
                  {isPublic && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/15 to-transparent pointer-events-none anim-sweep" />
                  )}
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border overflow-hidden transition-all duration-300"
                        style={{
                          background: isPublic ? "radial-gradient(circle at 35% 35%, rgba(251,191,36,0.3) 0%, rgba(4,13,25,0.95) 75%)" : "#040f1c",
                          borderColor: isPublic ? "rgba(251,191,36,0.7)" : "rgba(255,255,255,0.1)",
                          boxShadow: isPublic ? "0 0 20px rgba(251,191,36,0.5)" : "none",
                        }}
                      >
                        {isPublic && <div className="absolute inset-0 rounded-full border border-amber-300/40 anim-wave-1 pointer-events-none" />}
                        <svg
                          className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:scale-110"
                          style={{ color: isPublic ? "#fcd34d" : "#64748b" }}
                          fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                          <path d="M2 12h20" />
                          <ellipse cx="12" cy="12" rx="9" ry="4.5" strokeDasharray="2 2" />
                        </svg>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold text-white tracking-wide">{isPublic ? "Public Diwan" : "Private Diwan"}</p>
                          {isPublic && (
                            <span
                              className="inline-flex items-center gap-1 px-1.5 rounded-full text-[9px] font-extrabold uppercase tracking-tight text-[#1c1002] shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                              style={{ background: goldGradient }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                              LIVE
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-300">
                          {isPublic
                            ? "Broadcasting globally • Available across 190+ countries"
                            : "Private Draft • Visible only to your curator account"}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={isPublic}
                      aria-label="Toggle Public Diwan"
                      onClick={(e) => { e.stopPropagation(); togglePublic(); }}
                      className="relative inline-flex items-center shrink-0 cursor-pointer focus:outline-none"
                    >
                      <div
                        className="w-11 h-6 rounded-full transition-all duration-300 flex items-center p-0.5"
                        style={{
                          background: isPublic ? "linear-gradient(135deg, #fbbf24 0%, #fb923c 100%)" : "rgb(30,41,59)",
                          boxShadow: isPublic ? "0 0 14px rgba(251,191,36,0.55)" : "inset 0 2px 4px rgba(0,0,0,0.6)",
                        }}
                      >
                        <div
                          className="w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300"
                          style={{ transform: isPublic ? "translateX(20px)" : "translateX(0px)" }}
                        />
                      </div>
                    </button>
                  </div>

                  {isPublic && (
                    <div className="mt-2.5 pt-2 border-t border-amber-400/20 flex items-center justify-between text-[9.5px] font-mono text-amber-200/90">
                      <span className="flex items-center gap-1.5 truncate">
                        <span className="material-symbols-outlined text-[12px] text-amber-300 animate-pulse">satellite_alt</span>
                        <span>Worldwide Literary Archive Broadcast</span>
                      </span>
                      <span className="text-amber-400 font-bold shrink-0 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30">
                        190+ COUNTRIES
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </aside>

            {/* RIGHT: metadata */}
            <main className="lg:col-span-7 p-6 sm:p-7 space-y-6">
              {/* Section 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-white/[0.06] pb-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 text-slate-300">
                    <span className="material-symbols-outlined text-sm text-slate-400">auto_stories</span>
                    01. Collection &amp; Diwan Metadata
                  </span>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="cm-title" className="text-xs font-semibold text-slate-200">
                      Collection / Diwan Title <span className="text-rose-400">*</span>
                    </label>
                    <span className="text-[10px] text-slate-400 font-mono">{newTitle.length} / 60</span>
                  </div>
                  <div className="relative flex items-center rounded-xl studio-input">
                    {/* <span className="material-symbols-outlined pl-3.5 pr-1.5 text-lg select-none" style={{ color: "rgb(251,191,36)" }}>menu_book</span> */}
                    <input
                      id="cm-title"
                      type="text"
                      maxLength={60}
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="  Title for Album"
                      className="w-full bg-transparent py-2.5 pr-4 text-sm text-white placeholder-slate-500 outline-none font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cm-curator" className="text-xs font-semibold text-slate-200 mb-1.5 block">
                    Poet / Shayar / Author <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative flex items-center rounded-xl studio-input">
                    {/* <span className="material-symbols-outlined pl-3.5 pr-1.5 text-lg select-none" style={{ color: "rgb(251,191,36)" }}>draw</span> */}
                    <input
                      id="cm-curator"
                      type="text"
                      value={newCurator}
                      onChange={(e) => setNewCurator(e.target.value)}
                      placeholder="e.g. Mir Taqi Mir, Ghalib, Allama Iqbal"
                      className="w-full bg-transparent py-2.5 pr-4 text-sm text-white placeholder-slate-500 outline-none font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-white/[0.06] pb-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 text-slate-300">
                    <span className="material-symbols-outlined text-sm text-slate-400">style</span>
                    02. Poetry Genres &amp; Literary Details
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-end">
                  <div className="sm:col-span-8">
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="cm-genre" className="text-xs font-semibold text-slate-200">
                        Poetry Category / Genre <span className="text-rose-400">*</span>
                      </label>
                      {isCustom && <span className="text-[10px] font-medium text-amber-300/80">Custom Mode</span>}
                    </div>

                    {!isCustom ? (
                      <div className="relative flex items-center rounded-xl studio-input">
                        <span className="material-symbols-outlined pl-3.5 pr-1.5 text-lg select-none shrink-0" style={{ color: "rgb(251,191,36)" }}>menu_book</span>
                        <select
                          id="cm-genre"
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                          className="w-full bg-transparent py-2.5 pr-9 text-xs sm:text-sm text-white outline-none cursor-pointer appearance-none font-medium"
                        >
                          <option value="" disabled className="bg-[#091b2e] text-white">Select a category</option>
                          {categoryOptions.map((opt) => (
                            <option key={opt.value} value={opt.value} className="bg-[#091b2e] text-white">
                              {opt.label}
                            </option>
                          ))}
                          <option value="other" className="bg-[#091b2e] text-amber-300 font-semibold">Other (Specify Custom...)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 pointer-events-none text-slate-400 text-lg">expand_more</span>
                      </div>
                    ) : (
                      <div className="relative flex items-center rounded-xl studio-input">
                        <span className="material-symbols-outlined pl-3.5 pr-1.5 text-lg select-none shrink-0" style={{ color: "rgb(251,191,36)" }}>edit_note</span>
                        <input
                          id="cm-genre"
                          type="text"
                          autoFocus
                          value={customGenre}
                          onChange={(e) => setCustomGenre(e.target.value)}
                          placeholder="Type custom poetry category (e.g. Ghazal, Nazm, Marsiya)..."
                          className="w-full bg-transparent py-2.5 pr-28 text-xs sm:text-sm text-white placeholder-slate-500 outline-none font-medium"
                        />
                        <button
                          type="button"
                          onClick={() => setNewCategory("")}
                          className="absolute right-2 text-[10px] font-bold text-amber-300 hover:text-amber-200 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 px-2 py-1 rounded-md transition-colors flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-[12px]">list</span>
                          Back to list
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="cm-year" className="block text-xs font-semibold text-slate-200 mb-1.5">Publication Year</label>
                    <div className="relative flex items-center rounded-xl studio-input">
                      <span className="material-symbols-outlined pl-3.5 pr-1.5 text-lg select-none shrink-0" style={{ color: "rgb(251,191,36)" }}>calendar_today</span>
                      <input
                        id="cm-year"
                        type="number"
                        min={1800}
                        max={2099}
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full bg-transparent py-2.5 pr-3 text-xs sm:text-sm text-white outline-none font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 text-slate-300">
                    <span className="material-symbols-outlined text-sm text-slate-400">format_quote</span>
                    03. Kalams &amp; Verses Configuration
                  </span>
                  <span className="text-[10px] text-amber-300 font-mono bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/25">
                    Kalams &amp; Verses
                  </span>
                </div>
                <div className="p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 bg-[#08192d]/70 border border-white/10 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-white/10 border border-white/10 shadow-sm">
                      <span className="material-symbols-outlined text-lg text-slate-200">edit_note</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white tracking-wide">Add Kalams &amp; Verses</p>
                      <p className="text-[11px] text-slate-400">Curate text verses, stanzas, and poetic compositions for this collection</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={openKalamModal}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#1c1002] border border-amber-300 transition-all duration-200 flex items-center justify-center gap-1.5 shrink-0 shadow-[0_0_12px_rgba(251,191,36,0.25)] hover:shadow-[0_0_18px_rgba(251,191,36,0.45)] hover:scale-[1.02] active:scale-95 group"
                    style={{ background: goldGradient }}
                  >
                    <span className="material-symbols-outlined text-sm group-hover:rotate-90 transition-transform">add</span>
                    <span>{addedKalams.length ? "Edit Kalams" : "Add Kalam"}</span>
                  </button>
                </div>
                {addedKalams.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {addedKalams.map((k) => (
                      <span
                        key={k._key}
                        className="inline-flex items-center gap-1.5 max-w-full pl-2.5 pr-1.5 py-1 rounded-lg text-[11px] font-semibold text-amber-200 bg-amber-400/10 border border-amber-400/30"
                      >
                        <span className="truncate">{k.name}</span>
                        <button
                          type="button"
                          aria-label={`Remove ${k.name}`}
                          onClick={() => {setAddedIds((prev) => prev.filter((x) => x !== k._key)); setFinalKalams((prev)=>prev.filter((r)=>r!==k._key))}}
                          className="material-symbols-outlined text-sm text-amber-300/80 hover:text-white"
                        >
                          close
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </main>
          </div>

          {/* Footer */}
          <footer className="px-6 sm:px-8 py-4 border-t border-amber-400/20 bg-[#05111f]/95 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2.5 text-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" style={{ boxShadow: "0 0 10px #fbbf24" }} />
              </span>
              <span className={`font-medium ${hasTitle && hasCurator ? "text-slate-300" : "text-amber-400"}`}>
                {hasTitle && hasCurator ? "All required poetry metadata configured" : "Awaiting required title & poet"}
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-500 font-mono text-[11px] hidden sm:inline">Diwan v2.4</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 active:scale-[0.98]"
              >
                Discard Draft
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#1c1002] transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] group shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_25px_rgba(251,191,36,0.55)] hover:scale-[1.02] border border-amber-300 disabled:opacity-50 disabled:hover:scale-100"
                style={{ background: goldGradient }}
              >
                {saving ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Publishing Poetry Collection...</span>
                  </>
                ) : (
                  <>
                    <span>Publish &amp; Save Collection</span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                  </>
                )}
              </button>
            </div>
          </footer>
        </div>

        {/* Toast */}
        <div
          className="fixed bottom-6 right-6 z-[110] pointer-events-none transition-all duration-500 flex items-center gap-3 px-4 py-3 rounded-2xl border bg-[#07172b]/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(251,191,36,0.3)]"
          style={{
            opacity: toast ? 1 : 0,
            transform: toast ? "translateY(0)" : "translateY(12px)",
            borderColor: toast?.public ? "rgba(251,191,36,0.4)" : "rgba(255,255,255,0.15)",
          }}
          role="status"
          aria-live="polite"
        >
          <div
            className="relative w-8 h-8 rounded-xl flex items-center justify-center text-slate-950 shrink-0 shadow-md"
            style={{ background: "linear-gradient(135deg, #fbbf24 0%, #fb923c 100%)", boxShadow: "0 0 12px rgba(251,191,36,0.5)" }}
          >
            <span className="material-symbols-outlined text-lg">public</span>
          </div>
          <div>
            <p className="text-xs font-bold text-white">{toast?.title}</p>
            <p className="text-[11px] text-amber-200/90 font-medium">{toast?.desc}</p>
          </div>
        </div>
      </div>

      {/* ===================== ADD KALAM PICKER ===================== */}
      {kalamOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md transition-all duration-300 font-sans text-slate-100 antialiased"
          style={{ fontFamily: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif' }}
          onClick={closeKalamModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl studio-modal-surface overflow-hidden shadow-2xl border border-amber-400/30 animate-in fade-in zoom-in-95 bg-[#07172b]/95"
          >
            <div
              className="h-[2px] w-full shrink-0 z-10"
              style={{ background: "linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.6) 30%, rgba(254, 240, 138, 0.9) 50%, rgba(251, 191, 36, 0.6) 70%, transparent)" }}
            />

            {/* 1. MODAL HEADER */}
            <header className="relative px-6 py-5 border-b border-white/[0.08] bg-[#05111f]/95 flex flex-col gap-4 shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-amber-300 relative overflow-hidden shrink-0 border border-amber-400/40 shadow-[0_0_20px_rgba(251,191,36,0.25)]"
                    style={{ background: "rgba(251, 191, 36, 0.12)" }}
                  >
                    <span className="material-symbols-outlined text-[24px]" style={{ color: "#fbbf24" }}>history_edu</span>
                    <div className="absolute inset-0 bg-amber-400/10 pointer-events-none" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h2 className="text-base sm:text-lg font-bold tracking-normal text-white uppercase font-sans leading-snug">Select Kalams &amp; Recitations</h2>
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-widest uppercase text-slate-950 shrink-0 shadow-[0_0_12px_rgba(251,191,36,0.25)]"
                        style={{ background: goldGradient }}
                      >
                        Literary Archive
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-normal tracking-normal leading-relaxed">
                      Curate verses, ghazals, and recorded recitations from your library to add to{" "}
                      <span className="text-amber-300/90 font-semibold">{newTitle.trim() || "this Diwan"}</span>
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeKalamModal}
                  title="Close modal"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-amber-400/40 transition-all duration-200 group active:scale-95 shrink-0"
                >
                  <span className="material-symbols-outlined text-lg group-hover:rotate-90 transition-transform duration-200">close</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-0.5">
                <div className="relative flex-1 flex items-center rounded-xl studio-input">
                  <span className="material-symbols-outlined text-amber-400/80 pl-3.5 pr-2 text-lg select-none shrink-0">search</span>
                  <input
                    type="text"
                    value={kalamSearch}
                    onChange={(e) => setKalamSearch(e.target.value)}
                    placeholder="Search by title, poet, opening verse (matla), or meter..."
                    className="w-full bg-transparent py-2.5 pr-8 text-xs sm:text-sm text-white placeholder-slate-400 outline-none font-medium tracking-wide"
                  />
                  <button
                    type="button"
                    onClick={() => setKalamSearch("")}
                    aria-label="Clear search"
                    className="absolute right-2.5 text-slate-400 hover:text-white text-xs"
                  >
                    <span className="material-symbols-outlined text-sm">cancel</span>
                  </button>
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 studio-scroll shrink-0">
                  <button
                    type="button"
                    onClick={() => setKalamTab("all")}
                    className={
                      kalamTab === "all"
                        ? "px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all text-[#1c1002] border border-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.3)] shrink-0"
                        : "px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all shrink-0"
                    }
                    style={kalamTab === "all" ? { background: "linear-gradient(135deg, #fbbf24 0%, #fb923c 100%)" } : undefined}
                  >
                    All Kalams ({allKalams.length})
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setKalamTab(c)}
                      className={
                        kalamTab === c
                          ? "px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all text-[#1c1002] border border-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.3)] shrink-0"
                          : "px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all shrink-0"
                      }
                      style={kalamTab === c ? { background: "linear-gradient(135deg, #fbbf24 0%, #fb923c 100%)" } : undefined}
                    >
                      {c}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setKalamTab("selected")}
                    className={
                      kalamTab === "selected"
                        ? "px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all text-[#1c1002] border border-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.3)] shrink-0"
                        : "px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide text-amber-300 bg-amber-400/10 border border-amber-400/30 transition-all shrink-0"
                    }
                    style={kalamTab === "selected" ? { background: "linear-gradient(135deg, #fbbf24 0%, #fb923c 100%)" } : undefined}
                  >
                    Selected (<span>{draftIds.length}</span>)
                  </button>
                </div>
              </div>
            </header>

            {/* 2. KALAM CARDS LIST (Scrollable) */}
            <div className="overflow-y-auto studio-scroll grow p-5 sm:p-6 space-y-3">
              {visibleKalams.length === 0 && (
                <div className="py-14 text-center text-slate-400">
                  <span className="material-symbols-outlined text-4xl text-amber-400/60">auto_stories</span>
                  <p className="mt-2 text-sm font-semibold text-slate-200">
                    {allKalams.length === 0
                      ? "Your library has no kalams yet"
                      : kalamTab === "selected" && !query
                      ? "No kalams selected yet"
                      : "No kalams match your search"}
                  </p>
                  <p className="text-xs mt-1">
                    {allKalams.length === 0 ? "Upload a kalam to start building this Diwan." : "Try a different title or verse."}
                  </p>
                </div>
              )}

              {visibleKalams.map((k) => {
                const selected = draftIds.includes(k._key);
                const lines = countLines(k.content);
                
                const isPlaying = playingKey === k._key;
                const isExpanded = expandedKey === k._key;
                return (
                  <div
                    key={k._key}
                    role="checkbox"
                    aria-checked={selected}
                    tabIndex={0}
                    onClick={() => toggleKalam(k._key)}
                    onKeyDown={(e) => {
                      if (e.key === " " || e.key === "Enter") {
                        e.preventDefault();
                        toggleKalam(k._key);
                      }
                    }}
                    className={`relative rounded-2xl p-4 transition-all duration-200 cursor-pointer border flex flex-col sm:flex-row sm:items-center justify-between gap-4 group outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 ${
                      selected
                        ? "border-amber-400/60 bg-[#08192d]/90 shadow-[0_0_20px_rgba(251,191,36,0.15)]"
                        : "border-white/10 hover:border-white/20 bg-[#08192d]/50 hover:bg-[#08192d]/70"
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border font-bold transition-all mt-0.5 sm:mt-0 ${
                          selected
                            ? "border-amber-300 text-slate-950 shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                            : "border-white/20 text-transparent bg-[#051424]"
                        }`}
                        style={selected ? { background: "linear-gradient(135deg, #fbbf24 0%, #fb923c 100%)" } : undefined}
                      >
                        <span className="material-symbols-outlined text-base font-black">check</span>
                      </div>
                      <div className="space-y-1.5 min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-sm font-bold text-white tracking-wide truncate">{k.name}</h3>
                        </div>
                        {k.content && (
                          <p
                            className={`text-xs italic font-sans leading-relaxed tracking-normal ${selected ? "text-slate-300/90" : "text-slate-300/80"}`}
                            style={
                              isExpanded
                                ? { whiteSpace: "pre-line" }
                                : { display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }
                            }
                          >
                            &quot;{k.content}&quot;
                          </p>
                        )}
                        <div className="flex items-center gap-2.5 pt-0.5 text-[11px] text-slate-400 flex-wrap">
                          {k.duration && (
                            <>
                              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                                <span className={`material-symbols-outlined text-xs ${selected ? "text-amber-400" : "text-slate-400"}`}>graphic_eq</span>
                                Recitation ({k.duration} min)
                              </span>
                              <span className="text-slate-600">•</span>
                            </>
                          )}
                          <span className="flex items-center gap-1.5 text-slate-300">
                            <span className="material-symbols-outlined text-xs text-slate-400">auto_stories</span>
                            {lines} {lines === 1 ? "Verse" : "Verses"} / {ashaarOf(k)} Ash&apos;aar
                          </span>
                        </div>
                      </div>
                    </div>

                    {(
                      <div className="flex items-center gap-2.5 sm:self-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/[0.06]">
                        <button
                          type="button"
                          title="Preview recitation"
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePreview(k);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/40 text-xs font-semibold text-slate-200 hover:text-amber-300 flex items-center gap-1.5 transition-all"
                        >
                          <span className="material-symbols-outlined text-base text-amber-400">
                            {isPlaying ? "pause" : isExpanded ? "expand_less" : "play_arrow"}
                          </span>
                          <span className="text-[11px] font-mono tracking-wide">{isPlaying ? "Pause" : isExpanded ? "Hide" : "Preview"}</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* 3. FOOTER BAR */}
            <footer className="px-6 py-4 border-t border-amber-400/20 bg-[#05111f]/95 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
                <span className="font-medium text-slate-300 tracking-wide">
                  <strong className="text-amber-300 font-bold">{draftIds.length}</strong> {draftIds.length === 1 ? "Kalam" : "Kalams"} selected{" "}
                  <span className="text-slate-600 mx-1">•</span> <span>{draftAshaar} Ash&apos;aar</span>
                  {draftSecs > 0 && (
                    <>
                      {" "}
                      <span className="text-slate-600 mx-1">•</span> <span>{fmtTime(draftSecs)} Total Recitation duration</span>
                    </>
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={closeKalamModal}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 active:scale-[0.98]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => onUploadKalam?.()}
                  className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-amber-300 hover:text-white bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 transition-all duration-200 flex items-center justify-center gap-1.5 active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-base">upload_file</span>
                  <span>Upload New Kalam</span>
                </button>
                <button
                  type="button"
                  onClick={confirmKalams}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#1c1002] transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] group shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_25px_rgba(251,191,36,0.55)] hover:scale-[1.02] border border-amber-300 tracking-wide"
                  style={{ background: goldGradient }}
                >
                  <span>
                    {draftIds.length
                      ? `Add ${draftIds.length} ${draftIds.length === 1 ? "Kalam" : "Kalams"} to Diwan`
                      : "Save Selection"}
                  </span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform text-[#1c1002]">arrow_forward</span>
                </button>
              </div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------
   USAGE — replace your old {modalOpen && ( ... )} block with:

   import CreateCollectionModal from "./CreateCollectionModal";

   <CreateCollectionModal
     open={modalOpen}
     onClose={() => setModalOpen(false)}
     newTitle={newTitle}           setNewTitle={setNewTitle}
     newCurator={newCurator}       setNewCurator={setNewCurator}
     newCategory={newCategory}     setNewCategory={setNewCategory}
     categoryOptions={categoryOptions}
     artworkFile={artworkFile}     setArtworkFile={setArtworkFile}
     userKalams={userKalams}       // [{ id, name, content, duration?, category?, audioUrl? }]
     onAddKalams={(kalams) => {}}  // optional
     onCreate={handleCreateAlbum}  // receives { isPublic, customGenre, year, kalams }
   />
------------------------------------------------------------------- */