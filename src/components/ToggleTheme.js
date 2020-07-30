import React from "react";
import { useDispatch } from "react-redux";
import { ThemeIcon } from "./Icons";
import { toggleTheme } from "../reducers/theme";

const ToggleTheme = () => {
  const dispatch = useDispatch();

  return <ThemeIcon onClick={() => dispatch(toggleTheme())} />;
};

export default ToggleTheme;
