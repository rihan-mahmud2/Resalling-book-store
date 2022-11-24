import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setuseToken } from "../api/useToken";
import { AuthContext } from "../context/ContextProvider";

const SignUp = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    logIn(email, password)
      .then((res) => {
        const user = res.user;
        setuseToken(email);

        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div class="relative w-full max-w-md h-full md:h-auto mx-auto mt-20">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="py-6 px-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h3>
          <form onSubmit={handleRegister} class="space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Have an acount?
              <Link
                to="/register"
                href="#"
                class="text-blue-700 hover:underline dark:text-blue-500"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
