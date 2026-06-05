"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown, MessageCircle, Globe2, Briefcase, GraduationCap, Plane, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
  onMouseEnter?: () => void;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const NavLink = ({ href, children, onMouseEnter, onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      onMouseEnter={onMouseEnter}
      onClick={(e) => onClick(e, href)}
      className="relative group px-3 py-2 text-sm font-semibold font-body text-gray-800 transition-colors"
    >
      <span className="relative z-10 group-hover:text-black">{children}</span>
      <span
        className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"
        aria-hidden="true"
      />
    </Link>
  );
};

export default function Navbar({ onOpenBooking }: NavbarProps) {
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
      icon: <GraduationCap className="w-5 h-5 text-blue-500" />,
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
      icon: <Briefcase className="w-5 h-5 text-green-500" />,
      items: [
        { label: "All Work Permits", href: "/services/work-visa" },
        { label: "US H1B Visa", href: "/services/h1b-visa" },
        { label: "UK Skilled Worker Visa", href: "/services/uk-work-visa" },
        { label: "Germany Opportunity Card", href: "/services/germany-job-seeker-visa" },
      ]
    },
    {
      title: "Visitor Visas",
      icon: <Plane className="w-5 h-5 text-orange-500" />,
      items: [
        { label: "USA B1/B2 Tourist", href: "/services/tourist-visa" },
        { label: "UK Visitor Visa", href: "/services/tourist-visa" },
        { label: "Schengen Tourist Visa", href: "/services/tourist-visa" },
        { label: "Canada Visitor Visa", href: "/services/tourist-visa" },
      ]
    },
    {
      title: "Immigration Services",
      icon: <Globe2 className="w-5 h-5 text-purple-500" />,
      items: [
        { label: "PR & Skilled Migration", href: "/services/migration-visa" },
        { label: "Canada Express Entry", href: "/services/canada-pr" },
        { label: "Australia Subclass 189/190", href: "/services/australia-pr" },
        { label: "Family Sponsorship", href: "/services/dependent-visa" },
      ]
    },
    {
      title: "Additional Services",
      icon: <ShieldCheck className="w-5 h-5 text-teal-500" />,
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
      <nav
        onMouseLeave={closeMenu}
        className="relative w-full z-[100] bg-white border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex items-center justify-between py-4">
          
          {/* Left: Logo Section */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2 md:gap-3 group cursor-pointer relative z-10 hover:opacity-90 transition-opacity"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/visaensureLogoForWebsite/1.png" 
              alt="VisaEnsure Logo" 
              className="w-auto object-contain h-16 md:h-20" 
            />
            
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-heading tracking-widest font-bold text-gray-900 leading-none">
                VISA<span className="text-orange-600">ENSURE</span>
              </span>
              <span className="text-[9px] md:text-[10px] tracking-wider text-gray-500 font-body uppercase mt-1 whitespace-nowrap">
                Your Trusted Global Visa Partner
              </span>
            </div>
          </Link>

          {/* Center Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-2 xl:gap-4 px-4">
            <NavLink href="/" onMouseEnter={closeMenu} onClick={handleNavClick}>Home</NavLink>
            
            <div className="relative cursor-pointer" onMouseEnter={() => setActiveMenu('services')}>
              <button className="flex items-center gap-1 relative group px-3 py-2 text-sm font-semibold font-body text-gray-800 transition-colors">
                <span className={`relative z-10 ${activeMenu === 'services' ? 'text-black' : 'group-hover:text-black'}`}>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${activeMenu === 'services' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            </div>

            <div className="relative cursor-pointer" onMouseEnter={() => setActiveMenu('countries')}>
              <button className="flex items-center gap-1 relative group px-3 py-2 text-sm font-semibold font-body text-gray-800 transition-colors">
                <span className={`relative z-10 ${activeMenu === 'countries' ? 'text-black' : 'group-hover:text-black'}`}>Countries</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'countries' ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${activeMenu === 'countries' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            </div>

            <NavLink href="/#success-stories" onMouseEnter={closeMenu} onClick={handleNavClick}>Success Stories</NavLink>
            <NavLink href="/#about" onMouseEnter={closeMenu} onClick={handleNavClick}>About Us</NavLink>
            <NavLink href="/#blog" onMouseEnter={closeMenu} onClick={handleNavClick}>Blog</NavLink>
            <NavLink href="/#contact" onMouseEnter={closeMenu} onClick={handleNavClick}>Contact</NavLink>
          </div>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-4 relative z-10">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors font-semibold text-sm">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            
            <button
              onClick={onOpenBooking}
              className="relative group bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-body text-sm font-bold px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg shadow-orange-500/30 overflow-hidden flex items-center gap-2"
            >
              <motion.span className="absolute inset-0 bg-white/20" initial={{ x: '-100%' }} whileHover={{ x: '100%' }} transition={{ duration: 0.5 }} />
              <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="flex items-center gap-2 relative z-10">
                <span>Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden relative z-10">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-orange-600 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl origin-top"
            >
              <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
                <div className="grid grid-cols-5 gap-8">
                  {servicesCategories.map((category, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-gray-50 rounded-lg">
                          {category.icon}
                        </div>
                        <h3 className="font-heading font-bold text-gray-900 text-base">{category.title}</h3>
                      </div>
                      <ul className="flex flex-col gap-3">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link 
                              href={item.href}
                              onClick={closeMenu}
                              className="text-sm text-gray-600 hover:text-orange-600 hover:translate-x-1 transition-all flex items-center gap-2 group/item"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-orange-500 transition-colors" />
                              {item.label}
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
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl origin-top"
            >
              <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
                <div className="grid grid-cols-4 gap-6">
                  {countriesList.map((country, idx) => (
                    <Link 
                      href={country.href} 
                      key={idx}
                      onClick={closeMenu}
                      className="group flex flex-col p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{country.flag}</span>
                        <h3 className="font-heading font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">{country.name}</h3>
                      </div>
                      <p className="text-xs text-gray-500 mb-3 line-clamp-1">{country.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {country.visas.map((visa, vIdx) => (
                          <span key={vIdx} className="text-[10px] uppercase font-semibold bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-md">
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

      {/* --- Mobile Drawer Navigation --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[110] bg-white flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
               <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/visaensureLogoForWebsite/1.png" alt="Logo" className="h-14 w-auto" />
                <span className="text-xl font-heading font-bold text-gray-900">
                  VISA<span className="text-orange-600">ENSURE</span>
                </span>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-gray-50 rounded-full text-gray-600 hover:text-black"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              <Link href="/" onClick={(e) => handleNavClick(e, "/")} className="block text-xl font-heading font-semibold text-gray-900">
                Home
              </Link>
              
              {/* Mobile Services Accordion */}
              <div>
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-xl font-heading font-semibold text-gray-900 py-1"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 space-y-6">
                        {servicesCategories.map((cat, idx) => (
                          <div key={idx}>
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{cat.title}</h4>
                            <ul className="space-y-3 pl-2">
                              {cat.items.map((item, iIdx) => (
                                <li key={iIdx}>
                                  <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-orange-600 font-medium block py-1">
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
              <div>
                <button 
                  onClick={() => setMobileCountriesOpen(!mobileCountriesOpen)}
                  className="flex items-center justify-between w-full text-xl font-heading font-semibold text-gray-900 py-1"
                >
                  <span>Countries</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileCountriesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileCountriesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 grid grid-cols-2 gap-4">
                        {countriesList.map((country, idx) => (
                          <Link 
                            key={idx}
                            href={country.href} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-3 border border-gray-100 rounded-xl bg-gray-50 flex flex-col gap-2"
                          >
                            <span className="text-2xl">{country.flag}</span>
                            <span className="font-semibold text-gray-900">{country.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/#success-stories" onClick={(e) => handleNavClick(e, "/#success-stories")} className="block text-xl font-heading font-semibold text-gray-900">
                Success Stories
              </Link>
              <Link href="/#about" onClick={(e) => handleNavClick(e, "/#about")} className="block text-xl font-heading font-semibold text-gray-900">
                About Us
              </Link>
              <Link href="/#blog" onClick={(e) => handleNavClick(e, "/#blog")} className="block text-xl font-heading font-semibold text-gray-900">
                Blog
              </Link>
              <Link href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")} className="block text-xl font-heading font-semibold text-gray-900">
                Contact
              </Link>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
              <a 
                href="https://wa.me/1234567890" 
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-white border border-gray-200 text-gray-900 font-semibold rounded-xl"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
                <span>Chat on WhatsApp</span>
              </a>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/25"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
