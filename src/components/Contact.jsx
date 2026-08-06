import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        <h2>
          Get In <span>Touch</span>
        </h2>

        <h3>
          Let's Build Something Intelligent
        </h3>

        <p>
          I am open to opportunities in AI Engineering, Data Engineering,
          Backend Development and automation-focused software solutions.
        </p>


        <div className="contact-info">

          <a href="mailto:bniharika10102@gmail.com" className="contact-btn">
            <Mail size={20} aria-hidden="true" className="icon-reset" />
            <span>Email Me</span>
          </a>

        </div>


        <div className="social-links">
          <a
            href="https://github.com/niharikabandila"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <FaGithub size={18} aria-hidden="true" className="icon-reset" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/niharika-bandila-4b8a83212/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <FaLinkedin size={18} aria-hidden="true" className="icon-reset" />
            <span>LinkedIn</span>
          </a>
        </div>


        {/* <p className="email-text">
          bniharika10102@gmail.com
        </p> */}


      </div>

    </section>
  );
}

export default Contact;