import React, { useState } from "react";
import "./ticket.scss";
import BusData from "./busData/BusData";

const Ticket = () => {
  const [bus, setBus] = useState();
  const [input, setInput] = useState({
    from: "",
    destination: "",
    date: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
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
    setBus(input);
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
          <select
            name="destination"
            id="destination"
            onChange={handleChange}
            required
          >
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
        {bus && (
          <div className="form">
            <h2 className="bold_text">
              Bus from {input.from} to {input.destination}
            </h2>
            <BusData route={bus} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Ticket;
