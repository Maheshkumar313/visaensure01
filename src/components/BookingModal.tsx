"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, CheckCircle2, Copy, Send } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visaType: "Student Visa",
    date: "",
    timeSlot: "10:00 AM - 11:00 AM",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  if (!isOpen) return null;

  const timeSlots = [
    "09:30 AM - 10:30 AM",
    "10:45 AM - 11:45 AM",
    "12:00 PM - 01:00 PM",
    "02:30 PM - 03:30 PM",
    "04:00 PM - 05:00 PM",
    "05:30 PM - 06:30 PM",
  ];

  const visaOptions = [
    "Student Visa",
    "Work Visa",
    "PR & Migration",
    "Tourist Visa",
    "Dependent Visa",
    "Business Visa",
    "Coaching & Prep",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      alert("Please fill in all required fields.");
      return;
    }
    // Generate mock reference
    const ref = `VE-BK-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bookingRef);
    alert("Booking reference copied to clipboard!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white border border-orange/30 rounded-2xl overflow-hidden shadow-2xl z-10 transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-[#050b14] to-[#0A1628]">
          <div>
            <h3 className="text-xl font-heading text-black font-semibold">
              Book a Elite Consultation
            </h3>
            <p className="text-xs text-gray-800">Select a slot with an immigration partner</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-800 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Rajesh Kumar"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-black focus:outline-none focus:border-orange/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.g. rajesh@gmail.com"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-black focus:outline-none focus:border-orange/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="E.g. +91 9876543210"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-black focus:outline-none focus:border-orange/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-1">
                    Visa Category
                  </label>
                  <select
                    value={formData.visaType}
                    onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-black focus:outline-none focus:border-orange/50"
                  >
                    {visaOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-black focus:outline-none focus:border-orange/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-black focus:outline-none focus:border-orange/50"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-white">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Describe your current status or questions..."
                  rows={3}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-black focus:outline-none focus:border-orange/50"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Free Consultation Slot</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto text-green-500">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-heading text-black font-bold">Booking Confirmed!</h4>
                <p className="text-sm text-gray-900 max-w-sm mx-auto">
                  A verification email and calendar invite have been sent to{" "}
                  <strong className="text-black">{formData.email}</strong>.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-4 rounded-xl max-w-md mx-auto space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-800">
                  <span>CONFIRMATION ID</span>
                  <span>DATE & TIME</span>
                </div>
                <div className="flex items-center justify-between text-sm text-black font-bold">
                  <div className="flex items-center gap-2">
                    <span>{bookingRef}</span>
                    <button
                      onClick={copyToClipboard}
                      className="text-orange hover:text-black transition-colors"
                      title="Copy Reference"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5 text-orange-600">
                    <Clock className="w-4 h-4" />
                    <span>
                      {formData.date} at {formData.timeSlot.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-800">
                Our elite consultant will call you at <strong className="text-black">{formData.phone}</strong>.
              </p>

              <div className="flex gap-4 max-w-xs mx-auto pt-2">
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 bg-white hover:bg-white/20 text-black rounded-lg text-sm transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
