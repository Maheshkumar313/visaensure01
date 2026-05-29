"use client";

import React from "react";
import { Star, ShieldCheck, MapPin, Building, Landmark, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Trust() {
  return (
    <section id="about" className="py-20 bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#EA580C] uppercase">
            Accreditation & Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-black">
            Stripe-Level Security & High-Trust Approvals
          </h2>
          <p className="text-gray-800 text-sm max-w-xl mx-auto">
            We hold direct registrations and certifications to process your files securely, keeping data private and outcomes highly predictable.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Box 1: Verified Google Ratings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 flex flex-col justify-between hover:border-orange/30 transition-all"
          >
            <div className="space-y-4">
              <div className="flex gap-1.5 text-[#EA580C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <h3 className="text-xl font-heading text-black font-semibold">
                Google Verified Reviews
              </h3>
              <p className="text-gray-800 text-xs leading-relaxed">
                Over 1,200+ clients have rated our Hyderabad office 4.9/5 stars. We are recognized as the city's most professional and transparent consultants.
              </p>
            </div>
            
            <div className="pt-6 border-t border-gray-200 mt-6 flex items-center justify-between text-xs">
              <span className="text-gray-800">RATING</span>
              <strong className="text-black">4.9 / 5.0 (Excellent)</strong>
            </div>
          </motion.div>

          {/* Box 2: Blurred Mock Approval Previews (Emphasizes authenticity) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 flex flex-col justify-between hover:border-orange/30 transition-all overflow-hidden relative group"
          >
            {/* Visual representation of an approval */}
            <div className="space-y-4">
              <div className="w-10 h-10 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center text-green-500">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading text-black font-semibold">
                Verifiable Visa Approvals
              </h3>
              
              {/* Document blur container */}
              <div className="relative border border-gray-200 rounded-xl p-3 bg-white/85 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1628]/95 z-10 pointer-events-none" />
                <div className="absolute top-2 right-2 bg-green-500 text-black text-[9px] font-extrabold tracking-wider px-2 py-0.5 rounded-full z-20 uppercase animate-pulse">
                  APPROVED
                </div>
                
                {/* Mock data lines */}
                <div className="space-y-1.5 filter blur-[1px] group-hover:blur-none transition-all duration-500 text-[10px] text-gray-800 font-mono">
                  <div>REGISTRATION: VE-9876-USA</div>
                  <div>OFFICER ID: HYD-02</div>
                  <div>PASS PORT: Z*****89</div>
                  <div>VISA CLASS: F-1 STUDENT</div>
                  <div>ISSUE DATE: 12 MAY 2026</div>
                </div>
              </div>
              
              <p className="text-gray-800 text-xs leading-relaxed">
                We maintain an online registry of our stamped client passports (with confidential client data fully anonymized) for audit.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200 mt-6 flex items-center justify-between text-xs relative z-20">
              <span className="text-gray-800">DATA PROTECTION</span>
              <strong className="text-black">GDPR Compliant</strong>
            </div>
          </motion.div>

          {/* Box 3: Flagship Hyderabad Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-2xl p-6 flex flex-col justify-between hover:border-orange/30 transition-all relative overflow-hidden group"
          >
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/images/trust_hq.png" className="w-full h-full object-cover" alt="Hyderabad Office" />
               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
            
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 bg-[#EA580C]/10 border border-[#EA580C]/25 rounded-lg flex items-center justify-center text-[#EA580C]">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading text-black font-semibold group-hover:text-[#EA580C] transition-colors">
                Premium Hyderabad HQ
              </h3>
              <p className="text-gray-800 text-xs leading-relaxed font-body">
                Located near Saduram Eye Hospital at Liberty Circle, Hyderabad. Visit our state-of-the-art office featuring counseling lounges, training rooms, and secure document lockers.
              </p>
              
              <div className="flex gap-2 text-xs text-gray-900">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  #1 Floor, Domalguda Main Road, Liberty Circle, Hyderabad - 500029
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 mt-6 flex items-center justify-between text-xs relative z-10">
              <span className="text-gray-800">DESK CONSULTANTS</span>
              <strong className="text-[#EA580C] font-bold">15+ Certified Experts</strong>
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}
