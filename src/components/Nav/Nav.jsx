import React from "react";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import { useAuth } from "../../Context/AuthContext";

export function Nav({ value }) {
  const login = JSON.parse(localStorage.getItem("login"));
  const { logoutCredentials } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="nav-bar nav-bar--simple">
      <nav className="nav-bar--logo">
        <Link to="/">
          <img className="nav-bar__img--logo" src="/assets/image/HomePage-Images/Quizella.png" alt="Trendy-T" />
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
          <button
            className="nav-bar__item"
            onClick={() => {
              login ? logoutCredentials() : navigate("/login/");
            }}
          >
            {login ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
