import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
    const navigate = useNavigate();
    const goToProjects = () => {
        navigate("/#projects");
      };
  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-extrabold 
                bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 
                bg-clip-text text-transparent animate-gradient">
            Crafting Interactive & Beautiful Web Experiences
            </h1>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Hi! I'm <span className="font-semibold text-purple-700">Darshana</span>,
              a passionate Frontend Developer specializing in React, Tailwind CSS,
              UI animations, and visually appealing web interfaces.
            </p>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              I love building layouts that feel alive — animations, interactivity,
              and clean design. Every project focuses on simplicity and user
              experience.
            </p>

            <motion.button
                onClick={goToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition"
            >
              See My Work 🚀
            </motion.button>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://illustrations.popsy.co/white/web-design.svg"
              alt="About illustration"
              className="w-72 md:w-96 drop-shadow-xl object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
