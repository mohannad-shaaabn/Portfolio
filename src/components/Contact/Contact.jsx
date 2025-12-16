import React, { useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kr968io", // service_id من EmailJS
        "template_nptev25", // template_id من EmailJS
        form.current,
        "AnLm6kBmsRocem_qo" // public_key من EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Send successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Not sent , try again");
        }
      );
  };

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center p-5 bg-[#1A1E23]"
    >
      <div className="flex flex-col items-center scale-75">
        {/* دائرة الماوس */}
        <div className="w-6 h-10 border-2 border-tirquoize rounded-full flex justify-center relative">
          <div className="w-1 h-2 bg-tirquoize rounded-full mt-2 animate-bounce"></div>
        </div>
        {/* الخط */}
        <div className="w-0 h-12 border-l-2 border-white border-dashed mt-2 opacity-70"></div>
        <div className="w-1 h-1 bg-white rounded-full mt-1"></div>
      </div>
      <div className=" mt-5 felx justify-center items-center">
        <h1 className="text-4xl text-center  text-tirquoize">Contact</h1>
        <div className="relative">
          <div className="w-[150px] h-0 border-t-2 border-tirquoize mt-2 opacity-70 mx-auto "></div>
          <span className="absolute left-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
          <span className="absolute right-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
        </div>
      </div>
      <h2 className="text-white text-center font-second mt-3 font-light">
        I’m currently available for freelance work
      </h2>
      <h1 className="text-tirquoize font-second mt-20 inline-block border border-[2px] py-2 px-4 rounded-tl-2xl border-tirquoize text-2xl rounded-br-2xl">
        Send Me A Message
      </h1>
      <form ref={form} onSubmit={sendEmail} className="mt-10 w-[58%] mx-auto">
        <div className="grid md:grid-cols-2 md:gap-24">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-tirquoize appearance-none focus:outline-none focus:ring-0 focus:border-tirquoize peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute text-xs font-second text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-tirquoize peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Enter your name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-tirquoize appearance-none focus:outline-none focus:ring-0 focus:border-tirquoize peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="absolute text-xs font-second text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-tirquoize peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Enter your email
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full my-10  group">
          <input
            type="text"
            name="floating_message"
            id="floating_message"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-tirquoize appearance-none focus:outline-none focus:ring-0 focus:border-tirquoize peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="absolute text-xs font-second text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-tirquoize peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Enter your needs
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-tirquoize hover:bg-tirquoize/50 hover:duration-300 hover:transition-all text-black flex justify-center items-center gap-3 py-2 px-4 rounded-full"
          >
            Send Message <i className="fa-regular fa-paper-plane" />
          </button>
        </div>
      </form>

    </section>
  );
}
