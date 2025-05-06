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
        {/* rest of your scripts go under */}
      </head>
      <body
        className={`flex flex-col content-center max-w-4xl px-4 mx-auto mt-10 ${GeistSans.variable}
            ${GeistMono.variable}
         bg-gray-200 dark:bg-black
          mb-[200px]
          `}
      >
        <PostHogProvider  >
          {children}
          <div className="fixed bottom-0 left-0 w-full">
            <NavbarDock />
          </div>
        </PostHogProvider>

      </body>
    </html>
  );
}
