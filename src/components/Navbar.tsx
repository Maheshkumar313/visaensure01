"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown, MessageCircle, Globe2, Briefcase, GraduationCap, Plane, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { WHATSAPP_URL } from "@/data/contact";

interface NavbarProps {
  onOpenAssessment: () => void;
  onOpenBooking: () => void;
  onOpenTracker: () => void;
}

const megaMenuVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: 10, 
    scale: 0.98,
    transition: { duration: 0.2, ease: "easeIn" }
  }
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onMouseEnter?: () => void;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const NavLink = ({ href, children, isActive, onMouseEnter, onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      onMouseEnter={onMouseEnter}
      onClick={(e) => onClick(e, href)}
      className={`relative px-4 py-2 text-sm font-semibold font-body rounded-full transition-all duration-300 flex items-center justify-center overflow-hidden group ${
        isActive 
          ? "text-orange-600 bg-orange-50/80 shadow-sm" 
          : "text-gray-700 hover:text-orange-600 hover:bg-orange-500/[0.04]"
      }`}
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">{children}</span>
    </Link>
  );
};

export default function Navbar({ onOpenAssessment, onOpenBooking, onOpenTracker }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  // Mobile accordion state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

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

  const closeMenu = () => setActiveMenu(null);

  // Mega Menu Data
  const servicesCategories = [
    {
      title: "Study Visas",
      icon: <GraduationCap className="w-5 h-5 text-orange-600" />,
      items: [
        { label: "All Study Programs", href: "/services/student-visa" },
        { label: "USA Study Visa", href: "/services/usa-student-visa" },
        { label: "Canada Study Visa", href: "/services/student-visa" },
        { label: "Australia Study Visa", href: "/services/student-visa" },
        { label: "Germany Study Visa", href: "/services/student-visa" },
      ]
    },
    {
      title: "Work Visas",
      icon: <Briefcase className="w-5 h-5 text-orange-600" />,
      items: [
        { label: "All Work Permits", href: "/services/work-visa" },
        { label: "US H1B Visa", href: "/services/h1b-visa" },
        { label: "UK Skilled Worker Visa", href: "/services/uk-work-visa" },
        { label: "Germany Opportunity Card", href: "/services/germany-job-seeker-visa" },
      ]
    },
    {
      title: "Visitor Visas",
      icon: <Plane className="w-5 h-5 text-orange-600" />,
      items: [
        { label: "USA B1/B2 Tourist", href: "/services/tourist-visa" },
        { label: "UK Visitor Visa", href: "/services/tourist-visa" },
        { label: "Schengen Tourist Visa", href: "/services/tourist-visa" },
        { label: "Canada Visitor Visa", href: "/services/tourist-visa" },
      ]
    },
    {
      title: "Immigration Services",
      icon: <Globe2 className="w-5 h-5 text-orange-600" />,
      items: [
        { label: "PR & Skilled Migration", href: "/services/migration-visa" },
        { label: "Canada Express Entry", href: "/services/canada-pr" },
        { label: "Australia Subclass 189/190", href: "/services/australia-pr" },
        { label: "Family Sponsorship", href: "/services/dependent-visa" },
      ]
    },
    {
      title: "Additional Services",
      icon: <ShieldCheck className="w-5 h-5 text-orange-600" />,
      items: [
        { label: "English Coaching (IELTS)", href: "/services/ielts-coaching" },
        { label: "Business & Investor Visa", href: "/services/business-visa" },
        { label: "SOP & Essay Support", href: "/services/student-visa" },
        { label: "Interview Preparation", href: "/services/student-visa" },
      ]
    }
  ];

  const countriesList = [
    { name: "USA", flag: "🇺🇸", desc: "Top destination for tech & education", visas: ["Study", "H1B", "B1/B2"], href: "/destinations/usa" },
    { name: "Canada", flag: "🇨🇦", desc: "Welcoming immigrants via Express Entry", visas: ["PR", "Study", "Work"], href: "/destinations/canada" },
    { name: "UK", flag: "🇬🇧", desc: "Excellent education & skilled worker routes", visas: ["Study", "Skilled Worker"], href: "/destinations/uk" },
    { name: "Australia", flag: "🇦🇺", desc: "High quality of life & skilled migration", visas: ["PR", "Study", "Work"], href: "/destinations/australia" },
    { name: "Germany", flag: "🇩🇪", desc: "Europe's largest economy & free education", visas: ["Job Seeker", "Study"], href: "/destinations/germany" },
    { name: "New Zealand", flag: "🇳🇿", desc: "Beautiful landscapes & great work-life", visas: ["Study", "Work"], href: "/destinations/new-zealand" },
    { name: "Ireland", flag: "🇮🇪", desc: "Tech hub of Europe with friendly locals", visas: ["Study", "Work"], href: "/destinations/ireland" },
    { name: "Europe", flag: "🇪🇺", desc: "Access 27 countries with Schengen Visa", visas: ["Schengen", "Visit"], href: "/destinations/europe" },
  ];

  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-[0_1px_2px_rgba(10,22,40,0.04)] py-0">
        <nav
          onMouseLeave={closeMenu}
          className="mx-auto relative w-full max-w-7xl bg-transparent px-4 md:px-8 py-3.5"
        >
          <div className="w-full flex items-center justify-between">
            {/* Left: Logo Section */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2 group cursor-pointer relative z-10 hover:opacity-95 transition-opacity"
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
            </Link>

            {/* Center Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center items-center gap-1 xl:gap-3 px-4">
              <NavLink href="/" isActive={pathname === "/"} onMouseEnter={closeMenu} onClick={handleNavClick}>Home</NavLink>
              
              <div className="relative cursor-pointer" onMouseEnter={() => setActiveMenu('services')}>
                <button className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold font-body rounded-full transition-all duration-300 group ${
                  activeMenu === 'services' || pathname.startsWith('/services')
                    ? "text-orange-600 bg-orange-50/80 shadow-sm" 
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-500/[0.04]"
                }`}>
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180 text-orange-600' : 'text-gray-400 group-hover:text-orange-600'}`} />
                </button>
              </div>

              <div className="relative cursor-pointer" onMouseEnter={() => setActiveMenu('countries')}>
                <button className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold font-body rounded-full transition-all duration-300 group ${
                  activeMenu === 'countries' || pathname.startsWith('/destinations')
                    ? "text-orange-600 bg-orange-50/80 shadow-sm" 
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-500/[0.04]"
                }`}>
                  <span>Countries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'countries' ? 'rotate-180 text-orange-600' : 'text-gray-400 group-hover:text-orange-600'}`} />
                </button>
              </div>

              <NavLink href="/#contact" isActive={pathname === "/#contact"} onMouseEnter={closeMenu} onClick={handleNavClick}>Contact</NavLink>
            </div>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-4 relative z-10">
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 text-gray-700 hover:text-green-600 transition-colors font-semibold text-sm group"
              >
                <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                <span>WhatsApp</span>
              </a>
              
              <button
                onClick={onOpenBooking}
                className="relative group bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white font-body font-bold rounded-full transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-orange-500/20 overflow-hidden flex items-center gap-2 px-6 py-2.5 text-sm"
              >
                {/* Gloss sweep shine hover animation */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <div className="flex items-center gap-1.5 relative z-10">
                  <span>Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4 lg:hidden relative z-10">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 bg-gray-50/50 hover:bg-orange-50 rounded-full text-gray-900 hover:text-orange-600 transition-all duration-300 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* --- Desktop Mega Menus --- */}
          <AnimatePresence>
            {activeMenu === 'services' && (
              <motion.div
                key="services-mega"
                variants={megaMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl border border-gray-200/70 shadow-xl shadow-navy/5 rounded-3xl origin-top z-50 top-full mt-2 w-[98vw] max-w-7xl"
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-5 gap-6">
                    {servicesCategories.map((category, idx) => (
                      <div 
                        key={idx} 
                        className="flex flex-col p-4 rounded-2xl hover:bg-orange-500/[0.02] border border-transparent hover:border-orange-500/10 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2.5 mb-4">
                          <div className="p-2.5 bg-orange-50 rounded-xl text-orange-600 shadow-sm">
                            {category.icon}
                          </div>
                          <h3 className="font-heading font-extrabold text-gray-900 text-[13px] tracking-wide uppercase">
                            {category.title}
                          </h3>
                        </div>
                        <ul className="flex flex-col gap-3">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link 
                                href={item.href}
                                onClick={closeMenu}
                                className="text-xs font-semibold text-gray-600 hover:text-orange-600 hover:translate-x-1.5 transition-all flex items-center gap-2 group/item font-body"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-orange-500 group-hover/item:scale-125 transition-all duration-300" />
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeMenu === 'countries' && (
              <motion.div
                key="countries-mega"
                variants={megaMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl border border-gray-200/70 shadow-xl shadow-navy/5 rounded-3xl origin-top z-50 top-full mt-2 w-[98vw] max-w-7xl"
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-4 gap-6">
                    {countriesList.map((country, idx) => (
                      <Link 
                        href={country.href} 
                        key={idx}
                        onClick={closeMenu}
                        className="group flex flex-col p-4 rounded-2xl hover:bg-orange-500/[0.02] border border-gray-100/40 hover:border-orange-500/20 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">{country.flag}</span>
                          <h3 className="font-heading font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                            {country.name}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-500 mb-4 line-clamp-1 leading-relaxed font-body">{country.desc}</p>
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {country.visas.map((visa, vIdx) => (
                            <span 
                              key={vIdx} 
                              className="text-[9px] uppercase font-bold bg-white border border-gray-200/60 text-gray-500 px-2 py-0.5 rounded-full group-hover:border-orange-500/20 group-hover:text-orange-600 transition-colors font-body"
                            >
                              {visa}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* --- Mobile Drawer Navigation --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[110] bg-white/95 backdrop-blur-xl flex flex-col lg:hidden"
          >
             <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white/50">
               <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/visaensureLogoForWebsite/12.png" alt="VisaEnsure Globe" className="h-12 w-auto shrink-0 object-contain drop-shadow-md" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/visaensureLogoForWebsite/visaensure001.png" alt="VisaEnsure Logo" className="h-10 w-auto shrink-0 object-contain" />
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-gray-100 hover:bg-orange-50 rounded-full text-gray-600 hover:text-orange-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              <Link 
                href="/" 
                onClick={(e) => handleNavClick(e, "/")} 
                className={`block text-xl font-heading font-semibold transition-colors ${
                  pathname === "/" ? "text-orange-600" : "text-gray-900"
                }`}
              >
                Home
              </Link>
              
              {/* Mobile Services Accordion */}
              <div className="border-t border-gray-100 pt-4">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex items-center justify-between w-full text-xl font-heading font-semibold py-1 transition-colors ${
                    pathname.startsWith("/services") ? "text-orange-600" : "text-gray-900"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-orange-600' : 'text-gray-400'}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 space-y-5">
                        {servicesCategories.map((cat, idx) => (
                          <div key={idx} className="border-l border-orange-500/20 pl-4 py-1">
                            <h4 className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">{cat.title}</h4>
                            <ul className="space-y-2.5">
                              {cat.items.map((item, iIdx) => (
                                <li key={iIdx}>
                                  <Link 
                                    href={item.href} 
                                    onClick={() => setIsMobileMenuOpen(false)} 
                                    className="text-sm text-gray-700 hover:text-orange-600 font-semibold block py-1.5 border-b border-gray-50/50 transition-colors font-body"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Countries Accordion */}
              <div className="border-t border-gray-100 pt-4">
                <button 
                  onClick={() => setMobileCountriesOpen(!mobileCountriesOpen)}
                  className={`flex items-center justify-between w-full text-xl font-heading font-semibold py-1 transition-colors ${
                    pathname.startsWith("/destinations") ? "text-orange-600" : "text-gray-900"
                  }`}
                >
                  <span>Countries</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileCountriesOpen ? 'rotate-180 text-orange-600' : 'text-gray-400'}`} />
                </button>
                <AnimatePresence>
                  {mobileCountriesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 grid grid-cols-2 gap-3">
                        {countriesList.map((country, idx) => (
                          <Link 
                            key={idx}
                            href={country.href} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-3 border border-gray-200 rounded-2xl bg-gray-50/50 hover:bg-orange-50/50 hover:border-orange-500/20 flex flex-col gap-2 transition-all duration-300"
                          >
                            <span className="text-3xl">{country.flag}</span>
                            <span className="font-bold text-sm text-gray-900">{country.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                href="/#contact" 
                onClick={(e) => handleNavClick(e, "/#contact")} 
                className="block text-xl font-heading font-semibold text-gray-900 border-t border-gray-100 pt-4"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="p-6 bg-gray-50/80 backdrop-blur-md border-t border-gray-100 space-y-3">
              <a 
                href={WHATSAPP_URL} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200/80 hover:border-green-500/20 text-gray-800 font-bold rounded-full transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg shadow-orange-500/20"
              >
                <span className="text-sm">Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
