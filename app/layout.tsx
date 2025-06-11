import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import { Suspense } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "KinoBo",
  description: "KinoBo — лучший кинотеатр в мире",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="en">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        <Suspense>
          <Header />
          <div className="w-full flex flex-col items-center justify-center content-center pt-[60px]">{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
