import React from 'react';
import Card from "./Card.jsx";
import C_data from "./C_data.jsx";
import Footer from './Footer.jsx';

const Past_seminar = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center font-bold text-3xl">Past Seminar</h1>
      </div>
      <div className="container mx-auto mb-5 px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
          {C_data.map((val, idx) => {
            return (
              <Card 
                key={idx}
                imgsrc={val.imgsrc}
                title={val.title}
                date={val.date}
                description={val.description}
                ratings={val.ratings}
              />
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Past_seminar;
