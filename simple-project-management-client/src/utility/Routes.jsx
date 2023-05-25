import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Login />,
      errorElement: "Something went wrong", // Need to update
   },
]);

export default router;
