import { useState } from "react";
import { sendDetails } from "../../redux/reducers/servicesReducer";
import { useAppDispatch } from "../../redux/store";

export default function Formservice() {
  const [mode, setMode] = useState<number>(1);

  const changeMode = () => {
    mode!==2 ? form.name !== "" &&
    form.email !== "" &&
    form.website !== "" &&
    form.cName !== "" && form.phone!=='' ? setMode(2) : alert("Any field can not be blank") :
    form.message !== "" ? setMode(3) : alert('Any field not be blank');
  };

  const changeMode2 = () => {
    setMode(mode - 1);
  };

  function showStepper() {
    switch (mode) {
      case 1:
        return (
          <div className="w-full gap-5 flex flex-col">
            <div className=" xl:gap-4 flex  w-full  ">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                id="name"
                value={form.name}
                placeholder="Full name"
                required={true}
                className="mt-1 h-16  bg-[#eee] placeholder:text-[#243045] indent-6 
  outline-none focus:text-[#243045] rounded-[3px] text-sm w-full"
              />
            </div>

            <div className=" gap-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 w-full">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                id="email"
                value={form.email}
                placeholder="Email adress"
                required={true}
                className="mt-1 h-16 col-span-1 bg-[#eee] placeholder:text-[#243045] indent-6 
  outline-none focus:text-[#243045] rounded-[3px] text-sm w-full"
              />
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                id="phone"
                value={form.phone}
                placeholder="Phone number"
                required={true}
                className="mt-1 h-16 col-span-1 bg-[#eee] placeholder:text-[#243045] indent-6 
  outline-none focus:text-[#243045] rounded-[3px] text-sm w-full"
              />
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 gap-5  w-full  ">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                id="cName"
                value={form.cName}
                placeholder="Company name"
                required={true}
                className="mt-1 h-16 col-span-1 bg-[#eee] placeholder:text-[#243045] indent-6 
  outline-none focus:text-[#243045] rounded-[3px] text-sm w-full"
              />
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                id="website"
                value={form.website}
                placeholder="Company website"
                required={true}
                className="mt-1 h-16 col-span-1 bg-[#eee] placeholder:text-[#243045] indent-6 
  outline-none focus:text-[#243045] rounded-[3px] text-sm w-full"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="w-full gap-8 flex  justify-center flex-col  ">
            <div className=" gap-4 flex  w-full  ">
              <textarea
                onChange={(e) => handleChange(e)}
                rows={8}
                id="message"
                value={form.message}
                placeholder="Message"
                required={true}
                className="mt-1 pt-5 bg-[#eee] placeholder:text-[#243045] indent-6 
          outline-none focus:text-[#243045] rounded-[3px] text-sm w-full"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="w-full gap-5 flex flex-col">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 gap-5  w-full  ">
              <input
                onChange={(e) => handleChange(e)}
                type="date"
                id="date"
                value={form.date}
                placeholder="Company name"
                required={true}
                className="mt-1 h-16 col-span-1 bg-[#eee] placeholder:text-[#243045] indent-6 
            outline-none focus:text-[#243045] rounded-[3px] text-sm w-full"
              />
              <input
                onChange={(e) => handleChange(e)}
                type="time"
                id="hour"
                value={form.hour}
                placeholder="Company website"
                required={true}
                className="mt-1 h-16 col-span-1 bg-[#eee] placeholder:text-[#243045] indent-6 
            outline-none focus:text-[#243045] rounded-[3px] text-sm w-full"
              />
            </div>
          </div>
        );
        
    }
  }

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    cName: "",
    website: "",
    message: "",
    date: "",
    hour: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const dispatch = useAppDispatch();

  const handleSubmit = () => {

      dispatch(sendDetails(form));

      setTimeout(() => {
        setMode(1)
      }, 1500);
      
    setForm({
      name: "",
      email: "",
      phone: "",
      cName: "",
      website: "",
      message: "",
      date: "",
      hour: "",
    });
  };

  return (
    <div className=" flex flex-col justify-start items-center w-full h-auto  mb-2">
      <div
        className="flex mt-4 justify-between items-center  
      lg:w-3/5 md:w-11/12 sm:w-full mx-6 text-center xl:w-3/5"
      >
        <div className="flex flex-col justify-center w-96 h-24   items-center">
          <span
            className={`w-8 text-xs outline-none h-8 flex justify-center items-center 
            rounded-full border-[1.6px]   ${
              mode !== 1
                ? "bg-[#39b54a]  text-white"
                : " text-[#39b54a] bg-transparent"
            }
            border-[#39b54a]`}
          >
            1
          </span>
          <span className="text-xs mt-1  text-[#39b54a]">Company info</span>
        </div>
        <div className={`w-10/12 mb-3 border-t  border-[#A3A3A3]`}></div>
        <div className="flex flex-col  justify-center w-96 h-24    items-center">
          <span
            className={`w-8 text-xs  h-8 flex justify-center items-center 
            rounded-full border-[1.6px] text-[#646464]
            ${
              mode !== 2 && mode !== 1
                ? "bg-[#39b54a] text-white"
                : " text-[#646464] bg-transparent"
            }
            ${
              mode !== 1
                ? "border-[#39b54a]"
                : "border-[#646464] text-[#646464]"
            }`}
          >
            2
          </span>
          <span
            className={` ${mode !== 1 ? "text-[#39b54a]" : "text-[#646464]"} 
          text-xs mt-1  `}
          >
            Project info
          </span>
        </div>
        <div className={`w-10/12 mb-3 border-t  border-[#A3A3A3]`}></div>
        <div className="flex flex-col justify-center w-96 h-24   items-center">
          <span
            className={`w-8 text-xs  h-8 flex justify-center items-center 
            rounded-full border-[1.6px]
        
            ${
              mode === 3
                ? "border-[#39b54a]"
                : "border-[#646464] text-[#646464]"
            }`}
          >
            3
          </span>
          <span
            className={` ${mode === 3 ? "text-[#39b54a]" : "text-[#646464]"} 
          text-xs mt-1  `}
          >
            Appointment
          </span>
        </div>
      </div>

      <form className="flex lg:w-3/5 mx-6 md:w-4/5 sm:w-11/12 xl:w-3/5 my-8">
        {showStepper()}
      </form>

      <div className="flex justify-center mb-16  items-center">
        {mode > 1 && (
          <button
            onClick={() => changeMode2()}
            className="flex items-center px-14 mx-4 rounded-[3px] py-3 bg-[#6a7272] text-white"
          >
            <i className="rotate-180 text-sm mr-2 text-white fa-solid fa-arrow-right" />
            <span>Back</span>
          </button>
        )}
        <button
          onClick={mode !== 3 ? () => changeMode() : () => handleSubmit()}
          className="flex items-center px-14 mx-4 rounded-[3px] py-3      bg-[#243045] text-white"
        >
          <span>Next</span>
          <i className="text-sm ml-2 text-white fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}
