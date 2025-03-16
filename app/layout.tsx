import React from "react";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientLayout from "./clientLayout";

// Use Inter font instead of Geist for now
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "My Portfolio | J.Deepakgoud",
  description: "Personal portfolio showcasing my work and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen`}>
        <ClientLayout>
          <div className="relative min-h-screen">
            <div className="relative z-10">
              <Header />
              <main className="relative z-10">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ClientLayout>
      </body>
    </html>
  );
}
