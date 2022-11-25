import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getAuthority } from "../api/getRole";
import { AuthContext } from "../context/ContextProvider";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    getAuthority(user?.email).then((data) => {
      setUserRole(data?.role);
    });
  }, [user]);

  console.log(userRole);
  return !user && !userRole ? (
    <h1>Loading......</h1>
  ) : (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {userRole === "admin" && (
            <>
              (
              <li>
                <a>All Sellers</a>
              </li>
              <li>
                <a>All Buyers</a>
              </li>
              )
            </>
          )}
          {userRole === "buyer" && (
            <>
              (
              <li>
                <a>All Sellers</a>
              </li>
              <li>
                <a>All Buyers</a>
              </li>
              )
            </>
          )}
          {userRole === "seller" && (
            <>
              <li>
                <Link to="/dashboard">Add A Product</Link>
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
