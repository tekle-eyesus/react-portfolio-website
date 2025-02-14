import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Self Employed",
    role: "Software Engineer",
    period: "2020 - Present",
    description:
      "Working on various freelance projects, building web and mobile applications for clients.",
    technologies: ["React", "Node.js", "MongoDB", "Flutter", "Firebase"],
  },
  {
    company: "Forage",
    role: "Frontend Developer-job simmulation",
    period: "Sep 2023",
    description:
      "Worked on the frontend of a job simulation platform, focusing on React and Redux.",
    technologies: ["React", "Javascript"],
  },
];

const education = [
  {
    school: "Bahir Dar University",
    degree: "B.Sc. in Software Engineering",
    period: "Aug 2022 - Present",
    description:
      "Currently pursuing a degree in Software Engineering with a focus on web and mobile development.",
  },
  {
    school: "FreeCodeCamp",
    degree: "Backend Development and APIs",
    period: "sep 2024 - Dec 2024",
    description:
      "Completed a certification in backend development and APIs, covering Node.js, Express, and MongoDB.",
  },
];

const ExperienceAndEducation = () => {
  return (
    <section
      id='experience-education'
      className='py-20 bg-white dark:bg-gray-900'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold mb-4 font-header2 text-gray-500'>
            Experience & Education
          </h2>
          <p className='text-gray-400 font-roboto'>
            A journey through my professional and academic milestones.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Experience Column */}
          <div>
            <h3 className='text-2xl font-bold mb-6 text-gray-500 font-header1'>
              Experience
            </h3>
            <div className='space-y-8'>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='relative pl-8 border-l-2 border-[rgb(129,114,32)] '
                >
                  <div className='absolute w-4 h-4 bg-[rgb(198,141,43)]  rounded-full -left-[9px] top-0' />
                  <div className='bg-[#afc3c2]/20 dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
                    <h3 className='text-xl font-bold mb-1 font-header1 text-gray-500 dark:text-gray-400'>
                      {exp.role}
                    </h3>
                    <h4 className='text-gray-500 font-roboto mb-2'>
                      {exp.company}
                    </h4>
                    <p className='text-gray-500 dark:text-yellow-400/60 text-sm mb-3 font-roboto'>
                      {exp.period}
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 mb-4 font-manrope'>
                      {exp.description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className='bg-gray-200 dark:bg-gray-900/50 px-3 py-1 rounded-full text-sm text-gray-500 dark:text-gray-500 font-header1'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className='text-2xl font-bold mb-6 text-gray-500 font-header1'>
              Education
            </h3>
            <div className='space-y-8'>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='relative pl-8 border-l-2 border-[rgb(129,114,32)] '
                >
                  <div className='absolute w-4 h-4   bg-[rgb(198,141,43)]  rounded-full -left-[9px] top-0' />
                  <div className='bg-[#afc3c2]/20 dark:bg-gray-800 p-6 rounded-lg shadow-md'>
                    <h3 className='text-xl font-bold mb-1 text-gray-500 dark:text-gray-400 font-header1'>
                      {edu.degree}
                    </h3>
                    <h4 className='text-gray-500 font-roboto mb-2'>
                      {edu.school}
                    </h4>
                    <p className='text-gray-500 dark:text-yellow-400/60 text-sm mb-3 font-roboto'>
                      {edu.period}
                    </p>
                    <p className='text-gray-600 font-manrope dark:text-gray-400'>
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
