import React, { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { Carousel } from "flowbite-react";
import image from "../../assets/Image.png";
import buynest from "../../assets/buynest.png";
import freshcart from "../../assets/freshcart.png";
import weather from "../../assets/weather.png";
export default function Works() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <section
      id="works"
      className=" min-h-screen flex flex-col items-center p-5 bg-[url('/imges/Works.png')] bg-cover bg-center"
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
        <h1 className="text-4xl text-center  text-tirquoize">Works</h1>
        <div className="relative">
          <div className="w-[110px] h-0 border-t-2 border-tirquoize mt-2 opacity-70 mx-auto "></div>
          <span className="absolute left-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
          <span className="absolute right-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
        </div>
      </div>
      <h2 className="text-white text-center font-second mt-3 font-light">
        I had the pleasure of working with these awesome projects
      </h2>

      <div className="w-full max-w-5xl mt-10 px-2 sm:px-4 h-[320px] sm:h-[420px] md:h-[480px]">
        <Carousel
          className="custom-carousel"
          slide={false}
          slideInterval={2500}
          indicators={false}
        >
          <a
            href="https://github.com/mohannad-shaaabn/BuyNest"
            target="_blank"
            rel="noopener noreferrer"
            className="
    mx-auto
    w-full sm:w-[90%] md:w-[70%] lg:w-[60%]
    bg-[#1e242a] rounded-xl p-4
    transition-all duration-300
    hover:scale-[1.03]
    group
  "
          >
            <img
              src={buynest}
              alt="Project"
              className="
    w-full
    h-40 sm:h-52 md:h-60
    object-contain
    rounded-xl
  "
            />

            <div className="ps-7">
              <h3 className="text-tirquoize text-xl mt-5 group-hover:underline">
                BuyNest
              </h3>

              <p className="text-gray-300 text-sm mt-2 font-light">
                A modern e-commerce website for browsing products, managing a
                shopping cart, and enjoying a smooth, user-friendly buying
                experience.
              </p>

              <span className="inline-block mt-4 text-sm text-tirquoize">
                View on GitHub →
              </span>
            </div>
          </a>
          <a
            href="https://github.com/mohannad-shaaabn/FreshCart"
            target="_blank"
            rel="noopener noreferrer"
            className="
    mx-auto
    w-full sm:w-[90%] md:w-[70%] lg:w-[60%]
    bg-[#1e242a] rounded-xl p-4
    transition-all duration-300
    hover:scale-[1.03]
    group
  "
          >
            <img
              src={freshcart}
              alt="Project"
              className="
    w-full
    h-40 sm:h-52 md:h-60
    object-contain
    rounded-xl
  "
            />

            <div className="ps-7">
              <h3 className="text-tirquoize text-xl mt-5 group-hover:underline">
                Fresh Cart
              </h3>

              <p className="text-gray-300 text-sm mt-2 font-light">
                A modern e-commerce website inspired by Fresh Cart, designed for
                browsing products, managing a shopping cart, and enjoying a
                smooth, user-friendly shopping experience.
              </p>

              <span className="inline-block mt-4 text-sm text-tirquoize">
                View on GitHub →
              </span>
            </div>
          </a>
          <a
            href="https://github.com/mohannad-shaaabn/weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="
    mx-auto
    w-full sm:w-[90%] md:w-[70%] lg:w-[60%]
    bg-[#1e242a] rounded-xl p-4
    transition-all duration-300
    hover:scale-[1.03]
    group
  "
          >
            <img
              src={weather}
              alt="Project"
              className="
    w-full
    h-40 sm:h-52 md:h-60
    object-contain
    rounded-xl
  "
            />

            <div className="ps-7">
              <h3 className="text-tirquoize text-xl mt-5 group-hover:underline">
                Weather Website
              </h3>

              <p className="text-gray-300 text-sm mt-2 font-light">
                A simple weather website that shows real-time weather conditions
                and forecasts with a clean, easy-to-use interface.
              </p>

              <span className="inline-block mt-4 text-sm text-tirquoize">
                View on GitHub →
              </span>
            </div>
          </a>
        </Carousel>
      </div>
    </section>
  );
}
