import React from "react";
import { LinkRow, SectionHeader, SaveButton } from "./SettingsPrimitives";

export default function SupportSection() {
  const handleSaveSupport = () => {
    // TODO: persist support preference changes
  };

  return (
    <div>
      <SectionHeader title="Support & Feedback" description="Get help and share your thoughts with us." />
      <div>
        <LinkRow title="Help & Support" />
        <LinkRow link2={"reportproblem"} title="Report a Problem" />
        <LinkRow link2={"suggestimprovement"} title="Suggest an Improvement" />
        <LinkRow title="Report Content" />
      </div>
      <SaveButton onClick={handleSaveSupport} />
    </div>
  );
}