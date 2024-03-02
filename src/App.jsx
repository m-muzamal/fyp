import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Nav from "./Components/Navbar/Nav";
import Register from "./Components/Register/Register";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      {/* <Home /> */}
      {/* <Login /> */}
      <Register />
      <Footer />
    </>
  );
}

export default App;
