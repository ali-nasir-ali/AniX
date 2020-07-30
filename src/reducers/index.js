import { combineReducers } from "@reduxjs/toolkit";
import recommended from "./recommended";
import anime from "./anime";
import theme from "./theme";
import topanimes from "./topanimes";
import popularanimes from "./popularanimes";
import modal from "./modal";

export default combineReducers({
  recommended,
  anime,
  theme,
  topanimes,
  popularanimes,
  modal,
});
