import ProductsList from "../pages/admin/Products";
import HomeLayout from "../pages/layout/homeLayout";

export const adminRoutes = [
  {
    path: "/admin/products",
    element: (
      <HomeLayout>
        <ProductsList />
      </HomeLayout>
    ),
  },
];
