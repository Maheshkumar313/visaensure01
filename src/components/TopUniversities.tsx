"use client";

import React, { useState } from "react";
import { universitiesData, countryFlags } from "@/data/universitiesData";
import { Search, MapPin, GraduationCap, ChevronRight } from "lucide-react";

export default function TopUniversities() {
  const [activeCountry, setActiveCountry] = useState<string>("United States");
  const [searchQuery, setSearchQuery] = useState("");

  const countries = Object.keys(universitiesData);
  const currentUniversities = universitiesData[activeCountry as keyof typeof universitiesData];

  const filteredUniversities = currentUniversities.filter((uni) =>
    uni.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#EA580C] uppercase bg-orange-50 border border-orange-200/50 px-3 py-1 rounded-full inline-block">
            Global Institutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-black leading-tight">
            Top Universities by Destination
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
            Explore world-renowned universities across top study destinations. Prepare for your future at these prestigious institutions.
          </p>
        </div>

        {/* Controls Section: Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-2 rounded-2xl md:rounded-full border border-gray-200 shadow-sm">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto p-2">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setActiveCountry(country)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCountry === country
                    ? "bg-[#EA580C] text-white shadow-md shadow-orange-500/20 scale-105"
                    : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="text-lg">{countryFlags[country]}</span>
                <span>{country}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64 px-4 pb-4 md:pb-0 md:pr-4">
            <div className="absolute inset-y-0 left-7 md:left-4 flex items-center pointer-events-none md:pb-0 pb-4">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search universities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/50 focus:border-[#EA580C] transition-all text-black"
            />
          </div>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredUniversities.length > 0 ? (
            filteredUniversities.map((uni, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#EA580C]/50 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 cursor-pointer flex flex-col h-full overflow-hidden"
              >
                {/* Decorative gradient blob on hover */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-orange-600/0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start gap-4 mb-4 relative z-10">
                  {/* University Logo Fallback (UI Avatars) */}
                  <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex-shrink-0 overflow-hidden shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(uni)}&background=random&color=fff&size=128&bold=true&font-size=0.33`}
                      alt={`${uni} logo`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-[#EA580C] transition-colors">
                      {uni}
                    </h3>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500 relative z-10">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{activeCountry}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#EA580C] font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center flex flex-col items-center justify-center space-y-3">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-2">
                <GraduationCap className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">No universities found</h3>
              <p className="text-gray-500 text-sm">We couldn't find any universities matching "{searchQuery}" in {activeCountry}.</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-2 text-[#EA580C] font-medium text-sm hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
