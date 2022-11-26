import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { CheckmarkIcon } from "react-hot-toast";
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
    fetch(`http://localhost:5000/verifiedStatus/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsVerified(data.verified);
      });
  });

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
