import "./Contact.scss";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
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
            <FiPhone />
            <h3>Phone</h3>
            <h4>+2348144778023</h4>
            <a href="tel:+2348144778023">Place a phone call</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h3>WhatsApp</h3>
            <h4>+2348144778023</h4>
            <a
              href="https://api.whatsapp.com/send?phone=2348144778023"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
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
