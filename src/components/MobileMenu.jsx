import React from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center 
      transition-all duration-300 ease-in-out 
      ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-4xl text-white focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          &times;
        </button>
        <ul class="space-y-4">
          <li>
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-semibold text-white my-4 trasnform transition-transform duration-300
              ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-semibold text-white my-4 trasnform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5"
                }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#project"
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-semibold text-white my-4 trasnform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5"
                }`}
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-semibold text-white my-4 trasnform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5"
                }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
