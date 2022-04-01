import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";

export function Nav({ value }) {
  return (
    <div>
      {/* Navigation Bar Desktop */}
      <nav className="nav-bar nav-bar--simple">
        <nav className="nav-bar--logo">
          <NavLink to="/">
            <img
              className="nav-bar__img--logo"
              src="/assets/image/HomePage-Images/Quizella.png"
              alt="Trendy-T"
            />
          </NavLink>
        </nav>
        {value && <SearchBar />}
        <ul className="nav-bar__list">
          <li>
            <NavLink to="/" className="nav-bar__item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/report/" className="nav-bar__item">
              Report
            </NavLink>
          </li>
          <li>
            <NavLink to="/login/" className="nav-bar__item">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
