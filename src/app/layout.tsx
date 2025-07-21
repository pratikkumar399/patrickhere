import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Condensed } from "next/font/google";
import Script from "next/script";
import { PostHogProvider } from './providers';
import Link from "next/link";
import { LucideArrowUpRight } from "lucide-react";

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  fallback: ["IBM Plex Sans Condensed Fallback"],
  weight: ["400", "700"], 
});

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
    <html lang="en" className={ibmPlexSansCondensed.className}>
      <head>
        {/* React Scan script */}
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
          strategy="lazyOnload"
        />

        {/* Google Analytics - gtag.js */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7FJ28ZD47X"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7FJ28ZD47X');
        `}
        </Script>
      </head>

      <body className="bg-black">
        <div className="min-h-screen w-full relative ">
          <div
            className="fixed inset-0 w-full h-full z-0"
            style={{
              background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
            }}
          />


          <div className="relative z-10 flex flex-col content-center max-w-4xl px-4 mx-auto  mb-[100px] bg-transparent">
            <PostHogProvider>
              <nav>
                <div className="flex justify-end gap-4 mt-10 text-blue-400 ">
                  <Link href={"/"}>home</Link>
                  <Link href={"/blog"}>blogs</Link>
                  <Link href={"/projects"}>projects</Link>

                  <Link href={"https://medium.com/@raipratik399"} target="_blank" className="flex gap-0 justify-center">medium  <LucideArrowUpRight width={18} />  </Link>
                  <Link href={"https://github.com/pratikkumar399"} className="flex gap-0 justify-center">github <LucideArrowUpRight width={18} /></Link>
                </div>
              </nav>
              {children}
            </PostHogProvider>
          </div>
        </div>
      </body>
    </html >
  );
}
