import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google"; // Ready.so aesthetic
import "./globals.css";
import { clsx } from "clsx";
import SmoothScroll from "@/components/SmoothScroll";
import CornerNav from "@/components/CornerNav";
import FluidCursor from "@/components/FluidCursor";
import Preloader from "@/components/Preloader"; // SVZ Preloader

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venezia Exports | Luxury Portfolio",
  description: "Premium export solutions from India to the World.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={clsx(
          jakarta.variable,
          inter.variable,
          "antialiased bg-void text-starlight font-sans selection:bg-gold-liquid selection:text-void"
        )}
      >
        <Preloader />
        <SmoothScroll>
          <div className="hidden lg:block">
            <FluidCursor />
          </div>
          <CornerNav />
          <main className="relative z-10">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
