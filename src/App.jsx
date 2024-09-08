import About from "./components/About/About";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";

import React from "react";
import Projects from "./components/Projects/Projects";
import Footer from "./components/footer/Footer";
import Experience from "./components/Experience/Experience";

function App() {
  

  return <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar />
    <Home />
    <About />
    <Experience />
    <Projects />
    <Footer />
   
  </div>;
}

export default App
 