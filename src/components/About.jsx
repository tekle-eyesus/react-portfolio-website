import React from "react";
import { motion } from "framer-motion";
// import './styles/fonts.css';
import "../styles/fonts.css";

const About = () => {
  const skills = [
    "React",
    "React Native",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "MongoDB",
    "SQL",
    "AWS",
    "Docker",
    "Git",
    "Tailwind CSS",
  ];

  return (
    <section
      id='about'
      className='py-20 bg-gray-100 dark:bg-gray-800 duration-300 transition-colors'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-4xl font-bold mb-6 font-header2 text-gray-500 dark:text-grray-400'>
              About Me
            </h2>
            <p className='text-gray-600 mb-4 dark:text-gray-300/70 font-roboto font-medium text-md'>
              Hi, I’m Tekleeyesus Munye Taye, a passionate software engineer
              driven by the belief that technology is the most efficient and
              effective way to solve real-world problems. Growing up in the
              small town of Debre Werk, I developed a deep appreciation for the
              potential of innovation to transform lives and communities.
            </p>
            <p className='text-gray-600 mb-4 dark:text-gray-300/70 font-roboto text-md'>
              With a bachelor’s degree in Software Engineering from Bahir Dar
              University, I’ve dedicated my career to creating meaningful and
              impactful solutions. My philosophy is simple yet powerful:
              identify and deeply understand real challenges before crafting
              thoughtful, optimized software solutions. I firmly believe that
              true innovation stems from addressing problems that genuinely
              matter.
            </p>
            <p className='text-gray-600 mb-4 dark:text-gray-300/70 font-roboto text-md'>
              Beyond coding, I’m committed to personal growth. Every day, I
              dedicate time to reading self-improvement books, which helps me
              stay grounded, focused, and continually evolving—both as an
              individual and as a professional.
            </p>
            <div className='flex flex-wrap gap-3'>
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className='bg-gray-200 dark:bg-gray-900/50 text-gray-800 dark:text-yellow-500/50 font-header1 px-3 py-1 rounded-full text-xs'
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='relative'
          >
            {/* Add your profile image here */}
            <div className='w-full sm:h-[500px] bg-transparent rounded-lg'>
              {/* Replace with your image */}
              <img
                src='./aboutpic.png'
                alt='Profile'
                className='w-full sm:w-[500px] h-full object-cover rounded-lg'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
