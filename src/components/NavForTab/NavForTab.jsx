import { Link } from "react-router-dom";
import "./NavForTab.css";
export const NavForTab = () => {
  return (
    <div className="nav-bar-tab">
      <div className="nav-bar-tab-container">
        <Link to="/">
          <img
            className="nav-bar-tab--icon"
            src="/assets/image/HomePage-Images/home.png"
            alt="Home"
          />
        </Link>
        <Link to="/report/">
          <img
            className="nav-bar-tab--icon"
            src="/assets/image/HomePage-Images/Report.png"
            alt="Report"
          />
        </Link>
        <Link to="/login/">
          <img
            className="nav-bar-tab--icon"
            src="/assets/image/HomePage-Images/Login.png"
            alt="Login"
          />
        </Link>
      </div>
    </div>
  );
};
