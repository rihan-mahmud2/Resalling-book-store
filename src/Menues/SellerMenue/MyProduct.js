import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/ContextProvider";
import axios from "axios";
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

  const handleAdvertised = async (id) => {
    try {
      const res = fetch(`http://localhost:5000/category/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("BookshopToken"),
        },
      });
      const data = res.json();
      console.log(data);
    } catch {}
  };

  const handelDelete = (id) => {};

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
            <th></th>
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
                <button className="btn btn-accent btn-sm">Sold</button>
              </td>
              <td>
                <button
                  onClick={() => handleAdvertised(product?._id)}
                  className="btn btn-success btn-sm"
                >
                  Advertised
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
