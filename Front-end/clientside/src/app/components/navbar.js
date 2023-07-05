import { useState } from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between  screen2:mx-auto mx-10 mt-4">
      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center">
        <button
          type="button"
          className="text-gray-500 screen2:text-[4rem] mx-10 focus:outline-none"
          onClick={toggleMenu}
        >
          &#8801;
        </button>
      </div>

      <div className="flex flex-shrink-0 items-center">
        <img
          className="w-[40%] screen2:w-[65%] object-contain flex-none"
          src="/brnd.png"
          alt=""
        />
      </div>

      <ul className="hidden lg:flex  gap-4 items-center">
        <a href="/">
          <li>Home</li>
        </a>
        <li className="font-semibold">Men</li>
        <li className="font-semibold">Women</li>
        <li>Products</li>
        <li>Accessories</li>
      </ul>

      <div className="flex items-center  gap-6">
        <div className="flex screen2:hidden items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="py-1 px-3 bg-[#e1dfdf7d] focus:outline-none flex-grow"
          />
          <AiOutlineSearch className="text-gray-500 absolute w-7 left-[11rem] text-[1.3rem]" />
        </div>
        <VscAccount className="text-[1.3rem] screen2:text-[3rem]" />
        <AiOutlineHeart className="text-[1.3rem] screen2:text-[3rem]" />
        <BsBag className="text-[1.3rem] screen2:me-10 screen2:text-[3rem]" />
      </div>

      <div
        className={`fixed top-0 left-0 h-screen screen2:h-[100%] w-[100%] bg-gray-100 z-50 transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          className="text-gray-500 screen2:text-[2rem] text-2xl flex items-center justify-center relative top-4 right-4 focus:outline-none"
          onClick={toggleMenu}
        >
          <img
            className="w-[40%]  screen2:w-[65%] object-contain flex-none"
            src="/brnd.png"
            alt=""
          />
          <div className=" absolute left-[45rem] text-[3rem]">&#x2715;</div>
        </button>
        <ul className="flex flex-col screen2:text-[2rem]  gap-4 mx-10 pt-12">
          <a href="/">
            <li>Home</li>
          </a>
          <a href="" className="flex justify-between ">
            <li className="font-semibold">Men</li>
            <strong>&#62;</strong>
          </a>
          <li className="font-semibold">Women</li>
          <li>Products</li>
          <li>Accessories</li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
