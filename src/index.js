import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contect from "./Components/Contect/Contect";
import User from "./Components/User/User";
import Github, { githubInfoLoader } from "./Components/Github/Github";
import Login from "./Components/Login/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import UserContextProvider from "./Context/UserContextProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="login" element={<Login />} />

      <Route
        path=""
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />
      <Route
        path="contect"
        element={
          <ProtectedRoute>
            <Contect />
          </ProtectedRoute>
        }
      />
      <Route
        path="user/:userid"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
      <Route
        path="github"
        element={
          <ProtectedRoute>
            <Github />
          </ProtectedRoute>
        }
        loader={githubInfoLoader}
      />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
