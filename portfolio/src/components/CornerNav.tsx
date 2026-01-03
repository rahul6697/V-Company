"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function CornerNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Top Left - Brand */}
            <div className="fixed top-8 left-8 z-50 mix-blend-screen cursor-pointer">
                <img src="/images/generated/logo.png" alt="Venezia Exports" className="w-24 h-auto opacity-100 hover:opacity-80 transition-opacity" />
            </div>

            {/* Top Right - Menu Trigger */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-8 right-8 z-50 cursor-pointer hover-trigger mix-blend-difference group"
            >
                <div className="flex items-center gap-4">
                    <span className="text-fluid-mono text-white hidden sm:block group-hover:opacity-100 transition-opacity">
                        {isOpen ? "CLOSE" : "MENU"}
                    </span>
                    <div className="p-2 border border-white/20 rounded-full group-hover:bg-white/10 transition-colors">
                        {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
                    </div>
                </div>
            </div>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 bg-void z-40 flex items-center justify-center"
                    >
                        <nav className="flex flex-col space-y-8 text-center">
                            {["HOME", "EXPERTISE", "LEADERSHIP", "GALLERY"].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                                >
                                    <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-fluid-h1 text-starlight hover:text-gold-liquid transition-colors block relative group">
                                        {item}
                                        <ArrowUpRight className="absolute -top-4 -right-12 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity text-gold-liquid" />
                                    </a>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="absolute bottom-12 left-12 text-fluid-mono text-gold-dim">
                            EST. 2024 — KERALA, INDIA
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
