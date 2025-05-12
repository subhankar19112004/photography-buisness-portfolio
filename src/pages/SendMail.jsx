// src/pages/SendMail.jsx
import { useLocation } from 'react-router-dom';

export default function SendMail() {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div className="flex items-center justify-center h-screen bg-green-50 text-center p-4">
      <div className="bg-white shadow-xl p-10 rounded-xl max-w-md">
        <h2 className="text-2xl font-bold mb-2 text-green-800">📬 Mail Sent</h2>
        <p className="text-gray-600">
          We've sent a confirmation to <strong>{email}</strong>
        </p>
      </div>
    </div>
  );
}
