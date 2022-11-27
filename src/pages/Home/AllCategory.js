import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import CategoryCard from "../../Card/CategoryCard";
import BookingModal from "../../Modal/BookingModal";
import CenterSpinner from "../../Spinner/CenterSpinner";

const AllCategory = () => {
  const categories = useLoaderData();
  const [bookingCategory, setBookingCategory] = useState(null);

  const navigation = useNavigation();
  if (navigation?.state === "loading") {
    return <CenterSpinner />;
  }

  return (
    <div className="grid grid-cols-2 gap-3 mx-auto w-[98%] my-10">
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
