import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";

export function Nav({ value }) {
  return (
    <div>
      {/* Navigation Bar Desktop */}
      <nav className="nav-bar nav-bar--simple">
        <nav className="nav-bar--logo">
          <Link to="/">
            <img
              className="nav-bar__img--logo"
              src="/assets/image/HomePage-Images/Quizella.png"
              alt="Trendy-T"
            />
          </Link>
        </nav>
        {value && <SearchBar />}
        <ul className="nav-bar__list">
          <li>
            <Link to="/" className="nav-bar__item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/report/" className="nav-bar__item">
              Report
            </Link>
          </li>
          <li>
            <Link to="/login/" className="nav-bar__item">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
