import React from "react";

//mid category list
function CategoryList() {
  const category = [
    {
      name: "Bakery",
      src: "Baked",
      alt: "bakery",
    },
    {
      name: "Burger",
      src: "Burger",
      alt: "burger",
    },
    {
      name: "Beverage",
      src: "Coffee",
      alt: "coffee",
    },
    {
      name: "Chicken",
      src: "Chicken",
      alt: "chicken",
    },
    {
      name: "Pizza",
      src: "Fast",
      alt: "fast",
    },
    {
      name: "Seafood",
      src: "Fish",
      alt: "fish",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-around items-center gap-4">
        {category.map(({ name, src, alt }, index: any) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-white rounded-2xl  gap-2 w-40 h-40"
          >
            <img src={`./Assets/${src}.png`} alt={alt} />
            <p className="opacity-50">{name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CategoryList;
