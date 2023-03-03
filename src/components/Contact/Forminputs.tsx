import { useState } from "react";
import { sendData } from "../../redux/reducers/contactReducer";
import { useAppDispatch } from "../../redux/store";

interface IForminputs {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

interface IFunc {
  handleSend(e: React.FormEvent<HTMLFormElement>): void;
  handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): any;
}

export default function Forminputs() {
  const [form, setForm] = useState<IForminputs>({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange: IFunc["handleChange"] = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const dispatch = useAppDispatch();

  const handleSubmit: IFunc["handleSend"] = (e) => {
    e.preventDefault();
    dispatch(sendData(form));
    setForm({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-full justify-center flex mb-20 items-center ">
      <div className="lg:w-4/5 flex flex-col sm:w-11/12 md:w-4/5 xl:w-3/5">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className=" flex flex-col gap-8 h-auto w-full"
        >
          <div
            className="w-full grid gap-12
          xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1"
          >
            <label
              className="text-[#243045]
              flex flex-col items-start outline-none
            text-normal font-medium"
              htmlFor="name"
            >
              Full name
              <input
                required={true}
                onChange={(e) => handleChange(e)}
                placeholder="Full name "
                value={form.name}
                id="name"
                className="mt-1 h-16 bg-[#f8f8f8]
              w-full placeholder:text-[#243045] indent-6 outline-none focus:text-[#243045] rounded-[3px] text-sm col-span-1 "
                type="text"
              />
            </label>

            <label
              className="text-[#243045]
              flex flex-col items-start outline-none
            text-normal font-medium"
              htmlFor="name"
            >
              Email adress
              <input
                required={true}
                onChange={(e) => handleChange(e)}
                placeholder="Email adress"
                value={form.email}
                id="email"
                className="mt-1 h-16 bg-[#f8f8f8]
              w-full placeholder:text-[#243045] indent-6 outline-none focus:text-[#243045] rounded-[3px] text-sm col-span-1 "
                type="text"
              />
            </label>
          </div>

          <div
            className="w-full grid gap-12
          xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1"
          >
            <label
              className="text-[#243045]
              flex flex-col items-start outline-none
            text-normal font-medium"
              htmlFor="name"
            >
              Phone number
              <input
                required={true}
                onChange={(e) => handleChange(e)}
                placeholder="Phone number"
                value={form.number}
                id="number"
                className="mt-1 h-16 bg-[#f8f8f8]
              w-full placeholder:text-[#243045] indent-6 outline-none focus:text-[#243045] rounded-[3px] text-sm col-span-1 "
                type="number"
              />
            </label>

            <label
              className="text-[#243045]
              flex flex-col items-start outline-none
            text-normal font-medium"
              htmlFor="name"
            >
              Subject
              <input
                required={true}
                onChange={(e) => handleChange(e)}
                placeholder="Write subject "
                value={form.subject}
                id="subject"
                className="mt-1 h-16 bg-[#f8f8f8]
              w-full placeholder:text-[#243045] indent-6 outline-none focus:text-[#243045] rounded-[3px] text-sm col-span-1 "
                type="text"
              />
            </label>
          </div>

          <label
            className="text-[#243045]
              flex flex-col items-start outline-none
            text-normal font-medium"
            htmlFor="name"
          >
            Message
            <textarea
              required={true}
              onChange={(e) => handleChange(e)}
              placeholder="Write message"
              value={form.message}
              id="message"
              className="mt-1 bg-[#f8f8f8] pt-4
           w-full placeholder:text-[#243045] placeholder:top-4 relative  indent-6 outline-none focus:text-[#243045] rounded-[3px] text-sm col-span-1 "
              rows={10}
            ></textarea>
          </label>
          <div className="w-full flex justify-center items-center">
            <button
              className="text-white bg-[#243045] px-8 py-3
            flex items-center justify-center rounded-[3px] "
            >
              <span> Send message</span>{" "}
              <span className="mt-[2px] ml-1 text-normal"> {">>"}</span>
            </button>
          </div>
        </form>
        <div
          className="w-full gap-12 mt-16 grid 
        xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1"
        >
          <div className="col-span-1 rounded-[3px]  bg-[#f8f8f8] h-52 py-3 ">
            <div className="flex  justify-center items-center ">
              <i className="px-6 py-6 text-[#243045] text-3xl rounded-full bg-white fa-solid fa-envelope" />
            </div>
            <div className="flex  flex-col justify-center items-center ">
              <span className="text-lg my-2 text-[#243045]">Email adress</span>
              <p className="text-[#5F636B] text-sm text-center">
                info.kodaze@gmail.com
              </p>
            </div>
          </div>

          <div className="col-span-1 rounded-[3px]  bg-[#f8f8f8] h-52 py-3 ">
            <div className="flex  justify-center items-center ">
              <i className="px-6 py-6 text-[#243045] text-3xl rounded-full bg-white fa-solid fa-phone" />
            </div>
            <div className="flex  flex-col justify-center items-center ">
              <span className="text-lg my-2 text-[#243045]">Phone number</span>
              <p className="text-[#5F636B] text-sm text-center">
              +994 55 230 52 30
              </p>
            </div>
          </div>

          <div className="col-span-1 rounded-[3px]  bg-[#f8f8f8] h-52 py-3 ">
            <div className="flex  justify-center items-center ">
              <i className="px-6 py-6 text-[#243045] text-3xl rounded-full bg-white fa-solid fa-location-dot" />
            </div>
            <div className="flex  flex-col justify-center items-center ">
              <span className="text-lg my-2 text-[#243045]">Location</span>
              <p className="text-[#5F636B] text-sm text-center">
              83A Matbuat ave., Baku, Az

              </p>
            </div>
          </div>
        </div>
        <iframe
          title="location of kodaze company"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.908007861395!2d-0.12577288449632315!3d51.51490367963626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab37652b%3A0x22220c3f07824033!2sShop%2071%2C%20ALG%20ID%20Cards%20t%2Fa%20The%20Lanyard%2C%2075%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2s!4v1676500150509!5m2!1sen!2s"
          className="w-full h-96 rounded-[3px] mt-16"
        ></iframe>
      </div>
    </div>
  );
}
