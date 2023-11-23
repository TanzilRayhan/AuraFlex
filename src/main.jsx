/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from "./pages/ErrorPage";
import Main from "./layout/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Classes from "./pages/Classes";
import AuthProvider from "./provider/AuthProvider";
import Gallery from "./pages/Gallery";
import Trainer from "./pages/Trainer";
import Forum from "./pages/Forum";
import Dashboard from "./pages/Dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("")
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/trainer",
        element: <Trainer></Trainer>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/forum",
        element: <Forum></Forum>,
      },
     
    ]
    
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
