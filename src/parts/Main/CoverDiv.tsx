import cover1 from "../../assets/images/homecover.png";
import Agiledivparent from "../../components/Main/Coverdiv/Agiledivparent";

export default function CoverDiv() {
  return (
    <div className=" xl:mb-16 w-full ">
      <img src={cover1} className="h-[580px] w-full object-cover" alt="" />
      <div
        className="flex flex-col items-center 
    w-full h-[580px] object-cover bg-black opacity-60 absolute 
    sm:top-[64px] xl:top-[104px] lg:top-[104px] md:top-[64px]"
      ></div>
      <Agiledivparent />
    </div>
  );
}
