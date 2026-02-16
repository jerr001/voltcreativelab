export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white text-center animate-hero-fadein">
          About Volt Creative Lab
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Vision Card */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center text-white animate-hero-fadein transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-bold mb-2 text-[#a259ff]">
              Our Vision
            </h2>
            <p className="text-base opacity-90">
              To become a trusted creative and digital partner for businesses,
              ministries, and creators globally, delivering high-quality design,
              technology, and growth solutions that create real impact.
            </p>
          </div>
          {/* Mission Card */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center text-white animate-hero-fadein delay-150 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-bold mb-2 text-[#a259ff]">
              Our Mission
            </h2>
            <p className="text-base opacity-90">
              To provide affordable, professional, and results-driven creative,
              web, and digital services while building a strong ecosystem for
              learning, publishing, and digital growth.
            </p>
          </div>
          {/* Values Card */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center text-white animate-hero-fadein delay-300 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-bold mb-2 text-[#a259ff]">
              Core Values
            </h2>
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
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white animate-hero-fadein transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-bold mb-4 text-[#a259ff]">
              What We Do
            </h2>
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
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white animate-hero-fadein delay-150 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-bold mb-4 text-[#a259ff]">
              Our Sub-Brands
            </h2>
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
            href="/contact"
            className="btn-primary mt-4 px-8 py-3 text-lg rounded-lg shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
