import React, { useState } from "react";
import "./seats.scss";
import seatData from "./seatData";

const Seats = () => {
  const [data, setData] = useState(seatData);

  function handleClick(id) {
    setData((prevData) => {
      const updatedData = [...prevData];
      const clickedSeatIndex = updatedData.findIndex((seat) => seat.id === id);

      if (clickedSeatIndex !== -1) {
        updatedData[clickedSeatIndex] = {
          ...updatedData[clickedSeatIndex],
          reserved: true,
        };
      }
      console.log(updatedData);
      return updatedData;
    });
  }

  return (
    <div className="seats">
      <div className="card">
        <h4 className="card_header">Select Your Seat</h4>
        <div className="card_content">
          {data.map((data, index) => (
            <div
              key={index}
              className="box"
              style={{ backgroundColor: `${data.reserved && "transparent"}` }}
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
