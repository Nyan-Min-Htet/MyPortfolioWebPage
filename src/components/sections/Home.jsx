import React from "react";
import images from "/images/photo.jpg";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="py-20 min-h-screen flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10 px-6"
      >
        {/* Profile Picture */}
        <div className="relative p-2 rounded-full before:absolute before:inset-0 before:-m-1 before:rounded-full before:bg-gradient-to-r before:from-purple-500 before:via-blue-500 before:to-cyan-500 before:blur-lg before:opacity-75 before:animate-pulse">
          <img
            src={images}
            alt="Profile Picture"
            className="relative rounded-full w-40 h-40 md:w-65 md:h-65 shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center z-10 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-bold">
            Hello, I'm Nyan Min Htet
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xs sm:max-w-lg mx-auto mb-5">
            Web Developer | Network Engineer
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="#project"
              className="bg-blue-600 text-white py-3 px-6 rounded font-medium transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              View My Project
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 py-3 px-6 rounded font-medium transition hover:bg-blue-600 hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
