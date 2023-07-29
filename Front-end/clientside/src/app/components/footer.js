const footer = () => {
  return (
    <div className=" text-white mb-2 bg-[#111111]">
      <div className=" grid text-sm mx-10 pt-10 grid-cols-12">
        <div className=" col-span-2">
          <ul className=" text-[.7rem]  flex uppercase flex-col gap-3 mb-10 font-semibold">
            {" "}
            <span className=" uppercase text-[.7rem] pb-1">Find a store</span>
            <li>Become a member</li>
            <li>Students Discounts</li>
            <li>Send us Feedback</li>
          </ul>
        </div>
        <div className=" col-span-2">
          <ul className=" flex flex-col gap-3 mb-5 font-normal text-[#6d7e7eb2] ">
            <strong className=" uppercase pb-1 text-[.7rem] text-white">
              Get Help
            </strong>{" "}
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className=" col-span-2">
          <ul className=" flex flex-col gap-3 mb-5 font-normal text-[#6d7e7eb2] ">
            <strong className=" uppercase pb-1 text-[.7rem] text-white">
              Get Help
            </strong>{" "}
            <li>New</li>
            <li>Students Discounts</li>
            <li>Send us Feedback</li>
          </ul>
        </div>
        <div className=" flex text-lg items-center   justify-center col-span-6">
          <p className=" font-bold uppercase border h-fit p-2 border-white">
            <span className=" bg-white p-2 text-black">Brnd</span> Emporium
          </p>
        </div>
      </div>
      <div className="flex  justify-center">
        <div>
          <p className=" text-[#6d7e7eb2] text-sm pb-4">
            © 2023 Develop by{" "}
            <a className=" underline" href="https://ryan-mdg.vercel.app/">
              RyanMdg
            </a>
            . All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;
