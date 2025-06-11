import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductDetail from "../components/common/productdetail";
import Cart from "../components/common/cart";
import Thanhtoan from "../components/common/thanhtoan";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "thanhtoan",
        element: <Thanhtoan />,
      }
    ],

  },
]);
