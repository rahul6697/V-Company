import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-gold-500/30">
      <Navbar />
      <Hero />
      <Team />
      <Gallery />
      <Contact />
    </main>
  );
}
