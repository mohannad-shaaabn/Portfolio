import React from "react";
import profilphoto from "../../assets/my-photo.png";
export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center  justify-center bg-skyblue pt-16 md:pt-0  "
    >
      <div className="p-4 sm:p-0 relative">
        <h1 className="text-6xl text-[#98FAEC] text-center">Developer</h1>
        <div className="icons hidden sm:flex bg-[#1e1c21] absolute top-7 left-2 lg:top-5 lg:left-0 border border-white rounded-full text-white flex flex-col gap-4 px-2 py-3">
          <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-border-all text-[#1e1c21]" />
          </div>
          <i className="fa-regular fa-user" />
          <i className="fa-solid fa-code" />
          <i className="fa-solid fa-tv" />
          <i className="fa-solid fa-pen-to-square" />
          <i className="fa-solid fa-envelope" />
        </div>
        <div className="md:w-[82%] lg:w-[90%] mx-auto">
          <div className="flex flex-col md:flex-wrap lg:flex-nowrap  md:flex-row md:items-center gap-7 lg:gap-16  items-center mt-5">
            <div className="border border-[2px]  rounded-tl-[100px]  rounded-br-[100px] p-7 overflow-hidden  min-w-[209px] flex flex-col justify-center items-center ">
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src={profilphoto}
                  alt=""
                />
              </div>
              <div className="text-center mt-3">
                <h2 className="text-white">Mohannad</h2>
                <h3 className="text-white font-second font-extralight">
                  Front-end Developer
                </h3>
              </div>
              <div className="mt-5 flex flex-col items-start gap-1">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-calendar-days text-tirquoize" />
                  <h3 className="text-white font-second font-extralight">
                    21 years
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-tirquoize" />

                  <h3 className="text-white font-second font-extralight">
                    Eygept
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-suitcase text-tirquoize" />

                  <h3 className="text-white font-second font-extralight whitespace-nowrap">
                    Full-time / Freelancer
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-link text-tirquoize" />

                  <h3 className="text-white font-second font-extralight">
                    www.mohannad.com
                  </h3>
                </div>

                <div className="flex items-center gap-1 font-second font-light">
                  <span className="text-xs bg-tirquoize p-1 rounded-full text-center">
                    HTML
                  </span>
                  <span className="text-xs bg-tirquoize p-1 rounded-full text-center">
                    CSS
                  </span>
                  <span className="text-xs bg-tirquoize p-1 rounded-full min-w-[30px] text-center whitespace-nowrap">
                    JS
                  </span>
                  <span className="text-xs bg-tirquoize p-1 rounded-full text-center">
                    REACT
                  </span>
                </div>
                <a
                  href="/Mohannad-shaaban_Resume.pdf" //
                  download
                  className=" mt-2 bg-white py-2 px-4 rounded-full hover:bg-white/10 hover:font-bold hover:text-white hover:backdrop-blur-sm shadow-inner hover:shadow-blue-300/50 overflow-hidden flex items-center justify-center gap-2"
                >
                  Download CV
                  <i className="fa-solid fa-download" />
                </a>
              </div>
            </div>
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl text-white">Hey</h2>
              <h2 className="text-3xl text-white flex gap-2">
                I'm <span className="text-tirquoize">Mohannad</span>,
              </h2>
              <h2 className="text-3xl whitespace-nowrap text-white md:min-w-[400px]">
                Front-end Developer
              </h2>

              <p className="text-white font-second font-light mt-6">
                I build interactive websites and always eager to learn new
                technologies.
              </p>
              <h3 className="text-2xl text-tirquoize flex items-center gap-2 mt-6 font-second">
                Let's Talk{" "}
                <span className="text-[15px] bg-gray-700  rounded-full h-7 w-7  flex justify-center items-center">
                  <i className="fa-regular fa-envelope" />
                </span>
              </h3>
            </div>
            <div className="bg-[#1e1c21] p-2 rounded-[30px] order-1  lg:order-2">
              <div className="max-w-28 md:max-w-36 lg:max-w-32">
                <h2 className="text-white flex items-center gap-2 text-[10px] md:text-[11px] mb-6 mt-4 font-second font-medium md:font-light">
                  <span className="text-tirquoize text-2xl">6</span>Built
                  Creative Interfaces
                </h2>
                <h2 className="text-white flex items-center gap-2 text-[10px] md:text-[11px] mb-6 font-second font-medium md:font-light">
                  <span className="text-tirquoize text-2xl">8</span>Mastered
                  Modern Tools
                </h2>
                <h2 className="text-white flex items-center gap-2 text-[10px] md:text-[11px] mb-4 font-second font-medium md:font-light">
                  <span className="text-tirquoize text-2xl">1</span>Gained
                  Valuable Skills
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
