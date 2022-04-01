import "./header.css";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";

export const Header = ({ value }) => {
  return (
    <>
      <div className="nav-bar nav-bar--mobile">
        <div className="nav-bar--logo">
          <NavLink to="/">
            <img
              className="nav-bar__img--logo"
              src="/assets/image/HomePage-Images/Quizella.png"
              alt="Trendy-T"
            />
          </NavLink>
        </div>
        <div className="nav-bar--serach">{value && <SearchBar />}</div>
      </div>
    </>
  );
};
