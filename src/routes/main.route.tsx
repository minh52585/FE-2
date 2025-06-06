import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import FooterPage from "../components/common/Footer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {

        path: "footer",
        element: <FooterPage />,
      },
    ],
  },
]);
