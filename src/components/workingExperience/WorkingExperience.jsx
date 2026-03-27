import "./WorkingExperience.scss";
import workHistory from "./../../helper/workHistory";

const WorkingExperience = () => {
  return (
    <div className="working-experience">
      <h5 data-aos="fade-up">My Professional</h5>
      <h2 data-aos="fade-up">Experience</h2>
      <Roles roles={workHistory} />
    </div>
  );
};
export default WorkingExperience;

export const Roles = ({ roles }) => {
  return (
    <div className="jobs">
      {roles &&
        roles.map((role, index) => (
          <Role key={role.id} role={role} index={index} />
        ))}
    </div>
  );
};

export const Role = ({ role, index }) => {
  return (
    <div className="role" data-aos="fade-up" data-aos-delay={index * 100}>
      <h3>{role.title}</h3>
      <h5>{role.company}</h5>
      <ul>
        {role.responsibilities &&
          role.responsibilities.map((resp) => (
            <li key={resp.id}>{resp.value}</li>
          ))}
      </ul>
    </div>
  );
};
