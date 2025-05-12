import { useNavigate } from "react-router-dom";

const MailSent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 font-getacall">
      <h1 className="text-3xl mb-4">📩 Mail Sent!</h1>
      <p className="mb-8 text-lg">We’ll call you as soon as possible.</p>
      <button
        onClick={() => navigate("/getacall")}
        className="bg-white text-black px-5 py-2 rounded-md font-semibold transition duration-300 hover:bg-gray-200"
      >
        ⬅ Back to Get A Call
      </button>
    </div>
  );
};

export default MailSent;
