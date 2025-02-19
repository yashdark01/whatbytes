"use client";
import { FiUser } from "react-icons/fi";
export default function Header() {
  return (
    <header className=" text-black p-7 flex justify-between items-center border-b border-gray-200">
      <div className="font-semibold text-lg">WhatBytes</div>
      <div className="cursor-pointer flex justify-between gap-2 items-center text-sm font-semibold text-black hover:bg-gray-100 px-2 py-1 border border-gray-200 rounded-lg">
        <span className = "p-2 bg-gray-200 rounded-full">
          <FiUser size={20}/>
        </span>
        <span>
        Rahul Siddique
        </span>
         </div>
    </header>
  );
}
