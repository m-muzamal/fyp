import React from "react";

const Card = ({ title, icon = "", items }) => {
  return (
    <div className="card">
      <div className="card_header">
        <h3 className="card_title">{title}</h3>
      </div>
      {items.map((item, index) => (
        <ul key={index} className="card_items">
          <li>
            <span>{icon}</span>
            {item}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Card;
