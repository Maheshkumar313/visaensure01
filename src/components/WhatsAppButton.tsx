"use client";

import React from "react";
import { MessageSquareCode } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "+919642442227";
  const defaultMessage = encodeURIComponent(
    "Hi VisaEnsure, I am interested in a free premium visa profile assessment."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Outer Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none"></span>

      {/* SVG Icon or Lucide Icon */}
      <MessageSquareCode className="w-6 h-6 relative z-10" />

      {/* Tooltip */}
      <span className="absolute left-14 bg-[#0A1628] border border-white/10 text-white text-[11px] font-semibold tracking-wide py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
        Chat with a Consultant
      </span>
    </a>
  );
}
