"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("lenis");

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential ease
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let animationFrameId: number;
    
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Dynamic scroll tracking for elements that want to respond to scroll
    const onScroll = () => {
      // Custom actions if needed
    };
    
    lenis.on("scroll", onScroll);

    return () => {
      document.documentElement.classList.remove("lenis");
      cancelAnimationFrame(animationFrameId);
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
