import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaRegHeart, FaShareAlt, FaBookmark, FaRegBookmark } from "react-icons/fa";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/beach-hero.jpg";
import photo8 from "../assets/photo5.jpg";
import photo9 from "../assets/photo6.jpg";
import Navbar from "../components/Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";

const allProducts = [
  { id: 1, title: "Sunset Portrait", img: photo9, category: "Beach" },
  { id: 2, title: "Vintage Vibes", img: photo2, category: "Vintage" },
  { id: 3, title: "Golden Hour", img: photo3, category: "Golden" },
  { id: 4, title: "Ocean Serenity", img: photo4, category: "Beach" },
  { id: 5, title: "Old Goa Streets", img: photo5, category: "Vintage" },
  { id: 6, title: "Golden Sunset", img: photo6, category: "Golden" },
  { id: 7, title: "Palm Trees", img: photo7, category: "Beach" },
  { id: 8, title: "Retro Scooter", img: photo8, category: "Vintage" },
  { id: 9, title: "Golden Frame", img: photo1, category: "Golden" },
];

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [zoomedImage, setZoomedImage] = useState(null);
  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const categories = ["All", "Beach", "Vintage", "Golden"];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleLike = useCallback((id) => setLiked((prev) => ({ ...prev, [id]: !prev[id] })), []);
  const toggleSave = useCallback((id) => setSaved((prev) => ({ ...prev, [id]: !prev[id] })), []);

  const filtered = allProducts.filter(
    (p) =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="text-white font-sans bg-black min-h-screen">
      {/* Hero */}
      <div
        className="w-full h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${photo7})`,
        }}
      >
        <div className=" text-black">
          <Navbar />
        </div>
        <div className="bg-transparent backdrop-blur-md bg-opacity-50 p-6 rounded-lg shadow-md text-gray-800 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            Golden Hour Vibes
          </h2>
          <p className="text-lg md:text-xl italic text-gray-200">
            Explore timeless photography with the soul of Goa — beach, breeze &
            vintage feels.
          </p>
        </div>
      </div>

      <div className="rounded-lg">
        {/* Filter & Search */}
        <div className="flex flex-wrap justify-center gap-4 py-6 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full border transition text-sm md:text-base ${
                selectedCategory === cat
                  ? "bg-yellow-500 text-black"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}

          <motion.input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-black border border-white/20 text-white rounded-full px-4 py-2 ml-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            initial={{ width: 0 }}
            animate={{ width: "12rem" }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Product Grid */}
        <section className="px-5 md:px-16 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginated.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/10 border border-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <LazyLoadImage
                  src={product.img}
                  alt={product.title}
                  onClick={() => setZoomedImage(product)}
                  className="w-full h-60 object-cover hover:scale-105 transition-all duration-500"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-300">{product.category}</p>
                  <div className="flex gap-4 mt-3 text-lg">
                    <button onClick={() => toggleLike(product.id)}>
                      {liked[product.id] ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FaRegHeart />
                      )}
                    </button>
                    <button onClick={() => toggleSave(product.id)}>
                      {saved[product.id] ? (
                        <FaBookmark className="text-yellow-400" />
                      ) : (
                        <FaRegBookmark />
                      )}
                    </button>
                    <button
                      onClick={() => alert("Share functionality coming soon!")}
                    >
                      <FaShareAlt />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 border rounded-md ${
                  page === currentPage
                    ? "bg-yellow-500 text-black"
                    : "text-white border-white"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
          >
            <motion.img
              src={zoomedImage.img}
              alt={zoomedImage.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl max-h-[80vh] rounded-xl shadow-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Product;
