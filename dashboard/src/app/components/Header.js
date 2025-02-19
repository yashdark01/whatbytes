"use client";
import { FiUser } from "react-icons/fi";
export default function Header() {
  return (
    <header className=" text-black p-7 h-16 md:h-20 flex justify-between items-center border-b border-gray-200">
      <div className="font-semibold text-lg">WhatBytes</div>
      <div className="cursor-pointer flex justify-between gap-2 items-center text-sm font-semibold text-black hover:bg-gray-100 p-1 md:p-0 md:px-2 md:py-1 border border-gray-200 rounded-full md:rounded-lg">
        <span className = "p-1 md:p-2 bg-gray-200 rounded-full">
          <FiUser size={20}/>
        </span>
        <span className="hidden md:block ">
        Rahul Siddique
        </span>
         </div>
    </header>
  );
}
