import "./signup.css";
import "./signup-Responsive.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { Nav, Header, Footer, NavForTab } from "../../components/index";

export function Signup() {
  const { signUpCredentials } = useAuth();
  const [showpassword, setShowPassword] = useState("password");
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const newUserHandler = (event) => {
    return setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };
  const submitHandler = (event, newUser) => {
    event.preventDefault();
    if (newUser.password === newUser.confirmPassword) {
      signUpCredentials(newUser);
    } else {
      console.log("Incorrect Password");
    }
  };
  return (
    <div className="signup-page">
      <Nav />
      <Header />
      <main className="signup__main">
        <section className="signup">
          <form className="signup-form">
            <h1 className="signup__title">Sign-Up</h1>
            <div className="signup-form--username-wrapper">
              <div className="signup-form--name-wrapper signup-form--firstname-wrapper">
                <label className="signup-form__label signup-form--firstname" htmlFor="userName">
                  <b>FirstName</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--username"
                  type="text"
                  placeholder="Firstname"
                  required
                  name="firstName"
                  onChange={(e) => newUserHandler(e)}
                />
              </div>
              <div className="signup-form--name-wrapper signup-form--lastname-wrapper">
                <label className="signup-form__label signup-form--lastname" htmlFor="userName">
                  <b>LastName</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--username"
                  type="text"
                  placeholder="Lastname"
                  required
                  name="lastName"
                  onChange={(e) => newUserHandler(e)}
                />
              </div>
            </div>
            <label className="signup-form__label signup-form--gmail" htmlFor="userGmail">
              <b>Email Address</b>
            </label>
            <input
              className="signup-form__input-demo signup-form__input--usergmail"
              type="email"
              placeholder="trendyt@gmail.com"
              name="email"
              required
              onChange={(e) => newUserHandler(e)}
            />
            <label className="signup-form__label signup-form--gender" htmlFor="userGmail">
              <b>Gender</b>
            </label>
            <div className="signup-form--gender-container">
              <label className="signup-form__label signup-form--gender">Male</label>
              <input
                className="signup-form__input-demo signup-form__input--gender"
                type="radio"
                name="usergender"
                value="male"
                required
                onClick={(e) => newUserHandler(e)}
              />
              <label className="signup-form__label signup-form--gender">Female</label>
              <input
                className="signup-form__input-demo signup-form__input--gender"
                type="radio"
                name="usergender"
                value="female"
                required
                onClick={(e) => newUserHandler(e)}
              />
            </div>
            <div className="signup-form--user-password-wrapper">
              <div className="signup-form--password-wrapper signup-form--first-password-wrapper">
                <label className="signup-form__label signup-form--password" htmlFor="password">
                  <b>Password</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--password-first"
                  type={showpassword}
                  placeholder="Enter Password"
                  name="password"
                  required
                  onChange={(e) => newUserHandler(e)}
                />
              </div>
              <div className="signup-form--password-wrapper signup-form--Repeat-password-wrapper">
                <label className="signup-form__label signup-form--password" htmlFor="password">
                  <b>Confirm Password</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--password-second"
                  type={showpassword}
                  placeholder="confirm Password"
                  name="confirmPassword"
                  required
                  onChange={(e) => newUserHandler(e)}
                />
                <i className="signup-form__input--password-hide-icon">
                  <img
                    src={
                      showpassword === "password"
                        ? "/assets/image/Login/eyeHide.png"
                        : "/assets/image/Login/eyeShow.png"
                    }
                    alt="Show Password"
                    onClick={() => setShowPassword(showpassword === "password" ? "text" : "password")}
                  />
                </i>
              </div>
            </div>
            <div className="signup-form--submit">
              <button className="signup-form__btn--submit" onClick={(event) => submitHandler(event, newUser)}>
                Submit
              </button>
            </div>
            <div className="signup-form--new-account">
              <small className="signup-form__btn--new-account signup-form__btn--new-account-text">
                Already have an Account ?
              </small>
              <NavLink className="signup-form__btn--new-account" to="/signup/">
                Login
              </NavLink>
            </div>
          </form>
        </section>
        <NavForTab />
      </main>
      <Footer />
    </div>
  );
}
