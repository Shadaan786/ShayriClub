import { useEffect, useRef, useState } from "react";
import "./kalamPlayer.css";

export function KalamPlayer({ tracks = [], initialIndex = 0, onClose }) {
  const safeInitial = Math.min(Math.max(initialIndex, 0), Math.max(tracks.length - 1, 0));

  const [musicIndex, setMusicIndex] = useState(safeInitial);
  const [audioProgress, setAudioProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [totalText, setTotalText] = useState("00:00");
  const [curText, setCurText] = useState("00:00");

  const mediaRef = useRef(null);
  const current = tracks[musicIndex] || null;

  // when modal opens with a new initialIndex
  useEffect(() => {
    const next = Math.min(Math.max(initialIndex, 0), Math.max(tracks.length - 1, 0));
    setMusicIndex(next);
    setAudioProgress(0);
    setIsPlaying(false);
    setTotalText("00:00");
    setCurText("00:00");
  }, [initialIndex, tracks.length]);

  // when track changes: load and optionally keep playing
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
  }, [musicIndex]); // eslint-disable-line react-hooks/exhaustive-deps

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

  if (!tracks.length) {
    return (
      <div className="kpFull">
        <div className="kpBottom">
          <div className="kpMeta">
            <div className="kpTitle">No kalams</div>
            <div className="kpArtist">Add one to play</div>
          </div>
          <button className="kpCloseBtn" onClick={close}>Close</button>
        </div>
      </div>
    );
  }

  return (
    <div className="kpFull">
      {/* FULL MODAL VIDEO */}
      <video
        ref={mediaRef}
        className="kpVideo"
        // IMPORTANT: never pass "" to src
        src={current?.waveformVideoUrl || undefined}
        onTimeUpdate={updateUI}
        onLoadedMetadata={updateUI}
        onEnded={next}
        playsInline
        preload="metadata"
        // keep audio ON
        // muted={false}
        // remove crossOrigin if it causes issues
        // crossOrigin="anonymous"
      />

      {/* subtle overlay for readability */}
      <div className="kpShade" />

      {/* BOTTOM CONTROLS ONLY */}
      <div className="kpBottom">
        <div className="kpMeta">
          <div className="kpTitle">{current?.songName || "Untitled"}</div>
          <div className="kpArtist">{current?.songArtist || "Unknown"}</div>
        </div>

        <div className="kpTimeRow">
          <span>{curText}</span>
          <span>{totalText}</span>
        </div>

        <input
          className="kpProgress"
          type="range"
          min="0"
          max="100"
          value={audioProgress}
          onChange={seek}
        />

        <div className="kpControls">
          <button className="kpIcon" onClick={prev} type="button">⏮</button>
          <button className="kpPlay" onClick={playPause} type="button">
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button className="kpIcon" onClick={next} type="button">⏭</button>
        </div>

        {/* <button className="kpCloseBtn" onClick={close}>Close</button> */}
      </div>
    </div>
  );
}