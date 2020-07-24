import React from "react";
import "./NavBar.css";
import ThemeButton from "./ThemeButton";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <NavLink className="nav-link" to="/">
            Home
          </NavLink> */}
          <h1>
            Smolderweb.site the unofficial website for the WoW Classic server
            Smolderweb
          </h1>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li> */}
        {/* <li className="nav-item">
          <NavLink classname="nav-link" to="/">
            Contribute
          </NavLink>
        </li> */}
        <li className="nav-item">
          <ThemeButton />
        </li>
      </ul>
    </nav>
  );
}
