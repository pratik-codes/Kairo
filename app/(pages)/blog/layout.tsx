import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "@/components/wrapper/navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rasmic.xyz"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Michael Shimeles",
    template: "%s | Michael Shimeles",
  },
  description: "Servant of Jesus, Full Stack Engineer, & YouTuber.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <NavBar />

      <div className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8">
          <main className="max-w-[60ch] mt-[2rem] mx-auto w-full space-y-6">
            {children}
          </main>
          <Analytics />
        </div>
      </div>
    </ViewTransitions>
  );
}
