import React from "react";
import { LinkRow, SectionHeader, SaveButton } from "./SettingsPrimitives";

export default function LegalSection() {
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