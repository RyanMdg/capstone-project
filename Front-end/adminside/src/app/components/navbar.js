"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "../globals.css";
import axios from "axios";

const handleLogout = () => {
  localStorage.removeItem("token"); // Remove the token from local storage
  // Redirect to the login page
};

const Hamburger = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [userList, setUsersList] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user/user/${id}`
        );
        setUsersList(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUserList();
  }, [id]);

  return (
    <div className="flex bg-white drop-shadow-lg h-16">
      <div
        className={` ${isOpen ? "bg-opacity-50" : "hidden"} `}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed h-screen bg-white w-64 z-50 transform transition-transform ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {" "}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800">
          <div className="text-white text-xl font-bold">ShopWithin</div>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-400 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="py-4 px-6 bg-slate-700 h-screen">
          <ul className="space-y-2">
            <li>
              <Link href="/home" className="flex items-center py-2 text-white">
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 0 0-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 0 0-8-8zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM7 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Dashboard
              </Link>
            </li>

            {/* PRODUCTS */}
            <li>
              <button
                className="flex items-center py-2 text-white focus:outline-none"
                onClick={toggleDropdown1}
              >
                <svg
                  className={`h-5 w-5 mr-2 transition-transform ${
                    isDropdownOpen1 ? "rotate-90" : "rotate-0"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2zm9 3a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h18zm0 4a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h18zm0 4a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h18zm-9 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Products
              </button>
              {isDropdownOpen1 && (
                <ul className="pl-4 mt-2">
                  <li>
                    <Link
                      href="/productlist"
                      className="flex items-center py-2 text-white"
                    >
                      <svg
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a1 1 0 0 1 1 1v2h3a1 1 0 0 1 0 2h-1v2a3 3 0 1 1-2 0V7H7a1 1 0 0 1 0-2h3V3a1 1 0 0 1 1-1zm-9 5h1v8H1v-8zm18 0h-1v8h1v-8zm-3-3H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM5 15h10V7H5v8z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Products lists
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/productadd"
                      className="flex items-center py-2 text-white"
                    >
                      <svg
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a1 1 0 0 1 1 1v2h3a1 1 0 0 1 0 2h-1v2a3 3 0 1 1-2 0V7H7a1 1 0 0 1 0-2h3V3a1 1 0 0 1 1-1zm-9 5h1v8H1v-8zm18 0h-1v8h1v-8zm-3-3H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM5 15h10V7H5v8z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Add Products
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* ORDERS */}
            <li>
              <button
                className="flex items-center py-2 text-white focus:outline-none"
                onClick={toggleDropdown2}
              >
                <svg
                  className={`h-5 w-5 mr-2 transition-transform ${
                    isDropdownOpen2 ? "rotate-90" : "rotate-0"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2zm9 3a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h18zm0 4a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h18zm0 4a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h18zm-9 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Orders
              </button>
              {isDropdownOpen2 && (
                <ul className="pl-4 mt-2">
                  <li>
                    <Link
                      href="/orderlist"
                      className="flex items-center py-2 text-white"
                    >
                      <svg
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a1 1 0 0 1 1 1v2h3a1 1 0 0 1 0 2h-1v2a3 3 0 1 1-2 0V7H7a1 1 0 0 1 0-2h3V3a1 1 0 0 1 1-1zm-9 5h1v8H1v-8zm18 0h-1v8h1v-8zm-3-3H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM5 15h10V7H5v8z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Orders lists
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/contact"
                className="flex items-center py-2 text-white"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 0 0-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 0 0-8-8zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-1-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Contact
              </Link>
            </li>

            <li className=" mt-32">
              <Link href="/" className="flex items-center py-2 text-white">
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between w-screen">
        <button
          onClick={toggleSidebar}
          className={` top-4 right-4 p-2 rounded-md text-gray-400 focus:outline-none z-50 ${
            isOpen ? "hidden" : "block"
          }`}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {userList &&
          userList.map((user) => (
            <div
              key={user._id}
              className={`flex flex-col me-4 justify-center  ${
                isOpen ? "inline-block" : "block"
              }`}
            >
              <h1 className=" font-bold">{user.username}</h1>
              <span className=" text-gray-500 text-sm text-center">
                {user.email}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hamburger;
