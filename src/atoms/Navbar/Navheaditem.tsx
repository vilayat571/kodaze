import { ReactNode } from "react";

interface INavheaditem {
  icon1: ReactNode;
  icon2: ReactNode;
  text1: string;
  text2: string;
}

export default function Navheaditem(props: INavheaditem) {
  return (
    <div className="text-xs flex items-center ">
      <p className="flex items-center">
        {props.icon1}
        <span className="ml-1"> {props.text1}</span>
      </p>
      <span className="mx-4 ">|</span>
      <p className="flex items-center">
        {props.icon2}
        <span className="ml-1"> {props.text2}</span>
      </p>
    </div>
  );
}
