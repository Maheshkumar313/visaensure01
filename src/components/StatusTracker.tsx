"use client";

import React, { useState } from "react";
import { X, Search, CheckCircle, Clock, AlertCircle, Compass } from "lucide-react";

interface StatusTrackerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TrackingResult {
  id: string;
  name: string;
  visaType: string;
  country: string;
  submittedOn: string;
  currentStage: number; // 0 to 4
  stages: { name: string; status: "completed" | "current" | "pending"; date: string }[];
}

export default function StatusTracker({ isOpen, onClose }: StatusTrackerProps) {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [searched, setSearched] = useState(false);

  if (!isOpen) return null;

  const mockTrackData: Record<string, TrackingResult> = {
    "VE-2026-9876": {
      id: "VE-2026-9876",
      name: "Aarav Sharma",
      visaType: "USA Student Visa (F-1)",
      country: "USA",
      submittedOn: "2026-04-12",
      currentStage: 3,
      stages: [
        { name: "Document Verification", status: "completed", date: "April 14, 2026" },
        { name: "Sponsor/Financial Audit", status: "completed", date: "April 20, 2026" },
        { name: "Form I-20 & DS-160 Filed", status: "completed", date: "May 02, 2026" },
        { name: "Consular Interview Scheduled", status: "current", date: "June 10, 2026 (Pending)" },
        { name: "Visa Decision & Delivery", status: "pending", date: "TBD" },
      ],
    },
    "VE-2026-5542": {
      id: "VE-2026-5542",
      name: "Sneha Reddy",
      visaType: "Canada Express Entry PR",
      country: "Canada",
      submittedOn: "2026-03-01",
      currentStage: 2,
      stages: [
        { name: "WES Evaluation & IELTS Audit", status: "completed", date: "March 05, 2026" },
        { name: "Express Entry Profile Lodged", status: "completed", date: "March 18, 2026" },
        { name: "Provincial Nomination Review", status: "current", date: "May 25, 2026 (In Progress)" },
        { name: "Federal ITA & Medical Auditing", status: "pending", date: "TBD" },
        { name: "COPR & Visa Grant", status: "pending", date: "TBD" },
      ],
    },
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    const trimmedId = trackingId.trim().toUpperCase();
    if (mockTrackData[trimmedId]) {
      setResult(mockTrackData[trimmedId]);
    } else {
      // Generate a dynamic mock record for any other tracking ID to show functionality
      setResult({
        id: trimmedId,
        name: "Elite Candidate",
        visaType: "Skilled Work Visa",
        country: "UK / Australia",
        submittedOn: new Date().toISOString().split("T")[0],
        currentStage: 1,
        stages: [
          { name: "Document Verification Completed", status: "completed", date: "Just now" },
          { name: "Senior Case Officer Review", status: "current", date: "Processing" },
          { name: "Sponsorship & LCA Auditing", status: "pending", date: "TBD" },
          { name: "Consulate Submission", status: "pending", date: "TBD" },
          { name: "Visa Issue & Passport Delivery", status: "pending", date: "TBD" },
        ],
      });
    }
    setSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white border border-orange/30 rounded-2xl overflow-hidden shadow-2xl z-10 transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#EA580C] animate-spin-slow" />
            <h3 className="text-xl font-heading text-black font-semibold">
              Visa Status Tracker
            </h3>
          </div>
          <button onClick={onClose} className="text-gray-800 hover:text-black transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="E.g., VE-2026-9876"
                className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-black focus:outline-none focus:border-orange uppercase tracking-wider"
              />
              <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-gray-800" />
            </div>
            <button
              type="submit"
              className="px-5 bg-[#EA580C] hover:bg-[#F97316] text-black font-bold rounded-lg text-sm transition-all"
            >
              Track
            </button>
          </form>

          {/* Quick reference advice */}
          {!searched && (
            <div className="mt-4 p-3 bg-white border border-gray-200 rounded-lg text-xs text-gray-800 space-y-1">
              <span>Try mock IDs to preview:</span>
              <div className="flex gap-3 text-orange font-mono font-semibold">
                <button type="button" onClick={() => setTrackingId("VE-2026-9876")} className="underline">VE-2026-9876</button>
                <button type="button" onClick={() => setTrackingId("VE-2026-5542")} className="underline">VE-2026-5542</button>
              </div>
            </div>
          )}

          {/* Result Area */}
          {searched && result && (
            <div className="mt-6 space-y-5">
              {/* Header Info */}
              <div className="border-b border-gray-200 pb-3">
                <div className="flex justify-between items-start text-xs text-gray-800">
                  <div>
                    APPLICANT NAME: <strong className="text-black block text-sm mt-0.5">{result.name}</strong>
                  </div>
                  <div className="text-right">
                    CASE ID: <strong className="text-black block text-sm mt-0.5 font-mono">{result.id}</strong>
                  </div>
                </div>
                <div className="flex justify-between items-start text-xs text-gray-800 mt-2">
                  <div>
                    VISA TYPE: <strong className="text-[#EA580C] block mt-0.5">{result.visaType} ({result.country})</strong>
                  </div>
                  <div className="text-right">
                    SUBMITTED: <strong className="text-black block mt-0.5">{result.submittedOn}</strong>
                  </div>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="space-y-4">
                {result.stages.map((stage, index) => (
                  <div key={index} className="flex gap-3">
                    {/* Visual Line indicators */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center border text-xs ${
                          stage.status === "completed"
                            ? "bg-green-500/10 border-green-500 text-green-500"
                            : stage.status === "current"
                            ? "bg-[#EA580C]/10 border-[#EA580C] text-[#EA580C] animate-pulse"
                            : "bg-white border-gray-200 text-gray-800"
                        }`}
                      >
                        {stage.status === "completed" ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : stage.status === "current" ? (
                          <Clock className="w-4 h-4" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                        )}
                      </div>
                      {index < result.stages.length - 1 && (
                        <div
                          className={`w-0.5 h-10 ${
                            stage.status === "completed" ? "bg-green-500" : "bg-white"
                          }`}
                        />
                      )}
                    </div>

                    {/* Stage Text */}
                    <div className="flex-1 pb-2">
                      <h4
                        className={`text-sm font-semibold ${
                          stage.status === "completed"
                            ? "text-black"
                            : stage.status === "current"
                            ? "text-[#EA580C]"
                            : "text-gray-800"
                        }`}
                      >
                        {stage.name}
                      </h4>
                      <p className="text-[11px] text-gray-800 mt-0.5">{stage.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Prompt */}
              <div className="p-3 bg-orange-light border border-orange/20 rounded-xl flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div className="text-[11px] text-gray-900 leading-relaxed">
                  Need to update files, change bio details, or upload sponsor bank statements? Please ping your counselor directly on WhatsApp or call our Chintalkunta desk quoting the CASE ID.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
