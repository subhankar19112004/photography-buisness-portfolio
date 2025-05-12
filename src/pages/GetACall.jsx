import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import './GetACall.css';
import callVideo from "../assets/call.mp4"; // Make sure the path is correct

const GetACall = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !phone) {
      toast.error("Please enter both email and phone number.");
      return;
    }
    toast.success("Redirecting to mail send page...");
    setTimeout(() => {
      navigate("/mail-sent");
    }, 1500);
  };

  const handleCall = () => {
    if (!phone) {
      toast.error("Enter phone number first.");
      return;
    }
    window.open(`tel:${phone}`);
  };

  return (
    <div className="min-h-screen bg-black text-white font-getacall grid grid-cols-1 lg:grid-cols-2">
      
      {/* LEFT: Form Section */}
      <div className="flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Get a Call</h2>

          <button
            onClick={() => navigate("/home")}
            className="text-white mb-4 underline hover:text-gray-300 transition text-sm"
          >
            ⬅ Back to Home
          </button>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-md bg-white text-black placeholder-gray-600"
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-3 rounded-md bg-white text-black placeholder-gray-600"
            />
            <button
              type="submit"
              className="mt-4 bg-white text-black py-2 rounded-md font-semibold transition duration-300 hover:bg-gray-200"
            >
              Send Mail
            </button>
            <button
              type="button"
              onClick={handleCall}
              className="bg-white text-black py-2 rounded-md font-semibold transition duration-300 hover:bg-gray-200"
            >
              Call Now
            </button>
          </form>
        </motion.div>
      </div>

      {/* RIGHT: Video Section */}
      <div className="hidden lg:flex items-center justify-center p-4">
        <video
          className="rounded-2xl shadow-lg w-full h-[90%] object-cover"
          src={callVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default GetACall;
