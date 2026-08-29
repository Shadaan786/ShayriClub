import React, { useState } from "react";
import {
  HelpCircle,
  Search,
  Settings2,
  RefreshCw,
  FileText,
  Menu,
} from "lucide-react";
import { NavLink, Routes, Route, Navigate, useParams } from "react-router-dom";
import { colors } from "./theme";
import { NAV_ITEMS } from "./navitems";
import AccountSection from "./AccountSection";
import NotificationsSection from "./NotificationSection";
import PrivacySection from "./PrivacySection";
import SecuritySection from "./SecuritySection";
import SupportSection from "./SupportSection";
import LegalSection from "./LegalSection";
import DangerSection from "./DangerSection";

// Mount this component under a wildcard route in your main router, e.g.:
//   <Route path="/settings/*" element={<SystemSettings />} />
// Each sidebar item then navigates to /settings/<id> (NavLink), the matching
// section renders in the content area, and refresh/deep-links land on the
// right section too — no more in-memory `activeSection` state.
//
// If you mount SystemSettings at a different base path, update this constant
// to match (nav links are absolute so they work correctly regardless of
// which section you're currently on).
const SETTINGS_BASE = "/settings";

function SectionTitle() {
  const { section } = useParams();
  const activeMeta = NAV_ITEMS.find((n) => n.id === section) || NAV_ITEMS[0];
  return (
    <h2 className="text-lg font-bold" style={{ fontFamily: "Geist, sans-serif" }}>
      {activeMeta.label}
    </h2>
  );
}

export default function SystemSettings() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const NavList = ({ onNavigate }) => (
    <nav className="flex-1 overflow-y-auto px-4 space-y-1">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.id}
            to={`${SETTINGS_BASE}/${item.id}`}
            end
            onClick={() => onNavigate && onNavigate()}
            className="w-full flex items-center gap-4 py-3 px-4 text-left transition-colors"
            style={({ isActive }) => ({
              color: item.danger ? colors.dangerAccent : isActive ? colors.onSurface : colors.onSurfaceVariant,
              backgroundColor: isActive ? colors.surfaceContainerHigh : "transparent",
              borderLeft: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
              fontWeight: isActive ? 700 : 400,
            })}
          >
            <Icon size={20} />
            <span className="text-xs font-semibold tracking-wider">{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );

  return (
    <div
      className="flex h-screen w-full overflow-hidden"
      style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}
    >
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
            <SectionTitle />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search
                size={18}
                className="absolute left-2 top-1/2 -translate-y-1/2"
                style={{ color: colors.onSurfaceVariant }}
              />
              <input
                placeholder="Search settings..."
                className="w-64 py-2 pl-9 pr-3 text-xs focus:outline-none transition-colors"
                style={{
                  backgroundColor: colors.surfaceMid,
                  border: `1px solid ${colors.borderStrong}`,
                  color: colors.onSurface,
                }}
              />
            </div>
            <button style={{ color: colors.onSurfaceVariant }}>
              <Settings2 size={20} />
            </button>
            <button style={{ color: colors.onSurfaceVariant }}>
              <RefreshCw size={20} />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-12">
          <div className="max-w-[800px] mx-auto pb-12">
            <Routes>
              <Route index element={<Navigate to="account" replace />} />
              <Route path="account" element={<AccountSection />} />
              <Route path="notifications" element={<NotificationsSection />} />
              <Route path="privacy" element={<PrivacySection />} />
              <Route path="security" element={<SecuritySection />} />
              <Route path="support" element={<SupportSection />} />
              <Route path="legal" element={<LegalSection />} />
              <Route path="danger" element={<DangerSection />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
}