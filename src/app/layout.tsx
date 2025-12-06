import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const siteURL = "https://archana.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),

  title: "Archana Prabhat | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, and modern web technologies. Building elegant and performant web applications.",
  keywords: [
    "Archana Prabhat",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Web Developer",
  ],
  authors: [{ name: "Archana Prabhat" }],

  alternates: {
    canonical: siteURL,
  },

  openGraph: {
    title: "Archana Prabhat | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    url: siteURL,
    siteName: "Archana Prabhat",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Archana Prabhat Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Archana Prabhat | Full Stack Developer",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-background text-gray-1200 antialiased`}>
        {children}
      </body>
    </html>
  );
}
