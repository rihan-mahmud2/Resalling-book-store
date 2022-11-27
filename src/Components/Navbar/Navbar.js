import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <>
      <div className="navbar bg-indigo-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact text-block font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>

              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <label
                  htmlFor="my-drawer-2"
                  className="drawer-button lg:hidden"
                >
                  Open drawer
                </label>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-white normal-case text-xl">
            Knowledge Store
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu text-white menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li>
              {user ? (
                <span onClick={handleLogout}>Logout</span>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>

        {/* <!-- Modal toggle --> */}
      </div>
    </>
  );
};

export default Navbar;
