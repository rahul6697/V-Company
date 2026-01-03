"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { UNSPLASH_IMAGES } from "@/lib/image-utils";
import { clsx } from "clsx";

const BentoItem = ({
    title,
    subtitle,
    image,
    className,
    delay = 0
}: {
    title: string;
    subtitle: string;
    image: string;
    className?: string;
    delay?: number
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
            className={clsx("relative overflow-hidden rounded-3xl group", className)}
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 p-8 z-10">
                <p className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-2">{subtitle}</p>
                <h3 className="text-2xl md:text-3xl font-serif text-white">{title}</h3>
            </div>
        </motion.div>
    );
};

export default function BentoGrid() {
    return (
        <section id="bento-grid" className="py-32 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent-blue text-xs font-bold uppercase tracking-widest mb-4 block">Our Commitment</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground font-medium">Supply Chain Integrity</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[800px]">
                    {/* Sustainability - Large Left */}
                    <BentoItem
                        title="Sustainable Sourcing"
                        subtitle="Eco-Friendly"
                        image={UNSPLASH_IMAGES.gallery1}
                        className="md:col-span-2 md:row-span-2 h-[400px] md:h-full"
                    />

                    {/* Quality Control - Top Right */}
                    <BentoItem
                        title="Quality Control"
                        subtitle="Rigorous Testing"
                        image={UNSPLASH_IMAGES.gallery2}
                        className="md:col-span-1 md:row-span-1 h-[300px] md:h-full"
                        delay={0.2}
                    />

                    {/* Logistics - Bottom Right */}
                    <BentoItem
                        title="Global Logistics"
                        subtitle="End-to-End Support"
                        image={UNSPLASH_IMAGES.gallery3}
                        className="md:col-span-1 md:row-span-1 h-[300px] md:h-full"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
}
