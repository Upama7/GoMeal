"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

//navbar in leftdiv
function Navbar() {
  const pathname = usePathname();
  const nav = [
    {
      name: "Dashboard",
      src: "Restaurant Location",
      path: "/",
      alt: "dashboard",
    },
    {
      name: "Food Order",
      src: "Delivery Scooter",
      path: "",
      alt: "food order",
    },
    {
      name: "Favourite",
      src: "Review",
      path: "",
      alt: "favourite",
    },
    {
      name: "Message",
      src: "Order Discussion",
      path: "",
      alt: "message",
    },
    {
      name: "Order History ",
      src: "24 Hour Food Delivery",
      path: "",
      alt: "order history",
    },
    {
      name: "Bills",
      src: "Bill",
      path: "",
      alt: "bills",
    },
    {
      name: "Setting",
      src: "Setting (1)",
      path: "",
      alt: "setting",
    },
  ];

  return (
    <>
      <nav className="flex flex-col  space-y-6 ">
        {nav.map(({ name, src, path }) => (
          <div
            key={name}
            className={`${
              pathname === path ? "bg-amber-400 rounded-xl text-white   " : ""
            } flex items-center  gap-10 px-8  py-4  hover:text-white hover:bg-amber-400 hover:rounded-xl `}
          >
            <div className="object-contain">
              <img className="" src={`./Assets/${src}.png`} alt="" />
            </div>
            <Link key={name} href={path} className="text-xl opacity-60">
              {name}
            </Link>
          </div>
        ))}
      </nav>
    </>
  );
}

export default Navbar;
