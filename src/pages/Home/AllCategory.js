import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "../../Card/CategoryCard";

const AllCategory = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div className="w-[70%] mx-auto my-10">
      {categories.map((category) => (
        <CategoryCard category={category} key={category._id} />
      ))}
    </div>
  );
};

export default AllCategory;
