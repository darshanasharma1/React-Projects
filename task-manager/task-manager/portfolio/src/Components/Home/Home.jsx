import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faLightbulb, faTasks, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-100 flex flex-col items-center justify-center px-6 py-10">
      <div className="text-center mb-10">
        {user && user.username ? (
          <div className="text-cyan-900 font-bold text-3xl">
            Welcome, {user.username}! 👋
          </div>
        ) : (
          <div className="text-red-700 font-bold text-2xl animate-pulse">
            Please login
          </div>
        )}
      </div>

      <div className="relative bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between p-10 md:p-16 w-full max-w-6xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl">
        <div className="z-10 md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Hi, I’m{" "}
            <span className="text-indigo-700">Darshana Sharma</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            A Frontend Developer passionate about building clean, interactive,
            and visually appealing web applications using React and Tailwind CSS.
          </p>
          <Link
            to="/projects"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-indigo-700 rounded-lg shadow-md hover:bg-indigo-800 transform hover:scale-105 transition-all"
          >
            View My Projects 🚀
          </Link>
        </div>

        <div className="relative md:w-1/2 flex justify-center mt-10 md:mt-0 animate-fade-in">
          <FontAwesomeIcon icon={faLaptopCode} className="text-indigo-700 text-8xl" />
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Featured Projects 💼
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transform hover:scale-105 transition-all max-w-sm mx-auto border-t-4 border-indigo-600">
              <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500 text-7xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">
              Toggle Theme App
            </h3>
            <p className="text-gray-600 mb-4">
              A simple React app demonstrating light/dark theme switching.
            </p>
            <a
              href="https://darshanasharma1.github.io/React-Projects/ToggleTheme/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              View Live Demo
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transform hover:scale-105 transition-all max-w-sm mx-auto border-t-4 border-indigo-600">
              <FontAwesomeIcon icon={faTasks} className="text-green-600 text-7xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">
              Task Manager App
            </h3>
            <p className="text-gray-600 mb-4">
              Manage daily tasks efficiently — built with React hooks and local storage.
            </p>
            <a
              href="https://darshanasharma1.github.io/React-Projects/task-manager/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-all duration-300"
            >
              View Live Demo
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center text-center space-y-10">
          <FontAwesomeIcon icon={faGlobe} className="text-indigo-600 text-8xl animate-bounce" />
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">
          Turning Ideas into Beautiful Interfaces
        </h2>
        <p className="text-gray-600 max-w-2xl">
          I love bringing creative ideas to life using code. Explore my projects
          to see how I combine design and functionality to deliver elegant user experiences.
        </p>
      </div>
    </div>
  );
}