import { createContext, ReactNode, useEffect, useState } from "react";

export type childrenProps = {
  children: ReactNode;
};

export type themeContextType = {
  theme: number;
  setTheme: (theme: number) => void;
};

export const themeContext = createContext({} as themeContextType);

export const ThemeContextProvider = ({ children }: childrenProps) => {
  const getLocal = () => {
    const local = localStorage.getItem("theme");
    return local ? JSON.parse(local) : 0;
  };

  const [theme, setTheme] = useState(getLocal());

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};
