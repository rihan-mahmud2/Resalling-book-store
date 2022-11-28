import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getAuthority } from "../api/getRole";
import { AuthContext } from "../context/ContextProvider";
import CenterSpinner from "../Spinner/CenterSpinner";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    getAuthority(user?.email).then((data) => {
      setUserRole(data?.role);
    });
  }, [user]);

  return !user || !userRole ? (
    <CenterSpinner />
  ) : (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col mt-10">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {userRole === "admin" && (
            <>
              <li>
                <Link to="/dashboard/all-seller">All Sellers</Link>
              </li>
              <li>
                <Link to="/dashboard/all-buyer">All Buyers</Link>
              </li>
            </>
          )}
          {userRole !== "seller" && userRole !== "admin" && (
            <>
              <li>
                <Link to="/dashboard/my-orders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/my-wishlist">My Whishlist</Link>
              </li>
            </>
          )}
          {userRole === "seller" && (
            <>
              <li>
                <Link to="/dashboard/add-product">Add A Product</Link>
              </li>
              <li>
                <Link to="/dashboard/my-product">My Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
