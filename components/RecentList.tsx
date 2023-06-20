"use client";

import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

function RecentList() {
  const [liked, setLIked] = useState<any>([]);
  // console.log(liked);

  const handleClick = (index: any) => {
    // Handle the click event using the provided index
    // console.log("Clicked element at index:", index);
    if (liked.includes(index)) {
      // filter to remove element from the previous array
      const newArr = liked.filter((element: any) => element !== index);
      // console.log(newArr);
      setLIked([...newArr]);
    } else {
      setLIked([...liked, index]);
    }
  };

  const popular = [
    {
      name: "Fish Burger",
      src: "pizzaro",
      alt: "fish burger ",
    },
    {
      name: "Japan Ramen",
      src: "ramen",
      alt: "japan Ramen",
    },
    {
      name: "Fried Rice",
      src: "shrimp",
      alt: "fried rice",
    },
  ];
  return (
    <>
      <div className="flex justify-center gap-8">
        {popular.map(({ name, src, alt }, index: any) => (
          <div
            key={index}
            className="bg-white rounded-2xl  flex flex-col justify-center items-center relative py-20 px-20"
          >
            <img src={`./Assets/${src}.png`} alt="" />
            <h3 className="">{name}</h3>
            <p className="text-2xl font-bold">
              <span className="text-amber-400">$</span>5.59
            </p>
            <p className="opacity-50 text-sm">
              4.97 km <span>.</span> 21 km
            </p>
            <div onClick={() => handleClick(index)} className="">
              <AiFillHeart
                className={`text-3xl absolute top-6 right-10 ${
                  liked.includes(index) ? "text-red-500" : "text-gray-200"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default RecentList;
