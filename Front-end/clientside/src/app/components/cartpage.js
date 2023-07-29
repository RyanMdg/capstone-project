import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import "../globals.css";

const Table = () => {
  const [productsList, setproductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/products/cartlist/${id}`, {
        headers: {},
      });

      setproductsList((prevProductsList) =>
        prevProductsList.filter((product) => product._id !== id)
      );
      setShowModal(true);
      // Perform any additional actions after successful deletion
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios
      .post(
        "/create-payment-intent",
        { items: [{ id: "xl-tshirt" }] },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => res.data)
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error fetching clientSecret:", error);
      });
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  useEffect(() => {
    const fetchProductlist = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/products/cartlist"
        );

        const productsWithQuantity = response.data.map((product) => ({
          ...product,
          quantity: 1,
        }));

        setproductsList(productsWithQuantity);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProductlist();
  }, []);

  // Calculate the total price of all products in the cart
  const totalCartPrice = productsList.reduce(
    (total, item) => total + parseFloat(item.price.replace(/,/g, "")),
    0
  );

  const formattedTotalCartPrice = totalCartPrice.toLocaleString();

  const handleQuantityChange = (productId, newQuantity) => {
    setproductsList((prevProductsList) =>
      prevProductsList.map((product) =>
        product._id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  return (
    <main>
      <div className="grid mb-[5rem]  grid-cols-3 max-w-[80%] mx-auto pt-[10rem] gap-10">
        <div className="flex flex-col gap-4 col-span-2">
          <h1 className="uppercase font-extrabold text-[2rem]">Your Bag</h1>
          <span>
            Items in your bag are not reserved — check out now to make them
            yours.
          </span>

          {productsList.length > 0 ? (
            // Render individual product items
            productsList.map((item) => (
              <div className="col-span-2" key={item._id}>
                <div className="flex gap-4 hover:shadow-xl duration-300 relative border w-[95%]  border-black">
                  <img
                    className="w-[30%]"
                    src={`http://localhost:4000/${item.image}`}
                    alt=""
                  />
                  <div className="flex flex-col w-screen">
                    <div className="flex items-end justify-between">
                      <p className="mt-7 font-semibold">{item.productName}</p>
                      <p className="me-2 font-bold">
                        &#x20B1;{" "}
                        {(
                          parseFloat(item.price.replace(/,/g, "")) *
                          item.quantity
                        ).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                    <p>
                      <strong>Brand</strong>: {item.brand}
                    </p>
                    <div className="relative mt-8">
                      <select
                        className="block appearance-none w-[30%] py-2 px-3 border border-gray-300 bg-white text-gray-700  shadow-sm focus:outline-none  "
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item._id,
                            parseInt(e.target.value)
                          )
                        }
                      >
                        {[...Array(10).keys()].map((number) => (
                          <option
                            className=" text-[1.3rem] "
                            key={number + 1}
                            value={number + 1}
                          >
                            {number + 1}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M10 5L6 9h8l-4 4m0 6l-4-4m4 4V9"></path>
                        </svg>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-[1.2rem] right-[.6rem] absolute"
                    >
                      &#128473;
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="flex justify-center h-[50vh] items-center text-[1.8rem] uppercase font-extrabold">
              Your cart is empty.
            </p>
          )}
        </div>

        {/* SECOND GRID */}
        <div className="flex gap-10 flex-col col-span-1">
          <a href="/checkout">
            <button className="flex items-center w-full hover:shadow-xl duration-300 hover:translate-y-[-.5rem] justify-between uppercase font-semibold bg-black px-4 text-white py-3">
              Checkout
              <span className="text-[1.5rem] hover:rotate-90 duration-300 text-white">
                &#8594;
              </span>
            </button>
          </a>

          <h1 className="font-extrabold text-[1.3rem] uppercase">
            Order Summary
          </h1>
          {productsList.length > 0 && (
            <div className="flex flex-col gap-2">
              {/* Display the price of each item separately */}
              {productsList.map((item) => (
                <div key={item._id} className="flex justify-between">
                  <p>
                    {item.productName} (x{item.quantity})
                  </p>
                  <p>
                    &#x20B1;{" "}
                    {(
                      parseFloat(item.price.replace(/,/g, "")) * item.quantity
                    ).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
              ))}
              {/* Calculate delivery fee */}
              <div className="flex justify-between">
                <p>Delivery</p>
                <p>Free</p>
              </div>
              <hr className="mb-2" />
              {/* Calculate the total price including the delivery fee */}
              <div className="flex font-bold justify-between">
                <p>Total</p>
                <p>
                  &#x20B1;{" "}
                  {parseFloat(
                    productsList.reduce(
                      (total, item) =>
                        total +
                        parseFloat(item.price.replace(/,/g, "")) *
                          item.quantity,
                      0
                    )
                  ).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  }) < 5000
                    ? (
                        parseFloat(
                          productsList.reduce(
                            (total, item) =>
                              total +
                              parseFloat(item.price.replace(/,/g, "")) *
                                item.quantity,
                            0
                          )
                        ) + 80
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })
                    : parseFloat(
                        productsList.reduce(
                          (total, item) =>
                            total +
                            parseFloat(item.price.replace(/,/g, "")) *
                              item.quantity,
                          0
                        )
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Table;
