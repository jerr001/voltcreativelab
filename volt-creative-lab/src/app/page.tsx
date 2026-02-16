import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center pt-20 pb-10 sm:pt-24 sm:pb-12 overflow-hidden">
        {/* Animated Blobs */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div
            className="absolute left-1/2 top-1/3 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] bg-[#a259ff] opacity-40 blur-3xl rounded-full animate-blob"
            style={{ zIndex: 1, transform: "translate(-60%, -50%)" }}
          />
          <div
            className="absolute left-1/3 top-1/2 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[260px] md:h-[260px] bg-[#6a5af9] opacity-30 blur-2xl rounded-full animate-blob"
            style={{
              zIndex: 1,
              animationDelay: "2s",
              transform: "translate(-50%, -40%)",
            }}
          />
          <div
            className="absolute right-1/4 bottom-1/4 w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[180px] md:h-[180px] bg-[#a259ff] opacity-20 blur-2xl rounded-full animate-blob"
            style={{
              zIndex: 1,
              animationDelay: "4s",
              transform: "translate(40%, 30%)",
            }}
          />
        </div>
        <h1 className="relative z-10 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-hero-fadein animate-float-text px-2 xs:px-0">
          We help businesses, ministries, and authors grow through{" "}
          <span className="text-white animate-scale-in">design</span>,{" "}
          <span
            className="text-white animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            web
          </span>
          , and{" "}
          <span
            className="text-white animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            publishing
          </span>{" "}
          services.
        </h1>
        <p
          className="relative z-10 text-base xs:text-lg md:text-xl text-white/80 max-w-xs xs:max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-8 animate-hero-fadein delay-150 animate-float-text px-2 xs:px-0"
          style={{ animationDelay: "0.5s" }}
        >
          Volt Creative Lab is your partner for creative design, web
          development, branding, video editing, social media management, tech
          academy, and author publishing services.
        </p>
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center mb-12 mt-4 animate-hero-fadein delay-300">
          <a
            href="#contact"
            className="btn-primary animate-pulse-btn focus-visible:ring-2 focus-visible:ring-[#a259ff]"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white text-center animate-hero-fadein">
          About Volt Creative Lab
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Vision Card */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center text-white animate-hero-fadein">
            <h3 className="text-xl font-bold mb-2 text-[#a259ff]">
              Our Vision
            </h3>
            <p className="text-base opacity-90">
              To become a trusted creative and digital partner for businesses,
              ministries, and creators globally, delivering high-quality design,
              technology, and growth solutions that create real impact.
            </p>
          </div>
          {/* Mission Card */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center text-white animate-hero-fadein delay-150">
            <h3 className="text-xl font-bold mb-2 text-[#a259ff]">
              Our Mission
            </h3>
            <p className="text-base opacity-90">
              To provide affordable, professional, and results-driven creative,
              web, and digital services while building a strong ecosystem for
              learning, publishing, and digital growth.
            </p>
          </div>
          {/* Values Card */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center text-white animate-hero-fadein delay-300">
            <h3 className="text-xl font-bold mb-2 text-[#a259ff]">
              Core Values
            </h3>
            <ul className="text-base opacity-90 space-y-1">
              <li>
                <b>Excellence:</b> Quality work, always.
              </li>
              <li>
                <b>Integrity:</b> Honesty with clients and partners.
              </li>
              <li>
                <b>Growth:</b> Always learning and improving.
              </li>
              <li>
                <b>Clarity:</b> Clear, open communication.
              </li>
              <li>
                <b>Ownership:</b> We take responsibility for results.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* What We Do Card */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white animate-hero-fadein">
            <h3 className="text-xl font-bold mb-4 text-[#a259ff]">
              What We Do
            </h3>
            <ul className="list-disc pl-5 space-y-1 opacity-90">
              <li>Branding & Visual Identity</li>
              <li>Graphic Design (flyers, posters, social media)</li>
              <li>Website Design & Development</li>
              <li>Video Editing</li>
              <li>Social Media Management</li>
              <li>Tech Education (Volt Academy)</li>
              <li>Publishing & Author Services (Volt Publish)</li>
            </ul>
          </div>
          {/* Sub-Brands Card */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white animate-hero-fadein delay-150">
            <h3 className="text-xl font-bold mb-4 text-[#a259ff]">
              Our Sub-Brands
            </h3>
            <ul className="list-disc pl-5 space-y-1 opacity-90">
              <li>
                <b>Volt Studio:</b> Creative, branding, design, web, and digital
                services.
              </li>
              <li>
                <b>Volt Academy:</b> Tech training and mentorship.
              </li>
              <li>
                <b>Volt Publish:</b> Author publishing and digital support.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 animate-hero-fadein delay-300">
          <span className="text-lg text-white/80 text-center">
            Ready to grow your brand or project?
          </span>
          <a
            href="#contact"
            className="btn-primary mt-4 px-8 py-3 text-lg rounded-lg shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Branding & Visual Identity */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white flex flex-col h-full min-h-[200px] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein">
            <h3 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Branding & Visual Identity
            </h3>
            <p className="text-white/90">
              Logo design, brand guidelines, and visual storytelling to help you
              stand out.
            </p>
          </div>
          {/* Graphic Design */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white flex flex-col h-full min-h-[200px] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-150">
            <h3 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Graphic Design
            </h3>
            <p className="text-white/90">
              Flyers, posters, social media graphics, and more for your
              marketing needs.
            </p>
          </div>
          {/* Website Design & Development */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white flex flex-col h-full min-h-[200px] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-200">
            <h3 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Website Design & Development
            </h3>
            <p className="text-white/90">
              Modern, responsive websites and web apps tailored to your goals.
            </p>
          </div>
          {/* Video Editing */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white flex flex-col h-full min-h-[200px] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-300">
            <h3 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Video Editing
            </h3>
            <p className="text-white/90">
              Professional video content for marketing, education, and
              storytelling.
            </p>
          </div>
          {/* Social Media Management */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white flex flex-col h-full min-h-[200px] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-400">
            <h3 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Social Media Management
            </h3>
            <p className="text-white/90">
              Grow your audience and engagement across all platforms with our
              expert management.
            </p>
          </div>
          {/* Tech Education (Volt Academy) */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white flex flex-col h-full min-h-[200px] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-500">
            <h3 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Tech Education (Volt Academy)
            </h3>
            <ul className="list-disc pl-6 text-white/90 mb-2">
              <li>Web Development Training</li>
              <li>Frontend & Full-stack learning tracks</li>
              <li>Mentorship and practical learning</li>
            </ul>
          </div>
          <div className="hidden xl:block"></div>
          {/* Publishing & Author Services (Volt Publish) */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white flex flex-col h-full min-h-[200px] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-600">
            <h3 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Publishing & Author Services (Volt Publish)
            </h3>
            <ul className="list-disc pl-6 text-white/90 mb-2">
              <li>Book editing and formatting</li>
              <li>Publishing on Amazon and Selar</li>
              <li>Custom author websites</li>
              <li>Book launch and digital support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SUB-BRANDS SECTION */}
      <section id="solutions" className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-white">
          Our Sub-Brands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein">
            <h3 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Volt Studio
            </h3>
            <p className="text-white/90">
              Creative, branding, design, web development, and digital services
              for clients.
            </p>
          </div>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-150">
            <h3 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Volt Academy
            </h3>
            <p className="text-white/90">
              Training aspiring developers and tech talents through structured
              programs.
            </p>
          </div>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-300">
            <h3 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Volt Publish
            </h3>
            <p className="text-white/90">
              Helping authors edit, publish, and promote their books, including
              building author websites.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-white">
          Our Portfolio
        </h2>
        <p className="text-lg text-white/90 mb-10">
          A showcase of some of our recent projects and success stories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein">
            <h3 className="text-xl font-bold mb-2 text-[#a259ff]">
              Brand Identity for Ministry
            </h3>
            <p className="text-white/90">
              Developed a cohesive brand and digital presence for a growing
              ministry.
            </p>
          </div>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-100">
            <h3 className="text-xl font-bold mb-2 text-[#a259ff]">
              E-commerce Website
            </h3>
            <p className="text-white/90">
              Launched a custom online store with seamless checkout and
              analytics.
            </p>
          </div>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-200">
            <h3 className="text-xl font-bold mb-2 text-[#a259ff]">
              Author Book Launch
            </h3>
            <p className="text-white/90">
              Guided an author from manuscript to published book and online
              sales.
            </p>
          </div>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-300">
            <h3 className="text-xl font-bold mb-2 text-[#a259ff]">
              Social Media Campaign
            </h3>
            <p className="text-white/90">
              Increased engagement and reach for a business through creative
              campaigns.
            </p>
          </div>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-400">
            <h3 className="text-xl font-bold mb-2 text-[#a259ff]">
              Web Development Training
            </h3>
            <p className="text-white/90">
              Mentored aspiring developers through Volt Academy's hands-on
              programs.
            </p>
          </div>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-500">
            <h3 className="text-xl font-bold mb-2 text-[#a259ff]">
              Book Publishing Support
            </h3>
            <p className="text-white/90">
              Helped authors edit, publish, and promote their books online.
            </p>
          </div>
        </div>
      </section>

      {/* ACADEMY SECTION */}
      <section id="academy" className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-white">
          Volt Academy
        </h2>
        <p className="text-lg text-white/90 mb-6">
          Empowering the next generation of tech talent through hands-on
          learning, mentorship, and real-world projects.
        </p>
        <div className="mb-10 bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein">
          <h3 className="text-2xl font-bold mb-4 text-[#a259ff]">
            What We Offer
          </h3>
          <ul className="list-disc pl-6 text-white/90 mb-4">
            <li>Web Development Training (Frontend & Full-stack tracks)</li>
            <li>Mentorship from experienced professionals</li>
            <li>Practical, project-based learning</li>
            <li>Career guidance and support</li>
          </ul>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4 text-[#a259ff]">
            How to Join
          </h3>
          <p className="text-white/90 mb-4">
            Interested in joining Volt Academy? Contact us to learn about
            upcoming cohorts, programs, and how you can get started on your tech
            journey.
          </p>
        </div>
      </section>

      {/* PUBLISH SECTION */}
      <section id="publish" className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-white">
          Volt Publish
        </h2>
        <p className="text-lg text-white/90 mb-6">
          Helping authors edit, publish, and promote their books, including
          building custom author websites and digital support for launches.
        </p>
        <div className="mb-10 bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein">
          <h3 className="text-2xl font-bold mb-4 text-[#a259ff]">
            Our Publishing Services
          </h3>
          <ul className="list-disc pl-6 text-white/90 mb-4">
            <li>Book editing and formatting</li>
            <li>Publishing on Amazon and Selar</li>
            <li>Custom author websites</li>
            <li>Book launch and digital support</li>
          </ul>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4 text-[#a259ff]">
            Get Started
          </h3>
          <p className="text-white/90 mb-4">
            Ready to publish your book or need help with your author platform?{" "}
            <a href="#contact" className="text-[#a259ff] underline">
              Contact us
            </a>{" "}
            for a free consultation.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-2xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-white">Get a Quote</h2>
        <p className="text-lg text-white/90 mb-6">
          Ready to start your project or need more information? Fill out the
          form below and our team will get back to you soon.
        </p>
        <form className="bg-[#232046] rounded-lg shadow p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-[#a259ff]"
            >
              Name
            </label>
            <input
              id="name"
              className="border border-[#444] bg-[#18162a] text-white rounded px-4 py-2"
              type="text"
              placeholder="Your Name"
              required
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
              className="border border-[#444] bg-[#18162a] text-white rounded px-4 py-2"
              type="email"
              placeholder="Your Email"
              required
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
              className="border border-[#444] bg-[#18162a] text-white rounded px-4 py-2"
              type="text"
              placeholder="Phone (optional)"
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
              className="border border-[#444] bg-[#18162a] text-white rounded px-4 py-2"
              placeholder="Tell us about your project or request..."
              rows={5}
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full mt-2">
            Send Request
          </button>
        </form>
      </section>
    </main>
  );
}
