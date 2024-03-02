import React, { useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState("This is err msg");
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    console.log(e.target.name);
    const { name, value } = e.target;
    setLogin((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(login);
  }

  function displayErr(msg) {
    setErr(msg);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setErr("");
    }, 3000);
  }
  return (
    <section className="login">
      <div className="container">
        <div className="intro">
          <h1 className="logo">UAF EXPRESS</h1>
          <p className="txt">
            <b>UAF Express</b> is a dynamic and rapidly growing transport
            company in Pakistan, making its mark in the industry. Founded by
            <b> Chaudhry Muzammal,</b> who serves as the CEO and Chairman, the
            company has quickly become a prominent player in Public Transport,
            Logistics, and Cargo services.
          </p>
          <p className="txt">
            <b>UAF Express</b> continues to evolve, providing reliable and
            efficient transportation solutions, and it looks forward to a future
            of continued growth and success in the industry.
          </p>
        </div>
        <form className="login_form form" onSubmit={handleSubmit}>
          <p className="err">{err}</p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={login.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
            required
          />
          <div className="btns">
            <button className="btn btn-primary">Sign In</button>
            <Link to="/signup">Don't have account?</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
