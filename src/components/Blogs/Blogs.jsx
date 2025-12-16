import React, { useEffect, useState } from "react";
import blogsimage from "../../assets/Blogs.png";
import toast from "react-hot-toast";
export default function Blogs() {
  const [openModal, setOpenModal] = useState(false);
  const [subModal, setSubModal] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  // const [viewmore, setviewmore] = useState(false);

  useEffect(() => {
    const isSubscribed = localStorage.getItem("subscribed");
    if (isSubscribed === "true") {
      setSubscribed(true);
      setSubModal(false);
    }
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    console.log("New Subscriber:", email);

    setSubscribed(true);
    localStorage.setItem("subscribed", "true");
    setSubModal(false);
    setEmail("");
    toast.success("You have successfully subscribed!");
  };

  return (
    <section
      id="blogs"
      className="min-h-screen flex flex-col items-center p-5 bg-skyblue"
    >
      <div className="flex flex-col items-center scale-75">
        <div className="w-6 h-10 border-2 border-tirquoize rounded-full flex justify-center relative">
          <div className="w-1 h-2 bg-tirquoize rounded-full mt-2 animate-bounce"></div>
        </div>

        <div className="w-0 h-12 border-l-2 border-white border-dashed mt-2 opacity-70"></div>
        <div className="w-1 h-1 bg-white rounded-full mt-1"></div>
      </div>
      <div className=" mt-5 felx justify-center items-center">
        <h1 className="text-4xl text-center  text-tirquoize">Blogs</h1>
        <div className="relative">
          <div className="w-[100px] h-0 border-t-2 border-tirquoize mt-2 opacity-70 mx-auto "></div>
          <span className="absolute left-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
          <span className="absolute right-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
        </div>
      </div>
      <h2 className="text-white text-center font-second mt-3 font-light">
        My thoughts on technology and business, welcome to subscribe
      </h2>
      <div className="w-full md:w-[90%] lg:w-[60%] mx-auto mt-10 p-6 border-t-[1px] border-b-[1px] flex flex-col md:flex-row gap-7">
        <div className="w-5/12">
          <img className="w-52" src={blogsimage} alt="" />
        </div>
        <div className="w-full">
          <h2 className="text-tirquoize text-2xl mb-3">
            What does it take to become a web developer?
          </h2>
          <span className="text-[10px] text-white">
            Web development, also known as website development, encompasses a
            variety of tasks and <br /> processes involved in creating websites
            for the internet…
          </span>
          <div className="mt-3 flex items-center text-tirquoize gap-1 text-sm group">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenModal(true);
              }}
              className="border-b-[1px] font-light transition group-hover:text-tirquoize/50"
            >
              Read More
            </button>

            <span className="text-tirquoize text-xl font-light transition group-hover:text-tirquoize/50">
              »
            </span>
          </div>

          <div className="mt-5 flex items-center flex-wrap whitespace-nowrap gap-2 md:gap-6">
            <span className="text-xs text-white bg-slate-400/20 px-2 font-light rounded-full">
              Web Developer
            </span>
            <span className="text-xs text-white px-2 rounded-full">
              Text{" "}
              <span className="font-light ml-1 text-gray-300">Mohannad</span>
            </span>
            <span className="text-xs text-white px-2 rounded-full">
              Date{" "}
              <span className="font-light ml-1 text-gray-300">23.Nov 2025</span>
            </span>
            <span className="text-xs text-white px-2 rounded-full">
              Read <span className="font-light ml-1 text-gray-300">1 Min</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-5">
        {/* <button
          onClick={() => setviewmore(true)}
          className="bg-tirquoize py-2 px-4 text-sm rounded-full hover:bg-transparent border-2 border-tirquoize hover:border-2 hover:text-white transition-all duration-300"
        >
          View More
        </button> */}
        <button
          onClick={() => {
            if (!subscribed) {
              setSubModal(true);
            }
          }}
          disabled={subscribed}
          className="border-2 border-tirquoize text-white py-2 px-4 text-sm rounded-full hover:bg-tirquoize hover:text-black transition-all duration-300 flex items-center gap-2"
        >
          {subscribed ? "Subscribed" : "Subscribe"}
          {subscribed ? (
            <i className="fa-solid fa-check text-green-300" />
          ) : (
            <i className="fa-solid fa-bell" />
          )}
        </button>
      </div>
      {openModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-[#1e242a] text-white p-6 rounded-xl w-[90%] md:w-[60%] lg:w-[40%] relative"
            onClick={(e) => e.stopPropagation()} // يمنع إغلاق المودال عند الضغط داخل المحتوى
          >
            {/* زر إغلاق */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute right-4 top-4 text-white text-xl"
            >
              ✕
            </button>

            {/* محتوى المقال */}
            <h2 className="text-tirquoize text-2xl mb-3">
              What does it take to become a web developer?
            </h2>

            <p className="text-gray-300 leading-6">
              Web development is all about turning ideas into interactive
              websites and applications. To succeed, you need a mix of technical
              skills, creativity, and continuous learning. I focus on: HTML, CSS
              & JavaScript for building clean, interactive interfaces. Backend &
              Databases like Node.js, PHP, MySQL, and MongoDB. Frameworks &
              Tools such as React, Vue.js, and Git for faster, more efficient
              development. Design & UX to make websites intuitive and visually
              appealing. I’m passionate about learning new technologies and
              creating projects that not only work but also provide great user
              experiences. Every project I build adds to my growth as a web
              developer and helps me bring ideas to life on the web.
            </p>
          </div>
        </div>
      )}
      {subModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setSubModal(false)}
        >
          <div
            className="bg-[#1e242a] text-white p-6 rounded-xl w-[90%] md:w-[60%] lg:w-[40%] relative"
            onClick={(e) => e.stopPropagation()} // يمنع إغلاق المودال عند الضغط داخل المحتوى
          >
            {/* زر إغلاق */}
            <button
              onClick={() => setSubModal(false)}
              className="absolute right-4 top-4 text-white text-xl"
            >
              ✕
            </button>

            <form
              onSubmit={handleSubscribe}
              className="flex items-center max-w-lg mx-auto space-x-2"
            >
              <label htmlFor="email" className="sr-only"></label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center  pointer-events-none"></div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full font-light font-second bg-skyblue  ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border text-heading text-sm rounded-base focus:ring-brand shadow-xs "
                  placeholder="Write your email !"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 end-0 flex items-center pe-3"
                ></button>
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 font-second  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 "
              >
                Subscribe
                <i className="fa-solid fa-bell" />
              </button>
            </form>
          </div>
        </div>
      )}
      {/* {viewmore && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setviewmore(false)}
        >
          <div
            className="bg-[#1e242a] text-white p-6 rounded-xl w-[90%] md:w-[60%] lg:w-[40%] relative"
            onClick={(e) => e.stopPropagation()} // يمنع إغلاق المودال عند الضغط داخل المحتوى
          >
            
            <button
              onClick={() => setviewmore(false)}
              className="absolute right-4 top-4 text-white text-xl"
            >
              ✕
            </button>

           
            <h2 className="text-tirquoize text-2xl mb-3">
              What does it take to become a web developer?
            </h2>

            <p className="text-gray-300 leading-6">
              Web development is all about turning ideas into interactive
              websites and applications. To succeed, you need a mix of technical
              skills, creativity, and continuous learning. I focus on: HTML, CSS
              & JavaScript for building clean, interactive interfaces. Backend &
              Databases like Node.js, PHP, MySQL, and MongoDB. Frameworks &
              Tools such as React, Vue.js, and Git for faster, more efficient
              development. Design & UX to make websites intuitive and visually
              appealing. I’m passionate about learning new technologies and
              creating projects that not only work but also provide great user
              experiences. Every project I build adds to my growth as a web
              developer and helps me bring ideas to life on the web.
            </p>
          </div>
        </div>
      )} */}
    </section>
  );
}
