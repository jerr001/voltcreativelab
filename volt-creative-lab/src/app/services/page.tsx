export default function Services() {
  return (
    <main>
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-white">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Branding & Visual Identity */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white flex flex-col h-full min-h-[200px] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein">
            <h2 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Branding & Visual Identity
            </h2>
            <p className="text-white/90">
              Logo design, brand guidelines, and visual storytelling to help you
              stand out.
            </p>
          </div>
          {/* Graphic Design */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white flex flex-col h-full min-h-[200px] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-150">
            <h2 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Graphic Design
            </h2>
            <p className="text-white/90">
              Flyers, posters, social media graphics, and more for your
              marketing needs.
            </p>
          </div>
          {/* Website Design & Development */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white flex flex-col h-full min-h-[200px] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-200">
            <h2 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Website Design & Development
            </h2>
            <p className="text-white/90">
              Modern, responsive websites and web apps tailored to your goals.
            </p>
          </div>
          {/* Video Editing */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white flex flex-col h-full min-h-[200px] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-300">
            <h2 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Video Editing
            </h2>
            <p className="text-white/90">
              Professional video content for marketing, education, and
              storytelling.
            </p>
          </div>
          {/* Social Media Management */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white flex flex-col h-full min-h-[200px] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-400">
            <h2 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Social Media Management
            </h2>
            <p className="text-white/90">
              Grow your audience and engagement across all platforms with our
              expert management.
            </p>
          </div>
          {/* Tech Education (Volt Academy) */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white flex flex-col h-full min-h-[200px] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-500">
            <h2 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Tech Education (Volt Academy)
            </h2>
            <ul className="list-disc pl-6 text-white/90 mb-2">
              <li>Web Development Training</li>
              <li>Frontend & Full-stack learning tracks</li>
              <li>Mentorship and practical learning</li>
            </ul>
          </div>
          {/* Empty div for centering last card on xl screens */}
          <div className="hidden xl:block"></div>
          {/* Publishing & Author Services (Volt Publish) */}
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white flex flex-col h-full min-h-[200px] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein delay-600">
            <h2 className="text-2xl font-bold mb-2 text-[#a259ff]">
              Publishing & Author Services (Volt Publish)
            </h2>
            <ul className="list-disc pl-6 text-white/90 mb-2">
              <li>Book editing and formatting</li>
              <li>Publishing on Amazon and Selar</li>
              <li>Custom author websites</li>
              <li>Book launch and digital support</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
