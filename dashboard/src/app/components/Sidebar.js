"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaTachometerAlt, FaClipboardList, FaBriefcase } from "react-icons/fa";
import { usePathname } from "next/navigation";  // ✅ Correct in App Router


const sidebarLinks = [
  {
    title: "Dashboard",
    icon: <FaTachometerAlt size={20} />,
    path: "/Dashboard",
  },
  {
    title: "Skill Test",
    icon: <FaClipboardList size={20} />,
    path: "/SkillTest",
  },
  {
    title: "Internship",
    icon: <FaBriefcase size={20} />,
    path: "/Internship",
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  }

  return (
    <>
     
      <button
        className={`md:hidden fixed top-30 left-5 z-50  text-black p-1 mx-2 rounded transition duration-300 transform ${isOpen ? "translate-x-20" : "-translate-x-6"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 pl-0  transition duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-64 md:min-h-screen transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex md:hidden text-black p-7justify-between items-center font-semibold text-lg border-b border-gray-200">WhatBytes</div>
        <nav className="flex flex-col space-y-4 mt-6">
          {sidebarLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              style={style}
              className="flex items-center font-bold space-x-4 text-gray-600 hover:bg-gray-50 hover:text-blue-600 p-4 rounded-r-full mr-2"
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          ))}

        </nav>
      </aside>

      {/* Overlay for mobile
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}
    </>
  );
}