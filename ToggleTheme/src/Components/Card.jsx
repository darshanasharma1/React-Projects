import React, { useState } from "react";

export default function Card({ product }) {
  const [localDark, setLocalDark] = useState(false);
  const toggleLocalTheme = (e) => setLocalDark(e.currentTarget.checked);

  return (
    <div
      className={`relative flex flex-col justify-between h-full border border-gray-200 rounded-xl shadow-md overflow-hidden transition duration-300 ${
        localDark
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {/* --- Toggle Switch (top-right) --- */}
      <div className="absolute top-4 right-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={toggleLocalTheme}
            checked={localDark}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
        </label>
      </div>

      {/* --- Product Image --- */}
      <img
        className="rounded-t-lg w-full h-56 object-cover"
        src={product.image}
        alt={product.title}
      />

      {/* --- Content --- */}
      <div className="flex flex-col justify-between flex-grow px-5 py-4">
        <div>
          <h5 className="text-lg font-semibold tracking-tight mb-3 min-h-[48px]">
            {product.title}
          </h5>

          {/* --- Rating --- */}
          <div className="flex items-center mb-5">
            {[1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-300 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            <svg
              className="w-4 h-4 text-gray-200 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span
              className={`ml-3 text-xs font-semibold px-2.5 py-0.5 rounded ${
                localDark
                  ? "bg-blue-900 text-blue-100"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              4.0
            </span>
          </div>
        </div>

        {/* --- Price + Button --- */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-3xl font-bold">{product.price}</span>
          <a
            href="/"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
