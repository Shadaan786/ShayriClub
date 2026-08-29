import React, { useEffect, useState } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { Field, Row, SectionHeader, SaveButton } from "./SettingsPrimitives";
import { colors } from "./theme";

export default function AccountSection() {
  const [user, setUser] = useState("");

  const fetchUserDetails = () => {
    axiosInstance
      .get("/api/userId", { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

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
        <Field label="Full Name" defaultValue={user.name} />
        <Field label="Email Address" type="email" defaultValue={user.email} />
      </div>
      <div className="mb-6">
        <label
          className="block text-xs font-semibold tracking-wider mb-2"
          style={{ color: colors.onSurface }}
        >
          Profile Picture
        </label>
        <div className="flex items-center gap-6">
          <div
            className="w-16 h-16 flex items-center justify-center overflow-hidden shrink-0"
            style={{ backgroundColor: colors.surfaceHigh, border: `1px solid ${colors.borderSubtle}` }}
          >
            <img className="h-full" src={user.profilePic} alt="" />
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

      </div>
      <SaveButton onClick={handleSaveAccount} />
    </div>
  );
}