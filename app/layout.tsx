import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Lazy Mom Guide | Automated 4-Week Family Dinners & Household Operating System",
  description:
    "Stop the 5:00 PM dinner panic. 4-week rotating dinner plans, automated aisle-by-aisle grocery lists, and frictionless chore routines for busy families. Instant digital download.",
  keywords: [
    "lazy mom guide",
    "easy family meal plan",
    "4 week rotating dinner menu",
    "done for you grocery list",
    "family household operating system",
    "chore chart without nagging",
    "15 minute family dinners",
    "stop dinner panic",
  ],
  authors: [{ name: "lazymomguide.com" }],
  creator: "lazymomguide.com",
  publisher: "lazymomguide.com",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "The Lazy Mom Guide | Zero 5 PM Dinner Panic",
    description:
      "Automated 4-week rotating family meals, grocery lists, and frictionless chore systems designed for busy households.",
    url: "https://lazymomguide.com",
    siteName: "lazymomguide.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lazy Mom Guide | Automated Family Meal & Household Systems",
    description:
      "Pre-planned rotating family dinners and household routines that run on autopilot.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF8F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-50 text-charcoal-800 font-sans antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
