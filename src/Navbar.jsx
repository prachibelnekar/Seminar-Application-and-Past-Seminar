import React from 'react';
import web from "../src/images/logo.jpeg";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-900 w-full mr-56">
      <NavLink to="/" className="flex items-center">
        <img src={web} className="h-28 w-28 rounded-full ml-24" alt="logo" />
      </NavLink>
      <div className="hidden lg:flex items-center gap-12">
        <NavLink
          exact
          className="text-white text-2xl mx-8 hover:bg-slate-300  hover:text-slate-950 hover:rounded-xl w-24"
          activeClassName="menu_active"
          aria-current="page"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-white text-2xl mx-8 hover:bg-slate-300 hover:text-slate-950 hover:w-40 hover:rounded-xl"
          activeClassName="menu_active"
          to="/past_seminar"
        >
          Past Seminar
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
