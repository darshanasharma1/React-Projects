import './App.css';
import { ThemeProvider } from './Context/Theme';
import { useState } from 'react';
import { useEffect } from 'react';
import ThemeBtn from './Components/ThemeButton';
import Card from './Components/Card';

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () =>{
    setThemeMode("light")
  }
  const darkTheme = () =>{
    setThemeMode("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <h2 className="bg-blue-600 text-white text-center text-2xl p-1">React Project-6</h2>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card />
            </div>
        </div>
    </div>
  </ThemeProvider>

  );
}

export default App;
