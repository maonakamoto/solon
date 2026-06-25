import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display font — geometric, technical character for headlines and the SOLON wordmark
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solon — Bitcoin-Native Governance",
  description: "Radical transparency and cryptographic democracy for organizations.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Solon",
    description: "Bitcoin-Native Governance for the Digital Age",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    siteName: "Solon",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen antialiased font-sans">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

