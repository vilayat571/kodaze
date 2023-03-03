import Promodivs from "../../atoms/Main/Promodivs";

export default function Helpdiv() {
  return (
    <div className=" mb-32 w-full flex-col items-center justify-center flex ">
      <p className="w-full text-center text-3xl py-2 font-semibold text-[#263045]">
        We Help Your IT Buisness
      </p>

      <div className=" w-full h-auto mt-10 flex justify-center items-center">
        <div
          className="sm:w-11/12 xl:w-[1100px] md:w-4/5 lg:w-[1000px] gap-2 
      grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-4"
        >
          <div className=" flex justify-center items-center col-span-2">
            <img
              src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/feature_img.jpg"
              className=""
              alt=""
            />
          </div>

          <div className="col-span-2 w-full xl:mt-0 md:mt-12 sm:mt-12 py-8 lg:mt-0">
            <div className="col-span-2 mb-2 w-full ">
              <Promodivs />
            </div>

            <div className="col-span-2 w-full relative top-2">
              <div className=" rounded-[3px] py-4 px-5 bg-[#263045] text-white">
                <h1 className="text-lg mb-1 ">Why Kodaze</h1>
                <p className="text-sm">
                  We are fully functional, robust and scalable CRM and ERP
                  applications which focuses on preparation and programming
                  service provider we are a company. According to your business
                  goals coming and achieving maximum growth the right technology
                  to help you be using the possibilities “desktop”, “web” and
                  mobile applications we prepare.Our main goal is you resource
                  utilization with an appropriate budget for quality that
                  maximizes is to develop applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
