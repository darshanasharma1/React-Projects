import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faLightbulb, faTasks, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Home() {
  const { user } = useContext(UserContext);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-100 flex flex-col items-center justify-center px-6 py-10 overflow-hidden">

      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 text-center mb-10">
        {user && user.username ? (
          <div className="text-cyan-900 font-extrabold text-3xl drop-shadow-sm animate-fade-in-slow">
            Welcome, {user.username}! 👋
          </div>
        ) : (
          <div className="text-red-700 font-bold text-2xl animate-pulse">
            Please login
          </div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between p-10 md:p-16 w-full max-w-6xl overflow-hidden border border-gray-100"
      >
        <div className="z-10 md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight 
            bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 
            bg-clip-text text-transparent animate-gradient">
            Hi, I’m Darshana Sharma
          </h1>

          <motion.p
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-lg text-gray-700 leading-relaxed"
          >
            {"Hi! I'm Darshana, a passionate frontend developer who loves creating interactive designs."
              .split(" ")
              .map((word, index) => (
                <motion.span key={index} variants={word} className="inline-block mr-1">
                  {word}
                </motion.span>
              ))}
          </motion.p>

          <Link
            onClick={() => {
              const section = document.getElementById("projects");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-6 py-3 text-lg font-semibold text-white 
              bg-indigo-700 rounded-lg shadow-md hover:bg-indigo-800 transform 
              hover:scale-105 transition-all"
          >
            View My Projects 🚀
          </Link>
        </div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <FontAwesomeIcon icon={faLaptopCode} className="text-indigo-700 text-9xl drop-shadow-xl" />
        </motion.div>
      </motion.div>

      <div id="projects" className="mt-20 text-center z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 animate-fade-in">
          Featured Projects 💼
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.07 }}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-2xl transition-all border-t-4 border-indigo-600 max-w-sm mx-auto"
          >
            <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500 text-7xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">
              Toggle Theme App
            </h3>
            <p className="text-gray-600 mb-4">A simple React app demonstrating light/dark theme switching.</p>
            <a
              href="https://darshanasharma1.github.io/React-Projects/ToggleTheme/"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-all"
            >
              View Live Demo
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.07 }}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-2xl transition-all border-t-4 border-indigo-600 max-w-sm mx-auto"
          >
            <FontAwesomeIcon icon={faTasks} className="text-green-600 text-7xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">
              Task Manager App
            </h3>
            <p className="text-gray-600 mb-4">Manage tasks efficiently — built with React hooks & local storage.</p>
            <a
              href="https://darshanasharma1.github.io/React-Projects/task-manager/"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-all"
            >
              View Live Demo
            </a>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center text-center space-y-10 z-10">
        <FontAwesomeIcon icon={faGlobe} className="text-indigo-600 text-8xl animate-bounce" />
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">
          Turning Ideas into Beautiful Interfaces
        </h2>
        <p className="text-gray-600 max-w-2xl">
          I love bringing creative ideas to life using code. Explore my projects
          to see how I combine design and functionality to deliver elegant experiences.
        </p>
      </div>
    </div>
  );
}