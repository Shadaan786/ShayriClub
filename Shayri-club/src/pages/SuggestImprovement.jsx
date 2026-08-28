import React, { useState } from "react";

// Design tokens pulled from the original Tailwind config (translated to
// arbitrary-value Tailwind classes since this environment doesn't support
// a custom theme extension).
const COLORS = {
  onSurfaceVariant: "#c4c7c7",
  background: "#141313",
  outline: "#8e9192",
  primary: "#c9c6c5",
  surfaceMid: "#121212",
  outlineVariant: "#444748",
  primaryContainer: "#0a0a0a",
  surfaceLow: "#0a0a0a",
  surfaceContainerLowest: "#0e0e0e",
  dangerAccent: "#ff4d4d",
  surfaceHighest: "#2a2a2a",
  surfaceVariant: "#353434",
  surface: "#141313",
  borderStrong: "#404040",
  onPrimaryContainer: "#7b7979",
  borderSubtle: "#262626",
  surfaceContainer: "#201f1f",
  onPrimary: "#313030",
  tertiary: "#cac6c3",
  secondary: "#c6c6c7",
  surfaceContainerHigh: "#2b2a2a",
  surfaceLowest: "#000000",
  onSurface: "#e5e2e1",
  surfaceHigh: "#1e1e1e",
};

const NAV_ITEMS = [
  { icon: "account_circle", label: "Account" },
  { icon: "notifications", label: "Notifications" },
  { icon: "privacy_tip", label: "Privacy" },
  { icon: "security", label: "Security" },
  { icon: "contact_support", label: "Support & Feedback", active: true },
  { icon: "gavel", label: "Legal" },
];

const CATEGORIES = [
  { value: "performance", label: "Performance & Stability" },
  { value: "ui_ux", label: "UI/UX & Accessibility" },
  { value: "new_feature", label: "New Feature Request" },
  { value: "documentation", label: "Documentation & Tooling" },
  { value: "security", label: "Security & Compliance" },
];

const PRIORITIES = [
  { value: "low", label: "Low (Enhancement)" },
  { value: "medium", label: "Medium (Workflow Friction)" },
  { value: "high", label: "High (Critical Blocker)" },
];

const STATUS_STYLES = {
  "Under Review": "bg-[#1e1e1e] text-[#e5e2e1] border-[#404040]",
  Planned: "bg-[#0a0a0a] text-[#c9c6c5] border-[#c9c6c5]",
  Implemented: "bg-[#000000] text-[#c4c7c7] border-[#262626]",
};

const MY_SUGGESTIONS = [
  {
    category: "UI/UX",
    status: "Under Review",
    title: "Dark mode contrast on data tables",
    description:
      "The hex value #262626 used for borders in complex data tables lacks sufficient contrast against #121212 surface containers...",
    dimmed: false,
  },
  {
    category: "Performance",
    status: "Planned",
    title: "Lazy load configuration payload",
    description:
      "Initial load time is degraded by fetching the entire 5MB configuration JSON block upfront. Suggesting pagination or on-demand fetch.",
    dimmed: false,
  },
  {
    category: "Feature",
    status: "Implemented",
    title: "Global search hotkey (Cmd+K)",
    description:
      "Added keyboard shortcut support to focus the top navigation search bar from any view within the console.",
    dimmed: true,
  },
];

function MaterialIcon({ name, filled = false, className = "" }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  );
}

export default function KalamSuggestPage() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFileName(
        files.length === 1 ? files[0].name : `${files.length} files selected`
      );
    } else {
      setFileName("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your submission endpoint.
    console.log({ category, title, description, priority });
  };

  return (
    <div
      className="fixed inset-0 flex overflow-hidden"
      style={{
        backgroundColor: COLORS.surfaceLowest,
        color: COLORS.onSurface,
        fontFamily: "Inter, sans-serif",
        margin: 0,
      }}
    >
      <style>{`
        html, body, #root { margin: 0; padding: 0; height: 100%; overflow: hidden; }
      `}</style>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:wght@100..900&display=swap"
      />

      {/* Top nav bar (mobile) */}
      <div
        className="md:hidden flex justify-between items-center w-full px-4 py-2 fixed top-0 z-50 border-b"
        style={{ backgroundColor: COLORS.surface, borderColor: COLORS.borderSubtle }}
      >
        <div className="flex items-center gap-4">
          <MaterialIcon name="menu" className="text-[#c9c6c5]" />
          <span
            className="text-[18px] font-bold"
            style={{ fontFamily: "Geist, sans-serif", color: COLORS.onSurface }}
          >
            Kalam
          </span>
        </div>
        <div className="flex items-center gap-4">
          <MaterialIcon name="search" className="text-[#c4c7c7] hover:text-[#c9c6c5] transition-opacity" />
          <MaterialIcon name="settings" className="text-[#c4c7c7] hover:text-[#c9c6c5] transition-opacity" />
          <MaterialIcon name="notifications" className="text-[#c4c7c7] hover:text-[#c9c6c5] transition-opacity" />
          <img
            alt="User avatar"
            className="w-8 h-8 rounded-full object-cover border"
            style={{ borderColor: COLORS.borderSubtle }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGcWhLojhYC9JwyWNy5Zx2evZLiK1UkoG2BK2ZvJeQGAIbpCZCpaKm0e-SrXH-LNMY2BJO93nTY7FCB3G5WzErpEyzDbomgGxr7tcPVtW0oUcbd9731kwDiLVyTPhZVAbkeehnSjkoSc2bUakaKHtc1ximPZNAjycHcqZH9DcJFUgz1w3qZ6EKomDl1qO08DsGeYpTTyG4Qn6xVgQab3VpV9184ogUvku6XV3jK9rCxuRlQJK0loZmNQ"
          />
        </div>
      </div>

      {/* Side nav bar (desktop) */}
      <aside
        className="hidden md:flex flex-col w-64 fixed inset-y-0 left-0 z-40 border-r"
        style={{ backgroundColor: COLORS.surfaceContainerLowest, borderColor: COLORS.borderSubtle }}
      >
        <div
          className="p-6 flex items-center gap-4 border-b"
          style={{ borderColor: COLORS.borderSubtle }}
        >
          <div
            className="w-10 h-10 rounded-full overflow-hidden border flex items-center justify-center shrink-0"
            style={{ backgroundColor: COLORS.surfaceContainerHigh, borderColor: COLORS.borderSubtle }}
          >
            <img
              alt="Kalam admin profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdJWbQvs2r-AHaf58SciaEUnoIXctI84peDgSi2yDzQTNneA4OZtfYScGWa_EQi7BQP8g-2luxbDYp6Gi1xYro1cPLtJ4UraQlwBhfv_Dls6ipRaes6Zkz4wU0nHQkQkRp5jZaYVjz7XHcm0Oe8nK8JZXnr5iBmNj4OIjSlI1hB0PHs2woZVfoWPelIyrTPxfozZ9Y8__fMqNGuCfHKIXv12DRISQAw-Y_ukm3zhgIXztDGNDodJFLwQ"
            />
          </div>
          <div className="overflow-hidden">
            <h1
              className="text-[24px] font-bold truncate"
              style={{ fontFamily: "Geist, sans-serif", color: COLORS.onSurface }}
            >
              Kalam
            </h1>
            <p
              className="text-[12px] tracking-[0.08em] font-semibold truncate"
              style={{ fontFamily: "Geist, sans-serif", color: COLORS.onSurfaceVariant }}
            >
              Technical Console
            </p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="flex flex-col space-y-1 px-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  aria-current={item.active ? "page" : undefined}
                  className={`flex items-center gap-4 px-4 py-2 transition-colors duration-200 ${
                    item.active ? "font-bold opacity-80" : ""
                  }`}
                  style={{
                    color: item.active ? COLORS.onSurface : COLORS.onPrimaryContainer,
                    backgroundColor: item.active ? COLORS.surfaceContainer : "transparent",
                    borderLeft: item.active ? `2px solid ${COLORS.primary}` : "2px solid transparent",
                  }}
                >
                  <MaterialIcon name={item.icon} filled={item.active} />
                  <span
                    className="text-[12px] tracking-[0.08em] font-semibold"
                    style={{ fontFamily: "Geist, sans-serif" }}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
            <li className="mt-12">
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-2 border border-transparent transition-colors duration-200"
                style={{ color: COLORS.dangerAccent }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#2a0a0a";
                  e.currentTarget.style.borderColor = COLORS.dangerAccent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }}
              >
                <MaterialIcon name="report" />
                <span
                  className="text-[12px] tracking-[0.08em] font-semibold"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  Danger Zone
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t" style={{ borderColor: COLORS.borderSubtle }}>
          <a
            href="#"
            className="flex items-center gap-4 px-4 py-2 transition-colors duration-200"
            style={{ color: COLORS.onPrimaryContainer }}
          >
            <MaterialIcon name="logout" />
            <span
              className="text-[12px] tracking-[0.08em] font-semibold"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              Logout
            </span>
          </a>
        </div>
      </aside>

      {/* Main content */}
      <main
        className="flex-1 min-h-0 md:ml-64 h-full overflow-y-auto pt-16 md:pt-0 box-border"
        style={{ backgroundColor: COLORS.surfaceLowest }}
      >
        {/* Top app bar (desktop) */}
        <div
          className="hidden md:flex justify-between items-center w-full px-6 py-2 sticky top-0 z-30 border-b"
          style={{ backgroundColor: COLORS.surface, borderColor: COLORS.borderSubtle }}
        >
          <div className="flex-1 flex items-center max-w-md relative">
            <MaterialIcon
              name="search"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[20px]"
            />
            <style>{`.kalam-search-icon{color:${COLORS.onSurfaceVariant}}`}</style>
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2 text-[14px] focus:ring-0 transition-colors"
              style={{
                backgroundColor: COLORS.surfaceContainerLowest,
                border: `1px solid ${COLORS.borderStrong}`,
                color: COLORS.onSurface,
              }}
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="p-2 transition-opacity" style={{ color: COLORS.onSurfaceVariant }}>
              <MaterialIcon name="settings" />
            </button>
            <button className="p-2 transition-opacity" style={{ color: COLORS.onSurfaceVariant }}>
              <MaterialIcon name="notifications" />
            </button>
          </div>
        </div>

        <div className="max-w-full p-4 md:p-6 lg:p-12 space-y-12" style={{backgroundColor: COLORS.background}}>
          {/* Header */}
          <header className="space-y-2">
            <h2 className="text-[32px] text-start leading-[1.2] tracking-[-0.02em] font-semibold" style={{ fontFamily: "Geist, sans-serif", color: COLORS.onSurface }}>
              Suggest an Improvement
            </h2>
            <p className="text-[16px] leading-[1.6] text-start max-w-2xl" style={{ color: COLORS.onSurfaceVariant }}>
              Help us enhance the Kalam Technical Console. Share your ideas, report friction points, or
              suggest new capabilities to improve the platform's efficiency and architecture.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Suggestion form */}
            <div className="lg:col-span-8 space-y-6">
              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-12 space-y-6 border"
                style={{ backgroundColor: COLORS.surfaceMid, borderColor: COLORS.borderSubtle }}
              >
                <div className="space-y-4">
                  <h3
                    className="text-[18px] leading-[1.4] font-semibold pb-2 border-b"
                    style={{ fontFamily: "Geist, sans-serif", color: COLORS.onSurface, borderColor: COLORS.borderSubtle }}
                  >
                    Submission Details
                  </h3>

                  {/* Category */}
                  <div className="space-y-2">
                    <label
                      htmlFor="category"
                      className="block text-[12px] tracking-[0.08em] font-semibold"
                      style={{ fontFamily: "Geist, sans-serif", color: COLORS.onSurface }}
                    >
                      Category
                    </label>
                    <div className="relative">
                      <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-3 text-[14px] appearance-none cursor-pointer transition-colors focus:ring-0"
                        style={{
                          backgroundColor: COLORS.surfaceContainerLowest,
                          border: `1px solid ${COLORS.borderStrong}`,
                          color: COLORS.onSurface,
                        }}
                      >
                        <option disabled value="">
                          Select a category...
                        </option>
                        {CATEGORIES.map((c) => (
                          <option key={c.value} value={c.value}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                      <MaterialIcon
                        name="expand_more"
                        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <label
                      htmlFor="title"
                      className="block text-[12px] tracking-[0.08em] font-semibold"
                      style={{ fontFamily: "Geist, sans-serif", color: COLORS.onSurface }}
                    >
                      Title
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Brief, descriptive title"
                      className="w-full px-4 py-3 text-[14px] transition-colors focus:ring-0"
                      style={{
                        backgroundColor: COLORS.surfaceContainerLowest,
                        border: `1px solid ${COLORS.borderStrong}`,
                        color: COLORS.onSurface,
                      }}
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label
                      htmlFor="description"
                      className="block text-[12px] tracking-[0.08em] font-semibold"
                      style={{ fontFamily: "Geist, sans-serif", color: COLORS.onSurface }}
                    >
                      Detailed Description & Impact
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={6}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe the improvement. What problem does it solve? What is the expected outcome or technical impact?"
                      className="w-full px-4 py-3 text-[14px] resize-y transition-colors focus:ring-0"
                      style={{
                        backgroundColor: COLORS.surfaceContainerLowest,
                        border: `1px solid ${COLORS.borderStrong}`,
                        color: COLORS.onSurface,
                      }}
                    />
                  </div>

                  {/* Attachments */}
                  <div className="space-y-2">
                    <label
                      className="block text-[12px] tracking-[0.08em] font-semibold"
                      style={{ fontFamily: "Geist, sans-serif", color: COLORS.onSurface }}
                    >
                      Attachments
                    </label>
                    <label
                      htmlFor="attachments"
                      className="w-full border-2 border-dashed p-6 flex flex-col items-center justify-center gap-4 transition-colors cursor-pointer group"
                      style={{ backgroundColor: COLORS.surfaceContainerLowest, borderColor: COLORS.borderStrong }}
                    >
                      <MaterialIcon name="cloud_upload" className="text-[32px]" />
                      <div className="text-center">
                        <p className="text-[14px]" style={{ color: COLORS.onSurface }}>
                          Drag and drop screenshots or{" "}
                          <span className="underline underline-offset-4" style={{ color: COLORS.primary }}>
                            browse files
                          </span>
                        </p>
                        <p className="text-[12px] mt-1" style={{ color: COLORS.onSurfaceVariant }}>
                          {fileName || "PNG, JPG up to 10MB"}
                        </p>
                      </div>
                      <input
                        type="file"
                        id="attachments"
                        name="attachments"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>

                  {/* Priority */}
                  <div className="space-y-2 pt-2">
                    <span
                      className="block text-[12px] tracking-[0.08em] font-semibold mb-2"
                      style={{ fontFamily: "Geist, sans-serif", color: COLORS.onSurface }}
                    >
                      Priority Level
                    </span>
                    <div className="flex flex-col sm:flex-row gap-4">
                      {PRIORITIES.map((p) => {
                        const checked = priority === p.value;
                        return (
                          <label key={p.value} className="flex items-center gap-2 cursor-pointer group">
                            <input
                              type="radio"
                              name="priority"
                              value={p.value}
                              checked={checked}
                              onChange={() => setPriority(p.value)}
                              className="sr-only peer"
                            />
                            <div
                              className="w-4 h-4 flex items-center justify-center transition-colors"
                              style={{
                                border: `1px solid ${COLORS.borderStrong}`,
                                backgroundColor: checked ? COLORS.onSurface : "transparent",
                              }}
                            >
                              {checked && (
                                <div className="w-2 h-2" style={{ backgroundColor: COLORS.surfaceLowest }} />
                              )}
                            </div>
                            <span
                              className="text-[14px]"
                              style={{ color: checked ? COLORS.onSurface : COLORS.onSurfaceVariant }}
                            >
                              {p.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-4 pt-6 border-t mt-12" style={{ borderColor: COLORS.borderSubtle }}>
                  <button
                    type="button"
                    className="px-6 py-2 text-[12px] tracking-[0.08em] font-semibold transition-colors"
                    style={{ fontFamily: "Geist, sans-serif", border: `1px solid ${COLORS.onSurface}`, color: COLORS.onSurface }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 text-[12px] tracking-[0.08em] font-semibold transition-opacity hover:opacity-90"
                    style={{ fontFamily: "Geist, sans-serif", backgroundColor: COLORS.onSurface, color: COLORS.surfaceLowest }}
                  >
                    Submit Suggestion
                  </button>
                </div>
              </form>
            </div>

            {/* My Suggestions history */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 border" style={{ backgroundColor: COLORS.surfaceContainer, borderColor: COLORS.borderSubtle }}>
                <div
                  className="flex items-center justify-between border-b pb-2 mb-4"
                  style={{ borderColor: COLORS.borderSubtle }}
                >
                  <h3 className="text-[18px] leading-[1.4] font-semibold" style={{ fontFamily: "Geist, sans-serif", color: COLORS.onSurface }}>
                    My Suggestions
                  </h3>
                  <MaterialIcon name="history" className="text-[20px]" />
                </div>

                <div className="space-y-4">
                  {MY_SUGGESTIONS.map((s) => (
                    <div
                      key={s.title}
                      className={`border p-4 transition-colors cursor-pointer ${s.dimmed ? "opacity-70" : ""}`}
                      style={{ backgroundColor: COLORS.background, borderColor: COLORS.borderSubtle }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span
                          className="text-[12px] tracking-[0.08em] font-semibold uppercase"
                          style={{ fontFamily: "Geist, sans-serif", color: COLORS.onSurfaceVariant }}
                        >
                          {s.category}
                        </span>
                        <span
                          className={`inline-block px-2 py-1 text-[11px] uppercase tracking-wider border ${STATUS_STYLES[s.status]}`}
                          style={{ fontFamily: "Geist, sans-serif" }}
                        >
                          {s.status}
                        </span>
                      </div>
                      <h4 className="text-[14px] font-semibold mb-1" style={{ color: COLORS.onSurface }}>
                        {s.title}
                      </h4>
                      <p className="text-[12px] line-clamp-2" style={{ color: COLORS.onSurfaceVariant }}>
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 mt-4 border-t text-center" style={{ borderColor: COLORS.borderSubtle }}>
                  <a
                    href="#"
                    className="text-[12px] tracking-[0.08em] font-semibold underline underline-offset-4 transition-colors"
                    style={{ fontFamily: "Geist, sans-serif", color: COLORS.onSurfaceVariant, textDecorationColor: COLORS.borderStrong }}
                  >
                    View All History
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}