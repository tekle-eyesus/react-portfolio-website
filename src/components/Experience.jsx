import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Tech Company A",
    role: "Senior Developer",
    period: "2020 - Present",
    description:
      "Led development of multiple web and mobile applications, managed team of 5 developers.",
    technologies: ["React", "Node.js", "AWS"],
  },
  {
    company: "Startup B",
    role: "Full Stack Developer",
    period: "2018 - 2020",
    description:
      "Developed and maintained various client projects, implemented new features and optimizations.",
    technologies: ["React Native", "Firebase", "MongoDB"],
  },
  {
    company: "Freelance",
    role: "Software Engineer",
    period: "2015 - 2018",
    description:
      "Worked on diverse software development projects for clients, focusing on web applications and automation.",
    technologies: ["JavaScript", "Python", "SQL"],
  },
];

const education = [
  {
    school: "University A",
    degree: "B.Sc. in Computer Science",
    period: "2012 - 2016",
    description:
      "Graduated with honors, specializing in software engineering and algorithm design.",
  },
  {
    school: "High School B",
    degree: "High School Diploma",
    period: "2008 - 2012",
    description:
      "Focused on science and mathematics with a passion for coding.",
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
                    <p className='text-gray-600 font-roboto dark:text-gray-400'>
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
