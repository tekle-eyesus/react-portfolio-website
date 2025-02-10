import React, { useEffect, useState } from "react";
// import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import "./styles/fonts.css";
import Skills from "./components/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Update class on document.documentElement
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save preference to localStorage
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200'>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
