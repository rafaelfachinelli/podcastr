import { createContext, ReactNode, useContext, useState } from "react";

type ThemeContextData = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextData);

type ThemeContextProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
    document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
