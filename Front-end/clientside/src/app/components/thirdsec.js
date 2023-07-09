const thirdsec = () => {
  return (
    <div className=" max-w-[80rem] screen2:w-[250%] my-10 mx-auto grid screen2:gap-4 md:grid-cols-2">
      <div className=" mx-auto screen2:ms-[8rem] ms-[10rem] w-[70%] overflow-hidden">
        <img
          src="/grid-1.jpg"
          className=" hover:scale-110 hover:brightness-75 duration-500"
          alt=""
        />
      </div>
      <div className="flex items-center flex-col gap-7">
        <div className="relative w-[75%] overflow-hidden">
          <img
            src="/grid-2.jpg"
            className="hover:scale-110 inset-0 transition-transform hover:brightness-75 duration-500"
            alt=""
          />

          <span className="absolute z-50 top-[5rem] left-[6.5rem] transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-bold p-2 text-[1.5rem]">
            New arrivals <br /> up to 70% off
          </span>
        </div>
        <div className="w-[75%] overflow-hidden">
          <img
            src="/grid-3.jpg"
            className="hover:scale-110 hover:brightness-75 duration-500"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default thirdsec;
