import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className='p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
      aria-label='Toggle dark mode'
    >
      {darkMode ? (
        <FaSun className='w-5 h-5 text-yellow-500' />
      ) : (
        <FaMoon className='w-5 h-5 text-gray-700' />
      )}
    </button>
  );
};

export default ThemeToggle;
