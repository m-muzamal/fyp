import React from "react";
import "./seat.scss";
import Seats from "./Seats/Seats";
import User from "../UserInfo/User";
import { useNavigate } from "react-router-dom";

const Seat = () => {
  const navigate = useNavigate();

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
                <span>Selected seats:</span>4, 5, 6
              </li>
              <li>
                <span>Total seats:</span>3
              </li>
              <li>
                <span>Total bill:</span>
                3000Rs
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="center">
          <Seats />
        </div>
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
                <tr>
                  <td>12</td>
                  <td>
                    <input type="radio" />
                  </td>
                  <td>
                    <input type="radio" />
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>
                    <input type="radio" />
                  </td>
                  <td>
                    <input type="radio" />
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>
                    <input type="radio" />
                  </td>
                  <td>
                    <input type="radio" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <button className="btn btn-primary" onClick={handleClick}>
            Confirm Booking
          </button>
        </div>
      </div>
    </section>
  );
};

export default Seat;
