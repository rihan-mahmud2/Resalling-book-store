import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/ContextProvider";
import axios from "axios";
import TableTr from "./TableTr";
import { async } from "@firebase/util";
const MyProduct = () => {
  const { user } = useContext(AuthContext);

  const { data: myProducts = [], isLoading } = useQuery({
    queryKey: ["category", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/category?email=${user?.email}`
      );
      const data = await res.data;
      console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <h1>Loading...........</h1>;
  }

  const handleDelete = async (id) => {
    try {
      const res = fetch(`http://localhost:5000/category/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("BookshopToken"),
        },
      });
      const data = res.json();
    } catch {}
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Book Name</th>
            <th>Posted Date</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myProducts?.map((product, i) => (
            <tr>
              <th>{i + 1}</th>
              <td>{product?.product_name}</td>
              <td>{product?.postedDate}</td>
              <td>${product?.product_price}</td>
              <td>
                <button
                  onClick={() => handleDelete(product?._id)}
                  className="btn btn-accent btn-sm"
                >
                  Sold
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProduct;