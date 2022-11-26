import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CheckmarkIcon } from "react-hot-toast";

import CenterSpinner from "../../../Spinner/CenterSpinner";

const AllSeller = () => {
  const type = "seller";

  const {
    data: allSellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/user/${type}`);
      const data = await res.json();
      return data;
    },
  });

  const handleVeryfy = async (id) => {
    const res = await fetch(`http://localhost:5000/verifyUser/${id}`, {
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

  if (isLoading) {
    return <CenterSpinner />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Is Verified</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allSellers.map((seller, i) => (
            <tr>
              <th>{i + 1}</th>
              <td>{seller?.name}</td>
              <td>{seller?.email}</td>
              <td>
                {seller && !seller?.verified ? (
                  <button
                    onClick={() => handleVeryfy(seller._id)}
                    className="btn btn-sm btn-accent"
                  >
                    NO
                  </button>
                ) : (
                  <CheckmarkIcon />
                )}
              </td>
              <td>Blue</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSeller;
