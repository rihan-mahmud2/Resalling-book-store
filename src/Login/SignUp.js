import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveUser } from "../api/users";
import { setuseToken } from "../api/useToken";
import { AuthContext } from "../context/ContextProvider";
import ButtonSpinner from "../Spinner/ButtonSpinner";

const SignUp = () => {
  const { logIn, createAccountWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    setLoading(true);
    console.log(email, password);
    logIn(email, password)
      .then((res) => {
        toast("Login Successfully");
        setLoading(false);
        setuseToken(email);

        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast(err.message);
        setLoading(false);
      });
  };

  const handleLogWithGoole = () => {
    createAccountWithGoogle()
      .then((res) => {
        const user = res.user;

        setuseToken(user?.email);
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
          role: "buyer",
        };

        saveUser(userInfo)
          .then((data) => {
            console.log(user);
            setLoading(false);
            navigate(from, { replace: true });
          })

          .catch((err) => {
            toast(err.message);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative w-full max-w-md h-full md:h-auto mx-auto mt-20">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="py-6 px-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h3>
          <form onSubmit={handleRegister} className="space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="????????????????????????"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <button
              onClick={handleLogWithGoole}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign Up With Google
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Have an acount?
              {loading ? (
                <ButtonSpinner />
              ) : (
                <Link
                  to="/register"
                  href="#"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Register
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
