export default function Promoblocks() {
  return (
    <div className="grid mt-20 xl:w-3/5 lg:w-4/5 sm:w-4/5 md:w-4/5
    lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 gap-4 mb-12">
    <div className=" flex justify-center items-center h-24">
      <div className="h-24 rounded-[3px] flex justify-center items-center bg-[#f6f6f6] w-72">
        <p className=" flex items-center">
          <i className="fa-solid fa-globe text-[#263045] text-3xl mr-2"></i>
          <span className="text-[#263045]">IT consultancy</span>
        </p>
      </div>
    </div>

    <div className=" flex justify-center items-center h-24">
      <div className="h-24 rounded-[3px] flex justify-center items-center bg-[#f6f6f6] w-72">
        <p className=" flex items-center">
          <i className="fa-solid fa-swatchbook  text-[#263045] text-3xl mr-2"></i>
          <span className="text-[#263045]">UI/UX strategy</span>
        </p>
      </div>
    </div>

    <div className=" flex justify-center items-center h-24">
      <div className="h-24 rounded-[3px] flex justify-center items-center bg-[#f6f6f6] w-72">
        <p className=" flex items-center">
          <i className="fa-solid fa-shield-halved  text-[#263045] text-3xl mr-2"></i>
          <span className="text-[#263045]">Cyber security</span>
        </p>
      </div>
    </div>

    <div className=" flex justify-center items-center h-24">
      <div className="h-24 rounded-[3px] flex justify-center items-center bg-[#f6f6f6] w-72">
        <p className=" flex items-center">
          <i className="fa-solid fa-code text-[#263045] text-3xl mr-2"></i>
          <span className="text-[#263045]">IT Development</span>
        </p>
      </div>
    </div>
  </div>
  )
}
