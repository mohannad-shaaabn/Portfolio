import React from "react";

export default function Footer() {
  return (
    <section
      id="footer"
      className=" flex flex-col gap-3 md:flex-row md:gap-0 items-center justify-between p-5 bg-[#1A1E23] border-t-[0.5px] border-[#43454D]"
    >
      <h3 className="text-sm text-white font-light">
        © 2025 MohannadShaaban. All rights reserved.
      </h3>
      <div className="flex text-white gap-5">
        <h2 className="text-sm font-light">Privacy Policy</h2>
        <h2 className="text-sm font-light">Terms & Conditions</h2>
      </div>
      <div className="flex gap-4 ">
        <a target="_blank" href="https://www.instagram.com/mohanad_yousef_23">
          <div className="group relative">
            <div className="bg-tirquoize h-6 w-6 rounded-full hover:text-white hover:transition-all hover:duration-500 flex items-center justify-center relative overflow-visible transition-all duration-300 group-hover:bg-transparent">
              <i className="fa-brands fa-instagram" />

              {/* نبضة التلاشي */}
              <span
                className="
          absolute inset-0 rounded-full border border-white 
          opacity-0 scale-100
          transition-all duration-500 ease-out
          group-hover:opacity-100 group-hover:scale-[1.8]
        "
              ></span>
            </div>
          </div>
        </a>
        <a target="_blank" href="https://github.com/mohannad-shaaabn">
          <div className="group relative">
            <div className="bg-tirquoize h-6 w-6 rounded-full hover:text-white hover:transition-all hover:duration-500 flex items-center justify-center relative overflow-visible transition-all duration-300 group-hover:bg-transparent">
              <i className="fa-brands fa-github" />

              {/* نبضة التلاشي */}
              <span
                className="
          absolute inset-0 rounded-full border border-white 
          opacity-0 scale-100
          transition-all duration-500 ease-out
          group-hover:opacity-100 group-hover:scale-[1.8]
        "
              ></span>
            </div>
          </div>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/mohannad-shaaban-59b47b371/">
          <div className="group relative">
            <div className="bg-tirquoize h-6 w-6 rounded-full hover:text-white hover:transition-all hover:duration-500 flex items-center justify-center relative overflow-visible transition-all duration-300 group-hover:bg-transparent">
              <i className="fa-brands fa-square-linkedin" />
              {/* نبضة التلاشي */}
              <span
                className="
          absolute inset-0 rounded-full border border-white 
          opacity-0 scale-100
          transition-all duration-500 ease-out
          group-hover:opacity-100 group-hover:scale-[1.8]
        "
              ></span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
