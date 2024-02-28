import React from "react";
import "./home.scss";
import About from "../../Pages/About/About";
import Services from "../../Pages/Services/Services";
import Contact from "../../Pages/Contact/Contact";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container home_container">
          <small>Welcom to UAF EXPRESS</small>
          <h1 className="logo">UAF EXPRESS</h1>
          <p className="txt">
            Our user-friendly platform makes it easy for you to book your bus
            tickets online. Say goodbye to long queues and waiting times at the
            bus station. With just a few clicks, you can choose your desired bus
            route, view available seats, and make your reservation. We offer a
            wide range of bus routes to various destinations, all at affordable
            prices. Our system is designed to provide you with a hassle-free
            experience, allowing you to book your tickets anytime, anywhere. Our
            team is committed to ensuring your safety and comfort during your
            journey. So sit back, relax, and enjoy your ride with us!
          </p>
          <a href="" className="btn">
            Book Your Tickets
          </a>
        </div>
      </section>
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
