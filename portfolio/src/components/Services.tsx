"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SERVICES = [
    {
        title: "STRATEGIC SOURCING",
        description: "We identify and procure the finest raw materials from exclusive global partners, ensuring unparalleled quality for our clients.",
        icon: "/images/generated/sourcing.png"
    },
    {
        title: "PRECISION LOGISTICS",
        description: "Our supply chain network operates with military precision, minimizing transit times while maximizing security and efficiency.",
        icon: "/images/generated/logistics.png"
    },
    {
        title: "SUSTAINABLE PRACTICE",
        description: "Every export adheres to strict environmental standards, balancing luxury consumption with ecological responsibility.",
        icon: "/images/generated/sustainability.png"
    }
];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-void text-starlight border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Sticky Title */}
                    <div className="lg:sticky lg:top-20 h-fit">
                        <span className="text-gold-liquid text-fluid-mono tracking-widest block mb-4">OUR PHILOSOPHY</span>
                        <h2 className="text-fluid-h1 leading-[0.9]">
                            PROCESS <br /> & <span className="font-serif italic text-white/50">PURPOSE</span>
                        </h2>
                        <p className="mt-8 text-white/60 max-w-sm">
                            We don't just move goods. We orchestrate a symphony of global trade, connecting creators with connoisseurs through a seamless, invisible network.
                        </p>
                    </div>

                    {/* Accordion List */}
                    <div className="flex flex-col">
                        {SERVICES.map((service, i) => (
                            <motion.div
                                key={i}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group border-b border-white/10 py-12 cursor-pointer transition-colors hover:border-gold-liquid"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-3xl font-display uppercase group-hover:text-gold-liquid transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <span className="text-fluid-mono text-2xl group-hover:rotate-45 transition-transform duration-300">+</span>
                                </div>

                                <AnimatePresence>
                                    {hoveredIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6 flex gap-6 items-start">
                                                <div className="relative w-16 h-16 flex-shrink-0 opacity-80 mix-blend-screen">
                                                    <img src={service.icon} alt={service.title} className="object-contain w-full h-full" />
                                                </div>
                                                <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
