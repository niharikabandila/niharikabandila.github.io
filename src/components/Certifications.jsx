import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";


const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    description:
      "Cloud fundamentals including AWS services, security, architecture and cloud concepts."
  },

  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat Academy",
    description:
      "Linux system administration, configuration and enterprise infrastructure management."
  },

  {
    title: "MTA Python Certified",
    issuer: "Microsoft Technology Associate",
    description:
      "Python programming fundamentals, problem solving and application development."
  },

  {
    title: "Introduction to Agent Skills",
    issuer: "Anthropic",
    description:
      "Understanding AI agents, LLM workflows and modern AI development concepts."
  }

];


const education = [
  {
    degree:
      "Bachelor of Technology - Computer Science and Engineering",
    institute:
      "Aditya College of Engineering & Technology",
    duration:
      "2020 - 2024",
    score:
      "CGPA: 8.28"
  },

  {
    degree:
      "Intermediate Education",
    institute:
      "Narayana Junior College",
    duration:
      "2018 - 2020",
    score:
      "CGPA: 9.54"
  },

  {
    degree:
      "Class X",
    institute:
      "Bhashyam E.M High School",
    duration:
      "2017 - 2018",
    score:
      "CGPA: 10.0"
  }

];


export default function Certifications(){

return (

<section
id="certifications"
className="py-24 px-8"
>


<div className="max-w-6xl mx-auto">


{/* Certifications */}

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
            Credentials
          </p> */}


<h2 className="text-4xl md:text-5xl font-bold mt-3">
Certifications
</h2>


</motion.div>



<div className="grid md:grid-cols-2 gap-8 mt-12">


{
certifications.map((cert,index)=>(


<motion.div

key={cert.title}

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


<div className="flex gap-4">


<div className="p-3 rounded-xl bg-white/10 cert-icon-wrap">
  <Award size={20} className="cert-icon" />
</div>


<div>

<h3 className="text-xl font-bold">
{cert.title}
</h3>


  <p className="accent-text mt-1">
{cert.issuer}
</p>


</div>


</div>


<p className="text-gray-400 mt-5">
{cert.description}
</p>


</motion.div>


))

}


</div>





{/* Education */}

<div className="mt-24">


<h2 className="text-4xl md:text-5xl font-bold">
Education
</h2>



<div className="mt-10 space-y-6">


{
education.map((edu,index)=>(


<motion.div

key={edu.degree}

initial={{
opacity:0,
x:-30
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


<div className="flex gap-4">


<div className="p-3 rounded-xl bg-white/10 cert-icon-wrap">
  <GraduationCap size={20} className="cert-icon" />
</div>


<div>


<h3 className="text-xl font-bold">
{edu.degree}
</h3>


  <p className="accent-text mt-2">
{edu.institute}
</p>


<p className="text-gray-400 mt-1">
{edu.duration} | {edu.score}
</p>


</div>


</div>


</motion.div>


))

}


</div>


</div>



</div>


</section>

);

}