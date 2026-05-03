import { ImageResponse } from "next/og";
import { siteDescription, siteName } from "@/lib/site-config";

export const runtime = "edge";
export const alt = siteName;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 18% 18%, rgba(114,247,255,0.35), transparent 24%), radial-gradient(circle at 84% 12%, rgba(255,167,120,0.28), transparent 22%), linear-gradient(180deg, #04070d 0%, #07101a 52%, #04070d 100%)",
          color: "#f5f7fb",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(121,247,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(121,247,255,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            opacity: 0.5,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 72px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              alignSelf: "flex-start",
              gap: 14,
              borderRadius: 999,
              border: "1px solid rgba(121,247,255,0.24)",
              background: "rgba(7,16,27,0.8)",
              padding: "12px 22px",
              fontSize: 28,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#b0ddff",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#79f7ff",
                boxShadow: "0 0 16px rgba(121,247,255,0.9)",
              }}
            />
            {siteName}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 36,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 720,
              }}
            >
              <div
                style={{
                  fontSize: 92,
                  lineHeight: 0.95,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                }}
              >
                Moderni web, mobile i custom software proizvodi.
              </div>
              <div
                style={{
                  marginTop: 28,
                  fontSize: 30,
                  lineHeight: 1.45,
                  color: "#94a3b8",
                }}
              >
                {siteDescription}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
                width: 280,
              }}
            >
              {["Booking sistemi", "Dashboard i procesi", "Web + App", "Firebase / React"].map(
                (item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      borderRadius: 28,
                      border: "1px solid rgba(137, 167, 214, 0.24)",
                      background: "rgba(8, 13, 21, 0.72)",
                      padding: "18px 22px",
                      fontSize: 26,
                      color: "#dbe5f2",
                    }}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
