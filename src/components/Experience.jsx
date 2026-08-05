import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";


const experiences = [
  {
    role: "Programmer Analyst",
    company: "Bilvantis Technologies",
    duration: "Nov 2024 - Present",
    points: [
      "Designed and developed AI-powered enterprise solutions using LangGraph and GPT-based workflows.",
      "Built scalable REST APIs using FastAPI and PostgreSQL for backend services.",
      "Implemented automation frameworks using Python, Playwright and Selenium with Java.",
      "Worked on data processing, validation workflows and intelligent system automation."
    ]
  },

  {
    role: "Full Stack Java Intern",
    company: "SkillDzire",
    duration: "Feb 2024 - Apr 2024",
    points: [
      "Developed end-to-end web applications using Java Spring Boot.",
      "Designed backend services and integrated relational databases using MySQL.",
      "Improved understanding of enterprise application development."
    ]
  },

  {
    role: "OwlCoder - DSA Specialist",
    company: "Technical Hub",
    duration: "Jan 2023 - Mar 2023",
    points: [
      "Completed intensive Data Structures and Algorithms training.",
      "Solved advanced programming problems and improved competitive coding skills.",
      "Achieved OwlCoder merit rank recognition."
    ]
  },

  {
    role: "RedHat System Administrator Intern",
    company: "Technical Hub",
    duration: "Jul 2022 - Nov 2022",
    points: [
      "Managed Linux environments and learned system administration practices.",
      "Earned RedHat Certified System Administrator (RHCSA) certification.",
      "Won 2nd Prize in RedHat National Contest on Programmer's Day."
    ]
  }

];


export default function Experience() {

  return (

    <section
      id="about"
      className="py-24 px-8"
    >

      <div className="max-w-6xl mx-auto">


        {/* About */}
        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.6
          }}

        >

          <p className="accent-text font-medium">
            About Me
          </p>


          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Engineering Intelligent Solutions
          </h2>


          <p className="mt-6 text-gray-400 max-w-3xl leading-relaxed">

            I am a Programmer Analyst specializing in Artificial Intelligence,
            Data Engineering and Backend Development. I build scalable systems
            by combining AI models, data pipelines, APIs and automation
            frameworks.

            My experience includes Agentic AI workflows, FastAPI backend
            architecture, SQL-based data systems, cloud technologies and
            software automation.

          </p>


        </motion.div>



        {/* Experience Timeline */}

        <div className="mt-16">


          <h3 className="text-3xl font-bold mb-10">
            Professional Journey
          </h3>



          <div className="space-y-8">


            {experiences.map((exp,index)=>(

              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  x:-40
                }}

                whileInView={{
                  opacity:1,
                  x:0
                }}

                transition={{
                  duration:0.5,
                  delay:index*0.1
                }}

                className="glass rounded-3xl p-8"

              >


                <div className="flex gap-4 items-start">


                  <div className="p-3 rounded-xl bg-white/10">

                    {index === 0 ? (
                      <Briefcase size={24}/>
                    ) : (
                      <Award size={24}/>
                    )}

                  </div>



                  <div>


                    <h4 className="text-2xl font-bold">
                      {exp.role}
                    </h4>


                    <p className="accent-text mt-1">
                      {exp.company}
                    </p>


                    <p className="text-gray-500 mt-1">
                      {exp.duration}
                    </p>


                  </div>


                </div>



                <ul className="mt-6 space-y-3 text-gray-300">


                  {exp.points.map((point)=>(

                    <li
                      key={point}
                      className="flex gap-3"
                    >

                      <span className="accent-text">
                        ▹
                      </span>

                      {point}

                    </li>

                  ))}


                </ul>


              </motion.div>


            ))}


          </div>


        </div>


      </div>


    </section>

  );

}