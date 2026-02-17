"use client";

import ImageLightbox from "@/components/ImageLightbox";

export default function Portfolio() {
  // Graphic Design - Flyers (sorted by name)
  const flyers = [
    "/portfolio/graphic-design/flyers/conference-flyer.png",
    "/portfolio/graphic-design/flyers/FaithPossibilitiesFlyer.png",
    "/portfolio/graphic-design/flyers/flyerFive.png",
    "/portfolio/graphic-design/flyers/flyerFour.png",
    "/portfolio/graphic-design/flyers/flyerOne.png",
    "/portfolio/graphic-design/flyers/flyerSix.png",
    "/portfolio/graphic-design/flyers/flyerThree.png",
    "/portfolio/graphic-design/flyers/flyerTwo.png",
    "/portfolio/graphic-design/flyers/jummyzobo.png",
    "/portfolio/graphic-design/flyers/t-shirtbrand.png",
    "/portfolio/graphic-design/flyers/webdesign.png",
    "/portfolio/graphic-design/flyers/webdesigntraining.png",
    "/portfolio/graphic-design/flyers/WebDevClass.png",
  ];

  // Graphic Design - Logos (sorted by name)
  const logos = [
    "/portfolio/graphic-design/logos/aralogoblue.png",
    "/portfolio/graphic-design/logos/aralogodark.png",
    "/portfolio/graphic-design/logos/fastflow.png",
    "/portfolio/graphic-design/logos/gigster.png",
    "/portfolio/graphic-design/logos/joevangelism.png",
    "/portfolio/graphic-design/logos/jummyzobo.png",
    "/portfolio/graphic-design/logos/ola_made_logo.png",
    "/portfolio/graphic-design/logos/regalcrestlogo.png",
    "/portfolio/graphic-design/logos/VoltCreativeLabLogo.png",
  ];

  // Book Covers (sorted by name)
  const bookCovers = [
    "/portfolio/book-cover/beyondtongues.png",
    "/portfolio/book-cover/prayedup.png",
    "/portfolio/book-cover/prayedupdevotional.png",
    "/portfolio/book-cover/printyourownmoney.png",
    "/portfolio/book-cover/slaininthespirit.png",
  ];

  return (
    <main>
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-white">
          Our Portfolio
        </h1>
        <p className="text-lg text-white/90 mb-12">
          A showcase of our creative work across web, graphic design, and
          publishing.
        </p>

        {/* Websites Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#a259ff]">
            Web Development
          </h2>
          <div className="bg-[#232046] rounded-2xl shadow-lg p-8 text-white text-center py-16 animate-hero-fadein">
            <p className="text-lg text-white/80">
              More website projects coming soon...
            </p>
          </div>
        </div>

        {/* Graphic Design Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#a259ff]">
            Graphic Design
          </h2>

          {/* Flyers */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-white/90">
              Flyers
            </h3>
            <ImageLightbox images={flyers} alt="Flyer" />
          </div>

          {/* Logos */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white/90">Logos</h3>
            <ImageLightbox images={logos} alt="Logo" />
          </div>
        </div>

        {/* Book Covers Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-[#a259ff]">
            Book Covers
          </h2>
          <ImageLightbox images={bookCovers} alt="Book Cover" />
        </div>
      </section>
    </main>
  );
}
