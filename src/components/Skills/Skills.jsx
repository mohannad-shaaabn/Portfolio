import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

export default function Skills() {
  return (
    <section
      id="skills"
      className=" min-h-screen flex flex-col items-center p-5 bg-[url('/imges/Skills.png')] bg-cover bg-center"
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
        <h1 className="text-4xl text-center  text-tirquoize">Skills</h1>
        <div className="relative">
          <div className="w-[90px] h-0 border-t-2 border-tirquoize mt-2 opacity-70 mx-auto "></div>
          <span className="absolute left-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
          <span className="absolute right-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
        </div>
      </div>
      <h2 className="text-white text-center font-second mt-3 font-light">
        I am starving to never stop learning and improving
      </h2>
      <div className="bg-[#98FAEC] border-l-4 border-[#0C73B8] text-center py-1 px-5 rounded-md mt-10">
        <i className="fa-solid fa-desktop" />
        <h3 className="font-second">Web Development</h3>
        <h4 className="font-second text-[10px] tracking-wider text-[#43454D]">
          HTML-JS-CSS-RECT
        </h4>
      </div>
      <div className="flex flex-wrap justify-center gap-16 text-5xl mt-20">
         <div className="flex flex-col items-center text-center">
          <div className="bg-[#E54F26] p-7 rounded-full flex items-center justify-center">
            <FaHtml5 className="text-white text-4xl" />
          </div>
          <h3 className="mt-2 font-second text-2xl text-[#E54F26] ">HTML</h3>
        </div>
         <div className="flex flex-col items-center text-center">
          <div className="bg-[#0C73B8] p-7 rounded-full flex items-center justify-center">
            <FaCss3Alt className="text-white text-4xl" />
          </div>
          <h3 className="mt-2 font-second text-2xl text-[#0C73B8] ">CSS</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#F7DF1E] p-7 rounded-full flex items-center justify-center">
            <FaJsSquare className="text-black text-4xl" />
          </div>
          <h3 className="mt-2 text-2xl font-second text-[#F7DF1E]">JS</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#61DAFB] p-7 rounded-full flex items-center justify-center">
            <FaReact className="text-white text-4xl" />
          </div>
          <h3 className="mt-2 font-second text-2xl text-[#61DAFB] ">REACT</h3>
        </div>

        
      </div>
    </section>
  );
}
