import React from "react";
import "./popup.scss";
import { useNavigate } from "react-router-dom";

const Popup = ({ setConfirm }) => {
  const navigate = useNavigate();

  function handleClick() {
    alert("You reserve a seat successfully.");
    navigate("/ticket");
  }
  return (
    <div className="popup">
      <div className="popup_form form">
        <h1 className="bold_text">Review your booking</h1>
        <ul className="card_items">
          <li>
            <span>Name:</span> Muhammad Muzammal
          </li>
          <li>
            <span>CNIC:</span> 33303-0719075-9
          </li>
          <li>
            <span>Email:</span> muzamal503@gmail.com
          </li>
          <li>
            <span>Phone:</span> 0315 4237255
          </li>
        </ul>
        <hr />
        <h1 className="bold_text">From Lahore to Rajan 10:00 AM</h1>
        <ul className="card_items">
          <li>
            <span>Seat No:</span> Muhammad Muzammal
          </li>
          <li>
            <span>Total seats:</span> 33303-0719075-9
          </li>
          <li>
            <span>Total bil:</span> muzamal503@gmail.com
          </li>
        </ul>
        <div className="btns">
          <button className="btn btn-primary" onClick={handleClick}>
            Confirm
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setConfirm((prev) => !prev)}
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
