import React from "react";

const MyOrderTr = ({ booking }) => {
  const { image, productName, productPrice } = booking;
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="p-4 w-32">
        <img src={image} alt="" />
      </td>
      <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
        {productName}
      </td>

      <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
        ${productPrice}
      </td>
      <td class="py-4 px-6">
        <button class="font-medium  btn btn-sucess btn-md">Pay</button>
      </td>
    </tr>
  );
};

export default MyOrderTr;
