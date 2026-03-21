"use client";
import { LightMode, DarkMode, Menu } from "@mui/icons-material";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`flex items-center justify-between p-4 glass-card my-4`}>
      <h1 className="font-bold">Saravanan</h1>
      <nav className="hidden md:flex">
        <ul className="flex space-x-4 text-gray-400">
          <li>
            <a href="#summary" className="text-subheading">Summary</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#connect">Connect</a>
          </li>
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
