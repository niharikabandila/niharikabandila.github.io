import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="max-w-6xl mx-auto about-container">

        <div className="about-content">
          <h2>
            About <span>Me</span>
          </h2>

          <p>
            I am a Computer Science Engineer with experience in software
            development, automation testing, and backend engineering.
            I enjoy building reliable applications and solving real-world
            problems through technology.
          </p>

          <p>
            My technical expertise includes Python, Java, FastAPI, SQL,
            PostgreSQL, AWS Cloud, Machine Learning, Selenium, and Playwright.
            I am passionate about backend development and data engineering.
          </p>

          <p>
            I continuously learn new technologies and focus on writing clean,
            scalable, and maintainable code to build impactful software
            solutions.
          </p>
        </div>


        <div className="about-cards">

          <div className="about-card">
            <h3>Experience</h3>
            <p>
              Software Development & Automation Testing
            </p>
          </div>


          <div className="about-card">
            <h3>Education</h3>
            <p>
              B.Tech Computer Science Engineering
            </p>
          </div>


          <div className="about-card">
            <h3>Tech Stack</h3>
            <p>
              Python, Java, FastAPI, SQL, PostgreSQL, AWS, Selenium,
              Playwright, ML
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;