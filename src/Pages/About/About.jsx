import React from "react";
import "./about.scss";
import aboutImage from "../../assets/about.jpg";
import { IoIosPeople } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";

const About = () => {
  return (
    <section className="about">
      <small>Get to know</small>
      <h1 className="title">About Us</h1>
      <div className="container">
        <div className="left">
          <div className="about_us">
            <img src={aboutImage} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="about_cards">
            <div className="about_card">
              <div className="icon">
                <IoIosPeople />
              </div>
              <p className="txt">Exceeding Customer Expectations</p>
            </div>
            <div className="about_card">
              <div className="icon">
                <IoShieldCheckmark />
              </div>
              <p className="txt">Convenient bus routes</p>
            </div>
            <div className="about_card">
              <div className="icon">
                <SlBadge />
              </div>
              <p className="txt">Experienced Drivers and Hostess</p>
            </div>
          </div>
          <p className="txt">
            UAF Express is one of the oldest and largest transport companies of
            Pakistan. Transport business was initiated by Chaudhry Muhammad
            Muzammal , grandfather of current C.E.O and Chairman. UAF Express
            Group is diversified into Public Transport with 100 percent safty
            and security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
