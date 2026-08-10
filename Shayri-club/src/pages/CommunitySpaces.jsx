import React, { useEffect, useRef, useState } from "react";
import PostCard from "./components/PostCard";
import Icon from "./components/icons/Icon";
import axiosInstance from "@/Apis/axiosInstance";
import { MyVerticallyCenteredModal } from "./components/Modals/MyModal";
import NewKalam from "./components/NewKalam";
/**
 * CommunitySPaces — fully self-contained React port of the "Aura Poetry" global feed.
 * No Tailwind or icon-font dependency: all styling lives in the injected <style> block
 * and all icons are inline SVG, so this drops into any React project with zero setup.
 */

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: rgba(13,14,18,0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(212,175,55,0.2);
}
@media (min-width: 768px) { .cs-header { padding: 0 40px; } }
.cs-header-left { display: flex; align-items: center; gap: 16px; }
.cs-menu-btn { color: var(--primary-container); cursor: pointer; display: flex; }
@media (min-width: 1024px) { .cs-menu-btn { display: none; } }
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
  border-right: 1px solid rgba(212,175,55,0.1);
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
  padding: 10px 12px; border-radius: 8px;
  color: var(--on-surface-variant);
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.2s ease, color 0.2s ease;
  cursor: pointer;
  border: 1px solid transparent;
  background: none;
}
.cs-nav-link:hover { background: rgba(26,27,31,0.5); color: var(--primary-container); }
.cs-nav-link.active {
  background: rgba(41,42,46,0.5);
  color: var(--primary-container);
  border-color: rgba(212,175,55,0.2);
  font-weight: 500;
}

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
  border-left: 1px solid rgba(212,175,55,0.1);
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
.cs-sidebar-composer {
  margin-top: auto;
  padding-top: 24px;
}
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
`;

/* ---------------------------------------------------------------------------- */

const NAV_SECTIONS = [
  {
    label: "Network",
    links: [
      { icon: "book", text: "Library", active: true },
      { icon: "group", text: "Poets" },
      { icon: "festival", text: "Mushaira" },
    ],
  },
  {
    label: "Creation",
    links: [
      { icon: "edit_document", text: "Drafts" },
      { icon: "book", text: "Publications" },
    ],
  },
  {
    label: "System",
    links: [{ icon: "settings", text: "Preferences" }],
  },
];

const BOTTOM_NAV_ITEMS = [
  { icon: "book", label: "Library" },
  { icon: "festival", label: "Feed", active: true },
  { icon: "group", label: "Poets" },
  { icon: "settings", label: "Options" },
];

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
          const value = useRef("");
          const [userAlbums, setUserAlbums] = useState([]);
          const [userKalams, setUserKalams] = useState([]);
          const [isSelectionModalOpen, setIsSelectionModalOpen] = useState(false);

          // Which tab of the picker is active, and which item is currently selected.
          const [modalTab, setModalTab] = useState("kalam"); // "kalam" | "album"
          const [kalam, setKalam] = useState(null); // selected kalam _id
          const [album, setAlbum] = useState(null); // selected album _id
          const [isAttached, setIsAttached] = useState(false);
          const [userPosts, setUserPosts] = useState([]);

          const fetchPosts=()=>{
            axiosInstance
            .get('/api/userPosts',{
              withCredentials: true
            }).then((response)=>{
              setUserPosts(response.data.content)
              console.log("see fetched posts", response.data.content)
            }).catch((error)=>{
              console.error("Error while fetching user posts", error);
            })
          }

          useEffect(()=>{
            fetchPosts()
          }, [])

    const fetchUserKalams=()=>{
        axiosInstance
        .get('/api/urKalam',{
            withCredentials: true
        }).then((response)=>{
            setUserKalams(response.data);
            console.log("See user kalams response", response.data)
        })
    }

    const fetchUserAlbums=()=>{
        axiosInstance
        .get('/api/displayAlbums',{
            withCredentials: true
        }).then((response)=>{
            setUserAlbums(response.data)
            console.log("see user albums", response.data)
        })
    }

    const handlePublish=()=>{
      console.log("see kalam", kalam);
      console.log("see album", album);
      axiosInstance
      .post('/api/userPost',{
          text: value.current,
          kalam: kalam,
          album: album

      })
    }

    const handleSelectKalam = (id) => {
      setKalam((current) => (current === id ? null : id));

      console.log("see naa", id)

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
        <div className="cs-brand">
          <div className="cs-brand-icon">
            <Icon name="sparkle" size={18} />
          </div>
          <h1 className="cs-brand-title">Aura Poetry</h1>
        </div>
      </div>
      <div className="cs-header-right">
        <div className="cs-live-pill">
          <div className="cs-live-dot cs-pulse-dot" />
          <span className="cs-live-label">Live</span>
        </div>
        <div className="cs-header-icons">
          <button aria-label="Search">
            <Icon name="search" size={20} />
          </button>
          <button aria-label="Notifications">
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
        {NAV_SECTIONS.map((section) => (
          <React.Fragment key={section.label}>
            <div className="cs-nav-section">{section.label}</div>
            {section.links.map((link) => (
              <a key={link.text} href="#" className={`cs-nav-link${link.active ? " active" : ""}`}>
                <Icon name={link.icon} size={18} />
                <span>{link.text}</span>
              </a>
            ))}
          </React.Fragment>
        ))}
      </nav>
    </aside>
  );

  const Composer = ({ userAvatarUrl, placeholder = "Pen your verses for the world...", onPublish }) => {
  
    return (
      <div className="cs-composer">
        <div className="cs-composer-row">
          <img className="cs-avatar-md" src={userAvatarUrl} alt="My avatar" />
          <div className="cs-composer-body">
            <textarea
              className="cs-textarea"
              placeholder={placeholder}
              rows={2}
              value={value.current}
              onChange={(e) => value.current = e.target.value}
            />
            <div className="cs-composer-toolbar">
              <div className="cs-toolbar-icons">
                {/* <button className="cs-tool-btn" title="Add quote">
                  <Icon name="quote" size={18} />
                </button>
                <button onClick={()=>{setIsSelectionModalOpen(true); fetchUserAlbums(); fetchUserKalams();}} className="cs-tool-btn" title="Add image">
                  <Icon name="image" size={18} />
                </button>
                <div className="cs-toolbar-divider" />
                <button className="cs-tool-btn" title="Add Kalam">
                  <Icon name="book" size={18} />
                </button> */}
                {!isAttached && <button onClick={()=>{setIsSelectionModalOpen(true); fetchUserAlbums(); fetchUserKalams();}} >Attach</button>}
                {isAttached && <button onClick={handleDeAttach}>remove</button>}
              </div>
              <button className="cs-publish-btn" onClick={() => {onPublish?.(value); handlePublish()}}>
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RightSidebar = ({ userAvatarUrl, onPublish }) => (
    <aside className="cs-sidebar-right">
      <div className="cs-sidebar-right-content">
        <div className="cs-sidebar-right-top">
          {/* <div className="cs-widget">
            <h3 className="cs-widget-title">Network Status</h3>
            <div className="cs-status-row">
              <div className="cs-status-icon">
                <Icon name="shield" size={16} />
              </div>
              <div>
                <p className="cs-status-title">Protocol Alpha Confirmed</p>
                <p className="cs-status-sub">Verified by Concierge at 10:50 AM</p>
              </div>
            </div>
          </div> */}
          {/* <div className="cs-widget">
            <h3 className="cs-widget-title">Live Metrics</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="cs-metric-row">
                <span className="cs-metric-label">Active Poets</span>
                <span className="cs-metric-value">1,042</span>
              </div>
              <div className="cs-metric-divider" />
              <div className="cs-metric-row">
                <span className="cs-metric-label">Encryption</span>
                <span className="cs-metric-value">AES-256</span>
              </div>
              <div className="cs-metric-divider" />
              <div className="cs-metric-row">
                <span className="cs-metric-label">Uptime</span>
                <span className="cs-metric-value">99.99%</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Composer now lives pinned to the bottom of the right sidebar */}
        <div className="cs-sidebar-composer">
          <Composer userAvatarUrl={userAvatarUrl} onPublish={onPublish} />
        </div>
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

  const handleDeAttach=()=>{

    console.log("deAttach function ran!!!");
    (album)?setAlbum(null):setKalam(null);
    setIsAttached(false);
  }

  return (
    <div className="cs-root">
      <style>{styles}</style>

      <TopAppBar userAvatarUrl={userAvatarUrl} />

      <div className="cs-layout">
        <LeftSidebar />

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

            <div className="cs-posts">
              {userPosts.map((item) => (
                (item.featuredAlbum)?
                <PostCard key={item._id}  postText={"He yaaaa from album!!"} onLike={onLike} onComment={onComment} timestamp={item.createdAt} authorAvatarUrl={item.postBy.profilePic} authorName={item.postBy.name}   onShare={onShare} isAlbumAvailable={true} isKalamAvailable={false} embed={{title: item.featuredAlbum.name, imageUrl:  "https://lh3.googleusercontent.com/aida-public/AB6AXuC4PS-qi6gnp_PNKrnxCkocGWy3gWcR_d68oTzb1hkAUc-2oatuSV1L11_4FSkXlX79mMcBo4d8XjStPMd5AmIqmzYOIiTSFWtkiCyuv9YEOQQhazV5Xqzqr58bLNtuMbIartDk7HH5VpwLxS92nxfw5iYgJkUWv3ZMdo_AwL7yBZzUu65_3MVN2pbS5HtYsLumkSV-YqJjU7Q-RuwQBMWoLW4vtlhN_TSo_NAuTsIYL9K_v-9MY-ZT", description:"This is description", ctaLabel: "Listen Now"}} />
             : (item.featurdKalam)?                <PostCard key={item._id}  postText={"He yaaaa from kalam!!"} onLike={onLike} onComment={onComment} timestamp={item.createdAt} authorAvatarUrl={item.postBy.profilePic} authorName={item.postBy.name}  onShare={onShare} isAlbumAvailable={false} isKalamAvailable={true} title={item.featurdKalam.name} content={item.featurdKalam.content} muid={"939297973293783902"} kalId={item.featurdKalam._id} isLiked2={true} isSaved={true} customStyles={item.featurdKalam.customStyles} embed={null} />
             :                 <PostCard key={item._id}  postText={"He yaaaa from text!!"} onLike={onLike} onComment={onComment} timestamp={item.createdAt} authorAvatarUrl={item.postBy.profilePic} authorName={item.postBy.name}  onShare={onShare} isAlbumAvailable={false} isKalamAvailable={false} embed={"no "} />


              ))}
            </div>

            <div className="cs-ornament-line" style={{ margin: "48px 0" }}>
              <div className="cs-diamond" />
              <div className="cs-diamond" style={{ margin: "0 4px", transform: "scale(1.5) rotate(45deg)" }} />
              <div className="cs-diamond" />
            </div>
          </div>
        </main>

        <MyVerticallyCenteredModal isOpen={isSelectionModalOpen} onClose={() => setIsSelectionModalOpen(false)}>
          <div className="cs-modal-inner">
            <div className="cs-modal-header">
              <h2 className="cs-modal-title">Add to your verse</h2>
              <p className="cs-modal-subtitle">Attach a Kalam or an Album to your post</p>
            </div>

            <div className="cs-modal-tabs">
              <button
                className={`cs-modal-tab${modalTab === "kalam" ? " active" : ""}`}
                onClick={() => setModalTab("kalam")}
              >
                <Icon name="book" size={16} />
                Kalams
              </button>
              <button
                className={`cs-modal-tab${modalTab === "album" ? " active" : ""}`}
                onClick={() => setModalTab("album")}
              >
                <Icon name="image" size={16} />
                Albums
              </button>
            </div>

            <div className="cs-modal-body">
              {modalTab === "kalam" ? (
                userKalams.length === 0 ? (
                  <div className="cs-modal-empty">No kalams found yet.</div>
                ) : (
                  <div className="cs-modal-grid">
                    {userKalams.map((item) => (
                      <div
                        key={item._id}
                        className={`cs-modal-card${kalam === item._id ? " selected" : ""}`}
                        onClick={() => handleSelectKalam(item._id)}
                      >
                        {kalam === item._id && (
                          <div className="cs-modal-check">
                            <Icon name="check" size={14} />
                          </div>
                        )}
                        <NewKalam
                          title={item.name}
                          content={item.content}
                          type={item.category}
                          imageSrc={item.customStyles?.imageSrc}
                          kalId={item._id}
                          customStyles={item.customStyles}
                        />
                      </div>
                    ))}
                  </div>
                )
              ) : userAlbums.length === 0 ? (
                <div className="cs-modal-empty">No albums found yet.</div>
              ) : (
                <div className="cs-modal-grid">
                  {userAlbums.map((item) => (
                    <div
                      key={item._id}
                      className={`cs-modal-card cs-modal-card-album${album === item._id ? " selected" : ""}`}
                      onClick={() => handleSelectAlbum(item._id)}
                    >
                      {album === item._id && (
                        <div className="cs-modal-check">
                          <Icon name="check" size={14} />
                        </div>
                      )}
                      <div className="cs-modal-album-cover">
                        <img src={item.imageUrl || item.coverUrl} alt={item.title || item.name} />
                      </div>
                      <div className="cs-modal-album-body">
                        <p className="cs-modal-album-title">{item.title || item.name}</p>
                        <p className="cs-modal-album-meta">
                          {item.meta || `${item.tracks?.length ?? 0} Tracks`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="cs-modal-footer">
              <button className="cs-modal-cancel-btn" onClick={() => setIsSelectionModalOpen(false)}>
                Cancel
              </button>
              <button
                className="cs-modal-confirm-btn"
                disabled={!kalam && !album}
                onClick={() => {setIsSelectionModalOpen(false); setIsAttached(true)}}
              >
                Attach Selection
              </button>
            </div>
          </div>
        </MyVerticallyCenteredModal>

        <RightSidebar userAvatarUrl={userAvatarUrl} onPublish={onPublish} />
      </div>

      <BottomNav />
    </div>
  );
}