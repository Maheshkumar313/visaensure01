"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visaType: "Student Visa",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Invalid phone number";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-200 relative">
      <div className="absolute top-[40%] left-[5%] w-[300px] h-[300px] rounded-full bg-[#FF6B00]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#FF6B00] uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-black">
            Schedule a Private Consultation
          </h2>
          <p className="text-gray-800 text-sm max-w-xl mx-auto">
            Contact our flagship Hyderabad office or submit the form to connect directly with a senior immigration counselor.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Form: Column span 7 */}
          <div className="lg:col-span-7 glass p-6 md:p-8 rounded-2xl border border-gray-200">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      placeholder="Rajesh Kumar"
                      className={`w-full bg-white border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-2.5 text-xs text-black focus:outline-none focus:border-orange`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="rajesh@gmail.com"
                      className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-2.5 text-xs text-black focus:outline-none focus:border-orange`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 mb-1.5">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                      }}
                      placeholder="+91 96424 42227"
                      className={`w-full bg-white border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-2.5 text-xs text-black focus:outline-none focus:border-orange`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 mb-1.5">
                      Visa Type
                    </label>
                    <select
                      value={formData.visaType}
                      onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-black focus:outline-none focus:border-orange"
                    >
                      <option value="Student Visa">Student Visa</option>
                      <option value="Work Visa">Work Visa</option>
                      <option value="PR & Migration">PR & Migration</option>
                      <option value="Tourist Visa">Tourist Visa</option>
                      <option value="Business Visa">Business Visa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your requirements..."
                    rows={4}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-black focus:outline-none focus:border-orange"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 bg-[#FF6B00] hover:bg-[#FF7A1A] text-black font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto text-green-500">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-heading text-black font-bold">Inquiry Logged!</h4>
                <p className="text-xs text-gray-900 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-black">{formData.name}</strong>. A VisaEnsure case specialist has received your inquiry for <strong>{formData.visaType}</strong>. We will call you within 15 minutes.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="py-2 px-6 bg-white hover:bg-white border border-gray-200 rounded-lg text-xs text-black transition-all mt-4"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Details: Column span 5 */}
          <div className="lg:col-span-5 bg-white/50 border border-gray-200 p-6 md:p-8 rounded-2xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-heading text-black font-semibold">
                Contact Coordinates
              </h3>

              <div className="space-y-4 text-xs md:text-sm">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-gray-900">
                    Flat no 402, 4th floor, Avasa's VPR Komitla Residency, Sri Sai Nagar, Jahangir Nagar Colony, Chintalkunta, Hyderabad, Telangana 500074
                  </span>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                  <a href="mailto:apply@visaensure.com" className="text-gray-900 hover:text-orange transition-colors">
                    apply@visaensure.com
                  </a>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <a href="tel:+919642442227" className="block text-gray-900 hover:text-orange transition-colors">
                      +91 9642442227
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                  <span className="text-gray-900">
                    Monday to Saturday — 9:00 AM to 8:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Simple Visual Map Placeholder */}
            <div className="relative h-32 rounded-xl overflow-hidden border border-gray-200 bg-white flex items-center justify-center text-center p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234, 88, 12,0.15)_0%,transparent_75%)]" />
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] tracking-wider text-orange uppercase font-bold">MAP DIRECTIONS</span>
                <p className="text-[11px] text-gray-800">Sri Sai Nagar, Jahangir Nagar Colony, Chintalkunta</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-black underline hover:text-orange block mt-1"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
