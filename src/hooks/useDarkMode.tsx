import { useState, useEffect, useContext, createContext, ReactNode } from "react";

// Custom hook for dark mode
const useDarkMode = () => {
  const getInitialMode = () => {
    const savedPreference = localStorage.getItem("dark-mode");
    if (savedPreference) {
      return JSON.parse(savedPreference);
    }

    // Check for system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialMode);

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return { isDarkMode, toggleDarkMode };
};

// Create context
interface DarkModeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

// Provider component
export function DarkModeProvider({ children }: { children: ReactNode }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}

// Custom hook to use dark mode context
export function useDarkModeContext() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkModeContext must be used within a DarkModeProvider");
  }
  return context;
}
