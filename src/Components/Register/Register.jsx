import React, { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    cnic: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    const { name, type, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
    if (userData.password !== useState.confirmPassword) {
      displayErr("Password is not match.");
    }
  }

  function displayErr(msg) {
    setErr(msg);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setErr("");
    }, 3000);
  }
  return (
    <section className="register">
      <div className="container">
        <form className="register_form form" onSubmit={handleSubmit}>
          {err && <p className="err">{err}</p>}
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Phone No</label>
          <input
            id="phone"
            type="number"
            placeholder="+92 0000000000"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="cnic">CNIC</label>
          <input
            id="cnic"
            type="number"
            placeholder="xxxxx-xxxxxxx-x"
            name="cnic"
            value={userData.value}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="confirmPassword">Confrim Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            required
          />
          <div className="btns">
            <button className="btn btn-primary">Sign Up</button>
            <Link to="/login">Already have an account?</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
