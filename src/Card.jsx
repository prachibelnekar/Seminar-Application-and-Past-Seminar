import React from 'react';
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5"; // Import necessary icons

const Card = (props) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden ">
      <img src={props.imgsrc} className="w-full h-72 object-cover" alt={props.imgsrc} />
      <div className="p-4">
        <h5 className="font-bold text-lg mb-2">Title: {props.title}</h5>
        <h5 className="font-bold text-md mb-2">Date: {props.date}</h5>
        <p className="text-sm mb-2">Description: {props.description}</p>
        <div className="flex items-center ml-32 font-bold">Ratings : 
          {props.ratings.map((rating, index) => (
            <span className=""  key={index}>{rating}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
