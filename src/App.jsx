import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Nav from "./Components/Navbar/Nav";
import Register from "./Components/Register/Register";
import About from "./Pages/About/About";
import Footer from "./Pages/Footer/Footer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Ticket from "./Components/Ticket/Ticket";
import Seat from "./Components/Seat/Seat";
import Payment from "./Components/Payment/Payment";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/seat" element={<Seat />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
