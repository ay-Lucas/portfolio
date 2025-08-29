import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const { width, height } = size;
  return new ImageResponse(
    (
      <div
        style={{
          width,
          height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 64,
          background: "linear-gradient(135deg,#0ea5e9,#4f46e5)",
          color: "white",
          fontSize: 56,
          fontWeight: 800,
          fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
        }}
      >
        <div style={{ opacity: 0.9 }}>Lucas Anderson</div>
        <div style={{ fontSize: 28, fontWeight: 600, marginTop: 8 }}>
          Software Engineer — BS CS ’26
        </div>
        <div style={{ fontSize: 24, marginTop: 24, opacity: 0.85 }}>
          Building fast, scalable web apps
        </div>
        <div style={{ fontSize: 20, marginTop: 8, opacity: 0.8 }}>lucasanderson.dev</div>
      </div>
    ),
    { ...size }
  );
}

