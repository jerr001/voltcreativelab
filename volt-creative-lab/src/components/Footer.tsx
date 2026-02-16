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
        {/* Socials */}
        <div className="flex flex-col items-center lg:items-end gap-3 mt-6 lg:mt-0">
          <span className="uppercase text-[#a259ff] text-xs font-bold mb-1">
            Connect
          </span>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="hover:text-[#a259ff] transition"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
              className="hover:text-[#a259ff] transition"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="hover:text-[#a259ff] transition"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.094 12 2.094m0-2.163C8.741-.069 8.332-.058 7.052.002 5.782.062 4.515.334 3.54 1.308 2.566 2.282 2.294 3.549 2.232 4.815c-.06 1.28-.071 1.689-.071 5.185s.011 3.905.071 5.185c.062 1.266.334 2.533 1.308 3.508.975.974 2.242 1.246 3.512 1.308 1.28.06 1.689.071 5.185.071s3.905-.011 5.185-.071c1.266-.062 2.533-.334 3.508-1.308.974-.975 1.246-2.242 1.308-3.508.06-1.28.071-1.689.071-5.185s-.011-3.905-.071-5.185c-.062-1.266-.334-2.533-1.308-3.508-.975-.974-2.242-1.246-3.508-1.308C15.267-.058 14.858-.069 12-.069zm0 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm0 10.163a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
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
