import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import React, { useState } from "react";

const Payment = () => {
  const { err, setErr } = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const handleCeckOutForm = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErr(error.message);
    }
  };
  return (
    <form onSubmit={handleCeckOutForm}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary mt-6 my-12"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default Payment;
