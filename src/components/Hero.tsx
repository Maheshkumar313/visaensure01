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
      className="relative bg-white pt-0 pb-16 md:pt-2 md:pb-24 overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* ELITE LAYOUT BACKGROUNDS */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Layer 1: Base white / off-white mesh gradient */}
        <div className="absolute inset-0 bg-radial-gradient from-white via-[#FAFAFA] to-[#F8F9FB]" />

        {/* Layer 2: Floating Orange Gradient Blobs */}
        <motion.div
          animate={{
            y: [0, -35, 15, 0],
            x: [0, 25, -15, 0],
            scale: [1, 1.08, 0.94, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-5%] right-[-5%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#FF6B00]/12 to-[#FFA54F]/5 blur-[120px]"
        />

        <motion.div
          animate={{
            y: [0, 25, -25, 0],
            x: [0, -20, 20, 0],
            scale: [1, 0.93, 1.06, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] left-[-8%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#FF6B00]/9 to-[#FFA54F]/3 blur-[130px]"
        />

        {/* Layer 3: Subtle dark mesh gradient for contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(10,10,10,0.02)_0%,transparent_60%)]" />

        {/* Layer 4: Soft Dotted World Map & Flight Travel Routes */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06] stroke-[#0A0A0A]"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* flight routes */}
          <motion.path
            d="M 850 420 Q 550 180 250 320"
            stroke="#FF6B00"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 850 420 Q 720 220 580 290"
            stroke="#FF6B00"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 850 420 Q 1080 620 1220 700"
            stroke="#FF6B00"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Layer 5: Passport Stamp Graphic Accents (Hyderabad & Entry Stamps) */}
        <div className="absolute top-[18%] left-[8%] opacity-[0.04] rotate-[-12deg] select-none">
          <svg width="130" height="130" viewBox="0 0 100 100" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
            <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="39" />
            <text x="50" y="36" textAnchor="middle" fontSize="6.5" fontWeight="bold" letterSpacing="0.8">IMMIGRATION</text>
            <text x="50" y="52" textAnchor="middle" fontSize="9.5" fontWeight="bold" letterSpacing="1.2">APPROVED</text>
            <text x="50" y="64" textAnchor="middle" fontSize="7" fontWeight="bold">HYDERABAD</text>
            <path d="M 22 70 L 78 70" />
            <text x="50" y="80" textAnchor="middle" fontSize="5" fontWeight="bold">VISAENSURE ENTRY</text>
          </svg>
        </div>

        <div className="absolute bottom-[12%] right-[10%] opacity-[0.035] rotate-[15deg] select-none">
          <svg width="150" height="100" viewBox="0 0 150 100" fill="none" stroke="#0A0A0A" strokeWidth="1.5">
            <rect x="5" y="5" width="140" height="90" rx="8" strokeDasharray="4 2" />
            <rect x="10" y="10" width="130" height="80" rx="6" />
            <text x="75" y="32" textAnchor="middle" fontSize="8.5" fontWeight="bold">DEPARTED / EXIT</text>
            <text x="75" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" letterSpacing="1.5">BORDER CONTROL</text>
            <text x="75" y="76" textAnchor="middle" fontSize="8" fontWeight="bold">CLASS: SKILLED / STUDENT</text>
          </svg>
        </div>

        {/* Layer 6: Animated Light Streaks */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ left: "-40%", top: "15%", opacity: 0 }}
            animate={{ left: "140%", top: "35%", opacity: [0, 0.35, 0.35, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatDelay: 4 }}
            className="absolute w-[500px] h-[1.5px] bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent rotate-[-12deg]"
          />
          <motion.div
            initial={{ left: "-40%", top: "50%", opacity: 0 }}
            animate={{ left: "140%", top: "70%", opacity: [0, 0.25, 0.25, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", repeatDelay: 6 }}
            className="absolute w-[700px] h-[1.5px] bg-gradient-to-r from-transparent via-[#FFA54F]/20 to-transparent rotate-[-12deg]"
          />
        </div>

        {/* Layer 7: Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#FF6B00]/25"
              style={{
                left: `${20 + i * 15}%`,
                top: `${25 + (i % 3) * 22}%`,
              }}
              animate={{
                y: [0, -25, 25, 0],
                x: [0, 12, -12, 0],
                opacity: [0.25, 0.6, 0.25],
              }}
              transition={{
                duration: 6 + i * 2,
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
