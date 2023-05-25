import { createBrowserRouter } from "react-router-dom";
import Auth from "../components/Auth/Auth";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Auth />,
      errorElement: "Something went wrong", // Need to update
      children: [
         {
            path: "/",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
      ],
   },
]);

export default router;
