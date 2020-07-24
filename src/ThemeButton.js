import React, { useContext } from "react";
import { ThemeContext } from "./App";
import "./ThemeButton.css";
import ha from "./assets/ha.png";
export default function ThemeButton() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div className="imageContainer">
      <div
        className="imageButton"
        role="button"
        onClick={() => {
          setTheme();
        }}
      >
        <div className="buttonOverlay1">
          <img className="themeButton1" src={ha} />
        </div>
        <div className="buttonOverlay2">
          <img className="themeButton2" src={ha} />
        </div>
      </div>
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
