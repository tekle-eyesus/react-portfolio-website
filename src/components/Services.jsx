import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and modern web applications using React and other cutting-edge technologies.",
    image: "./webdev2.png",
  },
  {
    title: "Mobile Development",
    description:
      "Creating native and cross-platform mobile applications for iOS and Android.",
    image: "./mobiledev.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful user interfaces with great user experience.",
    image: "./uiux.png",
  },
  {
    title: "API Development",
    description:
      "Building robust APIs with Node.js, Express, and MongoDB for scalable and efficient back-end solutions.",
    image: "./apidev.png",
  },
];

const Services = () => {
  return (
    <section
      id='services'
      className='py-20 bg-white dark:bg-gray-900  transition-colors duration-200'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold mb-4 font-header2 text-gray-500'>
            Services
          </h2>
          <p className='text-gray-500/90 dark:text-gray-500 font-roboto'>
            What I can do for you?
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-[#afc3c2]/20 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow'
            >
              {/* <div className='text-4xl mb-4'>{service.icon}</div> */}
              <img src={service.image} alt='' className='h-[70px] mb-2' />
              <h3 className='text-xl font-bold mb-2 dark:text-gray-600 font-header1'>
                {service.title}
              </h3>
              <p className='text-gray-600 dark:text-gray-400 font-roboto text-md'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
