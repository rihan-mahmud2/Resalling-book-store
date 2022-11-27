import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import errorImg from "../../../src/assets/images/error.jpg";
import { AuthContext } from "../../context/ContextProvider";

const DispalyError = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${errorImg})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">This is unavilable due to {error.message}</p>
            <span className="btn btn-primary" onClick={handleLogout}>
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DispalyError;
