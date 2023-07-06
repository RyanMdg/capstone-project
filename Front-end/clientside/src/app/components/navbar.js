import { useState } from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="flex justify-between  screen2:mx-auto mx-10 mt-4">
      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center">
        <button
          type="button"
          className="text-gray-500 screen2:text-[4rem] screen3:text-[2rem] screen2:mx-10 screen3:me-10 focus:outline-none"
          onClick={toggleMenu}
        >
          &#8801;
        </button>
      </div>

      <div className="flex flex-shrink-0 items-center">
        <img
          className="w-[40%] screen2:w-[65%] screen3:w-[58%] object-contain flex-none"
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

      <div className="flex items-center  gap-10">
        <div className="flex screen2:hidden screen3:hidden items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="py-1 px-3 bg-[#e1dfdf7d] focus:outline-none flex-grow"
          />
          <AiOutlineSearch className="text-gray-500 absolute w-7 left-[11rem] text-[1.3rem]" />
        </div>
        <button type="button" onClick={toggleSearch}>
          <AiOutlineSearch className="text-gray-500 screen1:hidden screen3:text-[2rem]  screen2:text-[3rem]" />
        </button>
        <VscAccount className="text-[1.3rem] screen3:text-[2rem] screen2:text-[3rem]" />
        <AiOutlineHeart className="text-[1.3rem] screen3:text-[2rem] screen2:text-[3rem]" />
        <BsBag className="text-[1.3rem] screen3:me-5 screen3:text-[2rem] screen2:me-10 screen2:text-[3rem]" />
      </div>

      {/* FOR MENU HAMBURGER */}
      <div
        className={`fixed top-0 left-0 h-screen screen3:h-[100%] screen2:h-[100%] w-[100%] bg-gray-100 z-50 transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          className="text-gray-500 screen2:text-[2rem] text-2xl flex items-center justify-center relative top-4 right-4 focus:outline-none"
          onClick={toggleMenu}
        >
          <img
            className="w-[40%] ms-[12rem]  screen2:w-[65%] screen3:w-[45%] object-contain flex-none"
            src="/brnd.png"
            alt=""
          />

          <div className=" absolute left-[45rem] screen3:text-[2rem] text-[3rem]">
            &#x2715;
          </div>
        </button>
        <ul className="flex flex-col screen2:text-[3rem] screen3:text-[2rem] p-2 uppercase gap-10 mx-10 pt-12">
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

      {/* FOR SEARCH */}
      <div
        className={`fixed top-0 left-0 h-screen screen3:h-[100%] screen2:h-[100%] w-[100%] bg-gray-100 z-50 transform duration-300 ease-in-out ${
          isSearchOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="text-gray-500 screen2:text-[2rem] text-2xl flex items-center justify-center relative top-4 right-4 focus:outline-none"
          onClick={toggleSearch}
        >
          <img
            className="w-[40%] ms-[16rem]  screen2:w-[65%] screen3:w-[45%] object-contain flex-none"
            src="/brnd.png"
            alt=""
          />

          <div className=" absolute left-[45rem] screen2:left-[50rem] screen3:text-[2rem] text-[3rem]">
            &#x2715;
          </div>
        </button>
        <div className="flex justify-center items-center mt-10 mx-[12rem]">
          <input
            type="text"
            placeholder="Search"
            className="py-4 px-4 screen2:py-7 screen2:text-[2rem] bg-[#e1dfdf7d] text-[1.2rem] focus:outline-none flex-grow"
          />
          <AiOutlineSearch className="text-gray-500 absolute screen2:left-[37rem] left-[33rem] screen2:text-[3rem] text-[2rem]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
