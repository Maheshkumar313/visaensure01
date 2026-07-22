"use client";

import React from "react";
import { MessageSquare, FileText, FileSignature, HelpCircle, CheckCircle, Compass } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const steps = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Elite Profile Assessment",
      desc: "Our senior counselors review your background, verify eligibility points, and recommend the best countries and streams to lock in.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Strategic Document Compilation",
      desc: "We review bank balances, sponsorship paperwork, write SOP drafts, and evaluate credential evaluations (WES/ZAB) to ensure completeness.",
    },
    {
      icon: <FileSignature className="w-5 h-5" />,
      title: "Direct Application Lodgment",
      desc: "We file your profile in online portals (Express Entry, DS-160, CAS/UK portals) with high precision, keeping data secure.",
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      title: "Consular Interview Preparation",
      desc: "We host intensive mock sessions matching visa embassy standards so you can answer confidently and quickly.",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Visa Stamp & Travel Briefing",
      desc: "Collect your stamped passport. We host pre-departure guidance events covering flight bookings, currency, and local accommodation.",
    },
  ];

  return (
    <section id="process" className="section-y relative">
      <div className="shell">
        <SectionHeading
          eyebrow="The pathway"
          title="A structured five-step journey"
          description="From first assessment to pre-departure briefing — you always know which stage you're in and what happens next."
        />

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical progress line */}
          <div className="absolute left-6 sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-orange-200 to-transparent sm:-translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-8 sm:space-y-10">
            {steps.map((st, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-12 w-full ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Numbered node — the step number carries the sequence,
                      so the titles no longer need to repeat it. */}
                  <div
                    className="absolute left-6 sm:left-1/2 top-5 sm:top-1/2 w-9 h-9 rounded-full bg-orange-600 text-white flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20 shadow-[0_0_0_4px_#fff,0_4px_12px_rgba(255,107,0,0.30)]"
                  >
                    {st.icon}
                  </div>

                  {/* Left/Right blank spacing for desktop alignment */}
                  <div className="w-full sm:w-[45%] hidden sm:block" />

                  {/* Content Box */}
                  <div className="w-full sm:w-[45%] pl-14 sm:pl-0">
                    <div className="card card-hover p-6 group">
                      <span className="text-xs font-bold tracking-[0.1em] uppercase text-orange-700">
                        Step {idx + 1}
                      </span>
                      <h3 className="mt-2 text-base font-bold font-heading text-ink-900 group-hover:text-orange-700 transition-colors">
                        {st.title}
                      </h3>
                      <p className="mt-2 text-ink-600 text-sm leading-relaxed font-body">
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
