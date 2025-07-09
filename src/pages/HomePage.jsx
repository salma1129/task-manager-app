import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Inputs/Navbar';

// Images for the homepage
import taskHero from '../assets/images/homepic.png';
import calendarImg from '../assets/images/2.avif';
import progressImg from '../assets/images/apic.jpg';
import reminderImg from '../assets/images/authpic.png';

const HomePage = () => {
  const navigate = useNavigate();
  const featuresSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden text-white relative flex flex-col" style={{ background: '#101a2b' }}>
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>
{/* Hero Section */}
<div className="w-full flex flex-col md:flex-row items-stretch mt-45 md:mt-45 mb-12 px-0 max-w-full relative">
  {/* Left: Hero Image with right shadow/gradient */}
  <div className="relative w-full md:w-1/2 h-72 md:h-[500px] overflow-hidden">
    <img
      src={taskHero}
      alt="Task Hero"
      className="h-full w-full object-cover"
      style={{ objectPosition: 'left' }}
    />
    {/* Gradient overlays for right, top, and bottom */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Right gradient */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent via-[#101a2b]/50 to-[#101a2b]" />
      {/* Top gradient */}
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#101a2b] via-[#101a2b]/60 to-transparent" />
      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#101a2b] via-[#101a2b]/60 to-transparent" />
    </div>
  </div>

  {/* Right: Hero Text aligned slightly left */}
  <div className="w-full md:w-1/2 px-6 md:px-12 flex flex-col justify-center items-end md:items-end text-right md:text-right gap-6">
    <h1 className="text-8xl md:text-7xl font-extrabold leading-tight tracking-tight mb-4 text-cyan-100 font-montserrat md:self-end self-end md:mr-8 mr-4">
      Organize Smarter,<br />
        <span className="text-indigo-300">Achieve More</span>
    </h1>
    <p className="text-xl md:text-2xl max-w-xl text-cyan-100 font-medium drop-shadow mb-4 md:self-end self-end md:mr-8 mr-4">
      TaskUp helps you manage your daily tasks, set priorities, track progress, and never miss a deadline. Boost your productivity with a modern, intuitive task management app.
    </p>
    <div className="flex flex-col md:flex-row gap-4 justify-end md:self-end self-end md:mr-8 mr-4">
      <button
        className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-2xl shadow-lg font-bold text-lg transition uppercase tracking-wider"
        onClick={() => navigate('/login')}
      >
        Get Started
      </button>
      <button
        className="bg-gray-200 hover:bg-gray-300 text-blue-700 border-0 px-8 py-3 rounded-2xl shadow-md font-bold text-lg transition-all duration-200 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => scrollToSection(featuresSectionRef)}
      >
        See Features
      </button>
    </div>
  </div>
</div>





      {/* Main Content */}
      <main className="flex flex-col justify-center items-center flex-1 w-full">
        {/* Features Section */}
        <section ref={featuresSectionRef} className="w-full py-16 px-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-cyan-100 drop-shadow">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg text-black text-center hover:scale-105 transition flex flex-col items-center min-w-[280px] max-w-xl w-full mx-auto">
              <img src={calendarImg} alt="Calendar View" className="w-44 h-44 object-cover rounded-xl mb-4 border-2 border-cyan-200" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-700">Visual Calendar</h3>
              <p className="text-base">See all your tasks and deadlines in a beautiful, interactive calendar view.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg text-black text-center hover:scale-105 transition flex flex-col items-center min-w-[280px] max-w-xl w-full mx-auto">
              <img src={progressImg} alt="Progress Tracking" className="w-44 h-44 object-cover rounded-xl mb-4 border-2 border-cyan-200" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-700">Progress Tracking</h3>
              <p className="text-base">Monitor your productivity and task completion with insightful analytics and charts.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg text-black text-center hover:scale-105 transition flex flex-col items-center min-w-[280px] max-w-xl w-full mx-auto">
              <img src={reminderImg} alt="Reminders" className="w-44 h-44 object-cover rounded-xl mb-4 border-2 border-cyan-200" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-700">Smart Reminders</h3>
              <p className="text-base">Get timely notifications so you never miss an important task or deadline.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg text-black text-center hover:scale-105 transition flex flex-col items-center min-w-[280px] max-w-xl w-full mx-auto">
              <img src={taskHero} alt="Task Creation" className="w-44 h-44 object-cover rounded-xl mb-4 border-2 border-cyan-200" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-700">Easy Task Creation</h3>
              <p className="text-base">Quickly add, edit, and organize your tasks with a clean, modern interface.</p>
            </div>
          </div>
        </section>
        {/* Contact / Signup Form */}
        <section ref={contactSectionRef} className="w-full flex flex-col items-center justify-center py-16 px-4 max-w-2xl mx-auto">
          <form className="bg-white bg-opacity-20 p-10 rounded-2xl shadow-2xl max-w-lg w-full mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-cyan-100 text-center">Contact</h3>
            <div className="mb-6">
              <label className="block text-cyan-100 text-lg mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded bg-white bg-opacity-20 text-cyan-900 placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-cyan-100 text-lg mb-2">Password</label>
              <input
                type="password"
                className="w-full p-3 rounded bg-white bg-opacity-20 text-cyan-900 placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-2xl w-full transition shadow-lg">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
