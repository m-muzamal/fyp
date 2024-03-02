import React from "react";
import "./user.scss";

const User = () => {
  return (
    <div className="card">
      <div className="card_header">User Info</div>
      <ul className="card_items">
        <li>
          <span>Name:</span>
          Muhammad Muzammal
        </li>
        <li>
          <span>Email:</span>
          muzamal503@gmail.com
        </li>
        <li>
          <span>Phone:</span>
          03154237255
        </li>
        <li>
          <span>Name:</span>
          Muhammad Muzammal
        </li>
      </ul>
    </div>
  );
};

export default User;
