"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Compass } from "lucide-react";

interface NavbarProps {
  onOpenAssessment: () => void;
  onOpenBooking: () => void;
  onOpenTracker: () => void;
}

export default function Navbar({ onOpenAssessment, onOpenBooking, onOpenTracker }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Destinations", href: "#destinations" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why-choose" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 py-4 ${
          isScrolled
            ? "bg-[#0A1628]/85 backdrop-blur-md border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }`}
        style={{ top: "37px" }} // accounting for TopBar height
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/visaensureLogoForWebsite/1.png" 
              alt="VisaEnsure Logo" 
              className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-heading tracking-widest font-bold text-white group-hover:text-[#C9A84C] transition-colors">
                VISA<span className="text-[#C9A84C]">ENSURE</span>
              </span>
              <span className="text-[9px] tracking-wider text-gray-400 font-body uppercase mt-0.5">
                Your Trusted Visa Companion
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-body text-gray-300 hover:text-[#C9A84C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A84C] hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={onOpenTracker}
                className="text-sm font-body text-[#C9A84C] hover:text-white transition-colors cursor-pointer"
              >
                Track Status
              </button>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="text-xs text-white hover:text-[#C9A84C] font-semibold tracking-wider uppercase transition-colors"
              >
                Book Consultation
              </button>
              <button
                onClick={onOpenAssessment}
                className="bg-[#C9A84C] hover:bg-[#DDBB5C] text-[#0A1628] font-body text-xs md:text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-2 hover:shadow-[#C9A84C]/20 hover:shadow-lg"
              >
                <span>Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={onOpenAssessment}
              className="bg-[#C9A84C] hover:bg-[#DDBB5C] text-[#0A1628] text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300"
            >
              Assessment
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#C9A84C] transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-[89px] left-0 w-full bg-[#0A1628]/95 backdrop-blur-lg border-b border-white/10 transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base font-body text-gray-200 hover:text-[#C9A84C] transition-colors py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenTracker();
              }}
              className="text-base font-body text-[#C9A84C] text-left hover:text-white transition-colors py-2 border-b border-white/5"
            >
              Track Status
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="text-base font-body text-gray-200 text-left hover:text-[#C9A84C] transition-colors py-2 border-b border-white/5"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </nav>
      {/* Spacer to push content below fixed header */}
      <div className="h-[93px] w-full" />
    </>
  );
}
