import React, { useEffect, useState } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { Toggle, SectionHeader, SaveButton } from "./SettingsPrimitives";
import { colors } from "./theme";

export default function NotificationsSection() {
  const [notifications_allowed, setNotifications_allowed] = useState(new Set());
  const [userNotifications, setUserNotifications] = useState(null);

  const handleSaveNotifications = () => {
    axiosInstance.post("/api/allowNotifications", {
      notifications: Array.from(notifications_allowed),
    });
  };

  const fetchUserNotifications = () => {
    axiosInstance
      .get("/api/userId", { withCredentials: true })
      .then((response) => {
        setUserNotifications(response.data);
      })
      .catch((error) => {
        console.error("Error while fetching user allowed notifications", error);
      });
  };

  // Same add/delete-from-Set behavior as before, exposed as a stable
  // callback so it can be passed down to the module-level Toggle component.
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

  useEffect(() => {
    fetchUserNotifications();
  }, []);

  if (!userNotifications) {
    return (
      <>
        <h1 className="text-9xl">Loading.....</h1>
      </>
    );
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
            <Toggle label="likeNotifications" defaultChecked={userNotifications.likeNotifications ? true : false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
            <Toggle label="commentNotification" defaultChecked={userNotifications.commentNotification ? true : false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
            <Toggle label="newFollowerNotification" defaultChecked={userNotifications.newFollowerNotification ? true : false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
            <Toggle label="kalamOfTheWeekNotification" defaultChecked={userNotifications.kalamOfTheWeekNotification ? true : false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
            <Toggle label="kalamUploadNotification" defaultChecked={userNotifications.kalamUploadNotification ? true : false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
          </div>
        </div>
        <div>
          <h4 className="text-lg text-start font-semibold mb-2" style={{ color: colors.onSurface }}>
            Email Notifications
          </h4>
          <div>
            <Toggle label="securityAlertEmailNotification" defaultChecked={userNotifications.securityAlertEmailNotification ? true : false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
            <Toggle label="weeklyDigestEmailNotification" defaultChecked={userNotifications.weeklyDigestEmailNotification ? true : false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
            <Toggle label="productAnouncementsEmailNotification" defaultChecked={userNotifications.productAnouncementsEmailNotification ? true : false} notifications_allowed={notifications_allowed} onToggle={handleToggle} />
          </div>
        </div>
      </div>

      <SaveButton disabled={notifications_allowed.size === 0 ? true : false} onClick={handleSaveNotifications} />
    </div>
  );
}