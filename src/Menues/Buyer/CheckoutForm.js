import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CenterSpinner from "../../Spinner/CenterSpinner";
const stripePromise = loadStripe(process.env.REACT_APP_PK);

const CheckoutForm = () => {
  const bookingInfo = useLoaderData();

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <CenterSpinner />;
  }

  return (
    <div>
      <div>
        <h1>Your Orderd Book Name is {bookingInfo.productName}</h1>
        <p>Your Total Payment is {bookingInfo?.productPrice}</p>
      </div>
      <div className="w-96 mt-10">
        <Elements stripe={stripePromise}>
          <Payment booking={bookingInfo} />
        </Elements>
      </div>
    </div>
  );
};

export default CheckoutForm;
