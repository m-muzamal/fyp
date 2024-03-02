import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import "./nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  const [popup, setPopup] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  function handlePopup() {
    setPopup((prev) => !prev);
    window.scrollTo(0, 0);
  }

  return (
    <>
      {popup ? (
        <section className="nav_section">
          <button className="btn btn-primary" onClick={handlePopup}>
            <MdOutlineClose />
          </button>
          <div className="popup">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </section>
      ) : (
        <nav>
          <p className="logo">UAF EXPRESS</p>
          <ul className="items">
            <li>
              <Link
                to="/"
                className={activeItem === "home" ? "active" : "txt"}
                onClick={() => handleClick("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={activeItem === "about" ? "active" : "txt"}
                onClick={() => handleClick("about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={activeItem === "services" ? "active" : "txt"}
                onClick={() => handleClick("services")}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={activeItem === "contact" ? "active" : "txt"}
                onClick={() => handleClick("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="right">
            <div className="mb">
              <p className="txt">Muzammal</p>
              <button className="btn btn-primary">Log Out</button>
            </div>
            <button className="btn btn-primary menu" onClick={handlePopup}>
              <IoMdMenu />
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
