// import React from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import { IoIosFlower } from "react-icons/io";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div className=" absolute  top-10 left-8 right-8    ">
//       <div className="flex justify-between items-center bg-transparent p-4 rounded-4xl ">
//         <div className="flex">
//             <div className="text-white"><IoIosFlower className="h-12 w-12"/></div>
//             <div className="text-2xl text-white font-semibold mt-2">PHOTO-COHORT</div>
//         </div>
//         <div>
//           <nav className="hidden md:block border border-yellow-400 bg-amber-50  backdrop-blur-3xl rounded-4xl px-6 p-4  ">
//             <ul className="flex space-x-9">
//               <li><Link className="no-underline hover:text-transparent" to={'/home'}><p className="hover:text-black">Home</p></Link></li>
//               <li>|</li>
//               <li><Link className="no-underline hover:text-transparent"to={'/products'}><p className="hover:text-black">Products</p></Link></li>
//               <li>|</li>
//               <li><Link className="no-underline hover:text-transparent" to={'/services'}><p className="hover:text-black">Services</p></Link></li>
//               <li>|</li>
//               <li><Link className="no-underline hover:text-transparent" to={'/contact'}><p className="hover:text-black">Contact us</p></Link></li>
//             </ul>
//           </nav>
//         </div>
//         <div className="flex items-center gap-0">
//   <Link to={'/spinner'} className=" hover:text-white">
//   <button className="relative overflow-hidden border border-transparent rounded-4xl px-5 font-serif p-3 bg-amber-50 text-black transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-black hover:to-black hover:text-white">
//     book a call
//   </button>
//   </Link>
//   <Link to={'/getacall'} className=" hover:text-white">
//   <p className="border rounded-full border-transparent bg-amber-50 p-3 mb-2 transition-all duration-500 ease-in-out hover:bg-black hover:text-white">
//     <FiArrowUpRight />
//   </p>
//   </Link>
// </div>

//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { IoIosFlower } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="absolute top-4 left-4 right-4 z-50">
      <div className="flex justify-between items-center bg-transparent p-4 rounded-4xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <IoIosFlower className="h-10 w-10 text-white" />
          <h1 className="text-xl md:text-2xl text-white font-semibold font-serif">
            PHOTO-COHORT
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block border border-yellow-400 bg-amber-50  backdrop-blur-3xl rounded-4xl px-6 p-4  ">
             <ul className="flex space-x-9">
               <li><Link className="no-underline hover:text-transparent" to={'/home'}><p className="hover:text-black">Home</p></Link></li>
               <li>|</li>
               <li><Link className="no-underline hover:text-transparent"to={'/products'}><p className="hover:text-black">Products</p></Link></li>
               <li>|</li>
               <li><Link className="no-underline hover:text-transparent" to={'/services'}><p className="hover:text-black">Services</p></Link></li>
               <li>|</li>
               <li><Link className="no-underline hover:text-transparent" to={'/contact'}><p className="hover:text-black">Contact us</p></Link></li>
            </ul>
           </nav>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/spinner">
            <button className="rounded-4xl px-5 font-serif py-2 bg-amber-50 text-black transition duration-500 hover:bg-black hover:border  hover:text-white">
              book a call
            </button>
          </Link>
          <Link to="/getacall">
            <p className="border rounded-full bg-amber-50 p-3 hover:bg-black hover:text-white transition duration-500">
              <FiArrowUpRight />
            </p>
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Side Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-3/4 bg-black text-white shadow-lg rounded-l-3xl p-6"
        >
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-white text-3xl">
              <FiX />
            </button>
          </div>

          <ul className="space-y-4 font-semibold text-gray-200">
            <li><Link to="/home" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact us</Link></li>
            <li>
              <Link to="/spinner" onClick={toggleMenu}>
                <button className="w-full rounded-3xl py-2 mt-2 bg-yellow-500 text-black hover:bg-yellow-600 transition">
                  Book a Call
                </button>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;

