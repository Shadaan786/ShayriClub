import React, { useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { colors } from "./theme";

export function Field({ label, type = "text", defaultValue }) {
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
        disabled={true}
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

export function Row({ title, description, actionLabel, onAction }) {
  return (
    <div
      className="flex justify-between items-center py-3"
      style={{ borderBottom: `1px solid ${colors.borderSubtle}` }}
    >
      <div>
        <p className="text-sm text-start font-semibold" style={{ color: colors.onSurface }}>
          {title}
        </p>
        <p className="text-xs mt-0.5 text-start" style={{ color: colors.onSurfaceVariant }}>
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

export function LinkRow({ title, external, link, link2 }) {
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

// Declared once at module scope (not inside a section component) so its
// component identity stays stable across re-renders. If it were redefined
// inside NotificationsSection on every render, React would unmount/remount
// it on each click and `checked` would snap back to `defaultChecked` instead
// of visually toggling.
export function Toggle({ label, defaultChecked, notifications_allowed, onToggle }) {
  const [checked, setChecked] = useState(defaultChecked);

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

export function SectionHeader({ title, description }) {
  return (
    <div className="mb-6 pb-2" style={{ borderBottom: `1px solid ${colors.borderSubtle}` }}>
      <h3
        className="text-2xl text-start font-semibold"
        style={{ color: colors.onSurface, fontFamily: "Geist, sans-serif" }}
      >
        {title}
      </h3>
      <p className="text-xs text-start mt-1" style={{ color: colors.onSurfaceVariant }}>
        {description}
      </p>
    </div>
  );
}

export function SaveButton({ onClick, disabled }) {
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