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
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF6B00]"></div>
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
          className="absolute inset-0 w-full h-full opacity-[0.04] stroke-[#FF6B00]"
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
              className="absolute w-1.5 h-1.5 rounded-full bg-[#FF6B00]/15"
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

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Messaging */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 text-center lg:text-left"
        >
          {/* Tagline Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold tracking-wider text-[#FF6B00] uppercase">
            <Compass className="w-4 h-4 animate-spin-slow text-[#FF6B00]" />
            <span>Your Trusted Visa Companion</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black leading-tight"
          >
            Move Beyond Borders <br className="hidden sm:inline" />
            With <span className="text-[#FF6B00] bg-gradient-to-r from-[#FF6B00] to-[#FFA54F] bg-clip-text text-transparent">Absolute Confidence</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-gray-900 text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-body"
          >
            VisaEnsure matches Apple-level smoothness, Stripe-level trust, and Emirates-style luxury travel to deliver a success-driven visa and immigration experience for students, families, and global professionals.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={onOpenAssessment}
              className="w-full sm:w-auto px-8 py-4 bg-[#FF6B00] hover:bg-[#FF7A1A] text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-[#FF6B00]/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Free Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-white border border-black/10 rounded-full text-black font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-1 hover:border-[#FF6B00]/30 cursor-pointer"
            >
              <span>Explore Services</span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-200 max-w-xl mx-auto lg:mx-0"
          >
            <div className="text-center lg:text-left space-y-0.5">
              <div className="text-xl md:text-2xl font-bold font-heading text-black flex items-center justify-center lg:justify-start gap-1">
                <Users className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>10K+</span>
              </div>
              <span className="text-[10px] tracking-wider text-gray-800 uppercase font-semibold">Clients Served</span>
            </div>
            <div className="text-center lg:text-left space-y-0.5">
              <div className="text-xl md:text-2xl font-bold font-heading text-[#FF6B00] flex items-center justify-center lg:justify-start gap-1">
                <Award className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>98.6%</span>
              </div>
              <span className="text-[10px] tracking-wider text-gray-800 uppercase font-semibold">Success Rate</span>
            </div>
            <div className="text-center lg:text-left space-y-0.5">
              <div className="text-xl md:text-2xl font-bold font-heading text-black flex items-center justify-center lg:justify-start gap-1">
                <Globe className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>50+</span>
              </div>
              <span className="text-[10px] tracking-wider text-gray-800 uppercase font-semibold">Countries</span>
            </div>
            <div className="text-center lg:text-left space-y-0.5">
              <div className="text-xl md:text-2xl font-bold font-heading text-black flex items-center justify-center lg:justify-start gap-1">
                <ShieldAlert className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>5+ Yrs</span>
              </div>
              <span className="text-[10px] tracking-wider text-gray-800 uppercase font-semibold">Experience</span>
            </div>
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
