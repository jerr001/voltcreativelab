"use client";

import { Suspense } from "react";
import AcademyForm from "@/components/AcademyForm";

export default function Academy() {
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
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Web Development Training Bootcamp
          </h2>
          <p className="text-xl font-semibold mb-6 text-white/95">
            Next Cohort Begins Monday, April 13th, 2026
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-2 animate-smooth-slide">
              <h3 className="text-lg font-bold mb-3">Program Details</h3>
              <ul className="space-y-2 text-white/90">
                <li>Duration: 3 Months</li>
                <li>Format: Online & Physical (Choose your preference)</li>
                <li>Focus: Frontend Web Development</li>
                <li>Industry-Relevant Projects</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-2 animate-smooth-slide delay-100">
              <h3 className="text-lg font-bold mb-3">Investment</h3>
              <p className="text-3xl font-extrabold mb-4">₦80,000</p>
              <p className="text-white/90 text-sm">
                Payment options available for flexibility
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1 animate-smooth-scale delay-75">
              <p className="font-semibold mb-2">Payment Option 1</p>
              <p className="text-white/90 text-sm">
                Full upfront payment - ₦80,000
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1 animate-smooth-scale delay-100">
              <p className="font-semibold mb-2">Payment Option 2</p>
              <p className="text-white/90 text-sm">
                50% upfront (₦40,000), 50% during training (₦40,000)
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1 animate-smooth-scale delay-125">
              <p className="font-semibold mb-2">Certificate & Careers</p>
              <p className="text-white/90 text-sm">
                Certificate awarded + Internship opportunities
              </p>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border-l-4 border-white transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-2 animate-smooth-slide delay-150">
            <h3 className="text-lg font-bold mb-3">Program Benefits</h3>
            <ul className="space-y-2 text-white/90 text-sm md:text-base">
              <li>Industry-recognized certification upon completion</li>
              <li>
                Top-performing students retained as interns in Volt Creative Lab
              </li>
              <li>Mentorship from experienced web developers</li>
              <li>Portfolio-building projects with real-world applications</li>
              <li>Career guidance and placement support</li>
            </ul>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16 bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl hover:-translate-y-3 animate-hero-fadein">
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

          <Suspense
            fallback={
              <div className="text-white text-center">Loading form...</div>
            }
          >
            <AcademyForm />
          </Suspense>

          <div className="bg-[#1a1530] rounded-xl p-6 mt-8 border border-[#b35a00]/30">
            <h3 className="text-white font-bold mb-3">Payment Processing</h3>
            <p className="text-white/80 text-sm mb-4">
              After submitting your registration, you will receive an email with
              payment instructions. We accept payments via:
            </p>
            <ul className="text-white/80 text-sm space-y-1 mb-4">
              <li>Bank Transfer</li>
              <li>Paystack (Nigerian & International)</li>
              <li>Flutterwave (Nigerian & International)</li>
            </ul>
            <p className="text-white/70 text-xs">
              For inquiries about payment methods or installment plans, contact
              us at{" "}
              <a
                href="mailto:voltcreativeacademy@gmail.com"
                className="text-[#b35a00] font-semibold hover:text-[#a259ff] transition-colors"
              >
                voltcreativeacademy@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
