import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ontime – Landing",
  description: "Early‑access signup for Ontime Pro+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
