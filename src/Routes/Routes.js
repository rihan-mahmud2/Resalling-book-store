import { createBrowserRouter } from "react-router-dom";
import ReportPage from "../Card/ReportPage";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Register from "../Login/Register";
import SignUp from "../Login/SignUp";
import Main from "../Main/Layout";
import CheckoutForm from "../Menues/Buyer/CheckoutForm";
import MyOrders from "../Menues/Buyer/MyOrders";
import AddProduct from "../Menues/SellerMenue/AddProduct";
import AllBuyer from "../Menues/SellerMenue/AdminMenue/AllBuyer";
import AllSeller from "../Menues/SellerMenue/AdminMenue/AllSeller";
import MyProduct from "../Menues/SellerMenue/MyProduct";
import Blog from "../Modal/Blog";
import AllCategory from "../pages/Home/AllCategory";
import Home from "../pages/Home/Home";
import DispalyError from "../Shared/DisplayError/DispalyError";
import WishList from "../Spinner/WishList";
import AdminPrivateRoute from "./AdminPrivateRoute";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DispalyError></DispalyError>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <DispalyError />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/category/:name",
        element: (
          <PrivateRoute>
            <AllCategory />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.name}`, {
            headers: {
              authorization: localStorage.getItem("BookshopToken"),
            },
          }),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <SignUp />,
      },
      {
        path: "/report",
        element: <ReportPage />,
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
          <AdminPrivateRoute>
            <AllSeller />
          </AdminPrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/user/${params.role}`),
      },
      {
        path: "/dashboard/all-buyer",
        element: (
          <AdminPrivateRoute>
            <AllBuyer />
          </AdminPrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/user/${params.role}`),
      },
      {
        path: "/dashboard/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-wishlist",
        element: (
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckoutForm />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/payment/${params.id}`),
      },
    ],
  },
]);
