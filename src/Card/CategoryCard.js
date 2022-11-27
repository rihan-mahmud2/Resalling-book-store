import React, { useContext, useEffect, useState } from "react";
import toast, { CheckmarkIcon } from "react-hot-toast";
import { AuthContext } from "../context/ContextProvider";

const CategoryCard = ({ category, setBookingCategory }) => {
  const { user } = useContext(AuthContext);
  const [isVerified, setIsVerified] = useState("");
  const {
    email,
    image,
    product_name,
    product_price,
    purchase_year,
    location,
    postedDate,
  } = category;

  useEffect(() => {
    fetch(`http://localhost:5000/verifiedStatus/${email}`, {
      authorization: localStorage.getItem("BookshopToken"),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsVerified(data.verified);
      });
  });

  const handleAddToWhishList = async (category) => {
    const whishes = {
      ...category,
      userEmail: user?.email,
    };
    const res = await fetch("http://localhost:5000/whishList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(whishes),
    });
    const data = res.json();
    data.then((result) => {
      if (result.acknowledged) {
        toast("Added to Whishlist");
      }
    });
  };

  return (
    <>
      <div className="card card-side mt-5 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_name}</h2>
          <p className="text-xl bolder">Original price ${product_price}</p>
          <p className="text-xl bolder">Purchase Year {purchase_year}</p>
          <div className="card-actions justify-end">
            <p>{location}</p>
            <small className="bolder text-xl text-primary">{postedDate}</small>
            <p>{user?.displayName}</p>
            <small>{email}</small>
            {isVerified === "yes" && <CheckmarkIcon />}

            <button
              onClick={() => handleAddToWhishList(category)}
              className="btn inline"
            >
              Whislist
            </button>
            <label
              htmlFor="my-modal"
              onClick={() => setBookingCategory(category)}
              className="btn"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
