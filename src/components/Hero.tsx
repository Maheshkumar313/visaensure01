"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Compass, ShieldAlert, Award, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

// Load Globe3D dynamically to avoid SSR errors
const Globe3D = dynamic(() => import("./Globe3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[350px] md:h-[500px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EA580C]"></div>
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
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white via-white to-white py-16 overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-[#EA580C]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-white/30 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Messaging */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 text-center lg:text-left"
        >
          {/* Tagline Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold tracking-wider text-[#EA580C] uppercase">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>Premium Global Immigration</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black leading-tight"
          >
            Move Beyond Borders <br className="hidden sm:inline" />
            With <span className="text-[#EA580C] bg-gradient-to-r from-[#EA580C] to-[#dfbf65] bg-clip-text text-transparent">Absolute Confidence</span>
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
              className="w-full sm:w-auto px-8 py-4 bg-[#EA580C] hover:bg-[#F97316] text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-[#EA580C]/25 flex items-center justify-center gap-2 hover:shadow-2xl cursor-pointer"
            >
              <span>Get Free Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-white border border-white/15 rounded-full text-black font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-1 hover:border-orange/30 cursor-pointer"
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
                <Users className="w-4 h-4 text-orange shrink-0" />
                <span>10K+</span>
              </div>
              <span className="text-[10px] tracking-wider text-gray-800 uppercase font-semibold">Clients Served</span>
            </div>
            <div className="text-center lg:text-left space-y-0.5">
              <div className="text-xl md:text-2xl font-bold font-heading text-[#EA580C] flex items-center justify-center lg:justify-start gap-1">
                <Award className="w-4 h-4 text-orange shrink-0" />
                <span>98.6%</span>
              </div>
              <span className="text-[10px] tracking-wider text-gray-800 uppercase font-semibold">Success Rate</span>
            </div>
            <div className="text-center lg:text-left space-y-0.5">
              <div className="text-xl md:text-2xl font-bold font-heading text-black flex items-center justify-center lg:justify-start gap-1">
                <Globe className="w-4 h-4 text-orange shrink-0" />
                <span>50+</span>
              </div>
              <span className="text-[10px] tracking-wider text-gray-800 uppercase font-semibold">Countries</span>
            </div>
            <div className="text-center lg:text-left space-y-0.5">
              <div className="text-xl md:text-2xl font-bold font-heading text-black flex items-center justify-center lg:justify-start gap-1">
                <ShieldAlert className="w-4 h-4 text-orange shrink-0" />
                <span>5+ Yrs</span>
              </div>
              <span className="text-[10px] tracking-wider text-gray-800 uppercase font-semibold">Experience</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Visual Globe */}
        <div className="relative w-full flex items-center justify-center">
          <Globe3D />
        </div>
      </div>
    </section>
  );
}
