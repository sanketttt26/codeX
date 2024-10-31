// import React, { useState } from 'react';
// import languages from '../languages.js';
// import logo from '../assets/logo.svg';
// import { FaGithub } from "react-icons/fa";
// import { MdDarkMode,MdLightMode } from "react-icons/md";
// const Home = ({ sendStateToParent }) => {
//   const [darkMode, setDarkMode] = useState(false);


//   const toggleMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     sendStateToParent(newMode); // Send the updated state to the parent
//   };

//   return (
//     <div className="w-full py-5">
//       {/* Header */}
//       <div className="h-4 flex justify-between text-black dark:text-white">
//         <div className="px-16">
//           <a href="">
//             <img src={logo} width={80} height={80} alt="Logo" />
//           </a>
//         </div>
//         <div className="flex items-center gap-3 px-16">
//           <button
//             className="flex items-center justify-center w-8 h-8 font-light text-sm bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black text-center"
//             onClick={toggleMode}
//           >
//             {darkMode ? <MdLightMode/>: <MdDarkMode/>}
//           </button>
//           <a href="" className='text-black dark:text-white text-3xl hover:text-blue-500'><FaGithub/></a>
//         </div>
//       </div>

//       {/* Hero */}
//       <div className="flex flex-col mt-20 items-center dark:text-white text-black">
//         {/* HERO TITLE */}
//         <div className="flex flex-col items-center gap-3 text-5xl text-center">
//           <p className="font-bold">Write, generate, and execute code</p>
//           <span className="font-bold tracking-tighter text-blue-500">all in one place.</span>
//         </div>
        
//         {/* Input Box */}
//         <div className="flex justify-center w-full mt-10">
//           <input
//             type="text"
//             className="w-[50%] bg-transparent max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 border border-gray-500 rounded-md focus:outline-none hover:ring-1 focus:ring-2 focus:ring-white"
//             placeholder="Search by Language"
//           />
//         </div>

//         {/* Language Boxes */}
//         <div className="grid grid-cols-4 w-[70%] mt-10">
//           {languages.map((lang, index) => (
//             <button key={index} className="flex items-center justify-between p-4 border m-3 border-gray-600 rounded-xl cursor-pointer">
//               <span>{lang.language}</span>
//               <img src={lang.logo} alt={`${lang.language} logo`} width="30" height="30" />
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import languages from '../languages.js';
import logo from '../assets/logo.svg';
import logoBLK from '../assets/logoBLK.svg'
import { FaGithub } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Home = ({ darkMode, toggleMode }) => {
  return (
    <div className="w-full py-5">
      {/* Header */}
      <div className="h-4 flex justify-between text-black dark:text-white">
        <div className="px-16">
          <a href="">
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
          <a href="" className="text-black dark:text-white text-3xl hover:text-blue-500">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Hero */}
      <div className="flex flex-col mt-20 items-center dark:text-white text-black">
        <div className="flex flex-col items-center gap-3 text-5xl text-center">
          <p className="font-bold">Write, generate, and execute code</p>
          <span className="font-bold tracking-tighter text-blue-500">all in one place.</span>
        </div>

        {/* Input Box */}
        <div className="flex justify-center w-full mt-10">
          <input
            type="text"
            className="w-[50%] bg-transparent max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 border border-gray-500 rounded-md focus:outline-none hover:ring-1 focus:ring-2 focus:ring-white"
            placeholder="Search by Language"
          />
        </div>

        {/* Language Boxes */}
        <div className="grid grid-cols-4 w-[70%] mt-10">
          {languages.map((lang, index) => (
            <button
              key={index}
              className="flex items-center justify-between p-4 border m-3 border-gray-600 rounded-xl cursor-pointer"
            >
              <span>{lang.language}</span>
              <img src={lang.logo} alt={`${lang.language} logo`} width="30" height="30" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
