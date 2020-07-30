import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./Router";
import { themeVars } from "./styles/theme";

const App = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={{ ...theme, ...themeVars }}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
