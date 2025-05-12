import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// 🖼️ Replace with your actual image imports
import { IMAGE1, IMAGE2, IMAGE3, IMAGE4 } from "../../constants";

function AboutUs() {
  const images = [IMAGE1, IMAGE2, IMAGE3, IMAGE4];
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <div className="relative h-auto px-6 py-12 mt-20 ml-4 mr-4 sm:ml-20 sm:mr-20 flex flex-col items-center justify-center bg-transparent">
        {/* 🔮 Glassmorphism Background */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg z-0 rounded-tr-xl border border-white"></div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-7xl">
          
          {/* 💻 Desktop/Tablet Rotating Card Gallery */}
          <div className="hidden sm:flex relative items-center justify-center w-full sm:w-[500px] h-[300px] mb-8 sm:mb-0">
            {images.map((img, index) => {
              const rotateDeg = (index - (images.length - 1) / 2) * 12;
              const shiftX = (index - (images.length - 1) / 2) * 40;
              const isActive = activeIndex === index;

              return (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute border border-white w-60 h-80 object-cover rounded-xl shadow-xl cursor-pointer transition-all duration-500 ease-in-out ${
                    isActive ? "scale-125 z-30 rotate-0" : "z-10"
                  }`}
                  style={{
                    transform: isActive
                      ? "translateY(-20px)"
                      : `rotate(${rotateDeg}deg) translateX(${shiftX}px)`,
                    zIndex: isActive ? 30 : index + 1,
                  }}
                />
              );
            })}
          </div>

          {/* 📱 Mobile Swiper Carousel */}
          <div className="sm:hidden w-full mb-8">
            <Swiper
              spaceBetween={10}
              slidesPerView={1.2}
              centeredSlides={true}
              autoplay={{ delay: 2500 }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="w-full h-60"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Mobile-Gallery-${index}`}
                    className="rounded-xl object-cover w-full h-60 border border-white shadow-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 📖 Text Section */}
          <div className="flex flex-col items-start gap-6 text-white">
            <h1 className="text-4xl font-bold text-center text-white z-10 mb-5 relative group">
              About Us
              <span className="block h-1 w-0 bg-white transition-all duration-500 group-hover:w-1/2 mx-auto mt-1"></span>
            </h1>

            <p className="text-4xl">
              Photography is driven by a deep <br />
              passion for capturing life’s <br />
              most precious moments with <br />
              artistry and a touch of magic.
            </p>

            <div className="flex items-center">
              <Link to="/getacall" className="hover:text-white">
                <button className="relative border border-white rounded-4xl px-5 font-serif py-3 bg-white/20 text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
                  Learn more
                </button>
              </Link>
              <Link to="/getacall" className="hover:text-white">
                <div className=" border rounded-full ml-4 border-white bg-white/20 p-3 transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
                  <FiArrowUpRight className=" sm:hidden" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;



// import React, { useState } from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import { Link } from "react-router-dom";

// // 🖼️ Replace these with your imported image constants
// import { IMAGE1, IMAGE2, IMAGE3, IMAGE4 } from "../../constants"; // e.g., export from constants.js

// function AboutUs() {
//   const images = [IMAGE1, IMAGE2, IMAGE3, IMAGE4];
//   const [activeIndex, setActiveIndex] = useState(null);

//   return (
//     <div>
      

//       <div className="relative h-[500px]   px-6 py-12 mt-20 ml-20 mx-20 flex items-center justify-center bg-transparent">
     
//       {/* 🔮 Glassmorphism Background */}
//       <div className="absolute inset-0 bg-white/10 backdrop-blur-lg z-0 rounded-tr-xl border border-white"></div>
     

//       {/* Content Section */}
//       <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-7xl">
        
//         {/* 📸 Gallery - Playing Card Style */}
//         <div className="relative flex items-center justify-center h-[300px] w-[500px]">
//           {images.map((img, index) => {
//             const rotateDeg = (index - (images.length - 1) / 2) * 12;
//             const shiftX = (index - (images.length - 1) / 2) * 40;
//             const isActive = activeIndex === index;

//             return (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Gallery-${index}`}
//                 onClick={() => setActiveIndex(index)}
//                 className={`absolute border border-white w-60 h-80 object-cover rounded-xl shadow-xl cursor-pointer transition-all duration-500 ease-in-out
//                   ${isActive ? 'scale-125 z-30 rotate-0' : 'z-10'}
//                 `}
//                 style={{
//                   transform: isActive
//                     ? "translateY(-20px)"
//                     : `rotate(${rotateDeg}deg) translateX(${shiftX}px)`,
//                   zIndex: isActive ? 30 : index + 1,
//                 }}
//               />
//             );
//           })}
//         </div>

//         {/* 📖 Text Section */}
//         <div className="flex flex-col  items-start gap-6 text-white">
//         <h1 className="text-4xl font-bold text-center text-white z-10 mb-5 relative group">
//   About Us
//   <span className="block h-1 w-0 bg-white transition-all duration-500 group-hover:w-1/2 mx-auto mt-1"></span>
// </h1>
//           <p className="text-4xl  ">
//             Photography is driven by a deep <br />
//             passion for capturing life’s <br />
//             most precious moments with <br />
//             artistry and a touch of magic.
//           </p>

//           <div className="flex items-center">
//             <Link to="/getacall" className="hover:text-white">
//               <button className="relative  border border-white rounded-4xl px-5 font-serif py-3 bg-white/20 text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
//                 Learn more
//               </button>
//             </Link>
//             <Link to="/getacall" className="hover:text-white">
//               <div className="border rounded-full mr-7 border-white bg-white/20 p-3 transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
//                 <FiArrowUpRight />
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default AboutUs;
