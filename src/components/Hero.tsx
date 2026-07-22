"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Compass, ShieldAlert, Award, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

// Load Globe3D dynamically to avoid SSR errors
const Globe3D = dynamic(() => import("./Globe3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] md:h-[650px] lg:h-[700px] flex items-center justify-center overflow-visible">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
    </div>
  ),
});

interface HeroProps {
  onOpenAssessment: () => void;
  onOpenBooking: () => void;
}

export default function Hero({ onOpenAssessment, onOpenBooking }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
  };

  return (
    <section
      id="hero"
      className="relative pt-0 pb-16 md:pt-2 md:pb-24 overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* ELITE LAYOUT BACKGROUNDS */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* World Map Outline Layer (3% Opacity) */}
        <div 
          className="absolute inset-0 opacity-[0.035] select-none pointer-events-none"
          style={{
            backgroundImage: "url('/images/world-map.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />

        {/* Global Aviation / Travel Routes Curves (under 5% opacity) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04] stroke-orange-600"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 850 420 Q 550 180 250 320"
            strokeWidth="1.2"
            strokeDasharray="6 6"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 850 420 Q 720 220 580 290"
            strokeWidth="1.2"
            strokeDasharray="6 6"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 850 420 Q 1080 620 1220 700"
            strokeWidth="1.2"
            strokeDasharray="6 6"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Slow floating subtle glow particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-orange-600/15"
              style={{
                left: `${15 + i * 20}%`,
                top: `${20 + (i % 2) * 35}%`,
              }}
              animate={{
                y: [0, -15, 15, 0],
                x: [0, 8, -8, 0],
                opacity: [0.1, 0.35, 0.1],
              }}
              transition={{
                duration: 10 + i * 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
      {/* ========================================================================= */}

      <div className="shell w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center pt-10 md:pt-14">
        {/* Left Side: Messaging */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          {/* Tagline Badge */}
          <motion.div variants={itemVariants} className="eyebrow">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Your Trusted Visa Companion</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="mt-6 text-[2.5rem] leading-[1.06] sm:text-5xl lg:text-[3.75rem] font-bold font-heading text-ink-900"
          >
            Move beyond borders
            <br className="hidden sm:inline" />{" "}
            with <span className="text-gradient-orange">absolute confidence</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-ink-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body"
          >
            Expert guidance for study, work, migration, and tourist visas — backed
            by a 98.6% approval rate and a dedicated case manager on every file.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
          >
            <button
              onClick={onOpenAssessment}
              className="btn btn-primary w-full sm:w-auto group"
            >
              <span>Get free assessment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={onOpenBooking}
              className="btn btn-secondary w-full sm:w-auto"
            >
              <span>Explore services</span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-7 pt-8 border-t border-ink-200 max-w-xl mx-auto lg:mx-0"
          >
            {[
              { icon: Users, value: "10K+", label: "Clients served" },
              { icon: Award, value: "98.6%", label: "Success rate", accent: true },
              { icon: Globe, value: "50+", label: "Countries" },
              { icon: ShieldAlert, value: "5+ yrs", label: "Experience" },
            ].map(({ icon: Icon, value, label, accent }) => (
              <div key={label} className="text-center lg:text-left">
                <Icon className="w-4 h-4 text-orange-600 mx-auto lg:mx-0 mb-2" />
                <div
                  className={`text-2xl font-bold font-heading tracking-tight ${
                    accent ? "text-orange-700" : "text-ink-900"
                  }`}
                >
                  {value}
                </div>
                <span className="mt-0.5 block text-xs text-ink-500 font-medium">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Visual Globe */}
        <div className="relative w-full flex items-center justify-center -mt-8 lg:-mt-24">
          <Globe3D />
        </div>
      </div>
    </section>
  );
}
