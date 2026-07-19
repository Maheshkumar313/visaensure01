"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Counter({ end, suffix = "", duration = 2, decimals = 0 }: { end: number; suffix?: string; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      let startTimestamp: number | null = null;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        setCount(progress * end);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration, hasStarted]);

  return (
    <span ref={ref} className="font-heading font-bold text-orange-600">
      {!hasStarted && !isInView ? (
        <span>{end.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>
      ) : (
        <span>{count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>
      )}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-premium-dark border-t border-white/5 relative overflow-hidden">
      {/* Subtle orange glow particle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-orange-600/4 blur-[120px] pointer-events-none" />

      {/* Global connection map backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.02] select-none pointer-events-none"
        style={{
          backgroundImage: "url('/images/world-map.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="text-center space-y-2">
            <h3 className="text-4xl md:text-5xl lg:text-6xl">
              <Counter end={10000} suffix="+" duration={1.5} />
            </h3>
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold">
              Visa Consultations Completed
            </p>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-4xl md:text-5xl lg:text-6xl">
              <Counter end={98.6} suffix="%" duration={1.5} decimals={1} />
            </h3>
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold">
              Historical Approval Success
            </p>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-4xl md:text-5xl lg:text-6xl">
              <Counter end={50} suffix="+" duration={1.5} />
            </h3>
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold">
              Global Destinations Covered
            </p>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-4xl md:text-5xl lg:text-6xl">
              <Counter end={5} suffix="+ Yrs" duration={1.5} />
            </h3>
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold">
              Flagship Agency Status
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
