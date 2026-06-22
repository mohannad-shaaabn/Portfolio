import React from "react";
import image from "../../assets/Image.png";

export default function Aboutme() {
  return (
    <section
      id="aboutme"
      className="min-h-screen flex flex-col items-center p-5 bg-[url('/imges/Aboutme.png')] bg-center"
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
        <h1 className="text-4xl text-center  text-tirquoize">Titl</h1>
        <div className="relative">
          <div className="w-[100px] h-0 border-t-2 border-tirquoize mt-2 opacity-70 mx-auto "></div>
          <span className="absolute left-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
          <span className="absolute right-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
        </div>
      </div>

      <h2 className="text-white text-center font-second mt-3 font-light">
        I had the pleasure of working with these awesome Projects
      </h2>

      <div className="md:w-[82%] lg:w-[75%] mx-auto gap-6 lg:gap-20 flex flex-col items-end justify-center md:flex-row">
        
        {/* النص */}
        <div className="mt-10 flex-1">
          <h1 className="text-white inline-block bg-[#292F36] border border-[2px] py-2 px-4 rounded-tl-2xl border-tirquoize text-3xl rounded-br-2xl">
            About Me
          </h1>

          <p className="bg-[#292F36] mt-10 text-white font-second font-light p-5 rounded-2xl lg:max-w-[690px] leading-relaxed">
            
            <span className="font-medium text-xl text-tirquoize block mb-2">
              Hello!
            </span>

            My name is Mohannad and I specialize in web development that utilizes
            <span className="text-tirquoize"> HTML</span>,{" "}
            <span className="text-tirquoize"> CSS</span>,{" "}
            <span className="text-tirquoize"> JS</span>, and{" "}
            <span className="text-tirquoize"> REACT</span>.
            <br /><br />

            I am a highly motivated individual dedicated to writing clear and robust code.
            I always strive to improve and learn new things.
            <br />

            When I'm not coding, I enjoy{" "}
            <span className="text-tirquoize">writing blogs</span>, reading, or exploring creative hobbies like{" "}
            <span className="text-tirquoize">photography</span>.
          </p>
        </div>

        {/* الصورة */}
        <div className="flex justify-center lg:justify-end flex-1">
          <img className="h-auto w-72" src={image} alt="About me" />
        </div>

      </div>
    </section>
  );
}