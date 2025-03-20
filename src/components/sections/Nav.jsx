import React, { useEffect } from "react";

const Nav = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <>
      <nav class="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/11 tracking-wide shadow-md p-4">
        <div class="max-w-5xl mx-auto flex justify-between items-center h-13">
          <h1 class="text-2xl font-bold">Nyan Min Htet</h1>
          <div
            className="w-7 h-5 relative cursor-pointer md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <ul class="flex space-x-10">
              <li>
                <a href="#home" class="hover:text-amber-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" class="hover:text-amber-300">
                  About
                </a>
              </li>
              <li>
                <a href="#project" class="hover:text-amber-300">
                  Project
                </a>
              </li>
              <li>
                <a href="#contact" class="hover:text-amber-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
