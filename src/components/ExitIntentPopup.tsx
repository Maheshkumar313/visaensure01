"use client";

import React, { useState, useEffect } from "react";
import { X, Gift, Send, CheckCircle2 } from "lucide-react";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already seen it this session
    const hasSeen = sessionStorage.getItem("exit_intent_seen");
    if (hasSeen) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if cursor leaves the top window area (clientY < 20)
      if (e.clientY < 20) {
        setIsOpen(true);
        sessionStorage.setItem("exit_intent_seen", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Container */}
      <div className="relative w-full max-w-md bg-[#0A1628] border border-gold/30 rounded-2xl p-6 md:p-8 shadow-2xl z-10 transition-all text-center space-y-5 animate-in fade-in zoom-in-95">
        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Icon */}
            <div className="w-16 h-16 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-full flex items-center justify-center mx-auto text-gold animate-bounce">
              <Gift className="w-8 h-8" />
            </div>

            {/* Headlines */}
            <div className="space-y-2">
              <h3 className="text-2xl font-heading text-white font-semibold">
                Wait! Before You Leave...
              </h3>
              <p className="text-sm text-gray-300 max-w-xs mx-auto">
                Download our premium guide: <strong>"Top 10 Secrets to Quick Visa Approvals in 2026"</strong> for free.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#122540] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#122540] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#C9A84C] hover:bg-[#DDBB5C] text-[#0A1628] font-bold rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <span>Send Me The Free Guide</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            <p className="text-[10px] text-gray-500">
              We respect your privacy. No spam. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="space-y-4 py-6">
            <div className="w-14 h-14 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto text-green-500">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-heading text-white font-bold">Guide Sent!</h4>
              <p className="text-sm text-gray-300">
                Please check your inbox at <strong className="text-white">{email}</strong> to download your PDF guide.
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="py-2 px-6 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs transition-all mt-4"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
