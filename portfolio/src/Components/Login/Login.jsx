import React, { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../../firebaseConfig";
import UserContext from "../../Context/UserContext";
import ParticlesBackground from "../ParticlesBackground";

const passwordStrength = (pw) => {
  if (!pw) return { score: 0, label: "Empty" };
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score <= 1) return { score, label: "Weak" };
  if (score === 2) return { score, label: "Medium" };
  return { score, label: "Strong" };
};

export default function Login() {
  console.log("🔧 Login component rendering");
  
  const [email, setEmail] = useState(() => {
    const saved = localStorage.getItem("savedEmail");
    return saved || "";
  });
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(() => !!localStorage.getItem("savedEmail"));
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Stable validation functions
  const validateEmail = useCallback((value) => /^\S+@\S+\.\S+$/.test(value), []);
  const validatePassword = useCallback((value) => value.length >= 6, []);

  const emailValid = validateEmail(email);
  const pwValid = validatePassword(password);
  const pwStrength = passwordStrength(password);

  // 🟢 Normal email-password mock login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (!emailValid || !pwValid) return;

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 800));

      const username = email.split("@")[0];
      const userData = { username, email };

      setUser(userData);
      if (remember) {
        localStorage.setItem("savedEmail", email);
      } else {
        localStorage.removeItem("savedEmail");
      }
      localStorage.setItem("user", JSON.stringify(userData));

      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🟣 Real Google login using Firebase
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userData = {
        username: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      alert(`Welcome ${result.user.displayName}!`);
      navigate("/");
    } catch (error) {
      console.error("Google login failed:", error.message);
      alert("Google login failed. Please try again.");
    }
  };

  // 🟣 Real GitHub login using Firebase
  const handleGithubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const userData = {
        username: result.user.displayName || "GitHub User",
        email: result.user.email,
        photo: result.user.photoURL,
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      alert(`Welcome ${userData.username}!`);
      navigate("/");
    } catch (error) {
      console.error("GitHub login failed:", error.message);
      alert("GitHub login failed. Please try again.");
    }
  };

  return (
    <ParticlesBackground id="particles">
      <div className="min-h-screen w-full flex items-center justify-center p-4 bg-transparent">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100"
          aria-labelledby="login-heading"
        >
          <h2
            id="login-heading"
            className="text-center text-2xl font-bold text-gray-800 mb-6"
          >
            Welcome back
          </h2>

          {/* Email */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            className={`w-full border rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition ${
              touched.email && !emailValid ? "border-red-400" : "border-gray-300"
            }`}
            placeholder="you@example.com"
          />
          {touched.email && !emailValid && (
            <p className="text-sm text-red-600 mb-2">
              Please enter a valid email address.
            </p>
          )}

          {/* Password */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, password: true }))}
              className={`w-full border rounded-lg px-3 py-2 pr-12 mb-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition ${
                touched.password && !pwValid ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="At least 6 characters"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {touched.password && !pwValid && (
            <p className="text-sm text-red-600 mb-2">
              Password must be at least 6 characters.
            </p>
          )}

          {/* Strength meter */}
          {password.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">
                  Strength: {pwStrength.label}
                </span>
                <span className="text-xs text-gray-400">
                  {password.length} chars
                </span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
                <div
                  className={`h-2 transition-all duration-300 ${
                    pwStrength.score <= 1
                      ? "bg-red-400"
                      : pwStrength.score === 2
                      ? "bg-yellow-400"
                      : "bg-green-400"
                  }`}
                  style={{ width: `${(pwStrength.score / 4) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>

            <button
              type="button"
              onClick={() =>
                alert("Password reset demo: you can integrate Firebase OTP here.")
              }
              className="text-sm text-purple-600 hover:underline focus:outline-none"
            >
              Forgot?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || !emailValid || !pwValid}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:from-purple-700 hover:to-indigo-700 transform transition-all duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading && (
              <svg
                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
            )}
            {loading ? "Signing in..." : "Sign in"}
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <hr className="flex-grow border-t border-gray-200" />
            <span className="mx-3 text-xs text-gray-400">or</span>
            <hr className="flex-grow border-t border-gray-200" />
          </div>

          {/* Social login buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="py-2 px-3 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="h-4 w-4 mr-2"
              />
              Google
            </button>

            <button
              type="button"
              onClick={handleGithubLogin}
              className="py-2 px-3 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="GitHub"
                className="h-4 w-4 mr-2"
              />
              GitHub
            </button>
          </div>

          {/* Small note */}
          <p className="mt-4 text-center text-sm text-gray-500">
            Use Google or GitHub for real login — email login is demo only.
          </p>
        </form>
      </div>
    </ParticlesBackground>
  );
}