import React, { useState, createContext } from "react";

export const AppThemeContext = createContext(null);

export const AppThemeProvider = ({ children }) => {
  const localSt = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localSt ? localSt : "dark");

  return (
    <AppThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};
