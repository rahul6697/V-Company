"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

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

    return (
        <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 md:px-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-50" />

            <div className="relative z-10 w-full max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-4 block">Connect</span>
                    <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">Get in Touch</h2>
                    <p className="text-white/40 text-sm md:text-base font-light tracking-wide max-w-md mx-auto">
                        Discuss your requirements or request a catalogue. We are here to serve your global trade needs.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative group">
                            <input
                                type="text"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors duration-300 placeholder-transparent"
                                placeholder="Name"
                                value={formState.name}
                                id="name"
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            />
                            <label
                                htmlFor="name"
                                className={`absolute left-0 top-4 text-white/40 text-sm transition-all duration-300 pointer-events-none
                  ${formState.name ? "-top-2 text-xs text-gold-400" : "group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-gold-400"}`}
                            >
                                Name
                            </label>
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors duration-300 placeholder-transparent"
                                placeholder="Email"
                                value={formState.email}
                                id="email"
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            />
                            <label
                                htmlFor="email"
                                className={`absolute left-0 top-4 text-white/40 text-sm transition-all duration-300 pointer-events-none
                  ${formState.email ? "-top-2 text-xs text-gold-400" : "group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-gold-400"}`}
                            >
                                Email
                            </label>
                        </div>
                    </div>

                    <div className="relative group">
                        <textarea
                            required
                            rows={4}
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors duration-300 placeholder-transparent resize-none"
                            placeholder="Message"
                            value={formState.message}
                            id="message"
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        />
                        <label
                            htmlFor="message"
                            className={`absolute left-0 top-4 text-white/40 text-sm transition-all duration-300 pointer-events-none
                ${formState.message ? "-top-2 text-xs text-gold-400" : "group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-gold-400"}`}
                        >
                            Message
                        </label>
                    </div>

                    <div className="flex justify-center mt-12">
                        <button
                            disabled={status === "sending" || status === "success"}
                            type="submit"
                            className="px-10 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-gold-400 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "idle" ? "Send Message" : status === "sending" ? "Sending..." : "Message Sent"}
                        </button>
                    </div>
                </motion.form>

            </div>

            <footer className="absolute bottom-4 w-full text-center">
                <p className="text-white/20 text-[10px] uppercase tracking-wider">
                    © {new Date().getFullYear()} Venezia Exports Pvt Ltd. All Rights Reserved.
                </p>
            </footer>
        </section>
    );
}
