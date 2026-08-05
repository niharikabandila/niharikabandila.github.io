import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  return (

    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Animated Background */}

      <div className="fixed inset-0 -z-10">

        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse">
        </div>


        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse">
        </div>


      </div>



      <Navbar />


      <main>

        <Hero />
        {/* <About /> */}

        <Experience />

        <Skills />

        <Projects />

        <Certifications />

        <Contact />

      </main>


      <Footer />


    </div>

  );

}


export default App;