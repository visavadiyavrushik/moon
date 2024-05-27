import { Outlet } from "react-router-dom";
import Home from "../pages/home/Home";
import HomeLayout from "../pages/layout/homeLayout";
import ProductView from "../pages/home/productView";

export const homeRoutes = [
  {
    path: "/products",
    element: (
      <HomeLayout>
        <Outlet />
      </HomeLayout>
    ),
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/products/:id",
        element: <ProductView />,
      },
    ],
  },
];
