export default function Publish() {
  return (
    <main>
      <section className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-white">
          Volt Publish
        </h1>
        <p className="text-lg text-white/90 mb-6">
          Helping authors edit, publish, and promote their books, including
          building custom author websites and digital support for launches.
        </p>
        <div className="mb-10 bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein">
          <h2 className="text-2xl font-bold mb-4 text-[#a259ff]">
            Our Publishing Services
          </h2>
          <ul className="list-disc pl-6 text-white/90 mb-4">
            <li>Book editing and formatting</li>
            <li>Publishing on Amazon and Selar</li>
            <li>Custom author websites</li>
            <li>Book launch and digital support</li>
          </ul>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#a259ff]">
            Get Started
          </h2>
          <p className="text-white/90 mb-4">
            Ready to publish your book or need help with your author platform?{" "}
            <a href="/contact" className="text-[#a259ff] underline">
              Contact us
            </a>{" "}
            for a free consultation.
          </p>
        </div>
      </section>
    </main>
  );
}
