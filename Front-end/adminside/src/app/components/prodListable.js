import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import productList from "./prodList";
import productlist from "../../../pages/productlist";

const Table = () => {
  const [productsList, setproductsList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://miniproject-2-qm9q.onrender.com/products/productlist/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
    const fetchProductlist = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          router.push("/");
        }

        const response = await axios.get(
          "https://miniproject-2-qm9q.onrender.com/products/productlist",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setproductsList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProductlist();
  }, []);

  return (
    <div className="bg-white shadow-md rounded my-6">
      <title>Product Lists</title>
      {isLoading ? (
        <div
          className=" mx-auto h-8 w-8 m-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute   !h-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        <table className="  min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                Price
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                Stock
              </th>
              <th className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold uppercase tracking-wider">
                Image
              </th>
              <th className=" text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {productsList &&
              productsList.map((item) => (
                <tr key={item._id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {item.productName}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {item.price}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {item.stock}
                  </td>
                  <td className="px-5 py-5  border-b border-gray-200 bg-white text-sm">
                    <div className=" flex justify-center">
                      <img
                        className=" w-36"
                        src={`https://miniproject-2-qm9q.onrender.com/${item.image}`}
                        alt=""
                      />
                    </div>
                  </td>

                  <td className=" flex justify-center px-5 ms-10 gap-4 py-5 border-b border-gray-200 bg-white text-sm">
                    <button className=" me-3 bg-yellow-600 p-2 text-white rounded-md font-semibold">
                      Update Product
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className=" bg-red-500 p-2 text-white rounded-md font-semibold"
                    >
                      Delete Product
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-slate-500 bg-opacity-60 ease-in flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-md p-8 transition-opacity duration-300">
            <h2 className="text-lg font-bold mb-4">
              Product <span className=" text-red-700">Deleted!</span>{" "}
            </h2>
            <p>Your product has been successfully Deleted.</p>
            <button
              className="text-white bg-slate-600 hover:bg-slate-700 transition p-3 rounded-md mt-4"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
