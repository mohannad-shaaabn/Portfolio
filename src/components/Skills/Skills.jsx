import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaVuejs } from "react-icons/fa";

const skills = [
  {
    id: 0,
    name: "HTML",
    icon: FaHtml5,
    color: "#E54F26",
    level: 95,
    note: "Semantic structure",
  },
  {
    id: 1,
    name: "CSS",
    icon: FaCss3Alt,
    color: "#0C73B8",
    level: 94,
    note: "Responsive UI",
  },
  {
    id: 2,
    name: "JavaScript",
    icon: FaJsSquare,
    color: "#F7DF1E",
    level: 97,
    note: "Dynamic interactions",
  },
  {
    id: 3,
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    level: 96,
    note: "Reusable components",
  },
  {
    id: 4,
    name: "Vue",
    icon: FaVuejs,
    color: "#42B883",
    level: 62,
    note: "Component architecture",
  },
];

export default function Skills() {
  const cardsRef = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

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
      id="skills"
      className="relative min-h-screen flex flex-col items-center p-5 overflow-hidden bg-[url('/imges/Skills.png')] bg-cover bg-center"
    >
    
       <div className="flex flex-col items-center scale-75">
          <div className="w-6 h-10 border-2 border-tirquoize rounded-full flex justify-center relative">
            <div className="w-1 h-2 bg-tirquoize rounded-full mt-2 animate-bounce"></div>
          </div>
          <div className="w-0 h-12 border-l-2 border-white border-dashed mt-2 opacity-70"></div>
          <div className="w-1 h-1 bg-white rounded-full mt-1"></div>
        </div>

        <div className="mt-5 felx justify-center items-center">
          <h1 className="text-4xl text-center text-tirquoize">Skills</h1>
          <div className="relative">
            <div className="w-[120px] h-0 border-t-2 border-tirquoize mt-2 opacity-70 mx-auto"></div>
            <span className="absolute left-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
            <span className="absolute right-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
          </div>
        </div>

      <p className="z-10 text-center text-white/80 font-second mt-3 max-w-2xl px-3">
        Tech stack I use to craft fast, clean and interactive front-end experiences.
      </p>

      <div className="z-10 w-full max-w-6xl mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isVisible = visibleCards.includes(skill.id);

            return (
              <article
                key={skill.id}
                ref={(el) => (cardsRef.current[index] = el)}
                data-card-index={skill.id}
                className={`group relative rounded-2xl border border-white/10 bg-[#1d252c]/80 backdrop-blur-md p-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-white/25 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <span
                  className="pointer-events-none absolute inset-x-8 -top-px h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                ></span>

                <div className="flex items-center justify-between">
                  <div
                    className="h-14 w-14 rounded-2xl grid place-items-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                    style={{ backgroundColor: `${skill.color}26` }}
                  >
                    <Icon
                      className="text-3xl"
                      style={{ color: skill.name === "JavaScript" ? "#101010" : skill.color }}
                    />
                  </div>
                  <span className="text-xs font-second text-white/70">{skill.level}%</span>
                </div>

                <h3 className="mt-4 text-xl text-white tracking-wide">{skill.name}</h3>
                <p className="mt-1 text-sm font-second text-white/65">{skill.note}</p>

                <div className="mt-5 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <span
                    className="block h-full rounded-full transition-all duration-700"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      backgroundColor: skill.color,
                      transitionDelay: `${index * 120 + 250}ms`,
                    }}
                  ></span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
