import React, { useEffect, useState } from "react";
import {
  UserCog,
  Bell,
  Lock,
  Shield,
  HelpCircle,
  Gavel,
  AlertTriangle,
  FileText,
  Menu,
} from "lucide-react";

// ---- Sidebar design tokens (ported 1:1 from SystemSettings.jsx) ----
const colors = {
  surface: "#141313",
  surfaceContainerHighest: "#353434",
  dangerAccent: "#ff4d4d",
  outline: "#8e9192",
  onPrimary: "#313030",
  surfaceLow: "#0a0a0a",
  outlineVariant: "#444748",
  surfaceContainerLowest: "#0e0e0e",
  dangerContainer: "#2a0a0a",
  surfaceHigh: "#1e1e1e",
  background: "#141313",
  primary: "#c9c6c5",
  secondaryContainer: "#454747",
  onBackground: "#e5e2e1",
  onSurface: "#e5e2e1",
  onSurfaceVariant: "#c4c7c7",
  surfaceContainer: "#201f1f",
  surfaceMid: "#121212",
  surfaceContainerHigh: "#2b2a2a",
  borderSubtle: "#262626",
  borderStrong: "#404040",
};

const NAV_ITEMS = [
  { id: "account", label: "Account", icon: UserCog },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "privacy", label: "Privacy", icon: Lock },
  { id: "security", label: "Security", icon: Shield },
  { id: "support", label: "Support & Feedback", icon: HelpCircle },
  { id: "legal", label: "Legal", icon: Gavel },
  { id: "danger", label: "Danger Zone", icon: AlertTriangle, danger: true },
];

/**
 * Kalam - Report a Problem
 *
 * Converted from a static HTML page to a React component.
 *
 * This component is self-contained: everything that lived in the
 * original <head> (Tailwind CDN + plugins, the tailwind.config
 * object, and the Google Fonts / Material Symbols links) is injected
 * into document.head on mount via the useEffect below, so the UI,
 * theme, icons, and fonts all match the original HTML file exactly
 * with no extra setup required.
 *
 * Sidebar header/footer content updated to match the exact sidebar used
 * across the rest of the app (Settings / Technical Console v1.0 header,
 * Docs + Support footer links) instead of the previous Kalam/Logout+avatar
 * version — nav items and active-state styling are unchanged.
 */

export const tailwindConfig = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-fixed-dim": "#c9c6c5",
        "on-primary-fixed": "#1c1b1b",
        "surface-container-low": "#1c1b1b",
        "tertiary-fixed": "#e6e1df",
        "surface-container-high": "#2b2a2a",
        "on-tertiary-container": "#7c7977",
        "on-tertiary-fixed": "#1d1b1a",
        secondary: "#c6c6c7",
        "secondary-fixed-dim": "#c6c6c7",
        "on-background": "#e5e2e1",
        "tertiary-container": "#0b0a09",
        "inverse-surface": "#e5e2e1",
        "primary-fixed": "#e5e2e1",
        "on-error-container": "#ffdad6",
        "surface-dim": "#141313",
        "on-error": "#690005",
        "surface-container": "#201f1f",
        "danger-container": "#2a0a0a",
        error: "#ffb4ab",
        "on-tertiary": "#32302f",
        tertiary: "#cac6c3",
        "surface-container-lowest": "#0e0e0e",
        "secondary-container": "#454747",
        "surface-container-highest": "#353434",
        "inverse-on-surface": "#313030",
        "on-secondary-fixed-variant": "#454747",
        "surface-variant": "#353434",
        "on-secondary": "#2f3131",
        "on-primary": "#313030",
        primary: "#c9c6c5",
        "on-primary-container": "#7b7979",
        "on-surface-variant": "#c4c7c7",
        "inverse-primary": "#5f5e5e",
        "surface-highest": "#2a2a2a",
        "primary-container": "#0a0a0a",
        outline: "#8e9192",
        "outline-variant": "#444748",
        "border-subtle": "#262626",
        "danger-accent": "#ff4d4d",
        "tertiary-fixed-dim": "#cac6c3",
        "on-surface": "#e5e2e1",
        "surface-bright": "#3a3939",
        "on-tertiary-fixed-variant": "#484645",
        "secondary-fixed": "#e2e2e2",
        "border-strong": "#404040",
        "error-container": "#93000a",
        "surface-low": "#0a0a0a",
        surface: "#141313",
        "on-secondary-container": "#b4b5b5",
        "surface-mid": "#121212",
        background: "#141313",
        "surface-tint": "#c9c6c5",
        "surface-high": "#1e1e1e",
        "surface-lowest": "#000000",
        "on-primary-fixed-variant": "#474646",
        "on-secondary-fixed": "#1a1c1c",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        lg: "24px",
        sm: "8px",
        "container-max": "1200px",
        "margin-mobile": "16px",
        xl: "48px",
        gutter: "24px",
        xs: "4px",
        md: "16px",
        unit: "4px",
      },
      fontFamily: {
        "body-sm": ["Inter"],
        display: ["Geist"],
        code: ["Geist"],
        "label-md": ["Geist"],
        "headline-lg": ["Geist"],
        "headline-md": ["Geist"],
        "body-lg": ["Inter"],
        "headline-sm": ["Geist"],
        "body-md": ["Inter"],
      },
      fontSize: {
        "body-sm": ["12px", { lineHeight: "1.5", fontWeight: "400" }],
        display: [
          "48px",
          { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" },
        ],
        code: ["13px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-md": [
          "12px",
          { lineHeight: "1", letterSpacing: "0.08em", fontWeight: "600" },
        ],
        "headline-lg": [
          "32px",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "headline-md": [
          "24px",
          { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "body-lg": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-sm": ["18px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-md": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
      },
    },
  },
};

export default function ReportProblem() {
  const [ready, setReady] = React.useState(false);
  const [activeSection, setActiveSection] = useState("support");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Identical NavList used across the console (see SystemSettings.jsx)
  const NavList = ({ onNavigate }) => (
    <nav className="flex-1 overflow-y-auto px-4 space-y-1">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = item.id === activeSection;
        return (
          <button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              onNavigate && onNavigate();
            }}
            className="w-full flex items-center gap-4 py-3 px-4 text-left transition-colors"
            style={{
              color: item.danger ? colors.dangerAccent : isActive ? colors.onSurface : colors.onSurfaceVariant,
              backgroundColor: isActive ? colors.surfaceContainerHigh : "transparent",
              borderLeft: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
              fontWeight: isActive ? 700 : 400,
            }}
          >
            <Icon size={20} />
            <span className="text-xs font-semibold tracking-wider">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );

  useEffect(() => {
    const addedNodes = [];

    // Preconnects for Google Fonts
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect1);
    addedNodes.push(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "";
    document.head.appendChild(preconnect2);
    addedNodes.push(preconnect2);

    // Geist / Inter fonts
    const fontsLink = document.createElement("link");
    fontsLink.rel = "stylesheet";
    fontsLink.href =
      "https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700&family=Inter:wght@400;600&display=swap";
    document.head.appendChild(fontsLink);
    addedNodes.push(fontsLink);

    // Material Symbols icon font
    const iconsLink = document.createElement("link");
    iconsLink.rel = "stylesheet";
    iconsLink.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
    document.head.appendChild(iconsLink);
    addedNodes.push(iconsLink);

    // Match the original <html class="dark">
    document.documentElement.classList.add("dark");

    // Tailwind CDN (with forms + container-queries plugins, same as original).
    // IMPORTANT: window.tailwind only exists once this script has loaded, so
    // tailwind.config must be set inside onload — setting it beforehand (or
    // even immediately after appending, since external scripts load async)
    // throws/silently no-ops and you get unstyled defaults, which is exactly
    // what was happening before this fix.
    const tailwindScript = document.createElement("script");
    tailwindScript.src =
      "https://cdn.tailwindcss.com?plugins=forms,container-queries";
    tailwindScript.onload = () => {
      if (window.tailwind) {
        window.tailwind.config = tailwindConfig;
      }
      // Styles are generated synchronously off the config, so it's safe to
      // reveal the UI on the next frame — this is what removes the FOUC.
      requestAnimationFrame(() => setReady(true));
    };
    document.head.appendChild(tailwindScript);
    addedNodes.push(tailwindScript);

    return () => {
      addedNodes.forEach((node) => node.remove());
    };
  }, []);

  // While Tailwind CDN is loading and applying the config, show a branded
  // loading state that matches the console's theme instead of either the
  // raw unstyled markup or a blank screen. Built with plain CSS (not
  // Tailwind classes) since Tailwind isn't active yet at this point.
  if (!ready) {
    return (
      <>
        <style>{`
          html, body {
            background-color: #141313;
            margin: 0;
            height: 100%;
          }

          @keyframes kalam-spin {
            to { transform: rotate(360deg); }
          }

          @keyframes kalam-pulse-dot {
            0%, 80%, 100% { opacity: 0.25; transform: scale(0.85); }
            40% { opacity: 1; transform: scale(1); }
          }

          @keyframes kalam-fade-up {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .kalam-loading-screen {
            min-height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            background-color: #141313;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, sans-serif;
          }

          .kalam-loading-mark {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            animation: kalam-fade-up 0.5s ease-out;
          }

          .kalam-loading-title {
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.02em;
            color: #e5e2e1;
            margin: 0;
          }

          .kalam-loading-subtitle {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #7c7977;
            margin: 0;
          }

          .kalam-spinner {
            width: 34px;
            height: 34px;
            border-radius: 9999px;
            border: 2px solid #262626;
            border-top-color: #c9c6c5;
            animation: kalam-spin 0.8s linear infinite;
          }

          .kalam-loading-status {
            display: flex;
            align-items: center;
            gap: 10px;
            animation: kalam-fade-up 0.5s ease-out 0.1s both;
          }

          .kalam-loading-text {
            font-size: 12px;
            color: #8e9192;
            letter-spacing: 0.02em;
          }

          .kalam-dots {
            display: inline-flex;
            gap: 3px;
          }

          .kalam-dots span {
            width: 4px;
            height: 4px;
            border-radius: 9999px;
            background-color: #c9c6c5;
            animation: kalam-pulse-dot 1.2s ease-in-out infinite;
          }

          .kalam-dots span:nth-child(2) { animation-delay: 0.15s; }
          .kalam-dots span:nth-child(3) { animation-delay: 0.3s; }

          .kalam-loading-bar-track {
            width: 160px;
            height: 2px;
            background-color: #262626;
            overflow: hidden;
            border-radius: 9999px;
          }

          .kalam-loading-bar-fill {
            height: 100%;
            width: 40%;
            background-color: #c9c6c5;
            border-radius: 9999px;
            animation: kalam-loading-bar 1.4s ease-in-out infinite;
          }

          @keyframes kalam-loading-bar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(350%); }
          }
        `}</style>
        <div className="kalam-loading-screen">
          <div className="kalam-loading-mark">
            <div className="kalam-spinner" />
            <h1 className="kalam-loading-title" style={{ marginTop: 14 }}>
              Kalam
            </h1>
            <p className="kalam-loading-subtitle">Technical Console</p>
          </div>
          <div className="kalam-loading-bar-track">
            <div className="kalam-loading-bar-fill" />
          </div>
          <div className="kalam-loading-status">
            <span className="kalam-loading-text">Loading workspace</span>
            <span className="kalam-dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        @keyframes kalam-content-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .kalam-content-ready {
          animation: kalam-content-fade-in 0.25s ease-out;
        }

        body {
          background-color: #000000;
          color: #e5e2e1;
        }

        /* Form inputs styling for dark mode */
        input[type="text"],
        input[type="email"],
        input[type="password"],
        textarea,
        select {
          background-color: #121212;
          border-color: #404040;
          color: #e5e2e1;
          border-radius: 0;
        }

        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="password"]:focus,
        textarea:focus,
        select:focus {
          border-color: #e5e2e1;
          box-shadow: none;
          outline: none;
        }

        .border-dashed-hover:hover {
          border-color: #e5e2e1;
          background-color: #1e1e1e;
        }
      `}</style>

      <div
        className="kalam-content-ready font-body-md antialiased overflow-hidden h-screen flex"
        style={{ backgroundColor: colors.surface, color: colors.onSurface }}
      >
        {/* Sidebar - desktop (identical to SystemSettings.jsx) */}
        <aside
          className="hidden md:flex flex-col h-screen w-64 shrink-0 py-12"
          style={{ borderRight: `1px solid ${colors.borderSubtle}`, backgroundColor: colors.surface }}
        >
          <div className="px-6 mb-12">
            <h1 className="text-2xl font-bold" style={{ fontFamily: "Geist, sans-serif" }}>
              Settings
            </h1>
            <p className="text-xs mt-2" style={{ color: colors.onSurfaceVariant }}>
              Technical Console v1.0
            </p>
          </div>
          <NavList />
          <div className="px-4 mt-auto pt-6" style={{ borderTop: `1px solid ${colors.borderSubtle}` }}>
            <a
              className="flex items-center gap-4 py-2 px-4 text-xs font-semibold tracking-wider transition-colors"
              style={{ color: colors.onSurfaceVariant }}
              href="#"
            >
              <FileText size={18} /> Docs
            </a>
            <a
              className="flex items-center gap-4 py-2 px-4 text-xs font-semibold tracking-wider transition-colors"
              style={{ color: colors.onSurfaceVariant }}
              href="#"
            >
              <HelpCircle size={18} /> Support
            </a>
          </div>
        </aside>

        {/* Mobile sidebar drawer (identical to SystemSettings.jsx) */}
        {mobileNavOpen && (
          <div className="fixed inset-0 z-30 flex md:hidden">
            <div
              className="w-72 h-full flex flex-col py-8"
              style={{ backgroundColor: colors.surface, borderRight: `1px solid ${colors.borderSubtle}` }}
            >
              <div className="px-6 mb-8 flex items-center justify-between">
                <h1 className="text-xl font-bold" style={{ fontFamily: "Geist, sans-serif" }}>
                  Settings
                </h1>
                <button onClick={() => setMobileNavOpen(false)} style={{ color: colors.onSurfaceVariant }}>
                  ✕
                </button>
              </div>
              <NavList onNavigate={() => setMobileNavOpen(false)} />
            </div>
            <div className="flex-1" onClick={() => setMobileNavOpen(false)} style={{ backgroundColor: "#000000aa" }} />
          </div>
        )}

        {/* Main Content Wrapper */}
        <div className="flex-1 flex flex-col w-full relative overflow-hidden">
          {/* TopNavBar */}
          <header className="bg-surface dark:bg-surface docked full-width top-0 z-10 border-b border-border-subtle flex justify-between items-center w-full px-lg py-sm sticky">
            <div className="flex items-center gap-md">
              <button
                className="md:hidden text-on-surface hover:text-primary transition-opacity scale-95 duration-100 p-sm flex items-center justify-center"
                onClick={() => setMobileNavOpen(true)}
              >
                <Menu size={22} />
              </button>
              <div className="relative hidden sm:block">
                <span
                  className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-sm pointer-events-none"
                  data-icon="search"
                >
                  search
                </span>
                <input
                  className="pl-xl pr-sm py-xs bg-surface-mid border border-border-subtle font-body-sm text-body-sm text-on-surface focus:border-on-surface transition-colors w-64 h-8 rounded-none"
                  placeholder="Search resources..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-md">
              <button
                aria-label="Settings"
                className="text-on-surface-variant hover:text-primary transition-opacity scale-95 duration-100 p-xs flex items-center justify-center"
              >
                <span
                  className="material-symbols-outlined"
                  data-icon="settings"
                >
                  settings
                </span>
              </button>
              <button
                aria-label="Notifications"
                className="text-on-surface-variant hover:text-primary transition-opacity scale-95 duration-100 p-xs flex items-center justify-center relative"
              >
                <span
                  className="material-symbols-outlined"
                  data-icon="notifications"
                >
                  notifications
                </span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
              </button>
              <div className="h-8 w-px bg-border-subtle mx-xs hidden sm:block"></div>
              <img
                alt="User Avatar"
                className="w-8 h-8 border border-border-subtle object-cover cursor-pointer hover:border-primary transition-colors"
                data-alt="A minimalist tech avatar, sharp angles, monochrome dark aesthetic, subtle glowing elements, professional digital portrait."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_mzu7WU42iPiCBXDTZKTg4hx5H_t8xexJ1JIbau14fbjzKPDXtxMy9W1sv3LJEsF2UNZta5haYQHr8xPxxMpyYo9mEqeU9Sybvp8PJmx4PxYBQ70SSX4ebm-rgkwToo-l9t_wySrZlNmhav8Eg-wo1p7-9TYYK2UVMFSld6ZlVkHOr27HkwaGoXbHebmQDjmSDCfwsXPvO72pGOA-agoQb1zLQRftrg7oJvSG1x1T-NrR29-K1zrG7A"
              />
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-margin-mobile md:p-gutter flex flex-col gap-xl" style={{backgroundColor: "#141313"}}>
            <div className="max-w-container-max mx-auto w-full">
              {/* Header Section */}
              <div className="mb-lg border-b border-border-subtle pb-md">
                <h2 className="font-headline-lg text-start text-headline-lg text-on-surface font-bold tracking-tight mb-xs">
                  Report a Problem
                </h2>
                <p className="font-body-md text-start text-body-md text-on-surface-variant max-w-2xl">
                  Submit detailed information regarding bugs, technical
                  issues, or feature requests. Comprehensive reports enable
                  faster triage and resolution.
                </p>
              </div>

              {/* Bento Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
                {/* Left Col: Form (Takes up more space) */}
                <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-lg">
                  <div className="bg-surface-mid border border-border-subtle p-lg">
                    <form className="flex flex-col gap-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                        <div className="flex flex-col gap-xs">
                          <label
                            className="font-label-md text-label-md text-on-surface uppercase tracking-wider"
                            htmlFor="category"
                          >
                            Problem Category
                          </label>
                          <select
                            className="w-full bg-surface-low border border-border-strong px-sm py-2 font-body-md text-body-md focus:ring-0 focus:border-on-surface transition-colors cursor-pointer appearance-none rounded-none"
                            id="category"
                            name="category"
                            defaultValue=""
                          >
                            <option disabled value="">
                              Select category...
                            </option>
                            <option value="bug">Bug Report</option>
                            <option value="feature">Feature Request</option>
                            <option value="support">Technical Support</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-xs">
                          <label
                            className="font-label-md text-label-md text-on-surface uppercase tracking-wider"
                            htmlFor="priority"
                          >
                            Estimated Severity
                          </label>
                          <select
                            className="w-full bg-surface-low border border-border-strong px-sm py-2 font-body-md text-body-md focus:ring-0 focus:border-on-surface transition-colors cursor-pointer appearance-none rounded-none"
                            id="priority"
                            name="priority"
                            defaultValue="medium"
                          >
                            <option value="low">Low - Cosmetic/Minor</option>
                            <option value="medium">
                              Medium - Core function impaired
                            </option>
                            <option value="high">High - System blocking</option>
                            <option value="critical">
                              Critical - Outage
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-xs">
                        <label
                          className="font-label-md text-label-md text-on-surface uppercase tracking-wider"
                          htmlFor="subject"
                        >
                          Subject / Summary
                        </label>
                        <input
                          className="w-full bg-surface-low border border-border-strong px-sm py-2 font-body-md text-body-md focus:ring-0 focus:border-on-surface transition-colors rounded-none"
                          id="subject"
                          name="subject"
                          placeholder="Briefly describe the issue..."
                          type="text"
                        />
                      </div>

                      <div className="flex flex-col gap-xs">
                        <div className="flex justify-between items-end">
                          <label
                            className="font-label-md text-label-md text-on-surface uppercase tracking-wider"
                            htmlFor="description"
                          >
                            Detailed Description
                          </label>
                          <span className="font-code text-code text-on-surface-variant text-xs">
                            Markdown supported
                          </span>
                        </div>
                        <div className="border border-border-strong bg-surface-low focus-within:border-on-surface transition-colors flex flex-col rounded-none">
                          {/* Fake Rich Text Toolbar */}
                          <div className="flex items-center gap-xs p-xs border-b border-border-subtle bg-surface">
                            <button
                              className="p-xs text-on-surface-variant hover:text-on-surface transition-colors"
                              title="Bold"
                              type="button"
                            >
                              <span
                                className="material-symbols-outlined text-sm"
                                data-icon="format_bold"
                              >
                                format_bold
                              </span>
                            </button>
                            <button
                              className="p-xs text-on-surface-variant hover:text-on-surface transition-colors"
                              title="Italic"
                              type="button"
                            >
                              <span
                                className="material-symbols-outlined text-sm"
                                data-icon="format_italic"
                              >
                                format_italic
                              </span>
                            </button>
                            <div className="w-px h-4 bg-border-strong mx-xs"></div>
                            <button
                              className="p-xs text-on-surface-variant hover:text-on-surface transition-colors"
                              title="Code Block"
                              type="button"
                            >
                              <span
                                className="material-symbols-outlined text-sm"
                                data-icon="code"
                              >
                                code
                              </span>
                            </button>
                            <button
                              className="p-xs text-on-surface-variant hover:text-on-surface transition-colors"
                              title="Link"
                              type="button"
                            >
                              <span
                                className="material-symbols-outlined text-sm"
                                data-icon="link"
                              >
                                link
                              </span>
                            </button>
                          </div>
                          <textarea
                            className="w-full bg-transparent border-none p-sm font-code text-code resize-y focus:ring-0"
                            id="description"
                            name="description"
                            placeholder="Steps to reproduce, expected behavior, actual behavior..."
                            rows="8"
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex flex-col gap-xs">
                        <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                          Attachments (Logs, Screenshots)
                        </label>
                        <div className="border-2 border-dashed border-border-strong bg-surface-low p-lg flex flex-col items-center justify-center gap-sm cursor-pointer border-dashed-hover transition-colors rounded-none group">
                          <span
                            className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-primary transition-colors"
                            data-icon="upload_file"
                          >
                            upload_file
                          </span>
                          <p className="font-body-md text-body-md text-on-surface text-center">
                            Drag and drop files here, or{" "}
                            <span className="text-primary underline decoration-primary/50 underline-offset-2">
                              browse
                            </span>
                          </p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
                            Max file size: 50MB. Allowed: .log, .png, .jpg,
                            .json
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-md mt-sm pt-md border-t border-border-subtle">
                        <button
                          className="px-md py-sm border border-border-strong bg-transparent text-on-surface font-label-md text-label-md hover:bg-surface-highest transition-colors uppercase tracking-wider rounded-none"
                          type="button"
                        >
                          Cancel
                        </button>
                        <button
                          className="px-md py-sm border border-transparent bg-on-surface text-surface-lowest font-label-md text-label-md hover:bg-primary transition-colors uppercase tracking-wider rounded-none flex items-center gap-xs"
                          type="submit"
                        >
                          <span
                            className="material-symbols-outlined text-sm"
                            data-icon="send"
                          >
                            send
                          </span>
                          Submit Report
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right Col: History & Status */}
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-lg">
                  {/* Mini Status Card */}
                  <div className="bg-surface-mid border border-border-subtle p-md flex flex-col gap-sm">
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface flex items-center gap-xs border-b border-border-subtle pb-xs mb-xs">
                      <span
                        className="material-symbols-outlined text-sm text-primary"
                        data-icon="info"
                      >
                        info
                      </span>
                      Support Status
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Current SLA
                      </span>
                      <span className="font-code text-code text-on-surface bg-surface-highest px-xs py-[2px] border border-border-strong">
                        &lt; 4 Hours
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Open Tickets
                      </span>
                      <span className="font-code text-code text-primary">
                        2 Active
                      </span>
                    </div>
                  </div>

                  {/* Recent Reports List */}
                  <div className="bg-surface-mid border border-border-subtle flex flex-col h-full">
                    <div className="p-md border-b border-border-subtle flex justify-between items-center bg-surface-low">
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        My Recent Reports
                      </h3>
                      <a
                        className="font-label-md text-label-md text-primary hover:underline underline-offset-2"
                        href="#"
                      >
                        View All
                      </a>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                      <ul className="flex flex-col divide-y divide-border-subtle">
                        {/* Item 1: In Progress */}
                        <li className="p-md hover:bg-surface-high transition-colors cursor-pointer group">
                          <div className="flex justify-between items-start mb-xs">
                            <span className="font-code text-code text-primary-fixed-dim text-xs">
                              #TKT-8902
                            </span>
                            <span className="font-label-md text-[10px] text-surface-lowest bg-primary px-xs py-[2px] uppercase tracking-widest border border-primary">
                              In Progress
                            </span>
                          </div>
                          <h4 className="font-body-md text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors line-clamp-1 mb-1">
                            API Rate Limit Exceeded Erroneously
                          </h4>
                          <div className="flex items-center gap-sm font-body-sm text-body-sm text-on-surface-variant">
                            <span className="flex items-center gap-[2px]">
                              <span
                                className="material-symbols-outlined text-[14px]"
                                data-icon="bug_report"
                              >
                                bug_report
                              </span>{" "}
                              Bug
                            </span>
                            <span>•</span>
                            <span>Oct 24, 2023</span>
                          </div>
                        </li>
                        {/* Item 2: Pending */}
                        <li className="p-md hover:bg-surface-high transition-colors cursor-pointer group">
                          <div className="flex justify-between items-start mb-xs">
                            <span className="font-code text-code text-primary-fixed-dim text-xs">
                              #TKT-8871
                            </span>
                            <span className="font-label-md text-[10px] text-on-surface bg-surface-highest px-xs py-[2px] uppercase tracking-widest border border-border-strong">
                              Pending
                            </span>
                          </div>
                          <h4 className="font-body-md text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors line-clamp-1 mb-1">
                            Request: Add Webhook Support for Config Changes
                          </h4>
                          <div className="flex items-center gap-sm font-body-sm text-body-sm text-on-surface-variant">
                            <span className="flex items-center gap-[2px]">
                              <span
                                className="material-symbols-outlined text-[14px]"
                                data-icon="wb_incandescent"
                              >
                                wb_incandescent
                              </span>{" "}
                              Feature
                            </span>
                            <span>•</span>
                            <span>Oct 20, 2023</span>
                          </div>
                        </li>
                        {/* Item 3: Resolved */}
                        <li className="p-md hover:bg-surface-high transition-colors cursor-pointer group opacity-60 hover:opacity-100">
                          <div className="flex justify-between items-start mb-xs">
                            <span className="font-code text-code text-primary-fixed-dim text-xs">
                              #TKT-8755
                            </span>
                            <span className="font-label-md text-[10px] text-on-surface bg-transparent px-xs py-[2px] uppercase tracking-widest border border-border-strong">
                              Resolved
                            </span>
                          </div>
                          <h4 className="font-body-md text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors line-clamp-1 mb-1">
                            Dashboard rendering issue on Firefox
                          </h4>
                          <div className="flex items-center gap-sm font-body-sm text-body-sm text-on-surface-variant">
                            <span className="flex items-center gap-[2px]">
                              <span
                                className="material-symbols-outlined text-[14px]"
                                data-icon="support_agent"
                              >
                                support_agent
                              </span>{" "}
                              Support
                            </span>
                            <span>•</span>
                            <span>Oct 15, 2023</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}