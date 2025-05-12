import React, { useState, useEffect } from 'react';
import './GetACall.css';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Confetti from 'react-confetti';
import Lottie from 'lottie-react';
import confettiAnimation from '../assets/confetti.json'; // Ensure this path is correct

const BookService = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!form.name || !form.email || !form.service) {
      toast.error('Please fill all required fields!');
      return;
    }

    // Sending email using EmailJS
    emailjs
      .send('service_mt6jjec', 'template_gti1fza', form, '6da2xyEm6qbLlqMQQ')
      .then(
        () => {
          toast.success('Booking submitted!');
          setForm({ name: '', email: '', service: '', message: '' });
          setShowConfirmation(true);
          setConfettiActive(true);
        },
        (error) => {
          // Enhanced error handling
          console.error('EmailJS Error:', error);
          toast.error(`Something went wrong! Error: ${error.text}`);
        }
      );
  };

  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => {
        setShowConfirmation(false);
        navigate('/services');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showConfirmation, navigate]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-400 to-black text-white font-gac py-16 px-4">
        <Toaster />
        <h1 className="text-4xl font-bold mb-10 mt-20 text-center">Book Your Service</h1>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-lg  mx-auto space-y-8 bg-zinc-900 p-8 rounded-3xl shadow-2xl">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
            />
            <input
              type="text"
              name="service"
              value={form.service}
              placeholder="Service You Want"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
            />
            <textarea
              name="message"
              value={form.message}
              placeholder="Additional Notes (optional)"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
              rows={4}
            />
          </div>
          
          {/* Submit & Back Buttons */}
          <div className="flex gap-6 justify-center">
            <button
              type="submit"
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300"
            >
              Submit
            </button>
            <button
              onClick={() => navigate('/services')}
              type="button"
              className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Back
            </button>
          </div>
        </form>

        {/* Confetti Animation */}
        <AnimatePresence>
          {showConfirmation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white text-black rounded-xl p-8 w-full max-w-md text-center shadow-lg"
              >
                <Lottie animationData={confettiAnimation} loop={false} />
                <h2 className="text-2xl font-bold mb-3">Booking Confirmed ✅</h2>
                <p className="mb-6">Thank you for booking! We'll get in touch with you shortly.</p>
                <button
                  onClick={() => {
                    setShowConfirmation(false);
                    navigate('/');
                  }}
                  className="bg-black text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {confettiActive && <Confetti />}
      </div>
    </>
  );
};

export default BookService;
