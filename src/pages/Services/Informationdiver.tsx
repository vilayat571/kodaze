export default function Informationdiver() {
  return (
    <div className="w-full mb-16 flex justify-center items-center">
      <div
        className="grid lg:w-[1100px] md:w-4/5 sm:w-4/5 xl:w-[1290px] gap-4
      lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-3"
      >
        <div className="col-span-1 border-0 outline-0 shadow-lg rounded-[3px]  bg-[#f8f8f8] h-auto py-3 ">
          <div className="flex  justify-center items-center ">
            <i
              className="px-6 py-6 text-[#243045] text-3xl rounded-full bg-white  
          fa-solid fa-people-roof"
            />
          </div>
          <div className="flex  flex-col justify-center items-center ">
            <span className="text-lg my-1 text-[#243045]">
              Managed Agile Teams
            </span>
            <p className="text-[#5F636B] text-sm text-center px-5">
              Our engagement model of remote agile teams has been built and
              refined over a long period of time. You don’t just get vetted
              engineers but a proven and transparent process with a successful
              track record. They immerse themselves in your project, maintaining
              your company culture and working in line with your strategic
              goals.
            </p>
          </div>
        </div>

        <div className="col-span-1 border-0 outline-0 shadow-lg rounded-[3px]  bg-[#f8f8f8] h-auto py-3 ">
          <div className="flex  justify-center items-center ">
            <i className="px-6 py-6 text-[#243045] text-3xl rounded-full bg-white fa-solid fa-code"></i>
          </div>
          <div className="flex  flex-col justify-center items-center ">
            <span className="text-lg my-2 text-[#243045]">
              Complex Core Development
            </span>
            <p className="text-[#5F636B] text-sm text-center px-5">
              The traditional outsourcing model is broken and doesn’t support
              innovation and rapid change. The established vendors are built
              only to work on large-scale peripheral engineering tasks. Kodaze
              was built with the purpose of doing complex core engineering work
              in a high growth environment.
            </p>
          </div>
        </div>

        <div className="col-span-1 border-0 outline-0 shadow-lg rounded-[3px]  bg-[#f8f8f8] h-auto py-3 ">
          <div className="flex  justify-center items-center ">
            <i className="px-6 py-6 text-[#243045] text-3xl rounded-full bg-white fa-sharp fa-solid fa-weight-scale"></i>
          </div>
          <div className="flex  flex-col justify-center items-center ">
            <span className="text-lg my-2 text-[#243045]">
              Scale Without Limits
            </span>
            <p className="text-[#5F636B] text-sm text-center px-5">
              Our flexible global delivery center transforms your engineering
              from being bottlenecks to growth drivers. We help you to identify
              and solve the critical business challenges with proven technology
              practices that align with your customer needs and organizational
              challenges. Easily ramp up, scale and pivot quickly, with minimal
              friction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
