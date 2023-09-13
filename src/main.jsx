import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Owner from "./Owner";
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/owner",
    element: (
      <>
        <Navbar />
        <Owner />
      </>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={routes} />);
