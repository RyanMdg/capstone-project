const newsletter = () => {
  return (
    <div className=" max-w-[100%] screen2:w-[250%] my-10  screen2:gap-4 ">
      {/* FIRST IMAGE */}
      <div className="relative screen2:w-[250%] max-h-[35rem] mx-auto screen2:mx-auto w-[100%] overflow-hidden">
        <img
          src="/newsletter.jpg"
          className="hover:scale-110 inset-0 transition-transform brightness-50  duration-500"
          alt=""
        />

        <span
          className="absolute z-50 top-[8rem] mt-[10rem] screen2:mt-[5rem]  left-[25rem] transform -translate-x-1/2 -translate-y-1/2 text-white uppercase screen2:w-[100%] screen2:text-[2rem] screen2:left-[25rem] screen2:ms-[5rem]
           screen2:top-[10rem] font-extrabold p-2 screen2:leading-[3rem] leading-[2.5rem] text-[2rem]"
        >
          SIGN UP FOR OUR NEWSLETTER
          <br />
          <span className="font-[300] text-[1rem] ">
            GET EXCLUSIVE DEALS YOU WONT FIND ANYWHERE ELSE STRAIGHT TO YOUR
            INBOX!
          </span>
          <div className=" flex gap-4 flex-col font-normal text-[.8rem]">
            <input
              placeholder="Email address"
              className=" outline-none text-black mt-10 w-[70%] screen2:w-[50%] px-2"
              type="email"
              name=""
              id=""
            />
            <button className=" hover:bg-black w-[30%] bg-[#1d1a1ac9] uppercase ">
              subscribe
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default newsletter;
