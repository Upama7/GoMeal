"use client";

import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

// popularlist
function PopularList() {
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
      src: "fishburger",
      alt: "fish burger ",
    },
    {
      name: "Beef Burger",
      src: "beefburger",
      alt: "beef burger ",
    },
    {
      name: "Cheese Burger",
      src: "cheeseburger",
      alt: "cheese burger ",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center gap-8">
        {popular.map(({ name, src, alt }, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl  relative py-8 px-14"
          >
            <div>
              <div
                onClick={() => handleClick(index)}
                className="flex justify-end "
              >
                <AiFillHeart
                  className={`text-3xl ${
                    liked.includes(index) ? "text-red-400" : "text-gray-200"
                  }`}
                />
              </div>
              <div>
                <img src={`./Assets/${src}.png`} alt={alt} />
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="pb-4 pt-8">
                <img src="./Assets/rate.png" alt="star" />
              </div>
              <div className="flex flex-wrap justify-between">
                <div>
                  <h3 className="">{name}</h3>
                  <p className="font-bold text-xl">
                    <span className="text-amber-400">$</span>5.59
                  </p>
                </div>
                <button className="px-3.5 bg-amber-400 text-white text-3xl rounded-lg">
                  +
                </button>
              </div>
            </div>
            <img
              className="absolute top-8 left-0"
              src="./Assets/ribbon.png"
              alt="ribbon"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default PopularList;
