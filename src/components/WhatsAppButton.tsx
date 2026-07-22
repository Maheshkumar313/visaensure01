"use client";

import React from "react";
import { MessageSquareCode } from "lucide-react";
import { WHATSAPP_URL } from "@/data/contact";

export default function WhatsAppButton() {
  const defaultMessage = encodeURIComponent(
    "Hi VisaEnsure, I am interested in a free elite visa profile assessment."
  );
  const whatsappUrl = `${WHATSAPP_URL}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-ink-900 hover:bg-black text-white p-3.5 rounded-full shadow-e4 border border-white/10 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Outer pulse ring — orange, so the floating actions read as one
          brand family rather than a stray green blob. */}
      <span className="absolute inset-0 rounded-full bg-orange-600/40 animate-ping group-hover:animate-none"></span>

      {/* SVG Icon or Lucide Icon */}
      <MessageSquareCode className="w-6 h-6 relative z-10 text-orange-500" />

      {/* Tooltip */}
      <span className="absolute left-14 bg-white border border-ink-200 text-ink-900 text-[11px] font-semibold tracking-wide py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-e2">
        Chat with a Consultant
      </span>
    </a>
  );
}
