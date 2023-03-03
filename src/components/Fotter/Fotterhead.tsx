import { Link } from "react-router-dom";

interface IFunc {
  handleTop(): void;
}

export default function Fotterhead() {
  const handleTop: IFunc["handleTop"] = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="xl:w-3/5 lg:w-4/5 sm:w-4/5 md:w-4/5 flex flex-col  text-white">
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
        <div className="h-auto">
          <img
            src="https://kodaze.com/wp-content/uploads/2022/07/logo-kodaze-1536x371.png"
            className="lg:w-1/3 xl:w-1/4 sm:w-1/4 md:w-1/5 object-cover"
            alt="kodaze fotter logo"
          />
          <p className="text-[#e5e5e5] text-[15px] mt-3 ">
            We are the best world Information Technology Company. Providing the
            highest quality in hardware, Software & Network solutions.
          </p>
          <p className="text-[#e5e5e5] text-[15px] mt-3 ">
            Talk To Our Support
            <br />
            +1 002-123-4567
          </p>
        </div>

        <div className="flex xl:mt-0 md:mt-8 sm:mt-8 lg:mt-0 text-[#e5e5e5] lg:justify-center md:justify-start sm:justify-start xl:justify-center items-center ">
          <div className=" flex flex-col justify-center ">
            <h1 className="text-xl font-medium text-[#fff] mb-2">
              Quick links
            </h1>
            <Link className="mb-1" to={"/"}>
              {">Home"}
            </Link>
            <Link className="mb-1" to={"/services"}>
              {">Services"}
            </Link>
            <Link className="mb-1" to={"/blogs"}>
              {">Blogs"}
            </Link>
            <Link className="mb-1" to={"/contactus"}>
              {">Contact us"}
            </Link>
            <Link className="mb-1" to={"/aboutus"}>
              {">About us"}
            </Link>
            <Link className="mb-1" to={"/services"}>
              {">Consultation"}
            </Link>
          </div>
        </div>

        <div
          className="xl:mt-0 md:mt-8 sm:mt-8 lg:mt-0 flex
      xl:justify-end lg:justify-end md:justify-start sm:justify-start
       text-[#e5e5e5] items-start"
        >
          <div className=" flex flex-col justify-center ">
            <h1 className="text-xl font-medium text-[#fff] ">Follow us on</h1>
            <p className="text-[#e5e5e5] text-[15px] mt-2 ">
              Follow us today for hints, tips
              <br />
              and the latest product news
            </p>
            <p className=" flex mt-3">
              <i className="text-white border-[1px] border-white mr-1 px-3 py-3 rounded-full fa-brands fa-twitter"></i>
              <i className="text-white border-[1px] border-white mr-1 px-3 py-3 rounded-full fa-brands fa-linkedin"></i>
              <i className="text-white border-[1px] border-white mr-1 px-3 py-3 rounded-full fa-brands fa-facebook"></i>
              <i className="text-white border-[1px] border-white mr-1 px-3 py-3 rounded-full fa-brands fa-google"></i>
            </p>
          </div>
        </div>
      </div>

      <hr className="w-full mb-8 mt-16 border-[#646464] " />
      <div className="flex justify-between mb-1 items-center">
        <div className="text-[#e5e5e5] text-sm ">
          Copyright © 2023 all rights powered by Kodaze
        </div>
        <button
          onClick={() => handleTop()}
          className="border-none outline-nonoe"
        >
          <i
            className="px-3 py-2 rounded-[3px] border border-[#fff] text-normal text-white  
        fa-solid fa-arrow-up"
          />
        </button>
      </div>
    </div>
  );
}
