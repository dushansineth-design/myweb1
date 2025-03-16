import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Services from './Components/Pages/Services/Services.jsx'
import Contact from './Components/Pages/Contact/Contact.jsx'
import About from './Components/Pages/About/About.jsx'
import Login from './Components/Pages/Login/Login.jsx'
import Home from './Components/Pages/Home/Home.jsx'
import Shop from './Components/Shop/Shop.jsx'
import { CartProvider } from './Components/CartContext/CartContext.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "/shop", element: <Shop /> }, 
]);



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CartProvider>  {/* ✅ Now CartProvider wraps RouterProvider */}
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);


