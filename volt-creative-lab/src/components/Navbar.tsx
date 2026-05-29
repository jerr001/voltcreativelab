'use client';

import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  pathname: string;
};

export const Navbar = ({ open, setOpen, pathname }: NavbarProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as "light" | "dark" | null;
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const initialTheme = savedTheme ?? preferredTheme;

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/solutions", label: "Sub-Brands" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/academy", label: "Academy" },
    { href: "/church", label: "Church" },
    { href: "/publish", label: "Publishing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full flex items-center justify-between px-2 sm:px-4 md:px-8 py-2 bg-[var(--surface)] text-[var(--foreground)] shadow-lg min-h-[56px] sticky top-0 z-40">
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

      <div className="hidden lg:flex gap-10 text-[var(--muted)] font-medium text-base xl:text-lg">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-all duration-300 hover:text-[var(--gold)] hover:scale-105 ${
                isActive ? "text-[var(--gold)] font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="hidden lg:flex items-center gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition hover:bg-[var(--surface)]"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

      <button
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none ml-2"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`block w-7 h-0.5 bg-[var(--foreground)] mb-1.5 transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-[var(--foreground)] mb-1.5 transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[var(--surface)] shadow-lg transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
        style={{ zIndex: 29 }}
      >
        <div className="flex flex-col gap-4 px-6 text-[var(--muted)] font-medium">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition text-lg py-1 hover:text-[var(--gold)] ${
                  isActive ? "text-[var(--gold)] font-bold" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={toggleTheme}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] py-3 text-left text-[var(--foreground)] transition hover:bg-[var(--surface)]"
          >
            {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};
