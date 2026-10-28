import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anthony Anup — Full Stack Developer",
  description:
    "Anthony Anup — full-stack developer building REST APIs, database-driven applications, and cloud-integrated systems. Projects, stack, and contact.",
  authors: [{ name: "Anthony Anup" }],
  openGraph: {
    type: "website",
    title: "Anthony Anup — Full Stack Developer",
    description:
      "Full-stack development, REST APIs, databases, and cloud services. Projects, stack, and contact.",
  },
  twitter: {
    card: "summary",
    title: "Anthony Anup — Full Stack Developer",
    description:
      "Full-stack development, REST APIs, databases, and cloud services. Projects, stack, and contact.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", sizes: "256x256", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const themeScript = `(function () {
  var t = "dark";
  try {
    var s = localStorage.getItem("anthony-theme");
    t = s === "light" || s === "dark"
      ? s
      : matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
  } catch (e) {}
  document.documentElement.setAttribute("data-theme", t);
  var m = document.querySelector('meta[name="color-scheme"]');
  if (m) m.setAttribute("content", t);
})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark light" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
