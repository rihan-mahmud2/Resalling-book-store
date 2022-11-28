import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/ContextProvider";
import axios from "axios";
import { async } from "@firebase/util";
const MyProduct = () => {
  const { user } = useContext(AuthContext);

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
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

  const handleAdvertised = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("BookshopToken"),
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      refetch();
    }
  };

  const handelDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
      headers: {
        authorization: localStorage.getItem("BookshopToken"),
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      refetch();
    }
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
            <th>Run Add</th>
            <th>Status</th>
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
                  onClick={() => handelDelete(product?._id)}
                  className="btn btn-accent btn-sm"
                >
                  Delete
                </button>
              </td>
              <td>
                {product?.paid
                  ? ""
                  : product?.advertised !== "yes" && (
                      <button
                        onClick={() => handleAdvertised(product?._id)}
                        className="btn btn-success btn-sm"
                      >
                        Advertised
                      </button>
                    )}
              </td>
              <td>
                {product?.paid ? (
                  <span className="btn btn-info btn-sm">Sold</span>
                ) : (
                  <span className="btn btn-primary btn-sm">Avilable</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProduct;
