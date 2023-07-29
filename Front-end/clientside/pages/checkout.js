import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../src/app/components/checkout";
import "../src/app/app.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51NQA7hKyAgZmsnmivoMq2z3mFOxtvpx0xSKZq3cu473a7TBVQ5jHLRpvlhcc8EVycJCN4MTOZ0bmgpaeH6vRMLwW005Mly957g"
);

export default function App() {
  const [clientSecret, setClientSecret] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from your backend or wherever it's stored
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        // Ensure the response contains an array of products
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error("Invalid product data. Expecting an array.");
        }
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  useEffect(() => {
    // Calculate the total amount based on the products in the cart
    const totalAmount = calculateOrderAmount(products);

    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: products }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error("Error creating PaymentIntent:", error));
  }, [products]);
  // Function to calculate the order amount based on the products in the cart
  const calculateOrderAmount = (items) => {
    let totalAmount = 0;

    for (const item of items) {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity);

      if (!isNaN(price) && !isNaN(quantity)) {
        totalAmount += price * quantity;
      }
    }

    return totalAmount;
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
