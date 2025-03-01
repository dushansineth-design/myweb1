import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Services from './Components/Pages/Services/Services.jsx'
import Contact from './Components/Pages/Contact/Contact.jsx'
import About from './Components/Pages/About/About.jsx'
import Login from './Components/Pages/Login/Login.jsx'
import Home from './Components/Pages/Home/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/services",
    element: <Services />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
