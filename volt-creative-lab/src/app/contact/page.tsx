"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://formsubmit.co/voltcreativelab@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent. We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <section className="max-w-2xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-white">Get a Quote</h1>
        <p className="text-lg text-white/90 mb-6">
          Ready to start your project or need more information? Fill out the
          form below and our team will get back to you soon.
        </p>

        {/* Status Messages */}
        {status.type && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              status.type === "success"
                ? "bg-green-900/30 border border-green-600 text-green-200"
                : "bg-red-900/30 border border-red-600 text-red-200"
            }`}
          >
            {status.message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-[#232046] rounded-lg shadow p-6 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-[#a259ff]"
            >
              Name
            </label>
            <input
              id="name"
              className="border border-[#444] bg-[#18162a] text-white rounded px-4 py-2 focus:outline-none focus:border-[#a259ff] transition"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-[#a259ff]"
            >
              Email
            </label>
            <input
              id="email"
              className="border border-[#444] bg-[#18162a] text-white rounded px-4 py-2 focus:outline-none focus:border-[#a259ff] transition"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="phone"
              className="text-sm font-semibold text-[#a259ff]"
            >
              Phone <span className="text-[#888] font-normal">(optional)</span>
            </label>
            <input
              id="phone"
              className="border border-[#444] bg-[#18162a] text-white rounded px-4 py-2 focus:outline-none focus:border-[#a259ff] transition"
              type="text"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-[#a259ff]"
            >
              Message
            </label>
            <textarea
              id="message"
              className="border border-[#444] bg-[#18162a] text-white rounded px-4 py-2 focus:outline-none focus:border-[#a259ff] transition"
              placeholder="Tell us about your project or request..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed transition"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Request"}
          </button>
        </form>
      </section>
    </main>
  );
}
