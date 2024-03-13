import React, { useState, useMemo } from "react";
import "./payment.scss";
import User from "../UserInfo/User";
import easypaisa from "../../assets/easypaisa.jpg";
import jazzcash from "../../assets/jazzcash.jpg";
import Popup from "./popup/Popup";

const Payment = () => {
  const [confirm, setConfirm] = useState(false);
  const [cardDetail, setCardDetail] = useState({
    number: "",
    month: "",
    cvv: "",
    ownerName: "",
  });

  const handleChange = useMemo(
    () => (e) => {
      const { value, name } = e.target;
      setCardDetail((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cardDetail);
    setConfirm((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (
      (e.target.name === "cvv" &&
        e.target.value.length >= 3 &&
        e.key !== "Backspace") ||
      (e.target.name === "number" &&
        e.target.value.length >= 11 &&
        e.key !== "Backspace")
    ) {
      e.preventDefault();
    }
  };

  return (
    <section className="payment">
      <div className="container">
        <div className="left">
          <User />
        </div>
        <div className="center">
          <form className="form" onSubmit={handleSubmit}>
            <h4 className="bold_text">Card detail</h4>
            <input
              type="number"
              placeholder="Card number"
              name="number"
              value={cardDetail.number}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              required
            />
            <input
              type="month"
              placeholder="MM/YY"
              name="month"
              value={cardDetail.month}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="CVV"
              name="cvv"
              value={cardDetail.cvv}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              required
            />
            <input
              type="text"
              placeholder="Card holder name"
              name="ownerName"
              value={cardDetail.ownerName}
              onChange={handleChange}
              required
            />
            <button className="btn btn-primary">Confirm booking</button>
          </form>
        </div>
        <div className="right">
          <div className="card payment-card">
            <div className="card_header">Payment Method</div>
            <ul className="card_items">
              <li>
                <img src={easypaisa} alt="" />
              </li>
              <li>
                <img src={jazzcash} alt="" />
              </li>
            </ul>
          </div>
        </div>
        {confirm && <Popup setConfirm={setConfirm} />}
      </div>
    </section>
  );
};

export default Payment;
