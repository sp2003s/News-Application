import React from "react";

const Subscribe = () => {
  return (
    <div>

      <h1 className="text-6xl p-2 text-center font-bold font-customFont">
        Daily Dispatch
      </h1>

      <br /><br />

      <div className="text-center w-full bg-white shadow-lg p-3 font-customFont text-xl">
        "It's not just any Subsription", it's your pass to stay ahead of social media news
        <br />
        The most trusted news of the nation  
      </div>

      <br /><br /> <br />

      <h1 className="text-center font-serif font-bold text-3xl">Choose your Plan: </h1> <br /><br /><br />

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-[1fr_1fr] gap-12 text-center">

          <div className="w-[20vw] rounded-md p-3 bg-orange-100 cursor-pointer">
            <p className="text-xl font-customFont">Daily+</p>
          </div>
          
          <div className="w-[20vw] rounded-md p-3 bg-orange-200 cursor-pointer">
            <p className="text-xl font-customFont">All Access+</p>
            <p className="text-sm font-extralight">Recommended</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Subscribe;
