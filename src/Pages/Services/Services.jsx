import Card from "../Card";
import "./services.scss";
import { TiTick } from "react-icons/ti";
import dummy_data from "./dummy_data";

const Services = () => {
  return (
    <section className="services">
      <small>What we offer</small>
      <h1 className="title">Services</h1>
      <div className="container">
        {dummy_data.map((value, index) => (
          <Card
            key={index}
            title={value.title}
            icon={<TiTick />}
            items={value.items}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
