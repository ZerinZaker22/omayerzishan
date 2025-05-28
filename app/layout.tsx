import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Omayer Zishan - UI/UX Designer & Brand Designer",
  description:
    "Portfolio of Omayer Zishan, a multidisciplinary designer specializing in UI/UX, product design, and brand design.",
  keywords: "UI/UX Designer, Brand Designer, Product Designer, Portfolio, Omayer Zishan",
  authors: [{ name: "Omayer Zishan" }],
  creator: "Omayer Zishan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omayer-zishan.vercel.app",
    title: "Omayer Zishan - UI/UX Designer & Brand Designer",
    description:
      "Portfolio of Omayer Zishan, a multidisciplinary designer specializing in UI/UX, product design, and brand design.",
    siteName: "Omayer Zishan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omayer Zishan - UI/UX Designer & Brand Designer",
    description:
      "Portfolio of Omayer Zishan, a multidisciplinary designer specializing in UI/UX, product design, and brand design.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
