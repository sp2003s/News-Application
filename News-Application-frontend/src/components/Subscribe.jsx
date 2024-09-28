import React from "react";
import { useState } from "react";

const Subscribe = () => {

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  }

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

          <div 
          onClick={() => handlePlanClick("daily")}
          className={`w-[20vw] rounded-md p-3 cursor-pointer ${
            selectedPlan === "daily" ? "border-b-4 border-orange-500" : ""
          } bg-orange-100`}>
            <p className="text-xl font-customFont">Daily+</p>
          </div>
          
          <div 
            onClick={() => handlePlanClick("all-access")}
            className={`w-[20vw] rounded-md p-3 cursor-pointer ${
              selectedPlan === "all-access" ? "border-b-4 border-orange-500" : ""
            } bg-orange-200`}
          >
            <p className="text-xl font-customFont">All Access+</p>
            <p className="text-sm font-extralight">Recommended</p>
          </div>

        </div>
      </div>

      <br /><br />

      <div className="text-center mt-6">
        {selectedPlan === "daily" && (
          <div className="border-t border-gray-300 pt-4">
            <h2 className="text-2xl font-bold">Daily+ Plan Details</h2>
            <p className="text-lg">Get daily updates with our exclusive news highlights.</p>
          </div>
        )}
        {selectedPlan === "all-access" && (
          <div className="border-t border-gray-300 pt-4">
            <h2 className="text-2xl font-bold">All Access+ Plan Details</h2>
            <p className="text-lg">Unlimited access to all news content and premium features.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Subscribe;
