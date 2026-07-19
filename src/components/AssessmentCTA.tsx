"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface AssessmentCTAProps {
  onOpenAssessment: () => void;
}

export default function AssessmentCTA({ onOpenAssessment }: AssessmentCTAProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#1A1A1A] border-t border-white/[0.05] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Banner with elite gradient and border */}
        <div className="w-full bg-gradient-to-r from-[#121212] via-[#0A0A0A] to-[#1A1A1A] border border-orange-600/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          {/* Ambient overlay */}
          <div className="absolute right-0 top-0 w-[200px] h-[200px] rounded-full bg-orange-600/8 blur-3xl pointer-events-none" />
          
          <div className="space-y-4 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-semibold tracking-wider text-orange-400 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Direct Consultation Desk</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-white leading-tight">
              Ready To Start Your <br className="hidden sm:inline" />
              Global Journey?
            </h2>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-body">
              Take our interactive 2-minute eligibility check to get a personalized breakdown of your visa success metrics and recommended pathway.
            </p>
          </div>

          <button
            onClick={onOpenAssessment}
            className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-600/25 flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Begin Free Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
