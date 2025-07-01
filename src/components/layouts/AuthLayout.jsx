import React from 'react';
// import LOGO from "../../assets/images/logo.webp";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white border-2 border-[#1e3a8a] rounded-xl shadow-lg flex flex-col items-center p-8">
        {/* Removed logo and TaskUp title */}
        <div className="w-full flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
