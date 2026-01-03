import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { clsx } from "clsx";

const outfit = localFont({
  src: [
    { path: "../../public/fonts/Outfit-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Outfit-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Outfit-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-outfit",
});

const playfair = localFont({
  src: [
    { path: "../../public/fonts/PlayfairDisplay-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/PlayfairDisplay-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/PlayfairDisplay-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-playfair",
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={clsx(
          outfit.variable,
          playfair.variable,
          "antialiased bg-background text-foreground font-sans selection:bg-gold-500/30 selection:text-gold-200"
        )}
      >
        {children}
      </body>
    </html>
  );
}
