import { motion } from "framer-motion";
import { useState } from "react";
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import "./GetACall.css"; // Ensure this includes your custom font + styles
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Optional: Add redirect or toast message here
  };

  return (
    <>
    <div className="">
          <Navbar />
        </div>
    <div className="min-h-screen bg-black text-white flex items-center justify-center font-custom px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl bg-black/60 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-4xl mt-20 font-bold mb-6 text-center tracking-wider">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white transition-all duration-300 hover:border-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white transition-all duration-300 hover:border-white"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border border-gray-500 focus:outline-none focus:border-white transition-all duration-300 hover:border-white"
            required
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255,255,255,0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-white text-black font-bold rounded-md transition duration-300"
          >
            Submit
          </motion.button>
        </form>

        <div className="mt-10 flex justify-center space-x-6 text-2xl">
          <motion.a
            href="#"
            whileHover={{ scale: 1.3, rotate: 5 }}
            className="text-white hover:text-gray-300 transition"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.3, rotate: -5 }}
            className="text-white hover:text-gray-300 transition"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.3 }}
            className="text-white hover:text-gray-300 transition"
          >
            <FaPinterest />
          </motion.a>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default Contact;
