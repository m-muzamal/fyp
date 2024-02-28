import React from "react";
import "./contact.scss";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <small>Get in touch</small>
      <h1 className="title">Contact</h1>
      <div className="container">
        <div className="contact_items">
          <div className="contact_item">
            <MdOutlineMail />
            <p className="txt">muzamal503@gmail.com</p>
            <a href="">Send message</a>
          </div>
          <div className="contact_item">
            <FaWhatsapp />
            <p className="txt">+92 3154237255</p>
            <a href="">Send message</a>
          </div>
        </div>
        <form className="contact_form">
          <input type="text" placeholder="Your full name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Your full name" />
          <textarea name="message" cols="3" rows="5"></textarea>
          <button className="btn btn-primary">Send messgae</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
