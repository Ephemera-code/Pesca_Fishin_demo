import type { Metadata } from "next";
import "./globals.css";



import { Archivo, Inter, Kaushan_Script } from "next/font/google";

const script = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const display = Archivo({
  subsets: ["latin"],
  weight: ["300", "700", "800"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
  ),
  title: "Pesca Fishing",
  description: "Cañas, reels y señuelos para pescar en río, laguna y mar.",
  openGraph: {
    title: "Pesca Fishing",
    description: "Cañas, reels y señuelos para pescar en río, laguna y mar.",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/productos/hero2.jpg",
        width: 1200,
        height: 630,
        alt: "Pesca Fishing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pesca Fishing",
    description: "Cañas, reels y señuelos para pescar en río, laguna y mar.",
    images: ["/productos/hero2.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${display.variable} ${body.variable} ${script.variable} font-[family-name:var(--font-body)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}