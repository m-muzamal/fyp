import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import "./nav.scss";

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
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
            </ul>
          </div>
        </section>
      ) : (
        <nav>
          <p className="logo">UAF EXPRESS</p>
          <ul className="items">
            <li>
              <a
                href="#"
                className={activeItem === "home" ? "active" : "txt"}
                onClick={() => handleClick("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "about" ? "active" : "txt"}
                onClick={() => handleClick("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "services" ? "active" : "txt"}
                onClick={() => handleClick("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "contact" ? "active" : "txt"}
                onClick={() => handleClick("contact")}
              >
                Contact
              </a>
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
