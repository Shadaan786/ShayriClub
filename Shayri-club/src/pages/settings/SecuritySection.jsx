import React from "react";
import { Row, SectionHeader, SaveButton } from "./SettingsPrimitives";
import axiosInstance from "@/Apis/axiosInstance";

export default function SecuritySection() {
  const handleSaveSecurity = () => {
    // TODO: persist security setting changes
  };

  const logoutUser = ()=>{
    axiosInstance
    .get('/api/logout',{
        withCredentials: true
    }).then((response)=>{
        console.log("User logged out successfully!")
    }).catch
    ((error)=>{
        console.error("Error while signing out user", error)
    })
  }

  return (
    <div>
      <SectionHeader title="Security" description="Protect your account and manage active sessions." />
      <div className="space-y-1">
        <Row onAction={()=>logoutUser()} title="Global Sign Out" description="Log out of all active sessions across all devices." actionLabel="Log out" />
        <Row title="Authentication" description="Log into another account to manage security." actionLabel="Log into another account" />
        <Row title="Password" description="Update your current password." actionLabel="Change" />
        <Row title="Active Session" description="Log out of this device." actionLabel="Log out" />
        <Row title="Account Switching" description="Log into another account." actionLabel="Switch Account" />
      </div>
      <SaveButton onClick={handleSaveSecurity} />
    </div>
  );
}