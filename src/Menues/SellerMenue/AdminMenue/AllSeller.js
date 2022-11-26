import { useQuery } from "@tanstack/react-query";
import React from "react";

import CenterSpinner from "../../../Spinner/CenterSpinner";

const AllSeller = () => {
  const type = "seller";

  const { data: allSellers = [], isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/user/${type}`);
      const data = await res.json();
      return data;
    },
  });

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
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allSellers.map((seller, i) => (
            <tr>
              <th>{i + 1}</th>
              <td>{seller?.name}</td>
              <td>{seller?.email}</td>

              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSeller;
