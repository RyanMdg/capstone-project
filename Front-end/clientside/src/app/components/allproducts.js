import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const ProductListByBrand = ({ brand }) => {
  const [productsList, setProductsList] = useState(null);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get(
          `https://brndemporuimbackend.onrender.com/react`
        );
        // You may want to randomize or sort the list on the server-side before sending the response.
        // For simplicity, let's assume the server already returns the list in the desired order.

        setProductsList(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProductList();
  }, [brand]);

  return (
    <div className="flex flex-col items-center justify-center screen2:w-[250%]">
      <div className="grid  md:grid-cols-4 w-[90%] mt-5">
        {productsList &&
          productsList.map((product) => (
            <div className="flex mb-10 justify-center" key={product._id}>
              <Link
                href={`/product/${product._id}`}
                className=" w-[75%]    duration-300 border hover:shadow-lg border-[#92929238]  hover:translate-y-[-.5rem] hover:border hover:border-black"
              >
                <img
                  className="w-fit overflow-hidden mb-3"
                  src={`http://localhost:4000/${product.image}`}
                  alt=""
                />

                <div className="flex flex-col pl-2 pb-2">
                  <h1 className="text-[1rem] flex justify-between text-[#605e5e]">
                    {product.productName}
                    <span className="text-[1.1rem] bg-black text-white px-4">
                      ₱{product.price}
                    </span>
                  </h1>
                  <span className="text-[1.1rem] text-[#605e5eb5]">
                    {product.brand}
                  </span>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductListByBrand;
