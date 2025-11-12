// import './App.css';
// import { ThemeProvider } from './Context/Theme';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import ThemeBtn from './Components/ThemeButton';
// // import Card from './Components/Card';
// import CardList from "./Components/CardList";
// function App() {
//   const [themeMode, setThemeMode] = useState("light")
//   const lightTheme = () =>{
//     setThemeMode("light")
//   }
//   const darkTheme = () =>{
//     setThemeMode("dark")
//   }
//   useEffect(()=>{
//     document.querySelector('html').classList.remove("light","dark")
//     document.querySelector('html').classList.add(themeMode)
//   },[themeMode])
//   return (
//     <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
//       <h2 className="bg-blue-600 text-white text-center text-2xl p-1">Toggle Theme</h2>

//       <div className="flex flex-wrap min-h-screen items-center">
//         <div className="w-full">
//             <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//                 <ThemeBtn />
//             </div>

//             <div className="w-full max-w-sm mx-auto">
//                 {/* <Card /> */}
//                 <ThemeBtn />
//                 <CardList />
//             </div>
//         </div>
//     </div>
//   </ThemeProvider>

//   );
// }
import React, { useState } from "react";
import { ThemeProvider } from './Context/Theme';
import ThemeBtn from './Components/ThemeButton';
import CardList from "./Components/CardList";

export default function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className={themeMode === "dark" ? "dark bg-gray-900" : "bg-gray-100"}>
        <div className="p-6 min-h-screen">
          <div className="w-100 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">
              Toggle Theme
            </h1>
          </div>
          <div className="w-100 flex flex-col items-end pr-5">
            <ThemeBtn />
          </div>
          <CardList />
        </div>
      </div>
    </ThemeProvider>
  );
}
