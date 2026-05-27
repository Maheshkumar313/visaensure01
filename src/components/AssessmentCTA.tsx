"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface AssessmentCTAProps {
  onOpenAssessment: () => void;
}

export default function AssessmentCTA({ onOpenAssessment }: AssessmentCTAProps) {
  return (
    <section className="py-16 bg-[#050b14] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Banner with premium gradient and border */}
        <div className="w-full bg-gradient-to-r from-[#122540] to-[#0A1628] border border-gold/25 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          {/* Ambient overlay */}
          <div className="absolute right-0 top-0 w-[200px] h-[200px] rounded-full bg-[#C9A84C]/5 blur-3xl pointer-events-none" />
          
          <div className="space-y-4 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold tracking-wider text-gold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Consultation Desk</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-white leading-tight">
              Ready To Start Your <br className="hidden sm:inline" />
              Global Journey?
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-body">
              Take our interactive 2-minute eligibility check to get a personalized breakdown of your visa success metrics and recommended pathway.
            </p>
          </div>

          <button
            onClick={onOpenAssessment}
            className="px-8 py-4 bg-[#C9A84C] hover:bg-[#DDBB5C] text-[#0A1628] font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Begin Free Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
