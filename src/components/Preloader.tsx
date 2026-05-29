"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 20);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#EA580C]/5 blur-[120px] pointer-events-none" />

          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3 mb-10 relative z-10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/visaensureLogoForWebsite/1.png" 
              alt="VisaEnsure Logo" 
              className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl" 
            />
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left mt-2 sm:mt-0">
              <span className="text-3xl md:text-4xl font-heading tracking-widest font-bold text-black">
                VISA<span className="text-[#EA580C]">ENSURE</span>
              </span>
              <span className="text-[10px] md:text-xs tracking-wider text-gray-800 font-body uppercase mt-1">
                Your Trusted Visa Companion
              </span>
            </div>
          </motion.div>

          {/* Loading Bar Animation */}
          <div className="w-48 md:w-64 h-1 bg-white rounded-full overflow-hidden relative z-10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#EA580C]/50 via-[#EA580C] to-[#EA580C]/50 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
