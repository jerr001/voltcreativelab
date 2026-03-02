"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function AcademyForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paymentOption: "",
    message: "",
    referralCode: "",
  });
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Auto-populate referral code from URL
  useEffect(() => {
    const refCode = searchParams.get("ref");
    if (refCode) {
      setFormData((prev) => ({
        ...prev,
        referralCode: refCode.toUpperCase(),
      }));
    }
  }, [searchParams]);

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
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("paymentOption", formData.paymentOption);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("referralCode", formData.referralCode);
      formDataToSend.append("subject", "Web Development Bootcamp Registration");

      const response = await fetch(
        "https://formsubmit.co/voltcreativeacademy@gmail.com",
        {
          method: "POST",
          body: formDataToSend,
        },
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          paymentOption: "",
          message: "",
          referralCode: "",
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#232046] rounded-2xl shadow-lg p-8 space-y-6"
    >
      {/* Success/Error Messages */}
      {submitStatus === "success" && (
        <div className="p-4 bg-green-900/30 border border-green-600 text-green-200 rounded-lg">
          ✓ Registration submitted successfully! We&apos;ll contact you soon.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="p-4 bg-red-900/30 border border-red-600 text-red-200 rounded-lg">
          ✗ Failed to submit registration. Please try again.
        </div>
      )}

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
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-lg bg-[#1a1530] border border-[#b35a00]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#b35a00] focus:ring-2 focus:ring-[#b35a00]/20 transition-all disabled:opacity-50"
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
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-lg bg-[#1a1530] border border-[#b35a00]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#b35a00] focus:ring-2 focus:ring-[#b35a00]/20 transition-all disabled:opacity-50"
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
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-lg bg-[#1a1530] border border-[#b35a00]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#b35a00] focus:ring-2 focus:ring-[#b35a00]/20 transition-all disabled:opacity-50"
          placeholder="+1 (555) 123-4567 or +234 8XX XXX XXXX"
        />
        <p className="text-white/60 text-xs mt-1">
          International format: include country code (e.g., +1, +44, +234)
        </p>
      </div>

      {/* Payment Option */}
      <div>
        <label className="block text-white font-semibold mb-3">
          Payment Option (Optional)
        </label>
        <select
          name="paymentOption"
          value={formData.paymentOption}
          onChange={handleInputChange}
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-lg bg-[#1a1530] border border-[#b35a00]/30 text-white focus:outline-none focus:border-[#b35a00] focus:ring-2 focus:ring-[#b35a00]/20 transition-all disabled:opacity-50"
        >
          <option value="">Select a payment option</option>
          <option value="full">Full Payment - ₦70,000 (Upfront)</option>
          <option value="installment">
            Installment - ₦35,000 (Upfront) + ₦35,000 (During Training)
          </option>
        </select>
      </div>

      {/* Referral Code */}
      <div>
        <label className="block text-white font-semibold mb-3">
          Referral Code{" "}
          <span className="text-white/60 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          name="referralCode"
          value={formData.referralCode}
          onChange={handleInputChange}
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-lg bg-[#1a1530] border border-[#b35a00]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#b35a00] focus:ring-2 focus:ring-[#b35a00]/20 transition-all disabled:opacity-50"
          placeholder="Enter referral code"
        />
        <p className="text-white/60 text-xs mt-1">
          Enter your sales rep&apos;s referral code if you were referred by them
        </p>
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
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-lg bg-[#1a1530] border border-[#b35a00]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#b35a00] focus:ring-2 focus:ring-[#b35a00]/20 transition-all resize-none disabled:opacity-50"
          placeholder="Tell us about your web development experience and what you hope to achieve..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-[#b35a00] to-[#a259ff] text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Submitting..." : "Register for Bootcamp"}
      </button>

      <p className="text-white/60 text-xs text-center">
        By registering, you agree to our terms and conditions
      </p>
    </form>
  );
}
