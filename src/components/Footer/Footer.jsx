import React from "react";
import "./footer.css";
export function Footer() {
  return (
    <div className="footer">
      <ul className="footer__list">
        <li>
          <a
            className="footer__item"
            href="https://github.com/SaurabhChawda/AQUA_UI"
          >
            <img
              className="footer__img"
              src="/assets/image/HomePage-Images/Github.png"
              alt="Github"
            />
          </a>
        </li>
        <li>
          <a className="footer__item" href="https://twitter.com/home">
            <img
              className="footer__img"
              src="/assets/image/HomePage-Images/Twitter sds.png"
              alt="Twitter"
            />
          </a>
        </li>
        <li>
          <a
            className="footer__item"
            href="https://www.linkedin.com/in/saurabh-chawda-36a28a1b7/"
          >
            <img
              className="footer__img"
              src="/assets/image/HomePage-Images/LinkedIn.png"
              alt="LinkedIn"
            />
          </a>
        </li>
      </ul>
      <div className="footer__content--wrapper">
        <h6 className="footer__content">Designed by Saurabh Chawda</h6>
      </div>
    </div>
  );
}
