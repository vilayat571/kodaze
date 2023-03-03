export default function Promodivs() {
  return (
    <div
      className="grid  
    xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 grid-cols-2 
    gap-4"
    >
      <div className=" flex justify-center col-span-1 items-center h-auto">
        <div className="h-28 rounded-[3px] flex justify-center items-center bg-[#f6f6f6] w-72">
          <p className=" flex items-center">
            <i className="fa-solid fa-globe text-[#263045] text-3xl mr-2"></i>
            <span className="text-[#263045]">IT consultancy</span>
          </p>
        </div>
      </div>

      <div className=" flex justify-center col-span-1 items-center h-auto">
        <div className="h-28 rounded-[3px] flex justify-center items-center bg-[#f6f6f6] w-72">
          <p className=" flex items-center">
            <i className="fa-solid fa-swatchbook  text-[#263045] text-3xl mr-2"></i>
            <span className="text-[#263045]">UI/UX strategy</span>
          </p>
        </div>
      </div>

      <div className=" flex justify-center col-span-1 items-center h-auto">
        <div className="h-28 rounded-[3px] flex justify-center items-center bg-[#f6f6f6] w-72">
          <p className=" flex items-center">
            <i className="fa-solid fa-shield-halved  text-[#263045] text-3xl mr-2"></i>
            <span className="text-[#263045]">Cyber security</span>
          </p>
        </div>
      </div>

      <div className=" flex justify-center col-span-1 items-center h-auto">
        <div className="h-28 rounded-[3px] flex justify-center items-center bg-[#f6f6f6] w-72">
          <p className=" flex items-center">
            <i className="fa-solid fa-code text-[#263045] text-3xl mr-2"></i>
            <span className="text-[#263045]">IT Development</span>
          </p>
        </div>
      </div>
    </div>
  );
}
