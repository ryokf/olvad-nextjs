import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olvad",
  description: "Bakery website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="darks">
      <body
        className={` ${plusJakarta.variable} antialiased overflow-x-hidden`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
