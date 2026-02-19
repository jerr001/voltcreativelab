export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1833] text-white pt-10 pb-6 mt-16 border-t border-[#2d2a4a]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-10">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center lg:items-start gap-2 mb-4 lg:mb-0">
          <img
            src="/volt-logo.png"
            alt="Volt Creative Lab Logo"
            className="h-14 w-14 sm:h-16 sm:w-16 md:h-12 md:w-12 rounded-full shadow-lg mb-1"
          />
          <span className="text-base font-semibold tracking-wide text-center md:text-left">
            Volt Creative Lab
          </span>
          <span className="text-xs text-[#b5b5d6] text-center md:text-left">
            Creative & Digital Solutions
          </span>
        </div>
        {/* Navigation */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-16 text-sm font-medium items-center lg:items-start justify-center w-full lg:w-auto">
          <div className="flex flex-col gap-2">
            <span className="uppercase text-[#a259ff] text-xs font-bold mb-1">
              Company
            </span>
            <a href="/about" className="hover:text-[#a259ff] transition">
              About
            </a>
            <a href="/services" className="hover:text-[#a259ff] transition">
              Services
            </a>
            <a href="/solutions" className="hover:text-[#a259ff] transition">
              Sub-Brands
            </a>
            <a href="/portfolio" className="hover:text-[#a259ff] transition">
              Portfolio
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="uppercase text-[#a259ff] text-xs font-bold mb-1">
              Learn & Publish
            </span>
            <a href="/academy" className="hover:text-[#a259ff] transition">
              Academy
            </a>
            <a href="/publish" className="hover:text-[#a259ff] transition">
              Publishing
            </a>
            <a href="/contact" className="hover:text-[#a259ff] transition">
              Contact
            </a>
          </div>
        </div>
        {/* Socials & Contact */}
        <div className="flex flex-col items-center lg:items-end gap-4 mt-6 lg:mt-0">
          <div className="flex flex-col items-center lg:items-end gap-2">
            <span className="uppercase text-[#a259ff] text-xs font-bold mb-1">
              Contact
            </span>
            <a
              href="mailto:voltcreativelab@gmail.com"
              className="hover:text-[#a259ff] transition text-sm"
            >
              voltcreativelab@gmail.com
            </a>
            <a
              href="tel:08143529665"
              className="hover:text-[#a259ff] transition text-sm"
            >
              08143529665
            </a>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-3 mt-2">
            <span className="uppercase text-[#a259ff] text-xs font-bold">
              Follow
            </span>
            <a
              href="https://x.com/volt_create"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="hover:text-[#a259ff] transition"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.693-5.853 6.693h-3.308l7.73-8.835L.424 2.25h6.679l4.632 6.126L17.863 2.25h.381zm-1.97 19.5h1.828L5.556 3.966H3.607l12.667 17.784z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8 border-t border-[#2d2a4a] pt-5 flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-4 text-xs text-[#b5b5d6] text-center lg:text-left">
        <span>
          &copy; {new Date().getFullYear()} Volt Creative Lab. All rights
          reserved.
        </span>
        <span>
          Made with <span className="text-[#a259ff]">&hearts;</span> by Volt
          Team
        </span>
      </div>
    </footer>
  );
}
