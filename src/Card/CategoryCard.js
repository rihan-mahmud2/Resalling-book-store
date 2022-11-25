import React from "react";
import BookingModal from "../Modal/BookingModal";

const CategoryCard = ({ category }) => {
  const {
    image,
    product_name,
    product_price,
    purchase_year,
    location,
    postedDate,
  } = category;

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
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
            <label htmlFor="my-modal" className="btn">
              open modal
            </label>
          </div>
        </div>
      </div>

      <BookingModal category={category} />
    </>
  );
};

export default CategoryCard;
