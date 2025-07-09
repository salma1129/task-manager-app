import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/t.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#101a2b] bg-opacity-95 text-white shadow-2xl px-8 py-4 flex items-center justify-between">
      {/* Left: Brand with Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="TaskUp Logo" className="h-9 w-9 object-contain" />
        <h1
          className="text-2xl font-extrabold cursor-pointer text-white hover:text-cyan-300 transition duration-300 pr-8 tracking-tight drop-shadow-lg"
          onClick={() => navigate('/')}
        >
          TaskUp
        </h1>
      </div>
  
    {/* Center: Navigation Links */}
    <div className="flex gap-12 text-base uppercase font-semibold tracking-wide mx-auto">
      <div onClick={() => navigate('/')} className="cursor-pointer hover:text-cyan-300 hover:underline underline-offset-8 transition">
        Home
      </div>
      <div onClick={() => navigate('/about')} className="cursor-pointer hover:text-cyan-300 hover:underline underline-offset-8 transition">
        About
      </div>
      <div onClick={() => navigate('/contact')} className="cursor-pointer hover:text-cyan-300 hover:underline underline-offset-8 transition">
        Contact
      </div>
    </div>
  
    {/* Right: Logout Button */}
    <button
      onClick={handleLogout}
      className="bg-[#101a36] bg-opacity-90 text-white px-6 py-2 rounded-xl uppercase font-semibold tracking-wider shadow-md hover:bg-cyan-900 hover:text-cyan-200 hover:shadow-xl transition border-none focus:outline-none focus:ring-2 focus:ring-cyan-900"
    >
      Logout
    </button>
  </nav>
  )
};

export default Navbar;
