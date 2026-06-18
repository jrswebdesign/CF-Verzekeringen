import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crooij & Flipse – Verzekeringen & Hypotheken op Bonaire",
  description:
    "Onafhankelijk advies voor verzekeringen en hypotheken op Bonaire. Persoonlijk advies, lokale kennis en begeleiding van begin tot eind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${poppins.variable} h-full antialiased`}>
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
