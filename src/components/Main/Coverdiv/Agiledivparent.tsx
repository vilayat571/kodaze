import Coverdiver from "../../../pages/Main/Coverdiver";
import Agilebediv from "./Agilebediv";

export default function Agiledivparent() {
  return (
    <div className="flex justify-center items-center w-full">
      <Agilebediv />
      <Coverdiver />
    </div>
  );
}
