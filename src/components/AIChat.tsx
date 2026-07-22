"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, User, Bot, Sparkles } from "lucide-react";

interface Message {
  sender: "bot" | "user";
  text: string;
  time: string;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Welcome to VisaEnsure. I'm your AI Assistant. How can I help you kickstart your global journey today?",
      time: "Just now",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [leadStage, setLeadStage] = useState(0); // 0 = general chat, 1 = asking for contact info, 2 = lead captured
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const addMessage = (sender: "bot" | "user", text: string) => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => [...prev, { sender, text, time }]);
  };

  const handleSend = (textToSend?: string) => {
    const msg = textToSend || inputVal;
    if (!msg.trim()) return;

    addMessage("user", msg);
    if (!textToSend) setInputVal("");

    // Simulate thinking & response
    setTimeout(() => {
      processResponse(msg);
    }, 800);
  };

  const processResponse = (userMsg: string) => {
    const msgLower = userMsg.toLowerCase();

    // Lead capturing stages
    if (leadStage === 1) {
      addMessage("bot", "Perfect, thank you! I've logged your contact request. A Senior Visa counselor will call you within 15 minutes to review your profile. Have a luxury travel experience ahead!");
      setLeadStage(2);
      return;
    }

    // Checking for keywords
    if (msgLower.includes("fee") || msgLower.includes("cost") || msgLower.includes("price")) {
      addMessage("bot", "Our visa consulting fee structures are customized depending on complexity. Basic assessments are 100% free! Can I get your WhatsApp number to share our detailed fee catalog?");
      setLeadStage(1);
    } else if (msgLower.includes("time") || msgLower.includes("duration") || msgLower.includes("how long")) {
      addMessage("bot", "Processing times vary: USA Student Visas take 15-30 days, Canada PR takes 6-8 months, and UK Skilled worker takes 3-4 weeks. To check your specific case processing speed, what is your WhatsApp/Phone number?");
      setLeadStage(1);
    } else if (msgLower.includes("document") || msgLower.includes("check") || msgLower.includes("require")) {
      addMessage("bot", "Typically, you need your passport, qualification transcripts, proof of funds, and English test scores. To generate a custom PDF checklist matching your profile, please drop your WhatsApp or Mobile number.");
      setLeadStage(1);
    } else if (msgLower.includes("appointment") || msgLower.includes("consult") || msgLower.includes("book")) {
      addMessage("bot", "I can book a direct free Zoom or Office session for you! Please reply with your Mobile number so we can text you the scheduling link.");
      setLeadStage(1);
    } else {
      addMessage("bot", "I understand! That's a great question. To provide you with highly accurate and official guidance on this, let me link you with a dedicated Case Officer. What is your WhatsApp/Mobile number?");
      setLeadStage(1);
    }
  };

  const handleQuickReply = (label: string) => {
    handleSend(label);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-body">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-600 hover:bg-orange-700 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative group"
        >
          {/* Outer Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-orange-600/40 animate-ping group-hover:animate-none"></span>

          <MessageSquare className="w-6 h-6" />

          {/* Badge */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-orange-600 border-2 border-white rounded-full flex items-center justify-center"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[340px] md:w-[380px] h-[480px] bg-white border border-orange-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300 animate-in fade-in zoom-in-95">
          {/* Chat Header */}
          <div className="bg-white border-b border-ink-200 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-black" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-black flex items-center gap-1.5">
                  VisaEnsure Assistant
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping"></span>
                </h4>
                <span className="text-[10px] text-ink-800">24/7 Instant Support</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-ink-800 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 no-scrollbar bg-white">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 max-w-[85%] ${
                  m.sender === "user" ? "ml-auto flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${
                    m.sender === "user" ? "bg-orange-600/10 text-orange-700" : "bg-white text-ink-900"
                  }`}
                >
                  {m.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className="space-y-1">
                  <div
                    className={`text-xs p-3 rounded-2xl leading-relaxed ${
                      m.sender === "user"
                        ? "bg-orange-600 text-white rounded-tr-none font-medium"
                        : "bg-white text-black border border-ink-200 rounded-tl-none"
                    }`}
                  >
                    {m.text}
                  </div>
                  <span className="text-[9px] text-ink-800 block px-1">{m.time}</span>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Replies */}
          {leadStage === 0 && (
            <div className="px-4 py-2 bg-white/50 flex gap-2 overflow-x-auto no-scrollbar border-t border-ink-200">
              {["Check Visa Fees", "Processing Times", "Required Documents"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleQuickReply(tag)}
                  className="shrink-0 text-[10px] font-semibold text-ink-900 hover:text-orange-700 bg-white border border-ink-200 hover:border-orange-500/30 px-3 py-1.5 rounded-full transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* Chat Input */}
          <div className="p-3 border-t border-ink-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={
                  leadStage === 1 ? "Type phone / email here..." : "Ask your question here..."
                }
                className="flex-1 bg-white border border-ink-200 rounded-xl px-3 py-2 text-xs text-ink-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all"
              />
              <button
                onClick={() => handleSend()}
                className="bg-orange-600 hover:bg-orange-700 text-white px-3.5 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
