import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const logoSrc = "https://cdn-icons-png.flaticon.com/512/1055/1055687.png";

  return (
    <footer className="bg-gray-800 text-gray-300 py-5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT — LOGO + TAGLINE */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-3">
              <img
                src={logoSrc}
                alt="Dev Logo"
                className="h-8 w-8 md:h-10 md:w-10 rounded-md bg-white p-[2px] shadow-sm"
              />
              <span className="hidden md:inline text-sm font-semibold text-white">
                Darshana
              </span>
            </Link>

            <p className="text-sm text-gray-400">
              Turning ideas into beautiful interfaces.
            </p>
          </div>

          {/* CENTER — QUICK LINKS */}
          <div>
            <h3 className="text-md font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/darshana-sharma-476260181/"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://www.naukri.com/mnjuser/profile"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Naukri Profile
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/DarshanaSharma1"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT — CONTACT */}
          <div>
            <h3 className="text-md font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:darshanasharma48@gmail.com"
                  className="hover:text-white"
                >
                  📧 darshanasharma48@gmail.com
                </a>
              </li>

              <li>
                <a href="tel:7046199461" className="hover:text-white">
                  📞 7046199461
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Darshana Sharma. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
