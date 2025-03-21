import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
// eslint-disable-next-line no-unused-vars
import { form } from "framer-motion/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_serviceID,
        import.meta.env.VITE_templateID,
        e.target,
        import.meta.env.VITE_publicKey
      )
      .then(() => {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please Try Again!!"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 lg:px-24 flex md:flex-row items-center justify-center space-y-10 md:w-full md:space-x-10 sm:flex-row sm:items-center sm:justify-center sm:space-y-10 sm:space-x-10 sm:w-full"
    >
      <RevealOnScroll>
        <div className="bg-white/10 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center">
            Get In Touch!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 w-150">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-gray-900"
                placeholder="Enter Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-gray-900"
                placeholder="example@email.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-gray-900"
                placeholder="Enter Your Message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded font-medium transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
