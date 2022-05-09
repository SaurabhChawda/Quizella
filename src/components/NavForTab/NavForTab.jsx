import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./NavForTab.css";
export const NavForTab = () => {
  const navigate = useNavigate();
  const { logoutCredentials } = useAuth();
  const login = JSON.parse(localStorage.getItem("login"));
  return (
    <div className="nav-bar-tab">
      <div className="nav-bar-tab-container">
        <Link to="/">
          <img className="nav-bar-tab--icon" src="/assets/image/HomePage-Images/home.png" alt="Home" />
        </Link>
        <Link to="/report/">
          <img className="nav-bar-tab--icon" src="/assets/image/HomePage-Images/Report.png" alt="Report" />
        </Link>
        <div className="nav-bar-tab-dropdown">
          <img
            className="nav-bar-tab--icon dropbtn "
            src={login ? "/assets/image/HomePage-Images/Login.png" : "/assets/image/HomePage-Images/LogOut.png"}
            alt={login ? "login" : "logout"}
            onClick={() => (login ? logoutCredentials() : navigate("/login/"))}
          />
          <div className="nav-bar-tab-dropdown-content">
            <p className="nav-bar-tab-list">{login ? "logout" : "login"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
