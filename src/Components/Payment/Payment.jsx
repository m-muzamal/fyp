import React from "react";
import "./payment.scss";
import User from "../UserInfo/User";
import easypaisa from "../../assets/easypaisa.jpg";
import jazzcash from "../../assets/jazzcash.jpg";

const Payment = () => {
  return (
    <section className="payment">
      <div className="container">
        <div className="left">
          <User />
        </div>
        <div className="center">
          <form className="form">
            <h4 className="bold_text">Card detail</h4>
            <input type="text" placeholder="Card number" />
            <input type="text" placeholder="MM/YY" />
            <input type="text" placeholder="CVV" />
            <input type="text" placeholder="Card holder name" />
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
      </div>
    </section>
  );
};

export default Payment;
