import React from "react";

function ROrderList() {
  const food = [
    {
      src: "pizza",
      name: "Pepperoni Pizza",
      alt: "pepperoni pizza",
      p: "x1",
    },
    {
      src: "burger2",
      name: "Cheese Burger",
      alt: "cheese burger",
      p: "x1",
    },
    {
      src: "vegan",
      name: "Vegan Pizza",
      alt: "vegan pizza",
      p: "x1",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 ">
        {food.map(({ src, alt, name, p }, index) => (
          <div key={index} className="flex gap-4 justify-between items-center">
            <div className="flex items-center gap-4">
              <img src={`./Assets/${src}.png`} alt={alt} />
              <div>
                <h4 className="font-bold">{name}</h4>
                <p className="opacity-50 text-sm">{p}</p>
              </div>
            </div>
            <div>
              <p className="font-bold ">
                +<span className="text-amber-400">$</span>5.59
              </p>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </>
  );
}

export default ROrderList;
