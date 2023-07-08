import { GrCycle } from "react-icons/gr";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiSecurePaymentFill } from "react-icons/ri";
import "../globals.css";
const firstsec = () => {
  return (
    <div className=" flex my-7 justify-center screen2:w-[250%] screen3:w-[200%]">
      <div className=" mt-[5rem] screen2:my-[7rem] grid md:grid-cols-3 text-center screen2:gap-[6rem] gap-[3rem]">
        <div className=" flex gap-2 flex-col items-center screen2:text-[2.5rem] screen3:text-[2.5rem]">
          <LiaShippingFastSolid className="text-[3rem] text-[#322626c3] screen2:text-[5rem] " />
          <h1 className="text-[#0000006b]">FREE SHIP ALL ORDER</h1>
          <span className="text-[#000000a7]">
            Free shipping on all orders across the world
          </span>
        </div>
        <div className=" flex gap-2 flex-col items-center screen2:text-[2.5rem] screen3:text-[2.5rem]">
          <GrCycle className="text-[2rem] text-[#322626c3] screen2:text-[5rem] " />
          <h1 className="text-[#0000006b]">FREE RETURNS</h1>
          <span className="text-[#000000a7]">30 days return on all items</span>
        </div>
        <div className=" flex gap-2 flex-col items-center screen2:text-[2.5rem] screen3:text-[2.5rem]">
          <RiSecurePaymentFill className="text-[2rem] text-[#322626c3]  screen2:text-[5rem] " />
          <h1 className="text-[#0000006b]">SPECIAL GIFT CARDS</h1>
          <span className="text-[#000000a7]">
            We support online 24 hours a day
          </span>
        </div>
      </div>
    </div>
  );
};

export default firstsec;
