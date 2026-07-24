import { useEffect, useRef, useState } from "react";
import NewKalam from "./components/NewKalam";
import { useSearchParams } from "react-router-dom";

/* ── Inline icons (no external font dependency) ── */
const Icon = {
  Search: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
    </svg>
  ),
  Bell: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  More: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}>
      <circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" />
    </svg>
  ),
  Library: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="3" y="4" width="7" height="16" rx="1" /><rect x="14" y="4" width="7" height="16" rx="1" />
    </svg>
  ),
  Explore: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <circle cx="12" cy="12" r="9" /><path d="M15 9l-2 6-6 2 2-6 6-2z" strokeLinejoin="round" />
    </svg>
  ),
  Queue: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M4 6h16M4 12h10M4 18h10" strokeLinecap="round" /><circle cx="19" cy="18" r="2" />
    </svg>
  ),
  Person: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" strokeLinecap="round" />
    </svg>
  ),
  Account: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="3" />
      <path d="M6 19c1.2-2.6 3.4-4 6-4s4.8 1.4 6 4" strokeLinecap="round" />
    </svg>
  ),
  Note: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}>
      <path d="M9 18V5l11-2v13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6.5" cy="18" r="2.5" /><circle cx="17.5" cy="16" r="2.5" />
    </svg>
  ),
  Shuffle: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M17 3l4 4-4 4M21 7H14.5c-1 0-2 .5-2.6 1.4L4 21M3 3h6.5c1 0 2 .5 2.6 1.4l1 1.5M21 21l-4-4-4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Repeat: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M17 2l4 4-4 4M3 12v-2a4 4 0 014-4h14M7 22l-4-4 4-4M21 12v2a4 4 0 01-4 4H3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  SkipPrev: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}>
      <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
    </svg>
  ),
  SkipNext: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}>
      <path d="M6 18l8.5-6L6 6v12zm2.5-6 5.5 3.9V8.1L8.5 12zM16 6h2v12h-2z" />
    </svg>
  ),
  Play: (p) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" {...p}>
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  Pause: (p) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" {...p}>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  ),
  Volume: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M4 9v6h4l5 5V4L8 9H4z" strokeLinejoin="round" />
      <path d="M17 8a5 5 0 010 8" strokeLinecap="round" />
    </svg>
  ),
  Playlist: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M4 6h11M4 12h11M4 18h6" strokeLinecap="round" /><path d="M17 10l4 3-4 3v-6z" strokeLinejoin="round" />
    </svg>
  ),
  Close: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  ),
};

// Default look for NewKalam's card when a doc's customStyles is missing a field.
const DEFAULT_CUSTOM_STYLES = {
  backdrop: "soft",
  resolvedTextColor: "light",
  bgTab: "custom",
  customColor: "#131313",
  selectedColor: "#131313",
  bgOpacity: 100,
  scrim: 40,
  resolvedTitleColor: "#dbc839",
  titleFs: "40px",
  resolvedTitleFamily: "'Playfair Display', serif",
  resolvedContentColor: "rgba(255,255,255,0.9)",
  contentFs: "22px",
  resolvedContentFamily: "'Playfair Display', serif",
  subColor: "rgba(255,255,255,0.6)",
};

// Maps a raw API kalam document (as returned by your backend) into what this
// component and NewKalam need. Pass your API docs into `tracks` as-is.
function normalizeTrack(raw, currentUserId) {
  if (!raw) return null;
  return {
    id: raw._id,
    kalId: raw._id,
    mUid: raw.createdBy,
    title: raw.title || raw.type || raw.name || "Untitled",
    content: raw.content || raw.lyrics || "",
    waveformVideoUrl: raw.kalamAudio || raw.waveformVideoUrl,
    imageSrc: raw.imageSrc || null,
    isLiked: currentUserId ? Boolean(raw.likedBy?.includes(currentUserId)) : false,
    isSaved: currentUserId ? Boolean(raw.savedBy?.includes(currentUserId)) : Boolean(raw.isSaved),
    totalLikes: raw.totalLikes ?? raw.likedBy?.length ?? 0,
    customStyles: { ...DEFAULT_CUSTOM_STYLES, ...(raw.customStyles || {}) },
    
  };
}

export default function KalamPlayer({initialIndex = 0, onClose, currentUserId, debug = false }) {
   const [SearchParams] = useSearchParams
  const rawTracks = SearchParams.get("tracks")
      const tracks = rawTracks.map((t) => normalizeTrack(t, currentUserId));
  const safeInitial = Math.min(Math.max(initialIndex, 0), Math.max(tracks.length - 1, 0));

  const [musicIndex, setMusicIndex]       = useState(safeInitial);
  const [audioProgress, setAudioProgress] = useState(0);
  const [isPlaying, setIsPlaying]         = useState(false);
  const [totalText, setTotalText]         = useState("00:00");
  const [curText, setCurText]             = useState("00:00");
 


   




  const mediaRef = useRef(null);
  const current  = tracks[musicIndex] || null;

  setTimeout(()=>{

      console.log("see tracks",tracks)

  }, 6000)

  useEffect(() => {
    const next = Math.min(Math.max(initialIndex, 0), Math.max(tracks.length - 1, 0));
    setMusicIndex(next);
    setAudioProgress(0);
    setIsPlaying(false);
    setTotalText("00:00");
    setCurText("00:00");
  }, [initialIndex, tracks.length]);

  useEffect(() => {
    const v = mediaRef.current;
    if (!v) return;
    if (!current?.waveformVideoUrl) return;

    v.load();

    if (isPlaying) {
      v.play().catch(() => setIsPlaying(false));
    } else {
      v.pause();
    }

    setAudioProgress(0);
    setCurText("00:00");
    setTotalText("00:00");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicIndex]);

  const pad2 = (n) => (n < 10 ? `0${n}` : `${n}`);
  const formatTime = (t) => {
    if (!Number.isFinite(t) || t < 0) return "00:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${pad2(m)}:${pad2(s)}`;
  };

  const updateUI = () => {
    const v = mediaRef.current;
    if (!v) return;
    const dur = v.duration;
    const ct = v.currentTime;
    setTotalText(formatTime(dur));
    setCurText(formatTime(ct));
    if (Number.isFinite(dur) && dur > 0) {
      const p = Math.floor((ct / dur) * 100);
      setAudioProgress(Number.isFinite(p) ? p : 0);
    }
  };

  const playPause = async () => {
    const v = mediaRef.current;
    if (!v) return;
    if (v.paused) {
      try {
        await v.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("play failed:", err);
        setIsPlaying(false);
      }
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const seek = (e) => {
    const v = mediaRef.current;
    if (!v || !Number.isFinite(v.duration) || v.duration <= 0) return;
    const value = Number(e.target.value);
    setAudioProgress(value);
    v.currentTime = (value / 100) * v.duration;
  };

  const next = () => {
    if (!tracks.length) return;
    setMusicIndex((p) => (p >= tracks.length - 1 ? 0 : p + 1));
  };

  const prev = () => {
    if (!tracks.length) return;
    setMusicIndex((p) => (p === 0 ? tracks.length - 1 : p - 1));
  };

  const close = () => {
    const v = mediaRef.current;
    if (v) v.pause();
    setIsPlaying(false);
    onClose?.();
  };

  return (
    <div className="kp-root">
      <style>{`
        .kp-root {
          --kp-primary: #cebdff;
          --kp-bg: #131313;
          --kp-surface: #1c1b1b;
          --kp-on-surface: #e5e2e1;
          --kp-on-surface-variant: #cac4d4;
          --kp-tertiary: #dbc839;
          --kp-tertiary-container: #af9e00;
          --kp-on-tertiary: #373100;
          --kp-outline: rgba(255,255,255,0.08);

          position: relative;
          min-height: 100vh;
          background: var(--kp-bg);
          color: var(--kp-on-surface);
          font-family: 'Outfit', system-ui, sans-serif;
          overflow-x: hidden;
        }

        .kp-bg-layer { position: fixed; inset: 0; z-index: 0; }
        .kp-bg-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transform: scale(1.05); filter: blur(3px); background: #0e0e0e; }
        .kp-bg-video.kp-debug { filter: none; transform: none; z-index: 999; pointer-events: auto; }
        .kp-bg-dark { position: absolute; inset: 0; background: rgba(0,0,0,0.4); pointer-events: none; }
        .kp-bg-shade {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(to bottom, transparent 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,1) 100%);
        }

        /* Sidebar */
        .kp-aside {
          display: none;
          position: fixed; left: 0; top: 0; height: 100%; width: 280px;
          background: rgba(19,19,19,0.5); backdrop-filter: blur(24px);
          border-right: 1px solid var(--kp-outline); z-index: 40;
          flex-direction: column; padding: 32px 0;
        }
        @media (min-width: 1024px) { .kp-aside { display: flex; } }
        .kp-brand { padding: 0 32px; margin-bottom: 48px; }
        .kp-brand h1 { font-size: 24px; font-weight: 600; color: var(--kp-primary); letter-spacing: -0.02em; margin: 0; }
        .kp-brand p { font-size: 12px; letter-spacing: 0.08em; color: var(--kp-on-surface-variant); opacity: 0.6; text-transform: uppercase; margin: 4px 0 0; }
        .kp-nav { flex: 1; padding: 0 16px; display: flex; flex-direction: column; gap: 8px; }
        .kp-nl {
          display: flex; align-items: center; gap: 16px; padding: 12px 16px;
          border-radius: 8px; color: var(--kp-on-surface-variant); background: transparent;
          border: none; cursor: pointer; font-size: 15px; text-align: left; font-family: inherit;
        }
        .kp-nl:hover { background: rgba(255,255,255,0.05); }
        .kp-nl.active { color: var(--kp-primary); background: rgba(206,189,255,0.06); border-right: 2px solid var(--kp-primary); }
        .kp-profile { padding: 0 32px; margin-top: auto; display: flex; align-items: center; gap: 12px; }
        .kp-avatar-circle {
          width: 40px; height: 40px; border-radius: 50%;
          background: #353534; border: 1px solid var(--kp-outline);
          display: flex; align-items: center; justify-content: center; color: var(--kp-primary);
        }
        .kp-profile-name { font-size: 14px; font-weight: 700; margin: 0; }
        .kp-profile-status { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--kp-primary); margin: 2px 0 0; }

        /* Header */
        .kp-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 24px; background: rgba(19,19,19,0.4); backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--kp-outline);
        }
        @media (min-width: 1024px) { .kp-header { padding-left: 300px; } }
        .kp-header-left { display: flex; align-items: center; gap: 24px; }
        .kp-word { font-size: 22px; font-weight: 600; color: var(--kp-primary); letter-spacing: -0.02em; }
        .kp-search {
          display: none; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.05); border: 1px solid var(--kp-outline);
          padding: 6px 16px; border-radius: 999px; color: var(--kp-on-surface-variant);
        }
        @media (min-width: 768px) { .kp-search { display: flex; } }
        .kp-search input {
          background: transparent; border: none; outline: none; color: var(--kp-on-surface);
          font-size: 14px; width: 192px;
        }
        .kp-search input::placeholder { color: rgba(202,196,212,0.5); }
        .kp-header-right { display: flex; align-items: center; gap: 12px; }
        .kp-icon-btn {
          background: transparent; border: none; color: var(--kp-on-surface-variant);
          padding: 8px; border-radius: 999px; cursor: pointer; display: flex;
        }
        .kp-icon-btn:hover { background: rgba(255,255,255,0.05); }

        /* Main */
        .kp-main {
          position: relative; z-index: 10;
          padding: 96px 16px 176px;
          min-height: 100vh;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
        }
        @media (min-width: 1024px) { .kp-main { padding-left: 312px; padding-right: 32px; } }
        .kp-card-wrap { width: 100%; max-width: 480px; display: flex; flex-direction: column; align-items: center; gap: 24px; }

        /* Bottom player panel */
        .kp-panel-outer { position: fixed; bottom: 0; left: 0; right: 0; z-index: 30; padding: 16px; }
        @media (min-width: 1024px) { .kp-panel-outer { left: 280px; padding: 32px; } }
        .kp-panel {
          max-width: 960px; margin: 0 auto; background: rgba(19,19,19,0.4);
          backdrop-filter: blur(20px); border: 1px solid var(--kp-outline);
          border-radius: 32px; padding: 24px; box-shadow: 0 0 30px rgba(219,200,57,0.1);
          position: relative;
        }
        .kp-dots { display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 14px; }
        .kp-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.25); cursor: pointer; transition: all 0.15s; }
        .kp-dot.active { background: var(--kp-tertiary); width: 18px; border-radius: 4px; }

        .kp-time-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
        .kp-time { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--kp-on-surface-variant); opacity: 0.6; }

        .kp-progress-wrap { position: relative; height: 6px; width: 100%; margin-bottom: 16px; }
        .kp-progress-input {
          position: absolute; inset: 0; width: 100%; height: 100%;
          background: rgba(255,255,255,0.1); border-radius: 999px; appearance: none; cursor: pointer;
        }
        .kp-progress-input::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none; width: 14px; height: 14px;
          background: var(--kp-tertiary); border-radius: 50%; cursor: pointer;
          box-shadow: 0 0 12px rgba(219,200,57,0.8); border: 2px solid white; margin-top: -4px;
        }
        .kp-progress-fill {
          position: absolute; left: 0; top: 0; height: 100%; background: var(--kp-tertiary);
          border-radius: 999px; pointer-events: none; box-shadow: 0 0 8px #dbc839;
        }

        .kp-controls-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .kp-track-info { display: none; align-items: center; gap: 12px; width: 192px; min-width: 0; }
        @media (min-width: 640px) { .kp-track-info { display: flex; } }
        .kp-track-icon {
          width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
          background: rgba(219,200,57,0.15); color: var(--kp-tertiary);
          display: flex; align-items: center; justify-content: center;
        }
        .kp-track-title { font-size: 14px; color: white; margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .kp-track-artist { font-size: 11px; color: var(--kp-on-surface-variant); margin: 2px 0 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .kp-core-controls { display: flex; align-items: center; gap: 20px; margin: 0 auto; }
        .kp-side-btn {
          width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.06);
          background: transparent; color: var(--kp-on-surface); display: flex; align-items: center;
          justify-content: center; cursor: pointer; transition: all 0.12s;
        }
        .kp-side-btn:hover { background: rgba(255,255,255,0.05); border-color: rgba(219,200,57,0.4); color: var(--kp-tertiary); }
        .kp-flat-btn { background: transparent; border: none; color: var(--kp-on-surface-variant); cursor: pointer; display: none; }
        @media (min-width: 768px) { .kp-flat-btn { display: flex; } }
        .kp-flat-btn:hover { color: var(--kp-tertiary); }
        .kp-play-btn {
          width: 56px; height: 56px; border-radius: 50%; border: none; cursor: pointer;
          background: linear-gradient(135deg, var(--kp-tertiary), var(--kp-tertiary-container));
          color: var(--kp-on-tertiary); display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 20px rgba(219,200,57,0.3); transition: transform 0.15s;
        }
        .kp-play-btn:hover { transform: scale(1.05); }

        .kp-vol-row { display: none; align-items: center; gap: 12px; width: 192px; justify-content: flex-end; }
        @media (min-width: 768px) { .kp-vol-row { display: flex; } }
        .kp-vol-track { width: 64px; height: 4px; background: rgba(255,255,255,0.1); border-radius: 999px; overflow: hidden; }
        .kp-vol-fill { background: var(--kp-tertiary); height: 100%; }

        /* Mobile bottom nav */
        .kp-mobile-nav {
          display: flex; position: fixed; bottom: 0; left: 0; right: 0; z-index: 50;
          height: 80px; align-items: center; justify-content: space-around;
          background: rgba(19,19,19,0.85); backdrop-filter: blur(24px);
          border-top: 1px solid var(--kp-outline); border-radius: 32px 32px 0 0;
        }
        @media (min-width: 1024px) { .kp-mobile-nav { display: none; } }
        .kp-mnav-item { display: flex; flex-direction: column; align-items: center; gap: 4px; color: var(--kp-on-surface-variant); }
        .kp-mnav-item.active { color: var(--kp-tertiary); }
        .kp-mnav-item span { font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; }
      `}</style>

      {/* Background: current track's video doubles as the media source */}
      <div className="kp-bg-layer">
        <video
          ref={mediaRef}
          className={`kp-bg-video${debug ? " kp-debug" : ""}`}
          src={current?.waveformVideoUrl || undefined}
          onTimeUpdate={updateUI}
          onLoadedMetadata={updateUI}
          onEnded={next}
          onError={(e) => console.error("Video failed to load:", current?.waveformVideoUrl, e.target.error)}
          controls={debug}
          playsInline
          preload="metadata"
        />
        <div className="kp-bg-dark" />
        <div className="kp-bg-shade" />
      </div>

      {/* Sidebar */}
      <aside className="kp-aside">
        <div className="kp-brand">
          <h1>Kalam</h1>
          <p>Premium Audio</p>
        </div>
        <nav className="kp-nav">
          <button className="kp-nl active" type="button"><Icon.Library />Library</button>
          <button className="kp-nl" type="button"><Icon.Explore />Discover</button>
          <button className="kp-nl" type="button"><Icon.Queue />Playlists</button>
          <button className="kp-nl" type="button"><Icon.Person />Artists</button>
        </nav>
        <div className="kp-profile">
          <div className="kp-avatar-circle"><Icon.Account /></div>
          <div>
            <p className="kp-profile-name">Premium User</p>
            <p className="kp-profile-status">Active</p>
          </div>
        </div>
      </aside>

      {/* Header */}
      <header className="kp-header">
        <div className="kp-header-left">
          <span className="kp-word">KALAM PLAYER</span>
          <div className="kp-search">
            <Icon.Search />
            <input placeholder="Search tracks..." type="text" />
          </div>
        </div>
        <div className="kp-header-right">
          <button className="kp-icon-btn" type="button"><Icon.Bell /></button>
          {onClose ? (
            <button className="kp-icon-btn" type="button" onClick={close}><Icon.Close /></button>
          ) : (
            <button className="kp-icon-btn" type="button"><Icon.More /></button>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="kp-main">
        <div className="kp-card-wrap">
          {tracks.length === 0 ? (
            <p style={{ color: "var(--kp-on-surface-variant)" }}>No kalams to play</p>
          ) : (
            <NewKalam
              title={current?.title}
              content={current?.content}
              type="text"
              imageSrc={current?.imageSrc}
              mUid={current?.mUid}
              kalId={current?.kalId}
              isLiked2={current?.isLiked}
              isSaved={current?.isSaved}
              customStyles={current?.customStyles}
            />
          )}
        </div>
      </main>

      {/* Floating player panel */}
      {tracks.length > 0 && (
        <div className="kp-panel-outer">
          <div className="kp-panel">
            {tracks.length > 1 && (
              <div className="kp-dots">
                {tracks.map((_, i) => (
                  <div
                    key={i}
                    className={`kp-dot${i === musicIndex ? " active" : ""}`}
                    onClick={() => setMusicIndex(i)}
                  />
                ))}
              </div>
            )}

            <div className="kp-time-row">
              <span className="kp-time">{curText}</span>
              <span className="kp-time">{totalText}</span>
            </div>

            <div className="kp-progress-wrap">
              <input
                className="kp-progress-input"
                type="range"
                min="0"
                max="100"
                value={audioProgress}
                onChange={seek}
              />
              <div className="kp-progress-fill" style={{ width: `${audioProgress}%` }} />
            </div>

            <div className="kp-controls-row">
              <div className="kp-track-info">
                <div className="kp-track-icon"><Icon.Note /></div>
                <div style={{ overflow: "hidden" }}>
                  <p className="kp-track-title">{current?.title}</p>
                  <p className="kp-track-artist">{current?.totalLikes} likes</p>
                </div>
              </div>

              <div className="kp-core-controls">
                <button className="kp-flat-btn" type="button" title="Shuffle"><Icon.Shuffle /></button>
                <button className="kp-side-btn" type="button" onClick={prev} title="Previous"><Icon.SkipPrev /></button>
                <button className="kp-play-btn" type="button" onClick={playPause} title={isPlaying ? "Pause" : "Play"}>
                  {isPlaying ? <Icon.Pause /> : <Icon.Play />}
                </button>
                <button className="kp-side-btn" type="button" onClick={next} title="Next"><Icon.SkipNext /></button>
                <button className="kp-flat-btn" type="button" title="Repeat"><Icon.Repeat /></button>
              </div>

              <div className="kp-vol-row">
                <Icon.Volume />
                <div className="kp-vol-track"><div className="kp-vol-fill" style={{ width: "70%" }} /></div>
                <button className="kp-flat-btn" style={{ display: "flex" }} type="button"><Icon.Playlist /></button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile bottom nav */}
      <nav className="kp-mobile-nav">
        <div className="kp-mnav-item active"><Icon.Library /><span>Home</span></div>
        <div className="kp-mnav-item"><Icon.Explore /><span>Discover</span></div>
        <div className="kp-mnav-item"><Icon.Note /><span>Library</span></div>
        <div className="kp-mnav-item"><Icon.Account /><span>Profile</span></div>
      </nav>
    </div>
    
  );
}