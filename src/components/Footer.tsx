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
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 text-xs text-gray-800 font-body relative overflow-hidden">
      
      {/* Subtle Airplane Trail Animation */}
      <div className="absolute right-[-100px] top-[10%] opacity-15 pointer-events-none select-none">
        <svg
          width="400"
          height="120"
          viewBox="0 0 400 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-[#EA580C]"
        >
          <path
            d="M10 80 Q 150 10, 300 90 T 390 20"
            strokeWidth="1.5"
            strokeDasharray="6,6"
            className="path-anim"
          />
          {/* Animated plane node */}
          <circle r="4" fill="#EA580C">
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
                <span className="text-base font-heading tracking-widest font-bold text-black">
                  VISA<span className="text-[#EA580C]">ENSURE</span>
                </span>
                <span className="text-[8px] tracking-wider text-gray-800 uppercase mt-0.5">
                  Your Trusted Visa Companion
                </span>
              </div>
            </div>
          </a>

          <p className="text-[11px] leading-relaxed text-gray-800 max-w-sm">
            VisaEnsure is a premium global immigration consultancy providing end-to-end visa solutions with Stripe-level security protocols and an unmatched 98.6% approval record.
          </p>

          <div className="space-y-2 text-[10px]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Domalguda Main Road, Liberty Circle, Hyderabad</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#EA580C]" />
              <a href="mailto:apply@visaensure.com" className="hover:text-[#EA580C] transition-colors">apply@visaensure.com</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <a href="https://facebook.com/visaensure" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#EA580C] transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com/visaensure" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#EA580C] transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com/company/visaensure" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#EA580C] transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://x.com/visaensure" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#EA580C] transition-colors" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
        </div>

        {/* Services: Column span 3 */}
        <div className="lg:col-span-3 space-y-4 pl-0 lg:pl-6">
          <h4 className="text-black text-xs font-bold uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-[11px]">
            <li>
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-[#EA580C] transition-colors">
                Student Visa (F-1/Study Permits)
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-[#EA580C] transition-colors">
                Work Visas & Opportunity Cards
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-[#EA580C] transition-colors">
                PR & Skilled Migration (EE/PNP)
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-[#EA580C] transition-colors">
                Tourist & Short-Term Visitor Visas
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-[#EA580C] transition-colors">
                English Exam Coaching (IELTS/PTE)
              </a>
            </li>
          </ul>
        </div>

        {/* Destinations: Column span 2 */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-black text-xs font-bold uppercase tracking-wider">Destinations</h4>
          <ul className="space-y-2 text-[11px]">
            <li>
              <a href="#destinations" onClick={(e) => handleScrollTo(e, "#destinations")} className="hover:text-[#EA580C] transition-colors">United States</a>
            </li>
            <li>
              <a href="#destinations" onClick={(e) => handleScrollTo(e, "#destinations")} className="hover:text-[#EA580C] transition-colors">Canada</a>
            </li>
            <li>
              <a href="#destinations" onClick={(e) => handleScrollTo(e, "#destinations")} className="hover:text-[#EA580C] transition-colors">United Kingdom</a>
            </li>
            <li>
              <a href="#destinations" onClick={(e) => handleScrollTo(e, "#destinations")} className="hover:text-[#EA580C] transition-colors">Australia</a>
            </li>
            <li>
              <a href="#destinations" onClick={(e) => handleScrollTo(e, "#destinations")} className="hover:text-[#EA580C] transition-colors">Germany</a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Direct Chat: Column span 3 */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-black text-xs font-bold uppercase tracking-wider">Newsletter</h4>
          <p className="text-[10px] leading-relaxed">
            Join our weekly VIP circular. Receive current PR draw scores, visa rules, and processing wait lists.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="E.g. rajesh@gmail.com"
              className="flex-1 bg-white border border-gray-200 rounded px-2.5 py-1.5 text-[10px] text-black focus:outline-none focus:border-[#EA580C]"
            />
            <button
              type="submit"
              className="bg-[#EA580C] hover:bg-[#C2410C] text-black px-2.5 rounded flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Subscribe"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Legal */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-800">
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
