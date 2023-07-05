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
    <nav className="flex justify-between mx-10 mt-4">
      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center">
        <button
          type="button"
          className="text-gray-500 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          &#8801;
        </button>
      </div>

      <div className="flex flex-shrink-0 items-center">
        <img
          className="w-[40%] screen2:w-[100%] object-contain flex-none"
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

      <div className="flex items-center gap-6">
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="py-1 px-3 bg-[#e1dfdf7d] focus:outline-none flex-grow"
          />
          <AiOutlineSearch className="text-gray-500 absolute w-7 left-[11rem] text-[1.3rem]" />
        </div>
        <VscAccount className="text-[1.3rem]" />
        <AiOutlineHeart className="text-[1.3rem]" />
        <BsBag className="text-[1.3rem]" />
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-100 z-50 transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          className="text-gray-500 text-2xl absolute top-4 right-4 focus:outline-none"
          onClick={toggleMenu}
        >
          &#x2715;
        </button>
        <ul className="flex flex-col gap-4 items-center pt-12">
          <a href="/">
            <li>Home</li>
          </a>
          <li className="font-semibold">Men</li>
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
