import "../src/app/globals.css";
const paymentsuccess = () => {
  return (
    <div className=" flex justify-center h-screen  items-center">
      <div className=" flex flex-col border gap-4 border-[#d5d5d5] shadow-xl rounded-sm p-10">
        <h1 className=" uppercase font-semibold">Payment Successfull</h1>
        <span> thanks for shopping at brndemporium</span>
        <a
          href="/"
          className=" text-center rounded-md mt-3 py-2 text-white px-4 bg-black"
        >
          <span className="me-6"> &larr;</span> Back to Home
        </a>
      </div>
    </div>
  );
};

export default paymentsuccess;
