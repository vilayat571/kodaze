import cover1 from "../../assets/images/homecover.png";
import { Link } from "react-router-dom";
import Coverdiver from "../../pages/Main/Coverdiver";

export default function CoverDiv() {
  return (
    <div className=" xl:mb-16 w-full ">
      <img src={cover1} className="h-[580px] w-full object-cover" alt="" />
      <div
        className="flex flex-col items-center 
    w-full h-[580px] object-cover bg-black opacity-60 absolute 
    sm:top-[64px] xl:top-[104px] lg:top-[104px] md:top-[64px]"
      ></div>
      <div className="flex justify-center items-center w-full">
        <div
          className="
      xl:w-3/5 lg:w-4/5 sm:w-4/5 md:w-4/5
        flex flex-col items-start absolute top-64"
        >
          <p className="relative lg:top-0 md:top-0 sm:top-3  xl:top-0  flex items-center text-sm text-white ">
            <span>Agile in mind, spirit, and speed </span>
            <i className="ml-2  fa-regular fa-arrow-right rotate-90"></i>
          </p>
          <p className="text-[40px] xl:block lg:block sm:hidden md:block font-medium xl:w-full md: lg:w-2/3 text-white mb-4">
            Enginnering the next best
            <br />
            thing for the digital world
          </p>
          <p className="text-3xl py-4 xl:hidden lg:hidden sm:block md:hidden font-medium 
           text-white ">
            Enginnering the next best
         
            thing for the digital world
          </p>
          <Link
            className=" w-[200px] flex items-center text-normal text-[#ffffff] px-8 rounded-[3px]
           outline-0 py-3  bg-[#263045]"
            to="#"
          >
            <span>Meet with us</span>
            <i className="ml-2  fa-regular fa-arrow-right"></i>
          </Link>
        </div>
        {/* slider */}
      <Coverdiver />
        {/* slider */}
      </div>
    </div>
  );
}
