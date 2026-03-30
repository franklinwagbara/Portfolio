import "./Education.scss";
import { IoSchoolOutline } from "react-icons/io5";
import { BsPatchCheckFill } from "react-icons/bs";

const education = [
  {
    id: 1,
    degree: "Bachelor of Science: Computer Science",
    institution: "University of Regina",
  },
  {
    id: 2,
    degree: "Bachelor of Science: Electronics Engineering",
    institution: "University of Regina — Saskatchewan",
  },
];

const certifications = [
  { id: 1, name: "ReactJS Certification", date: "June 2022" },
  { id: 2, name: "C# Certification", date: "January 2023" },
];

const Education = () => {
  return (
    <section id="education">
      <h5 data-aos="fade-up">My Background</h5>
      <h2 data-aos="fade-up">Education & Certifications</h2>

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

        <div className="education__certs" data-aos="fade-left">
          <h3>
            <BsPatchCheckFill /> Certifications
          </h3>
          {certifications.map((cert) => (
            <div key={cert.id} className="education__card">
              <h4>{cert.name}</h4>
              <p>{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
