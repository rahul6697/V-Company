"use client";

import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
import { useRef } from "react";

const VALUES = ["SUSTAINABILITY", "CRAFTSMANSHIP", "GLOBAL LOGISTICS", "PREMIUM SOURCING", "SPEED", "INTEGRITY"];

export default function TrustSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress, scrollY } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    // Velocity Skew
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    // Reduce skew on mobile (hard to detect 100% reliably in SSR, but we can lower the max skew)
    const skewX = useTransform(smoothVelocity, [-1000, 1000], [-15, 15]); // Reduced from 35
    const skewXReverse = useTransform(smoothVelocity, [-1000, 1000], [15, -15]);

    // Marquee Movement
    const xMove = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
    const xMoveReverse = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <section ref={containerRef} id="expertise" className="py-40 relative bg-void overflow-hidden flex flex-col justify-center min-h-screen">

            {/* Background Liquid Noise (Optional) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            {/* Infinite Marquee Lines */}
            <div className="flex flex-col gap-8 py-20 pointer-events-none z-0">
                <motion.div style={{ x: xMove, skewX }} className="flex whitespace-nowrap gap-12">
                    {[...VALUES, ...VALUES, ...VALUES].map((val, i) => (
                        <span key={i} className="text-[14vw] md:text-[10vw] font-serif font-bold text-void-light/5 text-starlight/20 leading-none">
                            {val}
                        </span>
                    ))}
                </motion.div>
                <motion.div style={{ x: xMoveReverse, skewX: skewXReverse }} className="flex whitespace-nowrap gap-12 -ml-[50%]">
                    {[...VALUES, ...VALUES, ...VALUES].reverse().map((val, i) => (
                        <span key={i} className="text-[14vw] md:text-[10vw] font-serif font-bold text-gold-dim/40 leading-none">
                            {val}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Floating Stats - Organic Layout */}
            <div className="container mx-auto px-4 relative z-10 mt-20">
                <div className="flex flex-wrap justify-around items-end min-h-[40vh] gap-20">
                    {[
                        { label: "Markets Served", value: "24+" },
                        { label: "Annual Exports", value: "$50M" },
                        { label: "Client Retention", value: "100%" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 1, ease: [0.23, 1, 0.32, 1] }} // smooth
                            className={`flex flex-col ${i % 2 === 0 ? "mb-20" : "mb-0"}`} // Staggered vertical position
                        >
                            <div className="relative group">
                                <h3 className="text-[15vw] md:text-[8rem] font-display text-transparent bg-clip-text bg-gradient-to-br from-gold-liquid to-gold-dim leading-none relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2">
                                    {stat.value}
                                </h3>
                                <div className="absolute -inset-4 blur-3xl bg-gold-liquid/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>
                            <p className="text-fluid-mono text-starlight tracking-[0.2em] mt-2 border-t border-gold-liquid/30 pt-4 self-start">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(197, 160, 89, 0.3); /* Gold dim stroke */
                    color: transparent;
                }
            `}</style>
        </section>
    );
}
