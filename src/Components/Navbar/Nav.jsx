import React, { useState } from "react";
import "./nav.scss";

const Nav = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
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
        <p className="txt">Muzammal</p>
        <button className="btn btn-primary">Log Out</button>
      </div>
    </nav>
  );
};

export default Nav;
