"use client";

import React, { useState } from "react";
import { FileCheck2, Check, Download, Send, RefreshCw } from "lucide-react";

interface ChecklistItem {
  id: string;
  label: string;
  desc: string;
}

const checklistData: Record<string, ChecklistItem[]> = {
  Student: [
    { id: "s1", label: "Valid Passport", desc: "Must be valid for at least 6 months with 2 blank pages." },
    { id: "s2", label: "University Offer Letter (I-20 / CAS / LOA)", desc: "Official admission document from an approved school." },
    { id: "s3", label: "Proof of English Proficiency", desc: "Certified test results (IELTS, PTE Academic, or TOEFL)." },
    { id: "s4", label: "Financial Dossier", desc: "Bank statements, sponsor letters, and proof of source of funds for tuition & living costs." },
    { id: "s5", label: "Academic Transcripts", desc: "Mark sheets, certificates, and diplomas from previous education." },
    { id: "s6", label: "SOP & LORs", desc: "Statement of Purpose detailing study intent and letters of recommendation." },
  ],
  Work: [
    { id: "w1", label: "Certificate of Sponsorship (CoS) / LCA", desc: "Approved sponsorship code or labor certification from the host employer." },
    { id: "w2", label: "Valid Employment Contract", desc: "Signed agreement showing role, salary, and duration matching minimum thresholds." },
    { id: "w3", label: "Tuberculosis Clearances (if applicable)", desc: "Medical test certificate from a clinic approved by the embassy." },
    { id: "w4", label: "Detailed CV & Work References", desc: "Experience verification letters on official company letterheads." },
    { id: "w5", label: "Police Clearance Certificate (PCC)", desc: "Background check certificate from your passport office." },
  ],
  PR: [
    { id: "p1", label: "Educational Credential Assessment (ECA)", desc: "WES or designated report confirming equivalence of degrees." },
    { id: "p2", label: "English / French Test Report", desc: "IELTS General or CELPIP scorecard within 2 years of validity." },
    { id: "p3", label: "Skilled Work Reference Letters", desc: "Official reference documents containing job roles, duties, and pay scale." },
    { id: "p4", label: "Proof of Settlement Funds", desc: "Liquid bank deposits matching family size requirements." },
    { id: "p5", label: "Medicals & Police Clearance", desc: "Official medical examination and PCC certificates for all dependents." },
  ],
  Tourist: [
    { id: "t1", label: "Detailed Travel Itinerary", desc: "Day-wise description of sights, cities visited, and accommodation bookings." },
    { id: "t2", label: "Leave Approval / NOC", desc: "No Objection Certificate from employer containing salary details and leave dates." },
    { id: "t3", label: "Personal Bank Statements", desc: "Duly signed 6 months bank statement showing stable liquid balances." },
    { id: "t4", label: "Tax Returns (ITR)", desc: "Income tax returns or Form 16 for the past 2-3 fiscal years." },
    { id: "t5", label: "Hotel & Flight Draft Bookings", desc: "Verifiable flight details and reservation details." },
  ],
};

export default function ChecklistGenerator() {
  const [category, setCategory] = useState("Student");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const items = checklistData[category] || [];

  const handleToggle = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const resetChecklist = () => {
    setCheckedItems({});
  };

  const activeCheckedCount = items.filter((item) => checkedItems[item.id]).length;
  const progressPercent = items.length > 0 ? Math.round((activeCheckedCount / items.length) * 100) : 0;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <div className="w-full glass-premium rounded-2xl p-6 border border-gold/10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FileCheck2 className="w-5 h-5 text-gold" />
          <h3 className="text-xl font-heading text-white font-semibold">
            Custom Document Checklist
          </h3>
        </div>
        <button
          onClick={resetChecklist}
          className="text-gray-400 hover:text-white flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Selectors */}
      <div className="flex gap-2 border-b border-white/5 pb-4 mb-4 overflow-x-auto no-scrollbar">
        {Object.keys(checklistData).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setCheckedItems({});
              setSent(false);
            }}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
              category === cat
                ? "bg-gold-light border-gold text-[#C9A84C]"
                : "bg-white/5 border-transparent text-gray-300 hover:bg-white/10"
            }`}
          >
            {cat} Documents
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
          <span>COMPLETION STATUS:</span>
          <span className="font-semibold text-white">
            {activeCheckedCount} / {items.length} ({progressPercent}%)
          </span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#C9A84C] to-[#dfbf65] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist list */}
      <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-1 no-scrollbar mb-5">
        {items.map((item) => {
          const isChecked = !!checkedItems[item.id];
          return (
            <div
              key={item.id}
              onClick={() => handleToggle(item.id)}
              className={`p-3 rounded-xl border transition-all cursor-pointer flex gap-3 text-left ${
                isChecked
                  ? "bg-gold-light/10 border-gold/45 text-white"
                  : "bg-white/5 border-white/5 text-gray-300 hover:border-white/15"
              }`}
            >
              <div
                className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-all ${
                  isChecked ? "bg-[#C9A84C] border-[#C9A84C] text-[#0A1628]" : "border-white/20"
                }`}
              >
                {isChecked && <Check className="w-3.5 h-3.5 font-bold" />}
              </div>
              <div className="space-y-0.5">
                <h4 className={`text-xs font-bold ${isChecked ? "text-gold" : "text-white"}`}>
                  {item.label}
                </h4>
                <p className="text-[10px] text-gray-400 leading-normal">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lead Capture */}
      <div className="border-t border-white/10 pt-4">
        {!sent ? (
          <form onSubmit={handleSend} className="space-y-2.5">
            <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-medium">
              E-mail checklist as a premium PDF Guide
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E.g. rajesh@gmail.com"
                className="flex-1 bg-[#122540] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="bg-[#C9A84C] hover:bg-[#DDBB5C] text-[#0A1628] font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get PDF</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl flex items-center justify-center gap-2">
            <Check className="w-4 h-4 shrink-0" />
            <span>Success! The {category} checklist PDF has been sent to {email}.</span>
          </div>
        )}
      </div>
    </div>
  );
}
