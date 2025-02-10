import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaEnvelopeOpen,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaLocationDot, FaLocationPin } from "react-icons/fa6";
import { ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <footer
      className='bg-gray-900 text-white py-6 border-t-[8px] border-yellow-600/50'
      id='contact'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Left Section - Connect */}
          <div className='col-span-1 w-[300px]'>
            <h3 className='text-xl font-bold mb-2 font-header2'>
              Let's Connect
            </h3>
            <p className='text-gray-400 text-sm mb-4 font-roboto'>
              I'm always interested in new projects and opportunities. Feel free
              to reach out!
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://github.com/tekle-eyesus/'
                target='_blank'
                className='text-gray-400 hover:text-yellow-500/60 transition-colors duration-200'
              >
                <FaGithub size={35} />
              </a>
              <a
                href='https://www.linkedin.com/in/tekleeyesus-munye'
                target='_blank'
                className='text-gray-400 hover:text-yellow-500/60 transition-colors duration-200'
              >
                <FaLinkedin size={35} />
              </a>
              <a
                href='https://x.com/TekleeyesusM?t=hX9AO5eE_UthJDqxRlHVkw&s=09'
                target='_blank'
                className='text-gray-400 hover:text-yellow-500/60 transition-colors duration-200'
              >
                <FaXTwitter size={35} />
              </a>
              <a
                href='mailto:tekleeyesus21@gmail.com'
                className='text-gray-400 hover:text-yellow-500/60 transition-colors duration-200'
              >
                <FaEnvelope size={35} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className='col-span-1'>
            <h4 className='text-lg font-bold mb-2 font-header2'>Quick Links</h4>
            <ul className='space-y-1'>
              <li>
                <a
                  href='#'
                  className='font-roboto text-gray-400 hover:text-gray-300 transition-colors duration-300'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='font-roboto text-gray-400 hover:text-gray-300 transition-colors duration-300'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='font-roboto text-gray-400 hover:text-gray-300 transition-colors duration-300'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='font-roboto text-gray-400 hover:text-gray-300 transition-colors duration-300'
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className='col-span-1'>
            <h4 className='text-lg font-bold mb-2 font-header2'>Contact</h4>
            <ul className='space-y-1 text-gray-400'>
              <li className='italic font-roboto flex items-center'>
                {" "}
                <FaEnvelope className='mr-1 ' /> tekleeyesus21@gmail.com
              </li>
              <li className='font-roboto flex items-center'>
                {" "}
                <FaPhone className='mr-1 ' /> +251 930 482 206
              </li>
              <li className='flex  items-center font-roboto '>
                <FaLocationDot className='mr-1 ' /> Ethiopia
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-4 pt-4 text-center text-gray-400 text-sm'>
          <p className='font-sans'>
            © {new Date().getFullYear()}{" "}
            <span className='font-header1'>VeinTech</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
