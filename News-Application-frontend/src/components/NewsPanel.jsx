import React from "react";
import { newsData } from "../assets/assets.js";

const NewsPanel = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center font-serif text-2xl">NEWS</h1>
      <hr className="p-1 mt-3 border-t-2 border-black" />
      <hr className="p-1 border-t-2 border-black" />
      <hr className="p-1 border-t-2 border-black" />

      <br />
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-6">
        <div className="font-serif flex flex-col">
          <p className="text-2xl font-bold mb-5">India</p>

          {newsData.map(function (newsItem, index) {
            return (
              <div key={index}> <hr className="p-1 border-t-1 border-black"  />
                <div className="text-2xl font-light cursor-pointer">{newsItem.headline}</div>
                <div className="text-lg font-sans cursor-pointer">{newsItem.subheading}</div>
                <br />
              </div>
            );
          })}
        </div>

        <div className="font-serif flex flex-col">
          <p className="text-2xl font-bold mb-5">Breaking</p>

          {newsData.map(function (newsItem, index) {
            return (
              <div key={index}> <hr className="p-1 border-t-1 border-black"  />
                <div className="text-2xl font-light cursor-pointer">{newsItem.headline}</div>
                <div className="text-lg font-sans cursor-pointer">{newsItem.subheading}</div>
                <br />
              </div>
            );
          })}
        </div>

        <div className="font-serif flex flex-col">
          <p className="text-2xl font-bold mb-5">Most Popular</p>
          
          {newsData.map(function (newsItem, index) {
            return (
              <div key={index}> <hr className="p-1 border-t-1 border-black"  />
                <div className="text-2xl font-light cursor-pointer">{newsItem.headline}</div>
                <div className="text-lg font-sans cursor-pointer">{newsItem.subheading}</div>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsPanel;
