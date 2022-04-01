import { NavLink } from "react-router-dom";
import "./NavForTab.css";
export const NavForTab = () => {
  return (
    <div className="nav-bar-tab">
      <div className="nav-bar-tab-container">
        <NavLink to="/">
          <img
            className="nav-bar-tab--icon"
            src="/assets/image/HomePage-Images/home.png"
            alt="Home"
          />
        </NavLink>
        <NavLink to="/report/">
          <img
            className="nav-bar-tab--icon"
            src="/assets/image/HomePage-Images/Report.png"
            alt="Report"
          />
        </NavLink>
        <NavLink to="/login/">
          <img
            className="nav-bar-tab--icon"
            src="/assets/image/HomePage-Images/Login.png"
            alt="Login"
          />
        </NavLink>
      </div>
    </div>
  );
};
