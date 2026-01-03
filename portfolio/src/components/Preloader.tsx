"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds load time
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: isLoading ? 0 : "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-none"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
            >
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                <span className="text-white font-mono text-sm tracking-widest">LOADING</span>
            </motion.div>
        </motion.div>
    );
}
