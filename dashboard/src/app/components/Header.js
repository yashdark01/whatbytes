"use client";

export default function Header() {
  return (
    <header className=" text-black p-7 flex justify-between items-center border-b border-gray-200">
      <div className="font-semibold text-lg">WhatBytes</div>
      <div className="cursor-pointer hover:underline">My profile</div>
    </header>
  );
}
