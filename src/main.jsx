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
import Classes from "./pages/dashboard/Classes";
import AuthProvider from "./provider/AuthProvider";
import Gallery from "./pages/Gallery";
import Trainer from "./pages/Trainer";
import Forum from "./pages/Forum";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./privateroute/PrivateRoute";
import BeTrainer from "./pages/dashboard/BeTrainer";
import TrainerDetails from "./pages/TrainerDetails";
import AllTrainers from "./pages/dashboard/AllTrainers";
import AllMembers from "./pages/dashboard/AllMembers";
import AllSubscribers from "./pages/dashboard/AllSubscribers";
import Balance from "./pages/dashboard/Balance";
import AppliedTrainers from "./pages/dashboard/AppliedTrainers";
import AllUsers from "./pages/dashboard/AllUsers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TrainerBooked from "./pages/trainerBooked";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://aura-flex-server.vercel.app/feature")
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
        path: "/gallery",
        element: <Gallery></Gallery>,
        loader: () => fetch("https://aura-flex-server.vercel.app/gallery")
      },
      {
        path: "/trainer",
        element: <Trainer></Trainer>,
        loader: () => fetch("https://aura-flex-server.vercel.app/trainer")
      },
      {
        path: "/trainerDetails/:id",
        element: <TrainerDetails></TrainerDetails>,
        loader: ({ params }) => fetch(`https://aura-flex-server.vercel.app/trainer/${params.id}`)
      },
      {
        path: "/beTrainer",
        element: <PrivateRoute><BeTrainer></BeTrainer></PrivateRoute>,
      },
      {
        path: "/trainerBooked",
        element: <PrivateRoute><TrainerBooked></TrainerBooked></PrivateRoute>,
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
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      //admin routes
      {
        path: 'allTrainers',
        element: <AllTrainers></AllTrainers>,
        loader: () => fetch("https://aura-flex-server.vercel.app/trainer")
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>,

      },
      {
        path: 'allMembers',
        element: <AllMembers></AllMembers>,

      },
      {
        path: 'allSubscribers',
        element: <AllSubscribers></AllSubscribers>,

      },
      {
        path: 'appliedTrainers',
        element: <AppliedTrainers></AppliedTrainers>,
        loader: () => fetch("https://aura-flex-server.vercel.app/trainer")
      },
      {
        path: 'balance',
        element: <Balance></Balance>,
      },
    ]

  }

]);
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
