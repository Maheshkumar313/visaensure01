"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowLeft, ShieldCheck, HelpCircle } from "lucide-react";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { ServiceDetail } from "@/data/servicesData";

interface ServicePageClientProps {
  service: ServiceDetail;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black overflow-hidden">
      <TopBar />

      {/* Breadcrumb / Nav */}
      <header className="border-b border-gray-200 py-4 bg-white/90 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs text-gray-800 hover:text-orange transition-colors font-semibold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Hub</span>
          </Link>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-800 font-semibold tracking-wider uppercase font-mono">
            <span>VisaEnsure</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-orange">{service.title}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 md:py-20 relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-orange-600/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-white border border-orange-600/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4">
          {/* Header Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left border-b border-white/15 pb-8 mb-8"
          >
            <span className="text-xs font-semibold tracking-widest text-orange-600 uppercase bg-white border border-gray-200 px-3 py-1 rounded-full inline-block">
              {service.category.toUpperCase()} SOLUTIONS
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-black leading-tight">
              {service.headline}
            </h1>
            <p className="text-lg text-gray-900 font-light max-w-2xl leading-relaxed">
              {service.subheadline}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {service.stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="bg-white border border-gray-200 p-4 rounded-xl text-center md:text-left hover:border-orange-600/25 transition-colors duration-300"
                >
                  <span className="text-[10px] text-gray-800 uppercase tracking-wider font-semibold block">{stat.label}</span>
                  <strong className="text-lg md:text-xl font-heading text-orange font-bold block mt-1">{stat.value}</strong>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Intro Description */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 mb-12"
          >
            <h2 className="text-xl font-bold font-heading text-black">Overview</h2>
            <p className="text-gray-900 text-sm leading-relaxed font-body">
              {service.introduction}
            </p>
          </motion.section>

          {/* Features / Inclusions */}
          <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4 mb-12 bg-white border border-gray-200 p-6 rounded-2xl"
          >
            <h2 className="text-xl font-bold font-heading text-black">Platform Inclusions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feat, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-900 leading-relaxed font-body">{feat}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Prerequisites / Requirements */}
          <section className="space-y-4 mb-12">
            <h2 className="text-xl font-bold font-heading text-black">Eligibility Criteria & Prerequisites</h2>
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-3.5"
            >
              {service.requirements.map((req, i) => (
                <motion.li 
                  key={i} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, borderColor: "rgba(234, 88, 12, 0.3)" }}
                  className="flex items-start gap-3 bg-white/[0.02] border border-gray-200 p-3 rounded-lg text-xs text-gray-900 font-body transition-colors duration-200"
                >
                  <span className="w-5 h-5 rounded-full bg-orange-600/10 border border-orange-600/25 text-orange flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 animate-pulse">
                    {i + 1}
                  </span>
                  <span>{req}</span>
                </motion.li>
              ))}
            </motion.ul>
          </section>

          {/* Step-by-Step Pathway */}
          <section className="space-y-6 mb-12">
            <h2 className="text-xl font-bold font-heading text-black">Immigration Pipeline Pathway</h2>
            <div className="relative border-l border-gray-200 pl-6 space-y-8">
              {/* Dynamic Animated Line Overlay */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-0 top-0 w-[1px] bg-gradient-to-b from-orange-600 to-[#0A1628] origin-top"
              />

              {service.pathway.map((p, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative group"
                >
                  {/* Bullet */}
                  <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-white border border-orange-600 flex items-center justify-center text-[8px] font-bold text-orange group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    {p.step}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-black font-heading group-hover:text-orange-600 transition-colors">{p.title}</h3>
                    <p className="text-xs text-gray-800 leading-relaxed font-body">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Collapsible FAQs */}
          <section className="space-y-4 mb-12">
            <h2 className="text-xl font-bold font-heading text-black">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                  className="glass p-5 rounded-xl border border-gray-200 space-y-2 transition-all duration-300"
                >
                  <h4 className="text-sm font-bold text-black flex items-start gap-2.5">
                    <HelpCircle className="w-4.5 h-4.5 text-orange shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-gray-800 pl-7 leading-relaxed font-body">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Direct CTA Form */}
          <motion.section 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#122540] to-[#0A1628] border border-orange/25 p-8 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-orange-600/5 opacity-30 blur-2xl pointer-events-none" />
            <div className="space-y-2 relative z-10">
              <h3 className="text-2xl font-heading text-black font-bold">Lock in your slots today</h3>
              <p className="text-xs text-gray-800 max-w-md mx-auto">
                Consultations fill up quickly. Register your interest now to secure a slot with our senior Hyderabad desk.
              </p>
            </div>
            
            <div className="flex justify-center relative z-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#contact"
                  className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full transition-all duration-300 inline-flex items-center gap-1.5 shadow-lg shadow-orange-600/20"
                >
                  <span>Request Case Assessment</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
