import React, { useState } from "react";
import { motion } from "framer-motion";

const allProjects = [
  {
    title: "FindBet - House Rental App",
    description:
      "A mobile app built with Flutter and Firebase for house rental and buying.",
    image: "/project1.png",
    tags: ["Flutter", "Firebase"],
    link: "#",
  },
  {
    title: "FindInfo - City Resources App",
    description:
      " A mobile app that allows users to get city resources and information like hospitals, schools, and more.",
    image: "/project2.png",
    tags: ["Google Map API", "Flutter", "Firebase"],
    link: "#",
  },
  {
    title: "Socialize - Social App",
    description:
      " A minimalisic social app for tech professionals to share their ideas and connect with each other.",
    image: "/project3.png",
    tags: ["Real Time Chat", "Insights", "Flutter"],
    link: "#",
  },
  {
    title: "ChatAI - Chatbot App",
    description:
      "A Chatbot app that helps users with their queries and questions with gemini ai.",
    image: "/project4.png",
    tags: ["Flutter", "Gemini"],
    link: "#",
  },
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

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-[#afc3c2]/20 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow hover:border border-yellow-500/60 cursor-pointer'
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
