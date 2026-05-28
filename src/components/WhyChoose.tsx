"use client";

import React from "react";
import { UserCheck, Award, Zap, DollarSign, ShieldAlert, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChoose() {
  const points = [
    {
      icon: <UserCheck className="w-6 h-6 text-orange" />,
      title: "Personalized Support",
      desc: "Every applicant gets a dedicated Senior Case Manager. We evaluate your unique profile to build a custom application strategy, leaving no gaps.",
    },
    {
      icon: <Award className="w-6 h-6 text-orange" />,
      title: "Experienced Consultants",
      desc: "Our advisors have spent 5+ years handling complex cases, including Refusals, Gap justifications, Backlogs, and Sponsorship audits.",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange" />,
      title: "Fast Processing",
      desc: "We leverage automated check tools, priority filing queues, and direct consulate portal tracking to deliver results weeks ahead of standard schedules.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-orange" />,
      title: "Transparent Pricing",
      desc: "No hidden charges, no middleman commissions. We offer flat modular consulting rates and provide verified bank invoices for all transactions.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-orange" />,
      title: "High Approval Rate",
      desc: "Our strict pre-auditing checks ensure we only submit files that meet 95%+ criteria, yielding an outstanding historical visa stamp record of 98.6%.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-orange" />,
      title: "End-to-End Assistance",
      desc: "From initial IELTS/PTE preparation and bank balance auditing to visa filing, pre-departure briefings, and airport pickup coordinates.",
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-[#0A1628] border-t border-white/5 relative">
      <div className="absolute top-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-[#EA580C]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Title */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#EA580C] uppercase">
            The VisaEnsure Distinction
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
            Why Discerning Applicants Choose Us
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Combining luxury-grade client service with cutting-edge technology platforms to ensure your transition abroad is flawless.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl space-y-4 hover:border-orange/30 hover:scale-[1.02] transition-all relative overflow-hidden group"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EA580C]/0 via-[#EA580C]/0 to-[#EA580C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon wrapper */}
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-orange-light group-hover:border-orange/30 transition-all duration-300">
                {pt.icon}
              </div>

              <h3 className="text-lg font-heading text-white font-bold group-hover:text-orange transition-colors">
                {pt.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-body">
                {pt.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
