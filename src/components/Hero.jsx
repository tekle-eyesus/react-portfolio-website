import React from "react";
import { motion } from "framer-motion";
import { SiMongodb } from "react-icons/si";
import {
  ImCoinDollar,
  ImListNumbered,
  ImProfile,
  ImTwitter,
} from "react-icons/im";
import {
  FaDatabase,
  FaDollarSign,
  FaFigma,
  FaGit,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaProjectDiagram,
  FaReact,
  FaRProject,
  FaTwitter,
} from "react-icons/fa";
import { FaFlutter, FaX } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className='md:max-h-screen pt-6 flex items-center bg-[#afc3c2] relative dark:bg-gray-900 transition-colors duration-300'>
      <div className='pt-[100px] sm:pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-12  '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative'>
          {/* Left Text Section   bg-[#cfdbdb] */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-5xl  sm:font-extrabold md:text-6xl lg:text-[121px] font-bold md:font-extrabold mb-4 dark:text-gray-300 text-white'>
              TEKLEEYESUS MUNYE
            </h1>
            <h1 className='text-4xl sm:text-5xl md:text-5xl font-bold mb-4 text-white dark:text-gray-300 font-header2'>
              Web & Mobile App Developer
            </h1>
            <p className='text-base lg:text-lg text-gray-600 mb-5 dark:text-gray-500 font-manrope font-weight-700'>
              Hi, I'm <span className='font-bold'>Tekleeyesus Munye</span>, a
              Web and Mobile App Developer dedicated to creating elegant,
              functional, and user-friendly applications that meet real-world
              needs and deliver exceptional experiences.
            </p>
            <div className='mb-10 sm:mb-0 flex space-x-4'>
              <a href='#projects'>
                <button className='bg-gray-700 text-yellow-500 px-3 py-4 rounded-[6px] hover:bg-gray-600 transition-all duration-300 font-manrope'>
                  View Projects
                </button>
              </a>
              <a href='#contact'>
                <button className='bg-gray-700 font-manrope text-yellow-500 px-3 py-4 rounded-[6px] hover:bg-gray-600 transition-all duration-300'>
                  Contact Me
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='hidden sm:block relative h-[440px]'
          >
            {/* Image container */}
            <div className='md:relative'>
              <img
                src='/man.png'
                alt='Tekleeyesus Munye'
                className='hidden md:block md:w-[420px] lg:w-[550px] mt-6 rounded-sm z-0 relative'
              />
              {/* Decorative Name Behind Image
              <h1 className='absolute inset-0 -z-0 text-9xl font-extrabold text-white opacity-20 leading-[1]'>
                TEKLEEYESUS
              </h1> */}

              {/* White Blurred Card (on top of the image) */}
              <div className='hidden absolute  md:top-[290px] lg:top-[350px]  right-10 w-[200px] h-[120px] bg-white/30 dark:bg-gray-800/30 rounded-[14px] shadow-lg backdrop-blur-3xl border border-yellow-400 p-2 md:flex flex-col justify-between items-start z-10'>
                {/* LinkedIn Profile Section */}
                <div className='flex space-x-2 items-center'>
                  {/* <img src='' alt='' /> */}
                  <img
                    src='./propic.png'
                    alt=''
                    className='w-[45px] h-[45px] rounded-full border-blue-500 border-2'
                  />
                  <div className='text-sm '>
                    <h3 className='text-gray-600 dark:text-gray-200 italic'>
                      @TekleeyesusM
                    </h3>

                    <h3 className='text-gray-800 dark:text-yellow-300 font-customNormal text-md'>
                      Software Engineer
                    </h3>
                  </div>
                </div>
                <hr className='bg-black p-0  border-blue-600 w-full my-1 ' />
                <div className='flex space-x-1'>
                  <FaProjectDiagram className='text-blue-900 ' />
                  <h4 className='text-xs font-manrope  text-blue-900 dark:text-gray-200'>
                    <span className='font-header1'>10+</span> Projects Completed
                  </h4>
                </div>
                <div className='flex space-x-1 items-center justify-start'>
                  {/* <FaFlutter className='text-blue-900' /> */}
                  <div className='flex items-center space-x-1 justify-between'>
                    <FaFlutter className='text-blue-200' />
                    <h4 className='text-xs font-roboto  text-blue-900 dark:text-gray-200 flex items-center gap-1'>
                      <span>
                        <FaReact className='text-blue-200 text-lg' />
                      </span>
                    </h4>
                    <h4 className='text-xs font-roboto  text-blue-900 dark:text-gray-200 flex items-center gap-1'>
                      <span>
                        <FaNodeJs className='text-blue-200 text-lg' />
                      </span>
                    </h4>
                    <h4 className='text-xs font-roboto  text-blue-900 dark:text-gray-200 flex items-center gap-1'>
                      <span>
                        <SiMongodb className='text-blue-200 text-lg' />
                      </span>
                    </h4>
                    <h4 className='text-xs font-roboto  text-blue-900 dark:text-gray-200 flex items-center gap-1'>
                      <span>
                        <FaJava className='text-blue-200 text-lg' />
                      </span>
                    </h4>
                    <h4 className='text-xs font-roboto  text-blue-900 dark:text-gray-200 flex items-center gap-1'>
                      <span>
                        <FaGit className='text-blue-200 text-lg' />
                      </span>
                    </h4>
                    <h4 className='text-xs font-roboto  text-blue-900 dark:text-gray-200 flex items-center gap-1'>
                      <span>
                        <FaGithub className='text-blue-200 text-lg' />
                      </span>
                    </h4>
                    <h4 className='text-xs font-roboto  text-blue-900 dark:text-gray-200 flex items-center gap-1'>
                      <span>
                        <FaFigma className='text-blue-200 text-lg' />
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
