import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import React, { useEffect, useState } from "react";

const Payment = ({ booking }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [err, setErr] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ booking }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [booking]);

  const handleCeckOutForm = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    setErr("");
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErr(error.message);
    }
  };
  return (
    <>
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

      <div>
        {err && <p className="text-red-500 bold text-xl mt-5">{err}</p>}
      </div>
    </>
  );
};

export default Payment;
