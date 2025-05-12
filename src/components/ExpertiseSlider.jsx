// import React, { useEffect, useRef, useState } from "react";
// import { useSwipeable } from "react-swipeable";
// import { SLIDES } from "../../constants"; // Import the SLIDES constant
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const ExpertiseSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(false);
//   const intervalRef = useRef(null);

//   // Function to trigger fade animation and then execute the callback
//   const triggerFade = (cb) => {
//     setFade(true);
//     setTimeout(() => {
//       cb();
//       setFade(false);
//     }, 300);
//   };

//   // Function to go to the next slide
//   const nextSlide = () =>
//     triggerFade(() =>
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length || 0)
//     );

//   // Function to go to the previous slide
//   const prevSlide = () =>
//     triggerFade(() =>
//       setCurrentIndex((prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length || 0)
//     );

//   // Swipeable handlers for touch/swipe gestures
//   const handlers = useSwipeable({
//     onSwipedLeft: nextSlide,
//     onSwipedRight: prevSlide,
//     trackMouse: true,
//   });

//   // Set an interval to automatically move to the next slide
//   useEffect(() => {
//     intervalRef.current = setInterval(nextSlide, 5000);
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   // Log SLIDES to ensure data is correct (for debugging)
//   useEffect(() => {
//     console.log(SLIDES);
//   }, []);

//   return (
//     <div
//       {...handlers}
//       className="relative w-full max-w-7xl mx-auto mt-20 px-4 text-white"
//     >
//       {/* Slide Image */}
//       <div
//         className={`rounded-2xl overflow-hidden transition duration-500 ${fade ? "opacity-0" : "opacity-100"} backdrop-blur-sm`}
//       >
//         <img
//           src={SLIDES[currentIndex].image}
//           alt={SLIDES[currentIndex].title}
//           className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-lg border-2 border-gray-300 p-4"
//         />
//       </div>

//       {/* Animated Captions */}
//       <div className="overflow-hidden h-[60px] mt-4">
//         <h3 key={currentIndex + "-title"} className="text-xl font-bold animate-fade-in-up">
//           {SLIDES[currentIndex].title}
//         </h3>
//         <p key={currentIndex + "-location"} className="text-sm text-gray-300 animate-fade-in-up delay-150">
//           {SLIDES[currentIndex].location}
//         </p>
//       </div>

//       {/* Controls */}
//       <div className="flex items-center justify-between mt-6">
//         <div className="flex items-center gap-4">
//           <button
//             onClick={prevSlide}
//             className="p-2 bg-white/10 hover:bg-white/20 rounded-full"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="p-2 bg-white/10 hover:bg-white/20 rounded-full"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//         <button className="text-sm underline underline-offset-4 hover:text-gray-300">
//           See all →
//         </button>
//       </div>

//       {/* Pagination Dots with Progress */}
//       <div className="flex justify-center mt-4 space-x-3">
//         {SLIDES.map((_, idx) => {
//           return (
//             <div
//               key={idx}
//               onClick={() => triggerFade(() => setCurrentIndex(idx))}
//               className={`w-4 h-4 rounded-full relative cursor-pointer ${currentIndex === idx ? "bg-white" : "bg-gray-500"}`}
//             >
//               {currentIndex === idx && (
//                 <span className="absolute inset-0 animate-progress-ring bg-white/20 rounded-full" />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ExpertiseSlider;


import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { SLIDES } from "../../constants"; // Import the SLIDES constant
import { ChevronLeft, ChevronRight } from "lucide-react";

const ExpertiseSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalRef = useRef(null);

  // Function to trigger fade animation and then execute the callback
  const triggerFade = (cb) => {
    setFade(true);
    setTimeout(() => {
      cb();
      setFade(false);
    }, 300);
  };

  // Function to go to the next slide
  const nextSlide = () =>
    triggerFade(() =>
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length || 0)
    );

  // Function to go to the previous slide
  const prevSlide = () =>
    triggerFade(() =>
      setCurrentIndex((prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length || 0)
    );

  // Swipeable handlers for touch/swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  // Set an interval to automatically move to the next slide
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Log SLIDES to ensure data is correct (for debugging)
  useEffect(() => {
    console.log(SLIDES);
  }, []);

  return (
    <div
      {...handlers}
      className="relative w-full max-w-7xl mx-auto mt-20 px-4 text-white min-h-screen flex flex-col items-center justify-center"
    >
      {/* Slide Image */}
      <div
        className={`rounded-2xl overflow-hidden transition duration-500 ${fade ? "opacity-0" : "opacity-100"} backdrop-blur-sm w-full`}
      >
        <img
          src={SLIDES[currentIndex].image}
          alt={SLIDES[currentIndex].title}
          className="w-full h-[500px] object-cover rounded-2xl shadow-lg border-2 border-gray-300 p-4"
        />
      </div>

      {/* Animated Captions */}
      <div className="overflow-hidden h-[60px] mt-4 text-center">
        <h3 key={currentIndex + "-title"} className="text-xl font-bold animate-fade-in-up">
          {SLIDES[currentIndex].title}
        </h3>
        <p key={currentIndex + "-location"} className="text-sm text-gray-300 animate-fade-in-up delay-150">
          {SLIDES[currentIndex].location}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6 w-full max-w-7xl px-4">
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <button className="text-sm underline underline-offset-4 hover:text-gray-300">
          See all →
        </button>
      </div>

      {/* Pagination Dots with Progress */}
      <div className="flex justify-center mt-4 space-x-3">
        {SLIDES.map((_, idx) => {
          return (
            <div
              key={idx}
              onClick={() => triggerFade(() => setCurrentIndex(idx))}
              className={`w-4 h-4 rounded-full relative cursor-pointer ${currentIndex === idx ? "bg-white" : "bg-gray-500"}`}
            >
              {currentIndex === idx && (
                <span className="absolute inset-0 animate-progress-ring bg-white/20 rounded-full" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpertiseSlider;

