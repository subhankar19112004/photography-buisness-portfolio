import React from 'react';
import { LANDING_BACKGROUND_IMAGE } from '../../constants';
import { BsFillChatSquareDotsFill } from 'react-icons/bs';
import { FaTasks } from 'react-icons/fa';
import { SiGmail, SiSlack, SiGooglecalendar } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Landing() {
  const navigate = useNavigate();

  const handlePageChange = () => {
    navigate('/home');
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${LANDING_BACKGROUND_IMAGE})`,
        backgroundSize: 'cover',
      }}
    >
      {/* Center Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center space-y-6 z-10"
      >
        <div className="flex justify-center">
          <BsFillChatSquareDotsFill className="h-24 w-24 text-blue-600" />
        </div>
        <h1 className="text-5xl font-semibold text-white">
          Think, plan, and track
          <p className="text-gray-400 mt-2 font-medium text-2xl">all in one place</p>
        </h1>
        <p className="text-gray-300 text-lg">
          Efficiently manage your tasks and boost productivity.
        </p>
        <button
          onClick={handlePageChange}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-700 shadow-md hover:shadow-xl"
        >
          Continue with us
        </button>
      </motion.div>

      {/* Bottom Left Card */}
      <motion.div
        initial={{ opacity: 0, x: -100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="absolute bottom-8 left-8 bg-white rounded-3xl shadow-md p-6 w-72 transform -rotate-3 hover:rotate-0 transition-all duration-500"
      >
        <div className="relative">
          {/* Folder tab */}
          <div className="absolute -top-4 left-0 bg-white w-16 h-4 rounded-tl-2xl rounded-tr-2xl shadow-md"></div>
          <h3 className="text-lg font-bold mb-4">Today's Tasks</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">New Ideas for campaign</p>
                <p className="text-xs text-gray-400">Sep 10</p>
              </div>
              <div className="w-16 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-500 h-full w-[60%]"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Design PPT #4</p>
                <p className="text-xs text-gray-400">Sep 18</p>
              </div>
              <div className="w-16 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-500 h-full w-[112%]"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Right Card */}
      <motion.div
        initial={{ opacity: 0, x: 100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="absolute bottom-8 right-8 bg-white rounded-3xl shadow-md p-6 w-72 transform rotate-3 hover:rotate-0 transition-all duration-500"
      >
        <div className="relative">
          {/* Folder tab */}
          <div className="absolute -top-4 left-0 bg-white w-16 h-4 rounded-tl-2xl rounded-tr-2xl shadow-md"></div>
          <h3 className="text-lg font-bold mb-4">100+ Integrations</h3>
          <div className="flex space-x-4 mt-4">
            <div className="bg-gray-100 p-3 rounded-xl">
              <SiGmail className="text-red-500 text-3xl" />
            </div>
            <div className="bg-gray-100 p-3 rounded-xl">
              <SiSlack className="text-purple-500 text-3xl" />
            </div>
            <div className="bg-gray-100 p-3 rounded-xl">
              <SiGooglecalendar className="text-green-500 text-3xl" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Landing;
