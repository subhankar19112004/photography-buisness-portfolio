import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetACall.css'; // Assuming custom styling is here
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const services = [
  { title: 'Wedding Photography', desc: 'Capture your special day in timeless style.', img: 'https://picsum.photos/seed/picsum/200/300?random=2' },
  { title: 'Portrait Sessions', desc: 'Personalized, elegant, and creative portraits.', img: 'https://picsum.photos/seed/picsum/200/300?random=1' },
  { title: 'Product Shoots', desc: 'High-quality visuals for your brand.', img: 'https://picsum.photos/seed/picsum/200/300?random=5' },
  { title: 'Event Coverage', desc: 'Candid moments from all angles.', img: 'https://picsum.photos/seed/picsum/200/300?random=4' },
  { title: 'Fashion Shoots', desc: 'Bold, editorial-style imagery.', img: 'https://picsum.photos/seed/picsum/200/300?random=6' },
  { title: 'Real Estate Photography', desc: 'Showcasing properties in their best light.', img: 'https://picsum.photos/seed/picsum/200/300?random=3' },
  { title: 'Aerial Photography', desc: 'Capture stunning bird’s eye view photos.', img: 'https://picsum.photos/seed/picsum/200/300?random=7' },
  { title: 'Food Photography', desc: 'Delicious, mouth-watering photos for your restaurant.', img: 'https://picsum.photos/seed/picsum/200/300?random=8' },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-black to-gray-700 text-white py-20">
        <h1 className="text-5xl font-bold text-center mt-30 mb-16">Our Photography Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white text-black rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <img src={service.img} alt={service.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.desc}</p>
                <button
                  onClick={() => navigate('/book-service')}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500 transition-all duration-300"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
