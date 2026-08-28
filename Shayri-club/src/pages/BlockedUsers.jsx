import React, { useState } from "react";
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
 * Blocked Users - Admin Console
 *
 * Converted from static HTML to a React component.
 *
 * Notes:
 * - This assumes Tailwind CSS is already set up in your project. Since the
 *   original file relied on a custom tailwind.config.js (theme.extend with
 *   custom color names like "on-surface", spacing like "md"/"lg", and
 *   fontSize/fontFamily scales), those custom tokens have been inlined here
 *   using Tailwind's arbitrary-value syntax (e.g. bg-[#141313]) so the
 *   component renders correctly with zero config changes. If you'd rather
 *   keep using semantic class names (bg-background, p-md, font-headline-md,
 *   etc.), copy the `theme.extend` object from the original <script
 *   id="tailwind-config"> block into your real tailwind.config.js and swap
 *   the arbitrary-value classes back to the semantic ones.
 * - Add these to your document <head> (e.g. index.html) for the icons/fonts:
 *     <link rel="stylesheet"
 *       href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
 *     <link rel="stylesheet"
 *       href="https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700&family=Inter:wght@400;500&display=swap" />
 */

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

const INITIAL_BLOCKED_USERS = [
  {
    id: 1,
    username: "@cryptoknight",
    blockedOn: "Oct 12, 2023",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjjsxL7e6vyQK5QAv7sEmQAIt78B0gZvVj-gWBhj0e0mRErj0LWYRufdUGR4MltRXVm6_I3uK-FHWO6gYmMOsBoA495EfZvfaNyDquVqj8LYhoN5v3lpLS5BdEswcBdfx1E4JI84MUmrXDUZrYof0Xoy7JWFZPxBBR_HJYAbzI6ed8vmMm89U0TdqpofwPQz2k_y7xVZkzdd0yw_KIwGu1AOMp4xtsV28hPO1tdjnvkM3LmMwotiaLww",
    alt: "A minimalist, monochromatic, glitch-art inspired profile avatar.",
  },
  {
    id: 2,
    username: "@anon_trader_99",
    blockedOn: "Sep 04, 2023",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMpzsNmSS80Uk70-dAcYST8vvHlTcW5pI5MxDTCXumqBnJ0T4pbP6gEMmchTvN-jof2VmeFD86DrZRtHJ9WqD4Q0Wx-_44_Y8Ql-O3a6iVi0oPnncD1zhLHT_6UBJ0fehePOSmqKuu8cqm0p47uV-XCCQI3QzrOkMZJZk2-9KlBS7bDQM0Y0C3LTU6yDjuNx9BuxuGuMRWADb-0-lMklayvJsqnL73FaJOhE6Ul4s5hGfdvy34eK9QOQ",
    alt: "A stark, high-contrast black and white digital avatar showing a fractured wireframe skull.",
  },
  {
    id: 3,
    username: "[Deleted User]",
    blockedOn: "Jan 22, 2023",
    avatarUrl: null,
  },
];

function SideNavBar() {

    const [activeSection, setActiveSection] = useState("privacy");
  
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
  );
}

function TopAppBar() {
  return (
    <header className="flex justify-between items-center w-full px-[24px] py-[16px] h-16 border-b border-[#262626] bg-[#141313] shrink-0 z-10">
      <div className="flex items-center gap-[16px]">
        <button className="md:hidden text-[#c4c7c7] hover:text-[#c9c6c5] transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h2 className="font-['Geist'] text-[24px] leading-[1.3] tracking-[-0.01em] font-black text-[#e5e2e1] md:hidden">
          Settings Console
        </h2>

        <div className="hidden md:flex items-center gap-[8px] font-['Inter'] text-[12px] leading-[1.5] text-[#c4c7c7]">
          <span>Privacy</span>
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
          <span className="text-[#e5e2e1] font-medium">Blocked Users </span>
        </div>
      </div>

      <div className="flex items-center gap-[24px]">
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-[8px] top-1/2 -translate-y-1/2 text-[#c4c7c7]">
            search
          </span>
          <input
            type="text"
            placeholder="Search settings..."
            className="w-64 bg-[#121212] border border-[#404040] text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1.5] py-[8px] pl-[48px] pr-[8px] focus:outline-none focus:border-[#e5e2e1] transition-colors rounded-none placeholder:text-[#c4c7c7]"
          />
        </div>

        <div className="flex items-center gap-[16px] text-[#c4c7c7]">
          <button className="hover:text-[#c9c6c5] transition-colors duration-200">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
          <button className="hover:text-[#c9c6c5] transition-colors duration-200">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button className="hover:text-[#c9c6c5] transition-colors duration-200 ml-[8px] border-l border-[#262626] pl-[16px]">
            <span className="material-symbols-outlined">logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function BlockedUserRow({ user, onUnblock }) {
  return (
    <div className="flex items-center justify-between p-[16px] md:p-[24px] bg-[#121212] border border-[#262626] hover:bg-[#1e1e1e] transition-colors duration-200 group">
      <div className="flex items-center gap-[24px]">
        <div className="w-12 h-12 border border-[#404040] bg-[#121212] shrink-0 overflow-hidden relative flex items-center justify-center">
          {user.avatarUrl ? (
            <img
              className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 transition-opacity"
              src={user.avatarUrl}
              alt={user.alt}
            />
          ) : (
            <span className="material-symbols-outlined text-[#c4c7c7] text-[24px]">
              person_off
            </span>
          )}
          <div className="absolute inset-0 bg-[#ff4d4d]/10" />
        </div>

        <div>
          <h3 className="font-['Geist'] text-[18px] leading-[1.4] font-semibold text-[#e5e2e1] flex items-center gap-[8px]">
            {user.username}
            <span className="font-['Geist'] text-[12px] leading-none tracking-[0.08em] font-semibold bg-[#2b2a2a] text-[#c4c7c7] px-[8px] py-[4px] uppercase">
              Blocked
            </span>
          </h3>
          <p className="font-['Inter'] text-[12px] leading-[1.5] text-[#c4c7c7] mt-[4px]">
            Blocked on {user.blockedOn}
          </p>
        </div>
      </div>

      <button
        onClick={() => onUnblock(user.id)}
        className="font-['Geist'] text-[12px] leading-none tracking-[0.08em] font-semibold px-[16px] py-[8px] border border-[#404040] text-[#e5e2e1] hover:bg-[#2a2a2a] hover:border-[#e5e2e1] transition-all uppercase"
      >
        Unblock
      </button>
    </div>
  );
}

export default function BlockedUsersPage() {
  const [blockedUsers, setBlockedUsers] = useState(INITIAL_BLOCKED_USERS);
  const [query, setQuery] = useState("");
    const [activeSection, setActiveSection] = useState("account");

  const handleUnblock = (id) => {
    setBlockedUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const filteredUsers = blockedUsers.filter((u) =>
    u.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="dark flex h-screen overflow-hidden bg-[#141313] font-['Inter'] text-[14px] leading-[1.5] text-[#e5e2e1]">
      <SideNavBar />

      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#141313]">
        <TopAppBar />

        <div className="flex-1 overflow-y-auto p-[16px] md:p-[24px]">
          <div className="max-w-[1200px] mx-auto space-y-[48px]">
            {/* Page Header */}
            <section className="border-b border-[#262626] pb-[24px]">
              <h1 className="text-start text-[48px] leading-[1.1] tracking-[-0.04em] font-bold text-[#e5e2e1] mb-[8px]" style={{fontFamily: "Geist, sans-serif"}}>
                Blocked Users
              </h1>
              <p className="font-['Inter'] text-[16px] leading-[1.6] text-start text-[#c4c7c7] max-w-2xl">
                Manage accounts you have blocked. Blocked users cannot
                message you or view your profile.
              </p>
            </section>

            {/* Action Bar */}
            <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[16px]">
              <div className="relative w-full sm:w-96">
                <span className="material-symbols-outlined absolute left-[16px] top-1/2 -translate-y-1/2 text-[#c4c7c7]">
                  person_search
                </span>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search blocked users by username..."
                  className="w-full bg-[#121212] border border-[#404040] text-[#e5e2e1] font-['Inter'] text-[14px] leading-[1.5] py-[16px] pl-[48px] pr-[16px] focus:outline-none focus:border-[#e5e2e1] transition-colors rounded-none placeholder:text-[#c4c7c7]"
                />
              </div>

              <div className="font-['Geist'] text-[13px] leading-[1.6] text-[#c4c7c7] bg-[#121212] px-[16px] py-[8px] border border-[#262626]">
                Total Blocked:{" "}
                <span className="text-[#e5e2e1] font-medium">
                  {blockedUsers.length}
                </span>
              </div>
            </section>

            {/* Data List */}
            <section className="space-y-[8px]">
              {filteredUsers.map((user) => (
                <BlockedUserRow
                  key={user.id}
                  user={user}
                  onUnblock={handleUnblock}
                />
              ))}
              {filteredUsers.length === 0 && (
                <p className="font-['Inter'] text-[14px] text-[#c4c7c7] py-[24px] text-center">
                  No blocked users match your search.
                </p>
              )}
            </section>

            {/* Informational Note */}
            <div className="flex items-start gap-[8px] p-[16px] bg-[#0e0e0e] border-l-2 border-[#444748]">
              <span className="material-symbols-outlined text-[#444748] text-[20px] mt-[4px]">
                info
              </span>
              <p className="font-['Inter'] text-[12px] leading-[1.5] text-[#c4c7c7]">
                Unblocking a user will immediately restore their ability to
                interact with your public profile and send direct messages.
                It may take up to 5 minutes for caching to update globally.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}