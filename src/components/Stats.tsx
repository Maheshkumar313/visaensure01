"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Counter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const stepTime = Math.abs(Math.floor((duration * 1000) / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, Math.max(stepTime, 15));

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-heading font-bold text-[#EA580C]">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-white border-t border-gray-200 relative overflow-hidden">
      {/* Background abstract shape */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234, 88, 12,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="text-center space-y-2">
            <h3 className="text-4xl md:text-5xl lg:text-6xl">
              <Counter end={10000} suffix="+" duration={1.5} />
            </h3>
            <p className="text-xs md:text-sm text-gray-800 uppercase tracking-widest font-semibold">
              Visa Consultations Completed
            </p>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-4xl md:text-5xl lg:text-6xl">
              <Counter end={98} suffix=".6%" duration={1.5} />
            </h3>
            <p className="text-xs md:text-sm text-gray-800 uppercase tracking-widest font-semibold">
              Historical Approval Success
            </p>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-4xl md:text-5xl lg:text-6xl">
              <Counter end={50} suffix="+" duration={1.5} />
            </h3>
            <p className="text-xs md:text-sm text-gray-800 uppercase tracking-widest font-semibold">
              Global Destinations Covered
            </p>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-4xl md:text-5xl lg:text-6xl">
              <Counter end={5} suffix="+ Yrs" duration={1.5} />
            </h3>
            <p className="text-xs md:text-sm text-gray-800 uppercase tracking-widest font-semibold">
              Flagship Agency Status
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
