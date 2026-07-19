import React from "react";
import { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractivePlaneWorldMap from "@/components/InteractivePlaneWorldMap";
import { Compass, ShieldCheck, HelpCircle, Users, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Skilled Migration & Permanent Residency (PR) | VisaEnsure",
  description: "Acquire Permanent Residency in Canada, Australia, or New Zealand. Complete points audits, skill assessments, and profile pool management services.",
  keywords: ["permanent residency", "PR visa", "Express Entry", "PNP Canada", "Australia PR Subclass 189", "skilled migration", "immigrate to Canada"],
};

export default function MigrationVisaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black overflow-hidden">
      <TopBar />

      {/* Header / Intro section */}
      <main className="flex-1 py-12 md:py-16 relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-orange-600/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-orange-600/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          {/* Hero Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-orange-600 uppercase bg-orange-50 border border-orange-200/50 px-3 py-1 rounded-full inline-block">
              Permanent Residency & Migration
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-black leading-tight">
              General Skilled Migration Channels
            </h1>
            <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
              Plan your direct resettlement pathways. Click on highlighted countries on the flat map below to check CRS score cutoffs, points criteria, and skill assessment requirements.
            </p>
          </div>

          {/* Interactive Map Component */}
          <section className="bg-white border border-gray-200/80 rounded-3xl p-4 md:p-8 shadow-sm">
            <InteractivePlaneWorldMap visaType="migration" />
          </section>

          {/* Core Support Areas */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {[
              {
                icon: <Scale className="w-6 h-6 text-orange" />,
                title: "Points optimization Audits",
                desc: "We perform granular CRS (Canada) and SkillSelect (Australia) audits, identifying strategies to gain additional points via language exams, partner skills, or regional study."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-orange" />,
                title: "Skills Assessment Case Compilations",
                desc: "Flawless compilation of reference letters, project reports, and academic syllabus to pass assessments by ACS, Engineers Australia, VETASSESS, or WES."
              },
              {
                icon: <Users className="w-6 h-6 text-orange" />,
                title: "Profile Pool Management",
                desc: "Continuous monitoring of Express Entry category draws, Provincial Nominee Program (PNP) openings, and state nominations to submit EOIs instantly."
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

          {/* Quick FAQ Block */}
          <section className="space-y-6 pt-6 border-t border-gray-100">
            <h2 className="text-2xl font-bold font-heading text-black text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "What is the difference between Subclass 189 and 190 in Australia?",
                  a: "Subclass 189 is an independent federal PR visa allowing residence anywhere in Australia. Subclass 190 requires a state government nomination, requiring you to live in that nominating state for your first 2 years."
                },
                {
                  q: "How does the Canada PNP increase my CRS score?",
                  a: "Securing a nomination under a provincial stream automatically awards an additional 600 points to your Express Entry profile, guaranteeing an Invitation to Apply (ITA) in the subsequent federal draw."
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
