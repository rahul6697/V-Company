"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef, useState, MouseEvent } from "react";

const LEADERS = [
    { name: "VISHAK MARCIL", role: "CEO & FOUNDER", img: "/images/team/vishak.jpg" },
    { name: "JOHN CLEMENT", role: "CO-FOUNDER", img: "/images/team/john.jpg" },
    { name: "KRISHNAKUMAR", role: "OPERATIONS", img: "/images/team/krishnakumar.jpg" }
];

export default function Team() {
    const [activeImg, setActiveImg] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = { damping: 20, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Rotate based on X velocity (simplified)
    const rotate = useSpring(0, { damping: 20, stiffness: 200 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            x.set(e.clientX - rect.left); // Relative to section
            y.set(e.clientY - rect.top);

            // Simple rotation tilt
            rotate.set(e.movementX * 0.5);
        }
    };

    return (
        <section
            ref={ref}
            id="leadership"
            className="py-20 bg-void text-starlight relative overflow-hidden cursor-none"
        >
            <div className="container mx-auto px-4 mb-10 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-fluid-h1 text-center mix-blend-difference"
                >
                    LEADERSHIP
                </motion.h2>
            </div>

            <div
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setActiveImg(null)}
                className="flex flex-col border-t border-white/10 relative z-10"
            >
                {LEADERS.map((leader, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setActiveImg(leader.img)}
                        className="group relative border-b border-white/10 py-10 flex justify-between items-center px-4 hover:bg-white/5 transition-colors duration-500"
                    >
                        <span className="text-fluid-mono text-gold-liquid opacity-50 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                        <h3 className="text-5xl md:text-8xl font-display uppercase group-hover:translate-x-8 transition-transform duration-700 ease-fluid mix-blend-overlay">
                            {leader.name}
                        </h3>
                        <span className="hidden md:block text-fluid-mono opacity-50 group-hover:opacity-100 transition-opacity">
                            {leader.role}
                        </span>
                    </div>
                ))}
            </div>

            {/* Floating Image Cursor */}
            <motion.div
                style={{
                    left: springX,
                    top: springY,
                    rotate: rotate
                }}
                className="absolute z-0 w-[400px] h-[500px] pointer-events-none -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg grayscale contrast-125"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: activeImg ? 1 : 0,
                    scale: activeImg ? 1 : 0.5
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {activeImg && (
                    <Image
                        src={activeImg}
                        alt="Leader"
                        fill
                        className="object-cover"
                    />
                )}
            </motion.div>
        </section>
    );
}
