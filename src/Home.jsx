import React from 'react';
import { NavLink } from 'react-router-dom';
import seminar from '../src/images/seminar4.avif';
import Upcoming_seminars from './Upcoming_seminars';
import Footer from './Footer.jsx';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-[650px] flex justify-center items-center">
        <div className="flex flex-col sm:flex-row w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full ml-6 sm:ml-24">
            {/* Text Content Section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 sm:text-left order-2 sm:order-1 relative  px-4 sm:px-0">
              <h1 className="text-sm sm:text-4xl lg:text-5xl font-bold text-slate-950">EXPLORE,</h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900">ENGAGE</h1>
              <h1 className=" sm:text-6xl text-[70px] lg:text-7xl font-bold text-slate-700">
                AND ELEVATE YOUR SKILLS
              </h1>
              <NavLink to="/Seminar_application" className="text-white bg-yellow-600 py-2 px-4 rounded-full text-center inline-block w-32">
                Application
              </NavLink>
            </div>
            {/* Image Section */}
            <div className="order-1 sm:order-2 w-[640px] px-4 sm:px-0 p-10 bg-red-800 ">
              <img src={seminar} alt="seminar" className="w-full h-[600px] rounded-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Upcoming Seminars Section */}
      <Upcoming_seminars />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
