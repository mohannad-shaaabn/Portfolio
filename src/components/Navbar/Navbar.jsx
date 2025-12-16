import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();

    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (sections.length) {
      const observerOptions = {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      };
      const observer = new IntersectionObserver((entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      }, observerOptions);
      sections.forEach((s) => observer.observe(s));
      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
      };
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (id) =>
    `relative block py-2 px-3 rounded-full  transition-colors ${
      activeSection === id ? "text-tirquoize" : "text-white"
    }`;

  useEffect(() => {
    if (!query) return;

    const q = query.toLowerCase();
    if (q.length < 3) return;

    if (q.includes("home")) {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      setQuery("");
    } else if (q.includes("blogs")) {
      document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" });
      setQuery("");
    } else if (q.includes("skills")) {
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      setQuery("");
    }  else if (q.includes("contact")) {
      document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
      setQuery("");
    } else if (q.includes("works") || q.includes("project")) {
      document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
      setQuery("");
    }
  }, [query]);

  return (
    <>
      {/* Navbar العلوي */}
      <nav
        className={`fixed top-0 md:top-3 left-1/2 -translate-x-1/2 w-full md:w-[90%] z-50 duration-200
    ${
      scrolled
        ? "bg-[#1b2a2a] shadow-lg shadow-[#31eace]/20 md:rounded-full"
        : "bg-transparent"
    }
    
  `}
      >
        <div className="max-w-screen-xl  flex items-center justify-between mx-auto w-full px-4 py-3">
          <a
            href="#home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center  text-2xl font-semibold whitespace-nowrap text-white">
              Portfolio
            </span>
          </a>

          {/* زر الموبايل */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* روابط الديسكتوب */}
          <ul className="hidden md:flex md:space-x-6 lg:space-x-8 font-second font-light items-center">
            <li>
              <a href="#home" className={linkClass("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#blogs" className={linkClass("blogs")}>
                Blogs
              </a>
            </li>
            <li>
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="block w-full p-2 ps-9 text-sm text-black rounded-full bg-gray-100 focus:outline-none"
                />

                <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm"></i>
              </div>
            </li>

            <li>
              <a
                href="https://www.instagram.com/mohanad_yousef_23?igsh=MTR3ZXJtYXpyOTQxOQ%3D%3D&utm_source=qr"
                target="_blank"
                className="text-white flex items-center gap-1 font-light"
              >
                <i className="fa-brands fa-instagram text-tirquoize" />{" "}
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohannad-shaaban-59b47b371/"
                target="_blank"
                className="text-white flex items-center gap-1 font-light"
              >
                <i className="fa-brands fa-linkedin text-tirquoize" />
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mohannad-shaaabn"
                target="_blank"
                className="text-white flex items-center gap-1 font-light"
              >
                <i className="fa-brands fa-github text-tirquoize" />
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* الخلفية الشفافة */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* القائمة الجانبية */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-[#1b2a2a] z-50 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-white font-bold text-xl">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col  space-y-4 p-4 font-second">
          <li>
            <a
              href="#home"
              className={linkClass("home")}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#blogs"
              className={linkClass("blogs")}
              onClick={() => setMenuOpen(false)}
            >
              Blogs
            </a>
          </li>
          <li>
            <form class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium sr-only "
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="search"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="block w-full p-2 ps-9 text-sm text-black rounded-full bg-gray-100"
                />

                <button
                  type="submit"
                  class="text-black absolute end-1 bottom-[50%] -translate-y-[-50%] text-sm px-4 py-2 "
                >
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </form>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mohanad_yousef_23?igsh=MTR3ZXJtYXpyOTQxOQ%3D%3D&utm_source=qr"
              target="_blank"
              className="text-white flex items-center gap-1 font-light font-second"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa-brands fa-instagram text-tirquoize" /> Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mohannad-shaaban-59b47b371/"
              target="_blank"
              className="text-white flex items-center gap-1 font-light font-second"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa-brands fa-linkedin text-tirquoize" />
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mohannad-shaaabn"
              target="_blank"
              className="text-white flex items-center gap-1 font-light font-second"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa-brands fa-github text-tirquoize" />
              Github
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
