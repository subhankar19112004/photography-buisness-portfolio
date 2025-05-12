import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import spinnerVideo from "../assets/spinner.mp4"; // make sure the path is valid

const SpinnerScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/getacall");
    }, 2000); // 1 second

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      <video
        src={spinnerVideo}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SpinnerScreen;
