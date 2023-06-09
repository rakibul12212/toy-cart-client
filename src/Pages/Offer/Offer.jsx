import React from 'react';
import './Offer.css';

const Offer = () => {
  return (
    <>
      <div className="bg-slate-100 grid md:grid-cols-2 gap-4 p-5 md:p-20">
        <div className="p-5">
          <h1 className="text-2xl md:text-4xl p-2 md:p-5">Today's Hot Offer</h1>
          <h1 className="text-bold text-4xl md:text-6xl text-red-500 p-2 md:p-5 animate-bounce">Summer Sale</h1>
          <p className="p-2 md:p-5">
            Cur tantas regiones barbarorum obiit, tot maria transmist summo bono fruitur id est voluptate barbarorum
          </p>
          <div className="flex flex-wrap gap-5 p-2 md:p-5">
            <div>
              <span className="countdown font-mono text-4xl md:text-4xl">
                <span style={{ "--value": 15 }}></span>
              </span>
              days
            </div>
            <div>
              <span className="countdown font-mono text-4xl md:text-4xl">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div>
              <span className="countdown font-mono text-4xl md:text-4xl">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div>
              <span className="countdown font-mono text-4xl md:text-4xl">
                <span style={{ "--value": 52 }}></span>
              </span>
              sec
            </div>
          </div>
          <div className="p-2 md:p-5">
          <button  type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 " >View Toys</button>
          </div>
        </div>
        <div >
          <img className="mx-auto max-w-full h-auto animate-pulse" src="https://cdn-icons-png.flaticon.com/512/6688/6688164.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Offer;
