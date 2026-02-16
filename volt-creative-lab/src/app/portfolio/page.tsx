export default function Portfolio() {
  return (
    <main>
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-white">
          Our Portfolio
        </h1>
        <p className="text-lg text-white/90 mb-10">
          A showcase of some of our recent projects and success stories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein animate-slide-up-fade">
            <h2 className="text-xl font-bold mb-2 text-[#a259ff]">
              Brand Identity for Ministry
            </h2>
            <p className="text-white/90">
              Developed a cohesive brand and digital presence for a growing
              ministry.
            </p>
          </div>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein animate-slide-up-fade delay-100">
            <h2 className="text-xl font-bold mb-2 text-[#a259ff]">
              E-commerce Website
            </h2>
            <p className="text-white/90">
              Launched a custom online store with seamless checkout and
              analytics.
            </p>
          </div>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein animate-slide-up-fade delay-200">
            <h2 className="text-xl font-bold mb-2 text-[#a259ff]">
              Author Book Launch
            </h2>
            <p className="text-white/90">
              Guided an author from manuscript to published book and online
              sales.
            </p>
          </div>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein animate-slide-up-fade delay-300">
            <h2 className="text-xl font-bold mb-2 text-[#a259ff]">
              Social Media Campaign
            </h2>
            <p className="text-white/90">
              Increased engagement and reach for a business through creative
              campaigns.
            </p>
          </div>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein animate-slide-up-fade delay-400">
            <h2 className="text-xl font-bold mb-2 text-[#a259ff]">
              Web Development Training
            </h2>
            <p className="text-white/90">
              Mentored aspiring developers through Volt Academy's hands-on
              programs.
            </p>
          </div>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein animate-slide-up-fade delay-500">
            <h2 className="text-xl font-bold mb-2 text-[#a259ff]">
              Book Publishing Support
            </h2>
            <p className="text-white/90">
              Helped authors edit, publish, and promote their books online.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
