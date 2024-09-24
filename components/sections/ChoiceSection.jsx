"use client";

import React from "react";


const RightChoiceSection = () => {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
              DON'T FALL FOR THE EASY ONE
            </h2>
            <h1 className="text-4xl sm:text-5xl font-viaoda text-dark-100 mb-4">
              Make The Right Choice!
            </h1>
            <p className="text-gray-700 font-viaoda body-medium mb-8">
              It's not just about the food you eat; how you cook and consume
              your food matters!
            </p>
            <div className="space-y-6">
              
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/images/brsg.png"
              alt="Ayurvedic utensils and spices"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightChoiceSection;
