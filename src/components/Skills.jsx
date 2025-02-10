import React from "react";
import { FaCode, FaReact, FaDatabase } from "react-icons/fa"; // Optional: Icons to represent categories

const Skills = () => {
  return (
    <section
      className='py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300'
      id='skills'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='font-header2 text-3xl font-extrabold text-center mb-12 text-[#2f4f4f] dark:text-gray-300'>
          My Skills
        </h2>

        {/* Skill Cards Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Software Development Skills Card */}
          <div className='bg-[#afc3c2]/85 dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center'>
            <div className='flex flex-col items-center mb-4'>
              {/* <FaCode size={30} className='text-teal-500 mb-2' /> */}
              <img src='./dev.png' alt='' className='h-10' />
              <h3 className='font-header1 text-2xl text-[#2f4f4f] dark:text-gray-600'>
                Software Development
              </h3>
            </div>
            <ul className='space-y-2 text-[#4b636e] dark:text-gray-400 font-roboto'>
              <li>Version Control (Git, GitHub)</li>
              <li>Code Debugging</li>
              <li>Test-Driven Development (TDD)</li>
              <li>RESTful APIs</li>
              <li>Agile Methodologies</li>
              <li>Unit Testing</li>

              <li>Problem Solving & Algorithms</li>
            </ul>
          </div>

          {/* Frameworks Skills Card */}
          <div className='bg-[#afc3c2]/85 dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center'>
            <div className='flex flex-col items-center mb-4'>
              {/* <FaReact size={30} className='text-teal-500 mb-2' /> */}
              <img src='./framework.png' alt='' className='h-10' />
              <h3 className='font-header1 text-2xl font-semibold text-[#2f4f4f] dark:text-gray-600'>
                Frameworks
              </h3>
            </div>
            <ul className='space-y-2 text-[#4b636e] dark:text-gray-400 font-roboto'>
              <li>React.js</li>
              <li>Flutter</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Next.js</li>
              <li>Vue.js</li>
              <li>Angular</li>
              <li>Django</li>
            </ul>
          </div>

          {/* Databases Skills Card */}
          <div className='bg-[#afc3c2]/85 dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center'>
            <div className='flex flex-col items-center mb-4'>
              <img src='./database.png' alt='' className='h-10' />
              <h3 className='font-header1 text-2xl font-semibold text-[#2f4f4f] dark:text-gray-600'>
                Databases
              </h3>
            </div>
            <ul className='space-y-2 text-[#4b636e] dark:text-gray-400 font-roboto'>
              <li>MongoDB (NoSQL)</li>
              <li>MySQL (SQL)</li>
              <li>PostgreSQL (SQL)</li>
              <li>Firebase</li>
              <li>SQLite</li>
              <li>Redis</li>
              <li>GraphQL</li>
              <li>Sequelize (ORM)</li>
              <li>Database Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
