import React from "react";
import { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractivePlaneWorldMap from "@/components/InteractivePlaneWorldMap";
import TopUniversities from "@/components/TopUniversities";
import { GraduationCap, Landmark, HelpCircle, CheckCircle, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student Visa & Global Study Services | VisaEnsure",
  description: "Explore top study destinations globally using our interactive world map. Complete assistance for USA, UK, Canada, Australia, and Germany student visas.",
  keywords: ["study abroad", "student visa", "F1 visa", "study in UK", "study in Canada", "study in Australia", "university admissions"],
};

export default function StudentVisaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-ink-900 overflow-hidden">
      <TopBar />

      {/* Header / Intro section */}
      <main className="flex-1 py-12 md:py-16 relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-orange-600/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-orange-600/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 relative z-10">
          {/* Back to Home Button */}
          <div className="pt-2">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 hover:text-orange-700 transition-colors group"
            >
              <div className="p-2 rounded-full bg-white shadow-sm border border-ink-200 group-hover:border-orange-600/30 group-hover:bg-orange-600/5 transition-all duration-300">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              </div>
              Back to Home
            </Link>
          </div>

          {/* Hero Header */}
          <div className="space-y-6 text-center max-w-4xl mx-auto mt-4">
            <span className="eyebrow">
              Student Visa Programs
            </span>
            <h1 className="t-display text-ink-900">
              Global Higher Education Pathways
            </h1>
            <span className="accent-bar mx-auto" />
            <p className="t-lead">
              Click on the highlighted countries on the flat map below to explore top universities, admission criteria, and work permissions for your target study destination.
            </p>
          </div>

          {/* Interactive Map Component */}
          <section className="card p-4 md:p-8">
            <InteractivePlaneWorldMap visaType="student" />
          </section>

          {/* Core Support Areas */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {[
              {
                icon: <GraduationCap className="w-6 h-6 text-orange-600" />,
                title: "University Selection & Shortlisting",
                desc: "We match your academic profile, budget, and post-study career goals with high-ranking universities across the US, UK, Canada, and Australia."
              },
              {
                icon: <Landmark className="w-6 h-6 text-orange-600" />,
                title: "Financial Auditing & Verification",
                desc: "Air-tight auditing of your liquid asset statements, education loans, and sponsor documentation to satisfy consular requirements."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
                title: "Consular Interview Simulations",
                desc: "One-on-one mock interview sessions focusing on statement of purpose, intent verification, and positive body language."
              }
            ].map((item, idx) => (
              <div key={idx} className="card card-hover p-8 space-y-4 group">
                <div className="w-12 h-12 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="t-h4 text-ink-900">{item.title}</h3>
                <p className="t-body text-[0.8125rem]">{item.desc}</p>
              </div>
            ))}
          </section>

          {/* Top Universities Section */}
          <TopUniversities />

          {/* Quick FAQ Block */}
          <section className="space-y-6 pt-6 border-t border-ink-100">
            <h2 className="t-h2 text-ink-900 text-center">Frequently Asked Questions</h2>
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
                <div key={i} className="card p-5 space-y-2">
                  <h4 className="t-h4 text-ink-900 flex items-start gap-2">
                    <HelpCircle className="w-4.5 h-4.5 text-orange-600 shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="t-body text-[0.8125rem] pl-6">{faq.a}</p>
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
