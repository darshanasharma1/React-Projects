import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements
} from 'react-router-dom';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contect from './Components/Contect/Contect';
import User from './Components/User/User';
import Github, { githubInfoLoader } from './Components/Github/Github';
import Login from './Components/Login/Login';
import UserContextProvider from './Context/UserContextProvider';

// ✅ Use createHashRouter instead of createBrowserRouter
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contect" element={<Contect />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="login" element={<Login />} />
      <Route
        path="github"
        element={<Github />}
        loader={githubInfoLoader}
      />
      {/* ✅ Catch-all 404 fallback */}
      <Route
        path="*"
        element={
          <div className="text-center mt-20 text-2xl text-red-600">
            404 — Page Not Found
          </div>
        }
      />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
