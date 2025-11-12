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
