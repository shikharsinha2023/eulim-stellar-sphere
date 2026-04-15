import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ThemeKey = "dark-science" | "vintage-paper";

interface ThemeContextType {
  theme: ThemeKey;
  setTheme: (t: ThemeKey) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark-science",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>(() => {
    const stored = localStorage.getItem("eulim-theme");
    return (stored as ThemeKey) || "dark-science";
  });

  const setTheme = (t: ThemeKey) => {
    setThemeState(t);
    localStorage.setItem("eulim-theme", t);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
