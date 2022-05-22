import "./Services.scss";
import { AiOutlineCheck } from "react-icons/ai";
import services from "./../../helper/services";

const Services = (props) => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="services">
        {services &&
          services.map((item) => <Service key={item.id} service={item} />)}
      </div>
    </section>
  );
};
export default Services;

export const Service = ({ service }) => {
  const { title, perks } = service;
  return (
    <div className="service">
      <div>
        <h3>{title}</h3>
      </div>
      <ul>
        {perks &&
          perks.map((perk) => (
            <li key={perk.id}>
              <div>
                <AiOutlineCheck />
                <p>{perk.value}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
