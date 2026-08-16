import type { Metadata } from "next";
import { Geist, Instrument_Sans, Caveat } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Manya Gupta — Portfolio",
  description: "Product Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSans.variable} ${caveat.variable} scroll-smooth antialiased`}
    >
      <body className="bg-bg text-body font-body min-h-screen">
        {children}
      </body>
    </html>
  );
}
