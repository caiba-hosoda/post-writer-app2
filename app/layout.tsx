import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default:siteConfig.name,
    template:`%s | ${siteConfig.name}`
  }, 
  description:siteConfig.description,
  keywords:["Next.js", "React", "TailwindCSS", "Shadcn/ui"],
  authors:[
    {
      name:"yh1110",
      url:siteConfig.url
    }
  ], 
  metadataBase:new URL(siteConfig.url),
  openGraph:{
    type:"website",
    locale:"ja",
    url:siteConfig.url,
    title:siteConfig.name,
    description:siteConfig.description,
    siteName:siteConfig.name
  },
  twitter:{
    card:"summary_large_image",
    title:siteConfig.name,
    description:siteConfig.description,
    images:[`${siteConfig.url}/og.jpg`],
    creator:"@yh1110"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
