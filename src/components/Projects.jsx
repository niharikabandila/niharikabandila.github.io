import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import talentiq from "../assets/images/talentiq-ai.png";
import growstack from "../assets/images/growstack-ai.png";
import societysphere from "../assets/images/societysphere.png";
import fakeNews from "../assets/images/fake-news.png";
import sensoryStick from "../assets/images/sensory-stick.png";


const projects = [
  {
    title: "TalentIQ AI",
    image: talentiq,
    description:
      "An enterprise AI recruitment platform using Multi-Agent architecture with LangGraph and GPT-4o. Automates job description analysis, candidate evaluation and intelligent ranking.",
    technologies: [
      "LangGraph",
      "GPT-4o",
      "RAG",
      "FastAPI",
      "Python"
    ],
    github: "https://github.com/niharikabandila",
    demo: "#",
    featured: true
  },

  {
    title: "Growstack AI",
    image: growstack,
    description:
      "A comprehensive automation testing framework integrating Selenium, Playwright, Java, Cucumber BDD and TestNG with automated reporting.",
    technologies: [
      "Selenium",
      "Playwright",
      "Java",
      "Cucumber",
      "TestNG"
    ],
    github: "https://github.com/niharikabandila",
    demo: "#"
  },

  {
    title: "SocietySphere",
    image: societysphere,
    description:
      "A scalable community management backend system with REST APIs, PostgreSQL integration and complete CRUD functionality.",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "REST API",
      "Python"
    ],
    github: "https://github.com/niharikabandila",
    demo: "#"
  },

  {
    title: "Fake News Detection System",
    image: fakeNews,
    description:
      "Machine learning based misinformation detection system using NLP techniques and Passive Aggressive Classifier achieving 92% accuracy.",
    technologies: [
      "Python",
      "Machine Learning",
      "NLP",
      "Scikit-Learn"
    ],
    github: "https://github.com/niharikabandila",
    demo: "#"
  },

  {
    title: "Sensory Stick",
    image: sensoryStick,
    description:
      "Smart IoT navigation system designed for visually impaired users using Arduino, sensors, NodeMCU and voice-based alerts.",
    technologies: [
      "Arduino",
      "NodeMCU",
      "IoT",
      "Sensors"
    ],
    github: "https://github.com/niharikabandila",
    demo: "#"
  }

];


export default function Projects() {

  return (

    <section
      id="projects"
      className="py-24 px-8"
    >

      <div className="max-w-6xl mx-auto">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* <p className="accent-text font-medium">
            Featured Work
          </p> */}


          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Projects
          </h2>


          <p className="text-gray-400 mt-4 max-w-2xl">
            A collection of AI systems, backend platforms,
            automation frameworks and machine learning solutions.
          </p>


        </motion.div>



        <div className="grid md:grid-cols-2 gap-6 mt-10">


          {projects.map((project, index) => (

            <motion.div

              key={project.title}

              initial={{
                opacity: 0,
                y: 40
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}

              className="glass rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"

            >


              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />



              <div className="p-5">


                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>



                <p className="text-gray-400 mt-3 leading-relaxed">
                  {project.description}
                </p>



                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>



                <div className="flex gap-5 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>


              </div>


            </motion.div>

          ))}


        </div>


      </div>


    </section>

  );

}