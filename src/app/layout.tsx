import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProviderWrapper } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Purrify.ca - Revolutionary Cat Litter Additive",
  description:
    "Purrify's activated carbon cat litter additive extends litter life by 50%, eliminates odors, and saves you money. Made in Montreal with 1,150m²/g internal surface area.",
  keywords:
    "cat litter, activated carbon, odor control, eco-friendly, Montreal, pet care",
  openGraph: {
    title: "Purrify.ca - Revolutionary Cat Litter Additive",
    description:
      "Extend your cat litter life by 50% with our activated carbon additive. Made in Montreal.",
    url: "https://purrify.ca",
    siteName: "Purrify.ca",
    images: [
      {
        url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Purrify Cat Litter Additive",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purrify.ca - Revolutionary Cat Litter Additive",
    description:
      "Extend your cat litter life by 50% with our activated carbon additive. Made in Montreal.",
    images: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&h=630&fit=crop",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <ThemeProviderWrapper>
          {children}
          <TempoInit />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
