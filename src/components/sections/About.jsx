import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = ["HTML", "JavaScript", "Tailwind CSS"];
  const backendSkills = ["Python", "PHP", "Java"];

  return (
    <>
      <section
        id="about"
        className="py-30 min-h-52 flex items-center justify-center leading-7.5"
      >
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-center text-transparent">
              About Me
            </h1>
            <div className="glass rounded-xl p-8 border-white/20 border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(50,130,2246,0.5)] transition">
              <p className="text-gray-300 mb-6">
                I'm a passionate developer with a strong expertise in building
                scalable, high-performance websites and crafting innovative
                digital solutions. Adept at leveraging modern technologies to
                create user-friendly, efficient, and secure applications.
                Dedicated to problem-solving, continuous learning, and
                delivering seamless user experiences through clean, maintainable
                code.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(50,130,2246,0.3)] transition">
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(50,130,2246,0.3)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(50,130,2246,0.3)] transition">
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(50,130,2246,0.3)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/15 border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(50,130,2246,0.5)] transition">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>Diploma in Computer Science </strong> - Info Myanmar
                    College (2024 - 2025)
                  </li>
                  <li>
                    <strong>Ons Stop Java Course </strong> - Java Developer
                    Class (2023)
                  </li>
                  <li>
                    <strong>Basic Programming Language </strong> - AIMT (2022)
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/15 border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(50,130,2246,0.5)] transition">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Inter at Lyrion Company (2022)
                    </h4>
                    <p>
                      Assisted in building front-end web design with team
                      members.
                    </p>
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

export default About;
