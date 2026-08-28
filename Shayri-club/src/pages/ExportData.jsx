import React from "react";

/**
 * Data Export admin panel
 * Converted from static HTML/Tailwind markup to a single-file React component.
 *
 * Uses inline styles for color so the EXACT hex tokens from the original
 * tailwind.config.js theme are preserved, without needing a project-level
 * Tailwind config extension.
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

const NAV_LINKS = [
  { label: "Dashboard", icon: "dashboard" },
  { label: "API Keys", icon: "vpn_key" },
  { label: "Team", icon: "group" },
  { label: "Data Export", icon: "import_export", active: true },
  { label: "Security", icon: "security" },
];

const FOOTER_LINKS = [
  { label: "Settings", icon: "settings" },
  { label: "Support", icon: "contact_support" },
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

function SideNav() {
  return (
    <nav
      className="text-xs h-screen w-64 fixed left-0 top-0 border-r flex flex-col py-4 px-2 z-50"
      style={{ backgroundColor: COLORS.background, color: COLORS.primary, borderColor: COLORS.borderSubtle }}
    >
      <div className="mb-12 px-2">
        <h1 className="text-lg font-semibold" style={{ color: COLORS.onSurface }}>
          Admin Panel
        </h1>
        <p className="opacity-70 mt-1" style={{ color: COLORS.onSurfaceVariant }}>
          V1.2.0
        </p>
      </div>

      <button
        type="button"
        className="w-full py-2 mb-6 flex items-center justify-center gap-2 bg-transparent"
        style={{ border: "1px solid #ffffff", color: "#ffffff" }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
          add
        </span>
        New Project
      </button>

      <ul className="flex flex-col gap-2 flex-1">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href="#"
              className="flex items-center gap-4 px-4 py-2 w-full transition-colors duration-200 ease-in-out"
              style={
                link.active
                  ? {
                      borderLeft: `2px solid ${COLORS.primary}`,
                      color: COLORS.onSurface,
                      fontWeight: 700,
                      backgroundColor: COLORS.surfaceContainer,
                    }
                  : { color: COLORS.onSurfaceVariant, opacity: 0.7 }
              }
              onMouseEnter={(e) => {
                if (!link.active) {
                  e.currentTarget.style.backgroundColor = COLORS.surfaceVariant;
                  e.currentTarget.style.color = COLORS.onSurface;
                }
              }}
              onMouseLeave={(e) => {
                if (!link.active) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = COLORS.onSurfaceVariant;
                }
              }}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-2 mt-auto border-t pt-4" style={{ borderColor: COLORS.borderSubtle }}>
        {FOOTER_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href="#"
              className="flex items-center gap-4 px-4 py-2 w-full transition-colors duration-200 ease-in-out"
              style={{ color: COLORS.onSurfaceVariant, opacity: 0.7 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.surfaceVariant;
                e.currentTarget.style.color = COLORS.onSurface;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = COLORS.onSurfaceVariant;
              }}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
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
  return (
    <div className="flex h-screen overflow-hidden font-sans" style={{ backgroundColor: COLORS.background, color: COLORS.onSurface }}>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

      <SideNav />

      <main className="ml-64 flex-1 h-screen overflow-y-auto" style={{ backgroundColor: COLORS.background }}>
        <header
          className="px-8 py-6 border-b flex justify-between items-center sticky top-0 z-40"
          style={{ borderColor: COLORS.borderSubtle, backgroundColor: COLORS.background }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-1" style={{ color: COLORS.onSurface }}>
              Data Export
            </h2>
            <p className="text-sm" style={{ color: COLORS.onSurfaceVariant }}>
              Request and manage data exports for compliance and backup.
            </p>
          </div>
        </header>

        <div className="max-w-6xl mx-auto p-8 flex flex-col gap-8">
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <NewExportRequestForm />
            <InfoSidebar />
          </section>

          <RecentExportsTable />

          <div className="h-12" />
        </div>
      </main>
    </div>
  );
}