import { useQuery } from "@tanstack/react-query";

import React, { useContext } from "react";
import { AuthContext } from "../../context/ContextProvider";
import CenterSpinner from "../../Spinner/CenterSpinner";
import MyOrderTr from "./MyOrderTr";

const MyOrders = () => {
  // const {data} = re
  const { user } = useContext(AuthContext);

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings/${user?.email}`, {
        headers: {
          authorization: localStorage.getItem("BookshopToken"),
        },
      });
      const data = await res.json();

      return data;
    },
  });

  if (isLoading) {
    return <CenterSpinner />;
  }
  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">Image</span>
            </th>
            <th scope="col" class="py-3 px-6">
              Product Name
            </th>
            <th scope="col" class="py-3 px-6">
              Price
            </th>
            <th scope="col" class="py-3 px-6">
              Payment
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <MyOrderTr booking={booking}></MyOrderTr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
