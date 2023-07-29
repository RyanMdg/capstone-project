import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Loader from "./loader"; // Import the loader component

const ProductListByBrand = ({ brand }) => {
  const [productsList, setProductsList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get(
          `https://brndemporuimbackend.onrender.com/react/productlist/${brand}`
        );

        // Randomize the order of the products (optional)
        const randomizedList = response.data.sort(() => 0.5 - Math.random());

        setProductsList(randomizedList);
        setIsLoading(false); // Set isLoading to false after data is fetched
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false); // Set isLoading to false if there's an error
      }
    };

    fetchProductList();
  }, [brand]);

  return (
    <div className="flex flex-col items-center justify-center screen2:w-[250%]">
      {isLoading ? ( // Conditionally render the loader
        <Loader />
      ) : (
        <div className="grid gap-10 md:grid-cols-4 w-[90%] mt-5">
          {productsList &&
            productsList.map((product) => (
              <div className="flex mb-10 justify-center" key={product._id}>
                <Link
                  href={`/product/${product._id}`}
                  className="w-full duration-300 border hover:shadow-lg border-[#92929238] hover:translate-y-[-.5rem] hover:border hover:border-black flex flex-col items-center"
                >
                  <img
                    className="w-[100%] h-full  object-contain mb-3"
                    src={`https://brndemporuimbackend.onrender.com/${product.image}`}
                    alt={product.productName}
                  />

                  <div className="flex flex-col pl-4 pb-4 w-full">
                    <h1 className="text-[1rem] flex justify-between text-[#605e5e]">
                      {product.productName}
                      <span className="text-[1.1rem] bg-black text-white px-4">
                        ₱{product.price}
                      </span>
                    </h1>
                    <span className="text-[1.1rem] font-bold uppercase text-[#1a1717b5]">
                      {product.brand}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ProductListByBrand;
