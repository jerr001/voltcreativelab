"use client";

import { useState } from "react";

export default function Academy() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paymentOption: "full",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/voltcreativelab@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            subject: "Web Development Bootcamp Registration",
          }),
        },
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          paymentOption: "full",
          message: "",
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Volt Academy
        </h1>
        <p className="text-lg text-white/90 mb-12">
          Empowering the next generation of tech talent through hands-on
          learning, mentorship, and real-world projects.
        </p>

        {/* Bootcamp Announcement */}
        <div className="mb-16 bg-gradient-to-r from-[#b35a00] to-[#a259ff] rounded-2xl shadow-lg p-8 md:p-12 text-white animate-hero-fadein">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">🎯</span>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Web Development Training Bootcamp
            </h2>
          </div>
          <p className="text-xl font-semibold mb-6 text-white/95">
            Next Cohort Begins Monday, April 6th, 2026
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3">Program Details</h3>
              <ul className="space-y-2 text-white/90">
                <li>✓ Duration: 3 Months</li>
                <li>✓ Format: Intensive Hands-on Training</li>
                <li>✓ Focus: Full-Stack Web Development</li>
                <li>✓ Industry-Relevant Projects</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3">Investment</h3>
              <p className="text-3xl font-extrabold mb-4">₦70,000</p>
              <p className="text-white/90 text-sm">
                Payment options available for flexibility
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="font-semibold mb-2">Payment Option 1</p>
              <p className="text-white/90 text-sm">Full upfront payment</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="font-semibold mb-2">Payment Option 2</p>
              <p className="text-white/90 text-sm">
                50% upfront, 50% during training
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="font-semibold mb-2">Certificate & Careers</p>
              <p className="text-white/90 text-sm">
                Certificate awarded + Internship opportunities
              </p>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border-l-4 border-white">
            <h3 className="text-lg font-bold mb-3">🏆 Program Benefits</h3>
            <ul className="space-y-2 text-white/90 text-sm md:text-base">
              <li>✓ Industry-recognized certification upon completion</li>
              <li>
                ✓ Top-performing students retained as interns in Volt Creative
                Lab
              </li>
              <li>✓ Mentorship from experienced web developers</li>
              <li>
                ✓ Portfolio-building projects with real-world applications
              </li>
              <li>✓ Career guidance and placement support</li>
            </ul>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16 bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein">
          <h2 className="text-2xl font-bold mb-4 text-[#a259ff]">
            What We Offer
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-[#b35a00] font-bold mr-3">→</span>
              <span className="text-white/90">
                Web Development Training (Frontend & Full-stack tracks)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#b35a00] font-bold mr-3">→</span>
              <span className="text-white/90">
                Mentorship from experienced professionals
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#b35a00] font-bold mr-3">→</span>
              <span className="text-white/90">
                Practical, project-based learning
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#b35a00] font-bold mr-3">→</span>
              <span className="text-white/90">Career guidance and support</span>
            </li>
          </ul>
        </div>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            Register for the Bootcamp
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-[#232046] rounded-2xl shadow-lg p-8 space-y-6"
          >
            {/* Full Name */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Full Name <span className="text-[#b35a00]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1530] border border-[#b35a00]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#b35a00] focus:ring-2 focus:ring-[#b35a00]/20 transition-all"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Email <span className="text-[#b35a00]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1530] border border-[#b35a00]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#b35a00] focus:ring-2 focus:ring-[#b35a00]/20 transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Phone Number <span className="text-[#b35a00]">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1530] border border-[#b35a00]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#b35a00] focus:ring-2 focus:ring-[#b35a00]/20 transition-all"
                placeholder="+234 8XX XXX XXXX"
              />
            </div>

            {/* Payment Option */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Payment Option <span className="text-[#b35a00]">*</span>
              </label>
              <select
                name="paymentOption"
                value={formData.paymentOption}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1530] border border-[#b35a00]/30 text-white focus:outline-none focus:border-[#b35a00] focus:ring-2 focus:ring-[#b35a00]/20 transition-all"
              >
                <option value="full">Full Payment - ₦70,000 (Upfront)</option>
                <option value="installment">
                  Installment - ₦35,000 (Upfront) + ₦35,000 (During Training)
                </option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1530] border border-[#b35a00]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#b35a00] focus:ring-2 focus:ring-[#b35a00]/20 transition-all resize-none"
                placeholder="Tell us about your web development experience and what you hope to achieve..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#b35a00] to-[#a259ff] hover:from-[#9d4900] hover:to-[#8f43ff] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Submitting..." : "Register Now"}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="bg-green-500/20 border border-green-500 text-green-200 px-4 py-3 rounded-lg text-center">
                ✓ Registration submitted successfully! We'll contact you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg text-center">
                ✗ Error submitting form. Please try again.
              </div>
            )}
          </form>

          <p className="text-center text-white/70 text-sm mt-6">
            Questions? Contact us at{" "}
            <a
              href="mailto:voltcreativelab@gmail.com"
              className="text-[#b35a00] font-semibold hover:text-[#a259ff] transition-colors"
            >
              voltcreativelab@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
