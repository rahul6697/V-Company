"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{
            lerp: 0.1,
            duration: 1.2,
            smoothWheel: true,
            touchMultiplier: 2, // Makes touch scrolling 2x faster/more responsive
            // infinite: false, // Ensure this isn't accidentally true
        }}>
            {children}
        </ReactLenis>
    );
}
