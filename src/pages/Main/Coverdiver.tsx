export default function Coverdiver() {
  return (
    <div
      className="xl:flex lg:flex md:hidden sm:hidden justify-center flex-col 
    absolute top-[485px] items-center  w-full h-auto"
    >
      <div
        className="xl:w-3/5 lg:w-[1080px]  sm:w-4/5 md:w-4/5 
    gap-4 text-white grid xl:grid-cols-4  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
      >
        <div
          className="text-[#263045] flex flex-col pt-12 pb-12 px-6 text-center
   rounded-[3px]  bg-white items-center col-span-1 h-auto border"
        >
          <button className="w-12 h-12 flex justify-center items-center rounded-full  text-xl">
            <i className="text-3xl fa-brands fa-digital-ocean"></i>
          </button>
          <span className="text-normal mb-2 mt-2">Product enginnering</span>
          <p className="text-sm text-[#3330">
            Solve your unique business problems by building impactful software
            products.
          </p>
        </div>
        <div
          className="text-[#263045] flex flex-col pt-12 pb-12 px-6 text-center
   rounded-[3px]  bg-white items-center col-span-1 h-auto border"
        >

          <button className="w-12 h-12 flex justify-center items-center rounded-full  text-xl">
            <i className=" fa-solid text-3xl fa-pen-to-square"></i>
          </button>

          <span className="text-normal mb-2 mt-2">
            App Modernization
          </span>
          <p className="text-sm text-[#3330">
            Make your application future ready by improving the tech stack,
            code, and cloud infrastructure.
          </p>
        </div>
        <div
          className="text-[#263045] flex flex-col px-6 text-center
   rounded-[3px]  bg-white items-center col-span-1 h-auto pt-12 pb-12 border"
        >
          <button className="w-12 h-12 flex justify-center items-center rounded-full  text-xl">
            <i className=" fa-solid text-3xl fa-code"></i>
          </button>
          <span className="text-normal mb-2 mt-2">Complex Development</span>
          <p className="text-sm text-[#3330">
            Kodaze was built to handle complex core engineering tasks in a
            fast-paced growth environment.
          </p>
        </div>
        <div
          className="text-[#263045] flex flex-col pt-12 pb-12 px-6 text-center
   rounded-[3px]  bg-white items-center col-span-1 h-auto  border"
        >
          <button className="w-12 h-12 flex justify-center items-center rounded-full  text-xl">
            <i className="text-3xl fa-solid fa-ruler"></i>
          </button>
          <span className="text-normal mb-2 mt-2">Strategy and Planning</span>
          <p className="text-sm text-[#3330">
            We bring the right people together to challenge established thinking
            and drive transform in 2020
          </p>
        </div>
      </div>
    </div>
  );
}
