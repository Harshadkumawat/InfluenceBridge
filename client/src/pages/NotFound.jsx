import React from "react";
import { Link } from "react-router-dom";
import { Ghost, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="relative">
          <h1 className="text-[150px] font-bold text-white opacity-10 select-none">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Ghost
              size={100}
              className="text-purple-400 animate-[float_3s_ease-in-out_infinite]"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-purple-300 mb-8 max-w-md mx-auto">
          Oops! It seems like you've ventured into the unknown. The page you're
          looking for has vanished into thin air.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300"
        >
          <Home size={20} />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
