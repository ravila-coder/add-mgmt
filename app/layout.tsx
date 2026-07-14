import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* Brand face self-hosted from the AC design system — no runtime font requests. */
const interTight = localFont({
  src: [
    { path: "./fonts/InterTight-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/InterTight-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acms.addemcapital.mx"),
  title: "Addem Capital Management System",
  description:
    "Secure access to investment information, portfolio reporting and institutional documentation.",
  openGraph: {
    title: "Addem Capital Management System",
    description:
      "Secure access to investment information, portfolio reporting and institutional documentation.",
    siteName: "Addem Capital Management System",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Addem Capital Management System",
    description:
      "Secure access to investment information, portfolio reporting and institutional documentation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${interTight.variable} font-sans`}>{children}</body>
    </html>
  );
}
