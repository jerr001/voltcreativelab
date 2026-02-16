import Image from "next/image";
import Link from "next/link";
// No 'use client' here, just export the component logic
// All client logic will be in the wrapper
type NavbarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
};

export const Navbar = ({ open, setOpen, pathname }: NavbarProps) => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/solutions", label: "Sub-brands" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/academy", label: "Academy" },
    { href: "/publish", label: "Publishing" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav className="w-full flex items-center justify-between px-2 sm:px-4 md:px-8 py-1 bg-[#f5f3ff] shadow-lg min-h-[40px] sticky top-0 z-40">
      {/* Logo */}
      <Link href="/" className="flex items-center select-none">
        <Image
          src="/volt-logo.png"
          alt="Volt Creative Lab Logo"
          width={80}
          height={80}
          priority
          className="sm:w-20 sm:h-20 w-16 h-16"
        />
      </Link>
      {/* Desktop/Tablet Nav */}
      <div className="hidden lg:flex gap-10 text-[#174c6b] font-medium text-base xl:text-lg">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#b35a00] transition ${isActive ? "text-[#b35a00] font-bold" : ""}`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      {/* Hamburger */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none ml-2"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`block w-7 h-0.5 bg-[#174c6b] mb-1.5 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-[#174c6b] mb-1.5 transition-all duration-300 ${open ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-[#174c6b] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>
      {/* Mobile Nav */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#f5f3ff] shadow-lg transition-all duration-300 overflow-hidden ${open ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"}`}
        style={{ zIndex: 29 }}
      >
        <div className="flex flex-col gap-4 px-6 text-[#174c6b] font-medium">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[#b35a00] transition text-lg py-1 ${isActive ? "text-[#b35a00] font-bold" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
