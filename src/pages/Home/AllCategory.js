import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "../../Card/CategoryCard";
import BookingModal from "../../Modal/BookingModal";

const AllCategory = () => {
  const categories = useLoaderData();
  const [bookingCategory, setBookingCategory] = useState(null);

  return (
    <div className="w-[70%] mx-auto my-10">
      {categories.map((category) => (
        <CategoryCard
          category={category}
          setBookingCategory={setBookingCategory}
          key={category._id}
        />
      ))}

      {bookingCategory && (
        <BookingModal
          setBookingCategory={setBookingCategory}
          category={bookingCategory}
        />
      )}
    </div>
  );
};

export default AllCategory;
