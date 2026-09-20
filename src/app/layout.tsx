import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { profile } from "@/content/profile";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Cursor } from "@/components/ui/Cursor";
import { StudioLight } from "@/components/ui/StudioLight";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const commit = localFont({
  src: [
    { path: "../fonts/CommitMono-400-Regular.otf", weight: "400" },
    { path: "../fonts/CommitMono-700-Regular.otf", weight: "700" },
  ],
  variable: "--font-commit",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — builds things for screens & science`,
  description:
    "Data, web, and the hardware it runs on. Projects, stack, and a timeline of obsessions.",
  metadataBase: new URL("https://example.com"), // TODO: real domain
  openGraph: {
    title: profile.name,
    description: "Builds things for screens & science.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${commit.variable}`}
    >
      <body>
        <SmoothScroll>
          <StudioLight />
          <div className="tech-grid" aria-hidden />
          <div className="grain" aria-hidden />
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
