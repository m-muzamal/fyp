import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BusData = ({ route }) => {
  const navigate = useNavigate();
  const { from, destination } = route;
  const [filterBus, setFilterBus] = useState([]);
  const buses = [
    { from: "Lahore", to: "Rajana", time: "10:00 AM", price: "1000" },
    { from: "Lahore", to: "Rajana", time: "12:00 PM", price: "1000" },
    { from: "Lahore", to: "Rajana", time: "2:00 PM", price: "1000" },
    { from: "Lahore", to: "Toba Tek Singh", time: "11:00 AM", price: "1200" },
    { from: "Lahore", to: "Toba Tek Singh", time: "1:00 PM", price: "1200" },
    { from: "Lahore", to: "Toba Tek Singh", time: "3:00 PM", price: "1200" },
    { from: "Lahore", to: "Faisalabad", time: "9:00 AM", price: "600" },
    { from: "Lahore", to: "Faisalabad", time: "11:00 AM", price: "600" },
    { from: "Lahore", to: "Faisalabad", time: "1:00 PM", price: "600" },
    { from: "Rajana", to: "Lahore", time: "2:30 PM", price: "1000" },
    { from: "Rajana", to: "Lahore", time: "9:30 PM", price: "1000" },
    { from: "Rajana", to: "Lahore", time: "10:45 PM", price: "1000" },
    { from: "Rajana", to: "Faisalabad", time: "1:00 PM", price: "300" },
    { from: "Rajana", to: "Faisalabad", time: "2:00 PM", price: "3000" },
    { from: "Rajana", to: "Toba Tek Singh", time: "3:00 PM", price: "100" },
    { from: "Gojra", to: "Faisalabad", time: "7:00 AM", price: "200" },
    { from: "Gojra", to: "Faisalabad", time: "8:00 AM", price: "200" },
    { from: "Gojra", to: "Faisalabad", time: "8:45 AM", price: "200" },
  ];

  useEffect(() => {
    setFilterBus(
      buses.filter((bus) => {
        return bus.from === from && bus.to === destination && bus;
      })
    );
  }, [route]);
  console.log(filterBus);

  function handleClick() {
    localStorage.setItem("bus", JSON.stringify(filterBus));
    navigate("/seat");
    console.log("ok");
  }

  if (filterBus.length === 0) {
    return <h4 className="noBus">Bus not founded.</h4>;
  }

  return (
    <>
      {filterBus.map((data, index) => (
        <p key={index} className="txt" onClick={handleClick}>
          From {data.from} to {data.to} - {data.time} - {data.price}Rs
        </p>
      ))}
    </>
  );
};

export default BusData;
