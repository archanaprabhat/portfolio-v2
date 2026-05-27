import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const siteURL = "https://www.archanaprabhath.com/";

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),

  title: "Archana Prabhath",
  description:
    "Full-Stack Engineer creating web experiences",
  keywords: [
    "Archana Prabhath",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Web Developer",
  ],
  authors: [{ name: "Archana Prabhath" }],

  alternates: {
    canonical: siteURL,
  },

  openGraph: {
    title: "Archana Prabhath",
    description:
      "Full-Stack Engineer creating web experiences",
    url: siteURL,
    siteName: "Archana Prabhath",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Archana Prabhath Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Archana Prabhath",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    noimageindex: false,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  themeColor: "#000000",
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-background text-gray-1200 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
