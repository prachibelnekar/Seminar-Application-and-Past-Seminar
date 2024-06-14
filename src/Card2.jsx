import React from 'react';
import { NavLink } from 'react-router-dom';

const Card2 = (props) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md ">
      <img src={props.imgsrc} className="w-full h-72 object-cover" alt={props.imgsrc} />
      <div className="p-4">
        <h5 className="font-bold text-lg mb-2">Title: {props.title}</h5>
        <h5 className="font-bold text-md mb-2">Date: {props.date}</h5>
        <p className="text-sm mb-2">Description: {props.description}</p>
        <h5 className="font-bold text-md mb-2">Time: {props.time}</h5>
        <h5 className="font-bold text-md mb-2">Venue: {props.venue}</h5>
        <NavLink to="/Seminar_application" className="bg-red-900 text-white py-2 px-4 rounded inline-block">
          Application
        </NavLink>
      </div>
    </div>
  );
};

export default Card2;
