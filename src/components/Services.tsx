"use client";

import React from "react";
import { GraduationCap, Briefcase, Globe2, Plane, Landmark, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServicesProps {
  onOpenAssessment: () => void;
  onOpenChecklist: () => void;
}

export default function Services({ onOpenAssessment, onOpenChecklist }: ServicesProps) {
  const services = [
    {
      icon: <GraduationCap className="w-8 h-8 text-[#FF6B00]" />,
      title: "Student Visa",
      desc: "Apply to prestigious universities globally. Complete guidance on admissions, I-20, CAS, financial proof audits, and consular interviews.",
      linkId: "student-visa",
      image: "/images/services_student.png",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#FF6B00]" />,
      title: "Work Visa",
      desc: "Secure Skilled Worker permits, H-1B filings, and opportunity cards. Build a long-term international career with certified sponsorship reviews.",
      linkId: "work-visa",
      image: "/images/services_work.png",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-[#FF6B00]" />,
      title: "PR & Migration",
      desc: "Permanent residency pathways through Canada Express Entry/PNP draw and Australia General Skilled Migration (Subclass 189/190).",
      linkId: "migration-visa",
      image: "/images/services_pr.png",
    },
    {
      icon: <Plane className="w-8 h-8 text-[#FF6B00]" />,
      title: "Tourist Visa",
      desc: "Leisure, business meetings, and family visits. Detailed customized itineraries, dummy bookings, and strong tie evaluation audits.",
      linkId: "tourist-visa",
      image: "/images/services_tourist.png",
    },
    {
      icon: <Landmark className="w-8 h-8 text-[#FF6B00]" />,
      title: "Business Visa",
      desc: "Investor streams, startup pathways, and trade permits. Comprehensive commercial audits for entrepreneurs seeking corporate expansions.",
      linkId: "business-visa",
      image: "/images/services_business.png",
    },
    {
      icon: <Users className="w-8 h-8 text-[#FF6B00]" />,
      title: "Dependent Visa",
      desc: "Bring your family abroad. Secure spousal open work permits and child study permissions alongside your primary visa.",
      linkId: "dependent-visa",
      image: "/images/services_dependent.png",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-[30%] right-[5%] w-[350px] h-[350px] rounded-full bg-[#FF6B00]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#FF6B00] uppercase">
            Platform Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-black">
            Premium Visa & Immigration Programs
          </h2>
          <p className="text-gray-800 text-sm max-w-xl mx-auto">
            Expertly curated services structured to deliver high success rates, using advanced profiling and digital checklist technology.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-5 rounded-2xl flex flex-col justify-between group hover:border-[#FF6B00]/35 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden glow-orange-hover"
            >
              <div className="space-y-3">
                {/* Image Banner wrapped in Link */}
                {srv.image ? (
                  <Link href={`/services/${srv.linkId}`} className="block w-full h-36 md:h-44 rounded-xl overflow-hidden mb-4 border border-gray-200 relative shadow-inner cursor-pointer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={srv.image} alt={srv.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-black/40 backdrop-blur-md border border-gray-300 rounded-lg flex items-center justify-center group-hover:bg-[#FF6B00]/30 group-hover:border-[#FF6B00]/50 transition-all duration-300">
                      {React.cloneElement(srv.icon as React.ReactElement<any>, { className: "w-5 h-5 text-[#FF6B00]" })}
                    </div>
                  </Link>
                ) : (
                  <div className="w-14 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center group-hover:bg-[#FF6B00]/10 group-hover:border-[#FF6B00]/30 transition-all duration-300">
                    {srv.icon}
                  </div>
                )}
                
                {/* Title wrapped in Link */}
                <Link href={`/services/${srv.linkId}`}>
                  <h3 className="text-xl font-heading text-black font-bold group-hover:text-[#FF6B00] transition-colors mt-2 cursor-pointer inline-block">
                    {srv.title}
                  </h3>
                </Link>
                <p className="text-gray-800 text-xs leading-relaxed font-body">
                  {srv.desc}
                </p>
              </div>

              {/* Action Links */}
              <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-semibold">
                <button
                  onClick={onOpenAssessment}
                  className="text-gray-900 hover:text-black transition-colors cursor-pointer"
                >
                  Verify Eligibility
                </button>
                <Link
                  href={`/services/${srv.linkId}`}
                  className="text-[#FF6B00] flex items-center gap-1 hover:text-black transition-all cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
