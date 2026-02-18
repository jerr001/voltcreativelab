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

  // Web Development Projects
  const webProjects = [
    {
      title: "AARONice Prime Global",
      image: "/portfolio/web-development/aaronice-prime-global.png",
      url: "https://aaronice.org",
    },
    {
      title: "Author Website",
      image: "/portfolio/web-development/author-website.png",
      url: "https://www.authorco-gids.com",
    },
    {
      title: "Flexmart Product Page",
      image: "/portfolio/web-development/flexmart-product-page.png",
      url: "https://flexmart-three.vercel.app/",
    },
    {
      title: "Grace Point Church",
      image: "/portfolio/web-development/grace-point-church.png",
      url: "https://grace-point-church.vercel.app",
    },
    {
      title: "Jeremiah Portfolio",
      image: "/portfolio/web-development/jeremiah-portfolio.png",
      url: "https://my-react-portfolio-virid.vercel.app/",
    },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#232046] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Project Screenshot */}
                <div
                  className="relative w-full h-48 cursor-pointer group overflow-hidden bg-black/50"
                  onClick={() => {
                    // Open lightbox if needed
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                      View
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#a259ff]">
                    {project.title}
                  </h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block btn-primary px-6 py-2 text-sm rounded-lg hover:bg-[#a259ff] transition-all duration-300"
                    >
                      View Live →
                    </a>
                  )}
                  {!project.url && (
                    <span className="inline-block px-6 py-2 text-sm text-white/50 cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            ))}
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
