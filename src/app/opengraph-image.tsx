import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const runtime = "edge";
export const alt = profile.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 72,
          background:
            "radial-gradient(800px 500px at 75% 20%, rgba(255,106,31,.28), transparent 60%), #09090b",
          color: "#ececee",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, color: "#9a9aa3", letterSpacing: 4 }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#ff6a1f" }} />
          AVAILABLE · {profile.location.toUpperCase()}
        </div>
        <div style={{ fontSize: 132, fontWeight: 800, letterSpacing: -6, lineHeight: 0.9, marginTop: 24 }}>
          {profile.name.toUpperCase()}
        </div>
        <div style={{ fontSize: 40, color: "#9a9aa3", marginTop: 24 }}>
          builds things for screens & science.
        </div>
      </div>
    ),
    size,
  );
}
