import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import Home from "./components/sections/Home";
import Nav from "./components/sections/Nav";
import MobileMenu from "./components/MobileMenu";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import RevealOnScroll from "./components/RevealOnScroll";
import Contact from "./components/sections/Contact";
import { Analytics } from "@vercel/analytics/next";

function App() {
  const [isloaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isloaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isloaded ? "opacity-100" : "opacity-0"
        } bg-white text-gray-900 dark:bg-black dark:text-gray-100`}
      >
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <RevealOnScroll>
          <Home />
        </RevealOnScroll>
        <About />
        <Project />
        <Contact />
        <footer className="bg-white dark:bg-black text-gray-900 dark:text-white py-10">
          <div className="container mx-auto flex flex-col md:flex-row text-center justify-between items-center px-6">
            <p className="text-sm">
              © 2025 Nyan Min Htet. All Rights Reserved.
            </p>

            <div className="flex space-x-10 px-4 mt-4 md:mt-0">
              <a
                href="https://github.com/Nyan-Min-Htet"
                className="hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nyan-min-htet-564863270"
                className="hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="mailto:nhtet9968@email.com"
                className="hover:text-gray-400"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
      <Analytics />
    </>
  );
}

export default App;
