import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../../Context/UserContext";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              alt="Dev Logo"
              className="h-8 md:h-10 lg:h-12"
            />
          </Link>
          {/* <div className="flex gap-2"> */}
            <div className="flex items-center lg:order-2">
              {!user ? (
                <Link
                  to="/login"
                  className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2 mr-2"
                >
                  Log in
                </Link>
              ) : (
                <>
                  <span className="text-gray-800 font-medium mr-4">
                    👋 Hi, <span className="text-orange-700">{user.username}</span>
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-gray-700 text-3xl focus:outline-none"
            >
              ☰
            </button>
          {/* </div> */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/contect", label: "Contact" },
                { path: "/github", label: "Github" },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
