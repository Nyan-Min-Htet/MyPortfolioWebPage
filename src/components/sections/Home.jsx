import React from "react";
import images from "/images/photo.jpg";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="py-45 min-h-screen space-x-10 flex flex-col md:flex-row items-center justify-center space-y-10 md:space-x-10"
      >
        <div className="p-2 rounded-full before:absolute before:inset-0 before:-m-1 before:rounded-full before:bg-gradient-to-r before:from-purple-500 before:via-blue-500 before:to-cyan-500 before:blur-lg before:opacity-75 before:animate-pulse">
          <img
            src={images}
            alt="Profile Picture"
            className="relative rounded-full w-65 h-65 shadow-lg"
          />
        </div>
        <div className="text-center z-10 px-4">
          <h2 className="text-5xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-right font-bold">
            Hello, I'm Nyan Min Htet
          </h2>
          <p className="mt-7 text-xl text-gray-300 max-w-lg mx-auto mb-7">
            Web Developer | Network Engineer
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#project"
              className="bg-blue-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View My Porject
            </a>
            <a
              href="#contact"
              className="border border-blue-600/60  text-blue-600 py-3 px-6 rounded font-medium transition-all duration-200
              hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-600/30"
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
