import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className=" h-screen w-full flex justify-center items-center ">
      <div className="flex flex-col text-[#243045] text-center">
        <h1 className="text-[125px]  font-semibold">404</h1>
        <div className="relative bottom-5">
          <span className="text-lg text-[#243045] ">Page not found</span>
          <p className="mt-1 text-normal">
            The page you are looking for doesn't
            <br />
            or another error ocured.
            <Link className="text-blue-600 underline text-normal ml-2" to="/">
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
