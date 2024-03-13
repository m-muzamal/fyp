import React, { useEffect, useRef, useState } from "react";
import "./seat.scss";
import Seats from "./Seats/Seats";
import User from "../UserInfo/User";
import { useNavigate } from "react-router-dom";
import seatData from "./Seats/seatData";

const Seat = () => {
  const seats = JSON.parse(localStorage.getItem("seats"));
  const navigate = useNavigate();
  const [data, setData] = useState(seats || seatData);
  const [reserved, setReserved] = useState();
  const selectedSeats = useRef([]);

  function handleSeatClick(id) {
    setData((prevData) => {
      const updatedData = [...prevData];
      const clickedSeatIndex = updatedData.findIndex((seat) => seat.id === id);

      if (clickedSeatIndex !== -1) {
        updatedData[clickedSeatIndex] = {
          ...updatedData[clickedSeatIndex],
          reserved: !updatedData[clickedSeatIndex].reserved,
        };
      }
      localStorage.setItem("seats", JSON.stringify(updatedData));
      console.log(updatedData);
      return updatedData;
    });
  }

  useEffect(() => {
    seats && setReserved(seats.filter((seat) => seat.reserved === true));
  }, [data]);

  selectedSeats.current = reserved?.map((data) => data.id);

  function handleClick() {
    navigate("/payment");
  }
  return (
    <section className="seat">
      <div className="container">
        <div className="left">
          <User />
          <div className="card">
            <h4 className="card_header">Booking Summary</h4>
            <ul className="card_items">
              <li>
                <span>Selected seats:</span>
                {/* {reserved ? selectedSeats.join(", ") : 0} */}
                {reserved ? selectedSeats.current.join(", ") : 0}
              </li>
              <li>
                <span>Total seats:</span>
                {reserved ? reserved.length : 0}
              </li>
              <li>
                <span>Total bill:</span>
                {reserved ? reserved.length * 1000 : 0}Rs
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="center">
          <Seats data={data} handleClick={handleSeatClick} />
        </div>
        {reserved && (
          <div className="right">
            <form>
              <table>
                <thead>
                  <tr>
                    <th>Seat No</th>
                    <th>Male</th>
                    <th>Female</th>
                  </tr>
                </thead>
                <tbody>
                  {reserved.map((seat, index) => (
                    <tr key={index}>
                      <td>{seat.id}</td>
                      <td>
                        <input name="gender" type="radio" />
                      </td>
                      <td>
                        <input name="gender" type="radio" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>
            <button className="btn btn-primary" onClick={handleClick}>
              Confirm Booking
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Seat;
