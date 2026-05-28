"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Sparkles } from "lucide-react";

// Components
import Preloader from "@/components/Preloader";
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

export default function Home() {
  // Modal states
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-[#0A1628]">
        {/* Preloader Animation */}
        <Preloader />

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
        <Trust />

        {/* Services Section */}
        <Services
          onOpenAssessment={() => setIsAssessmentOpen(true)}
          onOpenChecklist={() => {
            const el = document.getElementById("visa-lounge");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Destinations Section */}
        <Destinations />

        {/* Digital Visa Lounge: SaaS Interactive Tools Section */}
        <section id="visa-lounge" className="py-20 bg-[#0A1628] border-t border-white/5 relative">
          <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#EA580C]/5 blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* Title */}
            <div className="text-center space-y-3 mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold tracking-wider text-orange uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visa Lounge</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
                SaaS-Powered Interactive Tools
              </h2>
              <p className="text-gray-400 text-sm max-w-xl mx-auto font-body">
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
        </section>

        {/* Why Choose Section */}
        <WhyChoose />

        {/* Timeline Process */}
        <Process />

        {/* Partner Universities */}
        <Partners />

        {/* Testimonials */}
        <SuccessStories />

        {/* Stats counters */}
        <Stats />

        {/* Final CTA Assessment Banner */}
        <AssessmentCTA onOpenAssessment={() => setIsAssessmentOpen(true)} />

        {/* Contact form and business info */}
        <Contact />

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
