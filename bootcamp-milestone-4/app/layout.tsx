import type { Metadata } from "next";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Ashley Navos",
  description: "A personal website for Ashley Navos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // returns boilerplate
  return (
    <html lang="en">
      <body className={`layout`}>
        <Navbar />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
