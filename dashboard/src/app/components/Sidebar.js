"use client";

import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FaTachometerAlt, FaClipboardList, FaBriefcase } from 'react-icons/fa';

const sidebar = [
    {
      title: "Dashboard",
      icon: <FaTachometerAlt size={20} />,
      path: "/Dashboard",
    },
    {
      title: "Skill Test",
      icon: <FaClipboardList size={20}/>,
      path: "/SkillTest",
    },
    {
      title: "Internship",
      icon: <FaBriefcase size={20}/>,
      path: "/Internship",
    },
  ];

export default function Sidebar() {
  
  return (
    <aside className=" w-64 h-screen py-7 border-r border-gray-200">
      <div className="relative">
        <button className=" flex md:hidden">
          <FiMenu size={24} />
        </button>

        <nav className="flex flex-col space-y-4 py-6 relative pr-3">
          {sidebar.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className={`flex items-center font-semibold space-x-4 w-full  text-gray-600 hover:bg-gray-50 hover:text-blue-600 p-5 rounded-r-full`}
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
