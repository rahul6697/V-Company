"use client";

import { motion } from "framer-motion";
// import { Link as ScrollLink } from "react-scroll"; // Removed unused import
// Actually, simple anchors with `scroll-behavior: smooth` (which I added to html) work well for single page.
// Or I can just write my own smooth scroll handler if needed.
// Le't stick to simple anchors for now, or just implement a custom scroll to id.

import Link from "next/link";
import { useState, useEffect } from "react";
import { clsx } from "clsx";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "Team", href: "#team" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500",
                scrolled
                    ? "bg-black/80 backdrop-blur-md py-3 border-b border-white/5"
                    : "bg-transparent py-6"
            )}
        >
            <div className="flex items-center gap-2">
                <Link href="/" className="text-xl font-serif font-bold tracking-widest text-white">
                    VENEZIA<span className="text-gold-400">.</span>
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium tracking-wide text-white/80 hover:text-gold-400 transition-colors duration-300 relative group"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
                    </a>
                ))}
            </div>

            <button className="md:hidden text-white">
                {/* Mobile Menu Icon Placeholder */}
                <span className="sr-only">Menu</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <a
                href="#contact"
                className="hidden md:inline-flex px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-gold-400 hover:border-gold-400 hover:text-black transition-all duration-300"
            >
                Get in Touch
            </a>
        </motion.nav>
    );
}
