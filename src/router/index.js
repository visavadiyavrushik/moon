import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Login from "../pages/login/login";
import { homeRoutes } from "./homeRoutes";
import Authlayout from "../pages/layout/authlayout";
import { adminRoutes } from "./adminRoutes";
import { cartRoutes } from "./cartRoute";
import Signup from "../pages/signup/signup";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <Authlayout>
          <Login />,
        </Authlayout>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <Authlayout>
          <Signup />,
        </Authlayout>
      ),
    },
    ...homeRoutes,
    ...adminRoutes,
    ...cartRoutes,
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
};

export default Router;
