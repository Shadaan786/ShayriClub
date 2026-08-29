import React from "react";
import { AlertTriangle } from "lucide-react";
import { SectionHeader } from "./SettingsPrimitives";
import { colors } from "./theme";

export default function DangerSection() {
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