import "./WorkingExperience.scss";
import workHistory from "./../../helper/workHistory";

const WorkingExperience = () => {
  return (
    <div className="working-experience">
      <h5>My Working</h5>
      <h2>Experience</h2>
      <Roles roles={workHistory} />
    </div>
  );
};
export default WorkingExperience;

export const Roles = ({ roles }) => {
  return (
    <div className="jobs">
      {roles && roles.map((role) => <Role key={role.id} role={role} />)}
    </div>
  );
};

export const Role = ({ role }) => {
  return (
    <div className="role">
      <h3>{role.title}</h3>
      <h5>{role.company}</h5>
      <ul>
        {role.responsiblities &&
          role.responsiblities.map((resp) => (
            <li key={resp.id}>{resp.value}</li>
          ))}
      </ul>
    </div>
  );
};
