import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-100 flex flex-col items-center justify-center px-6 py-10">
      {/* Welcome Message */}
      <div className="text-center mb-10">
        {!user ? (
          <div className="text-red-700 font-bold text-2xl animate-pulse">
            Please login
          </div>
        ) : (
          <div className="text-cyan-900 font-bold text-3xl">
            Welcome, {user.username}! 👋
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="relative bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between p-10 md:p-16 w-full max-w-6xl overflow-hidden border border-gray-100">
        {/* Text Section */}
        <div className="z-10 md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Hi, I’m{" "}
            <span className="text-indigo-700">Darshana Sharma</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            A Frontend Developer passionate about building clean, interactive,
            and visually appealing web applications using React and Tailwind CSS.
          </p>
          <Link
            to="/projects"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-indigo-700 rounded-lg shadow-md hover:bg-indigo-800 transition-all"
          >
            View My Projects 🚀
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="https://undraw.co/api/illustrations/illustrations/defaults/undraw_programming_re_kg9v.svg"
            alt="Developer working illustration"
            className="w-80 md:w-96 animate-float"
          />
        </div>
      </div>

      {/* Projects Showcase */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Featured Projects 💼
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all max-w-sm mx-auto">
            <img
              src="https://undraw.co/api/illustrations/illustrations/defaults/undraw_conceptual_idea_re_mxpa.svg"
              alt="Toggle Theme Project"
              className="w-60 mx-auto mb-4"
            />
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

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all max-w-sm mx-auto">
            <img
              src="https://undraw.co/api/illustrations/illustrations/defaults/undraw_to_do_re_jaef.svg"
              alt="Task Manager"
              className="w-60 mx-auto mb-4"
            />
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
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              View Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Footer Image Section */}
      <div className="mt-20 flex flex-col items-center text-center space-y-10">
        <img
          src="https://undraw.co/api/illustrations/illustrations/defaults/undraw_static_assets_rpm6.svg"
          alt="Web development illustration"
          className="w-56 sm:w-72 md:w-96 animate-bounce-slow"
        />
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
