import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../context/ContextProvider";

const WishList = () => {
  const { user } = useContext(AuthContext);

  const { data: whishListItems = [], isLoading } = useQuery({
    queryKey: ["whisList", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/whishList/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading || !user?.email) {
    return;
  }
  console.log(whishListItems);
  return (
    <div className="my-5 min-h-16">
      {whishListItems.map((item) => (
        <div className="card w-1/2 h-[200px] mx-auto card-side bg-base-100 shadow-xl">
          <figure>
            <img src={item?.image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning btn-sm">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;
