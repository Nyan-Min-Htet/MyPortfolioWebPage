import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Project = () => {
  return (
    <>
      <section
        id="project"
        className="py-20 min-h-52 flex items-center justify-center leading-6.5"
      >
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-center text-transparent">
              My School Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border-white/20 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_2px_8px_rgba(50,130,246,0.5)] transition">
                <h3 className="text-xl font-bold mb-2">
                  Socket Program Quizz and Guess Application
                </h3>
                <p className="text-gray-300 mb-4">
                  The Quizz and Guess Game is a dual-mode desktop application
                  developed in Python using socket programming and a Tkinter
                  GUI. The system features a multi-threaded server capable of
                  handling multiple clients simultaneously, ensuring a smooth
                  multiplayer experience. This project highlights core concepts
                  in network programming, threading, and desktop application
                  development, making it an ideal showcase of my practical
                  Python skills.
                </p>
                <div>
                  <span
                    className="bg-blue-500/40 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(50,130,246,0.3)] transition-all"
                  >
                    Python
                  </span>
                  <div className="flex justify-between items-center my-4">
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-300 transition-colors"
                    >
                      View My Project <span class="text-xl px-2">&#8594;</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border-white/20 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_2px_8px_rgba(50,130,246,0.5)] transition">
                <h3 className="text-xl font-bold mb-2">
                  Customer Information System
                </h3>
                <p className="text-gray-300 mb-4">
                  This is a Java-based application designed to manage customer
                  records efficiently. It allows to login, search, and sort
                  customer informations such as customer name, price, and
                  amount.
                </p>
                <div>
                  <span
                    className="bg-blue-500/40 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(50,130,246,0.3)] transition-all"
                  >
                    JAVA
                  </span>
                  <div className="flex justify-between items-center my-4">
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-300 transition-colors"
                    >
                      View My Project <span class="text-xl px-2">&#8594;</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border-white/20 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_2px_8px_rgba(50,130,246,0.5)] transition">
                <h3 className="text-xl font-bold mb-2">
                  Selling Flower E-Commcerce Website
                </h3>
                <p className="text-gray-300 mb-4">
                  This is a full-stack e-commerce website built with HTML, CSS,
                  and JavaScript are acts as a frontend and PHP is acts as a
                  backend. It allows users to view and purchase flowers online.
                </p>
                <div>
                  {["HTML", "CSS", "JavaScript", "PHP"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/40 text-blue-400 py-1 px-3 mx-1 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(50,130,246,0.3)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                  <div className="flex justify-between items-center my-4">
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-300 transition-colors"
                    >
                      View My Project <span class="text-xl px-2">&#8594;</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border-white/20 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_2px_8px_rgba(50,130,246,0.5)] transition">
                <h3 className="text-xl font-bold mb-2">
                  AI voice-activated assistant
                </h3>
                <p className="text-gray-300 mb-4">
                  This is an AI based application that using for voice assistant
                  with using python programming language. It allows to hand-free
                  commands, and more enhance interactive between AI. It can
                  perform many actions by voice command and text command such as
                  open youtube, social media, ask any questions, and also check
                  the chat history.
                </p>
                <div>
                  {["HTML", "CSS", "JavaScript", "Python"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/40 text-blue-400 py-1 px-3 mx-1 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(50,130,246,0.3)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                  <div className="flex justify-between items-center my-4">
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-300 transition-colors"
                    >
                      View My Project
                      <span class="text-xl px-2">&#8594;</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border-white/20 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_2px_8px_rgba(50,130,246,0.5)] transition">
                <h3 className="text-xl font-bold mb-2">
                  Fashion Wesbite Design
                </h3>
                <p className="text-gray-300 mb-4">
                  This project is a only design for fashion website and it can
                  log in, log out, register, and view products such as shirts,
                  shoes, suit, and trousers with price details.
                </p>
                <div>
                  {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/40 text-blue-400 py-1 px-3 mx-1 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(50,130,246,0.3)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                  <div className="flex justify-between items-center my-4">
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-300 transition-colors"
                    >
                      View My Project <span class="text-xl px-2">&#8594;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};

export default Project;
