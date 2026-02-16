export default function Solutions() {
  return (
    <main>
      <section className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-white">
          Our Sub-Brands
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein animate-slide-up-fade">
            <h2 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Volt Studio
            </h2>
            <p className="text-white/90">
              Creative, branding, design, web development, and digital services
              for clients.
            </p>
          </div>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein animate-slide-up-fade delay-150">
            <h2 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Volt Academy
            </h2>
            <p className="text-white/90">
              Training aspiring developers and tech talents through structured
              programs.
            </p>
          </div>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein animate-slide-up-fade delay-300">
            <h2 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Volt Publish
            </h2>
            <p className="text-white/90">
              Helping authors edit, publish, and promote their books, including
              building author websites.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
