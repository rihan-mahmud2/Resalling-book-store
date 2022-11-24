import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={category.image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category.product_name}</h2>
        <p className="text-xl bolder">
          Original price ${category.product_price}
        </p>
        <p className="text-xl bolder">Purchase Year {category.purchase_year}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
