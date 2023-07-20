const cart = () => {
  return (
    <div className=" mt-[10rem] screen2:w-[250%] max-w-[85rem] mx-auto ">
      <div className="grid md:grid-cols-2 gap-[4rem]">
        <div className="flex flex-col items-center">
          <h1 className=" text-start uppercase font-bold screen2:text-[3rem] text-[2rem]">
            shopping bag
          </h1>
          <span className="text-start uppercase font-bold screen2:text-[3rem] text-[2rem]">
            your cart is empty
          </span>
        </div>
        <div>
          <h1 className=" uppercase font-bold screen2:text-[3rem] text-[2rem]">
            summary
          </h1>
        </div>
      </div>
    </div>
  );
};

export default cart;
