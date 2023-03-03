export default function Aboutsolution() {
  return (
    <div
      className=" mt-24 mb-12 gap-4 xl:w-3/5 lg:w-4/5 sm:w-4/5 md:w-4/5
        grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-2"
    >
      <div className=" col-span-1 ">
        <span className="text-[34px] font-semibold leading-10 text-[#263045]">
          Get's IT Solutions For
          <br />
          Expert Consultants
        </span>
        <p className="text-[#646464] text-normal w-4/5 my-8 ">
          We are fully functional, robust and scalable CRM and ERP applications
          which focuses on preparation and programming service providers.
        </p>
        <div className="flex flex-col items-start justify-between">
          <div className="flex items-start">
            <div className="w-20 flex justify-center items-center h-14 bg-[#E6F0FB] rounded-[3px]">
              <i className=" text-2xl text-[#086AD7] fa-sharp fa-solid fa-users"></i>
            </div>
            <div className="flex bottom-1 flex-col relative left-4">
              <span className=" text-lg text-[#211E3B] font-medium">
                Professional Consultants
              </span>
              <p className="text-[#646464] w-2/3 text-sm">
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque
              </p>
            </div>
          </div>

          <div className="flex items-start mt-6">
            <div className="w-20 flex justify-center items-center h-14 bg-[#E6F0FB] rounded-[3px]">
              <i className=" text-2xl text-[#086AD7] fa-solid fa-swatchbook"></i>
            </div>
            <div className="flex bottom-1 flex-col relative left-4">
              <span className=" text-lg text-[#211E3B] font-medium">
                Designing some pages
              </span>
              <p className="text-[#646464] w-2/3 text-sm">
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="xl:mt-0 flex flex-col 
      lg:items-end sm:items-center md:items-center xl:items-end
       lg:mt-0 md:mt-8 sm:mt-8 h-auto w-auto col-span-1"
      >
        <img
          src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/about-us.jpg"
          className="w-11/12"
          alt="about cover"
        />
      </div>
    </div>
  );
}
