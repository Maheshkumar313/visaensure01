import React from "react";
import { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractivePlaneWorldMap from "@/components/InteractivePlaneWorldMap";
import TopUniversities from "@/components/TopUniversities";
import { GraduationCap, Landmark, HelpCircle, CheckCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Visa & Global Study Services | VisaEnsure",
  description: "Explore top study destinations globally using our interactive world map. Complete assistance for USA, UK, Canada, Australia, and Germany student visas.",
  keywords: ["study abroad", "student visa", "F1 visa", "study in UK", "study in Canada", "study in Australia", "university admissions"],
};

export default function StudentVisaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black overflow-hidden">
      <TopBar />

      {/* Header / Intro section */}
      <main className="flex-1 py-12 md:py-16 relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-[#EA580C]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-[#EA580C]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          {/* Hero Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-[#EA580C] uppercase bg-orange-50 border border-orange-200/50 px-3 py-1 rounded-full inline-block">
              Student Visa Programs
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-black leading-tight">
              Global Higher Education Pathways
            </h1>
            <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
              Click on the highlighted countries on the flat map below to explore top universities, admission criteria, and work permissions for your target study destination.
            </p>
          </div>

          {/* Interactive Map Component */}
          <section className="bg-white border border-gray-200/80 rounded-3xl p-4 md:p-8 shadow-sm">
            <InteractivePlaneWorldMap visaType="student" />
          </section>

          {/* Core Support Areas */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {[
              {
                icon: <GraduationCap className="w-6 h-6 text-orange" />,
                title: "University Selection & Shortlisting",
                desc: "We match your academic profile, budget, and post-study career goals with high-ranking universities across the US, UK, Canada, and Australia."
              },
              {
                icon: <Landmark className="w-6 h-6 text-orange" />,
                title: "Financial Auditing & Verification",
                desc: "Air-tight auditing of your liquid asset statements, education loans, and sponsor documentation to satisfy consular requirements."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-orange" />,
                title: "Consular Interview Simulations",
                desc: "One-on-one mock interview sessions focusing on statement of purpose, intent verification, and positive body language."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-150 p-6 rounded-2xl space-y-3 hover:border-orange/20 transition-all">
                <div className="w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-black font-heading">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </section>

          {/* Top Universities Section */}
          <TopUniversities />

          {/* Quick FAQ Block */}
          <section className="space-y-6 pt-6 border-t border-gray-100">
            <h2 className="text-2xl font-bold font-heading text-black text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "Can I work while studying abroad?",
                  a: "Yes, in most destinations (US, Canada, UK, Australia), international students can work up to 20 hours per week during academic semesters and full-time during vacations."
                },
                {
                  q: "What is an I-20 or CAS document?",
                  a: "An I-20 (US) or CAS (UK) is the official Certificate of Eligibility issued by an approved institution certifying your acceptance, academic program, and estimated expenses."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 p-5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-black flex items-start gap-2">
                    <HelpCircle className="w-4.5 h-4.5 text-orange shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-gray-600 pl-6 leading-relaxed font-body">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
