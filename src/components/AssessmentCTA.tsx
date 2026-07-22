"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface AssessmentCTAProps {
  onOpenAssessment: () => void;
}

export default function AssessmentCTA({ onOpenAssessment }: AssessmentCTAProps) {
  return (
    // No background of its own — it now sits inside the page's single
    // continuous black block alongside Stats.
    <section className="pt-4 pb-24 md:pb-28 relative overflow-hidden">
      <div className="shell relative z-10">
        {/* One saturated orange moment near the end of the page — the only
            place the brand colour is allowed to fill a whole surface. */}
        <div className="w-full rounded-3xl p-9 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden bg-gradient-to-br from-orange-600 to-orange-700 shadow-[0_24px_64px_rgba(255,107,0,0.22)]">
          {/* Ambient light + fine grid for texture */}
          <div className="absolute -right-16 -top-16 w-[320px] h-[320px] rounded-full bg-white/15 blur-3xl pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.10] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          <div className="text-center md:text-left max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-[11px] font-bold tracking-[0.1em] text-white uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct consultation desk</span>
            </div>
            <h2 className="mt-5 t-h2 text-white">
              Ready to start your global journey?
            </h2>
            <p className="mt-4 text-white/85 text-base leading-relaxed font-body">
              Take the 2-minute eligibility check for a personalised breakdown of
              your success odds and recommended pathway.
            </p>
          </div>

          <button
            onClick={onOpenAssessment}
            className="btn btn-invert shrink-0 relative z-10 shadow-e3 group px-7 py-4"
          >
            <span>Begin free assessment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
