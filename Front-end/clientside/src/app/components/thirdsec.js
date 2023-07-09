const thirdsec = () => {
  return (
    <div className=" max-w-[80rem] screen2:w-[250%] my-10 mx-auto grid screen2:gap-4 md:grid-cols-2">
      {/* FIRST IMAGE */}
      <div className=" mx-auto screen2:ms-[8rem] ms-[10rem] w-[70%] overflow-hidden">
        <img
          src="/grid-1.jpg"
          className=" hover:scale-110 hover:brightness-75 duration-500"
          alt=""
        />
      </div>

      {/* SECOND IMAGE */}
      <div className="flex screen2:items-center flex-col gap-7">
        <div className="relative w-[75%] overflow-hidden">
          <img
            src="/grid-2.jpg"
            className="hover:scale-110 inset-0 transition-transform hover:brightness-75 duration-500"
            alt=""
          />

          <span
            className="absolute z-50 top-[6.7rem] left-[6.5rem] transform -translate-x-1/2 -translate-y-1/2 text-white uppercase screen2:text-[2.3rem] screen2:left-[10rem]
           screen2:top-[10rem] font-bold p-2 text-[1.5rem]"
          >
            New arrivals <br /> up to 70% off <br />{" "}
            <span className="cursor-pointer text-[1.5rem]">
              shop now <span className=" text-[2rem] ms-2 ">&#8250;</span>{" "}
            </span>
          </span>
        </div>

        {/*THIRD IMAGE*/}
        <div className="relative w-[75%] overflow-hidden">
          <img
            src="/grid-3.jpg"
            className="hover:scale-110 inset-0 transition-transform hover:brightness-75 duration-500"
            alt=""
          />

          <span
            className="absolute z-50 top-[3rem] text-end left-[18rem] transform -translate-x-1/2 -translate-y-1/2 text-black uppercase screen2:text-[2.3rem] screen2:left-[30rem]
           screen2:top-[7rem] font-bold w-[20rem] text-[1.5rem]"
          >
            super sale <br /> new era caps
          </span>
        </div>
      </div>
    </div>
  );
};

export default thirdsec;
