import { Outlet } from "react-router-dom";

import HomeLayout from "../pages/layout/homeLayout";
import Cart from "../pages/home/cart";
// import ProductView from "../pages/home/productView";

export const cartRoutes = [
  {
    path: "/cart",
    element: (
      <HomeLayout>
        <Outlet />
      </HomeLayout>
    ),
    children: [
      {
        element: <Cart />,
        index: true,
      },
    ],
  },
];
