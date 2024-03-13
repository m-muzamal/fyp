import React, { useState } from "react";
import "./seats.scss";

const Seats = ({ data, handleClick }) => {
  return (
    <div className="seats">
      <div className="card">
        <h4 className="card_header">Select Your Seat</h4>
        <div className="card_content">
          {data.map((data, index) => (
            <div
              key={index}
              className="box"
              style={{
                backgroundColor: `${data.reserved ? "transparent" : "#4db5ff"}`,
              }}
              onClick={() => handleClick(data.id)}
            >
              <p>{data.seat}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seats;
