"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact() {
    const [mounted, setMounted] = useState(false);
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData();
        formData.append("name", formState.name);
        formData.append("email", formState.email);
        formData.append("message", formState.message);

        const result = await sendEmail(formData);

        if (result.success) {
            setStatus("success");
            setFormState({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        } else {
            console.error(result.error);
            setStatus("idle");
            alert("Failed to send message. Please try again.");
        }
    };

    // Prevent hydration mismatch by not rendering form until mounted
    if (!mounted) return null;

    return (
        <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center bg-section-bg px-4 md:px-0">
            {/* Subtle gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

            <div className="relative z-10 w-full max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-foreground/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block">Connect</span>
                    <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-8 tracking-tight">Get in Touch</h2>
                    <p className="text-foreground/60 text-lg font-light tracking-wide max-w-md mx-auto leading-relaxed">
                        Discuss your requirements or request a catalogue. We are here to serve your global trade needs.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="relative group">
                            <input
                                type="text"
                                required
                                className="w-full bg-transparent border-b border-foreground/10 py-4 text-foreground text-lg focus:outline-none focus:border-gold-400 transition-colors duration-500 placeholder-transparent"
                                placeholder="Name"
                                value={formState.name}
                                id="name"
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            />
                            <label
                                htmlFor="name"
                                className={`absolute left-0 top-4 text-foreground/40 text-base transition-all duration-500 pointer-events-none ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${formState.name ? "-top-4 text-xs text-gold-400 tracking-widest" : "group-focus-within:-top-4 group-focus-within:text-xs group-focus-within:text-gold-400 group-focus-within:tracking-widest"}`}
                            >
                                Name
                            </label>
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                required
                                className="w-full bg-transparent border-b border-foreground/10 py-4 text-foreground text-lg focus:outline-none focus:border-gold-400 transition-colors duration-500 placeholder-transparent"
                                placeholder="Email"
                                value={formState.email}
                                id="email"
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            />
                            <label
                                htmlFor="email"
                                className={`absolute left-0 top-4 text-foreground/40 text-base transition-all duration-500 pointer-events-none ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${formState.email ? "-top-4 text-xs text-gold-400 tracking-widest" : "group-focus-within:-top-4 group-focus-within:text-xs group-focus-within:text-gold-400 group-focus-within:tracking-widest"}`}
                            >
                                Email
                            </label>
                        </div>
                    </div>

                    <div className="relative group">
                        <textarea
                            required
                            rows={4}
                            className="w-full bg-transparent border-b border-foreground/10 py-4 text-foreground text-lg focus:outline-none focus:border-gold-400 transition-colors duration-500 placeholder-transparent resize-none"
                            placeholder="Message"
                            value={formState.message}
                            id="message"
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        />
                        <label
                            htmlFor="message"
                            className={`absolute left-0 top-4 text-foreground/40 text-base transition-all duration-500 pointer-events-none ease-[cubic-bezier(0.22,1,0.36,1)]
                ${formState.message ? "-top-4 text-xs text-gold-400 tracking-widest" : "group-focus-within:-top-4 group-focus-within:text-xs group-focus-within:text-gold-400 group-focus-within:tracking-widest"}`}
                        >
                            Message
                        </label>
                    </div>

                    <div className="flex justify-center mt-16">
                        <button
                            disabled={status === "sending" || status === "success"}
                            type="submit"
                            className="px-12 py-5 bg-foreground text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-400 hover:text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl rounded-full"
                        >
                            {status === "idle" ? "Send Message" : status === "sending" ? "Sending..." : "Message Sent"}
                        </button>
                    </div>
                </motion.form>

            </div>

            <footer className="absolute bottom-4 w-full text-center">
                <p className="text-foreground/30 text-[10px] uppercase tracking-wider">
                    © {new Date().getFullYear()} Venezia Exports Pvt Ltd. All Rights Reserved.
                </p>
            </footer>
        </section>
    );
}
