"use client";

import React, { useState } from "react";
import { X, ArrowLeft, ArrowRight, Award, HelpCircle, FileCheck2, Calculator } from "lucide-react";

interface EligibilityCheckerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EligibilityChecker({ isOpen, onClose }: EligibilityCheckerProps) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    visaCategory: "",
    country: "",
    age: "",
    education: "",
    experience: "",
    english: "",
    name: "",
    email: "",
    phone: "",
  });
  const [isCalculated, setIsCalculated] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  if (!isOpen) return null;

  const handleSelect = (field: string, value: string) => {
    setAnswers({ ...answers, [field]: value });
  };

  const nextStep = () => {
    // Basic validation
    if (step === 1 && !answers.visaCategory) return alert("Please select a Visa Category.");
    if (step === 2 && !answers.country) return alert("Please select a Destination Country.");
    if (step === 3 && !answers.age) return alert("Please select your Age group.");
    if (step === 4 && !answers.education) return alert("Please select your Education level.");
    if (step === 5 && !answers.experience) return alert("Please select your Work Experience.");
    if (step === 6 && !answers.english) return alert("Please select your English Proficiency score.");

    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answers.name || !answers.email || !answers.phone) {
      alert("Please fill in your contact information.");
      return;
    }

    // Points scoring logic
    let tempScore = 30; // base score

    // Age
    if (answers.age === "25-32") tempScore += 25;
    else if (answers.age === "18-24") tempScore += 20;
    else if (answers.age === "33-39") tempScore += 15;
    else tempScore += 5;

    // Education
    if (answers.education === "PhD") tempScore += 25;
    else if (answers.education === "Masters") tempScore += 20;
    else if (answers.education === "Bachelors") tempScore += 15;
    else tempScore += 5;

    // Experience
    if (answers.experience === "5+ Years") tempScore += 25;
    else if (answers.experience === "3-5 Years") tempScore += 18;
    else if (answers.experience === "1-2 Years") tempScore += 10;
    else tempScore += 2;

    // English
    if (answers.english === "IELTS 8+ / PTE 79+") tempScore += 25;
    else if (answers.english === "IELTS 7-7.5 / PTE 65-78") tempScore += 18;
    else if (answers.english === "IELTS 6-6.5 / PTE 50-64") tempScore += 10;
    else tempScore += 2;

    // Scale score to 100 max
    const finalScore = Math.min(tempScore, 100);
    setScore(finalScore);

    // Formulate feedback based on score and target country
    let advice = "";
    if (finalScore >= 75) {
      advice = `Outstanding score! You are highly eligible for the ${answers.visaCategory} in ${answers.country}. Your profile has high chances of direct ITA/Selection.`;
    } else if (finalScore >= 55) {
      advice = `Strong profile! You are eligible for ${answers.visaCategory} in ${answers.country}. We recommend language score optimization or provincial nominations to guarantee selection.`;
    } else {
      advice = `Moderate eligibility. We recommend checking other pathways like State nominations, study-to-work pipelines, or dependent sponsorship for ${answers.country}.`;
    }
    setFeedback(advice);
    setIsCalculated(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-white border border-orange/30 rounded-2xl overflow-hidden shadow-2xl z-10 transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#EA580C]" />
            <h3 className="text-xl font-heading text-black font-semibold">
              Visa Eligibility Checker
            </h3>
          </div>
          <button onClick={onClose} className="text-gray-800 hover:text-black transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isCalculated && (
          <div className="w-full h-1 bg-white">
            <div
              className="h-full bg-[#EA580C] transition-all duration-300"
              style={{ width: `${(step / 7) * 100}%` }}
            />
          </div>
        )}

        {/* Form Body */}
        <div className="p-6">
          {!isCalculated ? (
            <div>
              {/* Step 1: Visa Category */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-black">1. Select your target Visa category:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["Student Visa", "Work Visa", "PR Migration", "Tourist Visa"].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => handleSelect("visaCategory", cat)}
                        className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all cursor-pointer ${
                          answers.visaCategory === cat
                            ? "bg-orange-light border-orange text-[#EA580C] glow-orange"
                            : "bg-white border-gray-200 text-gray-900 hover:border-gray-300"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Country */}
              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-black">2. Which is your dream destination?</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["USA", "Canada", "UK", "Australia", "Germany"].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => handleSelect("country", c)}
                        className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all cursor-pointer ${
                          answers.country === c
                            ? "bg-orange-light border-orange text-[#EA580C] glow-orange"
                            : "bg-white border-gray-200 text-gray-900 hover:border-gray-300"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Age */}
              {step === 3 && (
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-black">3. What is your age group?</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["18-24", "25-32", "33-39", "40+"].map((ageGrp) => (
                      <button
                        key={ageGrp}
                        type="button"
                        onClick={() => handleSelect("age", ageGrp)}
                        className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all cursor-pointer ${
                          answers.age === ageGrp
                            ? "bg-orange-light border-orange text-[#EA580C] glow-orange"
                            : "bg-white border-gray-200 text-gray-900 hover:border-gray-300"
                        }`}
                      >
                        {ageGrp} Years
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Education */}
              {step === 4 && (
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-black">4. What is your highest qualification?</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["PhD", "Masters", "Bachelors", "High School / Diploma"].map((edu) => (
                      <button
                        key={edu}
                        type="button"
                        onClick={() => handleSelect("education", edu)}
                        className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all cursor-pointer ${
                          answers.education === edu
                            ? "bg-orange-light border-orange text-[#EA580C] glow-orange"
                            : "bg-white border-gray-200 text-gray-900 hover:border-gray-300"
                        }`}
                      >
                        {edu}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Work Experience */}
              {step === 5 && (
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-black">5. How many years of work experience?</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["None / < 1 Year", "1-2 Years", "3-5 Years", "5+ Years"].map((exp) => (
                      <button
                        key={exp}
                        type="button"
                        onClick={() => handleSelect("experience", exp)}
                        className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all cursor-pointer ${
                          answers.experience === exp
                            ? "bg-orange-light border-orange text-[#EA580C] glow-orange"
                            : "bg-white border-gray-200 text-gray-900 hover:border-gray-300"
                        }`}
                      >
                        {exp}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 6: English Proficiency */}
              {step === 6 && (
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-black">6. What is your English language score?</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "IELTS 8+ / PTE 79+ (Superior)",
                      "IELTS 7-7.5 / PTE 65-78 (Proficient)",
                      "IELTS 6-6.5 / PTE 50-64 (Competent)",
                      "Yet to attempt / Less than 6 IELTS",
                    ].map((eng) => (
                      <button
                        key={eng}
                        type="button"
                        onClick={() => handleSelect("english", eng)}
                        className={`p-3 rounded-xl border text-left text-sm font-semibold transition-all cursor-pointer ${
                          answers.english === eng
                            ? "bg-orange-light border-orange text-[#EA580C] glow-orange"
                            : "bg-white border-gray-200 text-gray-900 hover:border-gray-300"
                        }`}
                      >
                        {eng}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 7: Lead Form */}
              {step === 7 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-base font-semibold text-black mb-2">
                    7. Final Step: Enter details to compute results
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-900 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={answers.name}
                        onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                        placeholder="Rajesh Kumar"
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-black focus:outline-none focus:border-orange"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-900 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={answers.email}
                        onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                        placeholder="rajesh@gmail.com"
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-black focus:outline-none focus:border-orange"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-900 mb-1">WhatsApp / Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={answers.phone}
                        onChange={(e) => setAnswers({ ...answers, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-black focus:outline-none focus:border-orange"
                      />
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-lg text-[11px] text-gray-800">
                    By submitting, you agree to receive a detailed immigration report and a follow-up consultation call from VisaEnsure.
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#EA580C] hover:bg-[#F97316] text-black font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                  >
                    <Award className="w-5 h-5" />
                    <span>Calculate Eligibility Report</span>
                  </button>
                </form>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-1.5 text-xs text-gray-800 hover:text-black transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 7 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-1.5 text-xs bg-white hover:bg-white border border-gray-200 px-4 py-2 rounded-lg text-black hover:text-[#EA580C] transition-all"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6 py-4 text-center">
              <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                {/* SVG Radial Score */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#EA580C"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 - (251.2 * score) / 100}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold font-heading text-black">{score}</span>
                  <span className="text-[10px] text-gray-800">Score</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-heading text-black font-bold">Eligibility Calculated</h4>
                <p className="text-xs text-[#EA580C] tracking-wide uppercase font-semibold">
                  {answers.visaCategory} — {answers.country}
                </p>
                <p className="text-sm text-gray-900 max-w-md mx-auto pt-2 px-4 italic leading-relaxed">
                  "{feedback}"
                </p>
              </div>

              <div className="border border-gray-200 bg-white p-4 rounded-xl max-w-sm mx-auto text-left space-y-2.5">
                <h5 className="text-xs font-bold text-black uppercase tracking-wider">Report Details</h5>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-800">
                  <div>Education Factor: <strong className="text-black">{answers.education}</strong></div>
                  <div>Experience Factor: <strong className="text-black">{answers.experience}</strong></div>
                  <div>Language Score: <strong className="text-black">{answers.english.split(" ")[0]}</strong></div>
                  <div>Age Bracket: <strong className="text-black">{answers.age} Yrs</strong></div>
                </div>
              </div>

              <p className="text-xs text-gray-800">
                A VisaEnsure Senior Case Officer has been assigned to your file. We will call you shortly on{" "}
                <strong className="text-black">{answers.phone}</strong> to guide you on the document submission checklist.
              </p>

              <div className="flex gap-3 max-w-xs mx-auto pt-2">
                <button
                  onClick={() => {
                    setIsCalculated(false);
                    setStep(1);
                    setAnswers({
                      visaCategory: "",
                      country: "",
                      age: "",
                      education: "",
                      experience: "",
                      english: "",
                      name: "",
                      email: "",
                      phone: "",
                    });
                  }}
                  className="flex-1 py-2 bg-white hover:bg-white text-black border border-gray-200 rounded-lg text-xs transition-all"
                >
                  Check Again
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2 bg-[#EA580C] hover:bg-[#F97316] text-black font-bold rounded-lg text-xs transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
