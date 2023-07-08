const thirdsec = () => {
  return (
    <div className=" screen2:relative grid md:grid-cols-2 screen2:w-[250%] my-10 gap-10 max-w-7xl mx-auto">
      <div className="flex items-center screen2:justify-center justify-end">
        <img className=" h-[70%] " src="/grid-1.jpg" alt="" />
      </div>
      <div className=" screen2:absolute left-[7rem] top-[70rem]  flex items-start screen2:items-center flex-col justify-center gap-5">
        <div className="flex items-end screen2:justify-center screen2:w-[70%]">
          <img className=" h-[70%]  " src="/grid-2.jpg" alt="" />
        </div>
        <div className="flex screen2:w-[70%] screen2:justify-center">
          <img className="mb-10 h-[70%] " src="/grid-3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default thirdsec;
