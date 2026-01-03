"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function GlobalReach() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section ref={containerRef} className="py-40 bg-void text-starlight relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.05),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">

                {/* Text Content */}
                <div>
                    <h2 className="text-fluid-h1 leading-none mb-8">
                        GLOBAL <br />
                        <span className="text-gold-liquid font-serif italic">REACH</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-light text-white/80 mb-12 max-w-md">
                        Connecting 24 countries across 4 continents with a network built on trust and speed.
                    </p>

                    <div className="grid grid-cols-2 gap-8 font-mono text-sm tracking-widest uppercase">
                        <div>
                            <span className="block text-gold-liquid mb-2 text-lg">Primary Hubs</span>
                            <ul className="text-white/60 space-y-2">
                                <li>Dubai</li>
                                <li>London</li>
                                <li>Singapore</li>
                                <li>New York</li>
                            </ul>
                        </div>
                        <div>
                            <span className="block text-gold-liquid mb-2 text-lg">Expansion</span>
                            <ul className="text-white/60 space-y-2">
                                <li>Tokyo</li>
                                <li>Shanghai</li>
                                <li>Berlin</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Spinning Globe Representation */}
                <div className="relative flex items-center justify-center">
                    <motion.div
                        style={{ rotate }}
                        className="w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] relative opacity-100 mix-blend-screen"
                    >
                        <Image
                            src="/images/generated/globe.png"
                            alt="Global Network"
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                    {/* Floating Cards (Optional Wow Factor) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg absolute top-[20%] right-[5%] animate-pulse">
                            <span className="text-xs font-mono text-gold-liquid">LIVE SHIPMENT #4921</span>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg absolute bottom-[20%] left-[5%] animate-pulse delay-700">
                            <span className="text-xs font-mono text-gold-liquid">ROUTE OPTIMIZED</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
