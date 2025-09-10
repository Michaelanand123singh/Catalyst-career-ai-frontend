// Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        {/* Logo with spin animation */}
        <img
          src="/images/CATT.png"
          alt="Loading..."
          className="w-[15rem] h-[5rem] animate-pulse"
        />
        <p className="mt-4 text-green-700 font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
