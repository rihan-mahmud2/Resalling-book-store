import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Register from "../Login/Register";
import SignUp from "../Login/SignUp";
import Main from "../Main/Layout";
import MyOrders from "../Menues/Buyer/MyOrders";
import AddProduct from "../Menues/SellerMenue/AddProduct";
import AllSeller from "../Menues/SellerMenue/AdminMenue/AllSeller";
import MyProduct from "../Menues/SellerMenue/MyProduct";
import AllCategory from "../pages/Home/AllCategory";
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
        path: "/category/:name",
        element: <AllCategory />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.name}`),
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
      {
        path: "/dashboard/my-product",
        element: (
          <PrivateRoute>
            <MyProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-seller",
        element: (
          <PrivateRoute>
            <AllSeller />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
