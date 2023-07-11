import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const secondsec = () => {
  const [productsList, setProductsList] = useState(null);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get(
          "https://miniproject2-5qgj.onrender.com/react"
        );

        // Randomize the order of the products
        const randomizedList = response.data.sort(() => 0.5 - Math.random());

        setProductsList(randomizedList);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProductList();
  }, []);

  const limitedProducts = productsList && productsList.slice(0, 4);

  return (
    <div className=" mb-[5rem]">
      <div className="flex flex-col items-center justify-center screen2:w-[250%]">
        <h1 className=" text-[#100c0cdb] text-[2rem] mt-10 screen2:text-[3rem] font-[800] uppercase">
          our products
        </h1>
      </div>

      <div className="flex gap-10 justify-center my-4">
        <div className="flex flex-col items-center">
          <img src="/0.jpg" alt="" />
          <h1 className=" text-[#0000008b]">Canned</h1>
        </div>
        <div className="flex flex-col items-center">
          <img src="/2.jpg" alt="" />
          <h1 className=" text-[#0000008b]">Fruits</h1>
        </div>
        <div className="flex flex-col items-center">
          <img src="/3.jpg" alt="" />
          <h1 className=" text-[#0000008b]">Drink</h1>
        </div>
        <div className="flex flex-col items-center">
          <img src="/4.jpg" alt="" />
          <h1 className=" text-[#0000008b]">Meat</h1>
        </div>
        <div className="flex flex-col items-center">
          <img src="/5.jpg" alt="" />
          <h1 className=" text-[#0000008b]">Vegetable</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-4 w-[90%] m-10">
        {limitedProducts &&
          limitedProducts.map((product) => (
            <Link
              href={`/product/${product._id}`}
              key={product.id}
              className="ms-10 flex flex-col items-center border border-[#605e5e46] shadow-lg hover:translate-y-[-1rem] duration-300 transition-all rounded-md mb-10"
            >
              <img
                className="w-fit overflow-hidden mb-3"
                src={`https://miniproject2-5qgj.onrender.com/${product.image}`}
                alt=""
              />

              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[1rem] text-[#605e5e]">
                  {product.productName}
                </h1>
                <span className="text-[1.1rem] text-[#605e5eb5]">
                  ₱{product.price}
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
  // return (
  //   <div className="flex flex-col items-center justify-center screen2:w-[250%]">
  //     <h1 className=" text-[#100c0cdb] text-[2rem] mt-10 screen2:text-[3rem] font-[800] uppercase">
  //       our products
  //     </h1>
  //     <span className=" screen2:text-[2rem]">products api is here</span>
  //   </div>
  // );
};

export default secondsec;
