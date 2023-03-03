import Navheaditem from "../../atoms/Navbar/Navheaditem";

export default function NavbarHeader() {
  return (
    <div className="w-full xl:flex md:hidden lg:flex sm:hidden h-10 flex justify-center  items-center bg-[#263045]  text-white">
      <div
        className=" xl:w-3/5 lg:w-4/5 sm:w-full md:w-4/5
       h-full flex justify-between items-center"
      >
        <div className="  lg:flex xl:flex">
          <Navheaditem
            icon1={<i className="fa-solid fa-location-dot" />}
            text1="71-75, Shelton Street, London, United Kingdom"
            icon2={<i className="fa-solid fa-envelope" />}
            text2="info@kodaze.com"
          />
        </div>
        <div className=" justify-center items-center  sm:w-full md:w-auto lg:w-auto xl:w-auto">
          <Navheaditem
            icon1={<i className="fa-solid fa-clock" />}
            text1="Office Hour : 08:00am - 6:00pm"
            icon2={<i className="fa-solid fa-phone" />}
            text2="+44 7898478933"
          />
        </div>
      </div>
    </div>
  );
}
