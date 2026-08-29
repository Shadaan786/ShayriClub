import React from "react";
import { useState, useEffect } from "react";
import {
  UserCog,
  Bell,
  Lock,
  Shield,
  HelpCircle,
  Gavel,
  AlertTriangle,
  FileText,
  Search,
  Settings2,
  RefreshCw,
  ChevronRight,
  ExternalLink,
  Menu,
} from "lucide-react";

/**
 * Data Export admin panel
 * Sidebar (aside header, nav list, footer links) ported 1:1 from the
 * SystemSettings component so both pages share the exact same sidebar.
 */

// ---- Original theme tokens (kept 1:1 with the source HTML) ----
const COLORS = {
  background: "#141313",
  surface: "#141313",
  surfaceLowest: "#000000",
  surfaceContainer: "#201f1f",
  surfaceContainerLow: "#1c1b1b",
  surfaceContainerLowest: "#0e0e0e",
  surfaceContainerHigh: "#2b2a2a",
  surfaceVariant: "#353434",
  borderSubtle: "#262626",
  borderStrong: "#404040",
  outlineVariant: "#444748",
  onSurface: "#e5e2e1",
  onSurfaceVariant: "#c4c7c7",
  primary: "#c9c6c5",
  primaryFixedDim: "#c9c6c5",
  error: "#ffb4ab",
};
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

const DATE_RANGES = [
  { label: "Last 30 Days", value: "30d" },
  { label: "Last 6 Months", value: "6m" },
  { label: "Last Year", value: "1y" },
  { label: "All Time", value: "all" },
];

const DATA_SOURCES = [
  { label: "User Profiles & Analytics", defaultChecked: true },
  { label: "Transaction History", defaultChecked: true },
  { label: "System Logs (Admin Only)", defaultChecked: false },
];

const EXPORTS = [
  {
    date: "2023-10-24 14:32 PST",
    range: "Last 30 Days",
    format: "JSON",
    status: "completed",
    action: "Download (24MB)",
  },
  {
    date: "2023-10-26 09:15 PST",
    range: "All Time",
    format: "CSV",
    status: "processing",
    action: "Preparing...",
  },
  {
    date: "2023-09-10 11:00 PST",
    range: "Last 6 Months",
    format: "JSON",
    status: "expired",
    action: "Link Expired",
  },
];

function StatusBadge({ status }) {
  if (status === "completed") {
    return (
      <div className="flex items-center gap-1" style={{ color: COLORS.primaryFixedDim }}>
        <span className="material-symbols-outlined" style={{ fontSize: "14px", fontVariationSettings: "'FILL' 1" }}>
          check_circle
        </span>
        Completed
      </div>
    );
  }
  if (status === "processing") {
    return (
      <div className="flex items-center gap-1 animate-pulse" style={{ color: COLORS.outlineVariant }}>
        <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
          pending
        </span>
        Processing
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1" style={{ color: COLORS.error }}>
      <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
        error
      </span>
      Expired
    </div>
  );
}

function TimeRangePicker() {
  const [selected, setSelected] = React.useState("30d");
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold tracking-wide" style={{ color: COLORS.onSurface }}>
        Time Range
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {DATE_RANGES.map((range) => {
          const isSelected = selected === range.value;
          return (
            <label key={range.value} className="cursor-pointer">
              <input
                type="radio"
                name="date_range"
                value={range.value}
                checked={isSelected}
                onChange={() => setSelected(range.value)}
                className="sr-only"
              />
              <div
                className="py-2 px-4 text-center text-sm transition-colors border"
                style={
                  isSelected
                    ? { backgroundColor: COLORS.onSurface, color: COLORS.surfaceLowest, borderColor: COLORS.borderSubtle }
                    : { backgroundColor: COLORS.surfaceContainer, color: COLORS.onSurfaceVariant, borderColor: COLORS.borderSubtle }
                }
              >
                {range.label}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

function DataSourcesPicker() {
  const [checked, setChecked] = React.useState(
    Object.fromEntries(DATA_SOURCES.map((s) => [s.label, s.defaultChecked]))
  );

  const toggle = (label) => setChecked((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold tracking-wide" style={{ color: COLORS.onSurface }}>
        Data Sources
      </label>
      <div className="flex flex-col gap-1">
        {DATA_SOURCES.map((source) => (
          <label
            key={source.label}
            className="flex items-center gap-2 cursor-pointer py-1 px-2 -ml-2 transition-colors"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.surfaceVariant;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <input
              type="checkbox"
              checked={!!checked[source.label]}
              onChange={() => toggle(source.label)}
              className="w-4 h-4 rounded-none focus:ring-0 focus:ring-offset-0"
              style={{
                backgroundColor: COLORS.surfaceContainer,
                borderColor: COLORS.borderStrong,
                color: COLORS.onSurface,
                accentColor: COLORS.onSurface,
              }}
            />
            <span className="text-sm" style={{ color: COLORS.onSurface }}>
              {source.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

function NewExportRequestForm() {
  return (
    <div className="col-span-1 md:col-span-8 border p-6" style={{ borderColor: COLORS.borderSubtle, backgroundColor: COLORS.surface }}>
      <h3
        className="text-lg font-semibold mb-6 flex items-center gap-2 border-b pb-2"
        style={{ color: COLORS.onSurface, borderColor: COLORS.borderSubtle }}
      >
        <span className="material-symbols-outlined" style={{ color: COLORS.primary }}>
          build
        </span>
        New Export Request
      </h3>

      <form className="flex flex-col gap-6">
        <TimeRangePicker />
        <DataSourcesPicker />

        <div className="flex flex-col md:flex-row gap-6 md:items-end mt-4 pt-6 border-t" style={{ borderColor: COLORS.borderSubtle }}>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-xs font-semibold tracking-wide" style={{ color: COLORS.onSurface }}>
              Export Format
            </label>
            <div className="relative border transition-colors" style={{ borderColor: COLORS.borderSubtle, backgroundColor: COLORS.surfaceContainer }}>
              <select
                className="w-full bg-transparent border-none text-sm py-2 pl-4 pr-10 appearance-none focus:ring-0"
                style={{ color: COLORS.onSurface }}
              >
                <option style={{ backgroundColor: COLORS.surfaceContainer, color: COLORS.onSurface }} value="json">
                  JSON (Recommended)
                </option>
                <option style={{ backgroundColor: COLORS.surfaceContainer, color: COLORS.onSurface }} value="csv">
                  CSV (Comma Separated)
                </option>
                <option style={{ backgroundColor: COLORS.surfaceContainer, color: COLORS.onSurface }} value="xml">
                  XML
                </option>
              </select>
              <span
                className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: COLORS.onSurfaceVariant }}
              >
                arrow_drop_down
              </span>
            </div>
          </div>

          <button
            type="button"
            className="py-2 px-8 text-xs font-semibold tracking-wide whitespace-nowrap h-[42px] flex items-center justify-center gap-2 transition-colors"
            style={{ backgroundColor: "#ffffff", color: "#000000" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.primaryFixedDim;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              download
            </span>
            Request Export
          </button>
        </div>
      </form>
    </div>
  );
}

function InfoSidebar() {
  return (
    <div className="col-span-1 md:col-span-4 border p-6 flex flex-col gap-6" style={{ borderColor: COLORS.borderSubtle, backgroundColor: COLORS.surface }}>
      <div className="flex items-start gap-4">
        <span className="material-symbols-outlined mt-1" style={{ color: COLORS.outlineVariant }}>
          info
        </span>
        <div>
          <h4 className="text-xs font-semibold tracking-wide mb-1" style={{ color: COLORS.onSurface }}>
            Processing Time
          </h4>
          <p className="text-xs" style={{ color: COLORS.onSurfaceVariant }}>
            Large exports may take up to 24 hours to generate. You will receive an email notification when your file is ready.
          </p>
        </div>
      </div>

      <div className="h-px w-full" style={{ backgroundColor: COLORS.borderSubtle }} />

      <div className="flex items-start gap-4">
        <span className="material-symbols-outlined mt-1" style={{ color: COLORS.outlineVariant }}>
          security
        </span>
        <div>
          <h4 className="text-xs font-semibold tracking-wide mb-1" style={{ color: COLORS.onSurface }}>
            Data Security
          </h4>
          <p className="text-xs" style={{ color: COLORS.onSurfaceVariant }}>
            Export links expire 7 days after generation. Ensure you store downloaded data securely in compliance with your organization's policies.
          </p>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <div className="border p-4 flex items-center justify-between" style={{ backgroundColor: COLORS.surfaceContainerHigh, borderColor: COLORS.borderSubtle }}>
          <span className="text-xs font-semibold tracking-wide" style={{ color: COLORS.onSurfaceVariant }}>
            Storage Quota
          </span>
          <span className="text-sm font-mono" style={{ color: COLORS.onSurface }}>
            45GB / 100GB
          </span>
        </div>
        <div className="w-full h-0.5 mt-1" style={{ backgroundColor: COLORS.borderStrong }}>
          <div className="h-full" style={{ width: "45%", backgroundColor: COLORS.onSurface }} />
        </div>
      </div>
    </div>
  );
}

function RecentExportsTable() {
  return (
    <section className="mt-6">
      <h3 className="text-lg font-semibold mb-4" style={{ color: COLORS.onSurface }}>
        Recent Exports
      </h3>
      <div className="border overflow-x-auto" style={{ borderColor: COLORS.borderSubtle, backgroundColor: COLORS.surface }}>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b" style={{ borderColor: COLORS.borderSubtle, backgroundColor: COLORS.surfaceContainerLow }}>
              {["Request Date", "Range", "Format", "Status", "Action"].map((h, i) => (
                <th
                  key={h + i}
                  className={"py-2 px-4 text-xs font-semibold tracking-wide font-normal" + (h === "Action" ? " text-right" : "")}
                  style={{ color: COLORS.onSurfaceVariant }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm">
            {EXPORTS.map((row, idx) => (
              <tr
                key={row.date}
                className="transition-colors"
                style={idx !== EXPORTS.length - 1 ? { borderBottom: `1px solid ${COLORS.borderSubtle}` } : {}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.surfaceVariant;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <td className="py-4 px-4 font-mono text-xs" style={{ color: COLORS.onSurface }}>
                  {row.date}
                </td>
                <td className="py-4 px-4" style={{ color: COLORS.onSurfaceVariant }}>
                  {row.range}
                </td>
                <td className="py-4 px-4">
                  <span
                    className="inline-block px-1 py-0.5 text-[10px] uppercase font-bold tracking-wider border"
                    style={{ borderColor: COLORS.borderStrong, backgroundColor: COLORS.surfaceContainer, color: COLORS.onSurface }}
                  >
                    {row.format}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <StatusBadge status={row.status} />
                </td>
                <td className="py-4 px-4 text-right">
                  {row.status === "completed" ? (
                    <a
                      href="#"
                      className="flex items-center justify-end gap-1 underline underline-offset-4 transition-colors"
                      style={{ color: COLORS.onSurface, textDecorationColor: COLORS.borderStrong }}
                    >
                      {row.action}
                      <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                        arrow_downward
                      </span>
                    </a>
                  ) : (
                    <span className="cursor-not-allowed opacity-50" style={{ color: COLORS.onSurfaceVariant }}>
                      {row.action}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function DataExport() {
  const [activeSection, setActiveSection] = useState("privacy");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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

  return (
    <div
      className="flex h-screen w-full overflow-hidden font-sans"
      style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Sidebar - desktop */}
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

      {/* Mobile sidebar drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-20 flex md:hidden">
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

      {/* Main content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header
          className="flex justify-between items-center px-6 h-16 w-full shrink-0 z-10"
          style={{ borderBottom: `1px solid ${colors.borderSubtle}`, backgroundColor: colors.surface }}
        >
          <div className="flex items-center gap-4">
            <button className="md:hidden" onClick={() => setMobileNavOpen(true)} style={{ color: colors.onSurface }}>
              <Menu size={22} />
            </button>
            <div>
              <h2 className="text-lg font-bold leading-tight" style={{ fontFamily: "Geist, sans-serif" }}>
                Data Export
              </h2>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-6xl mx-auto flex flex-col gap-8">
            <p className="text-sm -mt-2" style={{ color: colors.onSurfaceVariant }}>
              Request and manage data exports for compliance and backup.
            </p>

            <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <NewExportRequestForm />
              <InfoSidebar />
            </section>

            <RecentExportsTable />

            <div className="h-12" />
          </div>
        </div>
      </main>
    </div>
  );
}