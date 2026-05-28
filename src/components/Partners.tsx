"use client";

import React, { useState } from "react";
import { Landmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PartnerUni {
  name: string;
  location: string;
  rank: string;
}

const partners: Record<string, PartnerUni[]> = {
  USA: [
    { name: "Stanford University", location: "California, USA", rank: "QS Rank #5" },
    { name: "Massachusetts Institute of Tech", location: "Boston, USA", rank: "QS Rank #1" },
    { name: "New York University", location: "New York, USA", rank: "QS Rank #38" },
    { name: "University of Southern California", location: "Los Angeles, USA", rank: "QS Rank #116" },
  ],
  UK: [
    { name: "University of Oxford", location: "Oxford, UK", rank: "QS Rank #3" },
    { name: "University of Cambridge", location: "Cambridge, UK", rank: "QS Rank #2" },
    { name: "Imperial College London", location: "London, UK", rank: "QS Rank #6" },
    { name: "University of Manchester", location: "Manchester, UK", rank: "QS Rank #32" },
  ],
  Canada: [
    { name: "University of Toronto", location: "Toronto, Canada", rank: "QS Rank #21" },
    { name: "University of British Columbia", location: "Vancouver, Canada", rank: "QS Rank #34" },
    { name: "McGill University", location: "Montreal, Canada", rank: "QS Rank #30" },
    { name: "University of Waterloo", location: "Waterloo, Canada", rank: "QS Rank #112" },
  ],
  Australia: [
    { name: "University of Melbourne", location: "Melbourne, Australia", rank: "QS Rank #14" },
    { name: "University of Sydney", location: "Sydney, Australia", rank: "QS Rank #19" },
    { name: "Australian National University", location: "Canberra, Australia", rank: "QS Rank #30" },
    { name: "University of Queensland", location: "Brisbane, Australia", rank: "QS Rank #43" },
  ],
  Europe: [
    { name: "Technical University of Munich", location: "Munich, Germany", rank: "QS Rank #37" },
    { name: "Heidelberg University", location: "Heidelberg, Germany", rank: "QS Rank #79" },
    { name: "ETH Zurich", location: "Zurich, Switzerland", rank: "QS Rank #7" },
    { name: "Sorbonne University", location: "Paris, France", rank: "QS Rank #59" },
  ],
};

export default function Partners() {
  const [activeRegion, setActiveRegion] = useState("USA");
  const list = partners[activeRegion] || [];

  return (
    <section className="py-16 bg-[#0A1628] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#EA580C] uppercase">
            Global Network
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-white">
            Partner Universities & Institutions
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-lg mx-auto">
            Direct application pathways and priority credit transfers with 350+ accredited schools worldwide.
          </p>
        </div>

        {/* Region selector */}
        <div className="flex gap-2 justify-center pb-4 mb-8 border-b border-white/5 overflow-x-auto no-scrollbar">
          {Object.keys(partners).map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                activeRegion === region
                  ? "bg-orange-light border-orange text-[#EA580C]"
                  : "bg-white/5 border-transparent text-gray-300 hover:bg-white/10"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {list.map((uni, index) => (
              <motion.div
                key={`${activeRegion}-${uni.name}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass p-5 rounded-xl border border-white/5 flex flex-col justify-between hover:border-[#EA580C]/35 hover:-translate-y-1 group transition-all duration-300 grayscale hover:grayscale-0 hover:glow-orange"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-[#EA580C]/10 flex items-center justify-center text-gray-400 group-hover:text-orange transition-colors">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-orange transition-colors truncate">
                      {uni.name}
                    </h3>
                    <p className="text-[10px] text-gray-400 mt-1">{uni.location}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] uppercase tracking-wider text-gray-400 font-semibold font-mono">
                  <span>RANKINGS</span>
                  <span className="text-white">{uni.rank}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
