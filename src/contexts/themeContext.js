import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getInitialTheme = () => {
  // GET PREFERED THEME STORED IN LOCAL STORAGE
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("fem_todo-color-theme");

    //! 1. IF PREFERENCE IS STORED  IN LOCAL STORAGE, RETURN IT
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    //! 2. IF NO PREFS IS STORED IN LOCAL STORAGE - GET SYSTEM PREFS
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");

    if (userMedia.matches) return "dark";

    // ! 3. IF ABOVE TWO PREFS DO NOT MATCHS..RETURN "LIGHT": default theme
    return "light";
  }
};

const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme); //! either "light" or "dark"

  // ! function to change class of HTML tag based on prefered theme
  const setThemeToHTML = (preferedTheme) => {
    // ! Get HTML element
    const root = window.document.documentElement;

    const isDark = preferedTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(preferedTheme);

    // ! Finally add the prefered theme in local storage
    localStorage.setItem("fem_todo-color-theme", preferedTheme);
  };

  //! If There is initial theme: Prefer that among others
  if (initialTheme) {
    setThemeToHTML(initialTheme);
  }

  // !When ever theme changes or on initial load: set theme
  useEffect(() => {
    setThemeToHTML(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
