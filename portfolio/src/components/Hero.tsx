"use client";

import { motion } from "framer-motion";
import { UNSPLASH_IMAGES } from "@/lib/image-utils";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={UNSPLASH_IMAGES.hero}
                    alt="Luxury Abstract Background"
                    fill
                    className="object-cover opacity-60" // Removed grayscale, increased opacity
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" /> {/* Lighter overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[10px] md:text-xs font-bold tracking-[0.2em] text-gold-300 uppercase mb-6">
                        Global Trade Redefined
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium text-white tracking-tighter mb-4"
                >
                    VENEZIA <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">EXPORTS</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10"
                >
                    Bridging the gap between Indian craftsmanship and the global market.
                    Premium quality, curated for luxury.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col md:flex-row gap-4"
                >
                    <a
                        href="#gallery"
                        className="px-8 py-3 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-gold-400 transition-colors duration-300"
                    >
                        Explore Collection
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors duration-300"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-gold-400 to-white/0 animate-pulse" />
            </motion.div>
        </section>
    );
}
