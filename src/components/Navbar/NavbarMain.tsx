import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Navforbigsize from "./Navforbigsize";

export default function NavbarMain() {
  const [mode, setMode] = useState(false);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="xl:w-3/5 lg:w-4/5 sm:w-4/5 md:w-4/5 flex justify-between items-center  h-16">
        <Link to={"/"}>
          <img src={logo} className=" object-cover w-40" alt="kodaze logo" />
        </Link>
        <Navforbigsize />
        <button className="xl:hidden lg:hidden sm:block md:hidden" onClick={() => setMode(!mode)}>
          <i className="text-2xl text-[#243045]  fa-solid fa-bars"></i>
        </button>
        <div
          className={`flex flex-col w-full h-full absolute left-0 top-0 text-white z-10 bg-[#243045]
         ${mode ? "flex" : "hidden"}`}
        >
          <div  className="flex  mt-10 justify-between items-center px-10">
          <Link to={"/"}>
          <img
            src="https://kodaze.com/wp-content/uploads/2022/07/logo-kodaze-1536x371.png"
            className=" w-1/2"
            alt="kodaze fotter logo"
          />
        </Link>

        <button className="w-48 text-white text-2xl " onClick={() => setMode(!mode)}>
        <i className="fa-solid fa-xmark"></i>
        </button>
          </div>
          <div className="text-lg w-full h-auto mt-4 px-10 flex flex-col gap-2">
            <Link  to="/blogs/">
              Blog
            </Link>
            <Link  to="/services">
              Services
            </Link>
            <Link  to="/aboutus">
              About us
            </Link>
            <Link  to="/contactus">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
