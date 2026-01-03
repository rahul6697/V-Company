"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef } from "react";



export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // SVZ Style: Reveal animations
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    const scrollToContent = () => {
        const expertiseSection = document.getElementById("expertise");
        if (expertiseSection) {
            expertiseSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        // Optimization: Skip on mobile or if needed, but for now just keeping it subtle.
        // In a real optimized scenario, we'd check window.matchMedia('(hover: none)')
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        mouseX.set((clientX - centerX) * 0.05); // Subtle movement
        mouseY.set((clientY - centerY) * 0.05);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="h-screen relative flex flex-col items-center justify-center overflow-hidden bg-void text-starlight"
        >

            {/* SVZ Style: Noise Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            {/* Architectural Grid Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Mouse Parallax Background Elements (Giant 'VE') */}
            <motion.div
                style={{ x: mouseX, y: mouseY }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.02]"
            >
                <span className="text-[40vw] font-bold font-display leading-none mr-[-5vw]">V</span>
                <span className="text-[40vw] font-bold font-display leading-none ml-[-5vw]">E</span>
            </motion.div>



            {/* Main Content: SVZ Style Typography */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-6">

                {/* Intro Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="h-[1px] w-12 bg-gold-liquid/50" />
                    <span className="text-sm font-mono tracking-[0.2em] text-gold-liquid uppercase">EST. 2024</span>
                    <div className="h-[1px] w-12 bg-gold-liquid/50" />
                </motion.div>

                {/* Massive Headline - Mixed Case (SVZ Style - Masked Slide Up) */}
                <div className="flex flex-col items-center leading-[0.85] tracking-tight">
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }} // Faster start
                            className="text-[14vw] md:text-[8rem] font-display font-bold text-white mb-2"
                        >
                            crafting
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
                            className="text-[14vw] md:text-[8rem] font-display font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
                        >
                            GLOBAL
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
                            className="text-[14vw] md:text-[8rem] font-display font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
                        >
                            LOGISTICS
                        </motion.h1>
                    </div>
                </div>

                {/* Subtext - Fade In */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 1 }}
                    className="mt-8 text-lg md:text-xl font-light text-white/60 max-w-lg leading-relaxed px-4"
                >
                    Seamless supply chain solutions bridging India to the world.
                </motion.p>

                {/* Minimalist CTA (SVZ Style) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8 }}
                    className="mt-16"
                >
                    <button
                        onClick={scrollToContent}
                        className="group flex flex-col items-center gap-2 cursor-pointer transition-opacity hover:opacity-80 active:opacity-60"
                    >
                        <span className="text-xs font-mono tracking-widest text-white/50 group-hover:text-gold-liquid transition-colors">
                            ENTER
                        </span>
                        <div className="w-[1px] h-12 bg-white/20 group-hover:h-16 group-hover:bg-gold-liquid transition-all duration-500 ease-fluid" />
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-12 left-0 right-0 flex justify-center pointer-events-none"
            >
                <span className="text-[10px] font-mono tracking-widest text-white/20 animate-pulse">SCROLL TO EXPLORE</span>
            </motion.div>

        </section>
    );
}
