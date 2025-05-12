

// import React, { useEffect, useRef, useState } from "react";
// import Navbar from "../components/Navbar";
// import HomeLayout from "./HomeLayout";
// import { Link } from "react-router-dom";
// import AboutUs from "./AboutUs";
// import PlanetVideo from "../assets/camera.mp4"; // ✅ Correct path
// import ExpertiseSlider from "../components/ExpertiseSlider";

// function Home() {
//   const videoRef = useRef(null);
//   const [isScrolling, setIsScrolling] = useState(false);

//   useEffect(() => {
//     let scrollTimeout;

//     const handleScroll = () => {
//       setIsScrolling(true);
//       if (videoRef.current && videoRef.current.paused) {
//         videoRef.current.play();
//       }

//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         setIsScrolling(false);
//         if (videoRef.current) {
//           videoRef.current.pause();
//         }
//       }, 150); // Pause after 150ms of no scrolling
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative overflow-hidden">
//       {/* 🎥 Fixed Video Background */}
//       <video
//         ref={videoRef}
//         muted
//         loop
//         className="fixed inset-0 w-full h-full object-cover -z-10"
//         preload="auto"
//       >
//         <source src={PlanetVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* 🌟 Main Content */}
//       <div className="relative z-10 flex flex-col min-h-screen">
//         {/* Navbar */}
//         <div className="px-8 pt-10">
//           <Navbar />
//         </div>

//         {/* Hero Section */}
//         <div className="mt-40">
//           <HomeLayout />
//         </div>

//         {/* About Us */}
//         <div className="mt-20">
//           <AboutUs />
//         </div>
//         {/* Expertise Slider */}
//         <div className="mt-5">
//           <ExpertiseSlider />
//         </div>

//         {/* Footer */}
//         <div className=" text-white py-4 text-center mt-10">
//           <p>
//             &copy; 2023{" "}
//             <Link className="font-serif" to="/">
//               Photo-Cohort
//             </Link>
//             . All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useEffect, useRef, useState } from "react";
// import Navbar from "../components/Navbar";
// import HomeLayout from "./HomeLayout";
// import { Link } from "react-router-dom";
// import AboutUs from "./AboutUs";
// import PlanetVideo from "../assets/planet-revolving.mp4";
// import CameraVideo from "../assets/camera.mp4";
// import ExpertiseSlider from "../components/ExpertiseSlider";

// function Home() {
//   const videoRef = useRef(null);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState(PlanetVideo);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // ✅ Scroll Play/Pause
//   useEffect(() => {
//     let scrollTimeout;

//     const handleScroll = () => {
//       setIsScrolling(true);
//       if (videoRef.current && videoRef.current.paused) {
//         videoRef.current.play();
//       }

//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         setIsScrolling(false);
//         if (videoRef.current) {
//           videoRef.current.pause();
//         }
//       }, 150);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ When video ends → switch to second one with fade transition
//   const handleVideoEnd = () => {
//     if (currentVideo === PlanetVideo) {
//       setIsTransitioning(true); // Start fade-out
//       setTimeout(() => {
//         setCurrentVideo(CameraVideo); // Swap source
//         setIsTransitioning(false); // Fade-in new video
//       }, 800); // Match transition duration
//     }
//   };

//   // ✅ Auto-play new video after source switch
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.load();
//       videoRef.current.play().catch(() => {
//         // Some browsers may block autoplay
//         console.warn("Autoplay prevented. User interaction needed.");
//       });
//     }
//   }, [currentVideo]);

//   return (
//     <div className="relative overflow-hidden">
//       {/* 🎥 Smooth Video Background with Fade */}
//       <video
//         ref={videoRef}
//         muted
//         onEnded={handleVideoEnd}
//         className={`fixed inset-0 w-full h-full object-cover -z-10 transition-opacity duration-700 ease-in-out ${
//           isTransitioning ? "opacity-0" : "opacity-100"
//         }`}
//         preload="auto"
//       >
//         <source src={currentVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* 🌟 Main Content */}
//       <div className="relative z-10 flex flex-col min-h-screen">
//         {/* Navbar */}
//         <div className="px-8 pt-10">
//           <Navbar />
//         </div>

//         {/* Hero Section */}
//         <div className="mt-40">
//           <HomeLayout />
//         </div>

//         {/* About Us */}
//         <div className="mt-20">
//           <AboutUs />
//         </div>

//         {/* Expertise Slider */}
//         <div className="mt-5">
//           <ExpertiseSlider />
//         </div>

//         {/* Footer */}
//         <div className="text-white py-4 text-center mt-10">
//           <p>
//             &copy; 2023{" "}
//             <Link className="font-serif" to="/">
//               Photo-Cohort
//             </Link>
//             . All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import HomeLayout from "./HomeLayout";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import PlanetVideo from "../assets/planet-revolving.mp4";
import CameraVideo from "../assets/camera.mp4";
import ExpertiseSlider from "../components/ExpertiseSlider";
import { FiArrowUp } from "react-icons/fi"; // back-to-top icon
import "swiper/css";
import "swiper/css/pagination";

function Home() {
  const videoRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(PlanetVideo);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // ✅ Scroll Play/Pause Logic
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play();
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ When Video Ends, Switch to Next Video with Fade Transition
  const handleVideoEnd = () => {
    if (currentVideo === PlanetVideo) {
      setIsTransitioning(true); // Start fade-out
      setTimeout(() => {
        setCurrentVideo(CameraVideo); // Swap source
        setIsTransitioning(false); // Fade-in new video
      }, 800); // Match transition duration
    }
  };

  // ✅ Auto-play New Video After Source Switch
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        console.warn("Autoplay prevented. User interaction needed.");
      });
    }
  }, [currentVideo]);

  // ✅ Back to Top Button Logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden">
      {/* 🎥 Desktop/Tablet: Video Background */}
      <div className="hidden sm:block">
        <video
          ref={videoRef}
          muted
          onEnded={handleVideoEnd}
          className={`fixed inset-0 w-full h-full object-cover -z-10 transition-opacity duration-700 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          preload="auto"
        >
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 📱 Mobile: Image Background */}
      <div className="block sm:hidden fixed inset-0 bg-cover bg-center -z-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1694608485045-31725c48b522?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>

      {/* 🌟 Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <div className="px-8 pt-10">
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className="mt-40">
          <HomeLayout />
        </div>

        {/* About Us Section */}
        <div className="mt-20">
          <AboutUs />
        </div>

        {/* Expertise Slider */}
        <div className="mt-5">
          <ExpertiseSlider />
        </div>

        {/* Footer */}
        <div className="text-white py-4 text-center mt-10">
          <p>
            &copy; 2023{" "}
            <Link className="font-serif" to="/">
              Photo-Cohort
            </Link>
            . All rights reserved.
          </p>
        </div>

        {/* 🔝 Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-4 bg-transparent border-2 border-white text-white p-3 rounded-full shadow-lg backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 z-50 animate-bounce"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <FiArrowUp size={24} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;

