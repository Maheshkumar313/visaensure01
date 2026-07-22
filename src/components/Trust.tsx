"use client";

import React from "react";
import { Star, ShieldCheck, MapPin, Building, Landmark, Award } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Trust() {
  return (
    <section id="about" className="section-y bg-white border-t border-ink-200 relative">
      <div className="shell">
        <SectionHeading
          eyebrow="Accreditation & trust"
          title="Verified credentials, verifiable outcomes"
          description="Registered, certified, and GDPR-compliant. Your documents are handled under the same standards we'd expect for our own."
        />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          
          {/* Box 1: Verified Google Ratings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card card-hover p-7 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex gap-1.5 text-orange-700">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <h3 className="text-xl font-heading text-ink-900 font-semibold">
                Google Verified Reviews
              </h3>
              <p className="text-ink-600 text-sm leading-relaxed">
                Over 1,200+ clients have rated our Hyderabad office 4.9/5 stars. We are recognized as the city's most professional and transparent consultants.
              </p>
            </div>
            
            <div className="pt-6 border-t border-ink-200 mt-6 flex items-center justify-between text-xs">
              <span className="text-ink-500">RATING</span>
              <strong className="text-ink-900">4.9 / 5.0 (Excellent)</strong>
            </div>
          </motion.div>

          {/* Box 2: Blurred Mock Approval Previews (Emphasizes authenticity) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card card-hover p-7 flex flex-col justify-between overflow-hidden relative group"
          >
            {/* Visual representation of an approval */}
            <div className="space-y-4">
              <div className="w-10 h-10 bg-orange-50 border border-orange-200 rounded-lg flex items-center justify-center text-orange-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading text-ink-900 font-semibold">
                Verifiable Visa Approvals
              </h3>
              
              {/* Document blur container */}
              <div className="relative border border-ink-200 rounded-xl p-3 bg-white/85 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/95 z-10 pointer-events-none" />
                {/* Mock data lines */}
                <div className="space-y-1.5 filter blur-[1px] group-hover:blur-none transition-all duration-500 text-[10px] text-ink-800 font-mono">
                  <div>REGISTRATION: VE-9876-USA</div>
                  <div>OFFICER ID: HYD-02</div>
                  <div>PASS PORT: Z*****89</div>
                  <div>VISA CLASS: F-1 STUDENT</div>
                  <div>ISSUE DATE: 12 MAY 2026</div>
                </div>
              </div>
              
              <p className="text-ink-600 text-sm leading-relaxed">
                We maintain an online registry of our stamped client passports (with confidential client data fully anonymized) for audit.
              </p>
            </div>

            <div className="pt-6 border-t border-ink-200 mt-6 flex items-center justify-between text-xs relative z-20">
              <span className="text-ink-500">DATA PROTECTION</span>
              <strong className="text-ink-900">GDPR Compliant</strong>
            </div>
          </motion.div>

          {/* Box 3: Flagship Hyderabad Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card card-hover p-7 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/images/trust_hq.png" className="w-full h-full object-cover" alt="Hyderabad Office" />
               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
            
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 bg-orange-600/10 border border-orange-600/25 rounded-lg flex items-center justify-center text-orange-600">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading text-ink-900 font-semibold group-hover:text-orange-700 transition-colors">
                Elite Hyderabad HQ
              </h3>
              <p className="text-ink-600 text-sm leading-relaxed font-body">
                Located at Chintalkunta, Hyderabad. Visit our state-of-the-art office featuring counseling lounges, training rooms, and secure document lockers.
              </p>
              
              <div className="flex gap-2 text-xs text-ink-900">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Flat no 402, 4th floor, Avasa's VPR Komitla Residency, Sri Sai Nagar, Jahangir Nagar Colony, Chintalkunta, Hyderabad, Telangana 500074
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-ink-200 mt-6 flex items-center justify-between text-xs relative z-10">
              <span className="text-ink-500">DESK CONSULTANTS</span>
              <strong className="text-orange-700 font-bold">15+ Certified Experts</strong>
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}
