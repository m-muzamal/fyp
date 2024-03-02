import React from "react";
import "./footer.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <h1 className="logo footer_logo">UAF EXPRESS</h1>
        <ul className="footer_items">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <h2 className="bold_text">For Queries</h2>
        <p className="txt">+92 3154237255</p>
        <p className="txt">muzamal503@gmail.com</p>
        <ul className="socials footer_items">
          <li>
            <a
              href="https://www.facebook.com/muhammad.muzammal.5070"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mzml_0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/m-muzamal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/muhammad-muzammal-a9ba60201/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
