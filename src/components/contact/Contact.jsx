import "./Contact.scss";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5lllypt",
        "template_7zl8zfv",
        form.current,
        "p4BMncuKLTQqjeNJv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>My</h5>
      <h2>Projects</h2>

      <div className="contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail />
            <h3>Email</h3>
            <h4>wagbara@gmail.com</h4>
            <a href="mailto:wagbarafranklin1@gmail.com" target="_blank">
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <FiPhone />
            <h3>Phone</h3>
            <h4>+2348144778023</h4>
            <p>Place a phone call</p>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h3>WhatsApp</h3>
            <h4>+2348144778023</h4>
            <a
              href="https://api.whatsapp.com/send?phone+2348144778023"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} className="form" onSubmit={sendEmail}>
          <input name="name" type="text" placeholder="Full Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
