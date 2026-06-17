"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Sparkles } from "lucide-react";

// Components
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import Partners from "@/components/Partners";
import SuccessStories from "@/components/SuccessStories";
import Stats from "@/components/Stats";
import AssessmentCTA from "@/components/AssessmentCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Interactive Tools (placed in Digital Visa Lounge)
import ComparisonTool from "@/components/ComparisonTool";
import Calculator from "@/components/Calculator";
import ChecklistGenerator from "@/components/ChecklistGenerator";

// Floating / Modal utilities
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import AIChat from "@/components/AIChat";
import ExitIntentPopup from "@/components/ExitIntentPopup";

// Modals
import BookingModal from "@/components/BookingModal";
import EligibilityChecker from "@/components/EligibilityChecker";
import StatusTracker from "@/components/StatusTracker";

// Scroll Transition Wrapper
import SectionReveal from "@/components/SectionReveal";

export default function Home() {
  // Modal states
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen relative overflow-hidden bg-white">
        {/* Premium Dynamic Orange & White Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FF6B00]/20 to-[#FF6B00]/0 blur-[100px] mix-blend-multiply" />
          <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#FF6B00]/15 to-transparent blur-[120px] mix-blend-multiply" />
          <div className="absolute bottom-[10%] right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-tl from-[#FF6B00]/10 to-transparent blur-[150px] mix-blend-multiply" />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[100px]" />
        </div>
        {/* World Map Background overlay across light sections (subtle 1.5% opacity) */}
        <div 
          className="fixed inset-0 opacity-[0.015] select-none pointer-events-none z-0"
          style={{
            backgroundImage: "url('/images/world-map.svg')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "repeat-y"
          }}
        />


        {/* Header Block */}
        <TopBar />
        <Navbar
          onOpenAssessment={() => setIsAssessmentOpen(true)}
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenTracker={() => setIsTrackerOpen(true)}
        />

        {/* Hero Section */}
        <Hero
          onOpenAssessment={() => setIsAssessmentOpen(true)}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Trust Section */}
        <SectionReveal className="bg-transparent relative z-10">
          <Trust />
        </SectionReveal>

        {/* Services Section */}
        <SectionReveal className="bg-[#F8F9FA]/65 backdrop-blur-2xl border-y border-[#FF6B00]/4 relative z-10">
          <Services
            onOpenAssessment={() => setIsAssessmentOpen(true)}
            onOpenChecklist={() => {
              const el = document.getElementById("visa-lounge");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </SectionReveal>

        {/* Destinations Section (Featured Countries) */}
        <SectionReveal className="bg-premium-dark text-white relative z-10">
          <Destinations />
        </SectionReveal>

        {/* Digital Visa Lounge: SaaS Interactive Tools Section */}
        <SectionReveal id="visa-lounge" className="py-20 bg-transparent relative overflow-hidden z-10">
          <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#FF6B00]/4 blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            {/* Title */}
            <div className="text-center space-y-3 mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-semibold tracking-wider text-[#FF6B00] uppercase font-body">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Visa Lounge</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-black">
                SaaS-Powered Interactive Tools
              </h2>
              <p className="text-gray-800 text-sm max-w-xl mx-auto font-body">
                Verify costs, deadlines, and documentation specifications instantly using our client-facing calculators.
              </p>
            </div>

            {/* Grid display for the three advanced utilities */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <ComparisonTool />
              <Calculator />
              <ChecklistGenerator />
            </div>
          </div>
        </SectionReveal>

        {/* Why Choose Section */}
        <SectionReveal className="bg-transparent relative z-10">
          <WhyChoose />
        </SectionReveal>

        {/* Timeline Process */}
        <SectionReveal className="bg-[#F8F9FA]/65 backdrop-blur-2xl border-y border-[#FF6B00]/4 relative z-10">
          <Process />
        </SectionReveal>

        {/* Partner Universities */}
        <SectionReveal className="bg-transparent relative z-10">
          <Partners />
        </SectionReveal>

        {/* Testimonials */}
        <SectionReveal className="bg-transparent relative z-10">
          <SuccessStories />
        </SectionReveal>

        {/* Stats counters */}
        <SectionReveal className="bg-premium-dark text-white relative z-10">
          <Stats />
        </SectionReveal>

        {/* Final CTA Assessment Banner */}
        <SectionReveal className="bg-premium-dark text-white relative z-10">
          <AssessmentCTA onOpenAssessment={() => setIsAssessmentOpen(true)} />
        </SectionReveal>

        {/* Contact form and business info */}
        <SectionReveal className="bg-[#F8F9FA]/65 backdrop-blur-2xl border-y border-[#FF6B00]/4 relative z-10">
          <Contact />
        </SectionReveal>

        {/* Footer */}
        <Footer />

        {/* Floating Widgets */}
        <WhatsAppButton />
        <AIChat />
        <ExitIntentPopup />

        {/* Dialog Overlays */}
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        <EligibilityChecker isOpen={isAssessmentOpen} onClose={() => setIsAssessmentOpen(false)} />
        <StatusTracker isOpen={isTrackerOpen} onClose={() => setIsTrackerOpen(false)} />
      </div>
    </SmoothScroll>
  );
}
