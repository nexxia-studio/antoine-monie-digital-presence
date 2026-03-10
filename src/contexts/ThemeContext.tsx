import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "tech" | "luxury";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme-mode");
    return (saved === "luxury" || saved === "tech") ? saved : "tech";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "tech") {
      root.classList.add("dark");
      root.classList.remove("luxury");
    } else {
      root.classList.remove("dark");
      root.classList.add("luxury");
    }
    localStorage.setItem("theme-mode", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === "tech" ? "luxury" : "tech");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
