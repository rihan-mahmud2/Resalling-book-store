import React, { useContext, useEffect, useState } from "react";
import toast, { CheckmarkIcon } from "react-hot-toast";
import { Link } from "react-router-dom";
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
    paid,
    usedYears,
    product_original_price,
  } = category;

  useEffect(() => {
    fetch(
      `https://reselling-portal-server.vercel.app/verifiedStatus/${email}`,
      {
        headers: {
          authorization: localStorage.getItem("BookshopToken"),
        },
      }
    )
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
    const res = await fetch(
      "https://reselling-portal-server.vercel.app/whishList",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(whishes),
      }
    );
    const data = res.json();
    data.then((result) => {
      if (result.acknowledged) {
        toast("Added to Whishlist");
      }
    });
  };

  return (
    <>
      {/* <div className="card card-side mt-5 bg-base-300 shadow-xl flex justify-between">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-actions flex-col">
          <h2 className="card-title">{product_name}</h2>
          <p className="text-xl bolder">Sold price ${product_price}</p>
          <p className="text-xl bolder">
            Original price ${product_original_price}
          </p>
          <p className="text-xl bolder">Purchase Year {purchase_year}</p>

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
          {category?.paid ? (
            ""
          ) : (
            <label
              htmlFor="my-modal"
              onClick={() => setBookingCategory(category)}
              className="btn"
            >
              Book Now
            </label>
          )}
        </div>
      </div> */}

      {paid ? (
        ""
      ) : (
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-52" src={image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product_name}</h2>
            <p className="text-black font-bold">Sold Price ${product_price}</p>
            <p className="text-black font-bold">
              Original Price ${product_original_price}
            </p>
            <p className="text-black font-bold">Location: {location}</p>
            <p className="text-black font-bold">poste Date: {postedDate}</p>
            <p className="text-black font-bold">
              Purchase Year: {purchase_year}
            </p>
            <p className="text-black font-bold">email: {email}</p>
            <p className="text-black font-bold">Used Years: {usedYears}</p>
            <div className="card-actions justify-end">
              {isVerified === "yes" && <CheckmarkIcon />}

              <button
                onClick={() => handleAddToWhishList(category)}
                className="btn inline"
              >
                Whislist
              </button>
              {category?.paid ? (
                ""
              ) : (
                <label
                  disabled={paid}
                  htmlFor="my-modal"
                  onClick={() => setBookingCategory(category)}
                  className="btn"
                >
                  Book Now
                </label>
              )}
              <Link to="/report" className="btn mt-3 btn-info btn-sm">
                Report
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryCard;
