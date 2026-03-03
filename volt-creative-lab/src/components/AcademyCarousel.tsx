"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AcademyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Web Development Training Bootcamp",
      startDate: "April 13th, 2026",
      duration: "3 Months",
      cost: "₦80,000",
      highlight: "Online & Physical Options Available",
      description: "Intensive hands-on training with industry mentorship",
    },
    {
      title: "Career Growth Through Tech",
      description: "Industry-recognized certificate + Internship opportunities",
      highlight: "Top Performers Retained as Interns",
      cta: "Learn More",
    },
    {
      title: "Expert Mentorship",
      description: "Learn from experienced web developers",
      highlight: "Portfolio-Building Real-World Projects",
      cta: "Join Our Academy",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full mb-12 bg-gradient-to-r from-[#b35a00] to-[#a259ff] rounded-2xl overflow-hidden shadow-lg">
      {/* Carousel Container */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-center text-white transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
              {slide.title}
            </h3>

            {slide.startDate && (
              <p className="text-lg md:text-xl font-semibold text-white/95 mb-3">
                Starts Monday, {slide.startDate}
              </p>
            )}

            <p className="text-white/90 mb-3">{slide.description}</p>

            {slide.duration && (
              <div className="flex gap-4 mb-4 flex-wrap">
                <span className="bg-white/20 px-3 py-1 rounded-lg text-sm font-semibold">
                  {slide.duration}
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-lg text-sm font-semibold">
                  {slide.cost}
                </span>
              </div>
            )}

            <p className="text-white/95 font-semibold mb-4">
              ✓ {slide.highlight}
            </p>

            <Link
              href="/academy"
              className="inline-block w-fit bg-white text-[#b35a00] font-bold py-2 px-6 rounded-lg hover:bg-white/90 transition-colors"
            >
              Register Now
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-6"
                : "bg-white/50 w-2 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
