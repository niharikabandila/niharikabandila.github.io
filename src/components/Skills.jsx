import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank, SiCodechef } from "react-icons/si";


const skillGroups = [
  {
    title: "AI & Machine Learning",
    skills: [
      "LangGraph",
      "LangChain",
      "RAG",
      "LLM Prompt Engineering",
      "GPT-4o",
      "Machine Learning",
      "NLP",
      "Scikit-Learn"
    ]
  },

  {
    title: "Data Engineering",
    skills: [
      "SQL",
      "Advanced SQL",
      "Data Processing",
      "Pandas",
      "NumPy",
      "Data Preprocessing",
      "ETL Concepts",
      "PostgreSQL"
    ]
  },


  {
    title: "Backend Engineering",
    skills: [
      "Python",
      "FastAPI",
      "Java",
      "REST APIs",
      "MySQL",
      "PostgreSQL"
    ]
  },


  {
    title: "Automation & Testing",
    skills: [
      "Playwright",
      "Selenium",
      "Cucumber BDD",
      "TestNG",
      "Postman",
      "Swagger",
      "API Testing"
    ]
  },


  {
    title: "Cloud & DevOps",
    skills: [
      "AWS Cloud Practitioner",
      "RedHat Linux",
      "RHCSA",
      "Git",
      "GitHub",
      "Jira",
      "Linux Administration"
    ]
  },


  {
    title: "Programming",
    skills: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "HTML",
      "Data Structures",
      "Algorithms"
    ]
  }

];


export default function Skills(){

return (

<section
id="skills"
className="py-24 px-8"
>


<div className="max-w-6xl mx-auto">


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

  {/* <p className="accent-text font-medium">
    Technical Expertise
  </p> */}


<h2 className="text-4xl md:text-5xl font-bold mt-3">
Skills & Technologies
</h2>


<p className="text-gray-400 mt-4 max-w-2xl">
A combination of AI engineering, data systems,
backend development and automation expertise.
</p>


</motion.div>

        {/* Profiles (GitHub + coding profiles) */}
        <div className="mt-8">
          <div className="glass rounded-3xl p-6">
            <h3 className="text-2xl font-bold">Profiles</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
              <a href="https://github.com/niharikabandila" target="_blank" rel="noreferrer" aria-label="GitHub" className="px-4 py-2 rounded-md bg-white/5 inline-flex items-center gap-2 text-sm w-full justify-center md:w-auto">
                <FaGithub aria-hidden="true" className="icon-reset" /> <span>GitHub</span>
              </a>

              <a href="https://leetcode.com/u/niharika_bandila/" target="_blank" rel="noreferrer" aria-label="LeetCode" className="px-4 py-2 rounded-md bg-white/5 inline-flex items-center gap-2 text-sm w-full justify-center md:w-auto">
                <SiLeetcode aria-hidden="true" className="icon-reset" /> <span>LeetCode</span>
              </a>

              <a href="https://www.geeksforgeeks.org/profile/bniharika10102" target="_blank" rel="noreferrer" aria-label="GeeksforGeeks" className="px-4 py-2 rounded-md bg-white/5 inline-flex items-center gap-2 text-sm w-full justify-center md:w-auto">
                <SiGeeksforgeeks aria-hidden="true" className="icon-reset" /> <span>GeeksforGeeks</span>
              </a>

              <a href="https://www.hackerrank.com/profile/niharika_bandila" target="_blank" rel="noreferrer" aria-label="HackerRank" className="px-4 py-2 rounded-md bg-white/5 inline-flex items-center gap-2 text-sm w-full justify-center md:w-auto">
                <SiHackerrank aria-hidden="true" className="icon-reset" /> <span>HackerRank</span>
              </a>

              <a href="https://www.codechef.com/users/niharika_47" target="_blank" rel="noreferrer" aria-label="CodeChef" className="px-4 py-2 rounded-md bg-white/5 inline-flex items-center gap-2 text-sm w-full justify-center md:w-auto">
                <SiCodechef aria-hidden="true" className="icon-reset" /> <span>CodeChef</span>
              </a>
            </div>
          </div>
        </div>



<div className="grid md:grid-cols-2 gap-8 mt-12">


{
skillGroups.map((group,index)=>(


<motion.div

key={group.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.5,
delay:index*0.1
}}

className="glass rounded-3xl p-8"

>


<h3 className="text-2xl font-bold">
{group.title}
</h3>



<div className="flex flex-wrap gap-3 mt-6">


{
group.skills.map(skill=>(

<span

key={skill}

className="px-4 py-2 rounded-full bg-white/10 text-gray-300 text-sm hover:bg-white/20 transition"

>

{skill}

</span>

))
}


</div>


</motion.div>


))
}


</div>


</div>


</section>

);

}