import React, { useState } from "react";
import "./ticket.scss";

const Ticket = () => {
  const [input, setInput] = useState({
    from: "",
    destination: "",
    date: "",
  });

  function handleChange(e) {
    const { type, value, name } = e.target;
    console.log(name, value);
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
  }

  return (
    <section className="ticket">
      <div className="container">
        <form className="form ticket_form" onSubmit={handleSubmit}>
          <label htmlFor="from">From</label>
          <select name="from" id="from" onChange={handleChange} required>
            <option value="">--Chose--</option>
            <option value="Lahore">Lahore</option>
            <option value="Rajana">Rajana</option>
            <option value="Faislabad">Faislabad</option>
            <option value="Toba Tek Singh">Toba Tek Singh</option>
            <option value="Gojra">Gojra</option>
            <option value="Jhang">Jhang</option>
          </select>
          <label htmlFor="destination">Destination</label>
          <select name="destination" id="from" onChange={handleChange} required>
            <option value="">--Chose--</option>
            <option value="Lahore">Lahore</option>
            <option value="Rajana">Rajana</option>
            <option value="Faislabad">Faislabad</option>
            <option value="Toba Tek Singh">Toba Tek Singh</option>
            <option value="Gojra">Gojra</option>
            <option value="Jhang">Jhang</option>
          </select>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={input.date}
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary">Find bus</button>
        </form>
        <div className="form">
          <h2 className="bold_text">Bus from Lahore to Rajana</h2>
          <p className="txt">Bus from Lahore to Rajana - 10:00 AM - 100Rs</p>
          <p className="txt">Bus from Lahore to Rajana - 10:00 AM - 100Rs</p>
          <p className="txt">Bus from Lahore to Rajana - 10:00 AM - 100Rs</p>
          <p className="txt">Bus from Lahore to Rajana - 10:00 AM - 100Rs</p>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
