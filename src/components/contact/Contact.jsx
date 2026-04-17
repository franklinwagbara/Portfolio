import "./Contact.scss";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        () => {
          setStatus("error");
        },
      )
      .finally(() => setSending(false));
  };

  return (
    <section id="contact">
      <h5 data-aos="fade-up">Get In Touch</h5>
      <h2 data-aos="fade-up">Contact</h2>

      <div className="contact__container">
        <div className="contact__options" data-aos="fade-right">
          <article className="contact__option">
            <AiOutlineMail />
            <h3>Email</h3>
            <h4>wagbarafranklin1@gmail.com</h4>
            <a
              href="mailto:wagbarafranklin1@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <FaLinkedin />
            <h3>LinkedIn</h3>
            <h4>Franklin Wagbara</h4>
            <a
              href="https://www.linkedin.com/in/franklin-wagbara-047a1a45/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </article>
        </div>
        <form
          ref={form}
          className="form"
          onSubmit={sendEmail}
          data-aos="fade-left"
        >
          <input name="name" type="text" placeholder="Full Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />
          <button className="btn btn-primary" type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="form__status form__status--success">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="form__status form__status--error">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
export default Contact;
