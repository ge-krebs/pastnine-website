"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import text from "@/content/text.json";

const { links } = text.nav;
const { logo, name } = text.site;
const headerTopClass = text.banner.enabled ? "top-9" : "top-0";
const mobileMenuTopClass = text.banner.enabled ? "pt-14" : "pt-5";

function MenuIcon() {
  return (
    <span aria-hidden className="flex flex-col gap-1.5">
      <span className="h-0.5 w-6 bg-current" />
      <span className="h-0.5 w-6 bg-current" />
      <span className="h-0.5 w-6 bg-current" />
    </span>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [heroOutOfView, setHeroOutOfView] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroOutOfView(entry.intersectionRatio < 0.98),
      { threshold: 0.98 }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("popstate", closeMenu);
    return () => window.removeEventListener("popstate", closeMenu);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = !isHome || heroOutOfView;

  return (
    <>
      <header
        className={`fixed inset-x-0 z-50 flex items-center justify-between px-6 py-5 transition-colors duration-300 sm:px-10 ${headerTopClass} ${
          solid ? "border-b border-hairline bg-white" : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          aria-label={name}
          className={`flex items-center transition-opacity duration-300 ${
            solid ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={logo.navyMark}
            alt={name}
            width={logo.markWidth}
            height={logo.markHeight}
            className="h-6 w-auto sm:h-7"
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative inline-block py-1 font-heading text-sm transition-colors duration-300 ${
                    solid
                      ? isActive
                        ? "text-ink-secondary"
                        : "text-ink hover:text-ink-secondary"
                      : isActive
                        ? "text-secondary-on-dark"
                        : "text-white hover:text-secondary-on-dark"
                  }`}
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className={`transition-colors duration-300 md:hidden ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          <MenuIcon />
        </button>
      </header>

      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[60] flex w-screen flex-col bg-ink px-6 pb-5 transition-opacity duration-300 md:hidden ${mobileMenuTopClass} ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <Image
            src={logo.whiteMark}
            alt={name}
            width={logo.markWidth}
            height={logo.markHeight}
            className="h-6 w-auto"
          />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-white"
          >
            <CloseIcon />
          </button>
        </div>

        <ul className="mt-16 flex flex-col gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-4xl font-bold uppercase leading-none tracking-tight text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
