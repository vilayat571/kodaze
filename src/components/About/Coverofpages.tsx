import { Link } from "react-router-dom";

interface ICoverofpages {
  src: string;
  title: string;
  text: string;
}

export default function Coverofpages(props: ICoverofpages) {
  return (
    <div className="h-auto w-full ">
      <img src={props.src} className="h-[475px] w-full object-cover" alt="" />
      <div
        className="flex flex-col items-center 
w-full h-[475px] object-cover bg-black opacity-60 absolute 
md:top-[64px] xl:top-[104px] lg:top-[104px] sm:top-[64px]"
      ></div>
      <div className="flex justify-center items-center w-full">
        <div className="xl:w-3/5 lg:w-4/5 sm:w-4/5 md:w-4/5 flex flex-col items-start absolute  h-auto top-80">
          <span className="text-[36px] h-auto text-white font-semibold">
            {props.title}
          </span>
          <p className="text-white">
            <Link to={"/"}>Home </Link> {">"} {props.text}
          </p>
        </div>
      </div>
    </div>
  );
}
