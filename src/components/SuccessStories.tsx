"use client";

import React, { useState, useEffect } from "react";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  avatar: string;
  image?: string;
  country: string;
  visaType: string;
  story: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav Sharma",
    avatar: "AS",
    image: "/images/test_aarav.png",
    country: "USA",
    visaType: "F-1 Student Visa (Stanford)",
    story: "VisaEnsure handled my application to Stanford with absolute premium care. From SOP editing to mock consular interview drills, the process was seamless. I got my F-1 stamped in Hyderabad within 15 days!",
  },
  {
    name: "Sneha Reddy",
    avatar: "SR",
    image: "/images/test_sneha.png",
    country: "Canada",
    visaType: "Express Entry PR",
    story: "My CRS points were at 480, and I was losing hope. VisaEnsure guided me to secure a Provincial Nomination (PNP) from Ontario, boosting my score by 600 points. Today, I am living my dream in Toronto as a Permanent Resident.",
  },
  {
    name: "Mohammed Ibrahim",
    avatar: "MI",
    image: "/images/test_mohammed.png",
    country: "UK",
    visaType: "Skilled Worker Visa (London)",
    story: "Getting a job offer in London was one thing, but auditing the Certificate of Sponsorship (CoS) and filing the UK work permit was stressful. VisaEnsure took over completely, lodging my visa in Priority. Fast approval!",
  },
  {
    name: "Pooja Hegde",
    avatar: "PH",
    image: "/images/test_pooja.png",
    country: "Germany",
    visaType: "Opportunity Card (Chancenkarte)",
    story: "The new Germany Chancenkarte points system was confusing, but VisaEnsure's eligibility questionnaire and document auditing made it simple. My blocked account and visa filing were completed in record time.",
  },
];

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#1A1A1A] border-t border-white/[0.05] relative overflow-hidden">
      {/* Subtle orange ambient glow */}
      <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#FF6B00]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-10">
        
        {/* Title */}
        <div className="space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#FF6B00] uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
            Client Success Stories
          </h2>
        </div>

        {/* Carousel Window */}
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[300px] flex flex-col justify-between items-center shadow-2xl">
          <div className="absolute top-6 left-6 text-[#FF6B00]/5">
            <Quote className="w-20 h-20 rotate-180" />
          </div>

          <div className="relative z-10 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row gap-8 items-center text-left"
              >
                {/* Image (Optional) */}
                {current.image && (
                  <div className="w-full md:w-1/3 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={current.image} alt={current.name} className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-2xl border border-white/[0.08]" />
                  </div>
                )}
                
                <div className={`w-full space-y-6 ${current.image ? 'md:w-2/3' : 'text-center'}`}>
                  {/* Stars */}
                  <div className={`flex gap-1 text-[#FF6B00] ${current.image ? 'justify-start' : 'justify-center'}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Story */}
                  <p className={`text-gray-200 text-sm md:text-base leading-relaxed italic font-body ${!current.image ? 'max-w-2xl mx-auto' : ''}`}>
                    "{current.story}"
                  </p>

                  {/* Profile */}
                  <div className={`flex items-center gap-3 ${current.image ? 'justify-start' : 'justify-center'}`}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#1A1A1A] flex items-center justify-center font-bold text-black text-sm">
                      {current.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{current.name}</h4>
                      <span className="text-[10px] text-[#FF6B00] font-semibold tracking-wide uppercase">
                        {current.visaType}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex gap-4 mt-8 relative z-20">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[#FF6B00]/40 text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[#FF6B00]/40 text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
