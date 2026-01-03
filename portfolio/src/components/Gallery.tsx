"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const PROJECTS = [
    {
        id: "01",
        title: "GLOBAL HORIZON",
        category: "MARITIME LOGISTICS",
        image: "/images/generated/gallery_logistics_1.png",
        year: "2024"
    },
    {
        id: "02",
        title: "ROYAL SPICE",
        category: "EXPORT QUALITY",
        image: "/images/generated/gallery_spices_1.png",
        year: "2024"
    },
    {
        id: "03",
        title: "AURUM INFRA",
        category: "WAREHOUSING",
        image: "/images/generated/gallery_port_1.png",
        year: "2024"
    }
];

export default function Gallery() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    return (
        <section ref={targetRef} id="gallery" className="relative h-[300vh] bg-void text-starlight">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-20 pl-20">

                    {/* Intro Card */}
                    <div className="flex flex-col justify-center min-w-[30vw]">
                        <span className="text-gold-liquid font-mono tracking-widest mb-4">SELECTED WORKS</span>
                        <h2 className="text-fluid-h1 leading-[0.85]">
                            OUR <br />
                            <span className="opacity-50">CRAFT</span>
                        </h2>
                    </div>

                    {PROJECTS.map((project) => (
                        <div key={project.id} className="relative group w-[85vw] md:w-[50vw] h-[50vh] md:h-[60vh] flex-shrink-0 bg-white/5 border border-white/10 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 85vw, 50vw"
                                className="object-cover"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-void/20 group-hover:bg-void/0 transition-colors duration-500" />

                            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent w-full text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-fluid">
                                <span className="text-gold-liquid text-fluid-mono tracking-widest text-[10px]">{project.category}</span>
                                <h3 className="text-2xl md:text-3xl font-display mt-1 group-hover:text-gold-liquid transition-colors duration-500">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
