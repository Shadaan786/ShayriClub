import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, SectionHeader, SaveButton } from "./SettingsPrimitives";

export default function PrivacySection() {
  const navigate = useNavigate();

  const handleSavePrivacy = () => {
    // TODO: persist privacy preference changes
  };

  return (
    <div>
      <SectionHeader title="Privacy" description="Control your data and visibility." />
      <div className="space-y-1">
        <Row onAction={() => navigate("export")} title="Data Export" description="Request a copy of your personal data." actionLabel="Request my data" />
        <Row onAction={() => navigate("blockedusers")} title="Blocked Users" description="Manage accounts you have blocked." actionLabel="Manage" />
      </div>
      <SaveButton onClick={handleSavePrivacy} />
    </div>
  );
}