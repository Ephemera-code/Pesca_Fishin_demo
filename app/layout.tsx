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
  title: "Pesca Norte",
  description: "Cañas, reels y señuelos para pescar en río, laguna y mar.",
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