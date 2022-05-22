import "./Experience.scss";
import WorkingExperience from "../workingExperience/WorkingExperience";
import Skills from "../skills/Skills";

const Experience = (props) => {
  return (
    <section id="experience">
      <p>Experience</p>
      <Skills />
      <WorkingExperience />
    </section>
  );
};
export default Experience;
