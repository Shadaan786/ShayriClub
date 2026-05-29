export const NotiicationCard = ({
  notificationTitle,
  notificationBody,
  timestamp = "Just now",
}) => {
  return (
    <div style={{
      background: "#1a2035",
      border: "0.5px solid rgba(255,255,255,0.08)",
      borderRadius: 12,
      padding: "14px 16px",
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      maxWidth: 420,
    }}>
      <div style={{
        width: 8, height: 8, borderRadius: "50%",
        background: "#e2e8f0", flexShrink: 0, marginTop: 6,
      }} />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8, marginBottom: 4 }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: "#f1f5f9", lineHeight: 1.3 }}>
            {notificationTitle}
          </span>
          <span style={{ fontSize: 11, color: "#64748b", whiteSpace: "nowrap" }}>
            {timestamp}
          </span>
        </div>
        <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.55, margin: 0 }}>
          {notificationBody}
        </p>
      </div>
    </div>
  );
};