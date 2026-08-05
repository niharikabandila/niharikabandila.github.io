import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";
import developerImage from "../assets/images/developer-avatar.png";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="max-w-6xl mx-auto hero-inner">

        <div className="hero-content">

          <p className="intro">Hello, I'm</p>

          <h1>
            Niharika <span>Bandila</span>
          </h1>

          <h2>
            AI Engineer | Backend Developer | Data Engineer
          </h2>

          <p className="description">
            I build AI-powered applications, scalable backend systems,
            automation solutions, and data-driven platforms using Python,
            FastAPI, SQL, cloud technologies, and modern AI frameworks.
          </p>

          <div className="hero-actions">
            <div className="hero-buttons">
              <a href="#contact" className="primary-btn">
                Contact Me
              </a>

              <a
                href="/Niharika_Resume.pdf"
                download
                className="secondary-btn"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/niharikabandila"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={22} className="icon-reset" />
              </a>

              <a
                href="https://www.linkedin.com/in/niharika-bandila/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} className="icon-reset" />
              </a>

              <a href="mailto:bniharika10102@gmail.com">
                <Mail size={20} className="icon-reset" />
              </a>
            </div>
          </div>

        </div>

        <div className="hero-image">
          <img
            src={developerImage}
            alt="Developer"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;