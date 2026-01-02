import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaVuejs } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-white text-4xl" />,
      bg: "bg-[#E54F26]",
      text: "text-[#E54F26]",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-white text-4xl" />,
      bg: "bg-[#0C73B8]",
      text: "text-[#0C73B8]",
    },
    {
      name: "JS",
      icon: <FaJsSquare className="text-black text-4xl" />,
      bg: "bg-[#F7DF1E]",
      text: "text-[#F7DF1E]",
    },
    {
      name: "REACT",
      icon: <FaReact className="text-white text-4xl" />,
      bg: "bg-[#61DAFB]",
      text: "text-[#61DAFB]",
    },
    {
      name: "VUE",
      icon: <FaVuejs className="text-white text-4xl" />,
      bg: "bg-[#42B883]",
      text: "text-[#42B883]",
    },
  ];

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
          <div className="w-[100px] h-0 border-t-2 border-tirquoize mt-2 opacity-70 mx-auto "></div>
          <span className="absolute left-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
          <span className="absolute right-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
        </div>
      </div>
      {/* DESKTOP */}
      <div className="hidden md:flex flex-wrap justify-center gap-16 text-5xl mt-20">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div
              className={`${skill.bg} p-7 rounded-full flex items-center justify-center`}
            >
              {skill.icon}
            </div>
            <h3 className={`mt-2 font-second text-2xl ${skill.text}`}>
              {skill.name}
            </h3>
          </div>
        ))}
      </div>

      {/* MOBILE SLIDER */}
      <div className="md:hidden w-full mt-16">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={true}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <div
                  className={`${skill.bg} p-7 rounded-full flex items-center justify-center`}
                >
                  {skill.icon}
                </div>
                <h3 className={`mt-2 font-second text-2xl ${skill.text}`}>
                  {skill.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
