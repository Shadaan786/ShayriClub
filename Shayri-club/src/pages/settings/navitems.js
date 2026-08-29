import { UserCog, Bell, Lock, Shield, HelpCircle, Gavel, AlertTriangle } from "lucide-react";

// `id` doubles as the route segment under /settings/:section
// (e.g. clicking "Notifications" navigates to /settings/notifications).
export const NAV_ITEMS = [
  { id: "account", label: "Account", icon: UserCog },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "privacy", label: "Privacy", icon: Lock },
  { id: "security", label: "Security", icon: Shield },
  { id: "support", label: "Support & Feedback", icon: HelpCircle },
  { id: "legal", label: "Legal", icon: Gavel },
  { id: "danger", label: "Danger Zone", icon: AlertTriangle, danger: true },
];