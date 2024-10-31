// // import { useState } from 'react';
// // import Home from './pages/Home';

// // function App() {
// //   const [darkMode, setDarkMode] = useState(false);

// //   // Function to receive data from child
// //   const handleDataFromChild = (data) => {
// //     setDarkMode(data); // Update state with data from child
// //   };

// //   return (
// //     // Apply the `dark` class conditionally
// //     <div className={`${darkMode ? 'dark' : ''}`}>
// //       <div className="w-full min-h-screen dark:bg-black bg-white">
// //         <Home sendStateToParent={handleDataFromChild} />
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;


// import { useState } from 'react';
// import Home from './pages/Home';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   // Toggle dark mode
//   const toggleMode = () => {
//     setDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <div className={`${darkMode ? 'dark' : ''}`}>
//       <div className="w-full min-h-screen dark:bg-black bg-white">
//         <Home darkMode={darkMode} toggleMode={toggleMode} />
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import Home from './pages/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage on initial load
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    setDarkMode(savedMode === 'true'); // Set initial theme based on stored preference
  }, []);

  // Update localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Toggle dark mode
  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="w-full min-h-screen dark:bg-black bg-white">
        <Home darkMode={darkMode} toggleMode={toggleMode} />
      </div>
    </div>
  );
}

export default App;
