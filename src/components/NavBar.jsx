import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "Services", href: "#services" },
    { title: "Projects", href: "#projects" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  // // Scroll listener to detect the active section
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll("section");
  //     let current = "Home"; // Default section

  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop;
  //       const sectionHeight = section.offsetHeight;
  //       if (window.scrollY >= sectionTop - sectionHeight / 3) {
  //         current = section.getAttribute("id") || "Home";
  //       }
  //     });

  //     setActiveLink(current);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleResumeClick = () => {
    // https://drive.google.com/file/d/102MkfEqN7rhtHDYNutDeaWlwbYjRqizZ/view?usp=sharing
    // Replace this URL with your Google Drive direct download link
    const resumeUrl =
      "https://drive.google.com/file/d/102MkfEqN7rhtHDYNutDeaWlwbYjRqizZ/view?usp=sharing";
    window.open(resumeUrl, "_blank"); // Opens in a new tab
  };

  return (
    <nav className='fixed w-full bg-[#afc3c2] dark:bg-gray-900 z-50 transition-colors duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8 text-md font-roboto'>
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.title);
                }}
                className={`${
                  activeLink === link.title
                    ? "underline decoration-white decoration-4 underline-offset-4 transition-color duration-200"
                    : ""
                } text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-400 transition-colors  rounded-full px-2`}
              >
                {link.title}
              </a>
            ))}
          </div>
          <div className='flex gap-3'>
            <button
              onClick={handleResumeClick}
              className='px-3 py-2 tracking-widest bg-gray-900/50 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-[8px] font-manrope  text-gray-200 text-sm hover:bg-gray-800 transition-all duration-200'
            >
              RESUME
            </button>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>

          {/* Mobile Navigation Button */}
          <div className='flex items-center space-x-4 md:hidden'>
            {/* <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className='md:hidden overflow-hidden'
      >
        <div className='px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900'>
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={`block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent ${
                activeLink === link.title
                  ? "underline decoration-white decoration-4 underline-offset-4"
                  : ""
              }`}
              onClick={() => {
                // setIsOpen(false);
                setActiveLink(link.title);
              }}
            >
              {link.title}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
