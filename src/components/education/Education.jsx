import "./Education.scss";
import { IoSchoolOutline } from "react-icons/io5";

const education = [
  {
    id: 1,
    degree: "Bachelor of Science: Computer Science & Electronics Engineering",
    institution: "University of Regina — Saskatchewan",
  },
];

const Education = () => {
  return (
    <section id="education">
      <h5 data-aos="fade-up">My Background</h5>
      <h2 data-aos="fade-up">Education</h2>

      <div className="education__container">
        <div className="education__degrees" data-aos="fade-right">
          <h3>
            <IoSchoolOutline /> Education
          </h3>
          {education.map((edu) => (
            <div key={edu.id} className="education__card">
              <h4>{edu.degree}</h4>
              <p>{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
