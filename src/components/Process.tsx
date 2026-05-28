"use client";

import React from "react";
import { MessageSquare, FileText, FileSignature, HelpCircle, CheckCircle, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "1. Premium Profile Assessment",
      desc: "Our senior counselors review your background, verify eligibility points, and recommend the best countries and streams to lock in.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "2. Strategic Document Compilation",
      desc: "We review bank balances, sponsorship paperwork, write SOP drafts, and evaluate credential evaluations (WES/ZAB) to ensure completeness.",
    },
    {
      icon: <FileSignature className="w-5 h-5" />,
      title: "3. Direct Application Lodgment",
      desc: "We file your profile in online portals (Express Entry, DS-160, CAS/UK portals) with high precision, keeping data secure.",
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      title: "4. Consular Interview Preparation",
      desc: "We host intensive mock sessions matching visa embassy standards so you can answer confidently and quickly.",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "5. Visa Stamp & Travel Briefing",
      desc: "Collect your stamped passport. We host pre-departure guidance events covering flight bookings, currency, and local accommodation.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#050b14] border-t border-white/5 relative">
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#EA580C]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Title */}
        <div className="text-center space-y-3 mb-20">
          <span className="text-xs font-semibold tracking-widest text-[#EA580C] uppercase">
            The Pathway
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
            Our Structured Success Journey
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            From Hyderabad to the world — a systematic 5-step process designed to achieve approvals with absolute peace of mind.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical progress line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-[1px] bg-white/10 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-6 top-2 bottom-2 w-[1px] bg-white/10 sm:hidden" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((st, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-12 w-full ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon Node */}
                  <div className="absolute left-6 sm:left-1/2 top-1.5 sm:top-1/2 w-8 h-8 rounded-full bg-[#0A1628] border border-[#EA580C] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20 text-[#EA580C] shadow-lg shadow-[#EA580C]/10 animate-float" style={{ animationDelay: `${idx * 0.5}s` }}>
                    {st.icon}
                  </div>

                  {/* Left/Right Blank spacing for desktop alignment */}
                  <div className="w-full sm:w-[45%] hidden sm:block" />

                  {/* Content Box */}
                  <div className="w-full sm:w-[45%] pl-12 sm:pl-0">
                    <div className="glass p-5 rounded-2xl border border-white/5 hover:border-orange/30 transition-all space-y-2.5">
                      <h3 className="text-base font-bold font-heading text-white hover:text-orange transition-colors">
                        {st.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed font-body">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
