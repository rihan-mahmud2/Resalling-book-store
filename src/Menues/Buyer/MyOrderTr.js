import React from "react";
import { Link } from "react-router-dom";

const MyOrderTr = ({ booking }) => {
  const { image, productName, productPrice, _id } = booking;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4 w-32">
        <img src={image} alt="" />
      </td>
      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
        {productName}
      </td>

      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
        ${productPrice}
      </td>
      <td className="py-4 px-6">
        {productPrice && !booking?.paid && (
          <Link
            to={`/dashboard/checkout/${_id}`}
            className="font-medium  btn btn-sucess btn-md"
          >
            Pay
          </Link>
        )}

        {productPrice && booking?.paid && (
          <span className="font-medium  btn btn-sucess btn-md">Paid</span>
        )}
      </td>
    </tr>
  );
};

export default MyOrderTr;
