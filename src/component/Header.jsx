import React from 'react'
import logo from '../assets/logo.svg';
import logoBLK from '../assets/logoBLK.svg'
import { FaGithub } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = ({darkMode,toggleMode}) => {
  return (
    <div className=''>
       <div className=" flex justify-between items-center text-black dark:text-white p-2 border border-b-gray-700">
        <div className="px-16">
          <a href="/">
            {darkMode ? <img src={logo} width={80} height={80} alt="Logo" /> : <img src={logoBLK} width={80} height={80} alt="Logo" />}
          </a>
        </div>
        <div className="flex items-center gap-3 px-16">
          {/* Toggle Button */}
          <button
            className="flex items-center justify-center w-8 h-8 font-light text-sm bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black text-center"
            onClick={toggleMode} // Only this button calls toggleMode
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          {/* GitHub Icon */}
          <a href="https://github.com/sanketttt26/codeX" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white text-3xl hover:text-blue-500">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
