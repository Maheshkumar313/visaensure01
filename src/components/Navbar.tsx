"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
  onOpenAssessment: () => void;
  onOpenBooking: () => void;
  onOpenTracker: () => void;
}

export default function Navbar({ onOpenAssessment, onOpenBooking, onOpenTracker }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

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
    { 
      label: "Home", 
      href: "/#hero",
      subItems: [
        { label: "Visa Lounge", href: "/#visa-lounge" },
        { label: "Our Process", href: "/#process" },
        { label: "Testimonials", href: "/#success-stories" }
      ]
    },
    { label: "About", href: "/#about" },
    { 
      label: "Services", 
      href: "/#services",
      subItems: [
        { label: "USA Student Visa", href: "/services/usa-student-visa" },
        { label: "Canada PR", href: "/services/canada-pr" },
        { label: "UK Work Visa", href: "/services/uk-work-visa" },
        { label: "Australia Tourist", href: "/services/australia-tourist" },
      ]
    },
    { 
      label: "Destinations", 
      href: "/#destinations",
      subItems: [
        { label: "Study in USA", href: "/services/usa-student-visa" },
        { label: "Migrate to Canada", href: "/services/canada-pr" },
        { label: "Work in UK", href: "/services/uk-work-visa" }
      ]
    },
    { label: "Why Us", href: "/#why-choose" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const targetId = href.replace(/^\/?#/, "#");
      
      if (pathname !== "/") {
        router.push("/" + targetId);
      } else {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-4 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg"
            : "bg-transparent"
        }`}
        style={{ top: "37px" }} 
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/visaensureLogoForWebsite/1.png" 
              alt="VisaEnsure Logo" 
              className="h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-heading tracking-widest font-bold text-black group-hover:text-[#EA580C] transition-colors">
                VISA<span className="text-[#EA580C]">ENSURE</span>
              </span>
              <span className="text-[10px] tracking-wider text-gray-800 font-body uppercase mt-0.5">
                Your Trusted Visa Companion
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <div 
                  key={item.label}
                  className="relative group h-full py-2" // using 'group' for css hover state
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center gap-1 text-sm font-semibold font-body text-gray-900 hover:text-[#EA580C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#EA580C] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.label}
                    {item.subItems && <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />}
                  </Link>
                  
                  {/* CSS-only Dropdown Menu */}
                  {item.subItems && (
                     <div className="absolute top-[100%] left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-3 z-[110]">
                        <div className="w-56 bg-white border border-gray-100 rounded-xl shadow-2xl p-2 flex flex-col">
                          {item.subItems.map(subItem => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={(e) => {
                                if(subItem.href.includes('#')) {
                                  handleNavClick(e, subItem.href);
                                }
                              }}
                              className="block px-4 py-3 text-sm font-medium text-gray-800 hover:text-[#EA580C] hover:bg-orange-50 rounded-lg transition-colors whitespace-nowrap"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                     </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="text-xs text-black hover:text-[#EA580C] font-semibold tracking-wider uppercase transition-colors"
              >
                Book Consultation
              </button>
              <button
                onClick={onOpenAssessment}
                className="bg-[#EA580C] hover:bg-[#F97316] text-black font-body text-xs md:text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md flex items-center gap-2 hover:shadow-[#EA580C]/20 hover:shadow-lg"
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
              className="bg-[#EA580C] hover:bg-[#F97316] text-black text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300"
            >
              Assessment
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-[#EA580C] transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-[89px] left-0 w-full bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-b border-gray-200 transition-all duration-500 overflow-y-auto ${
            isMobileMenuOpen ? "max-h-[85vh] opacity-100 py-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 gap-2">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col">
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base font-body font-medium text-black hover:text-[#EA580C] transition-colors py-3 border-b border-gray-100 flex items-center justify-between"
                >
                  {item.label}
                  {item.subItems && <ChevronDown className="w-4 h-4 text-gray-400" />}
                </Link>
                {/* Mobile Sub Items */}
                {item.subItems && (
                  <div className="flex flex-col pl-4 mt-1 mb-1">
                    {item.subItems.map(sub => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={(e) => {
                          if (sub.href.includes('#')) {
                            handleNavClick(e, sub.href);
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className="text-sm font-medium text-gray-600 hover:text-[#EA580C] py-2 border-b border-gray-50 last:border-b-0 block"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenTracker();
              }}
              className="text-base font-body font-medium text-[#EA580C] text-left hover:text-black transition-colors py-3 border-b border-gray-100 block w-full"
            >
              Track Status
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="text-base font-body font-medium text-black text-left hover:text-[#EA580C] transition-colors py-3 border-b border-gray-100 block w-full"
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
