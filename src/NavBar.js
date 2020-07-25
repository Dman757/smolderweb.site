import React from "react";
import "./NavBar.css";
import ThemeButton from "./ThemeButton";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item-header">
          <h1>Unofficial website for the WoW Classic server Smolderweb</h1>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/"
          >
            Links
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item theme-btn">
          <ThemeButton />
        </li>
      </ul>
    </nav>
  );
}
