"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveCursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for Apple/Stripe-like interpolation
  const springConfig = { damping: 35, stiffness: 220, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of the glow width (120px) to center it on the cursor
      mouseX.set(e.clientX - 120);
      mouseY.set(e.clientY - 120);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[240px] h-[240px] rounded-full pointer-events-none z-[99] bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.08)_0%,transparent_70%)] blur-2xl hidden md:block"
      style={{
        x: glowX,
        y: glowY,
      }}
    />
  );
}
