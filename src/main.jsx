import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Layout from "./Pages/Layout.jsx";
import JoinAsPassenger from "./Pages/JoinAsPassenger.jsx";
import JoinAsDriver from "./Pages/JoinAsDriver.jsx";
import NotFound from "./Pages/NotFound.jsx";

// Create the router with the Layout component acting as a parent for all routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout will be the wrapper for all pages
    children: [
      { path: "/", element: <Home /> },
      { path: "/join-as-passenger", element: <JoinAsPassenger /> },
      { path: "/join-as-driver", element: <JoinAsDriver /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      // 404 route for any invalid URL
      { path: "*", element: <NotFound /> },
    ],
  },
]);

// Render the app with the router inside StrictMode
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="wrapper">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
