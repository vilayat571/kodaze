import { Link } from "react-router-dom";

export default function Navforbigsize() {
  return (
    <div className="xl:w-1/3 lg:w-1/3 lg:flex md:flex sm:hidden xl:flex 
    text-[#243045] justify-between items-center text-normal ">
      <Link className="text-normal px-2 " to="/blogs/">
        Blog
      </Link>
      <Link
        className="text-normal px-2 "
        to="/services"
      >
        Services
      </Link>
      <Link
        className="text-normal px-2 "
        to="/aboutus"
      >
        About us
      </Link>
      <Link
        className="text-normal px-2 "
        to="/contactus"
      >
        Contact us
      </Link>

    </div>
  );
}
