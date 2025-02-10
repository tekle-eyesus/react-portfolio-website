import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO at TechCorp",
    content:
      "Exceptional developer who delivered beyond our expectations. The attention to detail and problem-solving skills were impressive.",
    image: "/path-to-image.jpg",
  },
  {
    name: "Jane Smith",
    role: "Founder at StartupX",
    content:
      "Working with them was a great experience. They brought our vision to life with remarkable efficiency and professionalism.",
    image: "/path-to-image.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Product Manager",
    content:
      "Outstanding technical skills combined with great communication made the development process smooth and successful.",
    image: "/path-to-image.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials' className='py-20 bg-gray-50 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold mb-4 font-header2 text-gray-500'>
            What Clients Say
          </h2>
          <p className='text-gray-500/90 font-roboto'>
            Testimonials from people I've worked with.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-[#afc3c2]/20 p-6 rounded-lg shadow-lg'
            >
              <div className='flex items-center mb-4'>
                <img
                  // src={testimonial.image}
                  src='./myimage2.png'
                  alt={testimonial.name}
                  className='w-12 h-12 rounded-full mr-4 object-cover'
                />
                <div>
                  <h4 className='font-bold font-roboto'>{testimonial.name}</h4>
                  <p className='text-gray-600 text-sm'>{testimonial.role}</p>
                </div>
              </div>
              <p className='text-gray-600 italic'>"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
