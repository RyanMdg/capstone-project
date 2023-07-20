import axios from "axios";
import React, { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    price: 0,
    stock: 0,
    description: "",
  });

  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const formDataWithImage = new FormData();
      formDataWithImage.append("productName", formData.productName);
      formDataWithImage.append("price", formData.price);
      formDataWithImage.append("stock", formData.stock);
      formDataWithImage.append("description", formData.description);
      formDataWithImage.append("image", image);

      const response = await axios.post(
        "https://miniproject-2-qm9q.onrender.com/products/productadd",
        formDataWithImage,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response:", response.data);
      setShowModal(true);
      setFormData({ productName: "", price: 0, stock: 0, description: "" });
      setImage(null);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-6xl mt-8 mb-12 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="product-name"
          >
            Product Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="productName"
            type="text"
            placeholder="Enter product name"
            value={formData.productName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            name="price"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Stock
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="stock"
            type="number"
            name="stock"
            placeholder="Enter stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Upload Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handleFileChange}
          />
        </div>
        <button className=" text-white bg-slate-600 hover:bg-slate-700 transition p-3 rounded-md">
          Add Product
        </button>
      </form>
      {showModal && (
        <div className="fixed inset-0 bg-slate-500 bg-opacity-60 ease-in flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-md p-8 transition-opacity duration-300">
            <h2 className="text-lg font-bold mb-4">Product Added!</h2>
            <p>Your product has been successfully added.</p>
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

export default ProductForm;
