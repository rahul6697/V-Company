"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { UNSPLASH_IMAGES } from "@/lib/image-utils";

const IMAGE_ITEMS = [
    { src: UNSPLASH_IMAGES.gallery1, title: "Finest Textiles", category: "Fabrics" },
    { src: UNSPLASH_IMAGES.gallery2, title: "Exotic Spices", category: "Agriculture" },
    { src: UNSPLASH_IMAGES.gallery3, title: "Handcrafted Jewelry", category: "Luxury" },
    { src: UNSPLASH_IMAGES.gallery4, title: "Artisan Ceramics", category: "Decor" },
];

export default function Gallery() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} id="gallery" className="relative h-[300vh] bg-neutral-900 overflow-visible">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                <div className="absolute top-10 left-10 md:left-20 z-10">
                    <h2 className="font-serif text-5xl md:text-7xl text-white mb-2">Curated Exports</h2>
                    <p className="text-white/50 text-sm uppercase tracking-widest">Scroll to explore</p>
                </div>

                <motion.div style={{ x }} className="flex gap-10 pl-[10vw]">
                    {IMAGE_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] h-[400px] md:w-[600px] md:h-[70vh] flex-shrink-0 group overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                                <h3 className="font-serif text-3xl text-white">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                    {/* Add an empty div for extra padding at the end */}
                    <div className="w-[10vw] flex-shrink-0" />
                </motion.div>
            </div>
        </section>
    );
}
