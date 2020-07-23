import React from "react";
import "./NavBar.css";
import ThemeButton from "./ThemeButton";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <ThemeButton />
        </li>
      </ul>
    </nav>
  );
}
