import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../../Context/UserContext";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setMenuOpen(false);
  };

  const logoSrc = "https://cdn-icons-png.flaticon.com/512/1055/1055687.png";

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contect", label: "Contact" },
    { path: "/github", label: "Github" },
  ];

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
        {/* ---- TOP BAR ---- */}
        <div className="relative flex items-center justify-between h-14 lg:h-16">

          {/* LEFT — LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Dev Logo"
              className="h-8 w-8 md:h-10 md:w-10 rounded-md bg-white p-[2px] shadow-sm"
            />
            <span className="hidden md:inline text-sm font-semibold text-gray-700">
              Darshana
            </span>
          </Link>

          {/* CENTER — GREETING (DESKTOP ONLY) */}
          <div className="hidden lg:flex lg:flex-1 justify-center">
            {user && (
              <span className="text-gray-700 text-sm">
                👋 Hi,{" "}
                <span className="text-orange-600 font-medium">{user.username}</span>
              </span>
            )}
          </div>

          {/* RIGHT — LOGIN / LOGOUT + HAMBURGER (ALWAYS RIGHT) */}
          <div className="flex items-center gap-3 ml-auto">

            {/* LOGIN/LOGOUT (visible on all sizes) */}
            {!user ? (
              <Link
                to="/login"
                className="text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 px-3 py-1.5 rounded-md text-sm"
              >
                Log in
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-md text-sm"
              >
                Logout
              </button>
            )}

            {/* HAMBURGER BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* ---- MOBILE MENU ---- */}
        <div
          className={`absolute left-0 right-0 top-full bg-white shadow-md z-40 transition-all duration-150 lg:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="px-4 pt-4 pb-6">

            {/* NAV LINKS */}
            <nav>
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block w-full text-left px-3 py-2 rounded-md text-sm ${
                          isActive ? "text-orange-700 font-semibold" : "text-gray-700"
                        } hover:bg-gray-50`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* DIVIDER */}
            <hr className="my-4" />

            {/* AUTH BUTTONS IN MOBILE MENU */}
            <div className="flex flex-col gap-3">
              {!user ? (
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center px-3 py-2 rounded-md bg-indigo-600 text-white"
                >
                  Log in
                </Link>
              ) : (
                <>
                  <div className="text-sm text-gray-700 text-center">
                    👋 <span className="font-medium text-orange-600">{user.username}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-center px-3 py-2 rounded-md bg-red-600 text-white"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
