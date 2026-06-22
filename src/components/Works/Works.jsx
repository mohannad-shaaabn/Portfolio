import React, { useEffect, useRef, useState } from "react";
import { initFlowbite } from "flowbite";
import buynest from "../../assets/buynest.png";
import freshcart from "../../assets/freshcart.png";
import weather from "../../assets/weather.png";

const projects = [
  {
    id: 0,
    name: "BuyNest",
    image: buynest,
    repoUrl: "https://github.com/mohannad-shaaabn/buy-nest",
    description:
      "A modern e-commerce website for browsing products, managing a shopping cart, and enjoying a smooth, user-friendly buying experience.",
  },
  {
    id: 1,
    name: "Fresh Cart",
    image: freshcart,
    repoUrl: "https://github.com/mohannad-shaaabn/fresh-.cart",
    description:
      "A modern e-commerce website inspired by Fresh Cart, designed for browsing products, managing a shopping cart, and enjoying a smooth, user-friendly shopping experience.",
  },
  {
    id: 2,
    name: "Weather Website",
    image: weather,
    repoUrl: "https://github.com/mohannad-shaaabn/sky-cast",
    description:
      "A simple weather website that shows real-time weather conditions and forecasts with a clean, easy-to-use interface.",
  },
];

export default function Works() {
  const cardsRef = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    initFlowbite();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number(entry.target.getAttribute("data-card-index"));
            setVisibleCards((prev) =>
              prev.includes(cardIndex) ? prev : [...prev, cardIndex]
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="works"
      className=" min-h-screen flex flex-col items-center p-5 bg-[url('/imges/Works.png')] bg-cover bg-center"
    >
      <div className="flex flex-col items-center scale-75">
        <div className="w-6 h-10 border-2 border-tirquoize rounded-full flex justify-center relative">
          <div className="w-1 h-2 bg-tirquoize rounded-full mt-2 animate-bounce"></div>
        </div>
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

      <div className="w-full max-w-6xl mt-10 px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.name}
              ref={(el) => (cardsRef.current[index] = el)}
              data-card-index={project.id}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#232b32] to-[#1b2127] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(49,234,206,0.2)] ${
                visibleCards.includes(project.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              <div className="relative rounded-xl bg-[#11161b] p-2">
                <img
                  src={project.image}
                  alt={`${project.name} project`}
                  className="w-full h-44 sm:h-52 object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-[#0f1418]/50 via-transparent to-transparent"></div>
              </div>

              <div className="pt-4 px-1">
                <h3 className="text-tirquoize text-xl font-medium tracking-wide">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm mt-2 font-light leading-6 min-h-[96px]">
                  {project.description}
                </p>

                <div className="mt-3 h-10">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-tirquoize/70 bg-tirquoize/10 px-4 py-2 text-sm text-tirquoize transition-all duration-300 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto hover:bg-tirquoize hover:text-[#0e151a]"
                  >
                    View on GitHub
                    <i className="fa-brands fa-github" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
