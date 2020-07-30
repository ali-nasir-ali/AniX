import { createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../styles/theme";

const mode = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : "light";

const themeSlice = createSlice({
  name: "recommended",
  initialState: {
    mode,
    theme: mode === "dark" ? darkTheme : lightTheme,
  },
  reducers: {
    toggleTheme(state, action) {
      if (state.mode === "dark") {
        localStorage.setItem("mode", "light"); // is this good practice ?
        state.theme = lightTheme;
        state.mode = "light";
      } else {
        localStorage.setItem("mode", "dark");
        state.mode = "dark";
        state.theme = darkTheme;
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
