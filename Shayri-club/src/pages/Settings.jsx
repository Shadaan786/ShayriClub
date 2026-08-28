import React, { useEffect, useRef, useState } from "react";
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
import { Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "@/Apis/axiosInstance";
import { not } from "firebase/firestore/lite/pipelines";

// ---- Design tokens (ported from the original Tailwind config) ----
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

export default function SystemSettings() {
  const [activeSection, setActiveSection] = useState("account");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // ---- Small shared primitives ----

  function Field({ label, type = "text", defaultValue }) {
    return (
      <div className="space-y-2">
        <label
          className="block text-xs font-semibold tracking-wider"
          style={{ color: colors.onSurface }}
        >
          {label}
        </label>
        <input
          type={type}
          defaultValue={defaultValue}
          disabled= {true}
          className="w-full px-4 py-2 text-sm focus:outline-none transition-colors"
          style={{
            backgroundColor: colors.surfaceMid,
            border: `1px solid ${colors.borderStrong}`,
            color: colors.onSurface,
          }}
          onFocus={(e) => (e.target.style.borderColor = colors.onSurface)}
          onBlur={(e) => (e.target.style.borderColor = colors.borderStrong)}
        />
      </div>
    );
  }

  function Row({ title, description, actionLabel, onAction }) {
    return (
      <div
        className="flex justify-between items-center py-3"
        style={{ borderBottom: `1px solid ${colors.borderSubtle}` }}
      >
        <div>
          <p className="text-sm font-semibold" style={{ color: colors.onSurface }}>
            {title}
          </p>
          <p className="text-xs mt-0.5" style={{ color: colors.onSurfaceVariant }}>
            {description}
          </p>
        </div>
        <button
          onClick={onAction}
          className="px-4 py-2 text-xs font-semibold tracking-wide transition-colors shrink-0"
          style={{
            backgroundColor: colors.surfaceMid,
            border: `1px solid ${colors.onSurface}`,
            color: colors.onSurface,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.surfaceHigh)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.surfaceMid)}
        >
          {actionLabel}
        </button>
      </div>
    );
  }

  function LinkRow({ title, external, link, link2}) {
const navigate = useNavigate();

return (
  <button
    type="button"
    onClick={() => navigate(external ? link : link2)}
    className="w-full text-left appearance-none bg-transparent border-0 p-0 m-0 block"
  >
    <div
      className="flex justify-between items-center py-3 px-2 -mx-2 cursor-pointer transition-colors"
      style={{ borderBottom: `1px solid ${colors.borderSubtle}` }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.surfaceHigh)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
    >
      <p className="text-sm" style={{ color: colors.onSurface }}>
        {title}
      </p>

      {external ? (
        <ExternalLink size={18} style={{ color: colors.onSurfaceVariant }} />
      ) : (
        <ChevronRight size={18} style={{ color: colors.onSurfaceVariant }} />
      )}
    </div>
  </button>
);
  }

  // NOTE: Toggle used to be declared *inside* NotificationsSection. That meant every
  // click (which updates state and re-renders NotificationsSection) redefined Toggle
  // as a brand new function/component type, so React unmounted + remounted every
  // switch on each click, snapping `checked` back to `defaultChecked` instead of
  // visually toggling. Moving it up here (declared once per SystemSettings render,
  // not once per NotificationsSection re-render) keeps its identity stable across
  // toggle clicks so the visual state persists. Logic is unchanged — the add/delete
  // Set update now happens via the onToggle callback instead of a closure, but it
  // does exactly the same thing.
  function Toggle({ label, defaultChecked, notifications_allowed, onToggle }) {
    const [checked, setChecked] = useState(defaultChecked);

    console.log("see checked", defaultChecked)

    console.log("Seeeee", notifications_allowed)
    console.log("see label", label)

    return (
      <div
        className="flex justify-between items-center py-3"
        style={{ borderBottom: `1px solid ${colors.borderSubtle}` }}
      >
        <p className="text-sm" style={{ color: colors.onSurface }}>
          {label}
        </p>
        <button
          role="switch"
          aria-checked={checked}
          onClick={() => {
            setChecked((currentValue) => !currentValue);
            onToggle(label);
          }}
          className="w-10 h-6 flex items-center px-0.5 transition-colors"
          style={{
            backgroundColor: checked ? colors.primary : colors.surfaceContainerHighest,
          }}
        >
          <span
            className="w-5 h-5 transition-transform"
            style={{
              backgroundColor: checked ? colors.surfaceLow : colors.onSurfaceVariant,
              transform: checked ? "translateX(16px)" : "translateX(0px)",
            }}
          />
        </button>
      </div>
    );
  }

  function SectionHeader({ title, description }) {
    return (
      <div className="mb-6 pb-2" style={{ borderBottom: `1px solid ${colors.borderSubtle}` }}>
        <h3 className="text-2xl text-start font-semibold" style={{ color: colors.onSurface, fontFamily: "Geist, sans-serif" }}>
          {title}
        </h3>
        <p className="text-xs text-start mt-1" style={{ color: colors.onSurfaceVariant }}>
          {description}
        </p>
      </div>
    );
  }

  function SaveButton({ onClick, disabled }) {
    return (
      <div className="flex justify-end pt-8">
        <button
          className="px-8 py-2 text-xs font-semibold tracking-wide transition-opacity"
          style={{ backgroundColor: colors.onSurface, color: colors.surface }}
          onClick={onClick}
          disabled={disabled}
        >
          Save Changes
        </button>
      </div>
    );
  }

  // ---- Section pages ----

  function AccountSection() {

    const [user, setUser] = useState("");

    const fetchUserDetails = ()=>{
      axiosInstance
      .get('/api/userId',{
        withCredentials: true
      }).then((response)=>{
        setUser(response.data);
      })

    }

    useEffect(()=>{

      fetchUserDetails();
    }, [])

    const handleSaveAccount = () => {
      // No editable account fields yet (Full Name / Email are disabled) —
      // hook this up once those fields become editable.
    };

    return (
      <div>
        <SectionHeader
          title="Account Settings"
          description="Manage your personal information and preferences."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Field label="Full Name" defaultValue= {user.name} />
          <Field label="Email Address" type="email" defaultValue={user.email} />
        </div>
        <div className="mb-6">
          <label className="block text-xs font-semibold tracking-wider mb-2" style={{ color: colors.onSurface }}>
            Profile Picture
          </label>
          <div className="flex items-center gap-6">
            <div
              className="w-16 h-16 flex items-center justify-center overflow-hidden shrink-0"
              style={{ backgroundColor: colors.surfaceHigh, border: `1px solid ${colors.borderSubtle}` }}
            >
              {/* <UserCog size={28} style={{ color: colors.onSurfaceVariant }} /> */}
              <img className="h-full" src={user.profilePic} alt="" srcset="" />
            </div>
            <button
              className="px-4 py-2 text-xs font-semibold tracking-wide transition-colors"
              style={{ backgroundColor: colors.surfaceMid, border: `1px solid ${colors.onSurface}`, color: colors.onSurface }}
            >
              Change Avatar
            </button>
            <button className="text-xs font-semibold underline" style={{ color: colors.onSurfaceVariant }}>
              Remove
            </button>
          </div>
        </div>
        <div className="space-y-1 mt-6">
          <Row title="Password" description="Update your current password." actionLabel="Change" />
          <Row title="Active Session" description="Log out of this device." actionLabel="Log out" />
          <Row title="Account Switching" description="Log into another account." actionLabel="Switch Account" />
        </div>
        <SaveButton onClick={handleSaveAccount} />
      </div>
    );
  }

  function NotificationsSection() {
    const [notifications_allowed, setNotifications_allowed] = useState(new Set()); 
    const [userNotifications, setUserNotifications] = useState(null);
    console.log("See naa", notifications_allowed.current)

    const handleSaveNotifications = () => {
      console.log("Saving notification changes for:", notifications_allowed);
      axiosInstance
      .post('/api/allowNotifications',{
        notifications: Array.from(notifications_allowed)
      })
    };

    const fetchUserNotifications=()=>{
      axiosInstance
      .get('/api/userId',{
        withCredentials: true
      }).then((response)=>{
        setUserNotifications(response.data);
      }).catch((error)=>{
        console.error("Error while fetching user allowed notifications", error);
      })
    }

    // Same add/delete-from-Set behavior as before, just exposed as a stable
    // callback so it can be passed down to the now-hoisted Toggle component.
    const handleToggle = (label) => {
      setNotifications_allowed((prev) => {
        const updatedSet = new Set(prev);
        if (updatedSet.has(label)) {
          updatedSet.delete(label);
        } else {
          updatedSet.add(label);
        }
        return updatedSet;
      });
    };

    useEffect(()=>{
      fetchUserNotifications();
    },[])

    if(!userNotifications){
      return(
        <>
        <h1 className="text-9xl">Loading.....</h1>
        </>
      )
    }

    return (
      <div>
        <SectionHeader title="Notifications" description="Manage how you receive alerts and updates." />
        <div className="space-y-8">
          <div>
            <h4 className="text-lg text-start font-semibold mb-2" style={{ color: colors.onSurface }}>
              Push Notifications
            </h4>
            <div>
              <Toggle label="likeNotifications" defaultChecked={(userNotifications.likeNotifications)?true:false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
              <Toggle label="commentNotification" defaultChecked={(userNotifications.commentNotification)?true:false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
              <Toggle label="newFollowerNotification" defaultChecked={(userNotifications.newFollowerNotification)?true: false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
              <Toggle label="kalamOfTheWeekNotification" defaultChecked={(userNotifications.kalamOfTheWeekNotification)?true:false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
              <Toggle label="kalamUploadNotification" defaultChecked={(userNotifications.kalamUploadNotification)?true:false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
            </div>
          </div>
          <div>
            <h4 className="text-lg text-start font-semibold mb-2" style={{ color: colors.onSurface }}>
              Email Notifications
            </h4>
            <div>
              <Toggle label="securityAlertEmailNotification" defaultChecked={(userNotifications.securityAlertEmailNotification)?true:false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
              <Toggle label="weeklyDigestEmailNotification" defaultChecked={(userNotifications.weeklyDigestEmailNotification)?true:false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
              <Toggle label="productAnouncementsEmailNotification" defaultChecked={(userNotifications.productAnouncementsEmailNotification)?true:false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
            </div>
          </div>
        </div>
        
        <SaveButton disabled={(notifications_allowed.size ===0)? true: false} onClick={handleSaveNotifications} />
      </div>
    );
  }

  function PrivacySection() {
    const Navigate = useNavigate();
    const handleSavePrivacy = () => {
      // TODO: persist privacy preference changes
    };

    return (
      <div>
        <SectionHeader title="Privacy" description="Control your data and visibility." />
        <div className="space-y-1">
          <Row onAction={()=>Navigate('/export')} title="Data Export" description="Request a copy of your personal data." actionLabel="Request my data" />
          <Row onAction={()=>Navigate('/blockedusers')} title="Blocked Users" description="Manage accounts you have blocked." actionLabel="Manage" />
        </div>
        <SaveButton onClick={handleSavePrivacy} />
      </div>
    );
  }

  function SecuritySection() {
    const handleSaveSecurity = () => {
      // TODO: persist security setting changes
    };

    return (
      <div>
        <SectionHeader title="Security" description="Protect your account and manage active sessions." />
        <div className="space-y-1">
          <Row title="Global Sign Out" description="Log out of all active sessions across all devices." actionLabel="Log out" />
          <Row title="Authentication" description="Log into another account to manage security." actionLabel="Log into another account" />
        </div>
        <SaveButton onClick={handleSaveSecurity} />
      </div>
    );
  }

  function SupportSection() {
    const handleSaveSupport = () => {
      // TODO: persist support preference changes
    };

    return (
      <div>
        <SectionHeader title="Support & Feedback" description="Get help and share your thoughts with us." />
        <div>
          <LinkRow title="Help & Support" />
          <LinkRow link2={"/reportproblem"} title="Report a Problem" />
          <LinkRow link2={'/suggestimprovement'} title="Suggest an Improvement" />
          <LinkRow title="Report Content" />
        </div>
        <SaveButton onClick={handleSaveSupport} />
      </div>
    );
  }

  function LegalSection() {
    const Navigate = useNavigate()

    const handleSaveLegal = () => {
      // TODO: persist legal preference changes, if any become editable
    };

    return (
      <div>
        <SectionHeader title="Legal" description="Review our policies and guidelines." />
        <div>
          <LinkRow title="Copyright & IP" external />
          <LinkRow title="Community Guidelines" external link={"/communityguidelines"} />
          <LinkRow title="Privacy Policy" external />
          <LinkRow title="Terms of Service" external link={"/termsofservices"} />
        </div>
        <SaveButton onClick={handleSaveLegal} />
      </div>
    );
  }

  function DangerSection() {
    return (
      <div>
        <SectionHeader title="Danger Zone" description="Irreversible actions related to your account and data." />
        <div
          className="p-6"
          style={{ border: `1px solid ${colors.dangerAccent}`, backgroundColor: colors.dangerContainer }}
        >
          <div className="mb-4">
            <h3
              className="text-lg font-semibold flex items-center gap-2"
              style={{ color: colors.dangerAccent }}
            >
              <AlertTriangle size={20} />
              Danger Zone
            </h3>
            <p className="text-xs mt-2" style={{ color: colors.onSurface }}>
              Irreversible actions related to your account and data.
            </p>
          </div>
          <div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4"
            style={{ borderTop: `1px solid ${colors.dangerAccent}4d` }}
          >
            <div>
              <p className="text-sm font-semibold" style={{ color: colors.onSurface }}>
                Delete Account
              </p>
              <p className="text-xs" style={{ color: colors.onSurfaceVariant }}>
                Permanently remove your account and all associated data.
              </p>
            </div>
            <button
              className="px-6 py-2 text-xs font-semibold tracking-wide whitespace-nowrap transition-opacity"
              style={{ backgroundColor: colors.dangerAccent, color: colors.surface }}
            >
              Delete my account
            </button>
          </div>
        </div>
      </div>
    );
  }

  const SECTION_COMPONENTS = {
    account: AccountSection,
    notifications: NotificationsSection,
    privacy: PrivacySection,
    security: SecuritySection,
    support: SupportSection,
    legal: LegalSection,
    danger: DangerSection,
  };

  const ActiveComponent = SECTION_COMPONENTS[activeSection];
  const activeMeta = NAV_ITEMS.find((n) => n.id === activeSection);

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
            <h2 className="text-lg font-bold" style={{ fontFamily: "Geist, sans-serif" }}>
              {activeMeta?.label}
            </h2>
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
            <ActiveComponent />
          </div>
        </div>
      </main>
    </div>
  );
}