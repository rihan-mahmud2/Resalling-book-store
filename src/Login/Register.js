import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { saveUser } from "../api/users";
import { setuseToken } from "../api/useToken";
import { AuthContext } from "../context/ContextProvider";

const Register = () => {
  const [type, setType] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = type;
    console.log(name, email, password, type);
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        setuseToken(email);

        const userInfo = {
          name,
          email,
          role,
        };

        saveUser(userInfo)
          .then((data) => {
            console.log(data);
            navigate("/");
          })

          .catch((err) => {
            toast(err.message);
          });

        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //  signup user function

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
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name"
                required
              />
            </div>
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
            <select
              onChange={(data) => setType(data.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            >
              <option disabled selected>
                Who shot first?
              </option>
              <option>buyer</option>
              <option>seller</option>
            </select>

            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Have an acount?
              <Link
                to="/login"
                href="#"
                class="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
