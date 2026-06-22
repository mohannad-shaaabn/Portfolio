import React from "react";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Front-End Development",
      icon: "fa-solid fa-code",
      accent: "from-cyan-300/30 via-cyan-200/10 to-transparent",
      items: ["React", "Vite", "Modern UI", "Clean Code"],
      description:
        "Building fast, polished interfaces with a strong focus on structure and usability.",
      iconMode: "single",
    },
    {
      number: "02",
      title: "Responsive Design",
      icon: "fa-solid fa-mobile-screen-button",
      accent: "from-emerald-300/30 via-emerald-200/10 to-transparent",
      items: ["Mobile First", "Tablet", "Desktop"],
      description: "Layouts that adapt smoothly across all screen sizes.",
      iconMode: "responsive",
    },
    {
      number: "03",
      title: "Landing Pages",
      icon: "fa-solid fa-rocket",
      accent: "from-violet-300/30 via-violet-200/10 to-transparent",
      items: ["Fast Loading", "Conversion Focus", "SEO Friendly"],
      description:
        "High-impact landing pages designed to convert visitors into action.",
      iconMode: "single",
    },
    {
      number: "04",
      title: "API Integration",
      icon: "fa-solid fa-bolt",
      accent: "from-amber-300/30 via-amber-200/10 to-transparent",
      items: ["REST API", "Authentication", "Dynamic Content"],
      description:
        "Connecting frontend experiences with real data and secure backend services.",
      iconMode: "single",
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden flex flex-col items-center px-5 pt-20 pb-10 md:pb-20 lg:pb-24 bg-skyblue"
    >
     <div className="flex flex-col items-center scale-75">
        <div className="w-6 h-10 border-2 border-tirquoize rounded-full flex justify-center relative">
          <div className="w-1 h-2 bg-tirquoize rounded-full mt-2 animate-bounce"></div>
        </div>
        <div className="w-0 h-12 border-l-2 border-white border-dashed mt-2 opacity-70"></div>
        <div className="w-1 h-1 bg-white rounded-full mt-1"></div>
      </div>

      <div className="mt-5 felx justify-center items-center">
        <h1 className="text-4xl text-center text-tirquoize">Services</h1>
        <div className="relative">
          <div className="w-[150px] h-0 border-t-2 border-tirquoize mt-2 opacity-70 mx-auto"></div>
          <span className="absolute left-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
          <span className="absolute right-0 top-1/2 w-2 h-2 bg-tirquoize rounded-full -translate-y-1/2"></span>
        </div>
      </div>
      <h2 className="relative text-white text-center font-second mt-3 font-light max-w-2xl">
        Turning ideas into modern web experiences.
      </h2>

      <div className="relative mt-12 mb-12 md:mb-12 lg:mb- w-full max-w-6xl grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.number}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out  hover:border-tirquoize/50 hover:shadow-[0_16px_60px_rgba(49,234,206,0.22)]"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-tirquoize/10 blur-3xl" />
            </div>

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold tracking-[0.3em] text-tirquoize">
                  {service.number}
                </span>
                <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>

              <div
                className={`relative grid h-16 w-16 place-items-center rounded-2xl border border-tirquoize/25 bg-white text-[#7ff6e8] shadow-[0_0_0_1px_rgba(49,234,206,0.08)] transition-transform duration-300 ${
                  service.iconMode === "single"
                    ? "group-hover:rotate-12 group-hover:scale-110"
                    : ""
                }`}
              >
                {service.iconMode === "responsive" ? (
                  <>
                    <i className="fa-solid fa-mobile-screen-button text-2xl transition-all duration-300 group-hover:opacity-0 group-hover:scale-75" />
                    <i className="fa-solid fa-display text-2xl absolute opacity-0 scale-75 text-cyan-200 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-6" />
                  </>
                ) : (
                  <i
                    className={`${service.icon} text-2xl transition-transform duration-300 group-hover:rotate-12`}
                  />
                )}
              </div>
            </div>

            <p className="relative mt-5 max-w-xl text-sm md:text-base leading-7 text-tirquoize font-second">
              {service.description}
            </p>

            <div className="relative mt-6 flex flex-wrap gap-3">
              {service.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-tirquoize/20 bg-[#12232d] px-4 py-2 text-sm text-white transition-all duration-300 group-hover:border-tirquoize/50 group-hover:bg-tirquoize/15 group-hover:text-[#dffffa]"
                >
                  {item}
                </span>
              ))}
            </div>

            {service.hoverNote ? (
              <div className="relative mt-6 inline-flex items-center gap-2 text-sm text-white/80">
                <span className="h-2 w-2 rounded-full bg-tirquoize shadow-[0_0_12px_rgba(49,234,206,0.85)]" />
                <span>{service.hoverNote}</span>
              </div>
            ) : (
              <div className="relative mt-6 h-6" />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
