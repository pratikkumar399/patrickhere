import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { NavbarDock } from "@/components/generalUi/navbarDock";
import Script from "next/script";
import { PostHogProvider } from './providers'


export const metadata: Metadata = {
  title: "Pratik Rai",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
          strategy="lazyOnload"
        />

      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} bg-black`}>
        <div className="min-h-screen w-full relative bg-black">
          <div
            className="fixed inset-0 w-full h-full z-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
            }}
          />

          <div className="relative z-10 flex flex-col content-center max-w-4xl px-4 mx-auto  mb-[200px] bg-transparent">
            <PostHogProvider>
              {children}
            </PostHogProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
