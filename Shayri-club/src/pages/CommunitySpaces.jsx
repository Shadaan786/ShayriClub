import React, { useEffect, useState, useContext, useRef } from "react";
import PostCard from "./components/PostCard";
import Icon from "./components/icons/Icon";
import axiosInstance from "@/Apis/axiosInstance";
import { MyVerticallyCenteredModal } from "./components/Modals/MyModal";
import NewKalam from "./components/NewKalam";
import { ModalContext } from "./Contexts/ModalContext";
/**
 * CommunitySPaces — fully self-contained React port of the "Aura Poetry" global feed.
 * No Tailwind or icon-font dependency: all styling lives in the injected <style> block
 * and all icons are inline SVG, so this drops into any React project with zero setup.
 *
 * Comments are no longer a shared modal — each PostCard owns its own comment panel,
 * which renders as an inline-expand accordion on desktop and a bottom sheet on mobile.
 */

const TITLE_FONTS = [
  { id: "cormorant",       label: "Cormorant Garamond", sample: "یاد کا لمحہ",  family: "'Cormorant Garamond', serif",      googleParam: "Cormorant+Garamond:ital,wght@1,300;1,400;1,600" },
  { id: "playfair",        label: "Playfair Display",   sample: "Shaam-e-Ghazal", family: "'Playfair Display', serif",          googleParam: "Playfair+Display:ital,wght@1,400;1,700" },
  { id: "im_fell",         label: "IM Fell English",    sample: "Dil ki Baat",    family: "'IM Fell English', serif",            googleParam: "IM+Fell+English:ital@1" },
  { id: "sorts_mill",      label: "Sorts Mill Goudy",   sample: "Raat Ka Sitara", family: "'Sorts Mill Goudy', serif",           googleParam: "Sorts+Mill+Goudy:ital@1" },
  { id: "spectral",        label: "Spectral",            sample: "Aashiqui",       family: "'Spectral', serif",                   googleParam: "Spectral:ital,wght@1,300;1,400;1,600" },
  { id: "eb_garamond",     label: "EB Garamond",         sample: "Dard-e-Dil",     family: "'EB Garamond', serif",                googleParam: "EB+Garamond:ital,wght@1,400;1,700" },
  { id: "libre_baskerville",label: "Libre Baskerville",  sample: "Tanhai",         family: "'Libre Baskerville', serif",          googleParam: "Libre+Baskerville:ital@1" },
  { id: "gfs_didot",       label: "GFS Didot",           sample: "Mohabbat",       family: "'GFS Didot', serif",                  googleParam: "GFS+Didot" },
  { id: "dm_serif",        label: "DM Serif Display",    sample: "Khwab",          family: "'DM Serif Display', serif",           googleParam: "DM+Serif+Display:ital@1" },
  { id: "cinzel",          label: "Cinzel",              sample: "KALAM",          family: "'Cinzel', serif",                     googleParam: "Cinzel:wght@400;700" },
  { id: "della_respira",   label: "Della Respira",       sample: "Ruh ki Awaaz",   family: "'Della Respira', serif",              googleParam: "Della+Respira" },
  { id: "alice",           label: "Alice",               sample: "Teri Yaad",      family: "'Alice', serif",                      googleParam: "Alice" },
];


const CONTENT_FONTS = [
  { id: "cormorant_body",  label: "Cormorant Garamond", sample: "Har saans mein teri khushbu hai…", family: "'Cormorant Garamond', serif",   googleParam: "Cormorant+Garamond:ital,wght@1,300;1,400" },
  { id: "eb_garamond_body",label: "EB Garamond",         sample: "Main woh sitara hoon jo doob gaya…", family: "'EB Garamond', serif",        googleParam: "EB+Garamond:ital,wght@1,400" },
  { id: "spectral_body",   label: "Spectral Light",      sample: "Zindagi ek ghazal thi, adhoori rahi…", family: "'Spectral', serif",         googleParam: "Spectral:ital,wght@1,300;1,400" },
  { id: "im_fell_body",    label: "IM Fell English",     sample: "Raaton ko taaron se baatein karta hoon…", family: "'IM Fell English', serif", googleParam: "IM+Fell+English:ital@1" },
  { id: "lora",            label: "Lora",                sample: "Tere bina yeh chaand bhi suna lagta hai…", family: "'Lora', serif",          googleParam: "Lora:ital,wght@1,400;1,500" },
  { id: "merriweather",    label: "Merriweather Light",  sample: "Dil ke dareecha se teri jhalak aati hai…", family: "'Merriweather', serif",  googleParam: "Merriweather:ital,wght@1,300" },
  { id: "crimson",         label: "Crimson Pro",         sample: "Aankhon mein teri sirf teri tasveer hai…", family: "'Crimson Pro', serif",   googleParam: "Crimson+Pro:ital,wght@1,300;1,400" },
  { id: "libre_bask_body", label: "Libre Baskerville",   sample: "Tu hai toh sab kuch hai, tu nahi toh kuch bhi nahi…", family: "'Libre Baskerville', serif", googleParam: "Libre+Baskerville:ital@1" },
  { id: "noto_serif",      label: "Noto Serif",          sample: "یہ عشق نہیں آسان بس اتنا سمجھ لیجے", family: "'Noto Serif', serif",         googleParam: "Noto+Serif:ital,wght@1,300;1,400" },
  { id: "noto_nastaliq",   label: "Noto Nastaliq Urdu",  sample: "دل کے آئینے میں تیری تصویر ہے",         family: "'Noto Nastaliq Urdu', serif", googleParam: "Noto+Nastaliq+Urdu:wght@400;600" },
];

const buildGoogleFontsUrl = () => {
  const all = [...TITLE_FONTS, ...CONTENT_FONTS];
  const seen = new Set();
  const params = all
    .filter(f => { if (seen.has(f.googleParam)) return false; seen.add(f.googleParam); return true; })
    .map(f => `family=${f.googleParam}`)
    .join("&");
  return `https://fonts.googleapis.com/css2?${params}&family=DM+Mono:wght@300;400&display=swap`;
};


const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Noto+Nastaliq+Urdu:wght@400;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        @import url('${buildGoogleFontsUrl()}');
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap');
.cs-root, .cs-root *, .cs-root *::before, .cs-root *::after {
  box-sizing: border-box;
}
.cs-root {
  --primary-container: #d4af37;
  --primary: #f2ca50;
  --on-surface: #e3e2e7;
  --on-surface-variant: #d0c5af;
  --surface-container-lowest: #0d0e12;
  --surface-container-low: #1a1b1f;
  --surface-container: #1e1f23;
  --surface-container-high: #292a2e;
  --background: #0A0A0F;
  font-family: 'DM Sans', sans-serif;
  background: var(--background);
  color: var(--on-surface);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}
.cs-font-poetry { font-family: 'Playfair Display', serif; }

/* scrollbars */
.cs-root ::-webkit-scrollbar { width: 4px; }
.cs-root ::-webkit-scrollbar-track { background: transparent; }
.cs-root ::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.2); border-radius: 4px; }
.cs-root ::-webkit-scrollbar-thumb:hover { background: rgba(212,175,55,0.5); }

@keyframes cs-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: .5; transform: scale(1.1); }
}
.cs-pulse-dot { animation: cs-pulse 2s cubic-bezier(0.4,0,0.6,1) infinite; }

@keyframes cs-shimmer {
  0% { left: -100%; }
  100% { left: 200%; }
}
.cs-shimmer {
  position: absolute;
  top: 0; left: -100%;
  width: 50%; height: 100%;
  background: linear-gradient(to right, transparent, rgba(212,175,55,0.1), transparent);
  transform: skewX(-20deg);
  animation: cs-shimmer 4s infinite;
  pointer-events: none;
}

.cs-ornament-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.cs-ornament-line::before, .cs-ornament-line::after {
  content: "";
  height: 1px;
  flex-grow: 1;
  background: linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent);
}
.cs-diamond {
  width: 6px; height: 6px;
  background: #d4af37;
  transform: rotate(45deg);
  opacity: 0.6;
  box-shadow: 0 0 4px rgba(212,175,55,0.5);
  flex-shrink: 0;
}

/* Header */
.cs-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  height: 64px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 20px;
  padding: 0 20px;
  background: rgba(13,14,18,0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(212,175,55,0.2);
}
@media (min-width: 768px) { .cs-header { padding: 0 40px; } }
.cs-header-left { display: flex; align-items: center; gap: 20px; min-width: 0; }
.cs-header-center { display: flex; align-items: center; }
.cs-header-right { display: flex; align-items: center; gap: 20px; justify-self: end; }
@media (min-width: 1024px) { .cs-menu-btn { display: none; } }

/* ── Global nav brand (gold theme) ─────────────────────────── */
.cs-gnav-brand { display: flex; align-items: center; gap: 10px; }
.cs-gnav-logo-wrap { position: relative; display: flex; align-items: center; }
.cs-gnav-logo-glow {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, #f2ca50, #d4af37, #f5e6c0);
  border-radius: 50%; filter: blur(10px); opacity: 0.35;
  transition: opacity 0.4s;
}
.cs-gnav-brand:hover .cs-gnav-logo-glow { opacity: 0.65; }
.cs-gnav-logo-img {
  position: relative; height: 30px; width: auto;
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.5));
  transition: transform 0.3s ease;
}
.cs-gnav-brand:hover .cs-gnav-logo-img { transform: scale(1.05); }
.cs-gnav-wordmark {
  position: relative; display: inline-block;
  font-size: 21px; line-height: 1; font-weight: 900; letter-spacing: 0.02em;
}
.cs-gnav-wordmark-glow {
  position: absolute; inset: 0; filter: blur(10px); opacity: 0.4;
  background: linear-gradient(90deg, #f2ca50, #d4af37, #f5e6c0);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  font-family: 'Playfair Display', serif;
}
.cs-gnav-wordmark-text { position: relative; }
.cs-gnav-wm-a {
  font-family: 'Dancing Script', cursive;
  background: linear-gradient(90deg, #f5e6c0, #d4af37);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.cs-gnav-wm-ur {
  font-family: 'Noto Nastaliq Urdu', serif;
  display: inline-block; margin: 0 -1px; transform: translateY(2px);
  background: linear-gradient(90deg, #f2ca50, #e8c473, #d4af37);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}

/* ── Global nav links ──────────────────────────────────────── */
.cs-gnav-links { display: flex; align-items: center; gap: 26px; height: 100%; margin-left: 8px; }
.cs-gnav-link {
  position: relative;
  font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--on-surface-variant); text-decoration: none;
  font-family: 'DM Sans', sans-serif; font-weight: 700;
  height: 64px; display: flex; align-items: center;
  transition: color 0.15s; cursor: pointer;
}
.cs-gnav-link:hover { color: var(--on-surface); }
.cs-gnav-link.active { color: var(--primary-container); }
.cs-gnav-link.active::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: 0;
  height: 2px; background: linear-gradient(90deg, rgba(212,175,55,0.9), rgba(212,175,55,0.3));
  box-shadow: 0 0 8px rgba(212,175,55,0.4);
}
@media (max-width: 1024px) {
  .cs-gnav-links { display: none; }
}

.cs-brand { display: flex; align-items: center; gap: 12px; }
.cs-brand-icon {
  width: 32px; height: 32px; border-radius: 9999px;
  background: rgba(212,175,55,0.1);
  border: 1px solid rgba(212,175,55,0.4);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 10px rgba(212,175,55,0.2);
  color: var(--primary-container);
}
.cs-brand-title {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 24px;
  letter-spacing: 0.02em;
  color: var(--on-surface);
  margin: 0;
}
.cs-header-right { display: flex; align-items: center; gap: 20px; }
.cs-live-pill {
  display: none;
  align-items: center;
  gap: 8px;
  background: rgba(30,31,35,0.5);
  border: 1px solid rgba(212,175,55,0.2);
  border-radius: 9999px;
  padding: 6px 12px;
}
@media (min-width: 768px) { .cs-live-pill { display: flex; } }
.cs-live-dot { width: 8px; height: 8px; border-radius: 9999px; background: var(--primary-container); }
.cs-live-label { font-size: 11px; color: var(--primary-container); text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; }
.cs-header-icons { display: flex; gap: 16px; color: rgba(212,175,55,0.7); }
.cs-header-icons button { background: none; border: none; padding: 0; cursor: pointer; color: inherit; display: flex; }
.cs-header-icons button:hover { color: var(--primary-container); }
.cs-header-divider { width: 1px; height: 24px; background: rgba(212,175,55,0.2); margin: 0 4px; }
.cs-avatar-sm {
  width: 32px; height: 32px; border-radius: 9999px;
  border: 1px solid rgba(212,175,55,0.4);
  object-fit: cover; cursor: pointer;
  box-shadow: 0 0 8px rgba(212,175,55,0.2);
}

/* ── Navbar icon alignment fixes ───────────────────────────── */
.cs-header-icons { align-items: center; gap: 6px; }
.cs-header-icons button {
  width: 36px; height: 36px;
  align-items: center; justify-content: center;
  border-radius: 9999px;
  line-height: 0;
  transition: color 0.2s ease, background-color 0.2s ease;
}
.cs-header-icons button:hover { background: rgba(212,175,55,0.1); }
.cs-header-icons button svg,
.cs-header-icons button > * { display: block; }
.cs-header-right { gap: 12px; }
.cs-header-divider { margin: 0 2px; flex-shrink: 0; }
.cs-avatar-sm { display: block; flex-shrink: 0; }
.cs-menu-btn {
  width: 36px; height: 36px;
  display: inline-flex; align-items: center; justify-content: center;
  color: rgba(212,175,55,0.8);
  line-height: 0; cursor: pointer; flex-shrink: 0;
}
.cs-menu-btn > * { display: block; }
@media (min-width: 1024px) { .cs-menu-btn { display: none; } }

/* ── Keep search / bell / avatar on the far right when the center nav is hidden ── */
@media (max-width: 1024px) {
  .cs-header { grid-template-columns: 1fr auto; }
  .cs-header-right { justify-self: end; margin-left: auto; }
}

/* Layout */
.cs-layout {
  flex: 1;
  display: flex;
  margin-top: 64px;
  max-width: 1400px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

/* Left sidebar — fixed to the viewport, aligned with the centered 1400px layout */
.cs-sidebar-left {
  display: none;
  flex-direction: column;
  width: 256px;
  border-right: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(13,14,18,0.4);
  padding: 24px;
  overflow-y: auto;
  position: fixed;
  top: 64px;
  bottom: 0;
  left: max(0px, calc((100vw - 1400px) / 2));
  z-index: 30;
}
@media (min-width: 1024px) { .cs-sidebar-left { display: flex; } }
.cs-nav { display: flex; flex-direction: column; gap: 8px; }
.cs-nav-section {
  font-size: 10px; font-weight: 700; color: rgba(212,175,55,0.6);
  text-transform: uppercase; letter-spacing: 0.2em;
  margin: 24px 0 8px 12px;
}
.cs-nav-section:first-child { margin-top: 0; }
.cs-nav-link {
  display: flex; align-items: center; gap: 12px;
  padding: 9px 12px 9px 14px;
  color: var(--on-surface-variant);
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.02em;
  transition: color 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
  border-left: 2px solid transparent;
  background: none;
}
.cs-nav-link:hover {
  color: var(--primary-container);
}
.cs-nav-link.active {
  color: var(--primary-container);
  border-left: 2px solid var(--primary-container);
  font-weight: 500;
}

/* ── Sidebar icon + bottom-pinned settings ─────────────────── */
.cs-nav-icon {
  width: 20px; height: 20px;
  display: inline-flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  line-height: 0;
}
.cs-nav-icon svg { display: block; }
.cs-nav-link span:not(.cs-nav-icon) { line-height: 1.2; }
.cs-sidebar-left .cs-nav { flex: 1 1 auto; }
.cs-sidebar-bottom {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(212,175,55,0.15);
  display: flex; flex-direction: column; gap: 8px;
  flex-shrink: 0;
}
.cs-sidebar-bottom .cs-nav-section { margin: 0 0 4px 12px; }

/* Main — offset to make room for the fixed sidebars */
.cs-main {
  flex: 1;
  overflow-y: auto;
  padding: 32px 20px;
  display: flex;
  justify-content: center;
}
@media (min-width: 768px) { .cs-main { padding: 32px; } }
@media (min-width: 1024px) { .cs-main { margin-left: 256px; } }
@media (min-width: 1280px) { .cs-main { margin-right: 288px; } }
.cs-feed { max-width: 672px; width: 100%; display: flex; flex-direction: column; gap: 32px; padding-bottom: 96px; }
@media (min-width: 1024px) { .cs-feed { padding-bottom: 32px; } }

/* Composer */
.cs-composer {
  background: rgba(13,14,18,0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212,175,55,0.2);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}
  .cs-main-composer {
  padding-bottom: 32px;
  border-bottom: 1px solid transparent;
  border-image: linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent) 1;
}
.cs-composer-row { display: flex; gap: 16px; }
.cs-avatar-md { width: 40px; height: 40px; border-radius: 9999px; border: 1px solid rgba(212,175,55,0.4); object-fit: cover; flex-shrink: 0; }
.cs-composer-body { flex: 1; display: flex; flex-direction: column; gap: 12px; min-width: 0; }
.cs-textarea {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  color: var(--on-surface);
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 18px;
  line-height: 1.6;
  min-height: 80px;
  padding: 0;
}
.cs-textarea::placeholder { color: rgba(208,197,175,0.4); }
.cs-composer-toolbar {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid rgba(212,175,55,0.1);
  flex-wrap: wrap;
  gap: 8px;
}
.cs-toolbar-icons { display: flex; gap: 4px; align-items: center; }
.cs-tool-btn {
  width: 32px; height: 32px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: rgba(212,175,55,0.6);
  background: none; border: none; cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease;
}
.cs-tool-btn:hover { color: var(--primary-container); background: rgba(212,175,55,0.1); }
.cs-toolbar-divider { width: 1px; height: 16px; background: rgba(212,175,55,0.2); margin: 0 4px; }
.cs-publish-btn {
  padding: 8px 24px; border-radius: 8px;
  background: rgba(212,175,55,0.1);
  border: 1px solid rgba(212,175,55,0.3);
  color: var(--primary-container);
  font-weight: 700; font-size: 13px;
  letter-spacing: 0.2em; text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(212,175,55,0.1);
  transition: background-color 0.2s ease, color 0.2s ease;
}
.cs-publish-btn:hover { background: var(--primary-container); color: var(--surface-container-lowest); }

/* Post cards */
.cs-posts { display: flex; flex-direction: column; gap: 32px; }
.cs-post-card {
  background: linear-gradient(135deg, rgba(26,27,31,0.7) 0%, rgba(13,14,18,0.8) 100%);
  box-shadow: inset 0 0 20px rgba(212,175,55,0.02), 0 4px 20px rgba(0,0,0,0.3);
  border: 1px solid rgba(212,175,55,0.15);
  border-radius: 16px;
  padding: 32px;
  transition: box-shadow 0.3s ease;
}
.cs-post-card:hover { box-shadow: 0 8px 30px rgba(0,0,0,0.5); }
.cs-post-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
.cs-avatar-lg { width: 48px; height: 48px; border-radius: 9999px; border: 1px solid rgba(212,175,55,0.3); object-fit: cover; }
.cs-post-author { display: flex; flex-direction: column; }
.cs-author-name { font-family: 'Playfair Display', serif; font-size: 14px; font-weight: 700; color: var(--primary-container); letter-spacing: 0.05em; }
.cs-post-time { font-size: 11px; color: rgba(208,197,175,0.6); letter-spacing: 0.05em; }
.cs-verified-badge {
  margin-left: auto; color: var(--primary-container);
  background: rgba(212,175,55,0.1);
  padding: 6px; border-radius: 9999px;
  border: 1px solid rgba(212,175,55,0.3);
  box-shadow: 0 0 10px rgba(212,175,55,0.2);
  display: flex;
}
.cs-post-text {
  text-align: center;
  margin: 32px 0;
}
.cs-post-text p {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: rgba(227,226,231,0.95);
  margin: 0;
}

/* Album embed */
.cs-album-card {
  display: flex; gap: 16px;
  background: rgba(13,14,18,0.5);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(212,175,55,0.2);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s ease;
}
.cs-album-card:hover { border-color: rgba(212,175,55,0.4); }
.cs-album-card:hover .cs-album-cover img { transform: scale(1.05); }
.cs-album-cover {
  width: 96px; height: 96px; flex-shrink: 0;
  border-radius: 8px; overflow: hidden;
  border: 1px solid rgba(212,175,55,0.3);
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
}
.cs-album-cover img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.7s ease; }
.cs-album-body { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 8px; position: relative; z-index: 1; }
.cs-album-title { font-family: 'Playfair Display', serif; color: var(--primary-container); font-size: 18px; letter-spacing: 0.02em; margin: 0; }
.cs-album-meta { color: rgba(208,197,175,0.7); font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; margin: 4px 0 0 0; }
.cs-album-cta { display: flex; align-items: center; gap: 8px; color: var(--primary-container); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; margin-top: 8px; }

/* Kalam embed */
.cs-kalam-card {
  padding: 24px; border-radius: 12px;
  border: 1px solid rgba(212,175,55,0.2);
  background: rgba(13,14,18,0.5);
  position: relative; overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s ease;
}
.cs-kalam-card:hover { border-color: rgba(212,175,55,0.5); }
.cs-kalam-bar {
  position: absolute; top: 0; left: 0; width: 6px; height: 100%;
  background: linear-gradient(to bottom, var(--primary-container), transparent);
}
.cs-kalam-inner { padding-left: 16px; position: relative; z-index: 1; }
.cs-kalam-title { font-family: 'Playfair Display', serif; color: var(--primary-container); font-size: 20px; margin: 0 0 12px 0; letter-spacing: 0.02em; }
.cs-kalam-ornament { margin: 12px 0; width: 50%; }
.cs-kalam-text {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: rgba(208,197,175,0.8);
  font-size: 16px;
  line-height: 1.8;
  margin: 0 0 16px 0;
}
.cs-kalam-link {
  color: var(--primary-container);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  border-bottom: 1px solid rgba(212,175,55,0.3);
  padding-bottom: 4px;
}

/* Post footer */
.cs-post-footer {
  display: flex; align-items: center; justify-content: space-between;
  margin-top: 24px; padding-top: 16px;
  border-top: 1px solid rgba(212,175,55,0.1);
  color: rgba(212,175,55,0.6);
}
.cs-post-footer-left { display: flex; gap: 24px; }
.cs-metric-btn {
  display: flex; align-items: center; gap: 8px;
  background: none; border: none; cursor: pointer;
  color: inherit; font-size: 12px; font-weight: 500;
  transition: color 0.2s ease;
}
.cs-metric-btn:hover { color: var(--primary-container); }

/* Right sidebar — fixed to the viewport, aligned with the centered 1400px layout.
   Holds the widgets up top and the composer pinned to the bottom. */
.cs-sidebar-right {
  display: none;
  flex-direction: column;
  width: 288px;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(13,14,18,0.4);
  padding: 24px;
  position: fixed;
  top: 64px;
  bottom: 0;
  right: max(0px, calc((100vw - 1400px) / 2));
  z-index: 30;
  overflow-y: auto;
}
@media (min-width: 1280px) { .cs-sidebar-right { display: flex; } }
.cs-sidebar-right-content {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.cs-sidebar-right-top { display: flex; flex-direction: column; gap: 24px; }
.cs-widget {
  background: rgba(26,27,31,0.4);
  border: 1px solid rgba(212,175,55,0.2);
  border-radius: 12px;
  padding: 20px;
  position: relative;
  overflow: hidden;
}
.cs-widget-title { font-size: 10px; font-weight: 700; color: rgba(212,175,55,0.6); text-transform: uppercase; letter-spacing: 0.2em; margin: 0 0 16px 0; }
.cs-status-row { display: flex; align-items: flex-start; gap: 12px; }
.cs-status-icon {
  width: 32px; height: 32px; border-radius: 9999px;
  background: rgba(212,175,55,0.1);
  border: 1px solid rgba(212,175,55,0.3);
  display: flex; align-items: center; justify-content: center;
  color: var(--primary-container);
  flex-shrink: 0;
}
.cs-status-title { font-family: 'Playfair Display', serif; font-size: 13px; color: var(--primary-container); letter-spacing: 0.02em; margin: 0; line-height: 1.4; }
.cs-status-sub { font-size: 11px; color: rgba(208,197,175,0.6); margin: 4px 0 0 0; font-style: italic; }
.cs-metric-row { display: flex; justify-content: space-between; align-items: center; }
.cs-metric-label { font-size: 12px; color: var(--on-surface-variant); }
.cs-metric-value { font-size: 13px; color: var(--primary-container); font-weight: 700; font-family: monospace; }
.cs-metric-divider { height: 1px; background: rgba(212,175,55,0.1); width: 100%; margin: 12px 0; }

/* Bottom nav */
.cs-bottom-nav {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 50;
  border-radius: 16px 16px 0 0;
  background: rgba(13,14,18,0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(212,175,55,0.2);
  box-shadow: 0 -4px 30px rgba(0,0,0,0.8);
  display: flex; justify-content: space-around; align-items: center;
  height: 80px; padding: 0 16px;
}
@media (min-width: 768px) { .cs-bottom-nav { display: none; } }
.cs-bnav-item {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  width: 64px; height: 64px; border-radius: 12px;
  color: var(--on-surface-variant);
  cursor: pointer;
  background: none; border: none;
  transition: color 0.2s ease;
}
.cs-bnav-item:hover { color: var(--primary-container); }
.cs-bnav-item.active {
  color: var(--primary-container);
  background: rgba(212,175,55,0.1);
  border: 1px solid rgba(212,175,55,0.3);
  box-shadow: 0 0 10px rgba(212,175,55,0.1);
  width: auto; padding: 8px 24px;
}
.cs-bnav-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px; }
.cs-bnav-label.bold { font-weight: 700; }

/* ---------------- Selection modal (Kalam / Album picker) ---------------- */
.cs-modal-inner {
  width: 100%;
  max-width: 640px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(26,27,31,0.98) 0%, rgba(13,14,18,0.99) 100%);
  border: 1px solid rgba(212,175,55,0.25);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.6), inset 0 0 30px rgba(212,175,55,0.02);
  overflow: hidden;
}
.cs-modal-header {
  padding: 28px 32px 20px 32px;
  border-bottom: 1px solid rgba(212,175,55,0.12);
  flex-shrink: 0;
}
.cs-modal-title {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 24px;
  color: var(--on-surface);
  margin: 0 0 6px 0;
  letter-spacing: 0.01em;
}
.cs-modal-subtitle {
  font-size: 12px;
  color: rgba(208,197,175,0.6);
  letter-spacing: 0.04em;
  margin: 0;
}
.cs-modal-tabs {
  display: flex;
  gap: 8px;
  padding: 16px 32px 0 32px;
  flex-shrink: 0;
}
.cs-modal-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 9999px;
  border: 1px solid rgba(212,175,55,0.15);
  background: rgba(13,14,18,0.4);
  color: var(--on-surface-variant);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.cs-modal-tab:hover { color: var(--primary-container); border-color: rgba(212,175,55,0.3); }
.cs-modal-tab.active {
  background: rgba(212,175,55,0.12);
  border-color: rgba(212,175,55,0.4);
  color: var(--primary-container);
  box-shadow: 0 0 12px rgba(212,175,55,0.15);
}
.cs-modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 24px 32px 8px 32px;
}
.cs-modal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  padding-bottom: 16px;
}
.cs-modal-empty {
  text-align: center;
  padding: 48px 0;
  color: rgba(208,197,175,0.5);
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 15px;
}
.cs-modal-card {
  position: relative;
  border-radius: 14px;
  border: 1px solid rgba(212,175,55,0.15);
  background: rgba(13,14,18,0.5);
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
  overflow: hidden;
}
.cs-modal-card:hover {
  border-color: rgba(212,175,55,0.4);
  transform: translateY(-2px);
}
.cs-modal-card.selected {
  border-color: var(--primary-container);
  box-shadow: 0 0 0 1px rgba(212,175,55,0.5), 0 4px 20px rgba(212,175,55,0.15);
}
.cs-modal-check {
  position: absolute;
  top: 10px; right: 10px;
  width: 24px; height: 24px;
  border-radius: 9999px;
  background: var(--primary-container);
  color: var(--surface-container-lowest);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 10px rgba(212,175,55,0.5);
  z-index: 2;
}
.cs-modal-card-album {
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 12px;
}
.cs-modal-album-cover {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(212,175,55,0.2);
}
.cs-modal-album-cover img { width: 100%; height: 100%; object-fit: cover; display: block; }
.cs-modal-album-body { padding: 0 4px 4px 4px; }
.cs-modal-album-title {
  font-family: 'Playfair Display', serif;
  color: var(--primary-container);
  font-size: 15px;
  margin: 0 0 4px 0;
  letter-spacing: 0.01em;
}
.cs-modal-album-meta {
  font-size: 10px;
  color: rgba(208,197,175,0.6);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0;
}
.cs-modal-card .cs-kalam-card {
  border: none;
  border-radius: 0;
  background: transparent;
  pointer-events: none;
}
.cs-modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 20px 32px;
  border-top: 1px solid rgba(212,175,55,0.12);
  flex-shrink: 0;
}
.cs-modal-cancel-btn {
  padding: 10px 20px;
  border-radius: 8px;
  background: none;
  border: 1px solid rgba(212,175,55,0.2);
  color: var(--on-surface-variant);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}
.cs-modal-cancel-btn:hover { border-color: rgba(212,175,55,0.4); color: var(--primary-container); }
.cs-modal-confirm-btn {
  padding: 10px 24px;
  border-radius: 8px;
  background: rgba(212,175,55,0.12);
  border: 1px solid rgba(212,175,55,0.4);
  color: var(--primary-container);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(212,175,55,0.1);
  transition: background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease;
}
.cs-modal-confirm-btn:hover:not(:disabled) { background: var(--primary-container); color: var(--surface-container-lowest); }
.cs-modal-confirm-btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* ---------------- Post menu (dropdown) ---------------- */
.cs-postmenu-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  background: transparent;
}
.cs-postmenu {
  position: fixed;
  z-index: 91;
  width: 190px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: linear-gradient(180deg, rgba(26,27,31,0.98) 0%, rgba(13,14,18,0.99) 100%);
  border: 1px solid rgba(212,175,55,0.25);
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.6), inset 0 0 20px rgba(212,175,55,0.02);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
.cs-postmenu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 8px;
  background: none;
  color: var(--on-surface-variant);
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  letter-spacing: 0.02em;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.cs-postmenu-item svg { flex-shrink: 0; display: block; }
.cs-postmenu-item:hover {
  background: rgba(212,175,55,0.1);
  color: var(--primary-container);
}
.cs-postmenu-item.danger:hover {
  background: rgba(239,68,68,0.12);
  color: #f87171;
}

/* ---------------- Report modal ---------------- */
.cs-report-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
}
.cs-report-option {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  padding: 14px 16px;
  text-align: left;
  border-radius: 12px;
  border: 1px solid rgba(212,175,55,0.15);
  background: rgba(13,14,18,0.5);
  color: var(--on-surface);
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}
.cs-report-option:hover {
  border-color: rgba(212,175,55,0.4);
  background: rgba(212,175,55,0.04);
}
.cs-report-option.selected {
  border-color: var(--primary-container);
  background: rgba(212,175,55,0.08);
  box-shadow: 0 0 0 1px rgba(212,175,55,0.4), 0 4px 20px rgba(212,175,55,0.1);
}
.cs-report-radio {
  width: 18px; height: 18px;
  margin-top: 2px;
  border-radius: 9999px;
  border: 1.5px solid rgba(212,175,55,0.5);
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  transition: border-color 0.2s ease;
}
.cs-report-option.selected .cs-report-radio { border-color: var(--primary-container); }
.cs-report-radio-dot {
  width: 8px; height: 8px;
  border-radius: 9999px;
  background: var(--primary-container);
  box-shadow: 0 0 8px rgba(212,175,55,0.6);
}
.cs-report-option-body { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.cs-report-option-title {
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  color: var(--primary-container);
  letter-spacing: 0.01em;
}
.cs-report-option-desc {
  font-size: 12px;
  line-height: 1.5;
  color: rgba(208,197,175,0.7);
}
.cs-report-other-input {
  width: 100%;
  min-height: 90px;
  margin-top: 4px;
  padding: 12px 14px;
  resize: vertical;
  border-radius: 10px;
  border: 1px solid rgba(212,175,55,0.25);
  background: rgba(13,14,18,0.7);
  color: var(--on-surface);
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  line-height: 1.5;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.cs-report-other-input::placeholder { color: rgba(208,197,175,0.4); }
.cs-report-other-input:focus {
  border-color: var(--primary-container);
  box-shadow: 0 0 0 1px rgba(212,175,55,0.3);
}
.cs-report-counter {
  align-self: flex-end;
  font-size: 10px;
  letter-spacing: 0.1em;
  color: rgba(208,197,175,0.5);
  font-family: monospace;
}

/* ---------------- Selection modal — gold-theme additions ---------------- */
.cs-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  font-family: 'DM Sans', sans-serif;
  color: var(--on-surface);
}
.cs-modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(5,5,8,0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.cs-modal-inner.cs-modal-inner-wide {
  position: relative;
  max-width: 760px;
  max-height: 90vh;
}
.cs-modal-header-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}
.cs-modal-header-main { display: flex; align-items: center; gap: 14px; min-width: 0; }
.cs-modal-header-icon {
  width: 40px; height: 40px;
  border-radius: 9999px;
  background: rgba(212,175,55,0.1);
  border: 1px solid rgba(212,175,55,0.4);
  box-shadow: 0 0 10px rgba(212,175,55,0.2);
  color: var(--primary-container);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.cs-modal-header-main .cs-modal-title { margin-bottom: 4px; }
.cs-modal-close {
  width: 32px; height: 32px;
  border-radius: 9999px;
  border: none;
  background: none;
  color: rgba(212,175,55,0.7);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: color 0.2s ease, background-color 0.2s ease;
}
.cs-modal-close:hover { color: var(--primary-container); background: rgba(212,175,55,0.1); }
.cs-modal-tabs { flex-wrap: wrap; align-items: center; }
.cs-modal-tab-count {
  min-width: 20px;
  padding: 1px 7px;
  border-radius: 9999px;
  background: rgba(212,175,55,0.08);
  border: 1px solid rgba(212,175,55,0.2);
  font-size: 10px;
  letter-spacing: 0.05em;
  text-align: center;
  color: rgba(208,197,175,0.7);
}
.cs-modal-tab.active .cs-modal-tab-count {
  background: rgba(212,175,55,0.2);
  border-color: rgba(212,175,55,0.4);
  color: var(--primary-container);
}
.cs-modal-search {
  margin-left: auto;
  width: 220px;
  max-width: 100%;
  padding: 10px 14px;
  border-radius: 9999px;
  border: 1px solid rgba(212,175,55,0.2);
  background: rgba(13,14,18,0.7);
  color: var(--on-surface);
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  letter-spacing: 0.02em;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.cs-modal-search::placeholder { color: rgba(208,197,175,0.4); }
.cs-modal-search:focus {
  border-color: var(--primary-container);
  box-shadow: 0 0 0 1px rgba(212,175,55,0.3);
}
@media (max-width: 560px) {
  .cs-modal-search { width: 100%; margin-left: 0; }
  .cs-modal-header, .cs-modal-footer { padding-left: 20px; padding-right: 20px; }
  .cs-modal-tabs { padding-left: 20px; padding-right: 20px; }
  .cs-modal-body { padding-left: 20px; padding-right: 20px; }
}
.cs-modal-hint {
  font-size: 11px;
  color: rgba(212,175,55,0.6);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 16px 4px;
}
.cs-modal-grid-kalam { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
.cs-modal-grid-album { grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); }
.cs-modal-kalam-wrap { padding: 12px; }
.cs-modal-kalam-wrap > * { pointer-events: none; }
.cs-modal-album-cover { position: relative; }
.cs-modal-album-cover img { transition: transform 0.5s ease; }
.cs-modal-card:hover .cs-modal-album-cover img { transform: scale(1.05); }
.cs-modal-track-badge {
  position: absolute;
  left: 8px; bottom: 8px;
  padding: 3px 8px;
  border-radius: 9999px;
  background: rgba(13,14,18,0.8);
  border: 1px solid rgba(212,175,55,0.3);
  color: var(--primary-container);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.cs-modal-selected-tag {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  padding: 10px 12px 0 12px;
  border-top: 1px solid rgba(212,175,55,0.12);
}
.cs-modal-selected-tag span {
  padding: 2px 10px;
  border-radius: 9999px;
  background: rgba(212,175,55,0.12);
  border: 1px solid rgba(212,175,55,0.4);
  color: var(--primary-container);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.cs-modal-album-selected-wrap { padding: 0 12px 12px 12px; }
.cs-modal-footer { justify-content: space-between; }
.cs-modal-footer-actions { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
.cs-modal-selected-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  padding: 7px 14px;
  border-radius: 9999px;
  background: rgba(13,14,18,0.7);
  border: 1px solid rgba(212,175,55,0.25);
  font-size: 12px;
  color: var(--on-surface-variant);
}
.cs-modal-selected-chip strong {
  color: var(--primary-container);
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 600;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cs-modal-selected-chip .cs-modal-chip-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cs-modal-nothing { font-size: 12px; color: rgba(208,197,175,0.5); font-style: italic; font-family: 'Playfair Display', serif; }
`;

/* ---------------------------------------------------------------------------- */

/* Self-contained sidebar icons (inline SVG) — each nav link gets its own distinct icon. */
const NAV_ICON_PATHS = {
  home: (
    <>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  kalam: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </>
  ),
  browse: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5Z" />
    </>
  ),
  kotw: (
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9Z" />
  ),
  community: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6" />
      <path d="M18 14.3c1.9.8 3 2.6 3 5.7" />
    </>
  ),
  library: (
    <>
      <path d="M4 4h4v16H4z" />
      <path d="M10 4h4v16h-4z" />
      <path d="m15.5 5.5 3.6-.9 3 14.4-3.6.9z" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </>
  ),
};

const NavIcon = ({ name, size = 18 }) => (
  <span className="cs-nav-icon" aria-hidden="true">
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {NAV_ICON_PATHS[name] || NAV_ICON_PATHS.home}
    </svg>
  </span>
);

const GLOBAL_NAV_LINKS = [
  { text: "Kalam", href: "/kalam" },
  { text: "Community", href: "/spaces", active: true },
  { text: "Browse", href: "/Social" },
  { text: "Library", href: "/albumsLive" },
];

const NAV_SECTIONS = [
  {
    label: "Network",
    links: [
      { icon: "home", text: "Home", navigate: '/' },
      { icon: "kalam", text: "kalam", navigate: '/kalam' },
      { icon: "browse", text: "Browse", navigate: '/social' },
      { icon: "kotw", text: "Kalam of the Week", navigate: '/kotw' },
      { icon: "community", text: "Community", active: true },
      { icon: "library", text: "Library", navigate: '/albumsLive' },
    ],
  },
  // {
  //   label: "Creation",
  //   links: [
  //     { icon: "edit_document", text: "Drafts" },
  //     { icon: "book", text: "Publications" },
  //   ],
  // },

  
  {
    label: "System",
    links: [{ icon: "settings", text: "Settings", navigate: "settings/account" }],
  },
];

const BOTTOM_NAV_ITEMS = [
  { icon: "book", label: "Library" },
  { icon: "festival", label: "Feed", active: true },
  { icon: "group", label: "Poets" },
  { icon: "settings", label: "Options" },
];

/* Report categories shown in the Report modal. */
const REPORT_REASONS = [
  {
    id: "explicit_sexual",
    title: "Explicit or Sexual Content",
    description: "Reports material featuring nudity, sexual acts, or unwanted suggestive media.",
  },
  {
    id: "hate_harassment",
    title: "Hate Speech & Harassment",
    description: "Flags targeted slurs, bullying, intimidation, or dehumanizing remarks.",
  },
  {
    id: "extremism_terrorism",
    title: "Extremism & Terrorism",
    description: "Addresses the promotion of violent extremist groups or radical propaganda.",
  },
  {
    id: "violence_harm",
    title: "Violence & Incitement to Harm",
    description: "Targets direct threats of physical injury or dangerous acts.",
  },
  {
    id: "racism_discrimination",
    title: "Racism & Discrimination",
    description: "Reports content that degrades individuals based on race, faith, or ethnicity.",
  },
  {
    id: "other",
    title: "Other Violation",
    description: "Covers general issues like copyright infringement, impersonation, privacy breaches, or anything else.",
  },
];

const REPORT_DETAILS_MAX = 500;

const DEFAULT_POSTS = [
  {
    id: 1,
    author: "Mirza Ghalib",
    time: "Published at 10:42 AM",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqj3R2y8PT8hVdYfFuTpWSaewP1dfbxtKIsg5ddYYTKPX0E91iPyJP8gzUhQzqO2Pk0WQpQ38WlVg05gm1FVWLP9ZZgFn0upjJy-1C4YNGtSt2JZ2Yy11wM9NnQmxBcw8oCGkluVTFmCVsz5tRcDfOKwlDRQw7ZcYGoXsqpoAQX8gRCK9QlHyOpuEN2WQQnzUO1iSGFYbGoapzD4WWYoPYDv7GcFQdl3L-YKbG77GzQiex1_vEot1w",
    verified: true,
    text: "Welcome to the global channel.\nEnsure your encryption keys are updated for this session.",
    likeCount: 12,
    commentCount: 3,
    isAlbumAvailable: true,
    isKalamAvailable: false,
    album: {
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD3I3C4LVk0keG8T1vXkEzTqSiLnm-hbarHUtvjsD9qV2evrydJzxeape7t-JoPnlOeQwhkpQ-3qZ-BACOQZ9AMuZ5k1DFfDduUdjduJM-CA3ttbb4M3AUQCa4TTwdghKHjT4sMymYXvdz7OfzWF9N8q0Mxf33v9F_tWlaGZI7YiTR47ZvncWUPFxa-yiP9zPdvhvX7c1R5J8EJYE3VeUmZKba12lnMV2Bvrsn5impvSEgnOJTs3uMA",
      title: "Nocturnal Protocols",
      meta: "Aura Collective • 12 Tracks",
      ctaLabel: "Listen to Recitation",
    },
  },
  {
    id: 2,
    author: "Aura Poet",
    time: "Published at 10:45 AM",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiZkWVD4fGkDVJ-qn4nbgpmYALVnlPxsZXYssp4v6wrXPV2D2ugg10Fhd0fu6NrQ2IUcoyzZHnqA9KLZD_xsGZEfPGG52dj8AffkuMIq7S1bjROQt0vzCIOk-PAEjSVQcTZbbsikrkOjX9LwAnmBj9dJwej05Sb-EIhe2-W26cbnIze83CjjTZsMUlwY_XqfBf5v_FAP2zThUgS77JLE0z_LG3k71AdC4Yf7XAmwzMKhUp-Ji6b43B",
    verified: false,
    text: "Market indices are stabilizing.\nI'll forward the revised projections shortly.",
    likeCount: 8,
    commentCount: 1,
    isAlbumAvailable: false,
    isKalamAvailable: true,
    kalam: {
      title: "The Silent Echo",
      body: "\u201CIn the depth of the obsidian night, the soul finds its true reflection, unburdened by the noise of the day...\u201D",
      linkLabel: "Read Full Piece",
    },
  },
];

/* ---------------------------------------------------------------------------- */

export default function CommunitySPaces({
  posts = DEFAULT_POSTS,
  userAvatarUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDmzPYhdoI0uBNU6XlJznSQdq1Y3vCHfveTt0wiE9TngfZj02g775SOkyMbfoBWK8vE7YBrVqptN8EDlCTh0ZvOJvzQULgpLNOjG9PfIgA5Csmu8tkVrCAg72nfpbTo88WSqREnkPorQcL2UsV1s3J_jSoGE6EZm52Q7gEPA1aBzYJWWGz94nQsmNoO2nTBdDc3CQW2-H7Qh2YQKA0viYPwGYgBfCXwRmd0Lb-m1ToOd-egjxds88BS",
  onPublish,
  onLike,
  onComment,
  onShare,
}) {
  const [value, setValue] = useState("");
  const [userAlbums, setUserAlbums] = useState([]);
  const [userKalams, setUserKalams] = useState([]);
  const [isSelectionModalOpen, setIsSelectionModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isNotificationModalOpen, setIsNotificationmodalOpened] = useState(false);
  const likedPosts = useRef(new Set());
  const [modalSearch, setModalSearch] = useState("");

  // Report modal state
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportPostId, setReportPostId] = useState(null);
  const [reportCategory, setReportCategory] = useState(null); // one of REPORT_REASONS ids
  const [reportDetails, setReportDetails] = useState("");

  const {isPostMenuOpen, setIsPostMenuOpen, postMenuPosition, menuPostId} = useContext(ModalContext);
    
  
  // Which tab of the picker is active, and which item is currently selected.
  const [modalTab, setModalTab] = useState("kalam"); // "kalam" | "album"
  const [kalam, setKalam] = useState(null); // selected kalam _id
  const [album, setAlbum] = useState(null); // selected album _id
  const [isAttached, setIsAttached] = useState(false);
  const [userPosts, setUserPosts] = useState([]);

  const fetchPosts = () => {
    axiosInstance
      .get('/api/userPosts', {
        withCredentials: true,
      })
      .then((response) => {
        setUserPosts(response.data.content);
        console.log("see fetched posts", response.data.content);
      })
      .catch((error) => {
        console.error("Error while fetching user posts", error);
      });
  };

  const likePost=(postId)=>{
    axiosInstance
    .post(`/api/likePost?postId=${postId}`,{
      postId: postId
    },{withCredentials: true})
    .then((response)=>{
      console.log('response', response.data.data);
    })
    .catch((error)=>{
      console.error("Error while fetching like post req", error);
    })
  }

  const fetchLikedPosts=()=>{
    axiosInstance
    .get('/api/likedPosts',{withCredentials: true})
    .then((response)=>{
      console.log("response",response.data)
      response.data.data.forEach((item)=>{
        likedPosts.current.add(item._id)
      })
    })
  }
  const fetchUserNotifications=()=>{
    axiosInstance
    .get('/api/offlineNotifications',{
      withCredentials: true
    }).then((response)=>{
      setNotifications(response.data.offlineNotifications)
    }).catch((error)=>{
      console.error("Error while fetching user notifications", error)
    })
  }

  useEffect(() => {
    fetchPosts();
    fetchUserNotifications();
    fetchLikedPosts();
  }, []);

  const fetchUserKalams = () => {
    axiosInstance
      .get('/api/urKalam', {
        withCredentials: true,
      })
      .then((response) => {
        setUserKalams(response.data);
        console.log("See user kalams response", response.data);
      });
  };

  const fetchUserAlbums = () => {
    axiosInstance
      .get('/api/displayAlbums', {
        withCredentials: true,
      })
      .then((response) => {
        setUserAlbums(response.data);
        console.log("see user albums", response.data);
      });
  };

  const handlePublish = () => {
    console.log("see kalam", kalam);
    console.log("see album", album);
    axiosInstance.post('/api/userPost', {
      text: value,
      kalam: kalam,
      album: album,
    });
  };

  const handleSelectKalam = (id) => {
    setKalam((current) => (current === id ? null : id));
    console.log("see naa", id);
  };

  const handleSelectAlbum = (id) => {
    setAlbum((current) => (current === id ? null : id));
  };

  /* ---------------------- Sub components ---------------------- */

  const TopAppBar = ({ userAvatarUrl }) => (
  <header className="cs-header">
    <div className="cs-header-left">
      <span className="cs-menu-btn">
        <Icon name="menu" />
      </span>

      <div className="cs-gnav-brand">
        <div className="cs-gnav-logo-wrap">
          <div className="cs-gnav-logo-glow" />
          <img src="/logo2.svg" alt="Alfaz Logo" className="cs-gnav-logo-img" />
        </div>
        <h1 className="cs-gnav-wordmark">
          <span aria-hidden="true" className="cs-gnav-wordmark-glow">Alfaz</span>
          <span className="cs-gnav-wordmark-text">
            <span className="cs-gnav-wm-a">A</span>
            <bdi className="cs-gnav-wm-ur">لف</bdi>
            <span className="cs-gnav-wm-a">az</span>
          </span>
        </h1>
      </div>
    </div>

    {/* ── Centered nav column ── */}
    <nav className="cs-header-center cs-gnav-links">
      {GLOBAL_NAV_LINKS.map((link) => (
        
          <a key={link.text}
          href={link.href}
          className={`cs-gnav-link${link.active ? " active" : ""}`}
        >
          {link.text}
        </a>
      ))}
    </nav>

    <div className="cs-header-right">
      <div className="cs-header-icons">
        <button aria-label="Search">
          <Icon name="search" size={20} />
        </button>
        <button onClick={()=>setIsNotificationmodalOpened(true)} aria-label="Notifications">
          <Icon name="bell" size={20} />
        </button>
      </div>
      <div className="cs-header-divider" />
      <img className="cs-avatar-sm" src={userAvatarUrl} alt="User profile" />
    </div>
  </header>
);

  const LeftSidebar = () => (
    <aside className="cs-sidebar-left">
      <nav className="cs-nav">
        {NAV_SECTIONS.filter((section) => section.label !== "System").map((section) => (
          <React.Fragment key={section.label}>
            <div className="cs-nav-section">{section.label}</div>
            {section.links.map((link) => (
              <a key={link.text} href={link.navigate} className={`cs-nav-link${link.active ? " active" : ""}`}>
                <NavIcon name={link.icon} size={18} />
                <span>{link.text}</span>
              </a>
            ))}
          </React.Fragment>
        ))}
      </nav>

      {/* Settings pinned to the bottom of the sidebar */}
      <div className="cs-sidebar-bottom">
        {NAV_SECTIONS.filter((section) => section.label === "System").map((section) => (
          <React.Fragment key={section.label}>
            <div className="cs-nav-section">{section.label}</div>
            {section.links.map((link) => (
              <a key={link.text} href={link.navigate} className={`cs-nav-link${link.active ? " active" : ""}`}>
                <NavIcon name={link.icon} size={18} />
                <span>{link.text}</span>
              </a>
            ))}
          </React.Fragment>
        ))}
      </div>
    </aside>
  );

/* ===== Composer (replace the old block from the stray "/**" comment through its closing "};") =====
     Uses only your existing state/handlers. Called exactly as before: Composer(userAvatarUrl, onPublish) */

  // Material Symbols glyph (font is already @imported in your styles). Named MSIcon so it does NOT shadow your imported <Icon />.
  const MSIcon = ({ name, className = "" }) => (
    <span className={`material-symbols-outlined leading-none select-none ${className}`}>{name}</span>
  );

  const Composer = (userAvatarUrl, onPublish, placeholder = "Pen your verses for the world, weave couplets, or share marginalia into midnight embers...") => {
    const [typography, setTypography] = useState("serif");
    const [isKalamPreviewOpen, setIsKalamPreviewOpen] = useState(false);

    // ----- derive the 3 states from your existing state -----
    const attachedAlbum = album ? userAlbums.find((a) => a._id === album) : null;
    const attachedKalam = !album && kalam ? userKalams.find((k) => k._id === kalam) : null;
    const attached = isAttached && !!(album || kalam);          // State 2 or 3
    const isAlbum = attached && !!album;                         // State 2 = album, State 3 = kalam

    const itemTitle = isAlbum
      ? attachedAlbum?.title || attachedAlbum?.name || "Album"
      : attachedKalam?.name || "Kalam";
    const itemImage = isAlbum
      ? attachedAlbum?.albumCover || attachedAlbum?.coverUrl
      : attachedKalam?.customStyles?.imageSrc;
    const itemSub = isAlbum
      ? `${attachedAlbum?.kalamCollection?.length ?? 0} Tracks`
      : attachedKalam?.category || "";

    const kalamSnippet = (() => {
      const raw = typeof attachedKalam?.content === "string" ? attachedKalam.content : "";
      const words = raw
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .filter(Boolean);
      if (!words.length) return "";
      return words.slice(0, 8).join(" ") + (words.length > 8 ? "…" : "");
    })();

    const trimmed = value.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const verses = trimmed ? value.split("\n").filter((l) => l.trim()).length : 0;
    const isActive = !!trimmed || attached;                      // State 1 = not active
    const canPublish = isActive;

    const openPicker = () => {
      setIsSelectionModalOpen(true);
      fetchUserAlbums();
      fetchUserKalams();
    };

    const serifFont = "[font-family:'Playfair_Display',serif]";
    const sansFont = "[font-family:'Manrope','DM_Sans',sans-serif]";

    return (
      <>
      <div
        className={`relative rounded-xl bg-[#181c22] border p-5 sm:p-6 transition-all ${
          isActive ? "border-[#ffb59e]/30 shadow-2xl" : "border-[#31353c]/30 shadow-lg"
        }`}
      >
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffb59e]/5 via-transparent to-transparent pointer-events-none rounded-xl" />
        )}

        <div className="relative z-10 flex items-start gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div
              className={`w-12 h-12 rounded-full overflow-hidden bg-[#262a31] ring-2 ${
                isActive ? "ring-[#ffb59e]/60 shadow-lg" : "ring-[#a48b84]/30"
              }`}
            >
              <img className="w-full h-full object-cover" src={userAvatarUrl} alt="My avatar" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-[#181c22]" />
          </div>

          <div className="flex-grow flex flex-col gap-2 min-w-0">
            {/* Top row */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              {!isActive ? (
                <div className="ml-auto flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1c2026] text-xs text-[#dcc1b9]">
                  <MSIcon name="public" className="text-[14px] text-[#ffb59e]" />
                  <span>Public Salon</span>
                </div>
              ) : (
                <div className="ml-auto flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-[#1c2026] rounded-lg p-1 border border-[#31353c]/40">
                    {["serif", "sans"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTypography(t)}
                        className={`px-2 py-0.5 rounded text-[11px] font-medium uppercase tracking-wide transition-all ${
                          typography === t
                            ? "bg-[#dd7351] text-[#521300]"
                            : "text-[#dcc1b9] hover:text-[#dfe2eb]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    title="Add stanza separator"
                    onClick={() => setValue(value + "\n\n")}
                    className="p-1.5 rounded-lg bg-[#1c2026] hover:bg-[#262a31] text-[#dcc1b9] hover:text-[#dfe2eb] transition-colors"
                  >
                    <MSIcon name="format_line_spacing" className="text-[18px]" />
                  </button>
                </div>
              )}
            </div>

            {/* Textarea */}
            <div
              className={`pl-3.5 border-l-2 transition-colors focus-within:border-[#ffb59e] ${
                isActive ? "border-[#ffb59e]/70" : "border-[#31353c]/60"
              }`}
            >
              <textarea
                className={`w-full bg-transparent border-0 p-0 text-[#dfe2eb] placeholder:text-[#a48b84]/50 focus:outline-none focus:ring-0 resize-none text-[1.25rem] leading-[2.25rem] tracking-[0.015em] ${
                  typography === "serif" ? serifFont : sansFont
                } ${isActive ? "min-h-[140px]" : "min-h-[80px]"}`}
                aria-label="Pen your verses for the world"
                placeholder={placeholder}
                rows={isActive ? 4 : 2}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            {/* State 2 (album) / State 3 (kalam) attachment chip */}
            {attached && (
              <div className="pt-1">
                <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#1c2026] border border-[#ffb59e]/40 shadow-sm hover:border-[#ffb59e]/70 transition-all duration-200">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-12 h-12 rounded-lg bg-[#ffb59e]/20 overflow-hidden flex-shrink-0 border border-[#ffb59e]/30 shadow flex items-center justify-center">
                      {itemImage ? (
                        <img className="w-full h-full object-cover" src={itemImage} alt={itemTitle} />
                      ) : (
                        <MSIcon name={isAlbum ? "auto_stories" : "history_edu"} className="text-[22px] text-[#ffb59e]" />
                      )}
                      {itemImage && (
                        <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#0a0e14]/80 flex items-center justify-center">
                          <MSIcon name={isAlbum ? "auto_stories" : "history_edu"} className="text-[10px] text-[#ffb59e]" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[0.875rem] text-[#dfe2eb] font-semibold truncate max-w-[220px]">
                          {itemTitle}
                        </span>
                        {/* <span className="px-2 py-0.5 rounded bg-[#ffb59e]/20 text-[#ffb59e] font-mono text-[10px] border border-[#ffb59e]/30 font-medium">
                          {isAlbum ? "Folio Album" : "Kalam"}
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-400/10 text-emerald-400 font-mono text-[10px] border border-emerald-400/20 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Attached
                        </span> */}
                      </div>
                      {isAlbum ? (
                        itemSub && <span className="text-xs text-[#a48b84] mt-0.5 truncate">{itemSub}</span>
                      ) : (
                        kalamSnippet && (
                          <button
                            type="button"
                            onClick={() => setIsKalamPreviewOpen(true)}
                            title="Preview kalam"
                            className="text-xs text-[#a48b84] hover:text-[#ffb59e] mt-0.5 truncate max-w-[260px] text-left italic hover:underline underline-offset-2 transition-colors"
                          >
                            {kalamSnippet}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={openPicker}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#262a31] hover:bg-[#31353c] text-[#dfe2eb] text-xs font-semibold transition-colors border border-[#31353c]/50"
                    >
                      <MSIcon name="swap_horiz" className="text-[15px] text-[#ffb59e]" />
                      <span>{isAlbum ? "Change Album" : "Change Kalam"}</span>
                    </button>
                    <button
                      type="button"
                      aria-label="Remove attachment"
                      onClick={handleDeAttach}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[#a48b84] hover:text-[#ffb4ab] hover:bg-[#262a31] border border-transparent hover:border-[#ffb4ab]/30 text-xs font-semibold transition-colors"
                    >
                      <MSIcon name="close" className="text-[15px]" />
                      <span>Detach</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Toolbar */}
            <div
              className={`flex flex-wrap items-center justify-between gap-2 pt-4 mt-2 border-t ${
                isActive ? "border-[#31353c]/40" : "border-[#31353c]/30"
              }`}
            >
              <div className="flex items-center gap-1.5">
                {!attached ? (
                  <button
                    type="button"
                    onClick={openPicker}
                    className="group flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#1c2026] hover:bg-[#262a31] text-[#e5c158] hover:text-[#f8e7a2] border border-[#d4af37]/40 hover:border-[#d4af37]/80 shadow-[0_0_15px_-3px_rgba(212,175,55,0.15)] hover:shadow-[0_0_20px_0px_rgba(212,175,55,0.3)] transition-all duration-200 text-xs font-semibold"
                  >
                    <MSIcon name="attach_file" className="text-[18px] text-[#e5c158] group-hover:rotate-12 transition-transform duration-200" />
                    <span className="whitespace-nowrap">Attach Album / Kalam</span>
                    <MSIcon name="expand_more" className="text-[14px] text-[#d4af37]/60 group-hover:text-[#e5c158]" />
                  </button>
                ) : (
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#262a31]/40 text-[#a48b84] border border-[#31353c]/30 cursor-not-allowed opacity-60 text-xs font-semibold"
                    title="Only one attachment per verse. Detach first to attach the other type."
                  >
                    <MSIcon name="block" className="text-[16px]" />
                    <span className="whitespace-nowrap">{isAlbum ? "Add Kalam" : "Attach Album"}</span>
                    <span className="text-[10px] font-mono text-[#56423d] hidden sm:inline">(1 attachment max)</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[#a48b84]">
                  {isActive
                    ? `${words} ${words === 1 ? "word" : "words"} • ${verses} ${verses === 1 ? "verse" : "verses"}`
                    : "0 words"}
                </span>
                <button
                  type="button"
                  disabled={!canPublish}
                  onClick={() => { onPublish?.(value); handlePublish(); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    canPublish
                      ? "bg-[#ffb59e] text-[#5e1700] shadow-lg shadow-[#ffb59e]/20 hover:bg-[#dd7351] hover:text-[#521300] active:scale-95"
                      : "bg-[#262a31] text-[#a48b84] cursor-not-allowed opacity-70"
                  }`}
                >
                  <MSIcon name="send" className="text-[18px]" />
                  <span>Publish</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kalam preview */}
      <MyVerticallyCenteredModal
        isOpen={isKalamPreviewOpen && attached && !isAlbum}
        onClose={() => setIsKalamPreviewOpen(false)}
      >
        <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0F172A] border border-slate-800/80 p-4 shadow-2xl [scrollbar-width:thin] [scrollbar-color:#334155_transparent]">
          <button
            type="button"
            onClick={() => setIsKalamPreviewOpen(false)}
            aria-label="Close preview"
            className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            ✕
          </button>
          {attachedKalam && (
            <NewKalam
              title={attachedKalam.name}
              content={attachedKalam.content}
              type={attachedKalam.category}
              imageSrc={attachedKalam.customStyles?.imageSrc}
              kalId={attachedKalam._id}
              customStyles={attachedKalam.customStyles}
              actionStrip={false}
            />
          )}
        </div>
      </MyVerticallyCenteredModal>
      </>
    );
  };

  const RightSidebar = ({ userAvatarUrl, onPublish }) => (
    <aside className="cs-sidebar-right">
      <div className="cs-sidebar-right-content">
        <div className="cs-sidebar-right-top"></div>
      </div>
    </aside>
  );

  const BottomNav = () => (
    <nav className="cs-bottom-nav">
      {BOTTOM_NAV_ITEMS.map((item) => (
        <button key={item.label} className={`cs-bnav-item${item.active ? " active" : ""}`}>
          <Icon name={item.icon} size={22} />
          <span className={`cs-bnav-label${item.active ? " bold" : ""}`}>{item.label}</span>
        </button>
      ))}
    </nav>
  );

  /* ---------------------- Post menu (uses ModalContext values) ---------------------- */
  const PostMenu = () => {
    if (!isPostMenuOpen) return null;

    const MENU_HEIGHT = 110;

    // postMenuPosition is { top, right } — set from the PostCard menu button's bounding rect.
    const vh = typeof window !== "undefined" ? window.innerHeight : 800;
    const top = Math.max(8, Math.min(postMenuPosition?.top ?? 0, vh - MENU_HEIGHT - 8));
    const right = Math.max(8, postMenuPosition?.right ?? 8);

    const closeMenu = () => setIsPostMenuOpen(false);

    const handleReportPost = () => {
      console.log("report post", menuPostId);
      // Open the report modal for this post (reset any previous selection first)
      setReportPostId(menuPostId);
      setReportCategory(null);
      setReportDetails("");
      setIsReportModalOpen(true);
      closeMenu();
    };

    const handleNotInterested = () => {
      console.log("not interested in post", menuPostId);
      closeMenu();
    };

    return (
      <>
        <div
          className="cs-postmenu-backdrop"
          onClick={closeMenu}
          onContextMenu={(e) => { e.preventDefault(); closeMenu(); }}
        />
        <div
          className="cs-postmenu"
          role="menu"
          style={{ top, right }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="cs-postmenu-item" role="menuitem" onClick={()=>{handleNotInterestedPost(); handleNotInterested()}}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="m5.6 5.6 12.8 12.8" />
            </svg>
            Not interested
          </button>
          <button className="cs-postmenu-item danger" role="menuitem" onClick={handleReportPost}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 21V4" />
              <path d="M5 4h11l-2 4 2 4H5" />
            </svg>
            Report
          </button>
        </div>
      </>
    );
  };

  const handleDeAttach = () => {
    console.log("deAttach function ran!!!");
    album ? setAlbum(null) : setKalam(null);
    setIsAttached(false);
  };

  /* ---------------------- Report modal handlers ---------------------- */
  const closeReportModal = () => {
    setIsReportModalOpen(false);
    setReportCategory(null);
    setReportDetails("");
  };

  const handleSubmitReport = () => {
    if (!reportCategory) return;

    const payload = {
      postId: reportPostId,
      reason: reportCategory,
      // The text box is only used for "Other Violation"
      detail: reportCategory === "Other Violation" ? reportDetails.trim() : null,
    };

    axiosInstance
    .post('/api/reportpost',{
      payload
    },
  {withCredentials: true})

  .then((response)=>{
    console.log("responsssse", response.data);
    setUserPosts((prev)=>prev.filter((k)=>k._id!==menuPostId));
  })
  .catch((error)=>{
    console.error("Error while fetching report post request", error);
  })

    console.log("submit report", payload);

    // TODO: hook up your backend endpoint here, e.g.
    // axiosInstance.post('/api/reportPost', payload, { withCredentials: true });

    closeReportModal();
  };

  const handleNotInterestedPost=()=>{

    axiosInstance
    .post('/api/notinterestedpost',{
      postId: menuPostId
    },{withCredentials: true})

    .then((response)=>{
      console.log("see respomse", response.data);
      setUserPosts((prev)=>prev.filter((k)=>k._id!==menuPostId));
    })
    .catch((error)=>{
      console.error("Error while fetching not interested post", error);
    })

  }

  return (
    <div className="cs-root">
      <style>{styles}</style>

      {/* <TopAppBar userAvatarUrl={userAvatarUrl} /> */}
      {
        TopAppBar(userAvatarUrl)
      }

      <div className="cs-layout">
        {/* <LeftSidebar /> */}

        {
          LeftSidebar()
        }


        <main className="cs-main">
          <div className="cs-feed">
            <div className="cs-ornament-line">
              <div className="cs-diamond" />
              <span
                style={{
                  fontSize: 10,
                  color: "rgba(212,175,55,0.7)",
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  padding: "0 8px",
                }}
              >
                Today's Gatherings
              </span>
              <div className="cs-diamond" />
            </div>

            <div className="cs-main-composer">
              {/* <Composer userAvatarUrl={userAvatarUrl} onPublish={onPublish} /> */}

              {
                Composer(userAvatarUrl, onPublish)
              }
            </div>

            {/* Each PostCard now owns its own comment panel (inline-expand on desktop,
                bottom sheet on mobile) — no shared comment modal/context needed. */}
            <div className="cs-posts">
              {userPosts.map((item) =>
                item.featuredAlbum ? (
                  <PostCard
                    isPostLiked={likedPosts.current.has(item._id)}
                    key={item._id}
                    postId={item._id}
                    albumId={item.featuredAlbum._id}
                    postText={item.text}
                    onLikeClick={likePost}
                    onComment={onComment}
                    timestamp={item.createdAt}
                    authorAvatarUrl={item.postBy.profilePic}
                    authorName={item.postBy.name}
                    onShare={onShare}
                    isAlbumAvailable={true}
                    isKalamAvailable={false}
                    embed={{
                      title: item.featuredAlbum.name,
                      imageUrl:
                        item.featuredAlbum.albumCover,
                      description: "This is description",
                      ctaLabel: "Listen Now",
                    }}
                  />
                ) : item.featurdKalam ? (
                  <PostCard
                    isPostLiked={likedPosts.current.has(item._id)}
                    key={item._id}
                    postId={item._id}
                    postText={item.text}
                    onLikeClick={likePost}
                    onComment={onComment}
                    timestamp={item.createdAt}
                    authorAvatarUrl={item.postBy.profilePic}
                    authorName={item.postBy.name}
                    onShare={onShare}
                    isAlbumAvailable={false}
                    isKalamAvailable={true}
                    title={item.featurdKalam.name}
                    content={item.featurdKalam.content}
                    muid={"939297973293783902"}
                    kalId={item.featurdKalam._id}
                    isLiked2={true}
                    isSaved={true}
                    customStyles={item.featurdKalam.customStyles}
                    embed={null}
                  />
                ) : (
                  <PostCard
                    isPostLiked={likedPosts.current.has(item._id)}
                    key={item._id}
                    postText={item.text}
                    postId={item._id}
                    onLikeClick={likePost}
                    onComment={onComment}
                    timestamp={item.createdAt}
                    authorAvatarUrl={item.postBy.profilePic}
                    authorName={item.postBy.name}
                    onShare={onShare}
                    isAlbumAvailable={false}
                    isKalamAvailable={false}
                    embed={"no "}
                  />
                )
              )}
            </div>

            <div className="cs-ornament-line" style={{ margin: "48px 0" }}>
              <div className="cs-diamond" />
              <div className="cs-diamond" style={{ margin: "0 4px", transform: "scale(1.5) rotate(45deg)" }} />
              <div className="cs-diamond" />
            </div>
          </div>
        </main>

        <MyVerticallyCenteredModal isOpen={isSelectionModalOpen} onClose={() => setIsSelectionModalOpen(false)}>
       {isSelectionModalOpen && (() => {
  const q = modalSearch.trim().toLowerCase();
  const filteredKalams = userKalams.filter(
    (k) => !q || `${k.name || ""} ${k.category || ""}`.toLowerCase().includes(q)
  );
  const filteredAlbums = userAlbums.filter(
    (a) => !q || `${a.title || a.name || ""}`.toLowerCase().includes(q)
  );
  const selectedKalam = userKalams.find((k) => k._id === kalam);
  const selectedAlbum = userAlbums.find((a) => a._id === album);
  const selectedName = selectedKalam
    ? selectedKalam.name
    : selectedAlbum
    ? selectedAlbum.title || selectedAlbum.name
    : "";
  const closeModal = () => setIsSelectionModalOpen(false);

  const badge = () => (
    <div className="cs-modal-check">
      <Icon name="check" size={14} />
    </div>
  );

  return (
    <div className="cs-modal-overlay">
      {/* Backdrop */}
      <div className="cs-modal-backdrop" onClick={closeModal} />

      {/* Modal */}
      <div className="cs-modal-inner cs-modal-inner-wide">
        {/* Header */}
        <div className="cs-modal-header">
          <div className="cs-modal-header-row">
            <div className="cs-modal-header-main">
              <div className="cs-modal-header-icon">
                <Icon name="book" size={18} />
              </div>
              <div>
                <h2 className="cs-modal-title">Add to your verse</h2>
                <p className="cs-modal-subtitle">
                  Attach a devotional Kalam recitation or audio Album to your post
                </p>
              </div>
            </div>
            <button
              onClick={closeModal}
              title="Close dialog"
              aria-label="Close dialog"
              className="cs-modal-close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Tabs + search */}
        <div className="cs-modal-tabs">
          <button
            className={`cs-modal-tab${modalTab === "kalam" ? " active" : ""}`}
            onClick={() => setModalTab("kalam")}
          >
            <Icon name="book" size={16} />
            Kalams
            <span className="cs-modal-tab-count">{userKalams.length}</span>
          </button>
          <button
            className={`cs-modal-tab${modalTab === "album" ? " active" : ""}`}
            onClick={() => setModalTab("album")}
          >
            <Icon name="image" size={16} />
            Albums
            <span className="cs-modal-tab-count">{userAlbums.length}</span>
          </button>

          <input
            type="text"
            value={modalSearch}
            onChange={(e) => setModalSearch(e.target.value)}
            placeholder="Search kalams or albums..."
            className="cs-modal-search"
          />
        </div>

        {/* Body */}
        <div className="cs-modal-body">
          {modalTab === "kalam" ? (
            <div>
              <div className="cs-modal-hint">Attach a single kalam to your verse</div>

              {filteredKalams.length === 0 ? (
                <div className="cs-modal-empty">
                  {q ? "No kalams match your search." : "No kalams found yet."}
                </div>
              ) : (
                <div className="cs-modal-grid cs-modal-grid-kalam">
                  {filteredKalams.map((item) => {
                    const sel = kalam === item._id;
                    return (
                      <div
                        key={item._id}
                        onClick={() => handleSelectKalam(item._id)}
                        className={`cs-modal-card${sel ? " selected" : ""}`}
                      >
                        {sel && badge()}
                        <div className="cs-modal-kalam-wrap">
                          <NewKalam
                            title={item.name}
                            content={item.content}
                            type={item.category}
                            imageSrc={item.customStyles?.imageSrc}
                            kalId={item._id}
                            customStyles={item.customStyles}
                            actionStrip={false}
                          />
                        </div>
                        {sel && (
                          <div className="cs-modal-selected-tag">
                            <span>Selected</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="cs-modal-hint">
                Attach an entire curated album compilation to your verse
              </div>

              {filteredAlbums.length === 0 ? (
                <div className="cs-modal-empty">
                  {q ? "No albums match your search." : "No albums found yet."}
                </div>
              ) : (
                <div className="cs-modal-grid cs-modal-grid-album">
                  {filteredAlbums.map((item) => {
                    const sel = album === item._id;
                    return (
                      <div
                        key={item._id}
                        onClick={() => handleSelectAlbum(item._id)}
                        className={`cs-modal-card cs-modal-card-album${sel ? " selected" : ""}`}
                      >
                        {sel && badge()}

                        <div className="cs-modal-album-cover">
                          <img
                            src={item.albumCover || item.coverUrl}
                            alt={item.title || item.name}
                          />
                          <span className="cs-modal-track-badge">
                            {item.tracks?.length ?? 0} Tracks
                          </span>
                        </div>

                        <div className="cs-modal-album-body">
                          <p className="cs-modal-album-title">
                            {item.title || item.name}
                          </p>
                          <p className="cs-modal-album-meta">
                            {item.meta || `${item.tracks?.length ?? 0} Tracks`}
                          </p>
                        </div>

                        {sel && (
                          <div className="cs-modal-selected-tag" style={{ margin: 0, padding: "10px 0 0 0" }}>
                            <span>Selected</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="cs-modal-footer">
          <div style={{ display: "flex", alignItems: "center", minWidth: 0 }}>
            {selectedName ? (
              <div className="cs-modal-selected-chip">
                <span className="cs-pulse-dot" style={{ width: 8, height: 8, borderRadius: 9999, background: "#d4af37", flexShrink: 0, boxShadow: "0 0 8px rgba(212,175,55,0.6)" }} />
                <span className="cs-modal-chip-text">
                  Selected: <strong>{selectedName}</strong>
                </span>
              </div>
            ) : (
              <span className="cs-modal-nothing">Nothing selected yet</span>
            )}
          </div>

          <div className="cs-modal-footer-actions">
            <button
              className="cs-modal-cancel-btn"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="cs-modal-confirm-btn"
              disabled={!kalam && !album}
              onClick={() => { setIsSelectionModalOpen(false); setIsAttached(true); }}
            >
              Attach Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
})()}
        </MyVerticallyCenteredModal>
        <MyVerticallyCenteredModal isOpen={isNotificationModalOpen} onClose={() => setIsNotificationmodalOpened(false)}>
                      <div
                        className="rounded-xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden border border-[#f59e0b]/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        style={{ background: "rgba(29,13,33,0.45)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)" }}
                      >
                    
                        {/* Header */}
                        <div className="px-6 py-5 border-b border-[#f59e0b]/15 relative">
                          <div className="flex justify-between items-center mb-1">
                            <h2 className="flex items-center gap-3 text-[#f4daf7] text-xl font-semibold tracking-wide">
                              Notifications
                              {/* {notifications.length > 0 && (
                                <span className="bg-[#f59e0b]/10 text-[#ffc174] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#f59e0b]/20">
                                  {notifications.length} NEW
                                </span>
                              )} */}
                            </h2>
                            <button
                              onClick={() => setIsNotificationmodalOpened(false)}
                              className="w-8 h-8 flex items-center justify-center rounded-full text-[#d8c3ad] hover:text-[#ffc174] transition-colors active:scale-90"
                              aria-label="Close notifications"
                            >
                              ✕
                            </button>
                          </div>
                          <div className="w-12 h-1 bg-[#ffc174] rounded-full mt-2" />
                        </div>
                        
                    
                        {/* List */}
                        <div className="flex-1 overflow-y-auto p-2 space-y-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[#f59e0b]/20 [&::-webkit-scrollbar-thumb]:rounded-full">
                          {notifications.length > 0 ? (
                            notifications.map((item, i) => (
                              
                              <button
                                key={item.id ?? i}
                                onClick={() => {Navigate(item.toNavigate); handleNotificationSeen(item._id)}}
                                className="w-full text-left flex gap-4 p-4 rounded-lg border border-transparent transition-all duration-300 hover:bg-[#f59e0b]/5 hover:border-[#f59e0b]/40 hover:-translate-y-0.5"
                              >
                                      {console.log("see status", item.isSeen)}
                    
                                {/* Status dot*/}
                               {!item.isSeen && <div className="relative flex-shrink-0 mt-1">
                                  <span
                                    className="block w-2.5 h-2.5 rounded-full"
                                    style={{
                                      background: item.read ? "transparent" : "#f59e0b",
                                      boxShadow: item.read ? "none" : "0 0 8px #f59e0b",
                                    }}
                                  />
                                </div>}
                                <div className="flex-1 min-w-0">
                                  <div className="flex justify-between items-start mb-1 gap-2">
                                    <h3 className={`truncate text-sm ${item.read ? "font-medium text-[#f4daf7]/70" : "font-bold text-[#f4daf7]"}`}>
                                      {item.notificationTitle}
                                    </h3>
                                    <span className="text-[10px] tracking-wider text-[#d8c3ad] opacity-60 whitespace-nowrap font-mono">
                                      {item.createdAt ?? "Just now"}
                                    </span>
                                  </div>
                                  <p className="text-sm text-[#d8c3ad] leading-relaxed truncate">
                                    {item.notificationBody}
                                  </p>
                                </div>
                              </button>
                            ))
                          ) : (
                            <div className="flex flex-col items-center justify-center py-16 text-center px-8">
                              <div className="w-20 h-20 rounded-full bg-[#f59e0b]/5 border border-[#f59e0b]/10 flex items-center justify-center mb-6">
                                <span className="text-[#f59e0b] text-3xl opacity-40">🔔</span>
                              </div>
                              <h3 className="text-[#f4daf7] font-semibold text-lg mb-2">Your notifications will appear here</h3>
                              <p className="text-[#d8c3ad] max-w-xs mx-auto text-sm">
                                We'll let you know when something important happens in your elite ecosystem.
                              </p>
                            </div>
                          )}
                        </div>
                    
                        {/* Footer */}
                        <div className="px-6 py-4 border-t border-[#f59e0b]/15 flex justify-between items-center" style={{ background: "rgba(23,8,28,0.5)" }}>
                          {/* <button className="text-[#d8c3ad] hover:text-[#ffc174] transition-colors text-[10px] font-medium tracking-[0.15em] font-mono">
                            MARK ALL AS READ
                          </button> */}
                          <button onClick={()=>setIsNotificationmodalOpened(false)} className="text-[#d8c3ad] text-right hover:text-[#ffc174] transition-colors text-[10px] font-medium tracking-[0.15em] font-mono flex items-center gap-1">
                            close <span className="text-sm">›</span>
                          </button>
                        </div>
                      </div>
                    </MyVerticallyCenteredModal>

        {/* Report modal — opened from the "Report" item of the post menu */}
        <MyVerticallyCenteredModal isOpen={isReportModalOpen} onClose={closeReportModal}>
          <div className="cs-modal-inner">
            <div className="cs-modal-header">
              <h2 className="cs-modal-title">Report this post</h2>
              <p className="cs-modal-subtitle">Tell us what's wrong so we can review it</p>
            </div>

            <div className="cs-modal-body">
              <div className="cs-report-list" role="radiogroup" aria-label="Report reason">
                {REPORT_REASONS.map((reason) => {
                  const isSelected = reportCategory === reason.title;
                  return (
                    <button
                      key={reason.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      className={`cs-report-option${isSelected ? " selected" : ""}`}
                      onClick={() => {setReportCategory(reason.id);setReportDetails(reason.description);setReportCategory(reason.title)}}
                    >
                      <span className="cs-report-radio" aria-hidden="true">
                        {isSelected && <span className="cs-report-radio-dot" />}
                      </span>
                      <span className="cs-report-option-body">
                        <span className="cs-report-option-title">{reason.title}</span>
                        <span className="cs-report-option-desc">{reason.description}</span>
                        {reason.id === "other" && isSelected && (
                          <>
                            <textarea
                              className="cs-report-other-input"
                              placeholder="Describe the issue in detail (optional)..."
                              value={reportDetails}
                              maxLength={REPORT_DETAILS_MAX}
                              onClick={(e) => e.stopPropagation()}
                              onChange={(e) => setReportDetails(e.target.value)}
                              autoFocus
                            />
                            <span className="cs-report-counter">
                              {reportDetails.length}/{REPORT_DETAILS_MAX}
                            </span>
                          </>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="cs-modal-footer">
              <button className="cs-modal-cancel-btn" onClick={closeReportModal}>
                Cancel
              </button>
              <button
                className="cs-modal-confirm-btn"
                disabled={!reportCategory}
                onClick={handleSubmitReport}
              >
                Submit Report
              </button>
            </div>
          </div>
        </MyVerticallyCenteredModal>

        {/* Post menu — driven by ModalContext (isPostMenuOpen / postMenuPosition / menuPostId) */}
        {
          PostMenu()
        }

        {/* <RightSidebar userAvatarUrl={userAvatarUrl} onPublish={onPublish} /> */}

        {
          RightSidebar(userAvatarUrl, onPublish)
        }
      </div>

      {/* <BottomNav /> */}

      {
        BottomNav()
      }
    </div>
  );
}