import { Nav } from "../../components/Nav/Nav";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { NavForTab } from "../../components/NavForTab/NavForTab";
import "./signup.css";
import "./signup-Responsive.css";

export function Signup() {
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
                <label
                  className="signup-form__label signup-form--firstname"
                  htmlFor="userName"
                >
                  <b>FirstName</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--username"
                  type="text"
                  placeholder="Firstname"
                  required
                />
              </div>
              <div className="signup-form--name-wrapper signup-form--lastname-wrapper">
                <label
                  className="signup-form__label signup-form--lastname"
                  htmlFor="userName"
                >
                  <b>LastName</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--username"
                  type="text"
                  placeholder="LastName"
                  required
                />
              </div>
            </div>
            <label
              className="signup-form__label signup-form--gmail"
              htmlFor="userGmail"
            >
              <b>Email Address</b>
            </label>
            <input
              className="signup-form__input-demo signup-form__input--usergmail"
              type="email"
              placeholder="quizbee@gmail.com"
              name="uname"
              required
            />
            <label
              className="signup-form__label signup-form--gender"
              htmlFor="userGmail"
            >
              <b>Gender</b>
            </label>
            <div className="signup-form--gender-container">
              <label className="signup-form__label signup-form--gender">
                Male
              </label>
              <input
                className="signup-form__input-demo signup-form__input--gender"
                type="radio"
                name="usergender"
                required
              />
              <label className="signup-form__label signup-form--gender">
                Female
              </label>
              <input
                className="signup-form__input-demo signup-form__input--gender"
                type="radio"
                name="usergender"
                required
              />
            </div>
            <div className="signup-form--user-password-wrapper">
              <div className="signup-form--password-wrapper signup-form--first-password-wrapper">
                <label
                  className="signup-form__label signup-form--password"
                  htmlFor="password"
                >
                  <b>Password</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--password-first"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                />
              </div>
              <div className="signup-form--password-wrapper signup-form--Repeat-password-wrapper">
                <label
                  className="signup-form__label signup-form--password"
                  htmlFor="password"
                >
                  <b>Repeat Password</b>
                </label>
                <input
                  className="signup-form__input-demo signup-form__input--password-second"
                  type="password"
                  placeholder="Repeat Password"
                  name="password"
                  required
                />
                <i className="signup-form__input--password-hide-icon">
                  <img src="/assets/image/SignUp/eye.png" alt="Show Password" />
                </i>
              </div>
            </div>
            <div className="signup-form--submit">
              <button className="signup-form__btn--submit">Submit</button>
            </div>
          </form>
        </section>
        <NavForTab />
      </main>
      <Footer />
    </div>
  );
}
