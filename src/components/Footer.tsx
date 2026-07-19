"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Compass, Mail, Phone, MapPin, Send, Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [subscribed, setSubscribed] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 text-xs text-gray-600 font-body relative overflow-hidden">
      
      {/* Subtle Airplane Trail Animation */}
      <div className="absolute right-[-100px] top-[10%] opacity-20 pointer-events-none select-none">
        <svg
          width="400"
          height="120"
          viewBox="0 0 400 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-orange-600/40"
        >
          <path
            d="M10 80 Q 150 10, 300 90 T 390 20"
            strokeWidth="1.5"
            strokeDasharray="6,6"
            className="path-anim"
          />
          {/* Animated plane node */}
          <circle r="4" fill="#FF6B00">
            <animateMotion dur="10s" repeatCount="indefinite" path="M10 80 Q 150 10, 300 90 T 390 20" />
          </circle>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12 relative z-10">
        
        {/* Brand: Column span 3 */}
        <div className="lg:col-span-3 space-y-4">
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="inline-flex items-center gap-2 group cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/visaensureLogoForWebsite/12.png"
              alt="VisaEnsure Globe"
              className="h-14 md:h-[4.5rem] w-auto shrink-0 object-contain drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/visaensureLogoForWebsite/visaensure001.png"
              alt="VisaEnsure Logo"
              className="h-12 md:h-14 w-auto shrink-0 object-contain"
            />
          </a>

          <p className="text-xs leading-relaxed text-gray-600 max-w-sm">
            VisaEnsure is an elite global immigration consultancy providing end-to-end visa solutions with Stripe-level security protocols and an unmatched 98.6% approval record.
          </p>

          <div className="space-y-2 text-[10px] text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-orange-600" />
              <span>Flat no 402, 4th floor, Avasa's VPR Komitla Residency, Chintalkunta, Hyderabad, Telangana 500074</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-orange-600" />
              <a href="mailto:apply@visaensure.com" className="hover:text-orange-600 transition-colors">apply@visaensure.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-orange-600" />
              <span>Mon to Sat — 9:00 AM to 8:00 PM</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <a href="https://facebook.com/visaensure" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600 transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com/visaensure" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600 transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com/company/visaensure" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600 transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://x.com/visaensure" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600 transition-colors" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
        </div>

        {/* Services: Column span 3 */}
        <div className="lg:col-span-3 space-y-4 pl-0 lg:pl-6">
          <h4 className="text-gray-900 text-xs font-bold uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/services/student-visa" className="hover:text-orange-600 transition-colors">
                Student Visa (F-1/Study Permits)
              </Link>
            </li>
            <li>
              <Link href="/services/work-visa" className="hover:text-orange-600 transition-colors">
                Work Visas & Opportunity Cards
              </Link>
            </li>
            <li>
              <Link href="/services/migration-visa" className="hover:text-orange-600 transition-colors">
                PR & Skilled Migration (EE/PNP)
              </Link>
            </li>
            <li>
              <Link href="/services/tourist-visa" className="hover:text-orange-600 transition-colors">
                Tourist & Short-Term Visitor Visas
              </Link>
            </li>
            <li>
              <Link href="/services/ielts-coaching" className="hover:text-orange-600 transition-colors">
                English Exam Coaching (IELTS/PTE)
              </Link>
            </li>
          </ul>
        </div>

        {/* Destinations: Column span 2 */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-gray-900 text-xs font-bold uppercase tracking-wider">Destinations</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/destinations/usa" className="hover:text-orange-600 transition-colors">United States</Link>
            </li>
            <li>
              <Link href="/destinations/canada" className="hover:text-orange-600 transition-colors">Canada</Link>
            </li>
            <li>
              <Link href="/destinations/uk" className="hover:text-orange-600 transition-colors">United Kingdom</Link>
            </li>
            <li>
              <Link href="/destinations/australia" className="hover:text-orange-600 transition-colors">Australia</Link>
            </li>
            <li>
              <Link href="/destinations/germany" className="hover:text-orange-600 transition-colors">Germany</Link>
            </li>
          </ul>
        </div>

        {/* Company: Column span 2 */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-gray-900 text-xs font-bold uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="hover:text-orange-600 transition-colors">About Us</a>
            </li>
            <li>
              <a href="#success-stories" onClick={(e) => handleScrollTo(e, "#success-stories")} className="hover:text-orange-600 transition-colors">Success Stories</a>
            </li>
            {/* TODO: no blog exists yet — create /blog or retire this link */}
            <li>
              <a href="#blog" onClick={(e) => handleScrollTo(e, "#blog")} className="hover:text-orange-600 transition-colors">Blog</a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Direct Chat: Column span 2 */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-gray-900 text-xs font-bold uppercase tracking-wider">Newsletter</h4>
          <p className="text-[10px] leading-relaxed text-gray-600">
            Join our weekly VIP circular. Receive current PR draw scores, visa rules, and processing wait lists.
          </p>
          {subscribed ? (
            <p className="text-xs text-orange-600 font-semibold min-h-[30px] flex items-center">
              Thanks — you&apos;re on the list.
            </p>
          ) : (
            /* TODO: wire this form to a real newsletter backend */
            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex gap-2 min-h-[30px]">
              <input
                type="email"
                required
                placeholder="E.g. rajesh@gmail.com"
                className="flex-1 bg-gray-50 border border-gray-200 rounded px-2.5 py-1.5 text-[10px] text-gray-900 focus:outline-none focus:border-orange-600 placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-2.5 rounded flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Animated Divider Line with glowing light streak */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent relative my-8 overflow-hidden">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-orange-600/40 to-transparent"
          />
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 relative z-10">
        <div>
          &copy; {currentYear} VisaEnsure Platform. All rights reserved. Registered Office Hyderabad, India.
        </div>
        {/* TODO: create /privacy-policy, /terms, /disclaimers pages and point these links at them */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-900 transition-colors">Disclaimers</a>
        </div>
      </div>

      {/* Soft orange base glow at the bottom center of the footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-orange-600/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* World Map Outline Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] select-none pointer-events-none"
        style={{
          backgroundImage: "url('/images/world-map.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
    </footer>
  );
}
