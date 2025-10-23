import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock login — you can replace with API later
    const username = email.split("@")[0]; // derive username from email

    // Save user in context + localStorage
    const userData = { username, email };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    navigate("/"); // redirect to Home
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-4"
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Login
        </button>

        <p className="text-center text-gray-600 text-sm mt-4">
          *Demo login — any credentials work*
        </p>
      </form>
    </div>
  );
}
