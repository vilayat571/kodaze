import React from 'react'

export default function Firsterinformationdiver() {
  return (
    <div className='flex justify-center flex-col items-center mb-28 mt-16  w-full h-auto'>
         <div className="w-full text-center">
          <p className="text-3xl py-2 mb-4 font-semibold text-[#243045]">
            Our Professional Solution
          </p>
        </div>
        <div
          className="xl:w-[1200px] lg:w-[1100px]  sm:w-4/5 md:w-4/5 mt-4
         gap-4 text-white grid xl:grid-cols-4  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
         <div
            className="text-[#263045] shadow- flex flex-col pt-8 pb-12 px-6 text-center
        rounded-[3px]   items-center col-span-1 h-auto border"
          >
            <button className="w-12 h-12 flex justify-center items-center rounded-full  text-xl">
              <i className=" fa-regular fa-pen-to-square"></i>
            </button>
            <span className="text-normal mb-2 mt-2">Application Modernization</span>
            <p className='text-sm text-[#3330'>
              Make your application future ready by improving the tech stack,
              code, and cloud infrastructure.
            </p>
          </div>
          <div
            className="text-[#263045] shadow- flex flex-col pt-8 pb-12 px-6 text-center
        rounded-[3px]   items-center col-span-1 h-auto border"
          >
            <button className="w-12 h-12 flex justify-center items-center rounded-full  text-xl">
              <i className=" fa-regular fa-pen-to-square"></i>
            </button>
            <span className="text-normal mb-2 mt-2">Application Modernization</span>
            <p className='text-sm text-[#3330'>
              Make your application future ready by improving the tech stack,
              code, and cloud infrastructure.
            </p>
          </div>
          <div
            className="text-[#263045] shadow- flex flex-col px-6 text-center
        rounded-[3px]   items-center col-span-1 h-auto pt-8 pb-12 border"
          >
            <button className="w-12 h-12 flex justify-center items-center rounded-full  text-xl">
              <i className=" fa-regular fa-code"></i>
            </button>
            <span className="text-normal mb-2 mt-2">Complex  Development</span>
            <p className='text-sm text-[#3330'>
              Kodaze was built to handle complex core engineering tasks in a
              fast-paced growth environment.
            </p>
          </div>
          <div
            className="text-[#263045] shadow- flex flex-col pt-8 pb-12 px-6 text-center
        rounded-[3px]   items-center col-span-1 h-auto  border"
          >
            <button className="w-12 h-12 flex justify-center items-center rounded-full  text-xl">
              <i className="fa-regular fa-ruler"></i>
            </button>
            <span className="text-normal mb-2 mt-2">Strategy and Planning</span>
            <p className='text-sm text-[#3330'>
              We bring the right people together to challenge established
              thinking and drive transform in 2020
            </p>
          </div>
        </div>
    </div>
  )
}
