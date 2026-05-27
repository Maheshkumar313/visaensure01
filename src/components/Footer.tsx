"use client";

import React from "react";
import { Compass, Mail, Phone, MapPin, Send, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050b14] border-t border-white/5 pt-16 pb-8 text-xs text-gray-400 font-body relative overflow-hidden">
      
      {/* Subtle Airplane Trail Animation */}
      <div className="absolute right-[-100px] top-[10%] opacity-15 pointer-events-none select-none">
        <svg
          width="400"
          height="120"
          viewBox="0 0 400 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-[#C9A84C]"
        >
          <path
            d="M10 80 Q 150 10, 300 90 T 390 20"
            strokeWidth="1.5"
            strokeDasharray="6,6"
            className="path-anim"
          />
          {/* Animated plane node */}
          <circle r="4" fill="#C9A84C">
            <animateMotion dur="10s" repeatCount="indefinite" path="M10 80 Q 150 10, 300 90 T 390 20" />
          </circle>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Brand: Column span 4 */}
        <div className="lg:col-span-4 space-y-4">
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="flex items-center gap-2 group cursor-pointer inline-block"
          >
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/visaensureLogoForWebsite/1.png" 
                alt="VisaEnsure Logo" 
                className="h-9 w-auto object-contain hover:scale-105 transition-transform duration-300" 
              />
              <div className="flex flex-col">
                <span className="text-base font-heading tracking-widest font-bold text-white">
                  VISA<span className="text-[#C9A84C]">ENSURE</span>
                </span>
                <span className="text-[8px] tracking-wider text-gray-500 uppercase mt-0.5">
                  Your Trusted Visa Companion
                </span>
              </div>
            </div>
          </a>

          <p className="text-[11px] leading-relaxed text-gray-400 max-w-sm">
            VisaEnsure is a premium global immigration consultancy providing end-to-end visa solutions with Stripe-level security protocols and an unmatched 98.6% approval record.
          </p>

          <div className="space-y-2 text-[10px]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Domalguda Main Road, Liberty Circle, Hyderabad</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <a href="mailto:apply@visaensure.com" className="hover:text-gold transition-colors">apply@visaensure.com</a>
            </div>
          </div>
        </div>

        {/* Services: Column span 3 */}
        <div className="lg:col-span-3 space-y-4 pl-0 lg:pl-6">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-[11px]">
            <li>
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-gold transition-colors">
                Student Visa (F-1/Study Permits)
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-gold transition-colors">
                Work Visas & Opportunity Cards
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-gold transition-colors">
                PR & Skilled Migration (EE/PNP)
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-gold transition-colors">
                Tourist & Short-Term Visitor Visas
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-gold transition-colors">
                English Exam Coaching (IELTS/PTE)
              </a>
            </li>
          </ul>
        </div>

        {/* Destinations: Column span 2 */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">Destinations</h4>
          <ul className="space-y-2 text-[11px]">
            <li>
              <a href="#destinations" onClick={(e) => handleScrollTo(e, "#destinations")} className="hover:text-gold transition-colors">United States</a>
            </li>
            <li>
              <a href="#destinations" onClick={(e) => handleScrollTo(e, "#destinations")} className="hover:text-gold transition-colors">Canada</a>
            </li>
            <li>
              <a href="#destinations" onClick={(e) => handleScrollTo(e, "#destinations")} className="hover:text-gold transition-colors">United Kingdom</a>
            </li>
            <li>
              <a href="#destinations" onClick={(e) => handleScrollTo(e, "#destinations")} className="hover:text-gold transition-colors">Australia</a>
            </li>
            <li>
              <a href="#destinations" onClick={(e) => handleScrollTo(e, "#destinations")} className="hover:text-gold transition-colors">Germany</a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Direct Chat: Column span 3 */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">Newsletter</h4>
          <p className="text-[10px] leading-relaxed">
            Join our weekly VIP circular. Receive current PR draw scores, visa rules, and processing wait lists.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="E.g. rajesh@gmail.com"
              className="flex-1 bg-[#122540] border border-white/10 rounded px-2.5 py-1.5 text-[10px] text-white focus:outline-none focus:border-gold"
            />
            <button
              type="submit"
              className="bg-[#C9A84C] hover:bg-[#DDBB5C] text-[#0A1628] px-2.5 rounded flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Subscribe"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Legal */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500">
        <div>
          &copy; {currentYear} VisaEnsure Platform. All rights reserved. Registered Office Hyderabad, India.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Circular</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:underline">Disclaimers</a>
        </div>
      </div>
      
    </footer>
  );
}
