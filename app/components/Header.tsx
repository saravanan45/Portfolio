"use client";
import { LightMode, DarkMode, Menu, Close } from "@mui/icons-material";
import { useTheme } from "../hooks/useTheme";
import { PROFILE } from "../common/constants";
import { header_Wrapper } from "@/common/helper";
import { useEffect, useMemo, useState } from "react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerTitle = useMemo(() => header_Wrapper(PROFILE.NAME), []);

  const themeToggle = (
    <button className="cursor-pointer" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "light" ? <DarkMode /> : <LightMode />}
    </button>
  );

  const navLinks = PROFILE.HEADER_LINKS.map((link) => (
    <li key={link.name}>
      <a href={link.href} className="text-subheading">
        {link.name}
      </a>
    </li>
  ));

  const headerBaseClass = "sticky top-2 z-50 my-4 flex items-center justify-between p-4";
  const scrolledClass = "rounded-md border bg-background shadow-lg";

  return (
    <>
      {!menuOpen ? (
        <header
          className={`${headerBaseClass} ${scrolled ? scrolledClass : "glass-card"} scroll-mt-20 flex flex-wrap gap-4 justify-between items-center`}
          id="header"
        >
          {headerTitle}
          <nav className="hidden md:flex">
            <ul className="flex space-x-4 text-gray-400">{navLinks}</ul>
          </nav>
          <div className="flex space-x-4">
            <button
              className="cursor-pointer md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu />
            </button>
            {themeToggle}
          </div>
        </header>
      ) : (
        <div
          className={`sticky right-4 top-2 z-20 flex flex-wrap gap-2 rounded-md p-4 ${scrolled ? scrolledClass : "glass-card"} `}
        >
          <div className="flex items-center justify-between w-full">
            <h3 className="text-lg font-bold">{headerTitle}</h3>
            <div className="flex flex-wrap gap-2">
              {themeToggle}
              <button
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <Close />
              </button>
            </div>
          </div>
          <hr className="w-full border-gray-300 my-2" />
          {PROFILE.HEADER_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-subheading"
              onClick={() => setMenuOpen(false)}
            >
              <span className="glass-label">{link.name}</span>
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
