import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import React, { useEffect, useState } from "react";

const Payment = ({ booking }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("BookshopToken"),
      },
      body: JSON.stringify(booking),
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
    setProcessing(true);
    const { paymentIntent, error: confirmCardPaymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: booking.name,
            email: booking.email,
          },
        },
      });

    if (confirmCardPaymentError) {
      setErr(confirmCardPaymentError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent);
      setSuccess("Payment Successfull");
      setTransactionId(paymentIntent.id);
      const payment = {
        email: booking.email,
        transactionId: paymentIntent.id,
        price: booking.productPrice,
        bookingId: booking._id,
        category_id: booking.category_id,
      };
      ///storing the data to data base
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("BookshopToken"),
        },
        body: JSON.stringify(payment),
      });
    }

    setProcessing(false);
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
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>

      <div>
        {err && <p className="text-red-500 bold text-xl mt-5">{err}</p>}
      </div>

      {success && (
        <div>
          <p className="text-green-400 font-bold text-lg">{success}</p>
          <small>{transactionId}</small>
        </div>
      )}
    </>
  );
};

export default Payment;
