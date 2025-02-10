import React, { useState } from "react";
import { motion } from "framer-motion";

const allProjects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with React and Node.js",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYPPTbPkU044k7PBWrIXE4O9v7Ay8Zn_zeg&s",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Social Media App",
    description: "Mobile app built with React Native and Firebase",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNTcluNXS4CzylBxM2C-tvGXaohWtTZ4qNA&s",
    tags: ["React Native", "Firebase"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNTcluNXS4CzylBxM2C-tvGXaohWtTZ4qNA&s",
    tags: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Task Management App",
    description: "A task management app built with React and Firebase",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNTcluNXS4CzylBxM2C-tvGXaohWtTZ4qNA&s",
    tags: ["React", "Firebase"],
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A blog platform built with Next.js and Markdown",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNTcluNXS4CzylBxM2C-tvGXaohWtTZ4qNA&s",
    tags: ["Next.js", "Markdown"],
    link: "#",
  },
  {
    title: "E-learning Platform",
    description: "An e-learning platform built with MERN stack",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNTcluNXS4CzylBxM2C-tvGXaohWtTZ4qNA&s",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    link: "#",
  },
  // Add more projects here
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3); // Initially show 3 projects
  const [isExpanded, setIsExpanded] = useState(false); // Track if the list is expanded

  const loadMoreProjects = () => {
    setVisibleProjects(allProjects.length); // Show all projects
    setIsExpanded(true); // Set expanded state to true
  };

  const showLessProjects = () => {
    setVisibleProjects(3); // Show only 3 projects
    setIsExpanded(false); // Set expanded state to false
  };

  return (
    <section id='projects' className='py-16 bg-gray-50 dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold mb-4 font-header2 text-gray-500'>
            Featured Projects
          </h2>
          <p className='text-gray-500/90 font-roboto'>
            Some of my recent projects.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-[#afc3c2]/20 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2 font-header1'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-500 mb-4 font-roboto'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='bg-gray-300 dark:bg-gray-800/50 px-3 py-1 rounded-full text-sm font-header1 text-gray-500 dark:text-gray-500'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className='text-yellow-500/30 font-manrope  hover:text-yellow-500/70 transition-colors'
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show "More Projects" or "Show Less" button based on the expanded state */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-center mt-12'
        >
          {isExpanded ? (
            <button
              onClick={showLessProjects}
              className='px-6 py-2 tracking-wider text-yellow-500/60 font-bold font-manrope rounded-lg hover:bg-accent-dark transition-colors'
            >
              Show Less
            </button>
          ) : (
            <button
              onClick={loadMoreProjects}
              className='px-6 py-2 tracking-wider text-yellow-500/60 font-bold font-manrope rounded-lg hover:bg-accent-dark transition-colors'
            >
              More Projects
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
