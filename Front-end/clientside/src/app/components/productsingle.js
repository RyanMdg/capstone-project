import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Montserrat } from "next/font/google";
import ReactModal from "react-modal";
import Dropdown from "./details.js";
import Secondsec from "./secondsec.js";
import "../globals.css";

const monserrat = Montserrat({ subsets: ["latin"] });

const options = ["Free Delivery and Returns"];

const SingleProduct = ({ onAddToCart }) => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://brndemporuimbackend.onrender.com/react/single/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="flex items-center w-screen justify-center h-full">
        <img className=" animate-ping" src="/brnd.png" alt="" />
      </div>
    );
  }

  // Default quantity is set to 1

  const handleAddToCart = async () => {
    try {
      const response = await axios.post(
        "https://brndemporuimbackend.onrender.com/products/cart",
        {
          productId: product._id,
          productName: product.productName,
          brand: product.brand,
          price: product.price,
          image: product.image, // Include the image URL in the request
          quantity,
        }
      );

      if (response.status === 201) {
        toast.success("Product added to the bag!");
        setIsModalOpen(true);
        onAddToCart(product);

        // Close the modal after a certain time (e.g., 3 seconds)
        setTimeout(() => {
          setIsModalOpen(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to add the product to the bag."); // Show an error notification
    }
  };
  return (
    <div className={monserrat.className}>
      <div className=" max-w-[100%] mx-auto">
        <title>BrndEmporium | {product.productName}</title>
        <div className="flex ms-14 mt-14"></div>
        <div className="grid gap-20 max-w-[80rem] mx-auto mt-20 grid-cols-2">
          {/* GRID FOR IMG PRODUCTS */}
          <div className="ms-28 overflow-hidden  flex justify-center ">
            <img
              className=" flex items-center w-fit "
              src={`https://brndemporuimbackend.onrender.com/${product.image}`}
              alt=""
            />
          </div>

          {/* GRID FOR PRODUCTS DETAILS*/}
          <div>
            <span className=" font-semibold text-[#111110dd]">
              {product.brand}
            </span>
            <p className="pb-3 text-3xl font-bold text-[#111110dd] uppercase">
              {" "}
              {product.productName}
            </p>

            <div className="flex flex-col gap-4">
              <p className="text-1xl text-[#0f0f0eba] font-bold">
                {" "}
                ₱{product.price}
              </p>
              <p className=" pr-24 leading-7 text-[#0c0c0c]">
                {product.description}
              </p>

              <div className="flex  mt-5 gap-4">
                <button
                  className=" bg-black  text-[#fbfbfbfa] py-2 px-7 text-1xl"
                  onClick={handleAddToCart}
                >
                  Add to Bag
                </button>
                <button className=" border border-[#c5afaf]  text-[#242424fa] py-2 px-7 text-1xl">
                  Favourite
                </button>
              </div>
              <Dropdown options={options} />
            </div>
          </div>
        </div>
        <h1 className=" flex justify-center text-[#181212b5] text-[1.5rem] mt-7 screen2:text-[3rem] font-bold uppercase">
          You may also like
        </h1>
        <div className="pb-16">
          <Secondsec />
        </div>
      </div>
      <div className=" flex justify-center items-center uppercase py-7 bg-[#EDE734]">
        <span className=" font-bold text-[1.3rem]">
          become a member & get 15% off{" "}
        </span>
        <a href="" className=" ms-3 bg-black text-white text-[.8rem] px-4 py-2">
          {" "}
          sign up for free
        </a>
      </div>

      {/* Modal */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Product Added to Cart Modal"
        className={{
          base: "modal-content",
          afterOpen: "modal-entered",
          beforeClose: "modal-exiting",
        }}
        overlayClassName={{
          base: "modal-overlay",
          afterOpen: "modal-entered",
          beforeClose: "modal-exiting",
        }}
      >
        <div className="modal-body">
          <h2 className=" font-semibold uppercase mb-5 ">
            Product Added to Cart!
          </h2>
          <div className=" flex items-center gap-4 ">
            <img
              className=" flex items-center w-[30%] "
              src={`https://brndemporuimbackend.onrender.com/${product.image}`}
              alt=""
            />
            <p className=" uppercase font-medium">{product.productName}</p>
            <p>{product.price}</p>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default SingleProduct;
