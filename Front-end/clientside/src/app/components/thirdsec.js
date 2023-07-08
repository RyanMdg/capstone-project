const thirdsec = () => {
  return (
    <div className=" grid md:grid-cols-2 screen2:w-[250%] gap-5 my-10 max-w-7xl mx-auto">
      <div className="flex justify-center">
        <img src="/grid-1.jpg" alt="" />
      </div>
      <div className=" flex items-center flex-col justify-center gap-10">
        <div>
          <img className=" object-cover" src="/grid-2.jpg" alt="" />
        </div>
        <div>
          <img className=" object-cover" src="/grid-3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default thirdsec;
