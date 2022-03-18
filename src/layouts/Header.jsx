import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { ReactComponent as MoonICon } from "../images/icon-moon.svg";
import { ReactComponent as SunIcon } from "../images/icon-sun.svg";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header className="flex items-center justify-between ">
      <p className="text-3xl font-semibold tracking-widest text-white uppercase md:text-5xl">
        Todo
      </p>
      {theme === "dark" ? (
        <SunIcon
          onClick={() => setTheme("light")}
          className="transform cursor-pointer hover:scale-105 active:scale-95"
        />
      ) : (
        <MoonICon
          onClick={() => setTheme("dark")}
          className="transform cursor-pointer hover:scale-105 active:scale-95"
        />
      )}
    </header>
  );
};

export default Header;
