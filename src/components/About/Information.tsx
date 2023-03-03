export default function Information() {
  return (
    <div className="w-full mb-12 mt-20 flex justify-center items-center">
      <div
        className="xl:w-3/5 lg:w-4/5 sm:w-4/5 md:w-4/5 gap-12 grid
       xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1"
      >
        <div className="col-span-1 flex flex-col">
          <span className="text-[36px] font-semibold text-[#243045]">
            Who we are?
          </span>
          <p className="mt-4 text-[#646464] text-normal">
            We are fully functional, robust and scalable CRM and ERP
            applications which focuses on preparation and programming service
            provider we are a company. Our main goal is you resource utilization
            with an appropriate budget for quality that maximizes is to develop
            applications. We are a fully functional, robust and scalable CRM and
            ERP application development and programming service company. KODAZE
            is your one-stop software development center that provides
            professional and efficient services to turn your ideas into
            successful products.
          </p>
    
        </div>
        <div className="col-span-1 ">
          <img
            className="rounded-[3px] w-11/12"
            src="https://img.freepik.com/premium-photo/night-office-business-people-teamwork-computer-planning-strategy-collaboration-together-with-diversity-employees-marketing-agency-staff-talking-innovation-ideas-kpi-vision-desktop_590464-87125.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
