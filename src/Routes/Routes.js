import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Register from "../Login/Register";
import SignUp from "../Login/SignUp";
import Main from "../Main/Layout";
import AddProduct from "../Menues/SellerMenue/AddProduct";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
