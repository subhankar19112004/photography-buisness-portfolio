// import React from "react";

// function HomeLayout() {
//   return (
//     <div className="">
//       <div className=" flex gap-1 flex-col">
//         <p className=" text-7xl  text-gray-100 font-mono">
//           Capturing beautiful
//         </p>
//         <p className=" text-7xl  text-gray-100 font-mono">
//           moment inside lens and
//         </p>
//         <p className=" text-7xl  text-gray-100 font-mono">shutterspeed</p>
//       </div>
//       <div className="flex gap-4 mt-10 flex-col">
//         <div className="flex gap-4 flex-wrap">
//           <button className="px-6 py-3  bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition">
//             Landscape
//           </button>
//           <button className="px-6 py-3  bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition">
//             Wildlife
//           </button>
//         </div>
//         <div className="flex gap-4 flex-wrap">
//         <button className="px-6 py-3  bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition">
//           Portrait
//         </button>
//         <button className="px-6 py-3 bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition">
//           Landscape
//         </button>

//         <button className="px-6 py-3  bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition">
//           Portrait
//         </button>
//         </div>
//         <div>cards</div>
//       </div>
//     </div>
//   );
// }

// export default HomeLayout;

// import React, { useState } from "react";

// function HomeLayout() {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const handleCardClick = (cardId) => {
//     setSelectedCard(selectedCard === cardId ? null : cardId);
//   };

//   return (
//     <div className="p-10">
//       {/* Heading Section */}
//       <div className="flex gap-1 flex-col">
//         <p className="text-7xl text-gray-100 font-mono">Capturing beautiful</p>
//         <p className="text-7xl text-gray-100 font-mono">
//           moment inside lens and
//         </p>
//         <p className="text-7xl text-gray-100 font-mono">shutterspeed</p>
//       </div>

//       {/* Category Buttons */}
//       <div className="flex gap-4 mt-10 flex-col">
//         <div className="flex gap-4 flex-wrap">
//           <button className="px-6 py-3 bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition">
//             Landscape
//           </button>
//           <button className="px-6 py-3 bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition">
//             Wildlife
//           </button>
//         </div>
//         <div className="flex gap-4 flex-wrap">
//           <button className="px-6 py-3 bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition">
//             Portrait
//           </button>
//           <button className="px-6 py-3 bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition">
//             Landscape
//           </button>
//           <button className="px-6 py-3 bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition">
//             Portrait
//           </button>
//         </div>
//       </div>

//       {/* 👇👇 Cards Section Inserted Here 👇👇 */}
//       <div className="flex items-center justify-center gap-6 ml-[600px] mt-10">
//         {/* Card 1 */}
//         <div
//           className={`group relative flex items-center gap-2 p-4 backdrop-blur-xs bg-white/10 rounded-xl border border-white overflow-hidden transition-transform duration-700 hover:scale-105 cursor-pointer ${
//             selectedCard === 1 ? "w-1/2" : "w-1/3"
//           }`}
//           onClick={() => handleCardClick(1)}
//         >
//           <img
//             src="https://images.squarespace-cdn.com/content/v1/5da0b708cf23393c2aa2a5ef/198f8d27-5567-4c7c-a503-4369fe53956c/%C2%A9Zach+Nichols+%28December+28%2C+2023+%5B23.31.02%5D%29+-+ZAC_1422-Enhanced-NR.jpg?format=2500w"
//             className="w-24 h-24 object-cover rounded-md"
//             alt="Image 1"
//           />
//           <div className="flex flex-col transition-all duration-500 opacity-0 group-hover:opacity-100">
//             <p className="text-white mt-2 text-sm font-semibold text-center">
//               Lonely Life at the Baltimore
//             </p>
//             <p className="text-gray-300 text-xs text-center">
//               Shot with Sony a6000
//             </p>
//             <p className="text-gray-400 text-[10px] text-center mt-1">
//               A cold evening capture with minimal lights.
//             </p>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div
//           className={`group relative flex items-center gap-2 p-4 backdrop-blur-xs bg-white/10 rounded-xl border border-white overflow-hidden transition-transform duration-700 hover:scale-105 cursor-pointer ${
//             selectedCard === 2 ? "w-1/2" : "w-1/3"
//           }`}
//           onClick={() => handleCardClick(2)}
//         >
//           <img
//             src="https://images.squarespace-cdn.com/content/v1/5da0b708cf23393c2aa2a5ef/1628486273102-0ANECQFMMN0I62EY0WIE/%C2%A9ZachNichols+%28July+22%2C+2021+%5B20.06.30%5D%29+-+ZAC_6522.jpg?format=1500w"
//             className="w-24 h-24 object-cover rounded-md"
//             alt="Image 2"
//           />
//           <div className="flex flex-col transition-all duration-500 opacity-0 group-hover:opacity-100">
//             <p className="text-white mt-2 text-sm font-semibold text-center">
//               A Symphony by the Sea
//             </p>
//             <p className="text-gray-300 text-xs text-center">
//               Shot with Canon R6
//             </p>
//             <p className="text-gray-400 text-[10px] text-center mt-1">
//               Waves crashing in a dreamy sunset.
//             </p>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div
//           className={`group relative flex items-center p-4 backdrop-blur-xs bg-white/10 rounded-xl border border-white overflow-hidden transition-transform duration-700 hover:scale-105 cursor-pointer ${
//             selectedCard === 3 ? "w-1/2" : "w-1/3"
//           }`}
//           onClick={() => handleCardClick(3)}
//         >
//           <img
//             src="https://images.squarespace-cdn.com/content/v1/5da0b708cf23393c2aa2a5ef/1712348048568-7BOMA97ZXCBKZ0W9WRGQ/%C2%A9Zach+Nichols+%28March+27%2C+2024+%5B11.29.42%5D%29+-+ZAC_1164.jpg?format=750w"
//             className="w-24 h-24 object-cover rounded-md"
//             alt="Image 3"
//           />
//           <div className="flex flex-col ml-2 transition-all duration-500 opacity-0 group-hover:opacity-100">
//             <p className="text-white mt-2 text-sm font-semibold text-center">
//               Whispers of the Forest
//             </p>
//             <p className="text-gray-300 text-xs text-center">
//               Shot with Nikon D750
//             </p>
//             <p className="text-gray-400 text-[10px] text-center mt-1">
//               Early morning mist and green whispers.
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* 👆👆 Cards Section ends 👆👆 */}
//     </div>
//   );
// }

// export default HomeLayout;



import React, { useState } from "react";

function HomeLayout() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Heading Section */}
      <div className="flex gap-1 flex-col">
        <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-gray-100 font-mono">
          Capturing beautiful
        </p>
        <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-gray-100 font-mono">
          moment inside lens and
        </p>
        <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-gray-100 font-mono">
          shutterspeed
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex gap-4 mt-10 flex-col">
        <div className="flex gap-4 flex-wrap">
          <button className="px-6 py-3 bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition hover:border-yellow-400">
            Landscape
          </button>
          <button className="px-6 py-3 bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition hover:border-yellow-400">
            Wildlife
          </button>
        </div>
        <div className="flex gap-4 flex-wrap">
          <button className="px-6 py-3 bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition hover:border-yellow-400">
            Architectural
          </button>
          <button className="px-6 py-3 bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition hover:border-yellow-400">
            Travel
          </button>
          <button className="px-6 py-3 bg-transparent backdrop-blur-xs text-white border border-white rounded-full font-semibold hover:bg-gray-200 hover:text-black transition hover:border-yellow-400">
            Portrait
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 sm:ml-0 md:ml-[200px] lg:ml-[600px]">
        {[1, 2, 3].map((id) => {
          const cardData = [
            {
              img: "https://images.squarespace-cdn.com/content/v1/5da0b708cf23393c2aa2a5ef/198f8d27-5567-4c7c-a503-4369fe53956c/%C2%A9Zach+Nichols+%28December+28%2C+2023+%5B23.31.02%5D%29+-+ZAC_1422-Enhanced-NR.jpg?format=2500w",
              title: "Lonely Life at the Baltimore",
              camera: "Shot with Sony a6000",
              desc: "A cold evening capture with minimal lights.",
            },
            {
              img: "https://images.squarespace-cdn.com/content/v1/5da0b708cf23393c2aa2a5ef/1628486273102-0ANECQFMMN0I62EY0WIE/%C2%A9ZachNichols+%28July+22%2C+2021+%5B20.06.30%5D%29+-+ZAC_6522.jpg?format=1500w",
              title: "A Symphony by the Sea",
              camera: "Shot with Canon R6",
              desc: "Waves crashing in a dreamy sunset.",
            },
            {
              img: "https://images.squarespace-cdn.com/content/v1/5da0b708cf23393c2aa2a5ef/1712348048568-7BOMA97ZXCBKZ0W9WRGQ/%C2%A9Zach+Nichols+%28March+27%2C+2024+%5B11.29.42%5D%29+-+ZAC_1164.jpg?format=750w",
              title: "Whispers of the Forest",
              camera: "Shot with Nikon D750",
              desc: "Early morning mist and green whispers.",
            },
          ][id - 1];

          return (
            <div
              key={id}
              className={`group relative flex flex-col items-center hover:border-blue-500 justify-center p-4 backdrop-blur-xs bg-white/10 rounded-xl border border-gray-300 overflow-hidden transition-all duration-700 cursor-pointer ${
                hoveredCard === id ? "w-[300px]" : "w-[200px]"
              } h-[150px]`}
              onMouseEnter={() => setHoveredCard(id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src={cardData.img}
                className={`rounded-md object-cover transition-all duration-700 ${
                  hoveredCard === id ? "w-24 h-32" : "w-20 h-20"
                }`}
                alt={`Image ${id}`}
              />
              <div
                className={`flex flex-col items-center text-center mt-2 transition-all duration-700 ${
                  hoveredCard === id ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-white text-xs font-semibold">{cardData.title}</p>
                <p className="text-gray-300 text-[10px]">{cardData.camera}</p>
                <p className="text-gray-400 text-[8px] mt-1">{cardData.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeLayout;
