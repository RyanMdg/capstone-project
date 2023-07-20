import Breadcrumb from "./breadcrumps";
import AddForm from "./formAddProduct";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

const formAdd = () => {
  const crumbs = [
    { label: "Dashboard /", path: "/" },
    { label: "Add Products", path: "/productadd" },
  ];

  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (newData) => {
    setFormData([...formData, newData]);
  };
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, []);

  return (
    <div className=" my-5 mx-20">
      <title>Add Product</title>

      <Breadcrumb crumbs={crumbs} />
      <div className="flex justify-between">
        <h1 className=" text-3xl font-semibold">Add Products</h1>
        <button className=" text-white bg-slate-600 hover:bg-slate-700 transition p-3 rounded-md">
          <a href="/productlist"> Product Lists</a>
        </button>
      </div>
      <AddForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default formAdd;
