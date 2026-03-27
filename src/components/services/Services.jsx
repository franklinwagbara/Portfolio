import "./Services.scss";
import { AiOutlineCheck } from "react-icons/ai";
import services from "./../../helper/services";

const Services = () => {
  return (
    <section id="services">
      <h5 data-aos="fade-up">What I Bring</h5>
      <h2 data-aos="fade-up">Specialties</h2>
      <div className="services">
        {services.map((item, index) => (
          <Service key={item.id} service={item} index={index} />
        ))}
      </div>
    </section>
  );
};
export default Services;

export const Service = ({ service, index }) => {
  const { title, perks } = service;
  return (
    <div className="service" data-aos="fade-up" data-aos-delay={index * 150}>
      <div>
        <h3>{title}</h3>
      </div>
      <ul>
        {perks.map((perk) => (
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
