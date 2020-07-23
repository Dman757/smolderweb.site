import React, { useContext } from "react";
import { ThemeContext } from "./App";
import "./ThemeButton.css";
import ha from "./assets/ha.png";
export default function ThemeButton() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div className="imageContainer">
      <div className="filterOverlay" />
      <input
        className="themeButton"
        onClick={() => {
          setTheme();
        }}
        type="image"
        src={ha}
      />
    </div>
    // <button
    //   className="themeButton"
    //   onClick={() => {
    //     setTheme();
    //   }}
    // >
    //   Click Me
    // </button>
  );
}
