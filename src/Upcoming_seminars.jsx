import React from 'react';
import Card2 from "./Card2.jsx";
import C2_data from "./C2_data.jsx";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const Upcoming_seminars = () => {
  return (
    <>
      <div className="my-8">
      
        <h1 className="text-center font-bold text-5xl" >Upcoming Seminar</h1>
      </div>
      <div className="container mx-auto mb-5 px-2 w-[4824px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 ">
          {C2_data.map((val, idx) => {
            return (
              <Card2 
                key={idx}
                imgsrc={val.imgsrc}
                title={val.title}
                date={val.date}
                description={val.description}
                venue={val.venue}
                time={val.time}
              />
            );
          })}
        </div>
      </div>
      </>
  )
}

export default Upcoming_seminars