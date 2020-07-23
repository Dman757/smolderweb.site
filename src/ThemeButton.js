import React, { useContext } from "react";
import { ThemeContext } from "./App";
export default function ThemeButton() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => {
        setTheme();
      }}
    >
      Click Me
    </button>
  );
}
