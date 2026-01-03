"use client";

import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import TrustSection from "@/components/TrustSection";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import GlobalReach from "@/components/GlobalReach";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustSection />
      <Services />
      <GlobalReach />
      <Team />
      <Gallery />
      <Contact />
    </main>
  );
}
