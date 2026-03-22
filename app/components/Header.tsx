"use client";
import { LightMode, DarkMode, Menu } from "@mui/icons-material";
import { useTheme } from "../hooks/useTheme";
import { PROFILE } from "../common/constants";
import { header_Wrapper } from "@/common/helper";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between p-4 my-4 sticky top-2 z-50 ${scrolled ? "shadow-lg bg-background border rounded-md" : "glass-card"} scroll-mt-20`}
      id="header"
    >
      <h1 className="font-bold">{header_Wrapper(PROFILE.NAME)}</h1>
      <nav className="hidden md:flex">
        <ul className="flex space-x-4 text-gray-400">
          {PROFILE.HEADER_LINKS.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-subheading">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex space-x-4">
        <button className="md:hidden cursor-pointer">
          <Menu />
        </button>
        <button className="cursor-pointer" onClick={toggleTheme}>
          {theme === "light" ? <DarkMode /> : <LightMode />}
        </button>
      </div>
    </header>
  );
};

export default Header;
