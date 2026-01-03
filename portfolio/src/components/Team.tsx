"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { UNSPLASH_IMAGES } from "@/lib/image-utils";
import { Phone } from "lucide-react";

const TEAM_MEMBERS = [
    {
        id: 1,
        name: "Vishak Marcil",
        role: "Managing Director",
        image: UNSPLASH_IMAGES.team1,
        phone: "+49 17663476542",
        quote: "Vision is the art of seeing what is invisible to others.",
    },
    {
        id: 2,
        name: "John Clement",
        role: "Managing Director",
        image: UNSPLASH_IMAGES.team2,
        phone: "+971 555917374",
        quote: "Building bridges between markets with integrity and trust.",
    },
    {
        id: 3,
        name: "Krishnakumar K",
        role: "Regional Director",
        image: UNSPLASH_IMAGES.team3,
        phone: "+91 7736510751",
        quote: "Ensuring operational perfection in every region we serve.",
    },
];

const Card = ({ member, index, progress }: { member: typeof TEAM_MEMBERS[0]; index: number; progress: MotionValue<number> }) => {
    const range = [index * 0.25, 1];
    const targetScale = 1 - (TEAM_MEMBERS.length - index) * 0.05;

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
                className="relative flex flex-col md:flex-row w-[90vw] md:w-[1000px] h-[70vh] rounded-3xl overflow-hidden bg-[#111] border border-white/10 shadow-2xl origin-top"
            >
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-12 flex flex-col justify-center bg-[#0a0a0a]">
                    <span className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">0{index + 1} / Leadership</span>
                    <h3 className="font-serif text-3xl md:text-5xl text-white mb-2">{member.name}</h3>
                    <p className="text-white/50 text-sm md:text-base mb-6 uppercase tracking-wide">{member.role}</p>

                    <div className="w-12 h-[1px] bg-white/10 mb-6" />

                    <div className="flex items-center gap-3 text-white/80 mb-6">
                        <div className="p-2 rounded-full bg-white/5 border border-white/10">
                            <Phone className="w-4 h-4 text-gold-400" />
                        </div>
                        <span className="text-lg font-light tracking-wide">{member.phone}</span>
                    </div>

                    <p className="text-white/80 font-light italic text-lg leading-relaxed">&ldquo;{member.quote}&rdquo;</p>
                </div>
            </motion.div>
        </div>
    );
};

export default function Team() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <section id="team" ref={container} className="relative bg-black">
            <div className="h-[20vh] flex flex-col items-center justify-center sticky top-0 z-10 bg-black/90 backdrop-blur-sm">
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">Our Leadership</h2>
                <div className="w-24 h-[1px] bg-gold-400" />
            </div>

            <div className="pb-[20vh]">
                {TEAM_MEMBERS.map((member, i) => (
                    <Card key={member.id} member={member} index={i} progress={scrollYProgress} />
                ))}
            </div>
        </section>
    );
}
