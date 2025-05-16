import { createBrowserRouter, Link } from "react-router-dom";
import Carts from "../pages/Carts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "carts",
    element: <Carts />
  }
]);
