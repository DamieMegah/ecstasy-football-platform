import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  const toggle = () => {
    setDark(prev => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      // Apply to document
      if (newTheme) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      return newTheme;
    });
  };

  return <ThemeContext.Provider value={{ dark, toggle }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
